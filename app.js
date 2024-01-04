import { runAnimation } from "./controller/animations.js";
import gameVariable from "./constants/constants.js";
import { groundMove, zombieWalk } from "./controller/move.js";
import {
  createHearts,
  createShuriken,
} from "./controller/createGameElements.js";
const { ninja, zombie } = gameVariable;

window.addEventListener("keypress", (event) => {
  if (event.key === "e") {
    createShuriken();
  }
});

groundMove();
runAnimation("ninja/run/Run__00", 0, ninja, "ninja");
runAnimation("zombie/walk/Walk", 1, zombie, "zombie");
zombieWalk(zombie);
createHearts();
