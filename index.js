let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el")

function save(){
    // let countStr = count + " - " 
    let countStr = `${count} - `
    saveEl.innerText += countStr
    console.log(count)
    countEl.innerText = 0
    count = 0   
    
}

const name = () => {
    console.log("Hellow ol")
}

