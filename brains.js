// Get DOM elements: Color Fill divs

const colorOne = document.querySelector(".color-one");
const colorTwo = document.querySelector(".color-two");
const colorThree = document.querySelector(".color-three");
const colorFour = document.querySelector(".color-four");
const colorFive = document.querySelector(".color-five");

// Get DOM elements: Color Names to Render

const hexValueOneRen = document.querySelector(".hex-value-1");
const hexValueTwoRen = document.querySelector(".hex-value-2");
const hexValueThreeRen = document.querySelector(".hex-value-3");
const hexValueFourRen = document.querySelector(".hex-value-4");
const hexValueFiveRen = document.querySelector(".hex-value-5");

// Drop down selection

const modeSelect = document.getElementById("schemes");

// Get Color Picker Value Element

const colorPicker = document.getElementById("color-picker");

// Event Listener to Button

const button = document.getElementById("get-color-scheme");

button.addEventListener("click", () => {
  // Set initial color from user selection

  hexValueOneRen.textContent = colorPicker.value.toUpperCase();
  colorOne.style.backgroundColor = colorPicker.value;

  // Initiate GET request

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(
      1
    )}&mode=${modeSelect.value}&count=4`
  )
    .then((res) => res.json())
    .then((data) => {
      const serverColorOne = data.colors[0].hex.value;
      const serverColorTwo = data.colors[1].hex.value;
      const serverColorThree = data.colors[2].hex.value;
      const serverColorFour = data.colors[3].hex.value;

      // Render Colors & Values from JSON

      hexValueTwoRen.textContent = serverColorOne;
      colorTwo.style.backgroundColor = serverColorOne;
      hexValueThreeRen.textContent = serverColorTwo;
      colorThree.style.backgroundColor = serverColorTwo;
      hexValueFourRen.textContent = serverColorThree;
      colorFour.style.backgroundColor = serverColorThree;
      hexValueFiveRen.textContent = serverColorFour;
      colorFive.style.backgroundColor = serverColorFour;
    });
});
