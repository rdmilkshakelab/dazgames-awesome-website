/* Daz Games styling */
:root {
    --bg: #0a0b12;
    --bg-2: #121624;
    --panel: rgba(19, 22, 35, 0.9);
    --panel-alt: rgba(28, 35, 58, 0.96);
    --line: rgba(255, 255, 255, 0.08);
    --purple: #8a5cff;
    --pink: #ff4ac9;
    --orange: #ff9f43;
    --lime: #89ff9d;
    --white: #f4f7ff;
    --muted: #c8d0ea;
    --shadow: rgba(138, 92, 255, 0.4);
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
    background:
        radial-gradient(circle at top left, rgba(138, 92, 255, 0.28), transparent 30%),
        radial-gradient(circle at bottom right, rgba(255, 74, 201, 0.18), transparent 30%),
        var(--bg);
    color: var(--white);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 24px;
}

.page-shell {
    max-width: 1200px;
    margin: 0 auto;
}

.neon-header {
    max-width: 1200px;
    margin: 0 auto 30px;
    padding: 24px 18px 18px;
    text-align: center;
    border-bottom: 2px solid rgba(255, 74, 201, 0.8);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
}

.eyebrow {
    margin: 0 0 10px;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    font-size: 0.72rem;
    color: var(--lime);
    font-weight: 700;
}

.neon-header h1 {
    margin: 0;
    font-size: clamp(2.4rem, 5vw, 4.5rem);
    line-height: 1;
    letter-spacing: 0.08em;
    color: var(--pink);
    text-shadow: 0 0 16px rgba(255, 74, 201, 0.8);
}

.neon-header h2 {
    margin: 10px 0 0;
    text-transform: uppercase;
    letter-spacing: 0.26em;
    font-size: 0.9rem;
    color: var(--muted);
}

.credit {
    margin: 14px auto 0;
    max-width: 800px;
    color: var(--muted);
    font-size: 1rem;
}

.panel {
    background: linear-gradient(180deg, rgba(25, 29, 45, 0.96), rgba(14, 17, 26, 0.95));
    border: 1px solid var(--line);
    border-radius: 18px;
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.25);
}

.hero-panel {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 24px;
    padding: 28px;
    margin-bottom: 24px;
}

.kicker {
    margin: 0 0 8px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-size: 0.7rem;
    color: var(--orange);
    font-weight: 800;
}

.hero-copy h3 {
    margin: 0 0 12px;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    line-height: 1.1;
    color: var(--white);
}

.hero-copy p {
    margin: 0;
    font-size: 1.06rem;
    line-height: 1.7;
    color: var(--muted);
}

.hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    align-items: stretch;
}

.stat-box {
    background: linear-gradient(180deg, rgba(138, 92, 255, 0.16), rgba(138, 92, 255, 0.06));
    border: 1px solid rgba(138, 92, 255, 0.5);
    border-radius: 14px;
    padding: 18px 14px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 110px;
}

.stat-label {
    display: block;
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 8px;
}

.stat-box strong {
    color: var(--white);
    font-size: 1.35rem;
}

.feature-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin-bottom: 24px;
}

.feature-card {
    padding: 22px 18px;
}

.feature-icon {
    font-size: 2rem;
}

.feature-card h4 {
    margin: 14px 0 10px;
    font-size: 1.25rem;
    color: var(--white);
}

.feature-card p {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
}

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.panel h3 {
    margin: 0 0 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    font-size: 1.1rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--pink);
}

.soundboard-panel,
.youtube-panel,
.social-panel,
.daz-panel {
    padding: 22px 20px;
}

.sound-grid {
    display: grid;
    gap: 12px;
}

.sound-btn {
    width: 100%;
    border: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--purple), var(--pink));
    color: var(--white);
    font-weight: 800;
    font-size: 1rem;
    padding: 14px 16px;
    cursor: pointer;
    transition: transform 0.12s ease, box-shadow 0.2s ease;
    box-shadow: 0 10px 24px rgba(138, 92, 255, 0.35);
}

.sound-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 26px rgba(255, 74, 201, 0.34);
}

.video-feed,
.social-feed {
    display: grid;
    gap: 14px;
}

.video-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    overflow: hidden;
    transition: border-color 0.2s ease, transform 0.15s ease;
}

.video-card:hover {
    border-color: rgba(255, 74, 201, 0.5);
    transform: translateY(-2px);
}

.video-link {
    color: inherit;
    text-decoration: none;
    display: block;
}

.video-thumbnail {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    background: #101421;
}

.video-meta {
    padding: 12px 12px 14px;
}

.video-meta h4 {
    margin: 0 0 6px;
    color: var(--white);
    font-size: 1rem;
    line-height: 1.4;
}

.video-meta span {
    color: var(--lime);
    font-size: 0.8rem;
    letter-spacing: 0.04em;
}

.social-card-display {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 18px;
}

.social-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 10px;
}

.social-badge.twitterx {
    background: rgba(138, 92, 255, 0.14);
    color: #d8c9ff;
}

.social-badge.instagram {
    background: rgba(255, 74, 201, 0.12);
    color: #ffbfe9;
}

.social-text {
    margin: 0 0 14px;
    color: var(--white);
    line-height: 1.7;
    font-size: 0.96rem;
}

.social-view-btn {
    display: inline-block;
    text-decoration: none;
    background: linear-gradient(135deg, var(--orange), var(--pink));
    color: var(--white);
    padding: 10px 14px;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.84rem;
}

.daz-list {
    margin: 0;
    padding-left: 18px;
    color: var(--muted);
    line-height: 1.9;
}

.quote-box {
    margin-top: 18px;
    padding: 16px 18px;
    border-radius: 14px;
    background: linear-gradient(135deg, rgba(255, 159, 67, 0.14), rgba(255, 74, 201, 0.1));
    border: 1px solid rgba(255, 159, 67, 0.35);
    color: var(--white);
    font-weight: 600;
    line-height: 1.5;
}

.loading {
    color: var(--muted);
    margin: 0;
    line-height: 1.6;
}

#maintenance-overlay {
    position: fixed;
    inset: 0;
    background: rgba(8, 10, 18, 0.96);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

#maintenance-overlay.hidden {
    display: none;
}

.maintenance-content {
    text-align: center;
    padding: 38px 28px;
    border: 2px solid rgba(255, 74, 201, 0.8);
    border-radius: 20px;
    background: rgba(18, 22, 36, 0.96);
    box-shadow: 0 0 32px rgba(255, 74, 201, 0.24);
}

.maintenance-content h1 {
    margin: 0 0 8px;
    color: var(--pink);
}

.maintenance-content h2 {
    margin: 0 0 10px;
    color: var(--white);
}

.maintenance-content p {
    margin: 0;
    color: var(--muted);
}

.loading-mug {
    font-size: 4rem;
    margin-bottom: 14px;
    animation: tea-bob 1.5s ease-in-out infinite alternate;
}

@keyframes tea-bob {
    0% { transform: translateY(0) rotate(-4deg); }
    100% { transform: translateY(-10px) rotate(4deg); }
}

@media (max-width: 760px) {
    body {
        padding: 16px;
    }

    .hero-panel {
        grid-template-columns: 1fr;
    }

    .feature-row {
        grid-template-columns: 1fr;
    }

    .hero-stats {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (max-width: 520px) {
    .hero-stats {
        grid-template-columns: 1fr;
    }

    .neon-header h2 {
        letter-spacing: 0.12em;
    }
}

