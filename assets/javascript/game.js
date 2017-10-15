
//console.log("is it working?");
	//Global variables

	//tracks the target number and the player's current score. 
	var randomNumber = 0;
	var totalScore = 0;

	//establishes each of the 4 crystals as global variables.
	var crystal1 = 0;
	var crystal2 = 0;
	var crystal3 = 0;
	var crystal4 = 0;

	//Counters - keep track of wins/losses.
	var winCount = 0;
	var lossCount = 0;


//This function will start the game and also act to reset it later. 
function beginGame () {

	//sets the user's score at 0 and writes it to the page. 
	totalScore = 0;
	$("#total").text(totalScore);

	//Picks a random number between 19 and 120 and sets it as the variable randomNumber.
	//it also displays the random number for the user on the HTML - it is their goal. 
	randomNumber = Math.floor(Math.random() * 101) + 19
	$("#random-number").text(randomNumber);
	
	//testing
	console.log (randomNumber);

	//sets each crystal as a random number between 1 and 12. 
	crystal1 = Math.floor(Math.random() * 11) +1;
 	crystal2 = Math.floor(Math.random() * 11) +1;
	crystal3 = Math.floor(Math.random() * 11) +1;
	crystal4 = Math.floor(Math.random() * 11) +1;
	
	//testing
	console.log(crystal1, crystal2, crystal3, crystal4);

}

//We have an essential function that adds the value of a crystal to the user's score.
//It also keeps track of the totalScore and updates HTML. 
function addScore (crystal){
	//Sets totalScore to and NEW current score (the old score + the value of the crystal)
	totalScore = totalScore + crystal;

	//Updates the HTML to display the new score. 
	$("#total").text(totalScore);
}

//A function to notify the player when they've won or lost the game. 
function finishGame () {

	//if the user's score equals the random number, then...
	if (totalScore === randomNumber) {
		//tell them they've won,
		alert("winner!")
		//update the win counter,
		winCount++;
		//display the amount of wins on HTML,
		$("#wins").text(winCount);
		//and begin another game. By calling this function everything is reset. 
		beginGame();
		
	}
   	
   	//if the users score is greater than the random number, then...
   	else if (totalScore > randomNumber) {
   		//break it to them,
    	alert("Loser!")
    	//add a loss to their game stats,
    	lossCount++;
    	//display the new loss stat on HTML,
    	$("#losses").text(lossCount);
    	//and reset the game by calling the beginGame function.
       	beginGame();
    	
    }
}


//Calling this function starts the game for the first time. 
beginGame();


//runs the addScore function each time one of the four crystals clicked. 
//addScore("clicked" crystal) adds value to the user's score 
//and plugs in the corresponding crystal into the addScore function. 

$("#crystal1").on("click", function (){
	addScore(crystal1);
});

$("#crystal2").on("click", function (){
	addScore(crystal2);
});

$("#crystal3").on("click", function (){
	addScore(crystal3);
});

$("#crystal4").on("click", function (){
	addScore(crystal4);
});

//This listens to the document and each time the user clicks anything, 
//it will run the finishGame() function, 
//which will check to see if user has won or lost the round. 
$(document).on('click', function (event) {
	finishGame();
});









