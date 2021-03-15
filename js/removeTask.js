export {checar,remover }
import {arrayNode, itensLeft} from "./main.js"
import { divArray } from "./addTask.js";


function remover(){
    let alvoDoEvento = event.target
    let paiDoAlvo = alvoDoEvento.parentNode
    paiDoAlvo.remove();
    divArray.pop()
    itensLeft()
    }


function checar(){
    arrayNode.forEach(el => {
        el.addEventListener('click',remover)})}