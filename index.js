
function shout(string) {
  return string.toUpperCase()
}
/*-----------------------------------------*/
function whisper(string) {
  return string.toLowerCase()
}
/*------------------------------------------*/
function logShout(string) {
  console.log (string.toUpperCase())
}
console.log('hello')
/*--------------------------------------------*/
function logWhisper(string) {
  console.log (string.toLowerCase())
}
console.log('HELLO')
/*-------------------Version 1-------------------------*/

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can\'t hear you!" 
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string === "Let\'s have dinner together!") {
    return "I would love to!"
  } else
    return "Doesn\t meet requirements!"
}
console.log (sayHiToHeadphonedRoommate("Hello"))
console.log (sayHiToHeadphonedRoommate("HELLO"))
console.log (sayHiToHeadphonedRoommate("Let\'s have dinner together!"))

/*-------------------Version 2-------------------------*/
/*
  function sayHiToHeadphonedRoommate(string) {
 
    switch (string) {  
      case string.toLowerCase():
       return "I can\'t hear you!"
      case string.toUpperCase():
       return "YES INDEED!"
      case "Let\'s have dinner together!":
       return "I would love to!"
      default: 
       return "Not sure!"
    }
   }
  console.log (sayHiToHeadphonedRoommate("hello"))
  console.log (sayHiToHeadphonedRoommate("HELLO"))
  console.log (sayHiToHeadphonedRoommate("Let\'s have dinner together!"))
  */