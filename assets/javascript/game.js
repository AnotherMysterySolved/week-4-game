
//GLOBAL--------------------------------------------------

var wins = 0;
var losses = 0;
var totalUserScore = 0;
var randomTarget = randomIntFromInterval(19,120);

var yellowGemNum = randomIntFromInterval(1,12);
var blueGemNum   = randomIntFromInterval(1,12);
var greenGemNum  = randomIntFromInterval(1,12);
var redGemNum    = randomIntFromInterval(1,12);

var StartBtn     = $('#start-button');
var yellowGemBtn = $('#yellow-gem');
var blueGemBtn   = $('#blue-gem');
var greenGemBtn  = $('#green-gem');
var redGemBtn    = $('#red-gem');

var totalScoreDiv   = $('#total-score');
var randomNumberDiv = $('#target-random-number');
var winsDiv   = $('#wins');
var lossesDiv = $('#losses');

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function reset(){
	randomTarget = randomIntFromInterval(19,120);
    randomNumberDiv.html(randomTarget);
    console.log(randomTarget);
    totalScoreDiv.html(0);
    totalUserScore = 0;
    yellowGemNum = randomIntFromInterval(1,12);
  	blueGemNum   = randomIntFromInterval(1,12);
  	greenGemNum  = randomIntFromInterval(1,12);
  	redGemNum    = randomIntFromInterval(1,12);
}

//The Game------------------------------------------------

StartBtn.on("click", function() {
	reset()

 });


yellowGemBtn.click(function(){
	totalUserScore += yellowGemNum;
	console.log("Yellow is " + yellowGemNum);
	equalCheck();
});

blueGemBtn.click(function() {
	totalUserScore += blueGemNum;
	console.log("Blue is " + blueGemNum);
	equalCheck();
});

greenGemBtn.click(function() {
	totalUserScore += greenGemNum;
	console.log("Green is " + greenGemNum);
	equalCheck();
});

redGemBtn.click(function() {
	totalUserScore = totalUserScore + redGemNum;
	console.log("Red is " + redGemNum);
	equalCheck();
});

function equalCheck() {
	totalScoreDiv.html(totalUserScore);

	if (totalUserScore == randomTarget){
		alert("Congratulations, your 2nd grade teacher would be proud!");
		wins += 1;
		winsDiv.html(wins);
		reset();
	} else if(totalUserScore > randomTarget) {
		alert("Sucks to suck. Try Again");
		losses += 1;
		lossesDiv.html(losses);
		reset();
	}


}
