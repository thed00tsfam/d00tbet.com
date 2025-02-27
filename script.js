document.getElementById("spin-button").addEventListener("click", function() {
    const symbols = ["🍒", "🍋", "🍉", "🍊", "⭐", "💎"];
    
    // Randomize slot results
    let slot1 = symbols[Math.floor(Math.random() * symbols.length)];
    let slot2 = symbols[Math.floor(Math.random() * symbols.length)];
    let slot3 = symbols[Math.floor(Math.random() * symbols.length)];
    
    // Update slots
    document.getElementById("slot1").innerText = slot1;
    document.getElementById("slot2").innerText = slot2;
    document.getElementById("slot3").innerText = slot3;

    // Check win condition
    let message = "😢 Try Again!";
    if (slot1 === slot2 && slot2 === slot3) {
        message = "🎉 JACKPOT! You Win! 🎉";
    }
    document.getElementById("result-message").innerText = message;
});
