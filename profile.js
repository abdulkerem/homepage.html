
        // Video Background Transition
        const videos = document.querySelectorAll('.bg-video');
        let currentVideo = 0;

        function changeVideo() {
            videos[currentVideo].classList.remove('active');
            currentVideo = (currentVideo + 1) % videos.length;
            videos[currentVideo].classList.add('active');
        }

        setInterval(changeVideo, 5000); // Change video every 5 seconds

        // Typing Effect
        const typedText = document.getElementById('typed-text');
        const cursor = document.querySelector('.cursor');
        const textArray = ['Web Developer', 'Digital Marketer', 'Tech Enthusiast', 'Lifelong Learner'];
        let textIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textIndex].length) {
                typedText.textContent += textArray[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(deleteText, 1000);
            }
        }

        function deleteText() {
            if (charIndex > 0) {
                typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(deleteText, 100);
            } else {
                textIndex = (textIndex + 1) % textArray.length;
                setTimeout(type, 500);
            }
        }

        // Start typing animation
        setTimeout(type, 1000);

        // Cursor blinking effect
        setInterval(() => {
            cursor.classList.toggle('active');
        }, 500);
