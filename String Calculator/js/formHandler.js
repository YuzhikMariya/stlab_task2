let form = document.querySelector('form');

form.onsubmit = () => {
    let str = document.querySelector('#calculated_string').value; 

    document.querySelector('#answer').textContent = StringCalculator.calculate(str);
    return false;

    
}