function maxFreq(arr1) {
    //using moore's voting algorithm
    var res = 0;
    var count = 1;
    var n = arr1.length;
    for (let i = 1; i < n; i++) {
        if (arr1[i] === arr1[res]) {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            res = i;
            count = 1;
        }
    }

    return arr1[res];
}

var arr1 = [2, 'b', 1, 'a', 2, 6, 'a', 3, 'b', 2, 9, 3, 2];
var freq = maxFreq(arr1);
var count = 0;
var n = arr1.length;
for (var i = 0; i < n; i++) {
    if (arr1[i] === freq) {
        count++;
    }
}
console.log(`Max frequent Item is ${freq} with count: ${count}`);

