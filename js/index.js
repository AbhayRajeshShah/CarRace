//canvas
var canvas;
var canvasContext;
canvas=document.getElementById("gameCanvas");
canvasContext=canvas.getContext("2d");
var blueCar=new carclass();
var greenCar=new carclass();



//frames


window.onload=function(){
    loadImages();
}
function imageLoadingDoneSoStartGame(){
    var framesPerSec=50;
    setInterval(all,1000/framesPerSec);
    loadlevel(levelOne);
}

function loadlevel(whichLevel){
    trackGrid=whichLevel.slice();
    blueCar.speed=0;
    greenCar.speed=0;
    greenCar.carReset(otherCarPic);
blueCar.carReset(carPic);


}

function all(){
    moveAll();
    drawAll();
}




function moveAll(){
    greenCar.carMove();
    greenCar.tracksmh();
    blueCar.carMove();
    blueCar.tracksmh();
}


rect(0,0,canvas.width,canvas.height,"black");

function drawAll(){
trackCreate();
greenCar.carReset(otherCarPic);
blueCar.carReset(carPic);

}


