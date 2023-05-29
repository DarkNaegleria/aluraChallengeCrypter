hiddenCopyButton();

//Encripta el texto
function encryptSentence(sentence) {
    var characters = ["e", "i", "a", "o", "u"];
    var replacements = ["enter", "imes", "ai", "ober", "ufat"];
    
    for (var i = 0; i < characters.length; i++) {
      var regex = new RegExp(characters[i], "g");
      sentence = sentence.replace(regex, replacements[i]);
    }

    return sentence
}

//Desencripta el texto
function decryptSentence(sentence) {
    var replacements = ["enter", "imes", "ai", "ober", "ufat"];
    var characters = ["e", "i", "a", "o", "u"];
    
    for (var i = 0; i < replacements.length; i++) {
      var regex = new RegExp(replacements[i], "g");
      sentence = sentence.replace(regex, characters[i]);
    }

    return sentence
}
 
//Llena el output con el texto encriptado o desencriptado
function replaceSentence() {
    const inputText = document.getElementById("inputSentence");
    const userText = inputText.value;
    const encriptedSentence = encryptSentence(userText);

    const encriptedText = document.getElementById("outputResult");
    encriptedText.textContent = encriptedSentence;

    isThereText();
}


function revertReplaceSentence() {
    const inputText = document.getElementById("inputSentence");
    const userText = inputText.value;
    const decriptedSentence = decryptSentence(userText);

    const decriptedText = document.getElementById("outputResult");
    decriptedText.textContent = decriptedSentence;

    isThereText();
}

//Copia el output al portapapeles
function copyToDashboard() {
    const textToCopy = document.getElementById("outputResult");
    textToCopy.select();
    document.execCommand("copy");
}

//Muestra u oculta default-output
function hiddenDefaultOutput() {
    const defaultOutput = document.querySelector(".default-output");
    defaultOutput.style.display = "none";
}

function showDefaultOutput() {
    const defaultOutput = document.querySelector(".default-output");
    defaultOutput.style.display = "flex";
}

//Muestra u oculta copyButton
function hiddenCopyButton() {
    const copyButton = document.querySelector(".copy-clipboard");
    copyButton.style.display = "none";
}

function showCopyButton() {
    const copyButton = document.querySelector(".copy-clipboard");
    copyButton.style.display = "flex";
    copyButton.style.background = "#cdf8e4";
}

//Mustra u oculta indicaciones
function hiddenIndications() {
    const indications = document.querySelector(".indications");
    indications.style.display = "none";
}

function showIndications() {
    const indications = document.querySelector(".indications");
    indications.style.display = "flex";
}

//Ajusta la altura del output en movil y tablet
function resizeOutput() {
    const textArea = document.querySelector(".output-padron");
    const scrollHeight = textArea.scrollHeight;
    textArea.style.height = "auto";
    textArea.style.height = scrollHeight + 30 + "px";
}

//Evalua si hay o no texto en el Output
function isThereText() {
    const textArea = document.querySelector(".output-padron");
    const text = textArea.textContent.trim();
    if (text.length > 0) {
        hiddenDefaultOutput();
        showCopyButton();
        hiddenIndications();
        resizeOutput();
    } else {
        showDefaultOutput();
        hiddenCopyButton();
        showIndications();
        textArea.style.height = "auto";
    }
}

