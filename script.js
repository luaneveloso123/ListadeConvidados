const addTaskButton = document.getElementById("addTask");
const input = document.getElementById("taskInput");
const deleteall = document.getElementById("deleteall");
addTaskButton.style.backgroundColor="green";
addTaskButton.style.borderRadius="15px";
const TaskList = document.getElementById("taskList");

deleteall.addEventListener("click", function(){
    const tasks = document.querySelectorAll("#taskList li");
    tasks.forEach(tasks=>tasks.remove());
});



function changebehaveButtonColor(){

    if(input.value == ""){
    alert('Por favor, preencha o campo');
}
    else{
    addTaskButton.style.backgroundColor=getRandomHexColor();
    addTaskButton.textContent= "Convidado adicionado";
    changeButtonColorAndText();
    setTimeout(reverterbotao,1000);
    
    }
}
function reverterbotao(){
    addTaskButton.textContent="Adcionar";
    input.value="";
}

function getRandomHexColor(){
    const letters= "0123456789ABCDEF";
    let color="#";
    for(let i = 0; i<6; i++){
        console.log(Math.floor((Math.random()*16)));
        console.log(letters[Math.floor((Math.random()*16))]);
        color+=letters[Math.floor((Math.random()*16))];
    }
    return color;
}
//Adicione um ouvinte de evento ao botão
addTaskButton.addEventListener("click",changebehaveButtonColor);
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter"  ){
        changebehaveButtonColor();
    }});

function changeButtonColorAndText(){
    const taskText = taskInput.value.trim();
    //Verifica se tem apenas letras
    if(taskText!=="" &&  /^[a-zA-Z]+$/.test(taskText)){
    addTaskButton.style.backgroundColor = getRandomHexColor();
    addTaskButton.textContent = "Convidado Adicionado";

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.addEventListener("click", function(){
        span.classList.toggle("riscado");
    });
    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.addEventListener("click", function(){
        li.remove(); //remore o li (convidado) quando botão de excluir é clicado
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    
    TaskList.appendChild(li);
    input.value = "";
    
    }
    else{
        alert('Verifique as informações do convidado, o valor inserido não é válido')
    }
}
