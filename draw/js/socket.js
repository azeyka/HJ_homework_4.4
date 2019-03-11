'use strict';

window.editor.addEventListener('update', event => {
  const ws = new WebSocket('wss://neto-api.herokuapp.com/draw'),
        canvas = event.canvas;
  
  ws.addEventListener('open', (event) => {
    canvas.toBlob(img => ws.send(img));
  });
    
});