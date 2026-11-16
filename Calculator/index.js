const buttonElement = document.querySelectorAll("button")
const inputFieldElement = document.getElementById("result")

for(let i=0; i<buttonElement.length; i++){
    buttonElement[i].addEventListener("click", ()=>{
        const buttonValue = buttonElement[i].textContent;
        if(buttonValue==="C"){
            clearScreen();
        } else if(buttonValue==="="){
            calculateResult();
        } else{
            appendValue(buttonValue);
        }
    })
}

function clearScreen(){
    inputFieldElement.value = "";
};

function calculateResult(){
    inputFieldElement.value = eval(inputFieldElement.value);
};

function appendValue(buttonValue){
    inputFieldElement.value += buttonValue;
};