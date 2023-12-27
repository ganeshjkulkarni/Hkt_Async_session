function multiplyby10(element) {
    return element * 10
}

function mapArray(array, callback) {
    var new_array = array.map(function(element) {
        return callback(element)
    })
    return new_array
}

console.log(mapArray([3, 4, 5], multiplyby10))