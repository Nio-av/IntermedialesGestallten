

Pressure.set('#upscyclingvideo', {
  change: function(force, event){
    this.style.webkitFilter = 'opacity(' + force + ')';
      
    this.volume = force;
    
    //console.log($('#upscyclingvideo'));
    //console.log('rechnung ' + (force);
    //video[0].volume = force - 1;
      
    //console.log("force " + force);
      
    /*  
    if(force < 0.6 & force > 0.5 ){
        mouseOverVideo(1);
        console.log("jetztändern");
    }
    */
  },

  end: function(){
    this.style.webkitFilter = 'opacity(0)';
    this.volume = 0;
  },

  unsupported: function(){
    this.innerHTML = 'Your device / browser does not support this :(';
  }
});




