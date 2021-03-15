export {checkboxArray,checkCheckbox}

let checkboxNode = document.querySelectorAll('.checkbox');
let checkboxArray = Array.from(checkboxNode)

let filterNode = document.querySelectorAll(".filter")
let filterArray = Array.from(filterNode)

let filterActive = document.querySelector("#active")


filterArray.forEach(el => {
    el.addEventListener('click',()=>{
        el.classList.toggle("toggle")
    })
})


function checkCheckbox(){
    checkboxArray.forEach(el => {
        el.addEventListener('click',() =>{
            el.classList.toggle("checkbox-checked")
    })
})}
    
filterActive.addEventListener('click',filtrarAtivo)
    // for (let i = 0; i < checkboxArray.length; i++) {
    //     if(checkboxArray[i].classList.contains('checkbox-checked')==true){
    //         checkboxArray[i].filter(checkboxArray[i].classList.conta)
    //     }else{
    //     console.log('deu errado')
    let filtroAtivoToggle = false;
    function filtrarAtivo(){
        if (filtroAtivoToggle == false) {
            for (let i = 0; i < checkboxArray.length; i++) {
                let checkbox = checkboxArray[i]
                if (checkbox.classList.contains('checkbox-checked')) {
                checkbox.parentNode.style.display = "none"
                return filtroAtivoToggle = true
            }
        }
        
    }else{
        for (let i = 0; i < checkboxArray.length; i++) {
        let checkbox = checkboxArray[i]
        checkbox.parentNode.style.display = "auto"
        return filtroAtivoToggle = false
    }}}
    