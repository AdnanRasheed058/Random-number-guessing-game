
let guessSubmitBtn = document.querySelector(".submit-btn")




let getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}


let getUserInput = () => {
    let guessInput = document.querySelector(".guess-input");
    let guessValue = guessInput.value;
    guessInput.value = ""
    return guessValue;
}

let checkResult = (user, system) => {
    let outPut = document.querySelector(".out-put")
    if (user == system) {
        outPut.innerHTML = "Congratulation you have won"
        // console.log("congratulation you win")
    }
    else {
        outPut.innerHTML = `Correct Answer is ${system} \nTry Again`
        // console.log("try again")
    }
}


guessSubmitBtn.addEventListener("click", () => {
    let randomNumber = getRandomNumber();
    let userValue = getUserInput();
    checkResult(userValue, randomNumber)
})

