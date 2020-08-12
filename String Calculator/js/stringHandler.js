class StringCalculator{

    operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    }
    
    calculate(str) {
    
        let part = str.split(' ');

        let result = +part[0];
        if(part.length % 2 != 0){

            for(let i = 1; i < part.length-1; i += 2){
                result = this.operations[part[i]](result, +part[i+1]);
            }
        }
        
           
    
            return result;
    }


}