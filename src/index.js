import './css/styles.css';

function serviceApi() {
  return fetch('https://swapi.dev/api/people/4');
}
serviceApi()
  .then(resp => resp.json())
  .then(console.log)
  .catch(e => console.log(e));

// const formEl = document.querySelector('form');
// const selectEl = formEl.querySelector('#colorSelect');
// const removeBtn = formEl.querySelector('#removeOption');
// const addBtn = formEl.querySelector('#addOption');
// const addInput = formEl.querySelector('#add');

// removeBtn.addEventListener('click', onRemoveClick);
// addBtn.addEventListener('click', onAddBtnClick);

// function onRemoveClick() {
//   selectEl.selectedOptions[0].remove();
// }

// function onAddBtnClick() {
//   const newOption = document.createElement('option');
//   newOption.textContent = addInput.value;
//   // if (addInput.value.trim() === '') {
//   //   return;
//   // }
//   if (addInput.value.trim().length === 0) {
//     return;
//   }
//   // selectEl.appendChild(newOption);
//   selectEl.insertAdjacentHTML(
//     'beforeend',
//     `<option>${addInput.value}</option>`
//   );
//   addInput.value = '';
// }

// Отримати дані з API і вивести їх на сторінку
// https://dog.ceo/dog-api/

// const formEl = document.querySelector('.input');
// const btnEl = document.querySelector('.submitBtn');
// const listEl = document.querySelector('.list');

// btnEl.addEventListener('click', onBtnClick);

// function onBtnClick() {
//   console.log('Hello');
//   fetch(`https://dog.ceo/api/breeds/image/random/${formEl.value}`)
//     .then(data => data.json())
//     .then(data => renderList(data.message));
// }

// const renderList = function (list) {
//   console.log(list);
//   const markUp = list
//     .map((item, index) => {
//       return `<li style="list-style:none"><img width="350px" height="100px" src="${item}" alt="picture ${index}"/></li>`;
//     })
//     .join('');
//   listEl.innerHTML = markUp;
// };

// Отримати дані з API і вивести їх на сторінку
// https://deckofcardsapi.com/

// const newList = document.querySelector('.list');
// fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//   .then(resp => resp.json())
//   .then(resp => console.log(getCards(resp.deck_id)));

// const getCards = function (id) {
//   fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`)
//     .then(resp => resp.json())
//     .then(resp => renderList(resp.cards));
// };

// const renderList = function (list) {
//   console.log(list);
//   const markUp = list
//     .map((item, index) => {
//       const { code, image } = item;
//       return `<li style="list-style:none"><img src="${image}" alt="picture ${code}"/></li>`;
//     })
//     .join('');
//   newList.innerHTML = markUp;
// };

// function createUser() {
//   fetch(`https://reqres.in/api/users`, {
//     method: 'POST',
//     body: JSON.stringify({
//       name: 'morpheus',
//       job: 'leader',
//     }),
//   })
//     .then(resp => resp.json())
//     .then(resp => console.log(resp));
// }
// createUser();

// function updateUser() {
//   fetch(`https://reqres.in/api/users/2`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       name: 'morpheus',
//       job: 'leader',
//     }),
//   })
//     .then(resp => resp.json())
//     .then(resp => console.log(resp));
// }
// updateUser();

// function deleteUser() {
//   fetch(`https://reqres.in/api/users/2`, {
//     method: 'DELETE',
//   })
//     .then(resp => resp.json())
//     .then(resp => console.log(resp));
// }
// deleteUser();

// function findElement(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     if (func(i) === true) {
//       return i;
//       console.log(i);
//     } else {
//       return 'undefined';
//     }
//   }
// }

// findElement([1, 2, 3, 4], num => num % 2 === 0);
