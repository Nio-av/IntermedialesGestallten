var video = new Array();


function init() {
    for (var i=0;i<=1;i++){
        video[i] = document.getElementsByTagName("video")[i];
        Soundcontrol(i);
    }
    
    
}




function vidplay() {
    for (var i=0;i<=1;i++){
        
        var button = document.getElementById("play");
        if (video[i].paused) {
          video[i].play();
          button.textContent = "||";
       } else {
          video[i].pause();
          button.textContent = ">";
       }
    } 

}


function restart() {
    for(var i = 0; i <= 1; i++){
        video[i].currentTime = 0;
        video[i].play();
    }
}
    
    


// Lautstärkencontrolle //



function Soundcontrol(i){  // laderoutine
    video[i].addEventListener("mouseover", function(){
                mouseOverVideo(i)
                console.log("Mouseover " + i); 
            }
      )
    
}


/*

function mouseOverVideo(i){
    console.log(video[i]);
    console.log("Hallo " + i);
}


//*/

    
function mouseOverVideo(i){
    
    makevideoloud(i);
    if(i == 0){
        mutevideo(1);
    } else{
        mutevideo(0);
    }
    
}




function makevideoloud(i){
    video[i].muted = false;
}



function mutevideo(i){
    video[i].muted = true;
}

//*/