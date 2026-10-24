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

        <section class="about-panel panel">
            <div class="about-header">
                <p class="kicker">ABOUT DAZ</p>
                <h3>Born to entertain, built for the internet.</h3>
            </div>

            <div class="about-layout">
                <div class="about-copy">
                    <p>
                        Darren “Daz” Black is one of the most recognisable British internet personalities of the last decade.
                        He’s a YouTuber, comedian, actor, filmmaker, and content creator with a huge fanbase that loves his
                        honest reactions, no-filter humour, and unmistakable energy.
                    </p>
                    <p>
                        The magic of Daz Games is his ability to make gaming feel personal. He is expressive, affectionate,
                        chaotic, and impossible to classify as anything other than himself. Whether he is reacting to a horror
                        game, poking fun at a viral moment, or just being wildly charismatic in front of the camera, he brings
                        a vibe that feels both familiar and larger than life.
                    </p>
                    <p>
                        He also has that rare quality of making viewers feel like they are in on the joke — like they’re laughing
                        with a mate who just happens to be one of the funniest people on the internet.
                    </p>
                </div>

                <div class="about-facts">
                    <div class="fact-box">
                        <span>Known for</span>
                        <strong>Gaming, reactions, humour</strong>
                    </div>
                    <div class="fact-box">
                        <span>Signature style</span>
                        <strong>Chaotic, warm, expressive</strong>
                    </div>
                    <div class="fact-box">
                        <span>Fan favourite</span>
                        <strong>Horror games + comedy chaos</strong>
                    </div>
                </div>
            </div>
        </section>

        <section class="easter-egg-panel panel">
            <p class="kicker">EASTER EGGS</p>
            <h3>Little Daz moments and fan lore</h3>
            <div class="egg-grid">
                <div class="egg-card">
                    <span>🎩</span>
                    <p>“ha.” is basically instant Daz energy — a tiny, iconic, unforgettable little moment.</p>
                </div>
                <div class="egg-card">
                    <span>🕶️</span>
                    <p>His comedy style feels like a studio audience and a sleepover vlog had a baby.</p>
                </div>
                <div class="egg-card">
                    <span>🎮</span>
                    <p>Any time a horror game starts creeping in, everyone knows the tension is about to go absolutely feral.</p>
                </div>
                <div class="egg-card">
                    <span>😂</span>
                    <p>The core of Daz’s charm is that he doesn’t just react — he fully commits to the moment.</p>
                </div>
            </div>
        </section>

        <section class="panel rewards-panel">
            <p class="kicker">REWARDS</p>
            <h3>Unlocked badges</h3>
            <div id="badge-container" class="badge-container"></div>
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

        <section class="panel game-panel">
            <h3>🎣 FISH IN DAZ’S POND</h3>
            <div id="game-box">
                <p id="game-status">Ready to catch some fish?</p>
                <div id="fishing-bar-container" style="display: none;">
                    <div id="fish-progress"></div>
                </div>
                <button id="cast-btn">CAST LINE</button>
            </div>
        </section>

        <section class="panel memory-panel">
            <h3>🎯 DAZ MEMORY RUSH</h3>
            <div id="memory-game" class="memory-game">
                <button class="memory-card" data-key="1">?</button>
                <button class="memory-card" data-key="2">?</button>
                <button class="memory-card" data-key="3">?</button>
                <button class="memory-card" data-key="4">?</button>
                <button class="memory-card" data-key="5">?</button>
                <button class="memory-card" data-key="6">?</button>
            </div>
            <p id="memory-status" class="memory-status">Match the Daz-themed pairs.</p>
        </section>
    </main>

    <audio id="global-player"></audio>

    <script src="app.js"></script>
</body>
</html>
