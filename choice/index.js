const rev_button=document.querySelector(".nav-button")
const rev_menu=document.querySelector(".res-ul")

rev_button.addEventListener("click",()=> {
    rev_menu.classList.toggle("visible")
})