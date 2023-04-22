'use strict';

window.addEventListener('load', () => {

  // window.alert('DBを開きました！');
  console.log('さぁカード名は読み込めいているか');
  const cardName = document.getElementsByClassName("card_name");

  // console.log(cardName);

  const elementsArray = Array.from(cardName);
  elementsArray.forEach(e => console.log(e.innerHTML + " for " + encodeURIComponent(e.innerHTML)));
  // elementsArray.forEach(e => console.log(e.innerHTML + " for " + conv.encode(e.innerHTML, encoding)));

});
