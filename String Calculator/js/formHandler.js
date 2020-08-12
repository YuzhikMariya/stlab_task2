let form = document.querySelector('form');

form.onsubmit = () => {
    let str = document.querySelector('#calculated_string').value;
    const stringHandler = new StringCalculator();    

    document.querySelector('#answer').textContent = stringHandler.calculate(str);
    return false;

    
}