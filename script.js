const paper = document.querySelector(".father-circles");
const scissors = document.querySelector(".father-circles-sci");
const rock = document.querySelector(".father-circles-rock");
const triangle = document.querySelector(".triangle");
const picked = document.querySelectorAll(".picked");

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
      }, 1000);
    });
  }

  if (this === scissors) {
    this.classList.toggle("animaScissors");
    rock.classList.toggle("ocult");
    paper.classList.toggle("ocult");
    triangle.classList.toggle("ocult");
    picked.forEach((i) => {
      setTimeout(function () {
        i.classList.toggle("ocult");
      }, 1000);
    });
  }
  if (this === rock) {
    this.classList.toggle("animaRock");
    scissors.classList.toggle("ocult");
    paper.classList.toggle("ocult");
    triangle.classList.toggle("ocult");
    picked.forEach((i) => {
      setTimeout(function () {
        i.classList.toggle("ocult");
      }, 2000);
    });
  }
}

circles.forEach((i) => {
  i.addEventListener("click", anime);
});
