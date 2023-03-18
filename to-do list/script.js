window.addEventListener("beforeunload", function(event) {
    event.preventDefault(); // Cancel the event as we are showing a warning message
    // event.returnValue = 'All unsaved data will be lost'; // Set a default return value to show the warning message in some browsers
    const confirmationMessage = 'Are you sure you want to refresh the page? All unsaved data will be lost.'; // Customize the warning message as per your requirement
    event.returnValue = confirmationMessage; // Set the return value to show the warning message in some browsers
    return confirmationMessage; // Return the warning message
  });

  const addForm=document.querySelector(".add");
  const tasks=document.querySelector(".tasks");
  const clearAll=document.querySelector(".clear");
  const msgSpan = document.querySelector(".clearTask span")
  const saerchForm=document.querySelector(".search");



  function updateMsg(){
    const textLength=tasks.children.length;
    msgSpan.textContent = `You have ${textLength} pending task`;

  }
  updateMsg();

  addForm.addEventListener("submit",(event) => {
    event.preventDefault();
    const value=addForm.task.value.trim();
    if(value.length){
      tasks.innerHTML+=`<li>
                            <span>${value}</span>
                            <i class="bi bi-trash-fill delete"></i>
                        </li>`;
      addForm.reset();
      updateMsg();
    }

  });

  tasks.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete")){
      event.target.parentElement.remove();
      updateMsg();
    }
  });
  clearAll.addEventListener("click", (event) => {
    const taskItems=tasks.querySelectorAll("li");
    taskItems.forEach(item =>{
      item.remove();
    })
    updateMsg();
  });

  function filterTask(term){
    Array.from(tasks.children)
    .filter(task => {
      return !task.textContent.toLowerCase().includes(term);

    }).forEach(task =>{
      task.classList.add("hide");
    });

    Array.from(tasks.children)
    .filter(task => {
      return task.textContent.toLowerCase().includes(term);
    }).forEach(task => {
      task.classList.remove("hide");
    });

  }

  saerchForm.addEventListener("keyup", (event) =>{
    const term=saerchForm.task.value.trim().toLowerCase();
    filterTask(term);
  });

  saerchForm.addEventListener("click", event => {
    if(event.target.classList.contains("reset")){
      saerchForm.reset();
      const term=saerchForm.task.value.trim();
      filterTask(term);
    }
  });



