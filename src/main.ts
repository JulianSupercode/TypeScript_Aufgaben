import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
// Addition
let addition_operator: number = 1 + 1;
console.log('addition: ' + addition_operator);

// // Subtraktion
// let subtraktion_operator: number = 2 - 1;
// console.log('subtraktion: ' + subtraktion_operator);

// // Multiplikation
// let multiplication_operator: number = 2 * 2;
// console.log('multiplication: ' + multiplication_operator);

// // Division
// let division_operator: number = 4 / 2;
// console.log('division: ' + division_operator);

// // Modulo: zeigt an, was der Rest sein würde.
// let modulo_operator: number = 14 % 5;
// console.log('modulus: ' + modulo_operator);

