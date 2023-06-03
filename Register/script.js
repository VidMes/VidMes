const backgroundVideo = document.getElementById('background-video');

const currentTime = new Date().getHours();

let videoSource = '';
if (currentTime >= 5 && currentTime < 12) {
    videoSource = 'morning.mp4';
} else if (currentTime >= 12 && currentTime < 18) {
    videoSource = 'afternoon.mp4';
} else {
    videoSource = 'night.mp4';
}

backgroundVideo.src = videoSource;

var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");

function nextPage() {
    page1.style.display = "none";
    page2.style.display = "block";
}

function prevPage() {
    page2.style.display = "none";
    page1.style.display = "block";
}
