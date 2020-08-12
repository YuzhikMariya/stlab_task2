let form = document.querySelector('form');

form.onsubmit = () => {
    let text = document.querySelector('#text').value;
    let type = document.querySelector('#format_type').value;

    const textHandler = new TextFormatter();
    let answer = document.querySelector('#answer');

    if(type != ""){
        answer.textContent = textHandler.formatByType(text, type);
    }else{
        let stringLength = document.querySelector('#string_length').value;
    let stringCount = document.querySelector('#string_count').value;
        answer.textContent = textHandler.format(text, stringLength, stringCount);
    }

    return false;
}