function setup(){
    video =createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550,550);
    canvas.position(700,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotresult);
}
function draw(){
    background("#00f7ff");}

    function modelLoaded(){
        console.log('poseNet is Initialized!');
    }

    function gotresult(result){
        if(result.length > 0)
    {
        console.log(results);}
    }