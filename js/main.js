/* 1 creare un array di immagini.
   2 immettere le immagini nel DOM 
   3 creare un ciclo per cui un immagine sostituisca l'altra
   4 creare un due button in cui al click scorre le immagini  avanti e indietro
*/

const imagesList = []

for (let i = 1; i <= 5; i++) {
    imagesList.push('img/'+ i +'.webp')
}

console.log(imagesList);


const sliderDom = document.querySelector('slider');

let sliderContent = "";

for (let i = 1; i <= imagesList.lenght; i++) {
    const imageWrapper = `<div class="images">
                            <img class="photo" src="${imagesList[i]}" alt="prima immagine">
                          </div> `
    sliderContent += imageWrapper;                          
}

sliderDom.innerHTML = sliderContent