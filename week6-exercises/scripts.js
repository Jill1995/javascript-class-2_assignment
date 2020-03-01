/*
 * Class 6: Class Exercises
 */

// 1. Create a simple function that can reverse
//the contents of a sentence, word, phrase.

let sentence = "If you are happy and you know it clap your hands.";

function reverseText(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return console.log(newString);
}

reverseText(sentence);

//2. Create a function that will accept a date or
//year and calculate if it falls on a Leap Year.

//first condition - divisible by 4;
//if yes, check if divisible by 100;
//if no - leap year, if yes, check if divisible by 400;
//if yes then leap year

var year = prompt("Validate if leap year for year:");

function leapYearValidation(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(year + " is a leap year: " + leapYearValidation(year));

//3. Create a function that can perform a word count,
//given a block of text.
//Punctuations or special characters are not to be included.
var para = " My name is Jill.I am 24 years old and studying at*Parsons";
function countWords(str) {
  var count = 0;
  for (var i = 1; i <= str.length; i++) {
    if (str.charAt(i) == " " || str.charCodeAt(i) < 48) {
      count++;
    }
  }
  return count + 1;
}

console.log(countWords(para));

//4. Create a function that checks a string or sentence
//and returns true if that parameter is a palindrome,
//(the string is the same forward as it is backward).

function checkPalindrome(string) {
  var check = "";
  for (var i = string.length - 1; i >= 0; i--) {
    check += string[i];
  }

  console.log(check);
  if (check === string) {
    return true;
  } else {
    return false;
  }
}

string = "filif";
console.log(checkPalindrome(string));

// 5. Create a para tag in html. Update the style of the
//first para tag to use a different font family,
//color and or size.

//method 1
var para = document.getElementById("changeP");

para.style.fontSize = "30" + "px";
para.style.color = "red";

//method 2
document.getElementById("P").style.fontFamily = "Impact,Charcoal, sans-serif";

// //6. create a table and paint alternative colors:

var x = document.getElementsByTagName("td");
for (var i = 0; i < x.length; i++) {
  if (i % 2 == 0) {
    x[i].style.backgroundColor = "yellow";
  } else {
    x[i].style.backgroundColor = "red";
  }
}

// // 7. Write a script that, on click of a button,
//can randomly select an image from a list and insert
//it inside the section tag in the html.
//eg. https://source.unsplash.com/random

var btn = document.createElement("BUTTON");
btn.innerHTML = "Insert Picture";
btn.setAttribute("id", "myBtn");
btn.setAttribute("onclick", "addImg()");
document.body.appendChild(btn);

var img = document.createElement("img");
img.setAttribute("height", "200px");
img.setAttribute("width", "200px");
img.setAttribute("id", "image");

function addImg() {
  // img.parentNode.removeChild(img);
  img.src = "https://source.unsplash.com/random";
  // display the image
  document.body.appendChild(img);
}
