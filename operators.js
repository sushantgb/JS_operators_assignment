//script for first task - Arithematic operator
var year_days = 365;
var week_days = 7;
var weeks_cal = 365 / 7;
var weeks = Math.floor(weeks_cal); //to print the interger value of floating number
var days_remain = 365 % 7;
document.write(weeks + " " + "Weeks and" + " " + days_remain + " " + "Remaining day in a normal year");