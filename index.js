function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log('Hello'.toUpperCase());
}

function logWhisper(string) {
  console.log('Hello'.toLowerCase());
}

var a = 'hello';
var b = "hello".toUpperCase();
var c = "I love u, Grandma";

function sayHiToGrandma(string) {
  if (a) {
    return "I can't hear you!";
  } else if ('hello'.toUpperCase()) {
    return "YES INDEED!";
  } else if (c) {
    return "I love you, too.";
  }
}
