let counEl = document.getElementById("count")
let saveEL = document.getElementById("save-el")
counEl.textContent = 0

let count = 0
function increment() {
    count += 1
    counEl.textContent = count
}

function save() {
    saveEL.textContent +=  counEl.textContent + " - "
    count = 0
    counEl.textContent = count
}
function reset() {
    saveEL.textContent = "previous count :"
    count = 0
    counEl.textContent = count
}