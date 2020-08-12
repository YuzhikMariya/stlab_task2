class TextFormatter{

    format(text, stringLength, stringCount){

        let resultText = "";
        for(let i = 0; i < text.length; i++){
            if(i / stringLength < stringCount){
                if(i % stringLength == 0){
                    resultText += '\n';
                }
                resultText += text[i];
            }
        }
        return resultText.substring(1);
    }

    formatByType(text, type){
        switch(type){
            case "Word":
                return this.formatByWord(text);
            case "Char":
                return this.formatByChar(text);
            case "Sentence":
                return this.formatBySentence(text);
            default:
                return text;
        }
    }

    formatByWord(text){

        let wordArr = text.split(' ');
        let resultText = "";
        wordArr.forEach(word => {
            resultText += word + '\n';
        });
        return resultText;
    }

    formatByChar(text){

        let resultText = "";
        for(let i = 0; i < text.length; i++){
            resultText += text[i] + '\n';
        }
        return resultText;
    }

    formatBySentence(text){
        let sentenceArr = text.split('. ');
        let resultText = "";
        sentenceArr.forEach(sentence => {
            resultText += sentence + '\n';
        });
        return resultText;
    }
}