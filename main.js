// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [200, 500, 350, 400, 580, 170, 225, 325, 100, 550, 250, 300, 600, 50, 275];

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  // automatically makes each bar equal weight when new indexes are added
  let barWidth = cnv.width / myArray.length; 

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Bar Graph
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "grey"; 

  for (let i = 0; i < myArray.length; i++) { 
      ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
      ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}


  // // draw bar graph from the bottom 
  // // (x-value <-- top left corner, y-value, width, height)
  // // cnv.height = myArray[0] leaves space at the top so that it can be drawn from the bottom 
  // // each rectangle width = 100
  // ctx.fillRect(0, cnv.height - myArray[0], 100, myArray[0]);
  // ctx.fillRect(100, cnv.height - myArray[1], 100, myArray[1]);
  // ctx.fillRect(200, cnv.height - myArray[2], 100, myArray[2]);