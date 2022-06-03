function addItem() {
    let itemsElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    inputElement.value='';

    itemsElement.appendChild(liElement);

    let deleteHref = document.createElement('a');
    deleteHref.href = '#';
    deleteHref.textContent = '[Delete]';
    liElement.appendChild(deleteHref);

    deleteHref.addEventListener('click', (e)=>{
        e.currentTarget.parentElement.remove();
    })
}

