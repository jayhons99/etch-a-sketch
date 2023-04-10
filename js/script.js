function createDiv(size) {
  const div = document.createElement("div");
  div.classList.add("square");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.backgroundColor = "black";
  return div;
}

function createBoard(numOfSquares) {
  const container = document.querySelector(".container");
  for (let i = 0; i < numOfSquares; i++) {
    for (let j = 0; j < numOfSquares; j++) {
      container.appendChild(createDiv(container.clientWidth / numOfSquares));
    }
  }
  squareHoverEffect();
}

function removeDiv() {
  const parent = document.querySelector(".container");

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function squareHoverEffect() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      square.style.backgroundColor = "white";
      event.preventDefault();
    });
  });
}

function resetBoard() {
  let size = Number(prompt("Enter number of squares on each side: ", 16));
  if (size > 100) {
    alert("Size must be less than or equal to 100!");
    throw new Error("invalid size");
  } else if (size <= 0) {
    alert("Size must be greater than 0!");
    throw new Error("invalid size");
  } else {
    removeDiv();
    createBoard(size);
  }
}

function clearBoard() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "black";
  });
}

function initialize() {
  createBoard(16);
}

initialize();
