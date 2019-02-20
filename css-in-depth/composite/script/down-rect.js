window.onload = function () {
  var container = document.querySelector('.container');
  var clone;
  var dotNumber = 100;
  var dotArray = [];

  for(let i = 0; i < dotNumber; i++) {
    clone = document.querySelector('.dot').cloneNode(true);
    container.appendChild(clone);
    dotArray.push(clone);
  }

};
