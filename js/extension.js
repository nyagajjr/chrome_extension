
let elems = []
let btn = document.querySelector('#input-btn')
let inputEl = document.querySelector("#input-el")
let ulEl = document.querySelector("#ul-el")
let anchorEl = document.querySelector("#anchor-el")

// Actions of the button
btn.addEventListener("click", () => {
    elems.push(inputEl.value)

    listThem()

    //storing in the localstorage
    localStorage.setItem("elems", JSON.stringify(elems))
    console.log(localStorage.getItem("elems"))

    //clearing the input field
    clearField()


    
})


function listThem(){
    let items = ""
    for (let i = 0; i < elems.length; i++){
        items += "<a>" + elems[i] + "</a>"
    }
    anchorEl.innerHTML = items
}

//Clearing the field after hitting the buy button
function clearField(){
    document.querySelector("#input-el").value = ""
}

anchorEl.addEventListener("click", ()=>{
    window.open("youtube.com")
})
