// Configuration Objects (Replace with your actual keys and Channel IDs)
const CONFIG = {
    YOUTUBE_API_KEY: 'YOUR_FREE_GOOGLE_API_KEY',
    CHANNEL_ID: 'UCaFnJUS9uyysDbZn5fAIT3A', // Off The Hook Channel ID
};

document.addEventListener("DOMContentLoaded", () => {
    initSoundboard();
    fetchLatestVideos();
});

// Soundboard Trigger Engine
function initSoundboard() {
    const buttons = document.querySelectorAll(".sound-btn");
    const player = document.getElementById("global-player");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const file = btn.getAttribute("data-sound");
            player.src = `sounds/${file}`;
            player.currentTime = 0;
            player.play();
        });
    });
}

// Automated YouTube Data API Fetch
async function fetchLatestVideos() {
    const container = document.getElementById("video-container");
    const url = `https://googleapis.com{CONFIG.YOUTUBE_API_KEY}&channelId=${CONFIG.CHANNEL_ID}&part=snippet,id&order=date&maxResults=2`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (!data.items || data.items.length === 0) {
            container.innerHTML = "<p>No recent videos found.</p>";
            return;
        }

        container.innerHTML = ""; // Clear loader text
        
        data.items.forEach(item => {
            if (item.id.kind === "youtube#video") {
                const videoId = item.id.videoId;
                const title = item.snippet.title;
                
                const card = document.createElement("div");
                card.className = "video-card";
                card.innerHTML = `
                    <h4>${title}</h4>
                    <iframe src="https://youtube.com{videoId}" allowfullscreen></iframe>
                `;
                container.appendChild(card);
            }
        });
    } catch (error) {
        console.error("API Fetch Error:", error);
        container.innerHTML = "<p style='color: red;'>Failed to reload video feeds dynamically.</p>";
    }
}
