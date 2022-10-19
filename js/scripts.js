// DROPDOWN
document.getElementById('wrapper').onclick = function() {

  var className = ' ' + wrapper.className + ' ';
  
  this.className = ~className.indexOf(' active ') ?
                       className.replace(' active ', ' ') :
                       this.className + ' active';
  };