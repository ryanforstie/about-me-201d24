'use strict';
var numCorrect = [];

var sports = prompt('Lets play an awesome game about me, do I like sports?').toUpperCase();

if (sports === 'YES' || sports === 'Y') {
  alert('Correct! I like pretty much all sports.');
  numCorrect.push (1);
} else if (sports === 'NO' || sports === 'N') {
  alert('Wrong, sports are fun!');
} else {
  alert('Invaild response');
}
console.log('The user said ' + sports);

var state = prompt('Was I from Arizona?').toUpperCase();

if (state === 'YES' || state === 'Y') {
  alert('Good job!');
  numCorrect.push (1);
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
  numCorrect.push (1);
} else {
  alert('Invaild response');
}
console.log('The user said ' + age);

var cool = prompt('I\'m I the coolest?').toUpperCase();

if (cool === 'YES' || cool === 'Y') {
  alert('Of course you know that!');
  numCorrect.push (1);
} else if (cool === 'NO' || cool === 'N') {
  alert('Sorry, that is incorrect!');
} else {
  alert('Invaild response');
}
console.log('The user said ' + cool);

var army = prompt('Was I in the Army?').toUpperCase();

if (army === 'YES' || army === 'Y') {
  alert('Correct I served over 5 years in the Army.');
  numCorrect.push (1);
} else if (army === 'NO' || army === 'N') {
  alert('Wrong, can\'t you tell.');
} else {
  alert('Invaild response');
}
console.log('The user response was ' + army);

// Question 6
var counter = 0;

while (counter < 4) {
  var guess = prompt('What is my favorite number 1-20?');
  if (parseInt(guess) > 7) {
    alert('High');
    counter++;
  } else if (parseInt(guess) < 7) {
    alert('Low');
    counter++;
  }
  else if (parseInt(guess) == 7) {
    alert('Good!');
    numCorrect.push (1);
    break;
  }
  else if (counter === 4) {
    alert('Your out of guesses');
  } else {
    alert('Please provide a integer');
  }
}

// Question 7
var fruit = ['apple', 'bananna', 'orange', 'mango'];
var numGuess = 6;

while(numGuess > 0) {
  var userguess = prompt('What is my favorite fruits?').toLowerCase();
  for (var i = 0; i < fruit.length; i++) {
    if(userguess === fruit[i]) {
      alert('Good');
      numCorrect.push (1);
      numGuess = -1;
      break;
    }
  }
  if(numGuess > 0) {
    numGuess--;
    alert('keep trying ' + numGuess + ' tries left');
  }
  if (numGuess === 0) {
    alert('Out of guesses');
  }
}

alert(numCorrect.length + ' out of 10 correct!');
//end of js
