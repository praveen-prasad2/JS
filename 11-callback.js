function printDelayedMsg(msg,func) {

    setTimeout(function () {
        console.log(msg)
        func()
    }, 2000)
}


function printHi() {
    console.log("Hi")
}
printDelayedMsg("Hello", printHi)

