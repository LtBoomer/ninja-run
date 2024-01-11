import gameVariable from "../constants/constants.js";
import { runAnimation } from "./animations.js";
import {
  createGround,
  createHealthBar,
  createZombie,
} from "./createGameElements.js";
const { ground, ninja, zombie } = gameVariable;

const groundMove = (steps, ground) => {
  for (let i = 0; i < steps; i++) {
    setTimeout(() => {
      ground.style.left = parseInt(ground.style.left) - 1 + "px";
      if (parseInt(ground.style.left) === -900) {
        document.querySelector(".game-wrapper").removeChild(ground);
        const image = createGround({ ground: "ground2", position: "900px" });
        groundMove(1800, image);
      }
    }, i * 4);
  }
};

ground.forEach((element) => {
  const image = createGround(element);
  groundMove(element.loopPosition, image);
});

const zombieWalk = (zombie) => {
  zombie.style.right = parseInt(zombie.style.right) + 3 + "px";

  if (
    parseInt(zombie.style.right) > 570 &&
    parseInt(zombie.style.right) < 670 &&
    parseInt(ninja.style.bottom) < 260 &&
    !gameVariable.zombieTouch
  ) {
    gameVariable.zombieTouch = true;
    document
      .querySelector(".hearts-wrapper")
      .removeChild(document.querySelector(`.hearts${--gameVariable.hearts}`));
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        ninja.style.filter = "brightness(100%) hue-rotate(0deg) saturate(600%)";
        setTimeout(() => {
          ninja.style.filter = "none";
        }, 200);
      }, i * 300);
    }
  }
  if (gameVariable.currentZombieHealth <= 0) {
    // console.log(zombie);
    // document
    //   .querySelector(".game-wrapper")
    //   .removeChild(document.querySelector(".health-bar-wrapper"));
    // document.querySelector(".game-wrapper").removeChild(zombie);
    // const image = createZombie();
    // document.querySelector(".game-wrapper").appendChild(image);
    // zombieWalk(image);
    // createHealthBar(image);
    // runAnimation("zombie/walk/Walk", 1, image, "zombie");
    // gameVariable.zombieTouch = false;
    // gameVariable.zombie = image;
    // gameVariable.currentZombieHealth = 100;
    console.log(gameVariable);
  }
  if (zombie.style.right === "951px") {
    document
      .querySelector(".game-wrapper")
      .removeChild(document.querySelector(".health-bar-wrapper"));
    document.querySelector(".game-wrapper").removeChild(zombie);
    const image = createZombie();
    document.querySelector(".game-wrapper").appendChild(image);
    zombieWalk(image);
    createHealthBar(image);
    runAnimation("zombie/walk/Walk", 1, image, "zombie");
    gameVariable.zombieTouch = false;
    gameVariable.zombie = image;
  } else {
    setTimeout(() => {
      zombieWalk(zombie);
    }, 7);
  }
};
export { groundMove, zombieWalk };
