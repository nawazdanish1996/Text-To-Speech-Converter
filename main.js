const textarea = document.querySelector('textarea'),
speechBtn = document.querySelector('button');

function textToSpeech(text){
    let utternance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utternance); // speak the speech / utternance
}

speechBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        textToSpeech(textarea.value);
    }
});