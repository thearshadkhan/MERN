const task = document.getElementById("task");
const listContainer = document.getElementById("listContainer");
const image =document.getElementById("gifff");

function addTask(){

    if(task.value !== ""){
        let li = document.createElement("li");
        li.innerHTML = task.value;
        listContainer.appendChild(li);
    }
    else{
        document.getElementById("audio").play();
        // alert("Please enter a task");
        let imagey=document.createElement("img");
        imagey.src="gif.gif";
        image.appendChild(imagey); 
    }
        
}