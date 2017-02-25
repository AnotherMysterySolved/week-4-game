console.log("Hello World")
//--------------------------------------------------------
//GLOBAL--------------------------------------------------
//--------------------------------------------------------
var crystal = ["yellowGem", "blueGem", "greenGem", "redGem"]


function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function crystalValue(){
	for(var i = 0; i < crystal.length; i++){
	crystal[i] = randomIntFromInterval(1, 12);
	console.log(crystal);
	};
}

//--------------------------------------------------------
//The Game------------------------------------------------
//--------------------------------------------------------


$("#start-button").on("click", function() {
    var random = randomIntFromInterval(19,120);
    $("#targetRandomNumber").html(random);
    $("#totalScore").html(0);


   });

 //  	$("#yellow-gem").on("click", function() {
 //    var random = randomIntFromInterval(1,12);
 //    console.log(random)

 // });

crystalValue()









// function randomIntFromInterval(min,max)
// {
//     return Math.floor(Math.random()*(max-min+1)+min);
// }