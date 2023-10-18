const paper = document.querySelector(".father-circles");
const scissors = document.querySelector(".father-circles-sci");
const rock = document.querySelector(".father-circles-rock");

const circles = document.querySelectorAll(".all");
console.log(circles);

function anime() {
  if (this === paper) {
    this.classList.toggle("animaPaper");
    rock.classList.toggle("ocult");
    scissors.classList.toggle("ocult");
  }

  if (this === scissors) {
    this.classList.toggle("animaScissors");
    rock.classList.toggle("ocult");
    paper.classList.toggle("ocult");
  }
  if (this === rock) {
    this.classList.toggle("animaRock");
    scissors.classList.toggle("ocult");
    paper.classList.toggle("ocult");
  }
}

circles.forEach((i) => {
  i.addEventListener("click", anime);
});
