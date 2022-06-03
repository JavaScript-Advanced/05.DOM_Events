function addItem() {
    let liElement = document.createElement('li');
    let newItemText = document.getElementById('newItemText').value;
    liElement.textContent = newItemText;

    document.getElementById('items').appendChild(liElement);
    newItemText = '';
}