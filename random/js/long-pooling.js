'use strict';

const numbersLongPooling = document.querySelector('.long-pooling');
requestLP();

function requestLP() {
  fetch('https://neto-api.herokuapp.com/comet/long-pooling')
    .then(res => {
        if (200 <= res.status && res.status < 300) {
          return res.text();
        }
        throw new Error(response.statusText);
      })
    .then(data => {
      Array.from(numbersLongPooling.children).forEach(tag => {
        tag.innerHTML === data.trim() ? tag.classList.add('flip-it') : tag.classList.remove('flip-it');
      });
      requestLP();
    })
    .catch(error => {
      console.log(error);
    })
};



