const container = document.querySelector(".container");

const randomRGBColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

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
      element.style.backgroundColor = randomRGBColor();
    })
  })
}

buildGrid(16);

const NumberOfTilesButton = document.querySelector(".number-of-tiles-button");
NumberOfTilesButton.addEventListener("click", e => {
  let promptValue = prompt("How many tiles do you want on each direction?");
  if(promptValue == null)
    return;
  if(!isNaN(promptValue) && Number.isInteger(+promptValue) && promptValue > 0 && promptValue <= 100)
    buildGrid(promptValue);
  else alert("Invalid Number!");
})