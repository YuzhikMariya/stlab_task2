class BinaryConverter{

    convert(number, from, to) {
        return this.fromDec(this.toDec(number, from), to);
    }

    toDec(number, from) {
        let result = 0;
        for(let i = 0; i < number.length; i++){
            result += this.getDigit(number[number.length-1-i]) * Math.pow(from, i);
        }
        return result;
    }

    fromDec(number, to) {
        let integerPart, residue, result = [];
        while(number >= 1) {
            integerPart = parseInt(number/to);
            residue = number - to * integerPart;
            if(residue > 9)
            residue = String.fromCharCode(residue + 87);
            result.unshift(residue);
            number = integerPart;
        }

        return result.join('');
    }


    getDigit(char) {
        let digit = char.charCodeAt() - 48;
        if(digit > 48)
            digit -= 39;
        return digit;
    }


}