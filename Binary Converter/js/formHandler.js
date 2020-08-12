let form = document.querySelector('form');

form.onsubmit = () => {
    let number = document.querySelector('#number').value.toLowerCase().split('');;
    let from = document.querySelector('#from').value;
    let to = document.querySelector('#to').value;

    const numberHandler = new BinaryConverter();
    

    document.querySelector('#answer').textContent = numberHandler.convert(number, from, to).toUpperCase();
    return false;

    
}