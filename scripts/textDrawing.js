class textDrawing {

  constructor(ctx, attr) {
    this.ctx = ctx;
    this.text = attr.text;
    this.xPos = attr.xPos;
    this.yPos = attr.yPos;
    this.font = attr.font ? attr.font : '22px "Open Sans", sans-serif';
    this.align = attr.align ? attr.align : 'center';
    this.style = attr.style ? attr.style : 'white';
    this.baseline = 'middle';

    // set textWidth and textHeight
    this.ctx.font = this.font;
    this.textWidth = this.ctx.measureText(this.text).width;
    this.textHeight = parseFloat(this.font);

    // if a subtextDrawing was passed we will process it
    if (attr.subtextDrawingAttr) {
      this.subtextDrawingAttr = attr.subtextDrawingAttr;
      this.createSubtextDrawing();
    }
  }

  createSubtextDrawing() {
    this.subtextDrawingAttr.xPos = this.xPos + Math.round(this.textWidth / 2);
    this.subtextDrawingAttr.yPos = this.yPos + this.textHeight;
    this.subtextDrawingAttr.align = 'right';
    this.subtextDrawing = new textDrawing(ctx, this.subtextDrawingAttr);
  }

  clearTextBox() {
    if (this.align === 'center') {
      this.ctx.clearRect(this.xPos - this.textWidth / 2, this.yPos - this.textHeight * 0.41, this.textWidth, this.textHeight + 0.5);
    } else if (this.align === 'right') {
      this.ctx.clearRect(this.xPos - this.textWidth - 0.5, this.yPos - this.textHeight * 0.5, this.textWidth + 1, this.textHeight * 1.2);
    }
  }

  drawTextBox() {
    this.ctx.fillStyle = 'white';
    if (this.align === 'center') {
      this.ctx.fillRect(this.xPos - this.textWidth / 2, this.yPos - this.textHeight * 0.41, this.textWidth, this.textHeight + 0.5);
    } else if (this.align === 'right') {
      this.ctx.fillRect(this.xPos - this.textWidth - 0.5, this.yPos - this.textHeight * 0.5, this.textWidth + 1, this.textHeight * 1.2);
    }
  }

  drawSubtext() {
    // setup text
    this.ctx.font = this.font;
    this.ctx.textBaseline = this.baseline;
    this.ctx.textAlign = this.align;
    this.ctx.fillStyle = this.style;

    this.ctx.fillText(this.text, this.xPos, this.yPos);
  }

  drawText() {
    // setup text
    this.ctx.font = this.font;
    this.ctx.textBaseline = this.baseline;
    this.ctx.textAlign = this.align;
    this.ctx.fillStyle = this.style;

    this.ctx.fillText(this.text, this.xPos, this.yPos);

    this.createSubtextDrawing();
    titleDrawing.subtextDrawing.drawSubtext();
  }

  fadeIn(delay, subtextDelay = 400) {
    setTimeout( () => {
      this.ctx.globalAlpha = 0.0;
      requestAnimationFrame( () => this.fadeInAnim(0) );
      setTimeout( () => {
        requestAnimationFrame( () => this.subtextDrawing.fadeInAnim(0) );
      }, subtextDelay)
    }, delay);
  }

  fadeInAnim(alpha) {
    // clearRect text-box size
    this.clearTextBox();
    // setup text each time
    this.ctx.font = this.font;
    this.ctx.textBaseline = 'middle';
    this.ctx.textAlign = this.align;
    this.ctx.fillStyle = this.style;

    // increase alpha and draw text
    alpha += 0.02;
    this.ctx.globalAlpha = alpha;

    if (alpha < 1) {
      this.ctx.fillText(this.text, this.xPos, this.yPos);
      window.requestAnimationFrame( () => this.fadeInAnim(alpha) )
    } else {
      this.ctx.globalAlpha = 1;
      this.ctx.fillText(this.text, this.xPos, this.yPos);
    }

  }

  beginMovement() {
    let interval = setInterval( () => {
      // clearRect text-box size
      this.clearTextBox();
      // setup text each time
      this.ctx.font = this.font;
      this.ctx.textBaseline = 'middle';
      this.ctx.textAlign = this.align;
      this.ctx.fillStyle = this.style;

      console.log('Moving');
      this.xPos -= 1;
      this.ctx.fillText(this.text, this.xPos, this.yPos);

    }, 10);
  }
}
