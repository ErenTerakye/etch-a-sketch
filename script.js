const container = document.querySelector("#container");
const button = document.querySelector("button");

for (let i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.setAttribute("class", "row")
  container.appendChild(row);
  for (let j = 0; j < 16; j++) {
    let column = document.createElement("div");
    column.setAttribute("class", "column");
    row.appendChild(column);
  }
}

container.addEventListener("mouseover", (event) => {
  if(event.target.classList.contains("column")) {
    const target = event.target;

    target.style.background= `rgb(${getRandomNumber(256)}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
  }
});

button.addEventListener("click", createNewGrid);

function createNewGrid() {
  let gridLength;
  do {
    gridLength = parseInt(prompt("Enter the grid length"));
  } while(typeof(gridLength) !== "number" || gridLength < 1 || gridLength > 100);
  container.innerHTML = "";

  let boxSize = 480 / gridLength;

  for (let i = 0; i < gridLength; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);
    for (let j = 0; j < gridLength; j++) {
      let column = document.createElement("div");
      column.setAttribute("class", "column");
      column.style.padding = `${boxSize / 2 - 1}px`
      row.appendChild(column);
    }
  }
}

function getRandomNumber(excludedLastNum) {
  return Math.floor(Math.random() * excludedLastNum);
}