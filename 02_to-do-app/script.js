// Dec. 18, 2023
// To-do List App

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.getElementById("btn");

// Create a function to add tasks
function addTask() {
  if (inputBox.value === "") alert("Enter a task!");
  else {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value;
    listContainer.appendChild(listItem);
    // Add a "x" mark to the task
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listItem.appendChild(span);
  }
  // Remove typed task from the input box
  inputBox.value = "";
  saveData();
}
// Add a task by calling addTask()
btn.addEventListener("click", addTask);

// Update tasks
listContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }
});

// Save tasks
function saveData() {
  // Store the tasks in the local storage
  localStorage.setItem("Task", listContainer.innerHTML);
}

// Display tasks
function showData() {
  listContainer.innerHTML = localStorage.getItem("Task");
}

showData();
