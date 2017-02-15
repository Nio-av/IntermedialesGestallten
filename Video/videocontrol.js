var video = new Array();


function init() {
    for (var i=0;i<=1;i++){
        video[i] = document.getElementsByTagName("video")[i];
        Soundcontrol(i);
    }
    
    
}




function vidplay() {
    video[0].volume = 1;
    video[1].volume = 0;
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
        vidplay();
    }
}
    
    


// Lautstärkencontrolle //




function Soundcontrol(i){  // laderoutine
    video[i].addEventListener("mouseover", function(){
                //mouseOverVideo(i)
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



/*    
function mouseOverVideo(i){
    
    makevideoloud(i);
    if(i == 0){
        mutevideo(1);
    } else{
        mutevideo(0);
    }
    
    console.log("audioänderrung");
}




function makevideoloud(i){
    video[i].muted = false;
}



function mutevideo(i){
    video[i].muted = true;
}




document.addEventListener('contextmenu', event => event.preventDefault());
$('#trashvideo').bind('contextmenu',function() { return false; });

/*

$(function() {
        $(this).bind("contextmenu", function(e) {
            e.preventDefault();
        });
    }); 


//*/






Pressure.set('#upscyclingvideo', {
  change: function(force, event){
    this.style.webkitFilter = 'opacity(' + force + ')';
      
    video[1].volume = force;
    console.log("LAutstärke 1:" + video[1].volume);
      
    //video[0].volume = force + 1;
    video[0].volume = 1 - force;
    console.log("LAutstärke 0:" + video[0].volume);
    
  },


  end: function(){
    this.style.webkitFilter = 'opacity(0)';
    video[0].volume = 1;
    video[1].volume = 0;
  },

  unsupported: function(){
    this.innerHTML = 'Your device / browser does not support this :(';
  }
});