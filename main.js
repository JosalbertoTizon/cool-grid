const container = document.querySelector(".container");

const randomRGBColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

const moveColor10Percent = (baseRGBVectorString, preRGBVectorString, newRGBVectorString) => {
  let baseRGBVector = baseRGBVectorString.substring(4, baseRGBVectorString.length - 1).split(",");
  let preRGBVector = preRGBVectorString.substring(4, preRGBVectorString.length - 1).split(",");
  let newRGBVector = newRGBVectorString.substring(4, newRGBVectorString.length - 1).split(",");
  let resultRGBVector = [];
  for(let i = 0; i < preRGBVector.length; ++ i) 
    resultRGBVector.push(String(+preRGBVector[i] + (+newRGBVector[i] - +baseRGBVector[i]) / 10));
  return "rgb(" + resultRGBVector[0] + ", " + resultRGBVector[1] + ", " + resultRGBVector[2] + ")";
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
    element.initialBackgroundColor = getComputedStyle(element).backgroundColor;
    element.addEventListener("mouseover", e => {
      //element.style.backgroundColor = randomRGBColor();
      element.style.backgroundColor = moveColor10Percent(element.initialBackgroundColor, getComputedStyle(element).backgroundColor, "rgb(0,0,0)");
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