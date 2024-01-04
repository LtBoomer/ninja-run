const gameVariable = {
  ninja: document.querySelector(".ninja"),
  zombie: document.querySelector(".zombie"),
  shuriken: document.createElement("img"),
  triggerJump: false,
  zombieTouch: false,
  allowJump: true,
  hearts: 3,
  ground: [
    {
      ground: "ground1",
      position: "0px",
      loopPosition: 900,
    },
    {
      ground: "ground2",
      position: "900px",
      loopPosition: 1800,
    },
  ],
};

gameVariable.zombie.style.right = "-150px";
gameVariable.ninja.style.bottom = "130px";
gameVariable.ninja.style.right = "670px";
gameVariable.shuriken.style.bottom = "170px";
gameVariable.shuriken.style.right = "640px";
gameVariable.shuriken.src = "./images/shuriken.png";
gameVariable.shuriken.classList.add("shuriken");

export default gameVariable;
