const btn = document.querySelector(".password")
const inputElement = document.getElementById("input")
const copyElement = document.querySelector(".copy")
const alertElement = document.querySelector(".alert-container")

btn.addEventListener("click", ()=>{
    createPassword();
})

copyElement.addEventListener("click", ()=>{
    copyPassword();
    if(inputElement.value){
        alertElement.classList.remove("active");
        setTimeout(()=>{
            alertElement.classList.add("active");
        },2000);
    }
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    inputElement.value = password;
    alertElement.innerText = password + " copied !";

}

function copyPassword(){
    inputElement.select();
    navigator.clipboard.writeText(inputElement.value);
    
}