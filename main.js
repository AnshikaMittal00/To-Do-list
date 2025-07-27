const input=document.getElementById("input");
const container=document.getElementById("list");
const addTask=()=>{
    if(input.value==''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        container.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value="";
    saveData();
}
container.addEventListener("click",(e)=>{
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    
   
}
saveData();
},false);
const saveData=()=>{
    localStorage.setItem("data",container.innerHTML);


}
const showTask=()=>{
    container.innerHTML=localStorage.getItem("data");
}
showTask();