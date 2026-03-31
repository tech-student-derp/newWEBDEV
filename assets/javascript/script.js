document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const img = document.querySelector('#dark-mode-toggle img');
    if (document.body.classList.contains('dark-mode')) {
        img.src = '../assets/png/day-sunny-icon.png';
        img.alt = 'Light Mode';
    } else {
        img.src = '../assets/png/night-icon.svg';
        img.alt = 'Dark Mode';
    }
});