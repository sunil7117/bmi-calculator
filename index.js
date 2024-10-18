const btn = document.getElementById("submitValue");
const error = document.getElementById("errors");
const screen = document.getElementById("screen");
const screenValue = document.getElementById("screenValue");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (btn.textContent === "check others") {
    reset();
    return;
  }
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  if (weight === "" || height === "") {
    error.innerHTML =
      "<p style='color: red;font-weight: 800;font-size: 18px;'>You can't blank weight or height.</p>";
  } else {
    error.innerHTML = "";
    if (isNaN(weight) || isNaN(height)) {
      error.innerHTML =
        "<p style='color: red;font-weight: 800;font-size: 18px;'>Please write digits only.</p>";
    } else {
      console.log("apne jo dala hai wo ek number hai ap aage ja sakte hai");
      // Here i will write code for check bmi
      const heightInMeter = parseFloat(height) / 100;
      const heightmeterSquare = Math.pow(heightInMeter, 2).toFixed(2);
      const bmi = (weight / heightmeterSquare).toFixed(1);
      screen.style = "background-color: rgba(181, 173, 173, 0.119);";
      if (bmi <= 18.4) {
        screenValue.innerHTML = `Under Weight <br/><span>${bmi}</span>`;
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        screenValue.innerHTML = `Normal Weight <br/><span>${bmi}</span>`;
      } else if (bmi >= 25.0 && bmi <= 29.9) {
        screenValue.innerHTML = `Over Weight<br/><span>${bmi}</span>`;
      } else {
        screenValue.innerHTML = `Obesity <br/><span>${bmi}</span>`;
      }

      // This is Additinol funtion
      btn.innerHTML = "check others";
    }
  }
});

// Why is calling auto in later
function reset() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  screenValue.innerHTML = `0`;
  btn.innerHTML = "check bmi";
}
