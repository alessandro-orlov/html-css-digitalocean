//Overlay mobile menu
var overlay = document.getElementById('overlay');
overlay.className = 'height-0';

//Burger button
var burgerMenu = document.getElementById('burger-menu')

//Toggle on/off overlay
burgerMenu.addEventListener('click',
function () {
    if (overlay.className == "height-0") {
      overlay.className = 'height-100';
      burgerMenu.className = 'active';
      }
    else {
      overlay.className = 'height-0';
      burgerMenu.className = '';
    }
  }
)
