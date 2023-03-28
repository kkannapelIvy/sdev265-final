const video = document.getElementById("background-video");
video.addEventListener("click", function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});