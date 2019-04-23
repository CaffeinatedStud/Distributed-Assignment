<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="css/ball_chaser.css">
	<link rel="icon" type="image/png" href="img/game_controller_logo.png">
	<script type="text/javascript" src="js/ball_chaser.js"></script>
</head>
<body onload="loadCanvas()">
<?php include 'sidebar.php';?>
<label id="lblScoreLabel" class="writing">Score: </label>
<label id="lblScoreMarking" class="writing">0</label>
<label id="lblTimerLabel" class="writing">Time Remaining: </label>
<label id="lblTimerMarking" class="writing">60</label>
<canvas id="mycanvas" width="1020" height="500"></canvas>

</body>
</html>