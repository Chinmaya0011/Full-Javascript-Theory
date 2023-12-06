let todoitems = [];

function addTodo() {
    let inpValue = document.getElementById('inpv');
    let inputElement = inpValue.value;
    let inpdate = document.getElementById('inpd');
    let inputDate = inpdate.value;

    todoitems.push({ todoItem: inputElement, dueDate: inputDate });
    displayItems();
    inpValue.value = '';
    inpdate.value = '';
}

function displayItems() {
    let innerText = '';
    for (let i = 0; i < todoitems.length; i++) {
        let { todoItem, dueDate } = todoitems[i];

        innerText += `<li>${todoItem}  ${dueDate} <button onclick="deleteItem(${i})">Delete</button><br> </li>`;
    }
    document.getElementById('showItems').innerHTML = innerText;
}

function deleteItem(index) {
    todoitems.splice(index, 1);
    displayItems();
}