'use strict';
// add up answers correct
var numCorrect = [];

var questions = ['Lets play an awesome game about me, do I like sports?',
  'Was I from Arizona?',
  'I\'m I younger than 26?',
  'I\'m I the coolest?',
  'Was I in the Army?'];
var answers = ['YES', 'YES', 'NO', 'YES', 'YES'];
var rightResponses = ['Correct! I like pretty much all sports.',
  'Good job!', 'Right, your awesome!', 'Of course you know that!',
  'Correct I served over 5 years in the Army.'];
var wrongResponses = ['Wrong, sports are fun!',
  'Wrong! I grew up in Cave Creek, Arizona.',
  'Wrong, you should know I am 27!',
  'Sorry, that is incorrect!',
  'Wrong, can\'t you tell.'];

// First five questions
function firstFive() {
  for (var i = 0; i < questions.length; i++) {
    var response = prompt(questions[i]).toUpperCase();

    if (response === 'Y') {
      response = 'YES';
    } else if (response === 'N') {
      response = 'NO';
    }

    if (response === answers[i]) {
      alert(rightResponses[i]);
      numCorrect.push(1);
    } else {
      alert(wrongResponses[i]);
    }
    console.log('The questions was: ' + questions[i]);
    console.log('The user said ' + response);
  }
}

firstFive();
//
// //Question 2
// function question2() {
//   var state = prompt('Was I from Arizona?').toUpperCase();
//
//   if (state === 'YES' || state === 'Y') {
//     alert('Good job!');
//     numCorrect.push (1);
//   } else if (state === 'NO' || state === 'N') {
//     alert('Wrong! I grew up in Cave Creek, Arizona.');
//   } else {
//     alert('Invaild response');
//   }
//   console.log('The user said ' + state + ' concering if I lived in AZ');
// }
//
// question2();
//
// //Question 3
// function question3() {
//   var age = prompt('I\'m I younger than 26?').toUpperCase();
//
//   if (age === 'YES' || age === 'Y') {
//     alert('Wrong, you should know I am 27!');
//   } else if (age === 'NO' || age === 'N') {
//     alert('Right, your awesome!');
//     numCorrect.push (1);
//   } else {
//     alert('Invaild response');
//   }
//   console.log('The user said ' + age + ' on age question');
// }
//
// question3();
//
// //Question
// function question4() {
//   var cool = prompt('I\'m I the coolest?').toUpperCase();
//
//   if (cool === 'YES' || cool === 'Y') {
//     alert('Of course you know that!');
//     numCorrect.push (1);
//   } else if (cool === 'NO' || cool === 'N') {
//     alert('Sorry, that is incorrect!');
//   } else {
//     alert('Invaild response');
//   }
//   console.log('The user said ' + ' on if I was cool');
// }
//
// question4();
//
// //Question 5
// function question5() {
//   var army = prompt('Was I in the Army?').toUpperCase();
//
//   if (army === 'YES' || army === 'Y') {
//     alert('Correct I served over 5 years in the Army.');
//     numCorrect.push (1);
//   } else if (army === 'NO' || army === 'N') {
//     alert('Wrong, can\'t you tell.');
//   } else {
//     alert('Invaild response');
//   }
//   console.log('The user response was ' + army + ' on if I was in the army');
// }
//
// question5();

// Question 6
function question6() {
  var counter = 0;

  while (counter <= 4) {
    if (counter === 4) {
      alert('Your out of guesses');
      break;
    }
    var guess = prompt('What is my favorite number 1-20?');
    if (parseInt(guess) > 7) {
      alert('Too high');
      counter++;
    } else if (parseInt(guess) < 7) {
      alert('Too low');
      counter++;
    }
    else if (parseInt(guess) == 7) {
      alert('Good guess!');
      numCorrect.push (1);
      break;
    } else {
      alert('Please provide a integer');
    }
  }
  console.log(' The user played my number guessing game');
}

question6();

// Question 7
function question7() {
  var fruit = ['apple', 'bananna', 'orange', 'mango'];
  var numGuess = 6;

  while(numGuess > 0) {
    if (numGuess === 0) {
      alert('Out of guesses');
      break;
    }
    var userguess = prompt('What is my favorite fruits?').toLowerCase();
    for (var i = 0; i < fruit.length; i++) {
      if(userguess === fruit[i]) {
        alert('Good guess!');
        numCorrect.push (1);
        numGuess = -1;
        break;
      }
    }
    if(numGuess > 0) {
      numGuess--;
      alert('You have ' + numGuess + ' tries left');
    }
  }
  console.log('The user played my favorite fruit guessing game');

  alert(numCorrect.length + ' out of 7 correct!');
}

question7();
//end of js
