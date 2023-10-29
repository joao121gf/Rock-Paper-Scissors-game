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
  const pBtn = document.querySelector(".btn p");
  let score = 0;
  const rules = document.querySelector(".rules-container");
  const close = document.querySelector(".close");
  const container = document.querySelector(".box-rules");

  function showRules() {
    container.style.opacity = 1;
    container.style.zIndex = "2000";
  }
  function closeRules() {
    container.style.opacity = 0;
    container.style.zIndex = "-2000";
  }
  rules.addEventListener("click", showRules);
  close.addEventListener("click", closeRules);

  function anime() {
    function handleSecondAnimation(i) {
      const screenWidth = window.innerWidth;

      const estadoFinal = window.getComputedStyle(i);
      if (screenWidth < 512) {
        i.style.transform =
          estadoFinal.transform + " scale(1.1) translateX(-13px)";
      } else {
        i.style.transform =
          estadoFinal.transform + " scale(1.2) translateX(-50px)";
      }
    }
    const screenWidth = window.innerWidth;
    if (this === paper) {
      rock.classList.add("inva");
      scissors.classList.add("inva");

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
          i.style.transition = "0.8s ease";
          i.classList.remove("ocult");
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
      if (screenWidth < 900) {
        scissors.style.transform = "translate( -170px, 100px)";
      } else {
        scissors.style.transform = "translate( -290px, 100px)";
      }
      rock.classList.add("inva");
      paper.classList.add("inva");
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
          i.style.transition = "0.8s ease";
          i.classList.remove("ocult");
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
      if (screenWidth < 900) {
        rock.style.transform = "translate(-80px, -30px)";
      } else {
        rock.style.transform = "translate(-155px, -180px)";
      }
      paper.classList.add("inva");
      scissors.classList.add("inva");
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
          i.style.transition = "0.8s ease";
          i.classList.remove("ocult");
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
    const screenWidth = window.innerWidth;

    if (choiceUser === 1) {
      if (randomNumber === 1) {
        cloneElement = paper.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "clonePapers";

        if (screenWidth < 900) {
          top = "24%";
          left = "70%";
        } else {
          top = "16%";
          left = "70%";
        }
        anima(cloneElement);
      } else if (randomNumber === 2) {
        cloneElement = scissors.cloneNode(true);

        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneScissors";

        if (screenWidth < 900) {
          top = "19%";
          left = "72%";
        } else {
          top = "13%";
          left = "72%";
        }
        anima(cloneElement);
      } else {
        cloneElement = rock.cloneNode(true);

        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneRocks";
        if (screenWidth < 900) {
          top = "19%";
          left = "72%";
        } else {
          top = "13%";
          left = "72%";
        }
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
        if (screenWidth < 900) {
          top = "25.2%";
          left = "70%";
        } else {
          top = "16.3%";
          left = "70%";
        }
        anima(cloneElement);
      } else if (randomNumber === 2) {
        cloneElement = scissors.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneScissors";
        if (screenWidth < 900) {
          top = "20%";
          left = "66%";
        } else {
          top = "13%";
          left = "224%";
        }
        anima(cloneElement);
      } else {
        cloneElement = rock.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneRocks";

        if (screenWidth < 900) {
          top = "20%";
          left = "72%";
        } else {
          top = "13%";
          left = "72%";
        }
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
        if (screenWidth < 900) {
          top = "24.7%";
          left = "70%";
        } else {
          top = "16.3%";
          left = "70%";
        }
        anima(cloneElement);
      } else if (randomNumber === 2) {
        cloneElement = scissors.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";

        cloneId = "cloneScissors";
        if (screenWidth < 900) {
          top = "19.3%";
          left = "73%";
        } else {
          top = "13.3%";
          left = "73%";
        }
        anima(cloneElement);
      } else {
        cloneElement = rock.cloneNode(true);
        cloneElement.style.transform = "translate(-155px, -180px)";
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneRocks";
        if (screenWidth < 900) {
          top = "19.7%";
          left = "70%";
        } else {
          top = "58.6%";
          left = "154%";
        }
        anima(cloneElement);
      }
    }

    function handleSecondAnimationPc(i) {
      const estadoFinal = window.getComputedStyle(i);
      if (screenWidth < 512) {
        i.style.transform =
          estadoFinal.transform + " scale(1.1) translateX(13px)";
      } else {
        i.style.transform =
          estadoFinal.transform + " scale(1.2) translateX(50px)";
      }
    }
    cloneElement.addEventListener("animationend", () => {
      handleSecondAnimationPc(cloneElement);
    });
    function anima(i) {
      const screenWidth = window.innerWidth;
      i.classList.add("animaPaper");
      if (i.classList.contains("animaRock")) {
        i.classList.remove("animaRock");
      }
      if (screenWidth < 900) {
        translateX = -100;
        translateY = -120;
        if (randomNumber === 1) {
          i.style.transform = "translate(0px, 100px)";
        } else if (randomNumber === 2 || randomNumber === 3) {
          i.style.transform = "translate(0px, 100px)";
        } else if (randomNumber === 3 && choiceUser === 3) {
          i.style.transform = "translate(-55px, -60px)";
        }
      } else {
        i.classList.add("animaPaper");
        if (randomNumber === 2) {
          i.style.transform = "translate(-290px, 100px)";
        } else if (randomNumber === 3) {
          i.style.transform = "translate(0px, 100px)";
        }
        i.style.transform = "translate(0px, 100px)";
        if (randomNumber === 3 && choiceUser === 3) {
          i.style.transform = "translate(-155px, -180px)";
        }
        if (randomNumber === 2 && choiceUser === 2) {
          i.style.transform = "translate(-290px, 100px)";
        }
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
    let winner;

    function whoWin() {
      let i = 1;
      let result;
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

      if (result === "draw" || result === "lose" || result === "win") {
        setTimeout(function () {
          cloneElement.classList.add("winnerPc");
        }, 1000);
        abv();
      }
      if (winner === "win") {
        score += 1;
        results.textContent = score;
      } else if (winner === "lose") {
        if (score > 0) {
          score -= 1;
          results.textContent = score;
        }
      }

      return winner;
    }
    winner = whoWin();
    setTimeout(function () {
      if (winner === "draw") {
        pBtn.textContent = "DRAW";
      } else if (winner === "lose") {
        pBtn.textContent = "YOU LOSE";
      } else if (winner === "win") {
        pBtn.textContent = "YOU WIN";
      }
      btn.classList.remove("ocult");
      btn.classList.add("inva");

      setTimeout(function () {
        btn.classList.remove("inva");
      }, 500);
    }, 1000);
  }
  function reset() {
    picked.forEach((i) => {
      i.style.transition = "none";
      i.classList.add("ocult");
    });

    const elementosClonados = document.querySelectorAll(".cloned-item");
    elementosClonados.forEach(function (elemento) {
      elemento.remove();
    });
    paper.classList.add("inva");
    scissors.classList.add("inva");
    rock.classList.add("inva");

    paper.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
    scissors.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
    rock.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
    triangle.classList.remove("ocult");

    paper.classList.remove("ocult");
    paper.classList.remove("animaPaper");

    scissors.classList.remove("ocult");
    scissors.classList.remove("animaScissors");

    rock.classList.remove("ocult");
    rock.classList.remove("animaRock");

    circles.forEach((circle) => {
      circle.style.pointerEvents = "auto";
      circle.classList.remove("moveUser");
    });
    btn.style.transition = "none";
    btn.classList.add("ocult");

    setTimeout(function () {
      paper.classList.remove("inva");
      scissors.classList.remove("inva");
      rock.classList.remove("inva");
    }, 1000);
  }

  btn.addEventListener("click", reset);
});
