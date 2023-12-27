function printSomething() {
    console.log("Hello Sync")
}
function higherOrder(callback) {
    callback()
}

higherOrder(printSomething)