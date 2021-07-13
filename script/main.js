var submitBtn = document.getElementById('submit');
submitBtn.style.marginTop = "15px";

var newtask = document.querySelector('#todoname');
var form = document.querySelector('form');
var taskItemUl = document.querySelector('#items');
var CompleteTaskItemUl = document.querySelector('#CompleteUlitems');



// make Task functionality

var CreateNewTask = function(task){
  var listitems = document.createElement('li');
  var checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.className = "IncompleteCheck";
  var labelName = document.createElement('label');

  labelName.innerText = task;

  listitems.appendChild(checkBox);
  listitems.appendChild(labelName);

  return listitems;
}



var AddTask = function (data){
    data.preventDefault();
    var listItems = CreateNewTask(newtask.value);
    taskItemUl.appendChild(listItems);
    newtask.value = "";

    IncompleteTask(listItems, ClickableCheckBox);
}



var IncompleteTask = function (tasks, ClickableCheckBox){
    var ClickableBox = tasks.querySelector('input[type="checkbox"]');

    ClickableBox.onchange = ClickableCheckBox;
}




var ClickableCheckBox = function (){
   var listItems = this.parentNode;

   var deleteBtn = document.createElement('buttton');
   deleteBtn.innerText = "Remove";
   deleteBtn.className = "deleteTask btn btn-danger";

   listItems.appendChild(deleteBtn);


   var checkBox = listItems.querySelector('input[type="checkbox"]');
   checkBox.remove();

   CompleteTaskItemUl.appendChild(listItems);

   RemoveCompleteTask(listItems, RemoveTask)
}





var RemoveTask = function(){
    var listItems = this.parentNode;
    var ul = listItems.parentNode;

    ul.removeChild(listItems);
}

var RemoveCompleteTask = function(tasks, DeletebuttonClick){
    var DeleteButton = tasks.querySelector(".deleteTask");

    DeleteButton.onclick = DeletebuttonClick;
    
}

form.addEventListener('submit', AddTask);