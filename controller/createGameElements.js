import gameVariable from "../constants/constants.js";
import { shurikenSpin } from "./animations.js";
const { hearts, shuriken } = gameVariable;

const createHearts = () => {
  new Array(hearts).fill("").forEach((_, index) => {
    const image = document.createElement("img");
    image.src = "./images/heart.png";
    image.classList.add(`hearts${index}`);
    document.querySelector(".hearts-wrapper").appendChild(image);
  });
};

const createGround = (element) => {
  const image = document.createElement("img");
  image.src = "./images/ground.png";
  image.classList.add(element.ground);
  image.style.left = element.position;
  document.querySelector(".game-wrapper").appendChild(image);
  return image;
};

const createShuriken = () => {
  document.querySelector(".game-wrapper").appendChild(shuriken);
  shurikenSpin(shuriken);
};

export { createHearts, createGround, createShuriken };
