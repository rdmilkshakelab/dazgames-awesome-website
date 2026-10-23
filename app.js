
const CONFIG = {
    YOUTUBE_API_KEY: 'AIzaSyAxN8eQDQfi_9M9ZMzh7oI9efpoqk-h9Nw',
    CHANNEL_ID: 'UCDBCCMlFD-hArPbWv38FINA',
};

document.addEventListener("DOMContentLoaded", () => {
    initSoundboard();
    fetchLatestVideos();
});

// soundboard trigger engine
function initSoundboard() {
    const buttons = document.querySelectorAll(".sound-btn");
    const player = document.getElementById("global-player");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const file = btn.getAttribute("data-sound");
            player.src = file;
            player.currentTime = 0;
            player.

                // yt api fetch
async function fetchLatestVideos() {
    const container = document.getElementById("video-container");
    
    // Base endpoint path with fixed template variables
    const url = `https://googleapis.com{CONFIG.YOUTUBE_API_KEY}&channelId=${CONFIG.CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (!data.items || data.items.length === 0) {
            container.innerHTML = "<p>No recent videos found.</p>";
            return;
        }

        container.innerHTML = ""; // clear loader text
        
        let videoCount = 0;
        
        data.items.forEach(item => {
            // Limit dashboard display strictly to the top 2 actual videos
            if (item.id && item.id.kind === "youtube#video" && videoCount < 2) {
                const videoId = item.id.videoId;
                const title = item.snippet.title;
                const thumbnail = item.snippet.thumbnails.medium.url; // Grabs the video image preview
                const videoUrl = `https://youtube.com{videoId}`; // Clean redirect URL
                
                const card = document.createElement("div");
                card.className = "video-card";
                
                // FIXED: Changed iframe to a clean, clickable link with a thumbnail image
                card.innerHTML = `
                    <a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="video-link">
                        <img src="${thumbnail}" alt="${title}" class="video-thumbnail">
                        <h4>${title}</h4>
                    </a>
                `;
                container.appendChild(card);
                videoCount++;
            }
        });

        if (videoCount === 0) {
            container.innerHTML = "<p>No recent video uploads found in this feed loop.</p>";
        }

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
        // step 1: cast the line
        isFishing = true;
        btn.innerText = "WAIT FOR BITE...";
        status.innerText = "Line casted... waiting for the float to bob...";
        
        setTimeout(() => {
            status.innerText = "🐟 BITE! REEL IT IN NOW! SPAM THE BUTTON!";
            btn.innerText = "REEL!";
            barContainer.style.display = "block";
            
            // fish pulling back logic
            fishInterval = setInterval(() => {
                if (reelProgress > 0) {
                    reelProgress -= 3; // Fish pulls away
                    progress.style.width = reelProgress + "%";
                }
            }, 150);
        }, 2000 + Math.random() * 2000);

    } else if (btn.innerText === "REEL!") {
        // fish reeling logic
        reelProgress += 12;
        progress.style.width = reelProgress + "%";

        if (reelProgress >= 100) {
            clearInterval(fishInterval);
            const lootTable = ["Massive Sea Bass", "Teeny Minnow", "Old Boot", "Daz's Missing Hat", "Will's Favorite Hat", "Richard the First"];
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

// CONFIGURATION: Populated with your exact live rss.app feeds
const SOCIAL_FEEDS = {
    twitter: "https://rss.app/feeds/7qbely6L2jyljIuD.xml",
    instagram: "https://rss.app/feeds/Qi47PvXka44z63Dg.xml"
};

async function fetchSocialFeeds() {
    const container = document.getElementById("social-container");
    
    // Wrap your live feeds into individual proxy urls to strip CORS blocks completely
    const twitterProxy = `https://rss2json.com{encodeURIComponent(SOCIAL_FEEDS.twitter)}`;
    const instagramProxy = `https://rss2json.com{encodeURIComponent(SOCIAL_FEEDS.instagram)}`;

    try {
        // Fetch both social feeds concurrently
        const [twitterResponse, instagramResponse] = await Promise.all([
            fetch(twitterProxy).then(res => res.json().catch(() => ({ items: [] }))),
            fetch(instagramProxy).then(res => res.json().catch(() => ({ items: [] })))
        ]);

        let combinedPosts = [];

        // Parse Twitter Payload 
        if (twitterResponse.items && twitterResponse.items.length > 0) {
            twitterResponse.items.forEach(item => {
                combinedPosts.push({
                    platform: "Twitter / X",
                    text: item.title || "New Tweet",
                    link: item.link,
                    date: new Date(item.pubDate).getTime()
                });
            });
        }

        // Parse Instagram Payload
        if (instagramResponse.items && instagramResponse.items.length > 0) {
            instagramResponse.items.forEach(item => {
                combinedPosts.push({
                    platform: "Instagram",
                    text: item.title || "New Instagram Post",
                    link: item.link,
                    date: new Date(item.pubDate).getTime()
                });
            });
        }

        // Sort dynamically so the absolute newest post across BOTH platforms sits at index 0
        combinedPosts.sort((a, b) => b.date - a.date);

        if (combinedPosts.length === 0) {
            container.innerHTML = "<p>No recent social updates found.</p>";
            return;
        }

        container.innerHTML = ""; // Clear loader text
        const displayCard = document.createElement("div");
        displayCard.className = "social-card-display";
        container.appendChild(displayCard);

        let currentIndex = 0;

        // Display switcher loop function
        function renderPost() {
            const post = combinedPosts[currentIndex];
            const isInstagram = post.platform === "Instagram";
            
            displayCard.innerHTML = `
                <div class="social-badge ${isInstagram ? 'instagram' : 'twitterx'}">
                    ${isInstagram ? '📸' : '🐦'} ${post.platform}
                </div>
                <p class="social-text">${post.text}</p>
                <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="social-view-btn">
                    View Original Post →
                </a>
            `;

            // Seamlessly alternate to the next index item, looping infinitely
            currentIndex = (currentIndex + 1) % combinedPosts.length;
        }

        // Trigger the initial rendering cycle instantly
        renderPost();

        // Automatically auto-switch profiles every 5 seconds flat
        setInterval(renderPost, 5000);

    } catch (error) {
        console.error("Social Engine Error:", error);
        container.innerHTML = "<p style='color: red;'>Failed to load social updates.</p>";
    }
}

