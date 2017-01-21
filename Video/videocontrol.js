function vidplay() {
    for(var i = 0; i <= 1; i++){
        
           var video = document.getElementsByTagName("video")[i];
           var button = document.getElementById("play");
           if (video.paused) {
              video.play();
              button.textContent = "||";
           } else {
              video.pause();
              button.textContent = ">";
           }
        
        } 
        
    }


function restart() {
    for(var i = 0; i <= 1; i++){

        var video = document.getElementsByTagName("video")[i];
        video.currentTime = 0;
        video.play();
    }
}
    
    
