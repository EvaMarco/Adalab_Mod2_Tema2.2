'use strict';

const result = document.querySelector('.text');
const input = document.querySelector('.input');


function calculate(event){

    const inputName = event.currentTarget.value;
    console.log(inputName);
    const letras =  inputName.length;

    result.innerHTML = `Tu nombre tiene ${letras} letras.`;
}

input.addEventListener('keyup', calculate)

