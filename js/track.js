const trackH = 40;
const trackW = 40;

var bRow = 15;
var bCol = 20;
var levelOne = [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,
                 1,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
                 1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
                 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                 1,0,0,0,4,1,1,1,1,1,1,1,1,3,3,4,0,0,0,1,
                 1,0,0,0,1,1,1,1,3,3,3,1,1,1,3,1,1,0,0,1,
                 1,0,0,0,1,1,0,1,3,3,1,0,0,0,0,0,1,0,0,1,
                 1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,
                 1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,
                 1,0,2,2,1,0,0,0,0,0,4,0,0,4,0,0,4,0,0,1,
                 1,1,1,1,1,0,0,4,0,0,0,0,0,1,0,0,0,0,0,1,
                 1,0,0,5,0,0,0,1,1,0,0,0,0,3,3,0,0,0,0,1,
                 1,0,0,5,0,0,0,1,3,0,0,0,0,3,3,0,0,0,0,1,
                 4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,
                 
                 ];
trackGrid=[];
const road = 0;
const wall=1;
const tree=3;
const flag=4;
const goal=5;



                 //removing tracks
    
 
    function trackCreate(){
        var index = -1;
        for(var j=0;j<bRow;j++){
            for(var i=0;i<bCol;i++){
                
                index++;
                var tileHere=trackGrid[index]; 
                var img;
                switch(tileHere){
                    case wall: img=wallPic;break;
                    case road: img=roadPic;break;
                    case tree: img=treePic;break;
                    case flag: img=flagPic;break;
                    case goal: img=goalPic;break;
                }
                canvasContext.drawImage(img,i*trackW,j*trackH);
            }
        }
    
        }