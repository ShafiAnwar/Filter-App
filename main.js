//starts here p5.js Commands
function preload(){

}
function setup(){
  var canvas =createCanvas(500,500);
  canvas.position(110,500);
  video=createCapture(VIDEO);
  video.hide();
  tint_color="";

}

function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;       
}
function take_snapshot(){
    save("my_selfie.png");
}
//ends here