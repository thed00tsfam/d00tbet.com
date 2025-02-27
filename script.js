const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinButton = document.getElementById('spinButton');
const result = document.getElementById('result');

const symbols = ['🍒', '🍋', '🍇', '🍊', '🍉', '⭐', '🔔', '7️⃣'];
const spinDuration = 2000; // 2 seconds

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinReels() {
    spinButton.disabled = true;
    result.textContent = 'Spinning...';

    // Add spinning animation
    reel1.classList.add('spinning');
    reel2.classList.add('spinning');
    reel3.classList.add('spinning');

    // Simulate spinning by rapidly changing symbols
    let spins = 0;
    const spinInterval = setInterval(() => {
        reel1.textContent = getRandomSymbol();
        reel2.textContent = getRandomSymbol();
        reel3.textContent = getRandomSymbol();
        spins++;
    }, 100);

    // Stop spinning after duration
    setTimeout(() => {
        clearInterval(spinInterval);
        reel1.classList.remove('spinning');
        reel2.classList.remove('spinning');
        reel3.classList.remove('spinning');

        // Final symbols
        const r1 = getRandomSymbol();
        const r2 = getRandomSymbol();
        const r3 = getRandomSymbol();
        reel1.textContent = r1;
        reel2.textContent = r2;
        reel3.textContent = r3;

        // Check for win
        if (r1 === r2 && r2 === r3) {
            result.textContent = 'Jackpot! You Win!';
        } else if (r1 === r2 || r2 === r3 || r1 === r3) {
            result.textContent = 'Close! Two match!';
        } else {
            result.textContent = 'Try again!';
        }

        spinButton.disabled = false;
    }, spinDuration);
}

spinButton.addEventListener('click', spinReels);