//----------------------------------------------------NAVIGATION------------------------------------

const NAVIGATION = document.querySelector("ul.navigation"),
  ANCHORS = document.querySelectorAll('a[href^="#"]');

let relativeTopList = {},
  heightHeader =
    +getComputedStyle(document.querySelector("header"))
      .height.match(/\-*\d*\.*\d*/g)
      .join("") + 6;

function getCoordinate(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset
  };
}

function addActive(event) {
  NAVIGATION.querySelectorAll("li").forEach((
    elem // add class active
  ) => elem.classList.remove("navigation_active"));
  event.closest("li").classList.add("navigation_active");
}

for (let anchor of ANCHORS) {
  if (/#.+/.test(anchor.href)) {
    let blockId = anchor.getAttribute("href").substr(1),
      block = document.getElementById(blockId);

    relativeTopList[blockId] = block.offsetTop;

    anchor.addEventListener("click", function(event) {
      // event to navigation buttons
      event.preventDefault(); // remove default event

      window.scrollTo(0, relativeTopList[blockId] - heightHeader);
    });
  }
}

document.addEventListener("scroll", () => {
  for (let anchor in relativeTopList)
    if (window.scrollY > relativeTopList[anchor] - heightHeader - 5)
      addActive(NAVIGATION.querySelector('a[href^="#' + anchor + '"]'));
});

//--------------------------------------------------BURGER MENU---------------------------------

const BURGER_MENU_BUTTON = document.querySelector("div.burger-menu"),
  HEADER_NAVIGATION = document.querySelector("nav.header__navigation"),
  NAVIGATION_BACKGROUND = document.querySelector("div.navigation__background");
let status = false,
  resolution = true;

function show() {
  HEADER_NAVIGATION.classList.remove("burger-right");
  status = true;
  resolution = true;
  HEADER_NAVIGATION.removeEventListener("animationend", show);
}

function hide() {
  NAVIGATION_BACKGROUND.classList.add("hide");
  HEADER_NAVIGATION.classList.add("burger-hide");
  HEADER_NAVIGATION.classList.remove("burger-left");
  status = false;
  resolution = true;
  HEADER_NAVIGATION.removeEventListener("animationend", hide);
}

function burgerMenu() {
  if (resolution) {
    resolution = false;
    switch (status) {
      case false:
        NAVIGATION_BACKGROUND.classList.remove("hide");
        BURGER_MENU_BUTTON.classList.remove("rotation-left");
        BURGER_MENU_BUTTON.classList.add("rotation-right");
        HEADER_NAVIGATION.classList.remove("burger-hide");
        HEADER_NAVIGATION.classList.add("burger-right");
        HEADER_NAVIGATION.addEventListener("animationend", show);
        NAVIGATION_BACKGROUND.addEventListener("click", burgerMenu);
        NAVIGATION.addEventListener("click", burgerMenu);
        break;
      case true:
        BURGER_MENU_BUTTON.classList.remove("rotation-right");
        BURGER_MENU_BUTTON.classList.add("rotation-left");
        HEADER_NAVIGATION.classList.remove("burger-right");
        HEADER_NAVIGATION.classList.add("burger-left");
        NAVIGATION_BACKGROUND.removeEventListener("click", burgerMenu);
        NAVIGATION.removeEventListener("click", burgerMenu);
        HEADER_NAVIGATION.addEventListener("animationend", hide);
        break;
    }
  }
}

BURGER_MENU_BUTTON.addEventListener("click", burgerMenu);

//--------------------------------------------------PORTFOLIO BUTTONS----------------------------

const IMAGES_SWITCHING = document.querySelector(
    "div.portfolio__images-switching"
  ),
  PORTFOLIO_BUTTONS = document.querySelectorAll(
    "div.portfolio__images-switching > button"
  ),
  PORTFOLIO_IMAGES = document.getElementById("presentation");

let value = true;
const defaultCollection = PORTFOLIO_IMAGES.querySelectorAll("li");

for (let button of PORTFOLIO_BUTTONS) {
  button.addEventListener("click", event => {
    if (event.target.className == "images-switching_active") return;
    if (!value) return;
    value = false;

    PORTFOLIO_IMAGES.innerHTML = "";

    IMAGES_SWITCHING.querySelectorAll("button").forEach(elem =>
      elem.classList.remove("images-switching_active")
    );

    PORTFOLIO_IMAGES.classList.add("switch");

    event.target.classList.add("images-switching_active");

    PORTFOLIO_IMAGES.addEventListener("animationend", () => {
      PORTFOLIO_IMAGES.classList.remove("switch");
      value = true;
    });

    //   //---------------------Web Design-------------------------------------

    if (event.target.innerHTML == "Web Design") {
      for (let i = 0; i < defaultCollection.length; i++) {
        if (i >= 11) PORTFOLIO_IMAGES.append(defaultCollection[i % 11]);
        else PORTFOLIO_IMAGES.append(defaultCollection[i + 1]);
      }
    }
    //   //---------------------All-------------------------------------

    if (event.target.innerHTML == "All") {
      for (let i = 0; i < defaultCollection.length; i++) {
        PORTFOLIO_IMAGES.append(defaultCollection[i]);
      }
    }

    //   //---------------------Graphic Design-------------------------

    if (event.target.innerHTML == "Graphic Design") {
      for (let i = 0; i < defaultCollection.length; i++) {
        if (i >= 10) PORTFOLIO_IMAGES.append(defaultCollection[i % 10]);
        else PORTFOLIO_IMAGES.append(defaultCollection[i + 2]);
      }
    }

    //   //---------------------Artwork--------------------------------

    if (event.target.innerHTML == "Artwork") {
      for (let i = 0; i < defaultCollection.length; i++) {
        if (i >= 9) PORTFOLIO_IMAGES.append(defaultCollection[i % 9]);
        else PORTFOLIO_IMAGES.append(defaultCollection[i + 3]);
      }
    }
  });
}

//--------------------------------------------------PORTFOLIO IMAGES----------------------------

PORTFOLIO_IMAGES.addEventListener("click", event => {
  PORTFOLIO_IMAGES.querySelectorAll("li").forEach(elem =>
    elem.classList.remove("presentation_active")
  );
  event.target.closest("li").classList.add("presentation_active");
});

//-----------------------------------------------BUTTON OF PHONE------------------------------

let switchVerticalScreen = true,
  switchHorizontalScreen = true;

document
  .querySelector("div.phone-vertical__button")
  .addEventListener("click", () => {
    switchVerticalScreen = !switchVerticalScreen;
    if (!switchVerticalScreen) {
      document.querySelector(
        "div.phone-vertical__image"
      ).children[1].style.opacity = "0";
      document.querySelector(
        "div.phone-vertical__image"
      ).children[1].style.transitionDuration = "0.5s";
    } else
      document.querySelector(
        "div.phone-vertical__image"
      ).children[1].style.opacity = "1";
  });

document
  .querySelector("div.phone-horizontal__button")
  .addEventListener("click", event => {
    switchHorizontalScreen = !switchHorizontalScreen;
    if (!switchHorizontalScreen) {
      document.querySelector(
        "div.phone-horizontal__image"
      ).children[1].style.opacity = "0";
      document.querySelector(
        "div.phone-horizontal__image"
      ).children[1].style.transitionDuration = "0.5s";
    } else
      document.querySelector(
        "div.phone-horizontal__image"
      ).children[1].style.opacity = "1";
  });

//------------------------------------------------REGISTRATION MESSAGE---------------------------

const FORM = document.querySelector("form.registration__contacts-form"),
  BLOCK_MESSAGE = document.querySelector("div.registration__block-message");

let screenMessage = false,
  themeMessage = BLOCK_MESSAGE.querySelector("p.message__theme"),
  descriptionMessage = BLOCK_MESSAGE.querySelector("p.message__description");

FORM.onsubmit = () => {
  BLOCK_MESSAGE.classList.remove("hidden");
  if (/^\s*$/.test(FORM.children[2].value))
    themeMessage.innerHTML = "No subject";
  else {
    themeMessage.innerHTML = "Subject: " + FORM.children[2].value;
  }

  if (/^\s*$/.test(FORM.children[3].value))
    descriptionMessage.innerHTML = "No description";
  else {
    descriptionMessage.innerHTML = "Description: " + FORM.children[3].value;
  }
  let showMessage = setInterval(() => {
    BLOCK_MESSAGE.style.opacity = String(
      +getComputedStyle(BLOCK_MESSAGE).opacity + 0.01
    );
  }, 1);
  setInterval(() => clearInterval(showMessage), 1000);

  return false;
};

document.querySelector("button.message__btn").onclick = () => {
  for (let i = 0; i < FORM.length - 1; i++) FORM.children[i].value = "";
  let removeMessage = setInterval(() => {
    BLOCK_MESSAGE.style.opacity = String(
      +getComputedStyle(BLOCK_MESSAGE).opacity - 0.01
    );
  }, 1);
  setInterval(() => clearInterval(removeMessage), 1000);
  setTimeout(() => BLOCK_MESSAGE.classList.add("hidden"), 1000);
};

//------------------------------------------SLIDER-----------------------------------------------

const BUTTON_LEFT = document.querySelector("button.block-buttons__button-left"),
  BUTTON_RIGHT = document.querySelector("button.block-buttons__button-right"),
  SLIDE = document.querySelectorAll("div.slide"),
  SLIDER = document.querySelector("div.slider");

let currentSlide = 0,
  nextSlide = 0;

function changeCurrentSlide(n) {
  return (n + SLIDE.length) % SLIDE.length;
}

function showSlide(n) {
  SLIDE[n].classList.remove("hideSlide");
}

function hideSlide(n) {
  SLIDE[n].classList.add("hideSlide");
}

function addDirection(n, direction) {
  SLIDE[n].classList.add(direction);
}

function delDirection(n, direction) {
  SLIDE[n].classList.remove(direction);
}

function delDirectionAll() {
  for (let i = 0; i < SLIDE.length; i++) {
    SLIDE[i].classList.remove("to-left");
    SLIDE[i].classList.remove("to-right");
    SLIDE[i].classList.remove("from-left");
    SLIDE[i].classList.remove("from-right");
  }
}

function delBackground(n, slider) {
  if (n == 0) slider.classList.remove("first-background");
  else if (n == 1) slider.classList.remove("second-background");
}

function addBackground(nextSlide, slider) {
  if (nextSlide == 0) slider.classList.add("first-background");
  else if (nextSlide == 1) slider.classList.add("second-background");
}

BUTTON_LEFT.addEventListener("click", () => {
  nextSlide = changeCurrentSlide(currentSlide - 1);
  delBackground(currentSlide, SLIDER);
  addBackground(nextSlide, SLIDER);
  showSlide(nextSlide);
  showSlide(currentSlide);
  addDirection(currentSlide, "to-right");
  addDirection(nextSlide, "from-left");
});
SLIDE[nextSlide].addEventListener("animationend", () => {
  hideSlide(currentSlide);
  delDirectionAll();
  currentSlide = nextSlide;
});

BUTTON_RIGHT.addEventListener("click", () => {
  nextSlide = changeCurrentSlide(currentSlide - 1);
  delBackground(currentSlide, SLIDER);
  addBackground(nextSlide, SLIDER);
  showSlide(nextSlide);
  showSlide(currentSlide);
  addDirection(currentSlide, "to-left");
  addDirection(nextSlide, "from-right");
});
