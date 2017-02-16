var video = new Array();


function init() {
    for (var i=0;i<=1;i++){
        video[i] = document.getElementsByTagName("video")[i];
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
    
    


// Kontrolle über Druck //


Pressure.set('#upscyclingvideo', {
  change: function(force, event){
    this.style.webkitFilter = 'opacity(' + force + ')';
      
    video[1].volume = force;
    console.log("Lautstärke 1:" + video[1].volume);
    
    video[0].volume = 1 - force;
    console.log("Lautstärke 0:" + video[0].volume);
    
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