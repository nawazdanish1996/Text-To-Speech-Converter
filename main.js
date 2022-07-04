const textarea = document.querySelector('textarea'),
voiceList = document.querySelector('select');
speechBtn = document.querySelector('button');

let synth = speechSynthesis;

function voices(){
    for(let voice of synth.getVoices()){
        console.log(voice);
        // creating an option tag with passing voice anme and voice language.
        let option = `<option value="${voice.name}">${voice.name} (${voice.name})</option>`;
        voiceList.insertAdjacentHTML('beforeend', option); // iinserting option tag beforeend of select tag.
    }
}

synth.addEventListener("voiceschanged", voices);

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