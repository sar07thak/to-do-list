let inputbox = document.querySelector(".input-box");
let add_btn = document.querySelector(".add-btn");
let list_container = document.querySelector(".list-container");


add_btn.addEventListener("click",() => {
    if(inputbox.value === ""){
        alert("Please write some task");
    }
    else{
       let li = document.createElement("li");
       li.innerHTML = inputbox.value;
       list_container.appendChild(li);
       
    }
    inputbox.value="";
})