// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
// let countEl=document.getElementById("count-el")


// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count=0
function increment() {
    if (count<=4) {
    count += 1
    countEl.textContent=count
    }
}
function decrement() {
    if (count>0) {
        count -= 1
        countEl.textContent=count
    }

}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
    let holder = count + " - "
    saveEl.textContent += holder
}