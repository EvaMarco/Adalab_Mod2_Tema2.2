'use strict';

const main = document.querySelector('.main');

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';


main.innerHTML = `
<h2 class = "main__title"> Esta lista de los perretes más majetes.</h2>
<ul class = "list">
<li class = "list__item item1">
    <img src = "${firstDogImage}" alt = "Foto de perrete 1 " class = "dogimg"/>
    <p>${firstDogName}</p></li>
<li class = "list__item item2">
    <img src = "${secondDogImage}" alt = "Foto de perrete 2" class = "dogimg"/>
    <p>${secondDogName}</p></li>
<li class = "list__item item3">
    <img src = "${thirdDogImage}" alt="Foto de perrete 3" class = "dogimg"/>
    <p>${thirdDogName}</p></li>
</ul>

`
