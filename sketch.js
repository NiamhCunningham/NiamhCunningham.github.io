function setup() {
  createCanvas(450, 400);
}

boardWidth = 9
boardHeight = 8
squareWidth = 50
anyBoxChecked = new Array(boardWidth*boardHeight).fill(false);
letters = "QWANDSODO" +
          "TUNNOGAOE" +
          "PUIOWLSML" +
          "ARIBISDEG" +
          "TELWBTAYG" +
          "ANMOLLOSU" +
          "CHARMSEIM" +
          "YMEHCLAR-" 
  

function draw() {
  background(220);

  
  for(j = 0; j < boardHeight * squareWidth; j += squareWidth) {
    for(i = 0; i < boardWidth * squareWidth; i += squareWidth) {
      if(anyBoxChecked[i + j * boardWidth]) {
        fill(color('black')) 
      } else {
        fill(color('white'))
      }
      square(i, j, squareWidth)
      fill(color('black'))
      textSize(30)
      text(letters[i/squareWidth + j/squareWidth * boardWidth], i + squareWidth/3.2, j + squareWidth/1.5)
      
    }
  }

}

function mouseClicked() {
  for(j = 0; j < boardHeight * squareWidth; j += squareWidth) {
    for(i = 0; i < boardWidth * squareWidth; i += squareWidth) {
      if (mouseX < i + squareWidth && mouseX > i) {
        if(mouseY < j + squareWidth && mouseY > j) {
           anyBoxChecked[i + j * boardWidth] = ! (anyBoxChecked[i + j * boardWidth])
        }
      }
    }
  }
}