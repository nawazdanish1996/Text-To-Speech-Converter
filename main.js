const textarea = document.querySelector('textarea'),
voiceList = document.querySelector('select');
speechBtn = document.querySelector('button');

let synth = speechSynthesis;
isSpeaking = true;

function voices(){
    for(let voice of synth.getVoices()){
        // selecting "Google US English" voice as default.
        let selected = voice.name === "Google US English" ? "selected" : "";
        // creating an option tag with passing voice anme and voice language.
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.name})</option>`;
        voiceList.insertAdjacentHTML('beforeend', option); // iinserting option tag beforeend of select tag.
    }
}

synth.addEventListener("voiceschanged", voices);

function textToSpeech(text){
    let utternance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        // If the available device voice name is equal to the user selected voice name.
        // then set speech voice to the user selected voice.
        if(voice.name === voiceList.value){
            utternance.voice = voice;
        }
    }
    speechSynthesis.speak(utternance); // speak the speech / utternance
}

speechBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        if(!synth.speaking){ // if an utternance / speech is not currently in the process of speaking.
            textToSpeech(textarea.value);
        }
        if(textarea.value.length > 80){
            // if isSpeaking is true then change it's value to false and resume to utternance
            // else change it's value to true and pause the speech.
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "Pause Speech";
            }else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "Resume Speech";
            }
        }
    }
});