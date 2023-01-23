let countEl = document.getElementById('count-el');
let count = 0;
let saveCount;
let saveEl = document.getElementById('save-el');

function passEntered() {
    count += 1;
    countEl.textContent = count;
}

function countDelete() {
    if (countEl.textContent == 0) {
        alert("zero passengers!");
    }
    else {
        count = count - 1;
        countEl.innerText = count;
    }
}

function countDeleteAll(){
    countEl.textContent = 0;
}

function passSaved() {
    saveCount = count + ", ";
    saveEl.textContent += saveCount;
    count = 0;
    countEl.textContent = 0;
}

function saveDeleteAll(){
    saveEl.textContent += saveCount;
    saveEl.textContent = "Total Passengers: ";
    countEl.textContent = 0;
}