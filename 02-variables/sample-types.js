var found = true;
var grade = 88.6;
var firstName = "Anunp";
var lastName = 'Kumar';
// let's break it!
/*
found = 0;
grade = "A";
firstName = false;
*/
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// use template Strings
console.log("Hi ".concat(firstName, " ").concat(lastName));
var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport);
}
