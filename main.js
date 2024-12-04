function rollDice(sides) {
    const diceResult = document.getElementById('dice-result');
    diceResult.innerHTML = '';

    const dice = document.createElement('div');
    dice.className = 'dice';
    diceResult.appendChild(dice);

    const rollDuration = Math.random() * 4 + 1;
    const rollInterval = 100;
    const rollSteps = rollDuration * 1000 / rollInterval;

    let currentStep = 0;
    const interval = setInterval(() => {
        currentStep++;
        const randomValue = Math.floor(Math.random() * sides) + 1;
        dice.textContent = randomValue;

        if (currentStep >= rollSteps) {
            clearInterval(interval);
            const finalValue = Math.floor(Math.random() * sides) + 1;
            dice.textContent = finalValue;
            dice.style.animation = 'none';
            Telegram.WebApp.sendData(`roll_${sides}_${finalValue}`);
        }
    }, rollInterval);
}
