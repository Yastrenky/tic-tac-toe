

$(document).ready(function() {

var box1 = $('#box1');
var box2 = $('#box2');
var box3 = $('#box3');
var box4 = $('#box4');
var box5 = $('#box5');
var box6 = $('#box6');
var box7 = $('#box7');
var box8 = $('#box8');
var box9 = $('#box9');
var classTitle=$('.title');

var playValidation = false;
var win = false;

function validatePlay(squareplayed) {
	if ( $(squareplayed).hasClass('clean') ) {
		playValidation = true;
	} else {
		playValidation = false;
		return false;
	}
}

function restarGame() {
	classTitle.removeClass('played');
	classTitle.removeClass('O-play');
	classTitle.removeClass('X-play');
	classTitle.html('');
	classTitle.addClass('clean');
}

function winAlert(player) {
	win = true;
setTimeout(function(){
	if (player == "X") {
		alert("Congratulations, you win!")
	} else {
		alert("You lost!")
	}
	restarGame();
},300)

}

function checkWin() {

	if ( box1.hasClass('X-play') && box2.hasClass('X-play') && box3.hasClass('X-play') ) {
		winAlert("X");
	} else if ( box1.hasClass('O-play') && box2.hasClass('O-play') && box3.hasClass('O-play') ) {
		winAlert("O");
	}
	else if ( box4.hasClass('X-play') && box5.hasClass('X-play') && box6.hasClass('X-play') ) {
		winAlert("X");
	} else if ( box4.hasClass('O-play') && box5.hasClass('O-play') && box6.hasClass('O-play') ) {
		winAlert("O");
	}
	else if ( box7.hasClass('X-play') && box8.hasClass('X-play') && box9.hasClass('X-play') ) {
		winAlert("X");
	} else if ( box7.hasClass('O-play') && box8.hasClass('O-play') && box9.hasClass('O-play') ) {
		winAlert("O");
	}
	else if ( box1.hasClass('X-play') && box4.hasClass('X-play') && box7.hasClass('X-play') ) {
		winAlert("X");
	} else if ( box1.hasClass('O-play') && box4.hasClass('O-play') && box7.hasClass('O-play') ) {
		winAlert("O");
	}
	else if ( box5.hasClass('X-play') && box2.hasClass('X-play') && box8.hasClass('X-play') ) {
		winAlert("X");
	} else if ( box5.hasClass('O-play') && box2.hasClass('O-play') && box8.hasClass('O-play') ) {
		winAlert("O");
	}
	else if ( box6.hasClass('X-play') && box9.hasClass('X-play') && box3.hasClass('X-play') ) {
		winAlert("X");
	} else if ( box6.hasClass('O-play') && box9.hasClass('O-play') && box3.hasClass('O-play') ) {
		winAlert("O");
	}
	else if ( box1.hasClass('X-play') && box5.hasClass('X-play') && box9.hasClass('X-play') ) {
		winAlert("X");
	} else if ( box1.hasClass('O-play') && box5.hasClass('O-play') && box9.hasClass('O-play') ) {
		winAlert("O");
	}
	else if ( box5.hasClass('X-play') && box7.hasClass('X-play') && box3.hasClass('X-play') ) {
		winAlert("X");
	} else if ( box5.hasClass('O-play') && box7.hasClass('O-play') && box3.hasClass('O-play') ) {
		winAlert("O");
	}
}

function checkDraw() {

	if ( !(classTitle.hasClass('clean')) ) {
		alert("Draw! Try playing again!");
		restarGame();
	}
}
function Oplay() {
	function Oplaying(square) {

		validatePlay(square)

		if (playValidation) {
			square.removeClass('clean');
			square.addClass('played');
			square.addClass('O-play');
			square.html("O");
		} else {
			computerPlay()
		}

	}


	function computerPlay() {
		for (var i = 0; i < 10; i++) {


			var randomNumber = Math.floor((Math.random() * 9) + 1);
			var randomSquare = $('#box'+randomNumber);
			validatePlay(randomSquare);

			if (playValidation) {

				randomSquare.removeClass('clean');
				randomSquare.addClass('played');
				randomSquare.addClass('O-play');
				randomSquare.html("O");
				break;
			}
		}
	}




	win123_box3 = ( box1.hasClass('X-play') && box2.hasClass('X-play') || box1.hasClass('O-play') && box2.hasClass('O-play') ) && !(box3.hasClass('played'))
	win123_box2 = ( box1.hasClass('X-play') && box3.hasClass('X-play') || box1.hasClass('O-play') && box3.hasClass('O-play') ) && !(box2.hasClass('played'))
	win123_box1 = ( box3.hasClass('X-play') && box2.hasClass('X-play') || box3.hasClass('O-play') && box2.hasClass('O-play') ) && !(box1.hasClass('played'))
	win456_box6 = ( box4.hasClass('X-play') && box5.hasClass('X-play') || box4.hasClass('O-play') && box5.hasClass('O-play') ) && !(box6.hasClass('played'))
	win456_box5 = ( box4.hasClass('X-play') && box6.hasClass('X-play') || box4.hasClass('O-play') && box6.hasClass('O-play') ) && !(box5.hasClass('played'))
	win456_box4 = ( box5.hasClass('X-play') && box6.hasClass('X-play') || box5.hasClass('O-play') && box6.hasClass('O-play') ) && !(box4.hasClass('played'))
	win789_box9 = ( box7.hasClass('X-play') && box8.hasClass('X-play') || box7.hasClass('O-play') && box8.hasClass('O-play') ) && !(box9.hasClass('played'))
	win789_box8 = ( box7.hasClass('X-play') && box9.hasClass('X-play') || box7.hasClass('O-play') && box9.hasClass('O-play') ) && !(box8.hasClass('played'))
	win789_box7 = ( box8.hasClass('X-play') && box9.hasClass('X-play') || box8.hasClass('O-play') && box9.hasClass('O-play') ) && !(box7.hasClass('played'))
	win147_box7 = ( box1.hasClass('X-play') && box4.hasClass('X-play') || box1.hasClass('O-play') && box4.hasClass('O-play') ) && !(box7.hasClass('played'))
	win147_box4 = ( box1.hasClass('X-play') && box7.hasClass('X-play') || box1.hasClass('O-play') && box7.hasClass('O-play') ) && !(box4.hasClass('played'))
	win147_box1 = ( box4.hasClass('X-play') && box7.hasClass('X-play') || box4.hasClass('O-play') && box7.hasClass('O-play') ) && !(box1.hasClass('played'))
	win528_box8 = ( box5.hasClass('X-play') && box2.hasClass('X-play') || box5.hasClass('O-play') && box2.hasClass('O-play') ) && !(box8.hasClass('played'))
	win528_box2 = ( box5.hasClass('X-play') && box8.hasClass('X-play') || box5.hasClass('O-play') && box8.hasClass('O-play') ) && !(box2.hasClass('played'))
	win528_box5 = ( box2.hasClass('X-play') && box8.hasClass('X-play') || box2.hasClass('O-play') && box8.hasClass('O-play') ) && !(box5.hasClass('played'))
	win693_box3 = ( box6.hasClass('X-play') && box9.hasClass('X-play') || box6.hasClass('O-play') && box9.hasClass('O-play') ) && !(box3.hasClass('played'))
	win693_box9 = ( box6.hasClass('X-play') && box3.hasClass('X-play') || box6.hasClass('O-play') && box3.hasClass('O-play') ) && !(box9.hasClass('played'))
	win693_box6 = ( box9.hasClass('X-play') && box3.hasClass('X-play') || box9.hasClass('O-play') && box3.hasClass('O-play') ) && !(box6.hasClass('played'))
	win159_box9 = ( box1.hasClass('X-play') && box5.hasClass('X-play') || box1.hasClass('O-play') && box5.hasClass('O-play') ) && !(box9.hasClass('played'))
	win159_box5 = ( box1.hasClass('X-play') && box9.hasClass('X-play') || box1.hasClass('O-play') && box9.hasClass('O-play') ) && !(box5.hasClass('played'))
	win159_box1 = ( box5.hasClass('X-play') && box9.hasClass('X-play') || box5.hasClass('O-play') && box9.hasClass('O-play') ) && !(box1.hasClass('played'))
	win573_box3 = ( box5.hasClass('X-play') && box7.hasClass('X-play') || box5.hasClass('O-play') && box7.hasClass('O-play') ) && !(box3.hasClass('played'))
	win573_box5 = ( box5.hasClass('X-play') && box3.hasClass('X-play') || box5.hasClass('O-play') && box3.hasClass('O-play') ) && !(box5.hasClass('played'))
	win573_box7 = ( box7.hasClass('X-play') && box3.hasClass('X-play') || box7.hasClass('O-play') && box3.hasClass('O-play') ) && !(box7.hasClass('played'))




	if ( win123_box3 ) {
		Oplaying(box3)
	} else if ( win123_box2 ) {
		Oplaying(box2)
	} else if ( win123_box1 )  {
		Oplaying(box1)
	}
	else if ( win456_box6 ) {
		Oplaying(box6)
	} else if ( win456_box5 ) {
		Oplaying(box5)
	} else if ( win456_box4 ) {
		Oplaying(box4)
	}
	else if ( win789_box9 ) {
		Oplaying(box9)
	} else if ( win789_box8 ) {
		Oplaying(box8)
	} else if ( win789_box7 ) {
		Oplaying(box7)
	}
	else if ( win147_box7 ) {
		Oplaying(box7)
	} else if ( win147_box4 ) {
		Oplaying(box4)
	} else if ( win147_box1 ) {
		Oplaying(box1)
	}
	else if ( win528_box8 ) {
		Oplaying(box8)
	} else if ( win528_box2 ) {
		Oplaying(box2)
	} else if ( win528_box5 ) {
		Oplaying(box5)
	}
	else if ( win693_box3 ) {
		Oplaying(box3)
	} else if ( win693_box9 ) {
		Oplaying(box9)
	} else if ( win693_box6 ) {
		Oplaying(box6)
	}
	else if ( win159_box9 ) {
		Oplaying(box9)
	} else if ( win159_box5 ) {
		Oplaying(box5)
	} else if ( win159_box1 ) {
		Oplaying(box1)
	}
	else if ( win573_box3 ) {
		Oplaying(box3)
	} else if ( win573_box7 ) {
		Oplaying(box7)
	} else if ( win573_box5 ) {
		Oplaying(box5)
	}
	else {
	computerPlay();
	}
	checkDraw();
	checkWin();
}


classTitle.on('click', function Xplay() {
	validatePlay(this);
	if (playValidation) {
		$(this).removeClass('clean');
		$(this).addClass('played');
		$(this).addClass('X-play');
		$(this).html("X");
		checkDraw();
		checkWin();
		Oplay();
	} else {
		alert("That square has already been selected.");
	}

})

$('#reset-button').on('click', function() {
	restarGame();
})


});
