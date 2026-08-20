const jokes = [
    "Why did the AI go to space? Because it wanted to explore the cloud! ☁️",
    "What do you call a spaceship that tells jokes? A funny shuttle! 🚀",
    "Why did the comet break up with the asteroid? They were on different trajectories! 💔",
    "How do astronauts organize a party? They planet! 🎉",
    "What's an astronaut's favorite key on the keyboard? The space bar! ⌨️",
    "Why don't planets ever get lonely? They have orbiting friends! 🌍",
    "What did one star say to the other? You're a star! ⭐",
    "Why is the moon so smart? Because it's always learning about phases! 🌙",
    "How do you know if there's an alien in your refrigerator? Footprints in the butter! 👣",
    "What do aliens use to keep their pants up? An asteroid belt! 🪐",
    "Why did the sun go to school? To get brighter! ☀️",
    "What's the best thing about living in zero gravity? The food just floats away! 🍕",
    "Why can't you hear a pterodactyl using the bathroom? Because the 'P' is silent! 🦖",
    "What do you call a fake noodle? An impasta! 🍝",
    "Why did the telescope break up with the microscope? They had different perspectives! 🔬",
    "How many tickles does it take to make a squid laugh? Ten tickles! 🦑",
    "What's orange and sounds like a parrot? A carrot! 🥕",
    "Why don't scientists trust atoms? Because they make up everything! ⚛️",
    "What did the ocean say to the beach? Nothing, it just waved! 🌊",
    "Why is Cinderella so bad at soccer? Because she keeps running away from the ball! ⚽"
];

let jokeCounter = 0;
let laughLevel = 0;

function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    
    const jokeDisplay = document.getElementById('jokeDisplay');
    jokeDisplay.style.opacity = '0';
    
    setTimeout(() => {
        jokeDisplay.textContent = joke;
        jokeDisplay.style.opacity = '1';
    }, 200);
    
    // Update counter
    jokeCounter++;
    document.getElementById('jokeCount').textContent = jokeCounter;
    
    // Update laugh meter
    laughLevel = (laughLevel + Math.random() * 20) % 100;
    document.getElementById('laughMeter').textContent = Math.round(laughLevel) + '%';
    
    // Add pulse animation
    const jokeCard = document.querySelector('.joke-card');
    jokeCard.style.animation = 'none';
    setTimeout(() => {
        jokeCard.style.animation = 'pulse 0.6s ease';
    }, 10);
}

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        50% {
            transform: scale(1.02);
            box-shadow: 0 8px 40px rgba(102, 126, 234, 0.3);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
    }
`;
document.head.appendChild(style);

// Auto-generate a joke on page load
window.addEventListener('load', () => {
    setTimeout(generateJoke, 500);
});