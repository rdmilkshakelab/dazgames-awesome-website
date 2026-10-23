document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".sound-btn");
    const player = document.getElementById("audio-player");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const soundFile = button.getAttribute("data-sound");
            
            // Set the audio source
            player.src = `sounds/${soundFile}`;
            
            // Reset to beginning so they can spam the button
            player.currentTime = 0; 
            
            // Play the clip
            player.play();
        });
    });
});
