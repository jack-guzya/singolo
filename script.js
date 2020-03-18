//----------------------------------------------------NAVIGATION------------------------------------

const NAVIGATION = document.querySelector("ul.navigation"),
  ANCHORS = document.querySelectorAll('a[href^="#"]');

let enabled = true;

function getCoordinate(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset
  };
}

for (let anchor of ANCHORS) {
  if (/#.+/.test(anchor.href)) {
    anchor.addEventListener("click", function(event) {
      // event to navigation buttons
      event.preventDefault(); // remove default event
      if (!enabled) return;

      NAVIGATION.querySelectorAll("li").forEach((
        elem // add class active
      ) => elem.classList.remove("navigation_active"));
      event.target.closest("li").classList.add("navigation_active");

      const blockID = anchor.getAttribute("href").substr(1); //id section
      let heightHeader =
          +getComputedStyle(document.querySelector("header"))
            .height.match(/\-*\d*\.\d*/g)
            .join("") + 6,
        relativelyTop = document.getElementById(blockID).getBoundingClientRect()
          .top,
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

          if (relativelyTop >= heightHeader) {
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

          if (relativelyTop < heightHeader) {
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

//--------------------------------------------------PORTFOLIO BUTTONS----------------------------

const IMAGES_SWITCHING = document.querySelector(
  "div.portfolio__images-switching"
);

const PORTFOLIO_IMAGES = document.getElementById("presentation");

let value = false;

IMAGES_SWITCHING.addEventListener("click", event => {
  IMAGES_SWITCHING.querySelectorAll("button").forEach(elem =>
    elem.classList.remove("images-switching_active")
  );
  event.target.classList.add("images-switching_active");

  function checkImage(position) {
    if (
      PORTFOLIO_IMAGES.children[position].children[0].getAttribute("src") ==
      "assets/Project_1.png"
    ) {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = "8px";
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = "11px";
    }

    if (
      PORTFOLIO_IMAGES.children[position].children[0].getAttribute("src") ==
      "assets/Project_2.png"
    ) {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = "82px";
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = "43px";
    }

    if (
      PORTFOLIO_IMAGES.children[position].children[0].getAttribute("src") ==
      "assets/Project_3.png"
    ) {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = "11px";
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = "1px";
    }

    if (
      PORTFOLIO_IMAGES.children[position].children[0].getAttribute("src") ==
      "assets/Project_4.png"
    ) {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = "24px";
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = "2px";
    }

    if (
      PORTFOLIO_IMAGES.children[position].children[0].getAttribute("src") ==
      "assets/Project_5.png"
    ) {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = "10px";
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = "16px";
    }

    if (
      PORTFOLIO_IMAGES.children[position].children[0].getAttribute("src") ==
      "assets/Project_6.png"
    ) {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = "16px";
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = "4px";
    }

    if (
      PORTFOLIO_IMAGES.children[position].children[0].getAttribute("src") ==
      "assets/Project_7.png"
    ) {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = "31px";
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = "39px";
    }

    if (
      PORTFOLIO_IMAGES.children[position].children[0].getAttribute("src") ==
      "assets/Project_8.png"
    ) {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = "24px";
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = "32px";
    }

    if (
      PORTFOLIO_IMAGES.children[position].children[0].getAttribute("src") ==
      "assets/Project_9.png"
    ) {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = "16px";
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = "2px";
    }

    if (
      PORTFOLIO_IMAGES.children[position].children[0].getAttribute("src") ==
      "assets/Project_10.png"
    ) {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = "141px";
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = "113x";
    }

    if (
      PORTFOLIO_IMAGES.children[position].children[0].getAttribute("src") ==
      "assets/Project_11.png"
    ) {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = "144px";
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = "175px";
    }

    if (
      PORTFOLIO_IMAGES.children[position].children[0].getAttribute("src") ==
      "assets/Project_12.png"
    ) {
      PORTFOLIO_IMAGES.children[position].children[0].style.right = "36px";
      PORTFOLIO_IMAGES.children[position].children[0].style.bottom = "60px";
    }
  }

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

      checkImage(i);
      setInterval(() => {}, 1000);
    }
  }

  //---------------------All-------------------------------------

  if (event.target.innerHTML == "All") {
    for (let i = 0; i < PORTFOLIO_IMAGES.querySelectorAll("li").length; i++) {
      PORTFOLIO_IMAGES.children[i].children[0].setAttribute(
        "src",
        "assets/Project_" + (i + 1) + ".png"
      );
      checkImage(i);
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
      checkImage(i);
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
      checkImage(i);
    }
  }
});

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
