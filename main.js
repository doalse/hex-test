const canvas = document.getElementById('hexmap');
let ctx = canvas.getContext('2d');


class Hexagon {
  constructor(canvasElem, width, height) {
    this.canvasElem = canvasElem;
    this.width = width;
    this.height = height;
    this.hexagonAngle = 0.523598776;
    this.sideLength = 50;
    this.hexHeight = Math.sin(this.hexagonAngle) * this.sideLength;
    this.hexRadius = Math.cos(this.hexagonAngle) * this.sideLength;
    this.hexRectangleHeight = this.sideLength + 2 * this.hexHeight;
    this.hexRectangleWidth = 2 * this.hexRadius;
    this.i = 0;
    this.j = 0;
  }

  drawFigure() {
    let i = this.i;
    let j = this.j;

    for (i = 0; i < this.width; ++i) {
      for (j = 0; j < this.height; ++j) {
        let x = i * this.hexRectangleWidth + (j % 2) * this.hexRadius;
        let y = j * (this.sideLength + this.hexHeight);
        this.canvasElem.beginPath();
        this.canvasElem.moveTo(x + this.hexRadius, y);
        this.canvasElem.lineTo(x + this.hexRectangleWidth, y + this.hexHeight);
        this.canvasElem.lineTo(x + this.hexRectangleWidth, y + this.hexHeight + this.sideLength);
        this.canvasElem.lineTo(x + this.hexRadius, y + this.hexRectangleHeight);
        this.canvasElem.lineTo(x, y + this.sideLength + this.hexHeight);
        this.canvasElem.lineTo(x, y + this.hexHeight);
        this.canvasElem.closePath();
        this.canvasElem.stroke();
      }
    }
  }

  clearCanvas() {
    this.canvasElem.clearRect(0, 0, canvas.width, canvas.height);
  }
}

let input = document.querySelector('input[type=number]');
let form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let grid = new Hexagon(ctx, input.value, input.value);
  grid.clearCanvas();
  grid.drawFigure();
})
