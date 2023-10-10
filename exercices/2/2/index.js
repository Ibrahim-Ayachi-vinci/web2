const btn1 = document.querySelector('#myBtn1');
const bal = document.querySelector('#bal');
const cpt = document.querySelector('#cpt');
let cmp = 0;
cpt.innerHTML = 0;
btn1.addEventListener('click', onClickHandlerForBtn1);
function onClickHandlerForBtn1(){
    cmp++;
    console.log(cmp);
    cpt.innerHTML = cmp;
    if(cmp >= 5 && cmp <= 9){
    bal.innerText = "Bravo, bel échauffement";
    console.log("btn.onclick::anonymous function");
}
else if (cmp >= 10){
    bal.innerText = "Vous êtes passé maître en l'art du clic !"
}

};