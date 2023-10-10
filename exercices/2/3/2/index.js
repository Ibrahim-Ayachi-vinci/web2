const divs = document.querySelectorAll(".color-div");

divs.forEach((div) => {
    div.addEventListener("click", () => {
        div.innerText = div.style.backgroundColor;
        div.style.width = "100px";
        div.style.height = "100px";
    })
})