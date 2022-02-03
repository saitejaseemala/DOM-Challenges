/*
 * Creates pixel art grid
 * @param el DOM Element
 * @param rows Number of rows
 * @param rows Number of cols
 */
function PixelArt(el, rows, cols) {
  var activeColor = null;
  const grid = document.querySelector(el);
  function createGrid() {
    for (let i = 1; i < rows; i++) {
      let row = document.createElement("div");
      for (let j = 1; j <= cols; j++) {
        row.className = "row";
        let box = document.createElement("div");
        box.className = "box";
        box.draggable = true;
        box.addEventListener("click", paintOnClickHandler);
        box.addEventListener("dragover", paintOnDragHandler);
        row.appendChild(box);
      }
      grid.appendChild(row);
    }
  }
  createGrid();
  const colorRow = document.createElement("div");
  const colorArray = [
    "#ff0000",
    "#0000ff",
    "#3cb371",
    "#ee82ee",
    "#ffa500",
    "#6a5acd",
    "#3c3c3c",
    "#ff6347",
    "#ff9595",
    "#009595",
  ];
  for (let i = 0; i < cols; i++) {
    colorRow.className = "row";
    let colorBox = document.createElement("div");
    colorBox.className = "box";
    colorBox.style.backgroundColor = colorArray[i];
    colorBox.addEventListener("click", getPaintOnClickHandler);
    colorRow.appendChild(colorBox);
  }
  grid.appendChild(colorRow);

  function getPaintOnClickHandler(e) {
    activeColor = e.target.style.backgroundColor;
  }
  function paintOnClickHandler(e) {
    if (activeColor === null) return;
    e.target.style.backgroundColor = activeColor;
  }
  function paintOnDragHandler(e) {
    if (activeColor === null) return;
    e.target.style.backgroundColor = activeColor;
  }
}
