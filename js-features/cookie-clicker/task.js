const counterDisplay = document.getElementById('clicker__counter');
const image = document.getElementById("cookie");
let counter = 0;
let isEnlarge = false;
image.onclick = function() {
    counter++;
    counterDisplay.textContent = counter;
    if(isEnlarge) {
        image.width = 200;
      } else {
          image.width = 230;
      }
      isEnlarge = !isEnlarge;
};