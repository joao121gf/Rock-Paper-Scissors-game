window.addEventListener("load", function () {
  const paper = document.querySelector(".father-circles");
  const scissors = document.querySelector(".father-circles-sci");
  const rock = document.querySelector(".father-circles-rock");
  const triangle = document.querySelector(".triangle");
  const picked = document.querySelectorAll(".picked");
  const boxShadow = document.querySelector(".box-shadow");
  const options = document.querySelector(".options");
  let globalChoice;
  const circles = document.querySelectorAll(".all");
  const results = document.querySelector(".results");
  const btn = this.document.querySelector(".btn");

  function anime() {
    function handleSecondAnimation(i) {
      const estadoFinal = window.getComputedStyle(i);

      i.style.transform =
        estadoFinal.transform + " scale(1.2) translateX(-50px)";
    }

    if (this === paper) {
      paper.style.transform = "translate(0px, 100px)";
      this.classList.toggle("animaPaper");

      paper.addEventListener("animationend", () => {
        setTimeout(() => {
          handleSecondAnimation(paper);
          paper.classList.add("animaPaper");
        }, 1000);
      });
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
      setTimeout(function () {
        generateCircle(1);
      }, 1000);
    }

    if (this === scissors) {
      scissors.style.transform = "translate( -290px, 100px)";
      this.classList.toggle("animaScissors");
      scissors.style.animation = "";
      scissors.addEventListener("animationend", () => {
        setTimeout(() => {
          handleSecondAnimation(scissors);
          scissors.classList.add("animaScissors");
        }, 1000);
      });
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
      setTimeout(function () {
        generateCircle(2);
      }, 1000);
    }
    if (this === rock) {
      rock.style.transform = "translate(-155px, -180px)";
      this.classList.toggle("animaRock");
      rock.style.animation = "";
      rock.addEventListener("animationend", () => {
        setTimeout(() => {
          handleSecondAnimation(rock);
          rock.classList.add("animaRock");
        }, 1000);
      });
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
      setTimeout(function () {
        generateCircle(3);
      }, 1000);
    }
    this.style.pointerEvents = "none";
  }

  circles.forEach((i) => {
    i.addEventListener("click", anime);
  });

  function generateCircle(choiceUser) {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let cloneElement, cloneId, left, top;

    if (choiceUser === 1) {
      if (randomNumber === 1) {
        cloneElement = paper.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "clonePapers";
        left = "70%";
        top = "16%";
        anima(cloneElement);
      } else if (randomNumber === 2) {
        cloneElement = scissors.cloneNode(true);

        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneScissors";
        left = "72%";
        top = "13%";
        anima(cloneElement);
      } else {
        cloneElement = rock.cloneNode(true);

        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneRocks";
        left = "72%";
        top = "13%";
        anima(cloneElement);
      }
    }
    if (choiceUser === 2) {
      if (randomNumber === 1) {
        cloneElement = paper.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "clonePapers";
        left = "70%";
        top = "16.3%";
        anima(cloneElement);
      } else if (randomNumber === 2) {
        cloneElement = scissors.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneScissors";
        left = "224%";
        top = "13%";
        anima(cloneElement);
      } else {
        cloneElement = rock.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneRocks";
        left = "72%";
        top = "13%";
        anima(cloneElement);
      }
    }
    if (choiceUser === 3) {
      if (randomNumber === 1) {
        cloneElement = paper.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";

        cloneId = "clonePapers";
        left = "70%";
        top = "16.3%";
        anima(cloneElement);
      } else if (randomNumber === 2) {
        cloneElement = scissors.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        anima(cloneElement);

        cloneId = "cloneScissors";
        left = "73%";
        top = "13.3%";
      } else {
        cloneElement = rock.cloneNode(true);
        cloneElement.style.transform = "translate(-155px, -180px)"
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneRocks";
        left = "154%";
        top = "58.6%";
        anima(cloneElement);
      }
    }

    function handleSecondAnimationPc(i) {
      const estadoFinal = window.getComputedStyle(i);
      i.style.transform =
        estadoFinal.transform + " scale(1.2) translateX(50px)";
    }
    cloneElement.addEventListener("animationend", () => {
      handleSecondAnimationPc(cloneElement);
    });
    function anima(i) {
      i.classList.add("animaPaper");
      if (randomNumber === 2) {
        i.style.transform = "translate(-290px, 100px)";
      } else if (randomNumber === 3) {
        i.style.transform = "translate(0px, 100px)";
      }
      i.style.transform = "translate(0px, 100px)";
      if ( randomNumber === 3 && choiceUser ===3){
        i.style.transform = "translate(-155px, -180px)"
      }
      if ( randomNumber === 2 && choiceUser ===2){
        i.style.transform = "translate(-290px, 100px)"

      }

    }

    cloneElement.id = cloneId;
    options.appendChild(cloneElement);
    cloneElement.classList.add("visible");
    cloneElement.classList.add("cloned-item");
    cloneElement.style.left = left;
    cloneElement.style.top = top;
    cloneElement.style.zIndex = "2";
    cloneElement.style.position = "absolute";
    boxShadow.style.opacity = 0;

    globalChoice = choiceUser;
    let score = 0;
    let winner;

    function whoWin() {
      let i = 1;
      let result;
      for (1; i < 3 + 1; i++) {
        if (choiceUser === randomNumber) {
          result = "draw";
        } else if (
          (choiceUser === 1 && randomNumber === 2) ||
          (choiceUser === 2 && randomNumber === 3) ||
          (choiceUser === 3 && randomNumber === 1)
        ) {
          result = "lose";
        } else {
          result = "win";
        }
      }
      winner = result;

      function setTime(i) {
        setTimeout(function () {
          i.classList.add("moveUser");
        }, 1000);
      }
      function abv() {
        if (choiceUser === 1) {
          setTime(paper);
        } else if (choiceUser === 2) {
          setTime(scissors);
        } else {
          setTime(rock);
        }
      }

      if (result === "draw") {
        setTimeout(function () {
          cloneElement.classList.add("winnerPc");
        }, 1000);
        abv();
      }

      if (result === "lose") {
        setTimeout(function () {
          cloneElement.classList.add("winnerPc");
        }, 1000);

        abv();
      } else if (result === "win") {
        setTimeout(function () {
          cloneElement.classList.add("winnerPc");
        }, 1000);
        abv();
      }

      return winner;
    }
    winner = whoWin();
    console.log(winner);
    if (winner === "win") {
      score += 1;
      results.textContent = score;
    } else if (winner === "lose") {
      if (score > 0) {
        score -= 1;
        results.textContent = score;
      }
    }
  }
  function reset() {
    const elementosClonados = document.querySelectorAll(".cloned-item");
    elementosClonados.forEach(function (elemento) {
      elemento.remove();
    });

    paper.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
    scissors.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
    rock.style.transform = "matrix(1, 0, 0, 1, 0, 0)";

    triangle.classList.remove("ocult");

    paper.classList.remove("ocult");
    paper.classList.toggle("animaPaper");

    scissors.classList.remove("ocult");
    scissors.classList.remove("animaScissors");

    rock.classList.remove("ocult");
    rock.classList.remove("animaRock");

    circles.forEach((circle) => {
      circle.style.pointerEvents = "auto";
      circle.classList.remove("moveUser");
    });
  }

  btn.addEventListener("click", reset);
});
