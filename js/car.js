//car
function carclass(){
    this.x=100;
    this.y=100;
    this.speed=0;
    this.ang = 0;
    var min_speed=0.5;
    this.myCarPic;
this.accCheck = false;
this.downCheck=false;
this.leftCheck = false;
this.rightCheck = false;

this.upar;
this.down;
this.left;
this.right;

    
this.carMove=function(){
    this.speed*=0.97;
    if(this.accCheck){
        this.speed+=0.3;
    }
    if(this.downCheck){
        this.speed-=0.3;
    }
    if(Math.abs(this.speed)>min_speed){
        if(this.leftCheck){
            this.ang-=0.04;
        }
        if(this.rightCheck){
            this.ang+=0.04;
        }
    }
    
this.x+=Math.cos(this.ang)*this.speed;
    this.y+=Math.sin(this.ang)*this.speed;
}
this.controls=function(upar,down,right,left){
    this.upar=upar;
    this.down=down;
    this.right=right;
    this.left=left;
}

this.carReset=function(whichImage){
    this.myCarPic=whichImage;
    var index = -1;
        for(var j=0;j<bRow;j++){
            for(var i=0;i<bCol;i++){
                
                index++;
                
                if(trackGrid[index]==2){
                    trackGrid[index]=0;
                    this.x = i*trackW+trackW/2;
                    this.y = j*trackH+trackH/2;
                    this.ang=-Math.PI/2;
                    return;
                }
                
            }
           
        }
        drawBitmapWithRotation(this.myCarPic,this.x,this.y,this.ang);
       
}
this.tracksmh=function(){
    var carIndexX = Math.floor(this.x/trackW);
var carIndexY = Math.floor(this.y/trackH);

function smh(col,row){
    var index = row*bCol + col;
    return index;
}
function smhh(col,row){
    if(col>=0 && col<bCol && row>=0 && row<bRow){
        var trackindexUnderCoord = smh(col,row);
        return (trackGrid[trackindexUnderCoord]);
    }else{
        return false;
    }
}
if(carIndexX>=0 && carIndexX<bCol && carIndexY>=0 && carIndexY<bRow){
    if(smhh(carIndexX,carIndexY)==goal){
        loadlevel(levelOne);
    }
   else if(smhh(carIndexX,carIndexY)!=0){
        this.x -= Math.cos(this.ang) * this.speed;
        this.y -= Math.sin(this.ang) * this.speed;
    this.speed*=-0.5;
      
   
}}
}
}

//onload evt listeners

