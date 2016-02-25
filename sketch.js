var cvs;
var gif;
var record;
var counter;

var frameSlider;
var numFrames;

//ANIMATION CODE
var angle1=0;
var angle2=0;
var scalar = 70;

var width = 640;
var hegiht = 480;

//UI CODE
var recordButton;
var playButton;

function setup() {
  
  cvs = createCanvas(640, 480);
  record = false;

  setupGif();
    
    console.log("hello");
    
    //ANIMATION CODE
    noStroke();
    rectMode(CENTER);
    
    //UI CODE
    recordButton = createButton('start recording');
    recordButton.position(width - 80, height + 30);
    recordButton.mousePressed(startRecording);
    frameSlider = createSlider(0, 150, 30);
    frameSlider.position(width - 230, height + 30);
    
    textSize(15);
}

function draw() {
    
    if (counter > numFrames)
    {
        record = false;
        playButton = createButton('create GIF');
        playButton.position(width -80, height + 50);
        playButton.mousePressed(showGIF)
        
        console.log("recording complete");
        counter = 0;
    }

  if (record && counter < numFrames + 1) {
    gif.addFrame(cvs.elt, {delay: 30, copy: true});
      counter++;
  }
    
    // ANIMATION CODE
  background(50);

  var ang1 = radians(angle1);
  var ang2 = radians(angle2);

  var x1 = width/2 + (scalar * cos(ang1));
  var x2 = width/2 + (scalar * cos(ang2));
  
  var y1 = height/2 + (scalar * sin(ang1));
  var y2 = height/2 + (scalar * sin(ang2));
  
  fill(255);
  rect(width*0.5, height*0.5, 140, 140);

  fill(0, 102, 153);
  ellipse(x1, height*0.5 - 120, scalar, scalar);
  ellipse(x2, height*0.5 + 120, scalar, scalar);
  
  fill(255, 204, 0);
  ellipse(width*0.5 - 120, y1, scalar, scalar);
  ellipse(width*0.5 + 120, y2, scalar, scalar);

  angle1 += 2;
  angle2 += 3; 
    
//console.log("drawing");
  noStroke();
    fill(255);
  text( (frameSlider.value()).toString() + " frames", width - 80, height - 10);

}

function mousePressed() {
//  recording = !recording;
//  if (!recording) {
//    gif.render();
//      console.log("rendering gif");
//  }
}

function showGIF()
{
    gif.render();
}

function startRecording()
{
    numFrames = frameSlider.value();
    record = !record;
    console.log("beginning recording");
}

function setupGif() {
  counter = 0;
  gif = new GIF({
    workers: 2,
    quality: 50
  });

  gif.on('finished', function(blob) {
    window.open(URL.createObjectURL(blob));
    setupGif();
  });
}

