const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinButton = document.getElementById('spinButton');
const result = document.getElementById('result');

const symbols = ['🍒', '🍋', '🍇', '⭐', '7', '🔔', '💎', '🍉'];

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin() {
    spinButton.disabled = true;
    result.textContent = 'Spinning...';

    reel1.classList.add('spinning');
    reel2.classList.add('spinning');
    reel3.classList.add('spinning');

    let spinCount = 0;
    const spinInterval = setInterval(() => {
        reel1.textContent = getRandomSymbol();
        reel2.textContent = getRandomSymbol();
        reel3.textContent = getRandomSymbol();
        spinCount++;
    }, 100);

    setTimeout(() => {
        clearInterval(spinInterval);
        reel1.classList.remove('spinning');
        reel2.classList.remove('spinning');
        reel3.classList.remove('spinning');

        const final1 = getRandomSymbol();
        const final2 = getRandomSymbol();
        const final3 = getRandomSymbol();
        reel1.textContent = final1;
        reel2.textContent = final2;
        reel3.textContent = final3;

        if (final1 === final2 && final2 === final3) {
            result.textContent = '🎉 Jackpot! You Win! 🎉';
        } else if (final1 === final2 || final2 === final3 || final1 === final3) {
            result.textContent = 'Nice! Two Match!';
        } else {
            result.textContent = 'Better Luck Next Time!';
        }

        spinButton.disabled = false;
    }, 2500); // 2.5 seconds spin duration
}

spinButton.addEventListener('click', spin);