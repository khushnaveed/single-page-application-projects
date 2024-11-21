/* Task 2 */

const mario = document.getElementById("#mario");
const imgMario = document.querySelector("img");
imgMario.src = "./assets/mario-stand.gif";

imgMario.style.position = "relative";
imgMario.style.left = "0px";
imgMario.style.transform = "rotate(0deg)";

/* Task 3 */

function stopMario() {
  imgMario.src = "./assets/mario-stand.gif";
}

/* Task 4 */

function moveMario(event) {
  imgMario.src === "./assets/mario-walk.gif"
    ? null
    : (imgMario.src = "./assets/mario-walk.gif");
  console.log(`Key pressed: ${event.key}`);

  /* Task 6 */

  if (event.key === "ArrowLeft") {

    let currentLeft = parseInt(imgMario.style.left, 10) || 0;
    imgMario.style.transform = "rotate(-180deg)";
    imgMario.style.left = `${currentLeft - 10}px`;
    console.log("Mario moved 10 pixels to the left.");

  } else if (event.key === "ArrowRight") {

    let currentLeft = parseInt(imgMario.style.left, 10) || 0;
    imgMario.style.transform = "rotate(0deg)";
    imgMario.style.left = `${currentLeft + 10}px`;
    console.log("Mario moved 10 pixels to the right.");

  }
}

/* Task 5 */

document.addEventListener("keydown", moveMario);

/* Task 8 */

document.addEventListener("keyup", stopMario);
