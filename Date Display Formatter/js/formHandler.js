let form = document.querySelector('form');
let dateHandler = new DateDisplayFormatter();

form.onsubmit = () => {
    let date = document.querySelector('#date').value;
    let inputRegex = document.querySelector('#input_regex').value;
    if(inputRegex == ""){
        inputRegex = "DDMMYYYY";
    }

    let outputRegex = document.querySelector('#output_regex').value;

    document.querySelector('#answer').textContent = dateHandler.format(date, inputRegex, outputRegex);
    return false;
}