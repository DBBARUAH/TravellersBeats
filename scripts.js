let currentVideoIndex = 0;
const videos = document.querySelectorAll('.video-carousel video');
const videoCount = videos.length;

function showNextVideo() {
  videos[currentVideoIndex].classList.remove('active');
  currentVideoIndex = (currentVideoIndex + 1) % videoCount;
  videos[currentVideoIndex].classList.add('active');
}

setInterval(showNextVideo, 8000);
