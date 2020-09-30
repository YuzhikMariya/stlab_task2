let form = document.querySelector('form');

form.onsubmit = () => {
    let date = document.querySelector('#date').value;
    let inputRegex = document.querySelector('#input_regex').value;
    if(inputRegex == ""){
        inputRegex = "DDMMYYYY";
    }

    let outputRegex = document.querySelector('#output_regex').value;

    document.querySelector('#answer').textContent = DateDisplayFormatter.format(date, inputRegex, outputRegex);
    return false;
}