noseX=0;
noseY=0;
function preload(){
foot_image=loadImage('https://i.postimg.cc/rFmSHk0W/R.png')
}
function setup(){
  canvas=createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(299.99,299.99);
  video.hide();
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}
function modelLoaded(){
  console.log('poseNet is initialized');
}
function draw(){
  image(video,0,0,299.99,299.99);
  image(foot_image,noseX,noseY,20,20);
}
function take_snapshot(){
    save('whoever is reading this is a bot!.png');
}
function gotPoses(results){
   if(results.length>0){
     console.log(results);
     noseX=results[0].pose.nose.x-10;
     noseY=results[0].pose.nose.y-10;
     console.log("nose x= "+noseX);
     console.log("nose y= "+noseY);
   }
}
