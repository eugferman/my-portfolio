function drawHangman(lives) {
    switch(lives){
        case 4:
            document.getElementById('resultado-hangman').className = "resultado-hangman-4";
            break;
        case 3:
            document.getElementById('resultado-hangman').className = "resultado-hangman-3";
            break;
        case 2:
            document.getElementById('resultado-hangman').className = "resultado-hangman-2";
            break;
        case 1:
            document.getElementById('resultado-hangman').className = "resultado-hangman-1";
            break;
        default:
            let errorWord = wordToGuess.join('');    
            document.getElementById('show-word').innerHTML = 'La palabra era: '+errorWord;
            document.getElementById('resultado-hangman').className = "resultado-hangman-no-lives";
    }
}

function chooseWord(){
    const hangmanWords = ['marcelo', 'modric', 'courtois', 'hazard', 'benzema', 'casemiro', 'varane', 'carvajal', 'vinicius']
    let wordRandom = Math.floor(Math.random() * (9 - 0)) + 0;
    let choosenWord = hangmanWords[wordRandom]
    document.getElementById('input-guess').value = "";
    return choosenWord;
}
function hideWord(){
    let wordHidden = chooseWord().split('');
    return wordHidden;
}

let wordToGuess = hideWord();
let guessing = wordToGuess.map(function(){return '_'});
let lives = 5;
let bienvenida = 'HANGMAN';
console.log('wordToGuess: '+wordToGuess);
console.log('guessing: '+guessing);
document.getElementById('bienvenida-mensaje').innerHTML = bienvenida;
document.getElementById('word-to-guess').innerHTML = guessing.join(' ');
document.getElementById('guess-form').addEventListener('submit', checkLetter);
document.getElementById('show-lives').innerHTML = 'Intentos: '+lives;

function checkLetter(event){
    event.preventDefault();
    let inputLetter = document.getElementById('input-guess').value;
    if(lives > 0){
            if(wordToGuess.includes(inputLetter)){
                for(var x = 0; x < wordToGuess.length; x++){
                    if(inputLetter == wordToGuess[x]){
                        for(var y = 0; y < wordToGuess.length; y++){
                        guessing[x] = inputLetter;
                        // Borrar contenido del input
                        document.getElementById('input-guess').value = "";
                        }
                    }
                }
            } else {
                lives--;
                drawHangman(lives);
                document.getElementById('show-lives').innerHTML = 'Vidas: '+lives;
                // Borrar contenido del input
                document.getElementById('input-guess').value = "";
                
            }
       
        }

    document.getElementById('word-to-guess').innerHTML = guessing.join(' ');
    if(!guessing.includes('_')){
        document.getElementById('congrats').className = "congrats";
    }
    
}