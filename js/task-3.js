const inputElem = document.querySelector('.input-name');
const spanElem = document.querySelector('#name-output')
inputElem.value.trim();
inputElem.addEventListener('input', toInputChange => {
    if (inputElem.value.length === 0 ) {
        
        spanElem.innerHTML = 'Anonymus';
    } else {
        spanElem.innerHTML = `${inputElem.value}`;
    }
})