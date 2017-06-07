console.log('Script is beginning!');
console.log(window);

// get body element to insert elements in
const body   = document.getElementsByTagName('body')[0];
let width  = body.offsetWidth;
let height = body.offsetHeight;
console.log(width, height);

// add full screen canvas element ==========================
const canvas = document.createElement('canvas');
const ctx    = canvas.getContext('2d');

function resizeCanvas() {
  // get new width and height
  width  = body.offsetWidth;
  height = body.offsetHeight;
  // resize canvas to make it fill the screen
  canvas.setAttribute('width',  width);
  canvas.setAttribute('height', width);
}
resizeCanvas();
// append canvas to body
body.appendChild(canvas);

// draw title text ==========================================
let titleDrawing = new textDrawing(ctx, {
  text: 'Hi, I\'m Joshua!',
  xPos: width / 2,
  yPos: height / 3,
  font: '56px "Open Sans", sans-serif',
  subtextDrawingAttr: {
    text: 'UW Computer Science Student',
    font: '18px "Open Sans", sans-serif',
  }
});
titleDrawing.fadeIn();
titleDrawing.subtextDrawing.fadeIn(800);

// draw random text =========================================
let randDrawing = new textDrawing(ctx, {
  text: '"Damn Daniel!"',
  xPos: width / 1.3,
  yPos: height / 5,
  font: '24px "Open Sans", sans-serif',
  align: 'center',
  subtextDrawingAttr: {
    text: '- Daniel 2017',
    font: '12px "Open Sans", sans-serif',
  }
});
randDrawing.fadeIn(1400);
randDrawing.subtextDrawing.fadeIn(2000);

// draw random text =========================================
let randDrawing2 = new textDrawing(ctx, {
  text: '"If anyone can can cans, Can can can cans"',
  xPos: width / 5,
  yPos: height / 1.2,
  font: '15px "Open Sans", sans-serif',
  align: 'center',
  subtextDrawingAttr: {
    text: '- Gwen 2017',
    font: '12px "Open Sans", sans-serif',
  }
});
randDrawing2.fadeIn(1400);
randDrawing2.subtextDrawing.fadeIn(2000);

// draw random text =========================================
let randDrawing3 = new textDrawing(ctx, {
  text: '"Parting is such sweet sorrow"',
  xPos: width / 5.6,
  yPos: height / 4,
  font: '20px "Open Sans", sans-serif',
  align: 'center',
  subtextDrawingAttr: {
    text: '- Shakespeare 1693',
    font: '12px "Open Sans", sans-serif',
  }
});
randDrawing3.fadeIn(1400);
randDrawing3.subtextDrawing.fadeIn(2000);


// resize the canvas on window resize =======================
window.onresize = () => {
  resizeCanvas();
  titleDrawing.xPos = width / 2;
  titleDrawing.yPos = height / 3;
  titleDrawing.drawText();


  randDrawing.xPos = width / 1.3;
  randDrawing.yPos = height / 5;
  randDrawing.drawText();
};

canvas.addEventListener('click', (e) => {
  console.log(e);
});
