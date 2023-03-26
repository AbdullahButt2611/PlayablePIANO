const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");


let allKeys = [],
audio = new Audio("tunes/a.wav");           //BY DEFAULT AUDIO SRC IS A TONE




const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;         // PADDING AUDIO SRC BASED ON PASSED KEY
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}






pianoKeys.forEach(key => {

    allKeys.push(key.dataset.key);

    // CALLING PLAYTUNE FUNCTION BY PASSING THE DATASET VALUE AS ARGUMENT
    key.addEventListener("click", () => playTune(key.dataset.key))

});


const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}


const handleVolume = (e) => {
    audio.volume = e.target.value;
}


const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}


keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);