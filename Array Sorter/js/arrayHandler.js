class ArraySorter{
    static swap(inputArr, indexA, indexB){
        let arr = [...inputArr];
        let temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
        return arr;
    }

    static shakerSort(inputArr){
        let arr = [...inputArr];
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            for (let i = right; i > left; i--){
                if (arr[i - 1] > arr[i]){
                    arr = this.swap(arr, i, i-1);
                }
            }
            left++;
            for (let i = left; i < right; i++){
                if (arr[i] > arr[i + 1]){
                    arr = this.swap(arr, i, i+1);
                }
            }
            right--;
        } 
        return arr;
    }

    static insertSort(inputArr){
        let arr = [...inputArr];
        for (let i = 1; i < arr.length; i++) {
            let x = arr[i];
            let j = i;
            while ((j > 0) && (arr[j - 1] > x)) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = x;
        }
        return arr;
    }

    static selectionSort(inputArr){
        let arr = [...inputArr];
        for (let i = 0; i < arr.length - 1; i++) {
            let indexMin = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[indexMin] ) {
                    indexMin = j;
                }
            }
            if (indexMin !== i) {
                arr = this.swap(arr, i, indexMin);
            }
        }
        return arr;
    }

    static merge(arrFirst, arrSecond){
        const arrSort = [];
        let i = 0, j = 0;
        while (i < arrFirst.length && j < arrSecond.length) {
            arrSort.push((arrFirst[i] < arrSecond[j]) ? arrFirst[i++] : arrSecond[j++]);
        }
        return [
            ...arrSort,
            ...arrFirst.slice(i),
            ...arrSecond.slice(j)
        ];
    }

    static mergeSort(arr){
        if (arr.length <= 1) {
            return arr;
        }
        const middle = Math.floor(arr.length / 2);
        const arrLeft = arr.slice(0, middle);
        const arrRight = arr.slice(middle);
        return this.merge(this.mergeSort(arrLeft), this.mergeSort(arrRight));;
    }
}