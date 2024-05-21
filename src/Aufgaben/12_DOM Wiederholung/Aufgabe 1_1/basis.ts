const inputText = document.querySelector(".InputText") as HTMLInputElement;
const inputTextout = document.querySelector(".textOut") as HTMLHeadingElement;
const dateOutput = document.getElementById("dateOutput") as HTMLDivElement;
const showTextButton = document.querySelector(".button");

    if (inputText && showTextButton){
showTextButton.addEventListener("click",() => {
inputTextout.innerHTML = inputText.value
const date = new Date()
const inputValue = inputText.value

dateOutput.innerHTML += `<p>${date}:${inputValue}</p>`
})
    }



