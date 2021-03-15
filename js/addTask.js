export{addTask,divArray}
import{listNode, arrayNode} from './main.js';
import{checkboxArray} from './filter.js';

let divNode = document.querySelectorAll(".lista-filho")
let divArray = Array.from(divNode)
let ul = document.querySelector(".lista-pai");




function createLi(){
    const input =document.querySelector("#input-task").value
    const li = document.createElement("li");
    li.innerText = input
    return li;
}


function createCheckbox(){
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox",);
    checkbox.classList.add('checkbox')
    checkboxArray.push(checkbox)
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
    return div;
}

function addTask(){
    event.preventDefault()


    const li = createLi()
    if (li.innerText=="") {
        return alert("Tarefa inválida")        
    }
    const checkbox = createCheckbox()

    const div = createDiv()
    const remove = createRemove()

    div.appendChild(checkbox)
    div.appendChild(li)
    div.appendChild(remove)
    ul.appendChild(div)
    
}