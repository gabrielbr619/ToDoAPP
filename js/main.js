import { addTask,divArray } from "./addTask.js";
import {checar,remover} from "./removeTask.js";
import {checkCheckbox} from "./filter.js";
export {listNode, arrayNode, quantidadeTask,itensLeft}


let botao = document.querySelector("#botao");
let listNode = document.querySelectorAll(".remove")
let arrayNode = Array.from(listNode)
let quantidadeTask =  arrayNode.length

arrayNode.forEach(el => {
    el.addEventListener('click', remover)})
botao.addEventListener("click",addTask);
botao.addEventListener("click",checar);
botao.addEventListener("click",itensLeft);
botao.addEventListener("click",checkCheckbox);

function itensLeft(){
    let itemsLeftValue = divArray.length
    console.log(itemsLeftValue)

    return document.querySelector("#itensLeft").innerHTML= `Itens Restantes: ${itemsLeftValue}`
    
}






