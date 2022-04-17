let todoInput=document.getElementById("todo-input");
let addBtn=document.getElementById("add-btn");
let todoItemsList=document.getElementById("todo-items-list");
let todoInputData;
let todoItemArray=[];

// set Local storage function

function setLocalStorage(){
   // localStorage.setItem("TodoList",todoInputData);
   localStorage.setItem("TodoList",JSON.stringify(todoItemArray));
}
// get local storage function
function getLocalStorage(){
// to avoid creating null li
   if(localStorage.getItem("TodoList")){

      // todoInputData= localStorage.getItem("TodoList");
      todoItemArray= JSON.parse(localStorage.getItem("TodoList"));
      // li is not created in display even though
      // data is stored in local storage
   
   // console.log(todoItemArray);
      // created a function to store the li creation and 
      // further procedures;
      buildUI();
     
   }else{

      console.log("data not found");
   }
}

function buildUI() {
//    create li dynamically

todoItemsList.textContent="";
todoItemArray.forEach((item)=>{
   // console.log(item);
   let li=document.createElement("li");
let spanElement=document.createElement("span");
li.appendChild(spanElement);
spanElement.innerHTML=item;
//  li.innerHTML=todoInputData;
li.style.cssText ="animation-name: slideIn;";
todoItemsList.appendChild(li);
todoInput.value="";
todoInput.focus();
arrayCreate();
// STEP 3 Create trash button
let trashBtnIcon=document.createElement("i");
// console.log(trashBtnIcon);
li.appendChild(trashBtnIcon);
trashBtnIcon.classList.add("fa-solid","fa-trash-can");
// console.log(li);

// STEP 5 Create edit button
let editBtn=document.createElement("i");
editBtn.classList.add("fa","fa-edit");
li.appendChild(editBtn);
// console.log(editBtn);
})

  }

// STEP 2
// Add Todo items
function addTodoItems(){
    todoInputData=todoInput.value;

    todoItemArray.push(todoInputData);

   console.log(todoItemArray);

   // set to local storage
   setLocalStorage();
   // get from local storage
   getLocalStorage();
   

}
//array
function arrayCreate(){
let arr=[];

let listitems=document.querySelectorAll("li");
listitems.forEach(function(item){
    let data=item.innerHTML;
    arr.push(data);
})
// console.log(arr);
}
// step 4 Delete item from kitchen list
function deleteTodoitem(event){
   console.log(event.target.classList[1]);
   let eventTarget=event.target.classList[1];
   if(eventTarget === "fa-trash-can"){
      let itemParent=event.target.parentElement;
      // console.log(itemParent);
     itemParent.classList.add("slideOut") ;
// console.log(itemParent);
itemParent.addEventListener("transitionend",function(){
   console.log("complete");
   itemParent.remove();
})
}
}
// adding more than one item to local storage
// function moreItem() { 
//    storeArray=[];
//    spanElementText=itemParent.querySelector("span");

//     spanElementText.forEach(function(text){
//       let textData=text.innerHTML;
//       console.log(textData);
//       storeArray.push(textData);
//  });
// }
// STEP 6 Edit item of kitchen list
function editTodoItem(event) { 
   let targetEvent=event.target.classList[1];
   console.log(targetEvent);
   if(targetEvent === "fa-edit"){
      let itemParent=event.target.parentElement;
      let editedText=prompt("Please add new text");
    spanElementText=itemParent.querySelector("span");

    

   
      console.log(spanElementText);
      spanElementText.innerHTML=editedText;
   }
 }

// enter key event
function enterKeyPressed(event) {
    if (event.keyCode == 13) {
       addTodoItems();
       return true;
    } else {
       return false;
    }
 }


// STEP 1
// Add an event listener to button

addBtn.addEventListener("click", addTodoItems);
todoInput.addEventListener("keypress",enterKeyPressed);
todoItemsList.addEventListener("click",deleteTodoitem);
todoItemsList.addEventListener("click",editTodoItem);


// getlocalstorage function is globallly called
// ennale nerthe add cheytha item athupole kittu 
// even after refresh cheythalum content will stay there
getLocalStorage();

// LOCAL STORAGE

// Set data to local storage
// localStorage.setItem("name","arya");


// get data from local storage

// let name =localStorage.getItem("name");
// console.log(name);