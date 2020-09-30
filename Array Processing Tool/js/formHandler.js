let form_subSum = document.querySelector('#form_subSum');
let form_search = document.querySelector('#form_search');
let form_select = document.querySelector('#form_selection');

let arrTool = new ArrayProcessingTool();

form_subSum.onsubmit = () => {
    if(document.querySelector('#arr_subSum').value != ''){
        let arr = document.querySelector('#arr_subSum')
        .value
        .split(',')
        .map(i => parseInt(i));


        document.querySelector('#answer_subSum').innerHTML = 
        "Sub sum O(n<sup>2</sup>) = " + arrTool.getMaxSubSum_long(arr) + "<br/>" +
        "Sub sum O(n) = " + arrTool.getMaxSubSum_short(arr);
    }
    
    return false;
};

form_search.onsubmit = () => {
    if(document.querySelector('#arr_search').value != ''){
        let arr = document.querySelector('#arr_search')
        .value
        .split(',')
        .map(i => parseInt(i));

        document.querySelector('#answer_search').innerHTML = 
            "Min = " + arrTool.getMin(arr) + "<br/>" +
            "Max = " + arrTool.getMax(arr) + "<br/>" +
            "Meduim = " + arrTool.getMedium(arr);
    }
    return false;
};

form_select.onsubmit = () => {
    if(document.querySelector('#arr_selection').value != ''){
        let arr = document.querySelector('#arr_selection')
        .value
        .split(',')
        .map(i => parseInt(i));

        document.querySelector('#answer_selection').innerHTML = 
            "Selection = [" + arrTool.getSelection(arr) + "]";
    }
    return false;
};



