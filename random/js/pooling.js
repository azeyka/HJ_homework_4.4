'use strict';

const numbersPooling = document.querySelector('.pooling');
setInterval(requestP, 5000)


function requestP() {
  fetch('https://neto-api.herokuapp.com/comet/pooling')
    .then(res => {
        if (200 <= res.status && res.status < 300) {
          return res.text();
        }
        throw new Error(response.statusText);
      })
    .then(data => {
      Array.from(numbersPooling.children).forEach(tag => {
        tag.innerHTML === data ? tag.classList.add('flip-it') : tag.classList.remove('flip-it');
      })
    })
    .catch(error => {
      console.log(error);
    })
}
