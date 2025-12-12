const input = document.querySelector("#input");
const add = document.querySelector("#add");
const list = document.querySelector(".list");

add.addEventListener("click",(e)=>{

    if(!input.value) return;

    const li = document.createElement('li');
    const btn = document.createElement('button');
    const div = document.createElement('div');

    div.classList.add("li-div");
    btn.classList.add('del-but');

    btn.innerHTML = "delete";
    btn.style.marginTop= "10px";

    li.innerHTML = input.value;

    div.appendChild(li);
    div.appendChild(btn);
    list.appendChild(div);

    btn.addEventListener('click',()=>{
        li.remove();
        btn.remove();
    })
    
    input.value = "";
    })




    

