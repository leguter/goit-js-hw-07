// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const inputElem = document.querySelector('#controls input');
// const divBoxesElem = document.querySelector('#boxes');
// const btnCreate = document.querySelector('#controls button[data-create]');
// const btnDestroy = document.querySelector('#controls button[data-destroy]');
// function createBoxes(amount) {
//     destroyBoxes();
//     let count = 30;
//     let divs = '';
//     for (let i = 0; i < amount; i++) {
//       count += 10;
//       divs += `<div style="height:${count}px; width:${count}px; color:${getRandomHexColor()}"></div>`;
       
//     }
//     divBoxesElem.insertAdjacentHTML('aftereend', divs);
//   }
//   function destroyBoxes() {
//   document.innerHTML = '';
// }
// btnCreate.addEventListener('click', () => {
  
//   const amount = inputElem.value;
//   if (amount >= 1 & 100 >= amount) {
//     createBoxes(amount);
//     inputElem.value = '';
//   }
  
// });
// btnDestroy.addEventListener('click', destroyBoxes);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector('#boxes');
const inputNumbers = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');

function createBoxes(amount) {
  destroyBoxes();
  let setOfBoxes = '';
  let count = 30;
  for (let i = 0; i < amount; i++) {
    count += 10;
    setOfBoxes += `<div style="width: ${count}px; height: ${count}px; background-color: ${getRandomHexColor()}"></div>`;
  }
  boxes.insertAdjacentHTML('beforeend', setOfBoxes);
}
function destroyBoxes() {
  boxes.innerHTML = '';
}
createBtn.addEventListener('click', () => {
  const amount = inputNumbers.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumbers.value = '';
  }
});
destroyBtn.addEventListener('click', destroyBoxes);
