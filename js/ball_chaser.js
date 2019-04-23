function loadCanvas() {
	
	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');

	var tempScore = 0;	
	var score = document.getElementById('lblScoreMarking');

	var tempTimer = 60;
	var timer = document.getElementById('lblTimerMarking');

	var xPlayBall = canvas.width / 2;
	var yPlayBall = canvas.height / 2;

	var xFixedBall = Math.floor((Math.random() * 900) + 50);
	var yFixedBall = Math.floor((Math.random() * 400) + 50);

	var rightPressed = false;
	var leftPressed = false;
	var upPressed = false;
	var downPressed = false;

	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	function drawFrame() {
		ctx.beginPath();
		ctx.rect(0, 0, canvas.width, 40);
		ctx.rect(canvas.width - 40, 0, 40, canvas.height);
		ctx.rect(0, 0, 40, canvas.height);
		ctx.rect(0, canvas.height - 40, canvas.width, 40);
		ctx.fillStyle = "#2D72D9";
		ctx.fill();
		ctx.closePath();
	}

	function drawPlayBall() {
		ctx.beginPath();
		ctx.arc(xPlayBall, yPlayBall, 10, Math.PI * 2, false);
		ctx.fillStyle = "#aa00ff";
		ctx.fill();
		ctx.closePath();
	}

	function drawFixedBall() {
		ctx.beginPath();
		ctx.arc(xFixedBall, yFixedBall, 10, Math.PI * 2, false);
		ctx.fillStyle = "#17ff00";
		ctx.fill();
		ctx.closePath();
	}

	function detectBallCollision() { //TBR
		if(xPlayBall > xFixedBall - 20 && xPlayBall < xFixedBall + 20 && yPlayBall > yFixedBall - 20 && yPlayBall < yFixedBall + 20) {
			xFixedBall = Math.floor((Math.random() * 900) + 50);
			yFixedBall = Math.floor((Math.random() * 400) + 50);
			tempScore++;
			score.innerHTML = tempScore;
		}
	}

	function detectWallCollision() {
		if(xPlayBall == canvas.width - 50 || xPlayBall == 50 || yPlayBall == 50 || yPlayBall == canvas.height - 50) {
			alert("You lose");
			document.location.reload();
		}
	}

	function keyDownHandler(e) {
		if(e.keyCode == 39) {
			rightPressed = true;
		}
		else if(e.keyCode == 37) {
			leftPressed = true;
		}
		else if(e.keyCode == 38) {
			upPressed = true;
		}
		else if(e.keyCode == 40) {
			downPressed = true;
		}
	}

	function keyUpHandler(e) {
		if(e.keyCode == 39) {
			rightPressed = false;
		}
		else if(e.keyCode == 37) {
			leftPressed = false;
		}
		else if(e.keyCode == 38) {
			upPressed = false;
		}
		else if(e.keyCode == 40) {
			downPressed = false;
		}
	}

	function main() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawFrame();
		drawPlayBall();
		drawFixedBall();
		detectBallCollision();
		detectWallCollision();

		if(rightPressed) {
			xPlayBall += 10;
		}
		if(leftPressed) {
			xPlayBall -= 10;
		}
		if(upPressed) {
			yPlayBall -= 10;
		}
		if(downPressed) {
			yPlayBall += 10;
		}
	}

	setInterval(function() {
		--tempTimer;
		timer.innerHTML = tempTimer;
		if(tempTimer == 0) {
			alert("Your score is: " + tempScore);
			document.location.reload();
		}
	}, 1000);

	setInterval(main, 10);
}