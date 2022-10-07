import './css/styles.css';

function serviceApi() {
  return fetch('https://swapi.dev/api/people/4');
}
serviceApi()
  .then(resp => resp.json())
  .then(console.log)
  .catch(e => console.log(e));
