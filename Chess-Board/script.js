function chessBoard(el, rows, cols) {
    function getChessBaord() {
      const board = document.querySelector(el);
      for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.setAttribute("data-index", String(i));
        row.classList.add("row");
        for (let j = 0; j < cols; j++) {
          const cell = document.createElement("div");
          if ((i + j) % 2) {
            cell.classList.add("black");
            cell.id = "id" + i + j;
            cell.setAttribute("data-index", String(j));
          } else {
            cell.classList.add("white");
            cell.id = "id" + i + j;
            cell.setAttribute("data-index", String(j));
          }
          cell.addEventListener("click", onClickHandler);
          row.appendChild(cell);
        }
        board.appendChild(row);
      }
    }
  
    function onClickHandler(e) {
      removePaint();
      const column = e.target.dataset.index;
      const row = e.target.parentElement.dataset.index;
      colorRightBottom(Number(row), Number(column));
      colorRightTop(Number(row), Number(column));
      colorLeftTop(Number(row), Number(column));
      colorLeftBottom(Number(row), Number(column));
    }
  
    function removePaint() {
      const coloredCells = document.querySelectorAll(".crimson");
      coloredCells.forEach((cell) => {
        cell.classList.remove("crimson");
      });
    }
  
    function colorRightBottom(row, col) {
      do {
        document.getElementById("id" + row + col).classList.add("crimson");
      } while (++row < 8 && ++col < 8);
    }
  
    function colorRightTop(row, col) {
      do {
        document.getElementById("id" + row + col).classList.add("crimson");
      } while (--row >= 0 && ++col < 8);
    }
  
    function colorLeftTop(row, col) {
      do {
        document.getElementById("id" + row + col).classList.add("crimson");
      } while (--row >= 0 && --col >= 0);
    }
  
    function colorLeftBottom(row, col) {
      do {
        document.getElementById("id" + row + col).classList.add("crimson");
      } while (++row < 8 && --col >= 0);
    }
  
    getChessBaord();
  }