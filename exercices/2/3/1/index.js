const div1 = document.getElementById("div1");
const button = document.getElementById("button");
const souhait = document.getElementById("souhait");
const souhaitButton = document.getElementById("souhaitButton");


const send = (e) => {
    e.preventDefault();
    div1.style.display = "none";
    souhait.innerText = `Le souhait est : ${souhaitButton.value}`;
};


button.addEventListener("click", send);
