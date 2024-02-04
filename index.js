document.getElementById("score_home_el")
document.getElementById("score_guest_el")
document.getElementById("firstle")
document.getElementById("secondle")
document.getElementById("thirdle")

let counthome =0  
let countguest = 0

function first(){
    counthome += 1
    score_home_el.textContent = counthome
}
function second(){
    counthome += 2 
    score_home_el.textContent = counthome
}
function third(){
    counthome += 3
    score_home_el.textContent = counthome

}
function first(){
    countguest += 1
    score_guest_el.textContent = countguest
}
function second(){
    countguest += 2 
    score_guest_el.textContent = countguest
}
function third(){
    countguest += 3
    score_guest_el.textContent = countguest

}