// Configuration Objects (Replace with your actual keys and Channel IDs)
const CONFIG = {
    YOUTUBE_API_KEY: 'AIzaSyAxN8eQDQfi_9M9ZMzh7oI9efpoqk-h9Nw',
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

let isFishing = false;
let reelProgress = 0;
let fishInterval;

document.getElementById("cast-btn").addEventListener("click", () => {
    const btn = document.getElementById("cast-btn");
    const status = document.getElementById("game-status");
    const barContainer = document.getElementById("fishing-bar-container");
    const progress = document.getElementById("fish-progress");

    if (!isFishing) {
        // Step 1: Cast the line
        isFishing = true;
        btn.innerText = "WAIT FOR BITE...";
        status.innerText = "Line casted... waiting for the float to bob...";
        
        setTimeout(() => {
            status.innerText = "🐟 BITE! REEL IT IN NOW! SPAM THE BUTTON!";
            btn.innerText = "REEL!";
            barContainer.style.display = "block";
            
            // Fish pulling back logic
            fishInterval = setInterval(() => {
                if (reelProgress > 0) {
                    reelProgress -= 3; // Fish pulls away
                    progress.style.width = reelProgress + "%";
                }
            }, 150);
        }, 2000 + Math.random() * 2000);

    } else if (btn.innerText === "REEL!") {
        // Step 2: Spam reeling mechanics
        reelProgress += 12;
        progress.style.width = reelProgress + "%";

        if (reelProgress >= 100) {
            clearInterval(fishInterval);
            const lootTable = ["Massive Sea Bass", "Teeny Minnow", "Old Boot", "Daz's Missing Hat", "Will's Fishing Bait"];
            const caught = lootTable[Math.floor(Math.random() * lootTable.length)];
            
            status.innerText = `🏆 SUCCESS! You reeled in a [ ${caught} ]!`;
            resetGame();
        }
    }
});

function resetGame() {
    const btn = document.getElementById("cast-btn");
    const barContainer = document.getElementById("fishing-bar-container");
    const progress = document.getElementById("fish-progress");
    
    isFishing = false;
    reelProgress = 0;
    btn.innerText = "CAST LINE";
    setTimeout(() => {
        barContainer.style.display = "none";
        progress.style.width = "0%";
    }, 3000);
}


