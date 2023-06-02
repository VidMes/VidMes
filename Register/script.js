const backgroundVideo = document.getElementById('background-video');

// Mendapatkan waktu saat ini
const currentTime = new Date().getHours();

// Mendefinisikan video yang sesuai dengan waktu saat ini
let videoSource = '';
if (currentTime >= 5 && currentTime < 12) {
    // Pagi
    videoSource = 'morning.mp4';
} else if (currentTime >= 12 && currentTime < 18) {
    // Sore
    videoSource = 'afternoon.mp4';
} else {
    // Malam
    videoSource = 'night.mp4';
}

// Mengubah sumber video
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
