const paper = document.querySelector(".father-circles");
const scissors = document.querySelector(".father-circles-sci");
const rock = document.querySelector(".father-circles-rock");
const triangle = document.querySelector(".triangle");
const picked = document.querySelectorAll(".picked");
const boxShadow = document.querySelector(".box-shadow");
const options = document.querySelector(".options");

const circles = document.querySelectorAll(".all");

function anime() {
  if (this === paper) {
    this.classList.toggle("animaPaper");
    rock.classList.toggle("ocult");
    scissors.classList.toggle("ocult");
    triangle.classList.toggle("ocult");
    picked.forEach((i) => {
      setTimeout(function () {
        i.classList.toggle("ocult");
      }, 300);
    });
    if (this.classList.contains("animaPaper")) {
      boxShadow.style.opacity = 1;
      boxShadow.style.zIndex = 1;
    } else {
      boxShadow.style.opacity = 0;
    }
    generateCircle(1);
  }

  if (this === scissors) {
    this.classList.toggle("animaScissors");
    rock.classList.toggle("ocult");
    paper.classList.toggle("ocult");
    triangle.classList.toggle("ocult");
    picked.forEach((i) => {
      setTimeout(function () {
        i.classList.toggle("ocult");
      }, 300);
    });
    if (this.classList.contains("animaScissors")) {
      boxShadow.style.opacity = 1;
      boxShadow.style.zIndex = 1;
    } else {
      boxShadow.style.opacity = 0;
    }
    generateCircle(2);
  }
  if (this === rock) {
    this.classList.toggle("animaRock");
    scissors.classList.toggle("ocult");
    paper.classList.toggle("ocult");
    triangle.classList.toggle("ocult");
    picked.forEach((i) => {
      setTimeout(function () {
        i.classList.toggle("ocult");
      }, 300);
    });
    if (this.classList.contains("animaRock")) {
      boxShadow.style.opacity = 1;
      boxShadow.style.zIndex = 1;
    } else {
      boxShadow.style.opacity = 0;
    }
    generateCircle(3);
  }
}

circles.forEach((i) => {
  i.addEventListener("click", anime);
});

function generateCircle(choiceUser) {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let cloneElement, cloneId, left, top;
  if (choiceUser === 1){
    if (randomNumber === 1) {
      cloneElement = paper.cloneNode(true);
      cloneId = "clonePapers";
      left = "70%";
      top = "16%";
    } else if (randomNumber === 2) {
      cloneElement = scissors.cloneNode(true);
      cloneId = "cloneScissors";
      left = "72%";
      top = "29%";
    } else {
      cloneElement = rock.cloneNode(true);
      cloneId = "cloneRocks";
      left = "72%";
      top = "29%";
    }
  }
  if (choiceUser === 2){
    if (randomNumber === 1) {
      cloneElement = paper.cloneNode(true);
      cloneId = "clonePapers";
      left = "70%";
      top = "32.3%";
    } else if (randomNumber === 2) {
      cloneElement = scissors.cloneNode(true);
      cloneId = "cloneScissors";
      left = "224%";
      top = "13%";
    } else {
      cloneElement = rock.cloneNode(true);
      cloneId = "cloneRocks";
      left = "72%";
      top = "29%";
    }
  }
  if (choiceUser === 3){
    if (randomNumber === 1) {
      cloneElement = paper.cloneNode(true);
      cloneId = "clonePapers";
      left = "70%";
      top = "32.3%";
    } else if (randomNumber === 2) {
      cloneElement = scissors.cloneNode(true);
      cloneId = "cloneScissors";
      left = "73%";
      top = "29.3%";
    } else {
      cloneElement = rock.cloneNode(true);
      cloneId = "cloneRocks";
      left = "154%";
      top = "58.6%";
    }
  }
  

  cloneElement.id = cloneId;
  options.appendChild(cloneElement);
  cloneElement.classList.remove("ocult");
  cloneElement.style.left = left;
  cloneElement.style.top = top;
  cloneElement.style.zIndex = "2";
  cloneElement.style.position = "absolute";
  cloneElement.style.animation = "none";

  if (choiceUser === "2") {
    cloneElement.classList.remove("animaScissors");
  }
}

