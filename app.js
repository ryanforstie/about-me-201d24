'use strict';

var question1 = prompt('Are you ready to play an awesome game?');
if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
  alert('Lets go!');
} else if (question1.toUpperCase() == 'NO' || question1.toUpperCase() == 'N') {
  alert('Too bad you get to play anyway!');
} else {
  alert('Invaild response');
}
console.log('The user said ' + question1);

var question2 = prompt('Im I from Arizona?');
if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y') {
  alert('Good job!');
} else if (question2.toUpperCase() == 'NO' || question2.toUpperCase() == 'N') {
  alert('Wrong!');
} else {
  alert('Invaild response');
}
console.log('The user said ' + question2);

var question3 = prompt('Im I younger than 26?');
if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
  alert('Wrong, you should know this!');
} else if (question3.toUpperCase() == 'NO' || question3.toUpperCase() == 'N') {
  alert('Right, your awesome!');
} else {
  alert('Invaild response');
}
console.log('The user said ' + question3);

var question4 = prompt('Im I the coolest?');
if (question4.toUpperCase() === 'YES' || question4.toUpperCase() === 'Y') {
  alert('Of course you know that!');
} else if (question4.toUpperCase() == 'NO' || question4.toUpperCase() == 'N') {
  alert('Sorry, that is incorrect!');
} else {
  alert('Invaild response');
}
console.log('The user said ' + question4);

var question5 = prompt('Did you enjoy the quiz?');
if (question5.toUpperCase() === 'YES' || question5.toUpperCase() === 'Y' {
  alert('Yes it was an awesome quiz!');
} else if (question5.toUpperCase() == 'NO' || question5.toUpperCase() == 'N') {
  alert('You know it was awesome!');
} else {
  alert('Invaild response');
}
console.log(question5 + ' user said it was his favorite quiz');
