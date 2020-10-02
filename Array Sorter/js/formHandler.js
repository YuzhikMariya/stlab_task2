let form = document.querySelector('form');

form.onsubmit = () => {
    let arrayOfStr = document.querySelector('#array').value.split(' ');
    let array = arrayOfStr.map((i) => parseInt(i));
    let type = document.querySelector('#type').value;
    const arrayHandler = new ArraySorter();
    let ascendingArray;
    switch(type){
        case "Shaker":
            ascendingArray = arrayHandler.shakerSort(array);
            break;
        case "Insert":
            ascendingArray = arrayHandler.insertSort(array);
            break;
        case "Selection":
            ascendingArray = arrayHandler.selectionSort(array);
            break;
        case "Merge":
            ascendingArray = arrayHandler.mergeSort(array);
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