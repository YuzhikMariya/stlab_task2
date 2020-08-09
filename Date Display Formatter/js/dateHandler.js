class DateDisplayFormatter{


    getMonthString(number){
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

    getDays(date, inputRegexObj){
        let startDay = inputRegexObj.dayArr;

        let dayStr = "";
        for(let i = 0; i < 2; i++){
            if(startDay[i] != -1){
                dayStr += date[startDay[i]];
            }
        }
        let day = parseInt(dayStr);

        return day;
    }

    getMonths(date, inputRegexObj){
        let startMonth = inputRegexObj.monthArr;

        let monthStr = "";
        for(let i = 0; i < 2; i++){
            if(startMonth[i] != -1){
                monthStr += date[startMonth[i]];
            }
        }
        let month = parseInt(monthStr);

        return month;

    }

    getYears(date, inputRegexObj){
        let startYear = inputRegexObj.yearArr;

        let yearStr = "";
        for(let i = 0; i < 4; i++){
            if(startYear[i] != -1){
                yearStr += date[startYear[i]];
            }else{
                if(i == 0){
                    yearStr += "2";
                }else{
                    yearStr += "0";
                }
                
            }
        }
        let year = parseInt(yearStr);

        return year;

    }

    getDateByRegex(date, inputRegexObj, outputReg){
        let startDay = inputRegexObj.dayArr;
        let startMonth = inputRegexObj.monthArr;
        let startYear = inputRegexObj.yearArr;

        let outputRegex = outputReg.split('');
        let outputRegexObj = this.getDateIndexes(outputRegex);
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
    }

    format(date, inputRegex, outputReg){

        

        if(inputRegex == "ms"){
            let inputDate = new Date(parseInt(date));

            switch (outputReg){
                case "":
                    let days = inputDate.getDate();
                    let years = inputDate.getFullYear();
                    let months = this.getMonthString(inputDate.getMonth()+1);
                    
                    return days + " " + months + " " + years;

                case "from now":
                    let nowDate = new Date();
                    return Math.ceil(Math.abs(nowDate.getTime() - inputDate.getTime()) / (1000 * 3600 * 24)) +" days ago";

                case "ms":
                    return date;
                default:
                    let day = inputDate.getDate();
                    let year = inputDate.getFullYear();
                    let month = inputDate.getMonth()+1;

                    let dateStr = "";
                    if(day < 10){
                        dateStr += "0" + day;
                    }else{
                        dateStr += day;
                    }

                    if(month < 10){
                        dateStr += "0" + month;
                    }else{
                        dateStr += month;
                    }
                    dateStr += year;

                    let inputRegexObj = this.getDateIndexes("DDMMYYYY");

                    return this.getDateByRegex(dateStr, inputRegexObj, outputReg);
            }
        }else{
            let inputRegexObj = this.getDateIndexes(inputRegex);

            switch (outputReg){
                case "":
                    
                    let days = this.getDays(date, inputRegexObj);
                    let years = this.getYears(date, inputRegexObj);
                    let months = this.getMonths(date, inputRegexObj);
    
                    let monthsStr = this.getMonthString(months);
                    
                    return days + " " + monthsStr + " " + years;
                case "from now":
                    let day = this.getDays(date, inputRegexObj);
                    let year = this.getYears(date, inputRegexObj);
                    let month = this.getMonths(date, inputRegexObj);
    
                    let dateInput = new Date(year, month-1, day);
                    let nowDate = new Date();
                    return Math.ceil(Math.abs(nowDate.getTime() - dateInput.getTime()) / (1000 * 3600 * 24)) +" days ago";
                case "ms":
                    let d = this.getDays(date, inputRegexObj);
                    let y = this.getYears(date, inputRegexObj);
                    let m = this.getMonths(date, inputRegexObj);
                    return (new Date(y, m-1, d)).getTime();
                default:
                    return this.getDateByRegex(date, inputRegexObj, outputReg);
            }
        }
        
    }
}