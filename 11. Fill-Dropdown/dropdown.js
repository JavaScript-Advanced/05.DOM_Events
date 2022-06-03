function addItem() {
    let newText = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;

    if (newText !== '' && newValue !== '') {
        let option = document.createElement('option');
        option.text = newText;
        option.value = newValue;

        let menu = document.getElementById('menu');
        menu.appendChild(option);
    }


    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}