import {
  runAnimation,
  jumpAnimation,
  ninjaJump,
  shurikenLoadingAnimation,
  winAnimation,
} from "./controller/animations.js";
import gameVariable from "./constants/constants.js";
import { groundMove, zombieWalk } from "./controller/move.js";
import {
  createHearts,
  createShuriken,
  createHealthBar,
  createCounterIcons,
  createZombie,
  createCastleWin,
} from "./controller/createGameElements.js";

const { ninja, zombie, zombieKillTarget } = gameVariable;
let gate = true;

window.addEventListener("keypress", (event) => {
  if (event.key === "e" && gameVariable.shurikenCount && gate) {
    gate = false;
    if (gameVariable.shurikenCount === 5) {
      shurikenLoadingAnimation();
    }
    gameVariable.shurikenCount--;
    document.querySelector(".shuriken-counter").innerHTML =
      gameVariable.shurikenCount;
    createShuriken();
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key === "e") {
    gate = true;
  }
});

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
const win = () => {
  const winCondition = setInterval(() => {
    if (gameVariable.zombieCount === zombieKillTarget) {
      console.log(gameVariable);
      createCastleWin();
      winAnimation();
      const hearts = document.querySelector(".hearts-wrapper");
      hearts.innerHTML = "";
      const healthBar = document.querySelector(".health-bar-wrapper");
      const shurikenIcon = document.querySelector(".shuriken-count-wrapper");
      const zombieIcon = document.querySelector(".zombie-count-wrapper");

      document.querySelector(".game-wrapper").removeChild(healthBar);
      document.querySelector(".game-wrapper").removeChild(shurikenIcon);
      document.querySelector(".game-wrapper").removeChild(zombieIcon);
      setTimeout(() => {
        document.querySelector(".play-again-button-win").style.visibility =
          "visible";
      }, 3000);
      clearInterval(winCondition);
    }
  });
};

document.querySelectorAll(".play-again-button").forEach((item, index) => {
  item.addEventListener("click", () => {
    gameVariable.gameOverScreen.style.display = "none";
    gameVariable.hearts = 3;
    gameVariable.shurikenCount = 0;
    gameVariable.zombieCount = 0;
    gameVariable.zombieTouch = false;
    gameVariable.currentZombieHealth = 100;
    gameVariable.gameOn = true;
    const zombie = createZombie();
    gameVariable.zombie = zombie;
    gameVariable.ninja.style.visibility = "visible";
    document.querySelector(".game-wrapper").appendChild(zombie);

    if (!index) {
      gameVariable.groundMoveCondition = true;
      item.style.visibility = "hidden";
      document
        .querySelector(".game-wrapper")
        .removeChild(document.querySelector(".standing-ninja"));
      document
        .querySelector(".game-wrapper")
        .removeChild(document.querySelector(".bubble"));
      document
        .querySelector(".game-wrapper")
        .removeChild(document.querySelector(".win-castle"));
      win();
    }

    createCounterIcons();
    createHearts();
    zombieWalk(zombie);
    runAnimation("zombie/walk/Walk", 1, zombie, "zombie");
    createHealthBar(zombie);
  });
});

win();
createCounterIcons();
shurikenLoadingAnimation();
runAnimation("ninja/run/Run__00", 0, ninja, "ninja");
runAnimation("zombie/walk/Walk", 1, zombie, "zombie");
zombieWalk(zombie);
createHearts();

createHealthBar(zombie);
