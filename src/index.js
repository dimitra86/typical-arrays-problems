exports.min = function min(array) {
    let arr = array.sort();
    return arr[0];
}

exports.max = function max(array) {
    return 0;
}

exports.avg = function avg(array) {
    let result = array.reduce((sum, current) => (sum + current) / 2, 0);
    return result;
}