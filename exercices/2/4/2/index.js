const div1 = document.querySelector('.red');
const div2 = document.querySelector('.orange');
const div3 = document.querySelector('.green');

let chiffre = 1;

setInterval(changement, 2000);

function changement () {
    console.log("je suis rentré")
    if (chiffre === 1) {
        div2.style.backgroundColor = "white";
        div1.style.backgroundColor = "red";
        chiffre = chiffre + 1;
    }else

    if (chiffre === 2){
        div1.style.backgroundColor = "white";
        div2.style.backgroundColor = "orange";
        chiffre = chiffre + 1;
    }else

    if (chiffre === 3){
        div2.style.backgroundColor = "white";
        div3.style.backgroundColor = "green";
        chiffre = chiffre + 1;
    }else

    if (chiffre === 4){
        div3.style.backgroundColor = "white";
        div2.style.backgroundColor = "orange";
        chiffre = 1;
    };
}