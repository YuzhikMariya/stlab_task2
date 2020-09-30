let form_subSum = document.querySelector('#form_subSum');
let form_search = document.querySelector('#form_search');
let form_select = document.querySelector('#form_selection');

form_subSum.onsubmit = () => {
    if(document.querySelector('#arr_subSum').value != ''){
        const arr = document.querySelector('#arr_subSum')
        .value
        .split(',')
        .map(i => parseInt(i));


        document.querySelector('#answer_subSum').innerHTML = 
        "Sub sum O(n<sup>2</sup>) = " + ArrayProcessingTool.getMaxSubSum_long(arr) + "<br/>" +
        "Sub sum O(n) = " + ArrayProcessingTool.getMaxSubSum_short(arr);
    }
    
    return false;
};

form_search.onsubmit = () => {
    if(document.querySelector('#arr_search').value != ''){
        const arr = document.querySelector('#arr_search')
        .value
        .split(',')
        .map(i => parseInt(i));

        document.querySelector('#answer_search').innerHTML = 
            "Min = " + ArrayProcessingTool.getMin(arr) + "<br/>" +
            "Max = " + ArrayProcessingTool.getMax(arr) + "<br/>" +
            "Meduim = " + ArrayProcessingTool.getMedium(arr);
    }
    return false;
};

form_select.onsubmit = () => {
    if(document.querySelector('#arr_selection').value != ''){
        const arr = document.querySelector('#arr_selection')
        .value
        .split(',')
        .map(i => parseInt(i));

        document.querySelector('#answer_selection').innerHTML = 
            "Selection = [" + ArrayProcessingTool.getSelection(arr) + "]";
    }
    return false;
};



