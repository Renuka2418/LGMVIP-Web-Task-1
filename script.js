const input = document.getElementById("input-box");
const li = document.getElementById("list-container");
function addTask(){
    if(input.value === '0'){
        alert("You must write something!!");
    }
    else{
        let a = document.createElement("li");
        a.innerHTML = input.value;
        li.appendChild(a);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        a.appendChild(span);
    }
    input.value = "";
    saveData();
}

li.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",li.innerHTML);
}
function showTask(){
    li.innerHTML = localStorage.getItem("data");
}
showTask();
