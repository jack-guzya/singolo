//----------------------------------------------------NAVIGATION------------------------------------

const NAVIGATION = document.querySelector("ul.navigation");

NAVIGATION.addEventListener("click", event => {
  NAVIGATION.querySelectorAll("li").forEach(elem =>
    elem.classList.remove("navigation_active")
  );
  event.target.closest("li").classList.add("navigation_active");
});

//--------------------------------------------------PORTFOLIO BUTTONS----------------------------

const IMAGES_SWITCHING = document.querySelector("div.portfolio__images-switching");

const PORTFOLIO_IMAGES = document.getElementById('presentation');

let value = false;

IMAGES_SWITCHING.addEventListener("click", event => {
  IMAGES_SWITCHING.querySelectorAll("button").forEach(elem =>
    elem.classList.remove("images-switching_active")
  );
  event.target.classList.add("images-switching_active");

  function checkImage (position) {
    if (PORTFOLIO_IMAGES.children[position].children[0].getAttribute('src') == 'assets/Project_1.png') {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = '8px';
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = '11px';
    } 

    if (PORTFOLIO_IMAGES.children[position].children[0].getAttribute('src') == 'assets/Project_2.png') {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = '82px';
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = '43px';
    } 

    if (PORTFOLIO_IMAGES.children[position].children[0].getAttribute('src') == 'assets/Project_3.png') {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = '11px';
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = '1px';
    } 

    if (PORTFOLIO_IMAGES.children[position].children[0].getAttribute('src') == 'assets/Project_4.png') {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = '24px';
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = '2px';
    } 

    if (PORTFOLIO_IMAGES.children[position].children[0].getAttribute('src') == 'assets/Project_5.png') {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = '10px';
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = '16px';
    } 

    if (PORTFOLIO_IMAGES.children[position].children[0].getAttribute('src') == 'assets/Project_6.png') {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = '16px';
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = '4px';
    } 

    if (PORTFOLIO_IMAGES.children[position].children[0].getAttribute('src') == 'assets/Project_7.png') {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = '31px';
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = '39px';
    } 

    if (PORTFOLIO_IMAGES.children[position].children[0].getAttribute('src') == 'assets/Project_8.png') {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = '24px';
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = '32px';
    } 

    if (PORTFOLIO_IMAGES.children[position].children[0].getAttribute('src') == 'assets/Project_9.png') {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = '16px';
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = '2px';
    } 

    if (PORTFOLIO_IMAGES.children[position].children[0].getAttribute('src') == 'assets/Project_10.png') {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = '141px';
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = '113x';
    } 

    if (PORTFOLIO_IMAGES.children[position].children[0].getAttribute('src') == 'assets/Project_11.png') {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = '144px';
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = '175px';
    } 

    if (PORTFOLIO_IMAGES.children[position].children[0].getAttribute('src') == 'assets/Project_12.png') {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = '36px';
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = '60px';
    } 
  }
  
   //---------------------Web Design-------------------------------------
  
  if (event.target.innerHTML == 'Web Design') {
    
     for (let i = 0; i < PORTFOLIO_IMAGES.querySelectorAll("li").length; i++) {
      PORTFOLIO_IMAGES.children[i].children[0].setAttribute('src', 'assets/Project_' + (i + 2) + '.png')
      if (i == 11) PORTFOLIO_IMAGES.children[i].children[0].setAttribute('src', 'assets/Project_' + 1 + '.png')
      console.log(PORTFOLIO_IMAGES.children[i].children[0].getAttribute('src') == 'assets/Project_1.png')
      checkImage(i)
      setInterval(() => {
         
      }, 1000)
    }
    
  }

//---------------------All-------------------------------------

  if (event.target.innerHTML == 'All') {
    
    for (let i = 0; i < PORTFOLIO_IMAGES.querySelectorAll("li").length; i++) {
     PORTFOLIO_IMAGES.children[i].children[0].setAttribute('src', 'assets/Project_' + (i + 1) + '.png')
     checkImage(i)
   }
 }

 //---------------------Graphic Design-------------------------

 if (event.target.innerHTML == 'Graphic Design') {
  
  for (let i = 0; i < PORTFOLIO_IMAGES.querySelectorAll("li").length; i++) {
   PORTFOLIO_IMAGES.children[i].children[0].setAttribute('src', 'assets/Project_' + (i + 3) + '.png')
   if (i >= 10) PORTFOLIO_IMAGES.children[i].children[0].setAttribute('src', 'assets/Project_' + (i - 9) + '.png')
   checkImage(i)
 }
}

//---------------------Artwork--------------------------------

if (event.target.innerHTML == 'Artwork') {
  
  for (let i = 0; i < PORTFOLIO_IMAGES.querySelectorAll("li").length; i++) {
   PORTFOLIO_IMAGES.children[i].children[0].setAttribute('src', 'assets/Project_' + (i + 4) + '.png')
   if (i >= 9) PORTFOLIO_IMAGES.children[i].children[0].setAttribute('src', 'assets/Project_' + (i - 8) + '.png')
   checkImage(i)
 }
}
});


//--------------------------------------------------PORTFOLIO IMAGES----------------------------

PORTFOLIO_IMAGES.addEventListener('click', (event) => {
  PORTFOLIO_IMAGES.querySelectorAll('li').forEach(elem => elem.classList.remove('presentation_active'));
  event.target.closest('li').classList.add('presentation_active')
})