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