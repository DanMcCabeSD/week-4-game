console.log("Test");

var random_result;
var win = 0;
var lost = 0;
var previous = 0;

var resetAndStart = function () {
	random_result = Math.floor(Math.random() * 101 ) + 19; 

	$("#result").html('Random Result: ' + random_result);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;
		console.log(random);


		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});

			crystal.html(random);

		$(".crystals").append(crystal);

	}

}

resetAndStart();

var reset = function () {


}

//Event Delegation

$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;

	console.log

	if(previous > random_result){
		lost--;

		$("#lost").html(lost);

		previous = 0;

		resetAndStart();
	}
	else if (previous === random_result){
		win++;

		$("#win").html(win);

		previous = 0;

		resetAndStart();
	}

});




// Spuedo Coding

// game with 4 crystals and Random Result
// every crystal needs to have random number between 1 -12
// a number should be generated to each of the 4 crystals every time we win or lose
// when clicking any crystal, it should be adding with the previous
// until it equals the total score
// if it is greater than the Random Result, we increase the loss counter
// if it is equal, then we increment a win counter