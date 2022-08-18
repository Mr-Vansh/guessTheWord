const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const anotherWord = document.querySelector(".another-word");
const checkWord = document.querySelector(".check-word");
const input = document.querySelector("input");



let correctWord;

// shuffling letter function
const shuffle = (word) => {
    let arr = word.split("");
    let n = word.length;

    for(let i=0; i<n-1; i++)
    {
        let j = Math.floor(Math.random() * n);

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    //using JOIN method to remove "," after each letters that is occuring
    word = arr.join("");
    return word;
    
}

const initGame = () => {

    
    // getting RANDOM OBJ from WORDS ARRAY in WORDS.JS file
    let randomObj = words[Math.floor(Math.random() * words.length )];

    // getting SPLITTED WORD from WORDS array
    let word = randomObj.word;

    // calling SHUFFLE func to shuffle the LETTER randomly 
    // and reassingning letters in WORD variable
    word = shuffle(word);

    // MANIPULATING DOM by rendering "shuffledLetters"
    wordText.textContent = word;
    hintText.textContent = randomObj.hint;

    // storing ACTUAL word in CORRECT-WORD variable
    correctWord = randomObj.word.toLowerCase();
    
    // resetting INPUT FIELD
    input.value="";
}


const wordCheck = () => {

    // STORING value entered by user in USER-INPUT variable 
    let userInput = input.value.toLowerCase();

    if(userInput === correctWord)
    {
        input.classList.remove("incorrect");
        input.classList.add("correct");

        // using set-timeout method so that ANOTHER WORD appears after certain time 
        // so that the GREEN BORDER for input field is there for some time
        setTimeout(()=>{
            input.classList.remove("correct");
            initGame();
        } , 800)

    }
    else
    {
        input.classList.add("incorrect");
        setTimeout(()=>{
            input.classList.remove("correct");
        } , 500)
    }
    
}


anotherWord.addEventListener("click" , initGame);
checkWord.addEventListener("click" , wordCheck);

initGame();