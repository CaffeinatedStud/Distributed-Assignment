function Fruit() {
  this.x;
  this.y;

  this.pickLocation = function() {
    this.x = (Math.floor(Math.random() *
      columns - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() *
      rows - 1) + 1) * scale;
  }

  this.draw = function() {

    const foodImg = new Image();
    foodImg.src = "img/food.png";
    ctx.drawImage(foodImg, this.x, this.y);

  }
}
