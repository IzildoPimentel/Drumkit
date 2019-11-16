const playSound = function(e) {   
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Select audio
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);    // Select key
    if (!audio) return;              // Stop the function from running all together
    audio.currentTime = 0;           // Rewind to the start
    audio.play();                    // Play the sound        
    key.classList.add('playing');    // Add the css class for effect          
}

const removeTransition = function(e) {
    if (e.propertyName !== 'transform') return; // Skip if it's not a transform
    this.classList.remove('playing');           // Remove the playing class from key
}

const executeMethods = function() {
    const keys = document.querySelectorAll('.key');                               // Select all keys
    keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // Remove the transition effect
    window.addEventListener('keydown', playSound);                                // If keydown play the playSound method
}

executeMethods();