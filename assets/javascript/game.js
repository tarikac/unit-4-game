$(document).ready(function(){

var randomNumber; //random number generates
var randomCrystalOne; //random number generates on click
var randomCrystalTwo; //random number generates on click
var randomCrystalThree; //random number generates on click
var randomCrystalFour; //random number generates on click
var wins = 0; //counter for winnings
var losses = 0; //counter for loses
var total = 0; //counter total for crystal picks

//dont think I need another counter for number of tries...

$("#randomcapture h1").text(randomNumber);
$("#currenttotal h1").text(total);
$("#wins").text("Number of Wins: " + wins);
$("#losses").text("Number of Losses: " + losses);

$("#firstCrystal").on("click", function() {
    total += randomCrystalOne;
});
$("#secondCrystal").on("click", function() {
    total += randomCrystalTwo;
});
$("#firstCrystal").on("click", function() {
    total += randomCrystalThree;
});
$("#firstCrystal").on("click", function() {
    total += randomCrystalFour;
});
//set my variables
//i neeed randomNumber picker
//need to set random numbers for each button
//need a total that tracks the numbers combined for random numbers
//need counter for wins
//need counter for loses


//on click for each button. Should I send this to a function?


//total of points being made


//track winnings and display them (if matches randomNumber) (this should also reset crystals and randNumber)

//track losses and display them (if number is higher than randomNumber..also resets crystals)

//reset game gives a new randomNumber and a new number for each crystal




});

