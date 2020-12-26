"use strict";
function helloWorld(message) {
    console.log(message);
}
helloWorld("Hello Typescript");
var users;
users = ["1", "2", "3", "10", "20", "30"];
var users2;
console.log(users.sort(function (a, b) { return parseInt(a) - parseInt(b); }));
// TUPLAS
var users3;
users3 = [1, "123"];
console.log(users3);
var array = [];
var matriz = [];
function whatTime(hour, minute) {
    return hour + ':' + minute;
}
whatTime(1, 30); //'1:30'
whatTime('1', 30); //'1:30'
whatTime(1, '30'); //'1:30'
whatTime('1', '30'); //'1:30'
function whatTime2(hour, minute) {
    return hour + ':' + minute;
}
// let smallPicture: SquareSize = '200x200'; // --> Error
var smallPicture = '100x100';
var mediumPicture = '500x500';
//Angle Bracket: <Type>
var username;
username = 'danijazzero'.toUpperCase();
///as: variable as type
username = username.toLowerCase();
var testUsername = "Rigojr 24154359";
console.log(testUsername.split(' ')[0]);
