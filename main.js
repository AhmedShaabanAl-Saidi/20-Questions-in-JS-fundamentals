// 1- Write a program that allow to user enter number then print it
// var userNumber = Number(window.prompt("Enter Number: "));
// console.log(userNumber);

// 2- Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
// var userNumber = Number(window.prompt("Enter Number: "));
// if (userNumber % 3 == 0 && userNumber % 4 == 0) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// 3- Write a program that allows the user to insert 2 integers then print the max
// var userNumber1 = Number(window.prompt("Enter Number1: "));
// var userNumber2 = Number(window.prompt("Enter Number2: "));
// if (userNumber1 > userNumber2) {
//   console.log(userNumber1);
// } else if (userNumber2 > userNumber1) {
//   console.log(userNumber2);
// }

//4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
// var userNumber = Number(window.prompt("Enter Number: "));
// if (userNumber > 0) {
//   console.log("positive");
// } else if (userNumber < 0) {
//   console.log("negative");
// } else {
//   console.log("The number is zero.");
// }

// 5- Write a program that take 3 integers from user then print the max element
// and the min element.
// var userNumber1 = Number(window.prompt("Enter Number1: "));
// var userNumber2 = Number(window.prompt("Enter Number2: "));
// var userNumber3 = Number(window.prompt("Enter Number3: "));
// if (userNumber1 > userNumber2 && userNumber1 > userNumber3) {
//   console.log("max element = ", userNumber1);
// } else if (userNumber2 > userNumber1 && userNumber2 > userNumber3) {
//   console.log("max element = ", userNumber2);
// } else if (userNumber3 > userNumber1 && userNumber3 > userNumber2) {
//   console.log("max element = ", userNumber3);
// }
// if (userNumber1 < userNumber2 && userNumber1 < userNumber3) {
//   console.log("min element = ", userNumber1);
// } else if (userNumber2 < userNumber1 && userNumber2 < userNumber3) {
//   console.log("min element = ", userNumber2);
// } else if (userNumber3 < userNumber1 && userNumber3 < userNumber2) {
//   console.log("min element =", userNumber3);
// }

//6- Write a program that allows the user to insert integer number then
// check If a number is even or odd
// var userNumber = Number(window.prompt("Enter Number: "));
// if (userNumber % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant
// var userChar = window.prompt("Enter character: ");
// if (
//   userChar == "a" ||
//   userChar == "e" ||
//   userChar == "i" ||
//   userChar == "o" ||
//   userChar == "u"
// ) {
//   console.log("vowel");
// } else {
//   console.log("consonant");
// }

// 8- Write a program that allows user to insert integer then print all numbers between 1 to
// that’s number
// var userNumber = Number(window.prompt("Enter Number: "));
// for (var i = 1; i <= userNumber; i++) {
//   console.log(i);
// }

//9- Write a program that allows user to insert integer then print a multiplication table up to 12.
// var userNumber = Number(window.prompt("Enter Number: "));
// for (var i = 1; i <= 12; i++) {
//   console.log(userNumber * i);
// }

//10- Write a program that allows to user to insert number then print all even numbers
// between 1 to this number
// var userNumber = Number(window.prompt("Enter Number: "));
// for (var i = 1; i <= userNumber; i++) {
//   if (i % 2 == 0) console.log(i);
// }

//11- Write a program that take two integers then print the power
// var userNumber1 = Number(window.prompt("Enter Number1: "));
// var userNumber2 = Number(window.prompt("Enter Number2: "));
// console.log(userNumber1 ** userNumber2);

//12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.
// total = 0;
// for (var i = 1; i <= 5; i++) {
//   var marks = parseFloat(window.prompt("mark of subject " + i));
//   total += marks;
// }
// console.log("Total marks=", total);
// console.log("Average marks=", total / 5);

// var totalPossibleMarks = 5 * 100;
// var Percentage = (total / totalPossibleMarks) * 100;
// console.log("Percentage marks=", Percentage + "%");

// 13-Write a program to input month number and print number of days in that
// month.
// var userNumber = Number(window.prompt("month number: "));
// if (userNumber >= 1 && userNumber <= 12) {
//   if (
//     userNumber == 1 ||
//     userNumber == 3 ||
//     userNumber == 5 ||
//     userNumber == 7 ||
//     userNumber == 8 ||
//     userNumber == 10 ||
//     userNumber == 12
//   ) {
//     console.log("Days in Month: 31");
//   } else if (
//     userNumber == 4 ||
//     userNumber == 6 ||
//     userNumber == 9 ||
//     userNumber == 11
//   ) {
//     console.log("Days in Month: 30");
//   } else {
//     console.log("Days in Month: 28 or 29");
//   }
// } else {
//   console.log("Invalid month number. ");
// }

// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// var physics = parseFloat(prompt("Enter marks for Physics:"));
// var chemistry = parseFloat(prompt("Enter marks for Chemistry:"));
// var biology = parseFloat(prompt("Enter marks for Biology:"));
// var mathematics = parseFloat(prompt("Enter marks for Mathematics:"));
// var computer = parseFloat(prompt("Enter marks for Computer:"));

// var totalMarks = physics + chemistry + biology + mathematics + computer;
// var percentage = (totalMarks / 500) * 100;

// var grade;
// if (percentage >= 90) {
//   grade = "A";
// } else if (percentage >= 80) {
//   grade = "B";
// } else if (percentage >= 70) {
//   grade = "C";
// } else if (percentage >= 60) {
//   grade = "D";
// } else if (percentage >= 40) {
//   grade = "E";
// } else {
//   grade = "F";
// }

// console.log("Percentage :", percentage + "%", "Grad :", grade);

// ******************************** Using switch case*******************************
//15- Write a program to print total number of days in month
// var userNumber = Number(window.prompt("Enter month number: "));

// if (userNumber >= 1 && userNumber <= 12) {
//   switch (userNumber) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       console.log("Days in Month: 31");
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       console.log("Days in Month: 30");
//       break;
//     case 2:
//       console.log("Days in Month: 28 or 29");
//       break;
//   }
// } else {
//   console.log("Invalid month number.");
// }

// 16- Write a program to check whether an alphabet is vowel or consonant
// var userChar = window.prompt("Enter character: ");
// switch(userChar)
// {
//     case "a":
//     case "e":
//     case "o":
//     case "u":
//     case "i":
//         console.log("vowel");
//         break;
//     default:
//         console.log("consonant");
// }

// 17- Write a program to find maximum between two numbers
// var userNumber1 = Number(window.prompt("Enter Number1: "));
// var userNumber2 = Number(window.prompt("Enter Number2: "));
// switch (true) {
//   case userNumber1 > userNumber2:
//     console.log(userNumber1);
//     break;
//   case userNumber2 > userNumber1:
//     console.log(userNumber2);
//     break;
// }

// 18- Write a program to check whether a number is even or odd
// var userNumber = Number(window.prompt("Enter Number: "));
// switch (true) {
//   case userNumber % 2 == 0:
//     console.log("even");
//     break;
//   default:
//     console.log("odd");
// }

// 19- Write a program to check whether a number is positive or negative or zero
// var userNumber = Number(window.prompt("Enter Number: "));
// switch (true) {
//   case userNumber > 0:
//     console.log("positive");
//     break;
//   case userNumber < 0:
//     console.log("negative");
//     break;
//   default:
//     console.log("The number is zero.");
// }

// 20- Write a program to create Simple Calculator
var userNumber1 = Number(window.prompt("Enter Number1: "));
var operation = window.prompt("Enter operation (+, -, *, /): ");
var userNumber2 = Number(window.prompt("Enter Number2: "));
switch (operation) {
  case "+":
    console.log(userNumber1 + userNumber2);
    break;
  case "-":
    console.log(userNumber1 - userNumber2);
    break;
  case "*":
    console.log(userNumber1 * userNumber2);
    break;
  case "/":
    // Check if userNumber2 is 0 to avoid division by zero
    if (userNumber2 !== 0) {
      console.log(userNumber1 / userNumber2);
    } else {
      console.log("Error: Division by zero.");
    }
    break;
  default:
    console.log("Invalid operation.");
}