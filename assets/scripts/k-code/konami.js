'use strict';

const activateKcode = function() {

  const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };

  const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right',
    'left', 'right', 'a', 'b'];

  let konamiCodePosition = 0;

  document.addEventListener('keydown', function(e) {

    const key = allowedKeys[e.keyCode];

    const requiredKey = konamiCode[konamiCodePosition];

    if (key === requiredKey) {

      konamiCodePosition++;

      if (konamiCodePosition === konamiCode.length) {
        $('.user-display').text('Lives: 30');
      }
    } else {
      konamiCodePosition = 0;
    }
  });
}

const kCodeHandler = function() {
  activateKcode();
}

module.exports = {
  kCodeHandler
}
