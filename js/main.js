let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');
let img5 = document.querySelector('.img5');
let img6 = document.querySelector('.img6');
let img7 = document.querySelector('.img7');
let img8 = document.querySelector('.img8');
let img9 = document.querySelector('.img9');
let img10 = document.querySelector('.img10');
let img11 = document.querySelector('.img11');
let img12 = document.querySelector('.img12');
let img13 = document.querySelector('.img13');
let img14 = document.querySelector('.img14');
let img15 = document.querySelector('.img15');
let img16 = document.querySelector('.img16');

let allImg = document.querySelectorAll('img');

let imageIndex = [];

let interval;

let tableau = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

let textZone = document.querySelector('.texte');

let backImg = "../assets/front.png";

let images = [
    "../assets/ecureuil.jpg", "../assets/oursbaby.jpg", "../assets/lionnegraou.jpg", "../assets/lapinscrottes.jpg", "../assets/lamacrachat.jpg", "../assets/chientoutou.jpg", "../assets/chatminou.jpg", "../assets/anehihan.jpg", "../assets/anehihan.jpg", "../assets/oursbaby.jpg", "../assets/lionnegraou.jpg", "../assets/lapinscrottes.jpg", "../assets/ecureuil.jpg", "../assets/lamacrachat.jpg", "../assets/chientoutou.jpg", "../assets/chatminou.jpg"];

let imgShuffled = [];
let cardPlayed = [];

let success = 0;
let currentTry = 0;
let maxTry = 10;


let shuffleImages = function (img) {
    let counter = img.length;

    while (counter > 0) {
        let index = Math.round(Math.random() * counter);

        imgShuffled.push(img[index]);
        let removeImg = img.splice(index, 1);
        counter--;
    }
    if (imgShuffled.includes(undefined)) {
        let undefIndex = imgShuffled.indexOf(undefined);
        imgShuffled.splice(undefIndex, 1, img[0]);
        removeImg = img.splice(0, 1);
        return imgShuffled;

    } else {
        return imgShuffled;
    }
};

/// distribution sur le plateau

let distribution = function () {
    for (let i = 0; i < imgShuffled.length; i++) {
        let eachImg = tableau[i];
        eachImg.src = imgShuffled[i];
    }
};

//// jeu

let coverImg = function (imageIndex) {
    tableau[imageIndex[0]].src = backImg;
    tableau[imageIndex[1]].src = backImg;
    imageIndex.shift();
    imageIndex.shift();
}

function wait(imageIndex) {
    interval = setTimeout(function () {
        coverImg(imageIndex)
    }, 2000);
};


let flipImage = function (index) {
    imageIndex.unshift(index);
    console.log(imageIndex);
    tableau[index].src = imgShuffled[index];
    cardPlayed.push(imgShuffled[index]);
    if (cardPlayed.length === 2) {
        if (cardPlayed[0] !== cardPlayed[1]) {
            console.log("not good");
            wait(imageIndex);
            cardPlayed = [];
            currentTry++;
            console.log(cardPlayed);

        } else {
            console.log("good");
            success++;
            cardPlayed = [];
            if (success === 8) {
                alert('Bravo!')
            }
        }
    }

};


for (let i = 0; i < allImg.length; i++) {

    allImg[i].addEventListener('click', function () {

        flipImage(i);
    });
}


/////// start Game
shuffleImages(images);


console.log(imgShuffled);
console.log(cardPlayed);
