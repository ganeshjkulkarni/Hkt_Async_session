function filterArray(array, callback) {
   return array.filter(callback)
}

function filterFunction(num) {
    return num > 10
}

console.log(filterArray([1, 21, 5, 8, 23, 11, 10], filterFunction))