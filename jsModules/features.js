//modal ======================================================//

let modal = document.querySelector(".modal-container");
let submitbtn = document.querySelector("#submit");

submitbtn.addEventListener("click", (event)=>{
    event.preventDefault();
    event.stopPropagation();
    modal.style.display = "block";
})

window.addEventListener("click", event => {
    modal.style.display = "none";
})


//navigation===============================================//

let navigation = document.querySelector(".nav-container");
let navBtn = document.querySelector(".navShow")
let navToggle = false;

navBtn.addEventListener("click", event =>{
    if (!navToggle) {
        navigation.style.display = "block";
        navToggle = true;
    } else {
        navigation.style.display = "none";
        navToggle = false;
    }
});

//this removes the INLINE display property larger displays
//allows for css styling of larger display 
window.addEventListener("resize", event =>{
    let currentDisplay = navigation.getAttribute("style")
    console.log(currentDisplay);
    if (document.documentElement.clientWidth >= 800)
        navigation.style.removeProperty('display');
});

//form validations====================================================//

let autoFill = document.querySelector(".autofill")
let fillToggle = false;
autoFill.addEventListener("click", event=>{
    if (!fillToggle){
        //grab all the values from billing
        let inputData = document.querySelectorAll(".billing input")
        let fieldObj = new Object();
        fillToggle = true;
        //store the class name and value into object
        for (let field of Array.from(inputData)){
            if (!fieldObj[field.className]){
                fieldObj[field.className] = field.value;
            }
        }
        //loop shipping and find field with value (if available)
        inputData = document.querySelectorAll(".shipping input")
        for (let field of Array.from(inputData)){
            if (fieldObj[field.className]){
                field.value = fieldObj[field.className];
            }
        }    

    } else fillToggle = false;
})
