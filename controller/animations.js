import gameVariable from "../constants/constants.js";
const { ninja, shuriken } = gameVariable;

const jumpAnimation = (image) => {
  for (let a = 0; a < 10; a++) {
    if (a < 5) {
      setTimeout(() => {
        image.src = `./images/ninja/jump/Jump__00${a}.png`;
      }, a * 45);
    }
  }
};

const runAnimation = (pathway, start, image, character) => {
  if (
    (!gameVariable.triggerJump && character === "ninja") ||
    character === "zombie"
  ) {
    for (let i = start; i < 10 + start; i++) {
      setTimeout(() => {
        if (
          (!gameVariable.triggerJump && character === "ninja") ||
          character === "zombie"
        ) {
          image.src = `./images/${pathway}${i}.png`;
        }
      }, i * 52);
    }
    setTimeout(() => {
      runAnimation(pathway, start, image, character);
    }, 520);
  }
};

const ninjaJump = (image) => {
  for (let a = 0; a < 120; a++) {
    setTimeout(() => {
      image.style.bottom = parseInt(image.style.bottom) + 2 + "px";
    }, a * 2);
  }
  setTimeout(() => {
    for (let a = 0; a < 120; a++) {
      setTimeout(() => {
        image.style.bottom = parseInt(image.style.bottom) - 2 + "px";
        if (image.style.bottom === "130px") {
          gameVariable.triggerJump = false;
          runAnimation("ninja/run/Run__00", 0, ninja, "ninja");
          gameVariable.allowJump = true;
        }
      }, a * 2);
    }
  }, 500);
};

const shurikenSpin = (shuriken) => {
  let deg = 0;
  setInterval(() => {
    shuriken.style.transform = `rotate(${deg}deg)`;
    deg += 2;
    shuriken.style.right = parseInt(shuriken.style.right) - 4 + "px";
  }, 0.5);
};

window.addEventListener("keypress", (event) => {
  if (event.key === " " && gameVariable.allowJump) {
    gameVariable.allowJump = false;
    gameVariable.triggerJump = true;
    ninjaJump(ninja);
    setTimeout(() => {
      jumpAnimation(ninja);
    }, 100);
  }
});

export { runAnimation, shurikenSpin };
