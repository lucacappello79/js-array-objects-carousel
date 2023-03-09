const images = [

    {   
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },{
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const arrowUpEl = document.getElementById("arrow-up")
const arrowDownEl = document.getElementById("arrow-down")
const imgActiveEl = document.getElementById("img-active")
const dotsWrapperEl = document.getElementById("dots-wrapper")
const titleEl = document.getElementById("title");
const textEl = document.getElementById("text");


function updateCarousel(index) {

    dotElements[index].classList.add('active');

    imgActiveEl.src = images[index].image;

    titleEl.textContent = images[index].title;

    textEl.textContent = images[index].text;

  }
  
  let index = 0;

  function createDots() {

    for (let i = 0; i < images.length; i++) {

      let newDot = document.createElement('div');

      newDot.classList.add('dot');

      dotsWrapperEl.append(newDot);

    }
    
  }

  createDots();
  
  /* Dots
  for (let i = 0; i < images.length; i++) {

    let newDot = document.createElement('div');

    newDot.classList.add('dot');

    dotsWrapperEl.append(newDot);

  }
  end dots*/
  
  const dotElements = document.querySelectorAll('.dot');
  dotElements[index].classList.add('active');
  
  arrowUpEl.addEventListener('click', function () {

    dotElements[index].classList.remove('active');

    index = (index + 1) % images.length;

    updateCarousel(index);

  });
  
  arrowDownEl.addEventListener('click', function () {

    dotElements[index].classList.remove('active');

    index = (index - 1 + images.length) % images.length;

    updateCarousel(index);

  });
  
  imgActiveEl.src = images[index].image;
  titleEl.textContent = images[index].title;
  textEl.textContent = images[index].text;

/*
//dots
for (let i = 0; i < images.length; i++) {

    let newDot = document.createElement("div");
    newDot.classList.add("dot")
    dotsWrapperEl.append(newDot);
}


let index = 0;
imgActiveEl.src = images[index].image;
titleEl.textContent = images[index].title;
textEl.textContent = images[index].text;


const dotElements = document.querySelectorAll(".dot");

dotElements[index].classList.add("active");

arrowUpEl.addEventListener("click", function() {

    dotElements[index].classList.remove("active");

    if (index == images.length -1) {

        index = 0;
        
    } else {

        index++;
    }

    dotElements[index].classList.add("active");
    imgActiveEl.src = images[index].image;
    titleEl.textContent = images[index].title;
    textEl.textContent = images[index].text;
});



arrowDownEl.addEventListener("click", function() {

    dotElements[index].classList.remove("active");

    if(index == 0) {

        index = images.length - 1;

    } else {
        
        index--;

    }

    dotElements[index].classList.add("active");
    imgActiveEl.src = images[index].image;
    titleEl.textContent = images[index].title;
    textEl.textContent = images[index].text;

});
*/
