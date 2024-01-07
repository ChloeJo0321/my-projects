// Jan. 07, 2024
// Music Player

let tracks = { artist: "Makaih Beats", title: "No Feelings" };
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let title = document.getElementById("title");
let artist = document.getElementById("artist");

// Set and display the title and artist name
title.innerHTML = tracks.title;
artist.innerHTML = tracks.artist;

// Set the progress bar according to the song duration and the current time
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
// To pause the song
function pausePlay() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    // To resume the song
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
}

// To fastforward the song
function fastforward() {
  song.currentTime += 15.0;
  progress.value = song.currentTime;
  song.play();
}

function backward() {
  song.currentTime -= 15.0;
  progress.value = song.currentTime;
  song.play();
}

// Move the progress bar as the song plays
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
// Move the progress bar and resume the song
progress.onchange = function () {
  song.currentTime = progress.value;
  song.play();
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
};
