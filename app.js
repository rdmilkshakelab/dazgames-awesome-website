<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daz Games Fan Hub</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="maintenance-overlay" class="hidden">
        <div class="maintenance-content">
            <div class="loading-mug">☕</div>
            <h1>Website will be back soon</h1>
            <h2>Making some tea...</h2>
            <p>Linda is making some awesome upgrades!</p>
        </div>
    </div>

    <header class="neon-header">
        <div class="logo-container">
            <p class="eyebrow">Darren “Daz” Black</p>
            <h1>DAZ GAMES</h1>
            <h2>fan hub</h2>
        </div>
        <p class="credit">Gaming chaos, laughs, reactions, and pure internet energy.</p>
    </header>

    <main class="page-shell">
        <section class="hero-panel panel">
            <div class="hero-copy">
                <p class="kicker">THE BRITISH INTERNET ICON</p>
                <h3>Big laughs. Big reactions. Big personality.</h3>
                <p>
                    Daz Games is the creation of Darren “Daz” Black — a comedy powerhouse, YouTuber,
                    gamer, and internet personality known for his chaotic energy, hilarious reactions,
                    and love of horror games, comedy sketches, and all-round madcap fun.
                </p>
            </div>

            <div class="hero-stats">
                <div class="stat-box">
                    <span class="stat-label">Style</span>
                    <strong>Chaotic</strong>
                </div>
                <div class="stat-box">
                    <span class="stat-label">Vibe</span>
                    <strong>Hilarious</strong>
                </div>
                <div class="stat-box">
                    <span class="stat-label">Energy</span>
                    <strong>Unfiltered</strong>
                </div>
            </div>
        </section>

        <section class="feature-row">
            <article class="feature-card panel">
                <span class="feature-icon">🎮</span>
                <h4>Horror game chaos</h4>
                <p>From tense playthroughs to full-on scream-at-the-screen moments, Daz lives for the jump scares.</p>
            </article>
            <article class="feature-card panel">
                <span class="feature-icon">😂</span>
                <h4>Daz Watches</h4>
                <p>His reaction energy turns every video into a comedy event — genuine, loud, and unforgettable.</p>
            </article>
            <article class="feature-card panel">
                <span class="feature-icon">🔥</span>
                <h4>Comedy + personality</h4>
                <p>Warm, expressive, and impossible to ignore, Daz blends gaming, satire, and pure personality.</p>
            </article>
        </section>

        <div class="dashboard-grid">
            <section class="panel soundboard-panel">
                <h3>⚡ MEME SOUNDBOARD</h3>
                <div class="sound-grid">
                    <button class="sound-btn" data-sound="linda.mp3">🗣️ LINDA!</button>
                    <button class="sound-btn" data-sound="ha.mp3">🎩 ha. (Hat Raise)</button>
                    <button class="sound-btn" data-sound="fanta.mp3">That's fucking Fanta!</button>
                </div>
            </section>

            <section class="panel youtube-panel">
                <h3>📺 LATEST VIDEOS</h3>
                <div id="video-container" class="video-feed">
                    <p class="loading">Fetching latest uploads from YouTube...</p>
                </div>
            </section>

            <section class="panel social-panel">
                <h3>📱 SOCIAL UPDATES</h3>
                <div id="social-container" class="social-feed">
                    <p class="loading">Connecting to social feeds...</p>
                </div>
            </section>

            <section class="panel daz-panel">
                <h3>🌟 WHY DAZ GAMES HIT</h3>
                <ul class="daz-list">
                    <li>Comedy that feels real, loud, and spontaneous.</li>
                    <li>Horror gaming energy that keeps fans coming back.</li>
                    <li>Big reactions and memorable catchphrases.</li>
                    <li>Creative sketches and content with huge personality.</li>
                    <li>Authentic internet charisma with a loyal fanbase.</li>
                </ul>
                <div class="quote-box">
                    “The energy is the whole point — it feels like a laugh with your mates.”
                </div>
            </section>
        </div>
    </main>

    <audio id="global-player"></audio>

    <script src="app.js"></script>
</body>
</html>
