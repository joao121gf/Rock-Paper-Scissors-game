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
    generateCircle();

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
    generateCircle();

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
    generateCircle();
  }
}

circles.forEach((i) => {
  i.addEventListener("click", anime);
});

function generateCircle() {
  let genNumber = Math.floor(Math.random() * 3) + 1;
  if (genNumber === 1) {
    const clonePaper = paper.cloneNode(true);
    clonePaper.id = "clonePaper";
    options.appendChild(clonePaper);
    clonePaper.classList.remove("ocult");
  }
  if (genNumber === 2) {
    const cloneScissor = scissors.cloneNode(true);
    cloneScissor.id = "cloneScissor";
    options.appendChild(cloneScissor);
    cloneScissor.classList.remove("ocult");
  }
  if (genNumber === 3) {
    const cloneRock = rock.cloneNode(true);
    cloneRock.id = "cloneRock";
    options.appendChild(cloneRock);
    cloneRock.classList.remove("ocult");
  }
  
}
