let orderBtn = document.querySelector("#order-btn");


let welcome = document.querySelector("#welcome");


orderBtn.addEventListener("click", ()=> {
    let sections = document.querySelectorAll(".sections");

    sections.forEach(section => {
        section.setAttribute("hidden", "true");
    })
    let active = document.getElementById("categories");
    active.removeAttribute("hidden");

})




