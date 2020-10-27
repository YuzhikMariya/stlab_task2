let form = document.querySelector('form');

form.onsubmit = () => {
    let text = document.querySelector('#text').value;
    let type = document.querySelector('#format_type').value;

    let answer = document.querySelector('#answer');

    let stringLength = document.querySelector('#string_length').value;
    let stringCount = document.querySelector('#string_count').value;
    if(type == ""){
        type = "Char";
    }
    answer.textContent = TextFormatter.formatByType(text, type, stringLength, stringCount);

    return false;
}