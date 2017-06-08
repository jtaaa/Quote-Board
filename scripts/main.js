console.log('Script is beginning!');

// get body element to insert elements in
const body   = document.getElementsByTagName('body')[0];
let width  = body.offsetWidth;
let height = body.offsetHeight;
console.log('Window width: ', width, 'and Window height: ', height);

// add full screen canvas element ===================================
const canvas = document.createElement('canvas');
const ctx    = canvas.getContext('2d');


function resizeCanvas() {
  // get new width and height
  width  = body.offsetWidth;
  height = body.offsetHeight;
  // resize canvas to make it fill the screen
  canvas.setAttribute('width',  width);
  canvas.setAttribute('height', height);

  // Now that the canvas has been sized we oversample it ==============
  // query the various pixel ratios
  const devicePixelRatio = window.devicePixelRatio || 1;
  const backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
                            ctx.mozBackingStorePixelRatio ||
                            ctx.msBackingStorePixelRatio ||
                            ctx.oBackingStorePixelRatio ||
                            ctx.backingStorePixelRatio || 1;

  const ratio = devicePixelRatio / backingStoreRatio;

  // upscale the canvas if the two ratios don't match
  if (devicePixelRatio !== backingStoreRatio) {

    var oldWidth = canvas.width;
    var oldHeight = canvas.height;

    canvas.width = oldWidth * ratio;
    canvas.height = oldHeight * ratio;

    canvas.style.width = oldWidth + 'px';
    canvas.style.height = oldHeight + 'px';

    // now scale the context to counter the fact that
    // we've manually scaled our canvas element
    ctx.scale(ratio, ratio);

  }
}
resizeCanvas();
// append canvas to body
body.appendChild(canvas);


function drawAll() {
  let drawingAttrList = [
    {
      text: 'Hi, I\'m Joshua!',
      xPos: Math.round(width / 2),
      yPos: Math.round(height / 3),
      font: '56px "Open Sans", sans-serif',
      fadeDelay: 0,
      subtextDrawingAttr: {
        text: 'UW Computer Science Student',
        font: '18px "Open Sans", sans-serif',
      }
    },
    {
      text: '"Damn Daniel!"',
      xPos: Math.round(width / 1.3),
      yPos: Math.round(height / 5),
      font: '24px "Open Sans", sans-serif',
      align: 'center',
      fadeDelay: 1400,
      subtextDrawingAttr: {
        text: '- Daniel 2017',
        font: '12px "Open Sans", sans-serif',
      }
    },
    {
      text: '"If anyone can can cans, Can can can cans"',
      xPos: width / 5,
      yPos: height / 1.2,
      font: '15px "Open Sans", sans-serif',
      align: 'center',
      fadeDelay: 1350,
      subtextDrawingAttr: {
        text: '- Gwen 2017',
        font: '12px "Open Sans", sans-serif',
      }
    },
    {
      text: '"Parting is such sweet sorrow"',
      xPos: width / 5.6,
      yPos: height / 4,
      font: '20px "Open Sans", sans-serif',
      align: 'center',
      fadeDelay: 1420,
      subtextDrawingAttr: {
        text: '- Shakespeare 1693',
        font: '12px "Open Sans", sans-serif',
      }
    }
  ]
  for (drawingAttr of drawingAttrList) {
    console.log(drawingAttr);
    let drawing = new textDrawing(ctx, drawingAttr);
    drawing.fadeIn(drawingAttr.fadeDelay);
  }
}
drawAll();

// resize the canvas on window resize =======================
window.onresize = () => {
  resizeCanvas();
  drawAll();
};

canvas.addEventListener('click', (e) => {
  console.log(e);
});
