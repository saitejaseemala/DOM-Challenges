const getRandomColors = function () {
  var ratio = 0.618033988749895;

  var hue = (Math.random() + ratio) % 1;
  var saturation = Math.round(Math.random() * 100) % 85;
  var lightness = Math.round(Math.random() * 100) % 85;

  var color =
    "hsl(" + Math.round(360 * hue) + "," + saturation + "%," + lightness + "%)";
  var oddColor =
    "hsl(" +
    Math.round(360 * hue) +
    "," +
    saturation +
    "%," +
    (lightness + 5) +
    "%)";

  return {
    color,
    oddColor,
  };
};

function ColorSpotter(colorSpotter, size, scoreElement) {
  const grid = document.querySelector(colorSpotter);
  const scoreElem = document.querySelector(scoreElement);
  var score = 0;
  const defSize = size;
  var isShaking = false;
  var traitor = -1;
  function formGrid(size, currScore) {
    destroyGrid();
    var cellIndex = 0;
    traitor = randomIndex(size);
    var colors = getRandomColors();
    for (let i = 0; i < size; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < size; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-index", String(cellIndex));
        if (cellIndex == traitor) {
          cell.style.backgroundColor = colors.oddColor;
        } else {
          cell.style.backgroundColor = colors.color;
        }
        cell.addEventListener("click", onClickHandler);
        cellIndex++;
        row.appendChild(cell);
      }
      grid.appendChild(row);
      scoreElem.innerHTML = "Score: " + currScore;
    }
  }

  async function onClickHandler(e) {
    if (isShaking) return;
    let clickedIndex = e.target.dataset.index;
    if (traitor === Number(clickedIndex)) {
      score++;
      formGrid(++size, score);
    } else {
      grid.className = "shake";
      isShaking = true;
      await delay(800);
      isShaking = false;
      score = 0;
      formGrid(defSize, score);
    }
  }

  function delay(delayTime) {
    return new Promise((resolve) => setTimeout(resolve, delayTime));
  }

  function randomIndex(currentSize) {
    return Math.floor(Math.random() * currentSize * currentSize);
  }

  function destroyGrid() {
    grid.classList.remove("shake");
    const des = document.querySelectorAll(".row");
    des.forEach((d) => {
      d.remove();
    });
  }

  formGrid(size, 0);
}
