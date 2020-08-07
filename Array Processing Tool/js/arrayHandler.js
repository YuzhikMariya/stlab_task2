class ArrayProcessingTool{

    /* O(n^2) */
    getMaxSubSum_long(arr) {
        let maxSum = arr[0];
        for(let i = 0; i < arr.length; i++){
            let tempSum = arr[i];
            for(let j = i+1; j < arr.length; j++){
                tempSum += arr[j];
                if(tempSum > maxSum){
                    maxSum = tempSum;
                }
            }
            if(tempSum > maxSum){
                maxSum = tempSum;
            }
        }
        if(maxSum < 0){
            maxSum = 0;
        }
        return maxSum;
    }

    /*O(n) */
    getMaxSubSum_short(arr) {
        let tempSum = 0, maxSum = arr[0];
        for(let i = 0; i < arr.length; i++){
            tempSum += arr[i];
            if(tempSum < 0){
                tempSum = 0;
            }
            if(tempSum > maxSum){
                maxSum = tempSum;
            }
        }
        return maxSum;
    }

    getMin(arr){
        let min = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    }

    getMax(arr){
        let max = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        return max;
    }

    getMedium(arr){
        let medium;
        arr.sort(function(a,b){ 
            return a - b
        });
        let length = arr.length;
        if(length % 2 == 0){
            medium = arr[length/2-1] + (arr[length/2] - arr[length/2-1]) / 2;
        }else{
            medium = arr[(length-1)/2];
        }
        return medium;
    }

    getSelection(arr){
        
        let start=0, end=0, tempStart=0, tempEnd=0;
        for(let i = 1; i < arr.length; i++){
            if(arr[i] <= arr[i-1]){
                if((tempEnd - tempStart) > (end - start)){
                    start = tempStart;
                    end = tempEnd;
                }
                tempStart = i;   
            }
            tempEnd = i;
        }
        let resultArr = [];
        for(let j = start; j <= end; j++){
            resultArr.push(arr[j]);
        }
        return resultArr;
    }
}