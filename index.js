
function removeOverlayAndPlayAudio() {
    const overlay = document.getElementById('myElement');
    const audio = document.getElementById('background-audio');
    

    overlay.style.display = 'none';
    

    audio.play();
}


document.getElementById('myElement').addEventListener('click', removeOverlayAndPlayAudio);

function createOverlay() {
    const overlay = document.getElementById('myElement');
    overlay.textContent = 'Click anywhere to continue - site made by me';   
}

createOverlay();
