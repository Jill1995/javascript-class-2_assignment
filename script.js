let num = Math.floor(Math.random() * 10);

//using 'true' as expression for switch as we want to know the true false value of the condition.
switch (true) {
  case num % 2 === 0:
    console.log("number is even");
    break;
  default:
    console.log("number is odd");
}

if (num % 2 != 0) {
  console.log("num is odd");
} else {
  console.log("num is even");
}

// 2ND EXERCISE
let rolled = Math.ceil(Math.random() * 6);
if (rolled > 3) {
  console.log("you rolled " + rolled);
} else {
  console.log("boooo");
}

//3RD EXERCISE
//looping once n then until rolled < 3
//declare an array which stores all the values of rolled in the loop.
let times = [];
do {
  rolled = Math.ceil(Math.random() * 6);
  console.log(rolled);
  times.push(rolled); //push every value of rolled into the array
  // max_time++;
} while (rolled < 4);
//print length of an array to print number of times loop ran
console.log("number of times the loop ran is " + times.length);

//4TH EXERCISE
let x = 7;
let factOf = x;
for (let i = factOf - 1; i >= 1; i--) {
  factOf *= i;
}
console.log(x + "!" + " = " + factOf);

//5TH EXERCISE
let numOfLines = 9;
let char = "*";
for (let row = 1; row <= numOfLines; row++) {
  for (let column = 1; column < row; column++) {
    //nested loop. form a matrix and fill in patter
    char = char + "*";
  }
  console.log(char);
  char = "*";
}

//6TH EXERCISE
let size = 8;
let pattern = ""; //will change to ' ' or '#' or new line
for (let x = 1; x <= size; x++) {
  for (let y = 1; y <= size; y++) {
    if ((x + y) % 2 == 0) {
      //there is a star every alternate position
      pattern += "#";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}
console.log(pattern);

//7th EXERCISE
// initialize the variables
let freeTimeBetClass, howLong, unfinishHW;

// get input for the first checkpoint
freeTimeBetClass = prompt("Do I have free time in between two classes? Y/N ");

// create the first decision
if (freeTimeBetClass === "Y") {
  // i am free, now ask for how much time
  howLong = prompt("How many hours do I have?");
  if (howLong <= 2) {
    unfinishHW = prompt("Do I have unfinished assignments? Y/N");
    if (unfinishHW === "Y") {
      console.log("stay at D12 and finish them");
    } else {
      console.log("Go get some food");
    }
  } else {
    // ok - not enough money, raid the fridge!
    console.log("Go home and get some rest");
  }
} else {
  // not hungry
  console.log("Go to the next class");
}
