$(function () {
  $('[data-toggle="popover"]').popover({trigger: 'manual'});
});

Pressure.set('.device-circle', {
  change: function(force){
    console.log(force);
    this.style.width = Pressure.map(force, 0, 1, 10, $(this).data('size')) + 'em';
    this.style.height = Pressure.map(force, 0, 1, 10, $(this).data('size')) + 'em';
    this.style.marginTop = '-' + Pressure.map(force, 0, 1, 10, $(this).data('size'))/2 + 'em';
    this.style.marginLeft = '-' + Pressure.map(force, 0, 1, 10, $(this).data('size'))/2 + 'em';
  },
  startDeepPress: function(){
    this.style.backgroundColor = '#5bc0de';
  },
  endDeepPress: function(){
    this.style.backgroundColor = '#d9534f';
  },
  end: function(){
    this.style.width = '10em';
    this.style.height = '10em';
    this.style.marginTop = '-5em';
    this.style.marginLeft = '-5em';
  }
});

Pressure.set('.device-circle', {
  change: function(){
    $('.pressure-failed').hide();
  },
  unsupported: function(){
    $('.pressure-failed').show();
  }
}, {polyfill: false});

var block = {
  start: function(){
  },

  change: function(force, event){
    this.style.width = ((200 * force) + 200) + 'px';
    this.innerHTML = force;
    this.style.backgroundColor = "rgb(" + parseInt(Pressure.map(force, 0, 1, 255, 0)) + ",100," + parseInt(Pressure.map(force, 0, 1, 0, 255)) +")";
    this.style.color = force > 0.3 ? 'white' : 'black';
  },

  end: function(){
    this.style.width = '200px';
    this.innerHTML = 0;
    this.style.backgroundColor = 'rgb(255,100,0)';
    this.style.color = 'black';
  },

  unsupported: function(){
    this.innerHTML = 'Sorry! Check the devices and browsers that Pressure works on above ^^^^';
  }
}

Pressure.set('#el1', block);
Pressure.set('#el2', block, {only: 'desktop'});
Pressure.set('#el3', block, {only: 'mobile'});

Pressure.set('#pressure-test', {
  start: function(){
    this.innerHTML = 'Pressure is Supported!';
  },
  unsupported: function(){
    this.innerHTML = 'Pressure is NOT Supported!';
  }
});


Pressure.set('#peanuts', {
  change: function(force, event){
    this.style.webkitFilter = 'blur(' + Pressure.map(force, 0, 0.7, 20, 0) + 'px)';
    console.log("force " + force);
  },

  end: function(){
    this.style.webkitFilter = 'blur(20px)';
  },

  unsupported: function(){
    this.innerHTML = 'Your device / browser does not support this :(';
  }
});

var saveForce = 0;



