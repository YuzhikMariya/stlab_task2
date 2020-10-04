let form = document.querySelector('form');

form.onsubmit = () => {
    let number = document.querySelector('#number').value.toLowerCase().split('');;
    let from = document.querySelector('#from').value;
    let to = document.querySelector('#to').value;
    document.querySelector('#answer').textContent = BinaryConverter.convert(number, from, to);
    return false; 
}