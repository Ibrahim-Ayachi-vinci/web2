const button = document.getElementById('myBtn1');
let cmp = 0;
let timeOut;
let time;

button.addEventListener('mouseover', start);
button.addEventListener('click', click);

function start() {

    timeOut = setTimeout(() => {
        alert("Tu as perdu")
    }, 5000);
    time = Date.now();
};

function click () {
    console.log(cmp);
    if (cmp === 10){
        clearTimeout(timeOut);
        time = Date.now() - time;
        alert(`tu as gagné en ${time} ms`);
    };
    cmp = cmp + 1;
};