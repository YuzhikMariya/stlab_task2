class TextFormatter {
    static currLineIndex = -1;

    static formatByChar(text, stringLength, stringCount) {
      text = text.trim().replace(/\n/g, "");
      this.currLineIndex = -1;
      let resultText = "";
      let endIndex = Math.ceil(text.length / stringLength) - 1;
      for (let i = 0; i <= endIndex; i++) {
        if (i != endIndex) {
          resultText = this.addLine(resultText, text.slice(i * stringLength, (i + 1) * stringLength), stringCount);
        } else {
          resultText = this.addLine(resultText, text.slice(i * stringLength), stringCount);
        }
      }
      return resultText;
    }
  
    static formatByType(text, type, stringLength, stringCount) {
      switch (type) {
        case "Word":
          return this.formatByWord(text, stringLength, stringCount);
        case "Char":
          return this.formatByChar(text, stringLength, stringCount);
        case "Sentence":
          return this.formatBySentence(text, stringLength, stringCount);
        default:
          return text;
      }
    }
  
    static addLine(text, line, stringCount) {
      const SEPARATOR = "---------------------------\n";
      if (this.currLineIndex == stringCount - 1 && stringCount > 0) {
        this.currLineIndex = 0;
        text += SEPARATOR;
      } else {
        this.currLineIndex += 1;
      }
      text += line + "\n";
      return text;
    }
  
    static formatByWord(text, stringLength, stringCount) {
      let resultText = "";
      let tempLine = "";
      let stringArr = text.split("\n");
      this.currLineIndex = -1;
      stringArr.forEach((str) => {
        if (str.length > 0) {
          str = str.trim().replace(/\s+/g, " ").replace(/\n/g, ' ');
          let wordArr = str.split(" ");
          wordArr.forEach((word) => {
            word = word.trim();
            if ((tempLine + word).length < stringLength) {
              tempLine += word + " ";
            } else {
              if ((tempLine + word).length == stringLength) {
                tempLine += word;
                resultText = this.addLine(resultText, tempLine, stringCount);
                tempLine = "";
              } else {
                if (word.length <= stringLength) {
                  if (tempLine.length != 0) {
                    resultText = this.addLine(resultText, tempLine, stringCount);
                  }
                  if (word.length == stringLength) {
                    tempLine = word;
                  } else {
                    tempLine = word + " ";
                  }
                } else {
                  let startIndex = stringLength - tempLine.length;
                  tempLine += word.slice(0, startIndex);
                  resultText = this.addLine(resultText, tempLine, stringCount);
                  let endIndex = Math.ceil((word.length - startIndex) / stringLength) - 1;
                  for (let i = 0; i <= endIndex; i++) {
                    if (i < endIndex) {
                      resultText = this.addLine(resultText, word.slice(startIndex + i * stringLength, (i + 1) * stringLength + startIndex), stringCount);
                    } else {
                      if ((word.length - startIndex) % stringLength == 0 && startIndex != word.length) {
                        resultText = this.addLine(resultText, word.slice(startIndex + i * stringLength, (i + 1) * stringLength + startIndex), stringCount);
                        tempLine = "";
                      } else {
                        tempLine =
                          word.slice(startIndex + i * stringLength) + " ";
                      }
                    }
                  }
                }
              }
            }
          });
        }
        if (tempLine.length > 0) {
          resultText = this.addLine(resultText, tempLine, stringCount);
          tempLine = "";
        }
      });
      resultText = this.addLine(resultText, tempLine, stringCount);
      return resultText;
    }
  
    static formatBySentence(text, stringLength, stringCount) {
      let resultText = "";
      let tempLine = "";
      this.currLineIndex = -1;
      let sentenceArray = text.split(/[.!?]/);
      sentenceArray.forEach((sentence) => {
        sentence = sentence.trim().replace(/\n/g, ' ');
        if ((tempLine + sentence).length < stringLength) {
          tempLine += sentence + ". ";
        } else {
          if (sentence.length < stringLength) {
            if (tempLine.length != 0) {
              resultText = this.addLine(resultText, tempLine, stringCount);
            }
            tempLine = sentence + ". ";
          } else {
            resultText = this.addLine(resultText, tempLine, stringCount);
            let endIndex = Math.ceil((sentence.length) / stringLength) - 1;
            for (let i = 0; i <= endIndex; i++) {
              if (i < endIndex) {
                resultText = this.addLine(resultText, sentence.slice(i * stringLength, (i + 1) * stringLength), stringCount);
              } else {
                if (sentence.length % stringLength == 0) {
                  resultText = this.addLine(resultText, sentence.slice(i * stringLength, (i + 1) * stringLength), stringCount);
                  tempLine = "";
                } else {
                  tempLine = sentence.slice(i * stringLength) + ". ";
                }
              }
            }
          }
        }
      });
  
      if (tempLine.length > 0) {
        resultText = this.addLine(resultText, tempLine, stringCount);
        tempLine = "";
      }
  
      resultText = this.addLine(resultText, tempLine, stringCount);
      return resultText;
    }
  }
  