const fs = require("fs")

function printFileContents(err, data){
    if (err){

    }else {
        console.log(data)
    }
}

function readFileCallback(filename, callback) {

    fs.readFile(filename, 'utf8', callback)

}

readFileCallback("async_callback.js", printFileContents)
