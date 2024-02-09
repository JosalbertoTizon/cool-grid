const container = document.querySelector(".container");

const buildGrid = tileNumber => {
  while(container.firstElementChild)
    container.removeChild(container.firstElementChild)
  for(let i = 0; i < tileNumber * tileNumber; ++ i) {
    container.appendChild(document.createElement("div"));
  }
  Array.from(container.children).forEach(element => {
    element.classList.add("pixel");
    element.style.width = String(100/tileNumber) + "%";
    element.addEventListener("mouseover", e => {
      element.style.backgroundColor = "blue";
    })
  })

}

buildGrid(16);

const NumberOfTilesButton = document.querySelector(".number-of-tiles-button");
NumberOfTilesButton.addEventListener("click", e => {
  buildGrid(prompt("How many tiles do you want on each direction?"));
})