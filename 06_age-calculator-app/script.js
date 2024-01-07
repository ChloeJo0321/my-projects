// Dec. 30, 2023
// Age Calculator App

const inputBox = document.getElementById("date-of-birth");
inputBox.max = new Date().toISOString().split("T")[0];
const btn = document.getElementById("calculate");
const calculatorContainer = document.getElementById("calculator-container");

btn.addEventListener("click", () => {
  let dateOfBirth = new Date(inputBox.value);
  let birthYear = dateOfBirth.getFullYear();
  let birthMonth = dateOfBirth.getMonth() + 1;
  let birthDate = dateOfBirth.getDate();

  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  let year, month, date;
  year = currentYear - birthYear;
  if (currentMonth >= birthMonth) {
    month = currentMonth - birthMonth;
  } else {
    year--;
    month = 12 + currentMonth - birthMonth;
  }
  if (currentDate >= birthDate) {
    date = currentDate - birthDate;
  } else {
    month--;
    date = getDaysInMonth(birthYear, birthMonth) + currentDate - birthDate;
  }
  if (month < 0) {
    year--;
  }

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  let ageResult = document.createElement("p");
  ageResult.innerHTML = `You are <span>${year}</span> years, <span>${month}</span> months and <span>${date}</span> days old`;
  calculatorContainer.appendChild(ageResult);
});
