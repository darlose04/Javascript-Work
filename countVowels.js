function countVowels(string) {
    var stringList = string.toLowerCase().split('');

    var a = [];
    var e = [];
    var i = [];
    var o = [];
    var u = [];
    var total = 0;

    for (x = 0; x < stringList.length; x++) {
        if (stringList[x] === 'a') {
            a.push(stringList[x]);
            total ++;
        } else if (stringList[x] === 'e') {
            e.push(stringList[x]);
            total++;
        } else if (stringList[x] === 'i') {
            i.push(stringList[x]);
            total++;
        } else if (stringList[x] === 'o') {
            o.push(stringList[x]);
            total++;
        } else if (stringList[x] === 'u') {
            u.push(stringList[x]);
            total++;
        }
    }
    console.log("a: " + a.length);
    console.log("e: " + e.length);
    console.log("i: " + i.length);
    console.log("o: " + o.length);
    console.log("u: " + u.length);
    console.log("total: " + total);
    
}

countVowels("aeiouaeiouaeiou");
