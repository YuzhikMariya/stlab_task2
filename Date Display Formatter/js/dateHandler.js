class DateDisplayFormatter{

    getMonth(number){
        switch(number){
            case 1: return "January";
            case 2: return "February";
            case 3: return "March";
            case 4: return "April";
            case 5: return "May";
            case 6: return "June";
            case 7: return "July";
            case 8: return "August";
            case 9: return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
            default : return "invalid month";
        }
    }

    getDateIndexes(regex){
        let obj = {
            yearArr: [-1, -1, -1, -1],
            monthArr: [-1, -1],
            dayArr: [-1, -1]
        }
        let dayCounter=1, monthCounter=1, yearCounter=3;
        for(let i = regex.length; i >= 0; i--){
            switch (regex[i]){
                case 'D': 
                    if(dayCounter>=0){
                        obj.dayArr[dayCounter] = i;
                        dayCounter--;
                    }
                    break;
                case 'M': 
                    if(monthCounter>=0){
                        obj.monthArr[monthCounter] = i;
                        monthCounter--;
                    }
                    break;
                case 'Y': 
                    if(yearCounter>=0){
                        obj.yearArr[yearCounter] = i;
                        yearCounter--;
                    }
                    break;
            }
        }
        return obj;
    }

    format(date, inputRegex, outputReg){

        let outputRegex = outputReg.split('');


        let inputRegexObj = this.getDateIndexes(inputRegex);
        let startDay = inputRegexObj.dayArr;
        let startMonth = inputRegexObj.monthArr;
        let startYear = inputRegexObj.yearArr;

        let outputRegexObj;
        if(outputRegex != ""){
            outputRegexObj = this.getDateIndexes(outputRegex);
            let endDay = outputRegexObj.dayArr;
            let endMonth = outputRegexObj.monthArr;
            let endYear = outputRegexObj.yearArr;

            for(let i = 3; i >= 0; i--){
                if(endYear[i] != -1){
                    if(startYear[i] !=- 1){
                        outputRegex[endYear[i]] = date[startYear[i]];
                    }else{
                        if(i == 0){
                            outputRegex[endYear[i]] = 2;
                        }else{
                            outputRegex[endYear[i]] = 0;
                        }
                        
                    }
                    
                }
            }
            for(let i = 1; i >= 0; i--){
                if(endMonth[i] != -1){
                    if(startMonth[i] !=- 1){
                        outputRegex[endMonth[i]] = date[startMonth[i]];
                    }else{
                        outputRegex[endMonth[i]] = 0;
                    }
                    
                }
            }
            for(let i = 1; i >= 0; i--){
                if(endDay[i] != -1){
                    if(startDay[i] !=- 1){
                        outputRegex[endDay[i]] = date[startDay[i]];
                    }else{
                        outputRegex[endDay[i]] = 0;
                    }
                    
                }
            }

            return outputRegex.join('');

        }else{

            let result = "";
            for(let i = 0; i < 2; i++){
                if(startDay[i] != -1){
                    result += date[startDay[i]];
                }
            }
            result += " ";

            let month = "";
            for(let i = 0; i < 2; i++){
                if(startMonth[i] != -1){
                    month += date[startMonth[i]];
                }
            }
            result += this.getMonth(parseInt(month)) + " ";

            for(let i = 0; i < 4; i++){
                if(startYear[i] != -1){
                    result += date[startYear[i]];
                }else{
                    if(i == 0){
                        result += "2";
                    }else{
                        result += "0";
                    }
                    
                }
            }
            
            return result;
        }
    }
}