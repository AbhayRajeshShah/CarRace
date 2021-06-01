
//keys
var up_arrow = 38;
var down_arrow = 40;
var left_arrow = 37;
var right_arrow = 39;

var w=87;
var s=83
var a=65;
var d=68;




document.addEventListener("keydown",keyPressed);
document.addEventListener("keyup",keyRelease);
greenCar.controls(w,s,d,a);
blueCar.controls(up_arrow,down_arrow,right_arrow,left_arrow);

function setInput(event,whichCar,setTo){
    if(event.keyCode==whichCar.down){
        whichCar.downCheck=setTo;
    }
    if(event.keyCode==whichCar.upar){
        whichCar.accCheck=setTo;
    }
    if(event.keyCode==whichCar.left){
        whichCar.leftCheck=setTo;
    }
    if(event.keyCode==whichCar.right){
        whichCar.rightCheck=setTo;
    } 
}


function keyPressed(evt){
    setInput(evt,greenCar,true);
    setInput(evt,blueCar,true);
}
function keyRelease(evt){
    setInput(evt,greenCar,false);
    setInput(evt,blueCar,false);
}

