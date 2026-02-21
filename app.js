let secretNumberList = [];
let limitNumber = 100;
let secretNumber = randomNumber();
let trys = 1;
// let title = document.querySelector('h1');
// title.innerHTML = `Welcome to the Secret Number Game!`;

// let paragraph = document.querySelector('p');
// paragraph.innerHTML = (`Guess a number between 1 and 100`);
function textHTML(tag, text) {
    let field = document.querySelector(tag)
    field.innerHTML = text
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'en-US'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
function showMessage() {
textHTML ('h1', 'Welcome to the Secret Number Game!');
textHTML ('p', 'Guess a number between 1 and 100');
}
showMessage();
    console.log (secretNumber);
function verifyKick(number) {
    let kick = document.querySelector('input').value;
    if (kick > secretNumber) {
        console.log('The secret number is lower');
        textHTML (`p`, 'The secret number is lower');
    } else if (kick < secretNumber) {
        console.log('The secret number is higher');
        textHTML (`p`, 'The secret number is higher');
    } else {
        console.log('Congratulations! You guessed the secret number!');
        textHTML (`h1`, 'Congratulations!');
        let wordText = trys > 1 ? 'tries' : 'try';
        let tryText = `You guessed the secret number in ${trys} ${wordText}!`;
        textHTML (`p`, tryText);
        document.getElementById('restart').removeAttribute('disabled', false);
    }
    trys++;
    cleanField();
}

function randomNumber() {
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let elementsQuantity = secretNumberList.length;

    if (elementsQuantity == limitNumber) {
        secretNumberList = [];
    }
    if (secretNumberList.includes(chosenNumber)) {
        return randomNumber();
    } else {
        secretNumberList.push(chosenNumber);
        console.log(secretNumberList);
        return chosenNumber;
    }
}

function cleanField() {
    kick = document.querySelector('input');
    kick.value = '';
}

function restartGame() {
    secretNumber = randomNumber();
    console.log (secretNumber);
    trys = 1;
    cleanField();
    showMessage();
    document.getElementById('restart').setAttribute('disabled', true);
}