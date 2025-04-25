document.getElementById('ballerinaButton').addEventListener('click', function() {
    // Create sparkles effect
    const sparkles = document.createElement('div');
    sparkles.classList.add('sparkles');
    this.appendChild(sparkles);

    // Show the fairy
    const fairy = document.getElementById('fairy');
    fairy.classList.remove('hidden');
    setTimeout(() => {
        fairy.style.opacity = 1; // Fade in the fairy
    }, 100);

    // Redirect to the video page after a short delay
    setTimeout(() => {
        window.location.href = 'video.html'; // Change this to your video page
    }, 2000); // 2 seconds delay
});
