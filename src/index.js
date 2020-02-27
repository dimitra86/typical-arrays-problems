exports.min = function min(array) {
    if (array.length == '') { return 0; } else
        return Math.min.apply(null, array);

}

exports.max = function max(array) {
    return Math.max.apply(null, array);
}

exports.avg = function avg(array) {
    let sum = 0;
    let len = array.length;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
        let result = sum / len;
        return result;
    }
}
