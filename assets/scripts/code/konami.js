'use strict';

let allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right',
  'left', 'right', 'a', 'b'
];

let konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {

  let key = allowedKeys[e.keyCode];

  let requiredKey = konamiCode[konamiCodePosition];

  if (key === requiredKey) {

    konamiCodePosition++;

    if (konamiCodePosition === konamiCode.length) {
      $('.user-display').text('Lives: 30');
    }
  } else {
    konamiCodePosition = 0;
  }
});
