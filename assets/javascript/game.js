// my document ready was not working. removed. 
var randomNumber = Math.floor((Math.random() * 75) + 15); //random number generates
var randomCrystalOne = Math.floor((Math.random() * 15) + 1); //random number generates on click
var randomCrystalTwo = Math.floor((Math.random() * 15) + 1); //random number generates on click
var randomCrystalThree = Math.floor((Math.random() * 15) + 1); //random number generates on click
var randomCrystalFour = Math.floor((Math.random() * 15) + 1); //random number generates on click
var wins = 0; //counter for winnings
var losses = 0; //counter for loses
var total = 0; //counter total for crystal picks
var yourScore = 0;
//dont think I need another counter for number of tries...
//console log to see if numbers are stored in variables.
console.log("Computer: " + randomNumber);
console.log("Crystal One: " + randomCrystalOne);
console.log("Crystal Two: " + randomCrystalTwo);
console.log("Crystal Three: " + randomCrystalThree);
console.log("Crystal Four: " + randomCrystalFour);

$("#randomcapture > p").text(randomNumber);
$("#currenttotal > p").text(total);
$("#wins").text("Number of Wins: " + wins);
$("#losses").text("Number of Losses: " + losses);



$("#firstCrystal").on("click", function() {
    $("#results").text("");
    total += randomCrystalOne;
    $("#currenttotal > p").text(total);
    console.log("Total: " + total) 
    findWinner();
});
$("#secondCrystal").on("click", function() {
    $("#results").text("");
    total += randomCrystalTwo;
    $("#currenttotal > p").text(total);
    console.log("Total: " + total);
    findWinner();
});
$("#thirdCrystal").on("click", function() {
    $("#results").text("");
    total += randomCrystalThree;
    $("#currenttotal > p").text(total);
    console.log("Total: " + total);
    findWinner();
});
$("#forthCrystal").on("click", function() {
    $("#results").text("");
    total += randomCrystalFour;
    $("#currenttotal > p").text(total);
    console.log("Total: " + total);
    findWinner();
});


$("#resetGame").on("click", function(){
    reset();
})

function findWinner() {
if (total == randomNumber){
    yourScore = total;
    $("#results").text("Your Score: " + yourScore + " Yay! You won!");
    console.log("You Won!");
    wins ++;
    $("#wins").text("Number of Wins: " + wins);
    continuePlay();
}

else if (total > randomNumber){
    yourScore = total;
    $("#results").text("Your Score: " + yourScore + " Too high! You Lose!");
    console.log("Too high! You Lose");
    losses ++;
    $("#losses").text("Number of Losses: " + losses);
    continuePlay();
}

}

function continuePlay(){
console.log("Continue Play"); 
total = 0;
$("#currenttotal > p").text(total);
randomNumber = Math.floor((Math.random() * 75) + 15);
$("#randomcapture > p").text(randomNumber);
randomCrystalOne = Math.floor((Math.random() * 15) + 1);
randomCrystalTwo = Math.floor((Math.random() * 15) + 1);
randomCrystalThree = Math.floor((Math.random() * 15) + 1);
randomCrystalFour = Math.floor((Math.random() * 15) + 1);

console.log("Computer: " + randomNumber);
console.log("Crystal One: " + randomCrystalOne);
console.log("Crystal Two: " + randomCrystalTwo);
console.log("Crystal Three: " + randomCrystalThree);
console.log("Crystal Four: " + randomCrystalFour);
}

function reset(){
    console.log("Reset Game"); 
    total = 0;
    wins = 0;
    losses= 0;
    $("#results").text("");
    $("#currenttotal > p").text(total);
    randomNumber = Math.floor((Math.random() * 75) + 15);
    $("#randomcapture > p").text(randomNumber);
    randomCrystalOne = Math.floor((Math.random() * 15) + 1);
    randomCrystalTwo = Math.floor((Math.random() * 15) + 1);
    randomCrystalThree = Math.floor((Math.random() * 15) + 1);
    randomCrystalFour = Math.floor((Math.random() * 15) + 1);
    $("#wins").text("Number of Wins: " + wins);
    $("#losses").text("Number of Losses: " + losses);
    console.log("Computer: " + randomNumber);
    console.log("Crystal One: " + randomCrystalOne);
    console.log("Crystal Two: " + randomCrystalTwo);
    console.log("Crystal Three: " + randomCrystalThree);
    console.log("Crystal Four: " + randomCrystalFour);
    console.log("Wins: " + wins);
    console.log("Losses: " + wins) 
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






