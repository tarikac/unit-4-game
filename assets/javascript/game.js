// my document ready was not working. removed. 
var randomNumber = Math.floor((Math.random() * 75) + 10); //random number generates
var randomCrystalOne = Math.floor((Math.random() * 15) + 1); //random number generates on click
var randomCrystalTwo = Math.floor((Math.random() * 15) + 1); //random number generates on click
var randomCrystalThree = Math.floor((Math.random() * 15) + 1); //random number generates on click
var randomCrystalFour = Math.floor((Math.random() * 15) + 1); //random number generates on click
var wins = 0; //counter for winnings
var losses = 0; //counter for loses
var total = 0; //counter total for crystal picks

//dont think I need another counter for number of tries...
//console log to see if numbers are stored in variables.
console.log(randomNumber);
console.log(randomCrystalOne);
console.log(randomCrystalTwo);
console.log(randomCrystalThree);
console.log(randomCrystalFour);

$("#randomcapture").text(randomNumber).css("font-size", "40px");
$("#currenttotal").text(total).css("font-size", "40px");
$("#wins").text("Number of Wins: " + wins);
$("#losses").text("Number of Losses: " + losses);


$("#firstCrystal").on("click", function() {
    total += randomCrystalOne;
    $("#currenttotal").text(total);
});
$("#secondCrystal").on("click", function() {
    total += randomCrystalTwo;
    $("#currenttotal").text(total);
});
$("#thirdCrystal").on("click", function() {
    total += randomCrystalThree;
    $("#currenttotal").text(total);
});
$("#forthCrystal").on("click", function() {
    total += randomCrystalFour;
    $("#currenttotal").text(total);
});

if (total == randomNumber){
prompt("You Won!")
wins ++;
$("#wins").text("Number of Wins: " + wins);
reset();
}

if (total > randomNumber){
prompt("Too high! You Lose!");
losses ++;
$("#losses").text("Number of Losses: " + losses);
reset();
}

function reset(){
total = 0;
$("#currenttotal").text(total);
randomNumber = Math.floor((Math.random() * 75) + 10);
$("#randomcapture").text(randomNumber);
randomCrystalOne = Math.floor((Math.random() * 15) + 1);
randomCrystalTwo = Math.floor((Math.random() * 15) + 1);
randomCrystalThree = Math.floor((Math.random() * 15) + 1);
randomCrystalFour = Math.floor((Math.random() * 15) + 1);

}

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






