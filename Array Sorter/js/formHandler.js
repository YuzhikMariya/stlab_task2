let form = document.querySelector('form');

form.onsubmit = () => {
    const SHAKER = "Shaker", 
        INSERT = "Insert", 
        SELECTION = "Selection", 
        MERGE = "Merge";
    let arrayOfStr = document.querySelector('#array').value.split(' ');
    let array = arrayOfStr.map((i) => parseInt(i));
    let type = document.querySelector('#type').value;
    let ascendingArray;
    switch(type){
        case SHAKER:
            ascendingArray = ArraySorter.shakerSort(array);
            break;
        case INSERT:
            ascendingArray = ArraySorter.insertSort(array);
            break;
        case SELECTION:
            ascendingArray = ArraySorter.selectionSort(array);
            break;
        case MERGE:
            ascendingArray = ArraySorter.mergeSort(array);
            break;
    }
    let answer = document.querySelector('#answer');
    if(document.querySelector('#direction').checked){
        answer.textContent = ascendingArray.reverse();
    }else{
        answer.textContent = ascendingArray;
    }
    return false;
}