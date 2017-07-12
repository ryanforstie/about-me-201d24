'use strict';

var sports = prompt('Lets play an awesome game about me, do I like sports?').toUpperCase();

if (sports === 'YES' || sports === 'Y') {
  alert('Correct! I like pretty much all sports.');
} else if (sports === 'NO' || sports === 'N') {
  alert('Wrong, sports are fun!');
} else {
  alert('Invaild response');
}
console.log('The user said ' + sports);

var state = prompt('Was I from Arizona?').toUpperCase();

if (state === 'YES' || state === 'Y') {
  alert('Good job!');
} else if (state === 'NO' || state === 'N') {
  alert('Wrong! I grew up in Cave Creek, Arizona.');
} else {
  alert('Invaild response');
}
console.log('The user said ' + state);

var age = prompt('I\'m I younger than 26?').toUpperCase();

if (age === 'YES' || age === 'Y') {
  alert('Wrong, you should know I am 27!');
} else if (age === 'NO' || age === 'N') {
  alert('Right, your awesome!');
} else {
  alert('Invaild response');
}
console.log('The user said ' + age);

var cool = prompt('I\'m I the coolest?').toUpperCase();

if (cool === 'YES' || cool === 'Y') {
  alert('Of course you know that!');
} else if (cool === 'NO' || cool === 'N') {
  alert('Sorry, that is incorrect!');
} else {
  alert('Invaild response');
}
console.log('The user said ' + cool);

var army = prompt('Was I in the Army?').toUpperCase();

if (army === 'YES' || army === 'Y') {
  alert('Correct I served over 5 years in the Army.');
} else if (army === 'NO' || army === 'N') {
  alert('Wrong, can\t you tell.');
} else {
  alert('Invaild response');
}
console.log('The user response was ' + army);

var counter = 0;

while (counter < 4 && guess != 7) {
  var guess = prompt('What is my favorite number 1-20?');
  if (parseInt(guess) === 7) {
    alert('Good!');
  } else if (parseInt(guess) > 7) {
    alert('High');
    counter += 1;
  } else if (parseInt(guess) < 7) {
    alert('Low');
    counter ++;
  }
}
console.log('counter:', counter);
