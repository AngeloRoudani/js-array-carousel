/* 1 creare un array di immagini.
   2 immettere le immagini nel DOM 
   3 creare un ciclo per cui un immagine sostituisca l'altra
   4 creare un due button in cui al click scorre le immagini  avanti e indietro
*/

const imagesList = []

for (let i = 1; i <= 5; i++) { // creo un array delle immagini
    imagesList.push('img/'+ i +'.webp')
}

console.log(imagesList);


const sliderDom = document.querySelector('.slider'); // faccio riferimento allo slider

let sliderContent = "";

for (let i = 0; i < imagesList.length; i++) { //introduco le immagini dinamicamente nello slider
    const imageWrapper = `<div class="images">
                            <img class="photo" src="${imagesList[i]}" alt="immagine"/>
                          </div> `;

    sliderContent += imageWrapper;   
    console.log ("slider:" + imageWrapper);                      
} 
sliderDom.innerHTML = sliderContent;

//immetto HTML di thumbnails
const thumbDom = document.querySelector('.thumbnails');

let thumbContent = "";


for (let i = 0; i < imagesList.length; i++) { //introduco le immagini dinamicamente nel thumbDom
    const thumbPhoto = `<img class="photo_thumb" src="${imagesList[i]}" alt="immagine"/>`;

    thumbContent += thumbPhoto;   
    console.log ("slider:" + thumbDom);                      
} 

thumbDom.innerHTML = thumbContent;


const imagesDom = document.getElementsByClassName('images'); // prendo tutte le immagini

let imageActive = 0;

imagesDom[imageActive].classList.add('show'); // immetto la classe (show) per rendere visibile la prima immagine

console.log(imagesDom);

// creo un ascoltatore di eventi per cliccare sui pulsanti e far slittare la classe (show)
// all'infinito...

const nextDom = document.querySelector('.next')

const prevDom = document.querySelector('.prev')

nextDom.addEventListener('click' , 
    
    function() {
            
        if (imageActive < imagesDom.length - 1) {
            imagesDom[imageActive].classList.remove('show');
            imageActive++;
            imagesDom[imageActive].classList.add('show');

            console.log (nextDom);
        
        } else if (imageActive == imagesDom.length - 1) {
            imagesDom[imageActive].classList.remove('show');
            imageActive = 0;
            imagesDom[imageActive].classList.add('show');
        }
    
    }
    
)

prevDom.addEventListener('click' , 

    function() {
        if (imageActive > 0) {
            imagesDom[imageActive].classList.remove('show');
            imageActive--;
            imagesDom[imageActive].classList.add('show');

        } else if (imageActive == 0) {
            imagesDom[imageActive].classList.remove('show');
            imageActive = imagesDom.length - 1;
            imagesDom[imageActive].classList.add('show');

        }

    }
)



