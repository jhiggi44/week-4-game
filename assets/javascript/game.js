
//console.log("is it working?");
	//Global variables
	var randomNumber = 0;
	var totalScore = 0;



	//Counters
	var winCount = 0;
	var lossCount = 0;

function beginGame () {

	var crystal1 = 0;
	var crystal2 = 0;
	var crystal3 = 0;
	var crystal4 = 0;


randomNumber = Math.floor(Math.random() * 101) + 19
$("#random-number").text(randomNumber);
	
	//test
	console.log (randomNumber);

crystal1 = Math.floor(Math.random() * 11) +1
crystal2 = Math.floor(Math.random() * 11) +1
crystal3 = Math.floor(Math.random() * 11) +1
crystal4 = Math.floor(Math.random() * 11) +1
	
	//test
	console.log(crystal1, crystal2);

//assigns crystal1 ID as a button, 
//adds its random value to total score, 
//and sets new random score
$("#crystal1").val(crystal1);
console.log(crystal1);
$("#crystal1").on("click", function (){
	$("#total").text(totalScore + crystal1);
	totalScore = (totalScore + crystal1);
});

//Does the same thing, but to crystal2
$("#crystal2").val(crystal2);
$("#crystal2").on("click", function (){
	$("#total").text(totalScore + crystal2);
	totalScore = (totalScore + crystal2);
});

//And crystal3
$("#crystal3").val(crystal3);
$("#crystal3").on("click", function (){
	$("#total").text(totalScore + crystal3);
	totalScore = (totalScore + crystal3);
});

//And crystal4
$("#crystal4").val(crystal4);
$("#crystal4").on("click", function (){
	$("#total").text(totalScore + crystal4);
	totalScore = (totalScore + crystal4);
});

}


function finishGame () {
	if (totalScore === randomNumber) {
		alert("winner!")
		winCount++
		$("#wins").text(winCount);
		totalScore = 0;
		randomNumber = 0;
		beginGame();
		
	}
   	
   	else if (totalScore > randomNumber) {
    	alert("Loser!")
    	lossCount++
    	$("#losses").text(lossCount);
    	totalScore = 0;
    	randomNumber = 0;
       	beginGame();
    	
    }
	}

beginGame();

$(document).on('click', function (event) {
	finishGame();
});









