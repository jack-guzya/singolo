//----------------------------------------------------NAVIGATION------------------------------------

const NAVIGATION = document.querySelector("ul.navigation"),
  ANCHORS = document.querySelectorAll('a[href^="#"]');

let enabled = true,
  relativeTopList = {},
  heightHeader =
    +getComputedStyle(document.querySelector("header"))
      .height.match(/\-*\d*\.\d*/g)
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
      if (!enabled) return;

      const blockID = anchor.getAttribute("href").substr(1); //id section
      let relativelyTop = document
          .getElementById(blockID)
          .getBoundingClientRect().top,
        step = 1,
        scrollDown,
        scrollUp;

      enabled = false;

      if (relativelyTop >= heightHeader) {
        // DOWN
        scrollDown = setTimeout(function iter() {
          relativelyTop = document
            .getElementById(blockID)
            .getBoundingClientRect().top;

          if (relativelyTop < 180) step = Math.sqrt(step);
          else step += 1;

          window.scrollBy(0, step);

          if (relativelyTop >= heightHeader - 3) {
            scrollDown = setTimeout(iter, 1);
          }
        }, 1);
      } else {
        //UP
        scrollUp = setTimeout(function iter() {
          relativelyTop = document
            .getElementById(blockID)
            .getBoundingClientRect().top;

          if (relativelyTop > -50) step = Math.sqrt(step);
          else step += 1;

          window.scrollBy(0, -step);

          if (relativelyTop < heightHeader - 3) {
            scrollUp = setTimeout(iter, 1);
          }
        }, 1);
      }

      setTimeout(() => {
        enabled = true;
        clearInterval(scrollDown);
        clearInterval(scrollUp);
      }, 1000);
    });
  }
}

document.addEventListener("scroll", () => {
  for (let anchor in relativeTopList)
    if (window.scrollY > relativeTopList[anchor] - heightHeader)
      addActive(NAVIGATION.querySelector('a[href^="#' + anchor + '"]'));
});

//--------------------------------------------------PORTFOLIO BUTTONS----------------------------

const IMAGES_SWITCHING = document.querySelector(
    "div.portfolio__images-switching"
  ),
  PORTFOLIO_BUTTONS = document.querySelectorAll(
    "div.portfolio__images-switching > button"
  ),
  PORTFOLIO_IMAGES = document.getElementById("presentation");

let value = true;

for (let button of PORTFOLIO_BUTTONS) {
  button.addEventListener("click", event => {
    if (event.target.className == "images-switching_active") return;
    if (!value) return;
    value = false;
    IMAGES_SWITCHING.querySelectorAll("button").forEach(elem =>
      elem.classList.remove("images-switching_active")
    );
    PORTFOLIO_IMAGES.classList.add("switch");
    event.target.classList.add("images-switching_active");
    PORTFOLIO_IMAGES.addEventListener("animationend", () => {
      PORTFOLIO_IMAGES.classList.remove("switch");
      value = true;
    });

    //---------------------Web Design-------------------------------------

    if (event.target.innerHTML == "Web Design") {
      for (let i = 0; i < PORTFOLIO_IMAGES.querySelectorAll("li").length; i++) {
        PORTFOLIO_IMAGES.children[i].children[0].setAttribute(
          "src",
          "assets/Project_" + (i + 2) + ".png"
        );
        if (i == 11)
          PORTFOLIO_IMAGES.children[i].children[0].setAttribute(
            "src",
            "assets/Project_" + 1 + ".png"
          );
      }
    }

    //---------------------All-------------------------------------

    if (event.target.innerHTML == "All") {
      for (let i = 0; i < PORTFOLIO_IMAGES.querySelectorAll("li").length; i++) {
        PORTFOLIO_IMAGES.children[i].children[0].setAttribute(
          "src",
          "assets/Project_" + (i + 1) + ".png"
        );
      }
    }

    //---------------------Graphic Design-------------------------

    if (event.target.innerHTML == "Graphic Design") {
      for (let i = 0; i < PORTFOLIO_IMAGES.querySelectorAll("li").length; i++) {
        PORTFOLIO_IMAGES.children[i].children[0].setAttribute(
          "src",
          "assets/Project_" + (i + 3) + ".png"
        );
        if (i >= 10)
          PORTFOLIO_IMAGES.children[i].children[0].setAttribute(
            "src",
            "assets/Project_" + (i - 9) + ".png"
          );
      }
    }

    //---------------------Artwork--------------------------------

    if (event.target.innerHTML == "Artwork") {
      for (let i = 0; i < PORTFOLIO_IMAGES.querySelectorAll("li").length; i++) {
        PORTFOLIO_IMAGES.children[i].children[0].setAttribute(
          "src",
          "assets/Project_" + (i + 4) + ".png"
        );
        if (i >= 9)
          PORTFOLIO_IMAGES.children[i].children[0].setAttribute(
            "src",
            "assets/Project_" + (i - 8) + ".png"
          );
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
    themeMessage.innerHTML = "Without subject";
  else {
    themeMessage.innerHTML = "Subject: " + FORM.children[2].value;
  }

  if (/^\s*$/.test(FORM.children[3].value))
    descriptionMessage.innerHTML = "Without description";
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
