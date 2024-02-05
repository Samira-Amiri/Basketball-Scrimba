let counthome = 0;
let countguest = 0;

function first() {
    counthome += 1;
    document.getElementById("score_home_el").textContent = counthome;
}

function second() {
    counthome += 2;
    document.getElementById("score_home_el").textContent = counthome;
}

function third() {
    counthome += 3;
    document.getElementById("score_home_el").textContent = counthome;
}

function firstguest() {
    countguest += 1;
    document.getElementById("score_guest_el").textContent = countguest;
}

function secondguest() {
    countguest += 2;
    document.getElementById("score_guest_el").textContent = countguest;
}

function thirdguest() {
    countguest += 3;
    document.getElementById("score_guest_el").textContent = countguest;
}