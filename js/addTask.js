export{addTask,divArray}
import{listNode, arrayNode} from './main.js';

let divNode = document.querySelectorAll(".lista-filho")
let divArray = Array.from(divNode)
let ul = document.querySelector(".lista-pai");



function createLi(){
    const input =document.querySelector("#input-task").value
    if (input=="") {
        return alert("Tarefa inválida")        
    }
    const li = document.createElement("li");
    li.innerText = `${input} `
    return li;
}


function createCheckbox(){
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox",);
    checkbox.classList.add('checkbox')
    return checkbox;
}
function createRemove(){
    const remove = document.createElement("span")
    remove.innerText = "X"
    remove.classList.add('remove')
    arrayNode.push(remove)
    return remove
}

function createDiv(){
    const div = document.createElement("div");
    div.classList.add('lista-filho')
    divArray.push(div)
    console.log(divArray)
    return div;
}

function addTask(){
    const checkbox = createCheckbox()
    const li = createLi()
    const div = createDiv()
    const remove = createRemove()

    div.appendChild(checkbox)
    div.appendChild(li)
    div.appendChild(remove)
    ul.appendChild(div)
}