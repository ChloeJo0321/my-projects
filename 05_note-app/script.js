// Dec. 29, 2023
// Note App

const createBtn = document.getElementById("create-note");
const noteContainer = document.getElementById("note-container");
// let notes = document.querySelectorAll(".note");

function showNotes() {
  noteContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();
// button to create a note
createBtn.addEventListener("click", () => {
  let note = document.createElement("p");
  let image = document.createElement("img");
  note.className = "note";
  note.setAttribute("contenteditable", "true");
  image.src = "/images/notes-app-img/images/delete.png";
  noteContainer.appendChild(note).appendChild(image);
});

function updateNotes() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}
// note -> button to delete the note
// store & update the notes
noteContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateNotes();
  } else if (e.target.tagName === "P") {
    let notes = document.querySelectorAll(".note");
    notes.forEach((note) => {
      note.onkeyup = function () {
        updateNotes();
      };
    });
  }
});

// Insert a line break in a note
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
