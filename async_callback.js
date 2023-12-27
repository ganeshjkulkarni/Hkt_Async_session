function printSomething() {
    console.log("Hello Async")
}

function getDayofMonth(){
    var day = new Date().getUTCDate()
    console.log("Wait for " + day + " seconds")
    return day
}

function higherOrderAsync(callback) {
    setTimeout(callback, getDayofMonth() * 1000)
    console.log("Timer is set.")
}

higherOrderAsync(printSomething)

