const videoElement = document.querySelectorAll("video")[1];

let currentSrc = videoElement.src;

function handleSourceChange() {
  if (videoElement.src !== currentSrc) {
    console.log(
      `Video source changed from: ${currentSrc} to: ${videoElement.src}`
    );
    currentSrc = videoElement.src;
  }
}

videoElement.addEventListener("loadeddata", handleSourceChange);
videoElement.addEventListener("loadstart", handleSourceChange);
videoElement.addEventListener("ended", handleSourceChange);
