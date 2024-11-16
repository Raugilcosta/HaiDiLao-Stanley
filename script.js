function spinWheel() {
    const wheel = document.getElementById('wheel');
    const result = document.getElementById('result');
    const spinButton = document.getElementById('spinButton');

    // Desativa o botão após o clique
    spinButton.disabled = true;

    // Valores dos brindes e rotações
    const discounts = ["10% Off", "20% Off", "30% Off", "50% Off"];
    const rotations = [0, 90, 180, 270]; // Ângulos para os segmentos

    // Sorteia um desconto
    const randomIndex = Math.floor(Math.random() * discounts.length);
    const selectedDiscount = discounts[randomIndex];
    const rotationAngle = rotations[randomIndex] + 1440; // Ângulo com voltas extras

    // Define a rotação da roleta
    wheel.style.transform = `rotate(${rotationAngle}deg)`;

    // Mostra o resultado após a animação
    setTimeout(() => {
        result.textContent = `Congratulations! You got: ${selectedDiscount}`;
    }, 3000); // 3 segundos para esperar a animação
}
