const CONFIG = {
    YOUTUBE_API_KEY: 'AIzaSyAxN8eQDQfi_9M9ZMzh7oI9efpoqk-h9Nw',
    CHANNEL_ID: 'UCDBCCMlFD-hArPbWv38FINA',
    RSS_FEEDS: {
        twitter: 'https://rss.app/feeds/7qbely6L2jyljIuD.xml',
        instagram: 'https://rss.app/feeds/Qi47PvXka44z63Dg.xml'
    }
};

document.addEventListener("DOMContentLoaded", () => {
    initSoundboard();
    fetchLatestVideos();
    fetchSocialFeeds();
});

async function resolveSoundPath(file) {
    const candidates = [
        `sounds/${file}`,
        file
    ];

    for (const candidate of candidates) {
        try {
            const response = await fetch(candidate, { method: "HEAD" });
            if (response.ok) {
                return candidate;
            }
        } catch (error) {
            // ignore and try next candidate
        }
    }

    return candidates[0];
}

// soundboard trigger engine
function initSoundboard() {
    const buttons = document.querySelectorAll(".sound-btn");
    const player = document.getElementById("global-player");

    buttons.forEach(btn => {
        btn.addEventListener("click", async () => {
            const file = btn.getAttribute("data-sound");
            if (!file) return;

            const soundPath = await resolveSoundPath(file);
            player.src = soundPath;
            player.load();
            player.currentTime = 0;
            player.play().catch(error => {
                console.warn("Audio playback was blocked:", error);
            });
        });
    });
}

async function fetchLatestVideos() {
    const container = document.getElementById("video-container");

    const url = `https://www.googleapis.com/youtube/v3/search?key=${CONFIG.YOUTUBE_API_KEY}&channelId=${CONFIG.CHANNEL_ID}&part=snippet,id&order=date&maxResults=5&type=video`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`YouTube API request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (!data.items || data.items.length === 0) {
            container.innerHTML = "<p>No recent videos found.</p>";
            return;
        }

        container.innerHTML = "";

        let videoCount = 0;

        data.items.forEach(item => {
            if (item.id && item.id.videoId && videoCount < 2) {
                const videoId = item.id.videoId;
                const title = item.snippet?.title || "Untitled video";
                const thumbnail = item.snippet?.thumbnails?.medium?.url || item.snippet?.thumbnails?.default?.url || "";
                const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

                const card = document.createElement("div");
                card.className = "video-card";

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
        isFishing = true;
        btn.innerText = "WAIT FOR BITE...";
        status.innerText = "Line casted... waiting for the float to bob...";

        setTimeout(() => {
            status.innerText = "🐟 BITE! REEL IT IN NOW! SPAM THE BUTTON!";
            btn.innerText = "REEL!";
            barContainer.style.display = "block";

            fishInterval = setInterval(() => {
                if (reelProgress > 0) {
                    reelProgress -= 3;
                    progress.style.width = reelProgress + "%";
                }
            }, 150);
        }, 2000 + Math.random() * 2000);
    } else if (btn.innerText === "REEL!") {
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

async function fetchRssFeed(url) {
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`;

    try {
        const response = await fetch(proxyUrl);
        if (!response.ok) {
            return { items: [] };
        }

        const data = await response.json();
        return data && Array.isArray(data.items) ? data : { items: [] };
    } catch (error) {
        console.error(`RSS fetch failed for ${url}:`, error);
        return { items: [] };
    }
}

async function fetchSocialFeeds() {
    const container = document.getElementById("social-container");

    try {
        const [twitterResponse, instagramResponse] = await Promise.all([
            fetchRssFeed(CONFIG.RSS_FEEDS.twitter),
            fetchRssFeed(CONFIG.RSS_FEEDS.instagram)
        ]);

        let combinedPosts = [];

        if (twitterResponse.items && twitterResponse.items.length > 0) {
            twitterResponse.items.forEach(item => {
                combinedPosts.push({
                    platform: "Twitter / X",
                    text: item.title || "New Tweet",
                    link: item.link || "#",
                    date: new Date(item.pubDate || Date.now()).getTime()
                });
            });
        }

        if (instagramResponse.items && instagramResponse.items.length > 0) {
            instagramResponse.items.forEach(item => {
                combinedPosts.push({
                    platform: "Instagram",
                    text: item.title || "New Instagram Post",
                    link: item.link || "#",
                    date: new Date(item.pubDate || Date.now()).getTime()
                });
            });
        }

        combinedPosts.sort((a, b) => b.date - a.date);

        if (combinedPosts.length === 0) {
            container.innerHTML = "<p>No recent social updates found.</p>";
            return;
        }

        container.innerHTML = "";
        const displayCard = document.createElement("div");
        displayCard.className = "social-card-display";
        container.appendChild(displayCard);

        let currentIndex = 0;

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

            currentIndex = (currentIndex + 1) % combinedPosts.length;
        }

        renderPost();
        setInterval(renderPost, 5000);
    } catch (error) {
        console.error("Social Engine Error:", error);
        container.innerHTML = "<p style='color: red;'>Failed to load social updates.</p>";
    }
}
