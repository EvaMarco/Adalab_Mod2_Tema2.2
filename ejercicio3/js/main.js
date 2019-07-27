'use strict';

const main = document.querySelector('.main');

const fruta1 = 'kiwi';
const fruta2 = 'peraConferencia';
const fruta3 = 'uva';

const precioFruta1 = 5;
const precioFruta2 = 2;
const precioFruta3 = 4;
let compra = 0;

compra = precioFruta1 * 2 + precioFruta2 * 3 + precioFruta3 * 0.5;

console.log(`Hemos comprado, 2 kg de ${fruta1}, 3 kilos de ${fruta2} y medio kilo de ${fruta3}.
El total de tu compra es ${compra}€
`);


main.innerHTML= `<p>Hemos comprado, 2 kg de ${fruta1}, 3 kilos de ${fruta2} y medio kilo de ${fruta3}.
El total de tu compra es ${compra}€</p>
`;