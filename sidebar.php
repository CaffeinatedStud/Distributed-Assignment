<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/sidebar.css" />
    <script type="text/javascript" src="js/sidebar.js"></script>
</head>
<body>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="index.php">GS HOME <img src="img/home_icon.png" /></a>
        <a href="ball_chaser.php">Ball Chaser <img src="img/ball_chaser_icon.png" /></a>
      </div>
      
      <!-- Use any element to open the sidenav -->
      <img src="img/hamburger_menu.png" onclick="openNav()" />

      <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
      <div id="main">
      </div>
</body>
</html>