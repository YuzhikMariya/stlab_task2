let form_calculate = document.querySelector('#form_calculate');
let form_reg = document.querySelector('#form_register_operation');
let calculator = new CachingCalculator();

form_calculate.onsubmit = () => {
    let a = parseInt(document.querySelector('#numberA').value);
    let b = parseInt(document.querySelector('#numberB').value);
    let operation = document.querySelector('#operation').value;

    
    document.querySelector('#answer').textContent = calculator.calculate(a, b, operation);
    return false;
}

form_reg.onsubmit = () => {

    let cachedOperations = getCheckedCheckBoxes();
    calculator.registerOperations(cachedOperations);

    return false;
}

function getCheckedCheckBoxes() {
    let checkboxes = document.getElementsByClassName('operations');
    let checkboxesChecked = [];
    for (let i = 0; i < checkboxes.length; i++) {
       if (checkboxes[i].checked) {
          checkboxesChecked.push(checkboxes[i].value); 
       }
    }
    return checkboxesChecked;
  }