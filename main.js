const pianoKeys = document.querySelectorAll(".piano-keys .key");


let audio = new Audio("tunes/a.wav");           //BY DEFAULT AUDIO SRC IS A TONE




const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;         // PADDING AUDIO SRC BASED ON PASSED KEY
    audio.play();

    const clicked = document.querySelector(`[data-key="${key}"]`);
}






pianoKeys.forEach(key => {

    // CALLING PLAYTUNE FUNCTION BY PASSING THE DATASET VALUE AS ARGUMENT
    key.addEventListener("click", () => playTune(key.dataset.key))

});


const pressedKey = (e) => {
    playTune(e.key);
}


document.addEventListener("keydown", pressedKey);