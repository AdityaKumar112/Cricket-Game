let todoList =[
  {
    item: 'Buy Milk',
    dueDate:'2/01/2024'
  },
  {
    item:'Go to Collage',
    dueDate:'2/01/2024'
  }
];

displayItem();

function addTodo() {
    let inputElement =document.querySelector
    ('#todo-input');
    let dateElement =document.querySelector
    ('#todo-date');
    let todoItem =inputElement.value;
    let todoDate =dateElement.value;
    todoList.push({item: todoItem,dueDate:todoDate});

    inputElement.value='';
    dateElement.value='';
    
    displayItem();
}

function displayItem() {
    let containerElement =document.querySelector('.todo-container');
    let newhtml ='';
    for (let i=0; i<todoList.length; i++) {
        // let item=todoList[i].item;
        // let dueDate=todoList[i].dueDate;
        let {item, dueDate} =todoList[i];
        newhtml+= `
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onClick="todoList.splice(${i},1);
        displayItem();">Delete</button>
        `;
    }
    containerElement.innerHTML =newhtml;


}