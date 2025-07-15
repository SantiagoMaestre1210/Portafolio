// Global Variables
let particles = [];
let mouse = { x: 0, y: 0 };
let isScrolling = false;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initNavigation();
    initScrollEffects();
    initAnimations();
    initContactForm();
    initSkillBars();
    initCounters();
    initFloatingElements();
    initProfileImageUpload();
    initAdvancedEffects();
    initThemeEffects();
    initMindBlowingEffects();
    initInteractiveAnimations();
    initAudioVisualizer();
    initUltraAnimations();
    initMatrixEffect();
    initHologramEffects();
    initQuantumParticles();
    initSpaceWarp();
});

// Advanced Effects System
function initAdvancedEffects() {
    // Create floating text elements
    createFloatingElements();
    
    // Initialize 3D tilt effects
    init3DTiltEffects();
    
    // Start background animations
    startBackgroundAnimations();
}

function createFloatingElements() {
    const floatingTexts = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'GitHub', 'Python', 'Git', 'API', 'Figma', 'VS Code', 'Chrome DevTools', 'Stack Overflow'];
    const container = document.body;
    
    floatingTexts.forEach((text, index) => {
        const element = document.createElement('div');
        element.className = 'floating-text-element';
        element.textContent = text;
        element.style.cssText = `
            position: fixed;
            font-family: 'Orbitron', monospace;
            font-size: 1.2rem;
            color: rgba(0, 255, 255, 0.1);
            pointer-events: none;
            z-index: -1;
            animation: floatAround ${15 + index * 2}s linear infinite;
            animation-delay: ${index * -2}s;
        `;
        
        // Random starting position
        element.style.top = Math.random() * 100 + '%';
        element.style.left = Math.random() * 100 + '%';
        
        container.appendChild(element);
    });
}

function init3DTiltEffects() {
    const tiltElements = document.querySelectorAll('.project-card, .skill-category');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * 10;
            const rotateY = (centerX - x) / centerX * 10;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

function startBackgroundAnimations() {
    // Create pulsing lights
    const lights = [];
    for (let i = 0; i < 5; i++) {
        const light = document.createElement('div');
        light.className = 'pulsing-light';
        light.style.cssText = `
            position: fixed;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
            pointer-events: none;
            z-index: -1;
            animation: pulseLight ${3 + i}s ease-in-out infinite alternate;
        `;
        
        light.style.top = Math.random() * 100 + '%';
        light.style.left = Math.random() * 100 + '%';
        
        document.body.appendChild(light);
        lights.push(light);
    }
}

// Theme Effects
function initThemeEffects() {
    // Add dynamic CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatAround {
            0% { transform: translate(0, 100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.3; }
            100% { transform: translate(50vw, -100px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes pulseLight {
            0% { transform: scale(0.5); opacity: 0.1; }
            100% { transform: scale(1.5); opacity: 0.3; }
        }
        
        .floating-text-element:nth-child(odd) {
            color: rgba(255, 0, 128, 0.15) !important;
        }
        
        .floating-text-element:nth-child(3n) {
            color: rgba(0, 255, 65, 0.15) !important;
        }
    `;
    document.head.appendChild(style);
}

// Mind-Blowing Effects that will absolutely AMAZE you!
function initMindBlowingEffects() {
    // 1. Laser Beam Effect when scrolling
    createLaserBeams();
    
    // 2. DNA Helix Animation
    createDNAHelix();
    
    // 3. Constellation Effect
    createConstellation();
    
    // 4. Fire Particles
    createFireParticles();
    
    // 5. Lightning Effect
    createLightningEffect();
}

function createLaserBeams() {
    window.addEventListener('scroll', () => {
        const scrollProgress = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
        
        // Create laser beam
        const laser = document.createElement('div');
        laser.style.cssText = `
            position: fixed;
            top: 0;
            left: ${scrollProgress * 100}%;
            width: 2px;
            height: 100vh;
            background: linear-gradient(to bottom, transparent, #00ffff, #ff0080, transparent);
            animation: laserPulse 0.5s ease-out;
            pointer-events: none;
            z-index: 1000;
        `;
        
        document.body.appendChild(laser);
        
        setTimeout(() => laser.remove(), 500);
    });
    
    // Add laser animation
    const laserStyle = document.createElement('style');
    laserStyle.textContent = `
        @keyframes laserPulse {
            0% { opacity: 0; transform: scaleY(0); }
            50% { opacity: 1; transform: scaleY(1); box-shadow: 0 0 20px #00ffff; }
            100% { opacity: 0; transform: scaleY(0); }
        }
    `;
    document.head.appendChild(laserStyle);
}

function createDNAHelix() {
    const dna = document.createElement('div');
    dna.className = 'dna-helix';
    dna.style.cssText = `
        position: fixed;
        right: -50px;
        top: 20%;
        width: 100px;
        height: 60%;
        pointer-events: none;
        z-index: -1;
    `;
    
    // Create DNA strands
    for (let i = 0; i < 20; i++) {
        const strand = document.createElement('div');
        strand.style.cssText = `
            position: absolute;
            width: 4px;
            height: 20px;
            background: ${i % 2 === 0 ? '#00ffff' : '#ff0080'};
            left: ${Math.sin(i * 0.5) * 30 + 50}px;
            top: ${i * 15}px;
            border-radius: 2px;
            animation: dnaRotate ${2 + i * 0.1}s ease-in-out infinite;
            box-shadow: 0 0 10px currentColor;
        `;
        dna.appendChild(strand);
    }
    
    document.body.appendChild(dna);
    
    // DNA animation
    const dnaStyle = document.createElement('style');
    dnaStyle.textContent = `
        @keyframes dnaRotate {
            0%, 100% { transform: rotateY(0deg) translateX(0); }
            50% { transform: rotateY(180deg) translateX(20px); }
        }
    `;
    document.head.appendChild(dnaStyle);
}

function createConstellation() {
    const constellation = document.createElement('div');
    constellation.className = 'constellation';
    constellation.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    // Create stars
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #fff;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: starTwinkle ${1 + Math.random() * 3}s ease-in-out infinite alternate;
            box-shadow: 0 0 10px #fff;
        `;
        constellation.appendChild(star);
    }
    
    document.body.appendChild(constellation);
    
    // Star animation
    const starStyle = document.createElement('style');
    starStyle.textContent = `
        @keyframes starTwinkle {
            0% { opacity: 0.3; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.5); }
        }
    `;
    document.head.appendChild(starStyle);
}

function createFireParticles() {
    const fireContainer = document.createElement('div');
    fireContainer.style.cssText = `
        position: fixed;
        bottom: -50px;
        left: 0;
        width: 100%;
        height: 200px;
        pointer-events: none;
        z-index: -1;
    `;
    
    setInterval(() => {
        const fire = document.createElement('div');
        fire.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, #ff4500, #ff8c00, transparent);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            bottom: 0;
            animation: fireRise 3s ease-out forwards;
        `;
        
        fireContainer.appendChild(fire);
        
        setTimeout(() => fire.remove(), 3000);
    }, 200);
    
    document.body.appendChild(fireContainer);
    
    // Fire animation
    const fireStyle = document.createElement('style');
    fireStyle.textContent = `
        @keyframes fireRise {
            0% { 
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            100% { 
                transform: translateY(-200px) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(fireStyle);
}

function createLightningEffect() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every 3 seconds
            const lightning = document.createElement('div');
            lightning.style.cssText = `
                position: fixed;
                top: 0;
                left: ${Math.random() * 100}%;
                width: 2px;
                height: 100vh;
                background: linear-gradient(to bottom, #fff, #00ffff, transparent);
                animation: lightningStrike 0.1s ease-out;
                pointer-events: none;
                z-index: 1001;
                box-shadow: 0 0 50px #00ffff;
            `;
            
            document.body.appendChild(lightning);
            
            // Flash effect
            document.body.style.backgroundColor = 'rgba(0, 255, 255, 0.1)';
            
            setTimeout(() => {
                lightning.remove();
                document.body.style.backgroundColor = '';
            }, 100);
        }
    }, 3000);
    
    // Lightning animation
    const lightningStyle = document.createElement('style');
    lightningStyle.textContent = `
        @keyframes lightningStrike {
            0% { opacity: 0; }
            10% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(lightningStyle);
}

// Interactive Animations that respond to everything!
function initInteractiveAnimations() {
    // Mouse trail effect
    createMouseTrail();
    
    // Keyboard effects
    addKeyboardEffects();
    
    // Shake effect on click
    addShakeEffects();
    
    // Color wave effect
    createColorWave();
}

function createMouseTrail() {
    const trail = [];
    
    document.addEventListener('mousemove', (e) => {
        const trailElement = document.createElement('div');
        trailElement.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, #00ffff, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: trailFade 1s ease-out forwards;
        `;
        
        document.body.appendChild(trailElement);
        trail.push(trailElement);
        
        if (trail.length > 20) {
            const oldElement = trail.shift();
            oldElement.remove();
        }
        
        setTimeout(() => trailElement.remove(), 1000);
    });
    
    // Trail animation
    const trailStyle = document.createElement('style');
    trailStyle.textContent = `
        @keyframes trailFade {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(trailStyle);
}

function addKeyboardEffects() {
    document.addEventListener('keydown', (e) => {
        // Create explosion effect
        const explosion = document.createElement('div');
        explosion.style.cssText = `
            position: fixed;
            left: 50%;
            top: 50%;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, #ff0080, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: explode 0.5s ease-out forwards;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(explosion);
        
        setTimeout(() => explosion.remove(), 500);
    });
    
    // Explosion animation
    const explosionStyle = document.createElement('style');
    explosionStyle.textContent = `
        @keyframes explode {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }
    `;
    document.head.appendChild(explosionStyle);
}

function addShakeEffects() {
    document.addEventListener('click', (e) => {
        // Shake the whole page
        document.body.style.animation = 'pageShake 0.3s ease-in-out';
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 300);
    });
    
    // Shake animation
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
        @keyframes pageShake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-2px); }
            75% { transform: translateX(2px); }
        }
    `;
    document.head.appendChild(shakeStyle);
}

function createColorWave() {
    setInterval(() => {
        const wave = document.createElement('div');
        wave.style.cssText = `
            position: fixed;
            left: -100%;
            top: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), rgba(255, 0, 128, 0.1), transparent);
            pointer-events: none;
            z-index: -1;
            animation: colorWave 3s ease-in-out forwards;
        `;
        
        document.body.appendChild(wave);
        
        setTimeout(() => wave.remove(), 3000);
    }, 5000);
    
    // Wave animation
    const waveStyle = document.createElement('style');
    waveStyle.textContent = `
        @keyframes colorWave {
            0% { left: -100%; }
            100% { left: 100%; }
        }
    `;
    document.head.appendChild(waveStyle);
}

// Audio Visualizer Effect (even without audio!)
function initAudioVisualizer() {
    const visualizer = document.createElement('div');
    visualizer.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        display: flex;
        gap: 2px;
        pointer-events: none;
        z-index: 1000;
    `;
    
    // Create bars
    for (let i = 0; i < 20; i++) {
        const bar = document.createElement('div');
        bar.style.cssText = `
            width: 4px;
            height: 20px;
            background: linear-gradient(to top, #ff0080, #00ffff);
            border-radius: 2px;
            animation: visualizerBar ${0.5 + Math.random()}s ease-in-out infinite alternate;
            animation-delay: ${i * 0.1}s;
        `;
        visualizer.appendChild(bar);
    }
    
    document.body.appendChild(visualizer);
    
    // Visualizer animation
    const visualizerStyle = document.createElement('style');
    visualizerStyle.textContent = `
        @keyframes visualizerBar {
            0% { height: 5px; }
            100% { height: ${20 + Math.random() * 30}px; }
        }
    `;
    document.head.appendChild(visualizerStyle);
}

// ULTRA ANIMACIONES EXTREMAS - ¡Prepárate para lo increíble!
function initUltraAnimations() {
    // 1. Tornado de Partículas
    createTornado();
    
    // 2. Portal Dimensional
    createPortal();
    
    // 3. Explosión de Galaxias
    createGalaxyExplosion();
    
    // 4. Lluvia de Meteoros
    createMeteorRain();
    
    // 5. Efecto de Teletransporte
    createTeleportEffect();
    
    // 6. Ondas de Choque
    createShockWaves();
}

function createTornado() {
    const tornado = document.createElement('div');
    tornado.style.cssText = `
        position: fixed;
        left: 50%;
        top: 50%;
        width: 200px;
        height: 200px;
        pointer-events: none;
        z-index: -1;
        transform: translate(-50%, -50%);
    `;
    
    // Crear las capas del tornado
    for (let i = 0; i < 15; i++) {
        const layer = document.createElement('div');
        layer.style.cssText = `
            position: absolute;
            width: ${200 - i * 10}px;
            height: ${200 - i * 10}px;
            border: 2px solid rgba(0, 255, 255, ${0.1 + i * 0.05});
            border-radius: 50%;
            left: ${i * 5}px;
            top: ${i * 5}px;
            animation: tornadoSpin ${2 + i * 0.2}s linear infinite;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        `;
        tornado.appendChild(layer);
    }
    
    document.body.appendChild(tornado);
    
    const tornadoStyle = document.createElement('style');
    tornadoStyle.textContent = `
        @keyframes tornadoSpin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.2); }
            100% { transform: rotate(360deg) scale(1); }
        }
    `;
    document.head.appendChild(tornadoStyle);
}

function createPortal() {
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every 2 seconds
            const portal = document.createElement('div');
            portal.style.cssText = `
                position: fixed;
                left: ${Math.random() * 80 + 10}%;
                top: ${Math.random() * 80 + 10}%;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, transparent 30%, #00ffff 50%, #ff0080 70%, transparent 90%);
                border-radius: 50%;
                animation: portalOpen 3s ease-out forwards;
                pointer-events: none;
                z-index: 1000;
            `;
            
            document.body.appendChild(portal);
            
            // Crear partículas que salen del portal
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.style.cssText = `
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        width: 4px;
                        height: 4px;
                        background: ${Math.random() > 0.5 ? '#00ffff' : '#ff0080'};
                        border-radius: 50%;
                        animation: portalParticle 2s ease-out forwards;
                        transform: translate(-50%, -50%);
                    `;
                    portal.appendChild(particle);
                }, i * 100);
            }
            
            setTimeout(() => portal.remove(), 3000);
        }
    }, 2000);
    
    const portalStyle = document.createElement('style');
    portalStyle.textContent = `
        @keyframes portalOpen {
            0% { transform: scale(0) rotate(0deg); opacity: 0; }
            50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
            100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }
        @keyframes portalParticle {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { 
                transform: translate(-50%, -50%) 
                          translateX(${Math.random() * 200 - 100}px) 
                          translateY(${Math.random() * 200 - 100}px) 
                          scale(0); 
                opacity: 0; 
            }
        }
    `;
    document.head.appendChild(portalStyle);
}

function createGalaxyExplosion() {
    document.addEventListener('click', (e) => {
        // Crear explosión galáctica en cada clic
        const explosion = document.createElement('div');
        explosion.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 10px;
            height: 10px;
            pointer-events: none;
            z-index: 1001;
        `;
        
        // Crear múltiples ondas de explosión
        for (let i = 0; i < 5; i++) {
            const wave = document.createElement('div');
            wave.style.cssText = `
                position: absolute;
                left: -50px;
                top: -50px;
                width: 100px;
                height: 100px;
                border: 2px solid ${i % 2 === 0 ? '#00ffff' : '#ff0080'};
                border-radius: 50%;
                animation: galaxyWave ${1 + i * 0.2}s ease-out forwards;
                animation-delay: ${i * 0.1}s;
            `;
            explosion.appendChild(wave);
        }
        
        // Crear estrellas que salen disparadas
        for (let i = 0; i < 20; i++) {
            const star = document.createElement('div');
            const angle = (i / 20) * Math.PI * 2;
            star.style.cssText = `
                position: absolute;
                left: 0;
                top: 0;
                width: 3px;
                height: 3px;
                background: #fff;
                border-radius: 50%;
                animation: starShoot 1.5s ease-out forwards;
                animation-delay: ${i * 0.05}s;
                box-shadow: 0 0 10px #fff;
            `;
            star.style.setProperty('--angle', angle + 'rad');
            explosion.appendChild(star);
        }
        
        document.body.appendChild(explosion);
        setTimeout(() => explosion.remove(), 2000);
    });
    
    const galaxyStyle = document.createElement('style');
    galaxyStyle.textContent = `
        @keyframes galaxyWave {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(10); opacity: 0; }
        }
        @keyframes starShoot {
            0% { transform: translate(0, 0) scale(1); opacity: 1; }
            100% { 
                transform: translate(calc(cos(var(--angle)) * 200px), calc(sin(var(--angle)) * 200px)) scale(0); 
                opacity: 0; 
            }
        }
    `;
    document.head.appendChild(galaxyStyle);
}

function createMeteorRain() {
    setInterval(() => {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const meteor = document.createElement('div');
                meteor.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * 100}%;
                    top: -20px;
                    width: 4px;
                    height: 30px;
                    background: linear-gradient(to bottom, #fff, #00ffff, transparent);
                    border-radius: 2px;
                    animation: meteorFall ${2 + Math.random() * 2}s linear forwards;
                    pointer-events: none;
                    z-index: 1000;
                    box-shadow: 0 0 20px #00ffff;
                `;
                
                // Agregar cola del meteoro
                const tail = document.createElement('div');
                tail.style.cssText = `
                    position: absolute;
                    left: -2px;
                    top: -50px;
                    width: 8px;
                    height: 50px;
                    background: linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.3));
                    border-radius: 4px;
                `;
                meteor.appendChild(tail);
                
                document.body.appendChild(meteor);
                setTimeout(() => meteor.remove(), 4000);
            }, i * 500);
        }
    }, 3000);
    
    const meteorStyle = document.createElement('style');
    meteorStyle.textContent = `
        @keyframes meteorFall {
            0% { 
                transform: translateY(0) rotate(45deg); 
                opacity: 0; 
            }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { 
                transform: translateY(calc(100vh + 100px)) rotate(45deg); 
                opacity: 0; 
            }
        }
    `;
    document.head.appendChild(meteorStyle);
}

function createTeleportEffect() {
    window.addEventListener('keydown', (e) => {
        if (e.key === ' ') { // Spacebar
            e.preventDefault();
            
            // Efecto de teletransporte
            const teleport = document.createElement('div');
            teleport.style.cssText = `
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle, transparent 0%, #00ffff 50%, transparent 100%);
                pointer-events: none;
                z-index: 1002;
                animation: teleportFlash 0.3s ease-out;
            `;
            
            document.body.appendChild(teleport);
            
            // Crear ondas de teletransporte
            for (let i = 0; i < 5; i++) {
                const ring = document.createElement('div');
                ring.style.cssText = `
                    position: fixed;
                    left: 50%;
                    top: 50%;
                    width: 100px;
                    height: 100px;
                    border: 3px solid #00ffff;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    animation: teleportRing ${0.8 + i * 0.2}s ease-out forwards;
                    animation-delay: ${i * 0.1}s;
                    pointer-events: none;
                    z-index: 1001;
                `;
                document.body.appendChild(ring);
                setTimeout(() => ring.remove(), 1500);
            }
            
            setTimeout(() => teleport.remove(), 300);
        }
    });
    
    const teleportStyle = document.createElement('style');
    teleportStyle.textContent = `
        @keyframes teleportFlash {
            0% { opacity: 0; }
            50% { opacity: 0.3; }
            100% { opacity: 0; }
        }
        @keyframes teleportRing {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(10); opacity: 0; }
        }
    `;
    document.head.appendChild(teleportStyle);
}

function createShockWaves() {
    window.addEventListener('scroll', () => {
        if (Math.random() < 0.1) { // 10% chance
            const shockWave = document.createElement('div');
            shockWave.style.cssText = `
                position: fixed;
                left: 50%;
                top: 50%;
                width: 50px;
                height: 50px;
                border: 3px solid #ff0080;
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: shockWave 1s ease-out forwards;
                pointer-events: none;
                z-index: 1000;
            `;
            
            document.body.appendChild(shockWave);
            setTimeout(() => shockWave.remove(), 1000);
        }
    });
    
    const shockStyle = document.createElement('style');
    shockStyle.textContent = `
        @keyframes shockWave {
            0% { 
                transform: translate(-50%, -50%) scale(0); 
                opacity: 1;
                border-width: 5px;
            }
            100% { 
                transform: translate(-50%, -50%) scale(20); 
                opacity: 0;
                border-width: 1px;
            }
        }
    `;
    document.head.appendChild(shockStyle);
}

// EFECTO MATRIX - ¡Como en la película!
function initMatrixEffect() {
    const matrixContainer = document.createElement('div');
    matrixContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    // Crear columnas de caracteres
    for (let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        column.style.cssText = `
            position: absolute;
            left: ${i * 2}%;
            top: -100%;
            color: #00ff41;
            font-family: monospace;
            font-size: 14px;
            line-height: 14px;
            animation: matrixRain ${5 + Math.random() * 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            opacity: 0.3;
        `;
        
        // Agregar caracteres aleatorios
        let text = '';
        for (let j = 0; j < 50; j++) {
            const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        column.innerHTML = text;
        
        matrixContainer.appendChild(column);
    }
    
    document.body.appendChild(matrixContainer);
    
    const matrixStyle = document.createElement('style');
    matrixStyle.textContent = `
        @keyframes matrixRain {
            0% { transform: translateY(-100vh); }
            100% { transform: translateY(100vh); }
        }
    `;
    document.head.appendChild(matrixStyle);
}

// EFECTOS HOLOGRÁFICOS EXTREMOS
function initHologramEffects() {
    // Líneas holográficas que aparecen
    setInterval(() => {
        const line = document.createElement('div');
        line.style.cssText = `
            position: fixed;
            left: 0;
            top: ${Math.random() * 100}%;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ffff, transparent);
            pointer-events: none;
            z-index: 1000;
            animation: holoLine 2s ease-out forwards;
            box-shadow: 0 0 10px #00ffff;
        `;
        
        document.body.appendChild(line);
        setTimeout(() => line.remove(), 2000);
    }, 1500);
    
    // Interferencia holográfica
    setInterval(() => {
        document.body.style.filter = 'hue-rotate(10deg) contrast(1.1)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 100);
    }, 3000);
    
    const holoStyle = document.createElement('style');
    holoStyle.textContent = `
        @keyframes holoLine {
            0% { width: 0; opacity: 0; }
            50% { width: 100%; opacity: 1; }
            100% { width: 100%; opacity: 0; }
        }
    `;
    document.head.appendChild(holoStyle);
}

// PARTÍCULAS CUÁNTICAS LOCAS
function initQuantumParticles() {
    const quantumContainer = document.createElement('div');
    quantumContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    // Crear partículas cuánticas
    for (let i = 0; i < 30; i++) {
        const quantum = document.createElement('div');
        quantum.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, #8000ff, transparent);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: quantumFloat ${10 + Math.random() * 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            box-shadow: 0 0 20px #8000ff;
        `;
        
        quantumContainer.appendChild(quantum);
    }
    
    document.body.appendChild(quantumContainer);
    
    const quantumStyle = document.createElement('style');
    quantumStyle.textContent = `
        @keyframes quantumFloat {
            0%, 100% { 
                transform: translate(0, 0) scale(1);
                opacity: 0.3;
            }
            25% { 
                transform: translate(50px, -30px) scale(1.5);
                opacity: 1;
            }
            50% { 
                transform: translate(-30px, 40px) scale(0.5);
                opacity: 0.5;
            }
            75% { 
                transform: translate(20px, -50px) scale(2);
                opacity: 0.8;
            }
        }
    `;
    document.head.appendChild(quantumStyle);
}

// DISTORSIÓN ESPACIAL ÉPICA
function initSpaceWarp() {
    window.addEventListener('wheel', (e) => {
        // Efecto de distorsión al hacer scroll
        const warp = document.createElement('div');
        warp.style.cssText = `
            position: fixed;
            left: 50%;
            top: 50%;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, transparent 20%, rgba(255, 255, 255, 0.1) 40%, transparent 60%);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: spaceWarp 0.8s ease-out forwards;
            pointer-events: none;
            z-index: 1000;
            mix-blend-mode: difference;
        `;
        
        document.body.appendChild(warp);
        setTimeout(() => warp.remove(), 800);
    });
    
    const warpStyle = document.createElement('style');
    warpStyle.textContent = `
        @keyframes spaceWarp {
            0% { 
                transform: translate(-50%, -50%) scale(0) rotate(0deg);
                opacity: 0;
            }
            50% { 
                transform: translate(-50%, -50%) scale(1.5) rotate(180deg);
                opacity: 1;
            }
            100% { 
                transform: translate(-50%, -50%) scale(3) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(warpStyle);
}

// Aplicar efectos dinámicos a elementos
document.addEventListener('DOMContentLoaded', () => {
    // Agregar efectos especiales a elementos específicos
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.classList.add('cyber-border', 'pulse-breathe');
    });
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.classList.add('holographic-effect', 'levitate-extreme');
    });
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.classList.add('mega-glow');
    });
    
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.classList.add('glitch-effect');
        });
        btn.addEventListener('mouseleave', () => {
            setTimeout(() => btn.classList.remove('glitch-effect'), 300);
        });
    });
});

// ¡EFECTOS EXTRA SÚPER ÉPICOS!
window.addEventListener('dblclick', () => {
    // Doble clic crea EXPLOSIÓN MASIVA
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const boom = document.createElement('div');
            boom.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                width: 20px;
                height: 20px;
                background: radial-gradient(circle, #ff0080, #00ffff, transparent);
                border-radius: 50%;
                animation: megaBoom 1s ease-out forwards;
                pointer-events: none;
                z-index: 1003;
            `;
            document.body.appendChild(boom);
            setTimeout(() => boom.remove(), 1000);
        }, i * 100);
    }
});

// Agregar estilo para mega explosión
const megaBoomStyle = document.createElement('style');
megaBoomStyle.textContent = `
    @keyframes megaBoom {
        0% { transform: scale(0); opacity: 1; }
        50% { transform: scale(5); opacity: 0.8; }
        100% { transform: scale(10); opacity: 0; }
    }
`;
document.head.appendChild(megaBoomStyle);

// Efecto de pantalla completa aleatorio
setInterval(() => {
    if (Math.random() < 0.05) { // 5% chance every 10 seconds
        const screenEffect = document.createElement('div');
        screenEffect.style.cssText = `
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, 
                rgba(255, 0, 128, 0.1), 
                rgba(0, 255, 255, 0.1), 
                rgba(128, 0, 255, 0.1));
            pointer-events: none;
            z-index: 1004;
            animation: screenWave 2s ease-in-out forwards;
        `;
        document.body.appendChild(screenEffect);
        setTimeout(() => screenEffect.remove(), 2000);
    }
}, 10000);

const screenWaveStyle = document.createElement('style');
screenWaveStyle.textContent = `
    @keyframes screenWave {
        0% { opacity: 0; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.05); }
        100% { opacity: 0; transform: scale(1); }
    }
`;
document.head.appendChild(screenWaveStyle);

// MODO PARTY EXTREMO - Presiona la tecla P para activar la LOCURA TOTAL
window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'p') {
        activatePartyMode();
    }
    if (e.key.toLowerCase() === 'r') {
        createRainbowExplosion();
    }
    if (e.key.toLowerCase() === 'g') {
        createGlitchStorm();
    }
});

function activatePartyMode() {
    // Cambiar colores de todo de forma loca
    document.body.style.animation = 'partyColors 0.5s ease-in-out infinite';
    
    // Crear múltiples efectos al mismo tiempo
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createPortal();
            createGalaxyExplosion();
            createMeteorRain();
        }, i * 100);
    }
    
    // Crear texto flotante de PARTY
    const partyText = document.createElement('div');
    partyText.textContent = '¡MODO PARTY ACTIVADO!';
    partyText.style.cssText = `
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
        font-weight: bold;
        background: linear-gradient(45deg, #ff0080, #00ffff, #00ff41, #8000ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: partyTextFloat 3s ease-out forwards;
        pointer-events: none;
        z-index: 2000;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
    `;
    
    document.body.appendChild(partyText);
    
    setTimeout(() => {
        partyText.remove();
        document.body.style.animation = '';
    }, 3000);
}

function createRainbowExplosion() {
    const colors = ['#ff0080', '#00ffff', '#00ff41', '#8000ff', '#ff4500', '#ff69b4', '#00bfff'];
    
    for (let i = 0; i < 50; i++) {
        const rainbow = document.createElement('div');
        rainbow.style.cssText = `
            position: fixed;
            left: 50%;
            top: 50%;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            animation: rainbowBurst 2s ease-out forwards;
            pointer-events: none;
            z-index: 1500;
            box-shadow: 0 0 20px currentColor;
        `;
        
        const angle = (i / 50) * Math.PI * 2;
        const distance = Math.random() * 300 + 100;
        rainbow.style.setProperty('--angle', angle + 'rad');
        rainbow.style.setProperty('--distance', distance + 'px');
        
        document.body.appendChild(rainbow);
        setTimeout(() => rainbow.remove(), 2000);
    }
}

function createGlitchStorm() {
    // Crear tormenta de glitch en toda la pantalla
    for (let i = 0; i < 30; i++) {
        const glitch = document.createElement('div');
        glitch.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${20 + Math.random() * 50}px;
            height: ${5 + Math.random() * 10}px;
            background: ${Math.random() > 0.5 ? '#00ffff' : '#ff0080'};
            animation: glitchStormBar 0.8s ease-out forwards;
            pointer-events: none;
            z-index: 1600;
            opacity: 0.8;
        `;
        
        document.body.appendChild(glitch);
        setTimeout(() => glitch.remove(), 800);
    }
    
    // Efecto de interferencia en toda la pantalla
    document.body.style.filter = 'hue-rotate(180deg) contrast(1.5) saturate(2)';
    setTimeout(() => {
        document.body.style.filter = '';
    }, 300);
}

// Agregar estilos para los nuevos efectos
const newEffectsStyle = document.createElement('style');
newEffectsStyle.textContent = `
    @keyframes partyColors {
        0% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    @keyframes partyTextFloat {
        0% { 
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 0;
        }
        50% { 
            transform: translate(-50%, -50%) scale(1.2) rotate(180deg);
            opacity: 1;
        }
        100% { 
            transform: translate(-50%, -50%) scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes rainbowBurst {
        0% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% { 
            transform: translate(-50%, -50%) 
                      translateX(calc(cos(var(--angle)) * var(--distance))) 
                      translateY(calc(sin(var(--angle)) * var(--distance)))
                      scale(0);
            opacity: 0;
        }
    }
    
    @keyframes glitchStormBar {
        0% { 
            opacity: 0;
            transform: translateX(-100px) skewX(45deg);
        }
        50% { 
            opacity: 1;
            transform: translateX(0) skewX(0deg);
        }
        100% { 
            opacity: 0;
            transform: translateX(100px) skewX(-45deg);
        }
    }
`;
document.head.appendChild(newEffectsStyle);

// Efecto de pulsación en todo el scroll
let scrollPulse = 0;
window.addEventListener('scroll', () => {
    scrollPulse++;
    if (scrollPulse % 10 === 0) { // Cada 10 scroll events
        const pulse = document.createElement('div');
        pulse.style.cssText = `
            position: fixed;
            left: 50%;
            top: 50%;
            width: 300px;
            height: 300px;
            border: 3px solid rgba(0, 255, 255, 0.5);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: scrollPulseWave 1s ease-out forwards;
            pointer-events: none;
            z-index: 1200;
        `;
        document.body.appendChild(pulse);
        setTimeout(() => pulse.remove(), 1000);
    }
});

const scrollPulseStyle = document.createElement('style');
scrollPulseStyle.textContent = `
    @keyframes scrollPulseWave {
        0% { 
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% { 
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(scrollPulseStyle);

// Particle System
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas-element';
    const particlesContainer = document.getElementById('particles-canvas');
    particlesContainer.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.color = this.getRandomColor();
            this.opacity = Math.random() * 0.5 + 0.2;
            this.life = Math.random() * 200 + 100;
            this.maxLife = this.life;
        }
        
        getRandomColor() {
            const colors = ['#00ffff', '#ff0080', '#00ff41', '#8000ff', '#0080ff'];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life--;
            
            // Fade out as life decreases
            this.opacity = (this.life / this.maxLife) * 0.5;
            
            // Wrap around screen
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
            
            // Reset particle when life ends
            if (this.life <= 0) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.life = this.maxLife;
                this.color = this.getRandomColor();
            }
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 20;
            ctx.shadowColor = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
        
        distanceTo(x, y) {
            return Math.sqrt((this.x - x) ** 2 + (this.y - y) ** 2);
        }
    }
    
    // Special Particle class with advanced behaviors
    class SpecialParticle extends Particle {
        constructor() {
            super();
            this.size = Math.random() * 6 + 3;
            this.trail = [];
            this.maxTrailLength = 20;
            this.pulseSpeed = Math.random() * 0.02 + 0.01;
            this.pulse = 0;
        }
        
        update() {
            super.update();
            
            // Add current position to trail
            this.trail.push({x: this.x, y: this.y, opacity: 1});
            if (this.trail.length > this.maxTrailLength) {
                this.trail.shift();
            }
            
            // Update trail opacity
            this.trail.forEach((point, index) => {
                point.opacity = index / this.maxTrailLength;
            });
            
            // Update pulse
            this.pulse += this.pulseSpeed;
        }
        
        draw() {
            // Draw trail
            this.trail.forEach((point, index) => {
                if (index > 0) {
                    ctx.save();
                    ctx.globalAlpha = point.opacity * 0.3;
                    ctx.strokeStyle = this.color;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(this.trail[index - 1].x, this.trail[index - 1].y);
                    ctx.lineTo(point.x, point.y);
                    ctx.stroke();
                    ctx.restore();
                }
            });
            
            // Draw pulsing particle
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 30;
            ctx.shadowColor = this.color;
            
            const currentSize = this.size + Math.sin(this.pulse) * 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
            ctx.fill();
            
            // Inner glow
            ctx.fillStyle = 'white';
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            ctx.arc(this.x, this.y, currentSize * 0.3, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();
        }
    }
    
    // Create enhanced particles
    for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
    }
    
    // Add special particles with different behaviors
    for (let i = 0; i < 10; i++) {
        particles.push(new SpecialParticle());
    }
    
    // Mouse interaction
    canvas.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
            
            // Mouse interaction - attract particles
            const distance = particle.distanceTo(mouse.x, mouse.y);
            if (distance < 100) {
                const force = (100 - distance) / 100;
                const angle = Math.atan2(mouse.y - particle.y, mouse.x - particle.x);
                particle.speedX += Math.cos(angle) * force * 0.01;
                particle.speedY += Math.sin(angle) * force * 0.01;
            }
        });
        
        // Draw connections between nearby particles
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const distance = particle.distanceTo(otherParticle.x, otherParticle.y);
                if (distance < 100) {
                    ctx.save();
                    ctx.globalAlpha = (100 - distance) / 100 * 0.2;
                    ctx.strokeStyle = particle.color;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.stroke();
                    ctx.restore();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Navigation
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active section highlighting
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger specific animations based on element type
                if (entry.target.classList.contains('skill-item')) {
                    animateSkillBar(entry.target);
                } else if (entry.target.classList.contains('stat-item')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .skill-item, .stat-item, .project-card, .timeline-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Animations
function initAnimations() {
    // Hero buttons animation
    const heroButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    heroButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation to CSS
    if (!document.querySelector('#ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Animate submit button
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success state
            submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
            submitBtn.style.background = 'linear-gradient(135deg, #00ff41, #00ff41)';
            
            // Show success message
            showNotification('¡Mensaje enviado correctamente!', 'success');
            
            // Reset form
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = '<span>Enviar Mensaje</span><i class="fas fa-paper-plane"></i>';
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
            
        } catch (error) {
            // Error state
            submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
            submitBtn.style.background = 'linear-gradient(135deg, #ff0080, #ff0080)';
            
            // Show error message
            showNotification('Error al enviar el mensaje. Inténtalo de nuevo.', 'error');
            
            // Reset button
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Enviar Mensaje</span><i class="fas fa-paper-plane"></i>';
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }
    });
    
    // Form field animations
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        input.addEventListener('focus', () => {
            group.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                group.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            group.classList.add('focused');
        }
    });
}

// Skill Bars Animation
function initSkillBars() {
    function animateSkillBar(skillItem) {
        const progressBar = skillItem.querySelector('.skill-progress');
        const targetWidth = progressBar.getAttribute('data-width');
        
        // Reset width
        progressBar.style.width = '0%';
        
        // Animate to target width
        setTimeout(() => {
            progressBar.style.width = targetWidth + '%';
        }, 200);
    }
    
    // Store reference for use in scroll observer
    window.animateSkillBar = animateSkillBar;
}

// Counter Animation
function initCounters() {
    function animateCounter(statItem) {
        const numberElement = statItem.querySelector('.stat-number');
        const target = parseInt(numberElement.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            numberElement.textContent = Math.floor(current);
        }, stepTime);
    }
    
    // Store reference for use in scroll observer
    window.animateCounter = animateCounter;
}

// Floating Elements
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.float-item');
    
    // Mouse parallax effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingElements.forEach((element, index) => {
            const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
            const x = (mouseX - 0.5) * 50 * speed;
            const y = (mouseY - 0.5) * 50 * speed;
            
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Scroll parallax effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        floatingElements.forEach((element, index) => {
            const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform += ` translateY(${yPos}px)`;
        });
    });
}

// Profile Image Upload with Persistent Storage
function initProfileImageUpload() {
    const profileUploadArea = document.getElementById('profile-upload-area');
    const fileInput = document.getElementById('profile-image-input');
    const uploadOverlay = document.querySelector('.upload-overlay');
    const profileImage = document.getElementById('profile-image');
    const defaultAvatar = document.getElementById('default-avatar');
    
    // Load saved profile image on page load
    loadSavedProfileImage();
    
    // Handle click on profile area
    profileUploadArea.addEventListener('click', () => {
        fileInput.click();
    });
    
    // Handle file selection
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = e.target.result;
                
                // Update the profile image
                updateProfileImage(imageData);
                
                // Save to localStorage for persistence
                localStorage.setItem('profileImage', imageData);
                
                // Hide instructions
                const instructions = document.querySelector('.upload-instructions');
                if (instructions) {
                    instructions.style.display = 'none';
                }
                
                // Show success notification with glitch effect
                showNotification('¡Imagen de perfil actualizada permanentemente!', 'success');
                
                // Add glitch effect to the new image
                addGlitchEffect(profileImage);
            };
            reader.readAsDataURL(file);
        }
    });
    
    function loadSavedProfileImage() {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            updateProfileImage(savedImage);
            const instructions = document.querySelector('.upload-instructions');
            if (instructions) {
                instructions.style.display = 'none';
            }
        }
    }
    
    function updateProfileImage(imageData) {
        profileImage.src = imageData;
        profileImage.style.display = 'block';
        defaultAvatar.style.display = 'none';
        
        // Add holographic border effect to the image
        profileImage.style.filter = 'contrast(1.2) saturate(1.3)';
        profileImage.style.boxShadow = '0 0 50px rgba(0, 255, 255, 0.5), inset 0 0 50px rgba(255, 0, 128, 0.2)';
    }
    
    function addGlitchEffect(element) {
        element.style.animation = 'imageGlitch 0.5s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }

}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(0, 255, 65, 0.1)' : type === 'error' ? 'rgba(255, 0, 128, 0.1)' : 'rgba(0, 255, 255, 0.1)'};
        color: ${type === 'success' ? '#00ff41' : type === 'error' ? '#ff0080' : '#00ffff'};
        border: 1px solid ${type === 'success' ? '#00ff41' : type === 'error' ? '#ff0080' : '#00ffff'};
        border-radius: 10px;
        padding: 1rem 1.5rem;
        backdrop-filter: blur(10px);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 10px 30px ${type === 'success' ? 'rgba(0, 255, 65, 0.3)' : type === 'error' ? 'rgba(255, 0, 128, 0.3)' : 'rgba(0, 255, 255, 0.3)'};
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
    
    // Add animation styles if not exists
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
        `;
        document.head.appendChild(style);
    }
}

// Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00ffff, #ff0080);
        z-index: 10001;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px #00ffff;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollProgress + '%';
    });
}

// Initialize scroll progress
initScrollProgress();

// Smooth scroll for hero buttons
document.addEventListener('DOMContentLoaded', () => {
    const viewProjectsBtn = document.querySelector('.btn-primary');
    const contactBtn = document.querySelector('.btn-secondary');
    
    if (viewProjectsBtn) {
        viewProjectsBtn.addEventListener('click', () => {
            document.getElementById('projects').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});

// Project card interactions
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const actionBtns = card.querySelectorAll('.action-btn');
        
        actionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const icon = btn.querySelector('i');
                if (icon.classList.contains('fa-eye')) {
                    showNotification('Demo del proyecto próximamente disponible', 'info');
                } else if (icon.classList.contains('fa-github')) {
                    showNotification('Repositorio próximamente disponible', 'info');
                }
            });
        });
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Performance optimization
let ticking = false;

function updateOnScroll() {
    // Batch scroll-related updates here
    if (!ticking) {
        requestAnimationFrame(() => {
            // Scroll-dependent animations go here
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', updateOnScroll);

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        // Add any image URLs that should be preloaded
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize preloading
preloadImages();

console.log('Portfolio initialized successfully! 🚀');
