const puppeteer = require("puppeteer");
const mongoose = require("mongoose");
const Book = require("./models/book");

async function run() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto("https://books.toscrape.com/");
    // await page.screenshot({path: "screenshots/books.png"});

    // html selectors for the title and price elements. length selector class indicates which class the title and price are under
    const LIST_TITLE_SELECTOR = "#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(INDEX) > article > h3 > a";
    const LIST_PRICE_SELECTOR = "#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(INDEX) > article > div.product_price > p.price_color";
    const LENGTH_SELECTOR_CLASS = "product_pod";

    // iterates through every page listing books and their prices
    for (let h = 1; h <= 50; h++) {

        let pageUrl = `http://books.toscrape.com/catalogue/page-${h}.html`;

        await page.goto(pageUrl);

        let listLength = await page.evaluate((sel) => {
            return document.getElementsByClassName(sel).length;
        }, LENGTH_SELECTOR_CLASS);

        // console.log(listLength);
        // console.log("================");

        // iterates through the title and price selectors for each book on each page
        for (let i = 1; i <= listLength; i++) {
            let titleSelector = LIST_TITLE_SELECTOR.replace("INDEX", i);
            let priceSelector = LIST_PRICE_SELECTOR.replace("INDEX", i);

            let title = await page.evaluate((sel) => {
                return document.querySelector(sel).innerHTML;
            }, titleSelector);
            // console.log(title);

            let price = await page.evaluate((sel) => {
                return document.querySelector(sel).innerHTML;
            }, priceSelector);
            // console.log(price);

            console.log(title, ": ", price);

            // inserts the book title and price into the MongoDB database 
            upsertBook({
                title: title,
                price: price
            });
  
        }

    }
    browser.close();
}

// this function checks if the title is already in the database and updates or inserts the book
function upsertBook(bookObj) {
    const DB_URL = "mongodb://localhost:27017/book_scrape";

    if (mongoose.connection.readyState == 0) {mongoose.connect(DB_URL);}

    let conditions = { title: bookObj.title};
    let options = { upsert: true, new: true, setDefaultsToInsert: true};

    Book.findOneAndUpdate(conditions, bookObj, options, (err, result) => {
        if (err) throw err;
    });

}

run()