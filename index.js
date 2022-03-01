function shout(string) {
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    const spy = "hello"
console.log (spy.toUpperCase());
return string.toUpperCase()
}

function logWhisper(string){
    const spy = "HELLO"
    console.log (spy.toLowerCase());
    return string.toLowerCase()
}





function sayHiToHeadphonedRoommate(string){
    const sayHiToHeadphonedRoommate = "hello"
    if (string.toLowerCase() === string) {
        return `I can't hear you!` 
    }

    if (string.toUpperCase() === string) {
        return "YES INDEED!"
    }

    if (string === `Let's have dinner together!`) {
        return "I would love to!"
    }
}