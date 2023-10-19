window.addEventListener("load", function () {
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
      setTimeout(function () {
        generateCircle(1);
      }, 1000);
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
      setTimeout(function () {
        generateCircle(2);
      }, 1000);
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
      setTimeout(function () {
        generateCircle(3);
      }, 1000);
    }
    this.style.pointerEvents = 'none'
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
      } else if (randomNumber === 2) {
        cloneElement = scissors.cloneNode(true);


        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneScissors";
        left = "72%";
        top = "29%";
      } else {
        cloneElement = rock.cloneNode(true);


        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneRocks";
        left = "72%";
        top = "29%";
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
        top = "32.3%";
      } else if (randomNumber === 2) {
        cloneElement = scissors.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneScissors";
        left = "224%";
        top = "13%";
      } else {
        cloneElement = rock.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneRocks";
        left = "72%";
        top = "29%";
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
        top = "32.3%";
      } else if (randomNumber === 2) {
        cloneElement = scissors.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";

        cloneId = "cloneScissors";
        left = "73%";
        top = "29.3%";
      } else {
        cloneElement = rock.cloneNode(true);
        let firstChild = cloneElement.firstElementChild;
        firstChild.textContent = "SYSTEM CHOICE";
        firstChild.style.opacity = 1;
        firstChild.style.left = "15%";
        cloneId = "cloneRocks";
        left = "154%";
        top = "58.6%";
      }
    }

    cloneElement.id = cloneId;
    options.appendChild(cloneElement);
    cloneElement.classList.add("visible");
    cloneElement.classList.add('cloned-item')
    cloneElement.style.left = left;
    cloneElement.style.top = top;
    cloneElement.style.zIndex = "2";
    cloneElement.style.position = "absolute";


    if (choiceUser === "2") {
      cloneElement.classList.remove("animaScissors");
    }
  }
});
