


const appSetting = {
  databaseUrl : "https://playground-e0167-default-rtdb.firebaseio.com/" 
}

const inputField = document.getElementById('input_field');
const addButton = document.getElementById('button');

console.log(inputField, button);

addButton.addEventListener('click', () => {
  let inputValue = inputField.value;
  console.log(inputValue);
});
