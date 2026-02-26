const taskol = document.querySelector(".user-task");
const taketask = document.querySelector(".input-task");
const input = document.querySelector(".task-input");
const addtask = document.querySelector(".add");
const template = document.querySelector(".text-template");

addtask.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (input.value.trim() === "") return;
    
    const clone = template.content.cloneNode(true);
    const label = clone.querySelector(".input-task");
    label.textContent = input.value;
    
    const removeBtn = clone.querySelector(".remove");
    removeBtn.addEventListener('click', (e) => {
        e.target.closest(".list-item").remove();
    });
    
    taskol.appendChild(clone);
    
    input.value = "";
    input.focus();
})
