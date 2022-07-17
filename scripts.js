var currentNumberWrapper =document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber= currentNumber+1;
    currentNumberWrapper.innerHTML= currentNumber;
}

function decrement() {
    currentNumber= currentNumber-1;
    currentNumberWrapper.innerHTML= currentNumber;
}

adicionar.addEventListener("click", changeText);
adicionar.addEventListener("click", increment);

subtrair.addEventListener("click", changeText);
subtrair.addEventListener("click", decrement);

function changeText() {
    instrução.textContent = "Muito bem!"
};