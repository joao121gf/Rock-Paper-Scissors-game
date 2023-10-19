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
    generateCircle1();
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
    generateCircle2();
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
    generateCircle3();
  }
}

circles.forEach((i) => {
  i.addEventListener("click", anime);
});

function generateCircle1() {
  let genNumber = Math.floor(Math.random() * 3) + 1;
  if (genNumber === 1) {
    const clonePaper = paper.cloneNode(true);
    clonePaper.id = "clonePapers";
    options.appendChild(clonePaper);
    clonePapers.classList.remove("ocult");
    clonePapers.style.left = "70.5%";
    clonePapers.style.top = "16%";
    clonePapers.style.zIndex = "2";
    clonePapers.style.position = "absolute";
    clonePapers.style.animation = "none";
  }
  if (genNumber === 2) {
    const cloneScissor = scissors.cloneNode(true);
    cloneScissor.id = "cloneScissors";
    options.appendChild(cloneScissor);
    cloneScissors.classList.remove("ocult");
    cloneScissors.style.left = "70.8%";
    cloneScissors.style.top = "29.3%";
    cloneScissors.style.zIndex = "2";
    cloneScissors.style.position = "absolute";
    cloneScissors.style.animation = "none";
  }
  if (genNumber === 3) {
    const cloneRock = rock.cloneNode(true);
    cloneRock.id = "cloneRocks";
    options.appendChild(cloneRock);
    cloneRocks.classList.remove("ocult");
    cloneRocks.style.left = "71.5%";
    cloneRocks.style.top = "29.1%";
    cloneRocks.style.position = "absolute";
    cloneRocks.style.animation = "none";
    cloneRocks.style.zIndex = "2";
  }
}

function generateCircle2() {
  let genNumber = Math.floor(Math.random() * 3) + 1;
  if (genNumber === 1) {
    const clonePaper = paper.cloneNode(true);
    clonePaper.id = "clonePapers";
    options.appendChild(clonePaper);
    clonePapers.classList.remove("ocult");
    clonePapers.style.left = "70%";
    clonePapers.style.top = "32.3%";
    clonePapers.style.zIndex = "2";
    clonePapers.style.position = "absolute";
    clonePapers.style.animation = "none";
  }
  if (genNumber === 2) {
    const cloneScissor = scissors.cloneNode(true);
    cloneScissor.id = "cloneScissors";
    options.appendChild(cloneScissor);
    cloneScissors.classList.remove("ocult");
    cloneScissors.style.left = "72%";
    cloneScissors.style.top = "29.3%";
    cloneScissors.style.zIndex = "2";
    cloneScissors.style.position = "absolute";
    cloneScissors.style.animation = "none";
    cloneScissors.classList.remove("animaScissors");
  }
  if (genNumber === 3) {
    const cloneRock = rock.cloneNode(true);
    cloneRock.id = "cloneRocks";
    options.appendChild(cloneRock);
    cloneRocks.classList.remove("ocult");
    cloneRocks.style.left = "72%";
    cloneRocks.style.top = "29%";
    cloneRocks.style.position = "absolute";
    cloneRocks.style.animation = "none";
    cloneRocks.style.zIndex = "2";
  }
}

function generateCircle3() {
  let genNumber = Math.floor(Math.random() * 3) + 1;
  if (genNumber === 1) {
    const clonePaper = paper.cloneNode(true);
    clonePaper.id = "clonePapers";
    options.appendChild(clonePaper);
    clonePapers.classList.remove("ocult");
    clonePapers.style.left = "70%";
    clonePapers.style.top = "32.3%";
    clonePapers.style.zIndex = "2";
    clonePapers.style.position = "absolute";
    clonePapers.style.animation = "none";
  }
  if (genNumber === 2) {
    const cloneScissor = scissors.cloneNode(true);
    cloneScissor.id = "cloneScissors";
    options.appendChild(cloneScissor);
    cloneScissors.classList.remove("ocult");
    cloneScissors.style.left = "72%";
    cloneScissors.style.top = "29.3%";
    cloneScissors.style.zIndex = "2";
    cloneScissors.style.position = "absolute";
    cloneScissors.style.animation = "none";
    cloneScissors.classList.remove("animaScissors");
  }
  if (genNumber === 3) {
    const cloneRock = rock.cloneNode(true);
    cloneRock.id = "cloneRocks";
    options.appendChild(cloneRock);
    cloneRocks.classList.remove("ocult");
    cloneRocks.style.left = "153%";
    cloneRocks.style.top = "59%";
    cloneRocks.style.position = "absolute";
    cloneRocks.style.animation = "none";
    cloneRocks.style.zIndex = "2";
  }
}
