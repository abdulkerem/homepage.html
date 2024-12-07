// Select all videos with the class 'bg-video'
const videos = document.querySelectorAll('.bg-video');
let currentIndex = 0;

// Function to change the active video
function changeVideo() {
    // Remove the 'active' class from all videos
    videos.forEach(video => video.classList.remove('active'));
    
    // Add the 'active' class to the next video in the list
    currentIndex = (currentIndex + 1) % videos.length;  // Loop back to the first video when done
    videos[currentIndex].classList.add('active');
}

// Change the video every 5 seconds
setInterval(changeVideo, 5000);

// Initially show the first video
videos[0].classList.add('active');
