import { addTask,divArray } from "./addTask.js";
import {checar,remover} from "./removeTask.js";
export {listNode, arrayNode, quantidadeTask,itensLeft}


let botao = document.querySelector("#botao");
let listNode = document.querySelectorAll(".remove")
let arrayNode = Array.from(listNode)
let filterNode = document.querySelectorAll(".filter")
let filterArray = Array.from(filterNode)
let quantidadeTask =  arrayNode.length


filterArray.forEach(el => {
    el.addEventListener('click',()=>{
    
        el.classList.toggle("toggle")
        

    })

})

arrayNode.forEach(el => {
    el.addEventListener('click', remover)})
botao.addEventListener("click",addTask);
botao.addEventListener("click",checar);
botao.addEventListener("click",itensLeft);

function itensLeft(){
    let itemsLeftValue = divArray.length
    console.log(itemsLeftValue)

    return document.querySelector("#itensLeft").innerHTML= `Itens Restantes: ${itemsLeftValue}`
    
}




