'use strict';

const numbersWS = document.querySelector('.websocket'),
      ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');
  
ws.addEventListener('message', (event) => {
  Array.from(numbersWS.children).forEach(tag => {
    tag.innerHTML === event.data ? tag.classList.add('flip-it') : tag.classList.remove('flip-it');
  });
});