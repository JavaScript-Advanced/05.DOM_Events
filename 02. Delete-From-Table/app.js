function deleteByEmail() {
    let emailElement = document.querySelector('input[name="email"]').value;
    let emails = Array.from(document.querySelectorAll('tr td:nth-of-type(2)'));
    let result = document.getElementById('result');

    let targetElement = emails.find(x=>x.textContent == emailElement);

    if (targetElement) {
        targetElement.parentNode.remove();
        result.textContent =  'Deleted.';
    }else{
        result.textContent = 'Not found.';
    }
}