import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

function capitalizeWords(str) {
  const words = str.toLowerCase().split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}


const input = 'heLLO wOrlD';
const output = capitalizeWords(input);


document.querySelector('#app').innerHTML = `
  <div>
    
    
    
    
    <p class="result">
      ${output}
    </p>
    <input type="text" id="userInput" placeholder="Enter text">
    <button id="updateButton">Update</button>
  </div>
`;




document.querySelector('#updateButton').addEventListener('click', () => {
  const userInput = document.querySelector('#userInput').value;
  const updatedOutput = capitalizeWords(userInput);
  document.querySelector('.result').textContent = updatedOutput;
});
