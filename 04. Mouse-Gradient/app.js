function attachGradientEvents() {
    document.getElementById('gradient-box').addEventListener('mousemove',onMove);;
    let resultElement = document.getElementById('result');

    function onMove(e){
        const offsetX = e.offsetX;
        const percent = Math.floor(offsetX / e.target.clientWidth * 100);

        resultElement.textContent = `${percent}%`;
    }
}