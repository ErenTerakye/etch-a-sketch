const container = document.querySelector("#container");

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
    target.style.background= "black";
  }
});