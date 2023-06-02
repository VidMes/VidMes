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
