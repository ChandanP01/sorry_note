document.getElementById('apologyButton').addEventListener('click', function () {
    const surpriseDiv = document.getElementById('surprise');
    if (surpriseDiv.classList.contains('hidden')) {
        surpriseDiv.classList.remove('hidden');
        this.textContent = 'You’re the Best ❤️';
        this.style.backgroundColor = '#fbc2eb';
    } else {
        surpriseDiv.classList.add('hidden');
        this.textContent = 'Click for a Surprise';
        this.style.backgroundColor = '#ff6f61';
    }
});