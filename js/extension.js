
let elems = []
let btn = document.querySelector('#input-btn')
let inputEl = document.querySelector("#input-el")

btn.addEventListener("click", () => {
    elems.push(inputEl.value)
    console.log(elems)
})


