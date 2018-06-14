function test(str) {
    if(str.length < 1) {
        return "Ты передал пустую строку!";
    }
    var arr = str.split("");
    var prevElement = "it's empty at start";
    try {
        arr.forEach(function(element) {
            var match = (element.match(/[a-zA-Zа-яА-ЯёЁ0-9# ]/));
            if(match === null) {
                throw {
                    reason: "Херню написал, должно укладываться в условия RegExp: /[a-zA-Zа-яёЁ0-9# ]/ а у тебя недоспутимый символ ",
                    index: "\'" + element + "\'"
                }
            }
            if(element === " ") {
                if(prevElement == element) {
                    throw {
                        reason: "Два пробела подрят нельзя",
                        index: "удали повторяющийся пробел"
                    };
                }
            }
            prevElement = match;
        });
        console.log("Все ок, ты ввел допустимые символы.");
    } catch ({
        reason, index
    }) {
        if (reason) {
            console.log(reason, ": ", index);
        }
    }

    var finalArray = [];
    var indexOfTagStart;
    var stringCut;
    var indexOfTagEnd;
    var pushValue;


        indexOfTagStart = str.indexOf("#");

        if(indexOfTagStart != -1) {

                stringCut = (str.slice(indexOfTagStart));
                indexOfTagEnd = stringCut.indexOf(" ");
                console.log(indexOfTagEnd + " до пробела");

                pushValue = stringCut.substr(1, indexOfTagEnd - 1);
                console.log(pushValue + " Это мы добавим в массив");
                finalArray.push(pushValue);

                str = stringCut.slice(indexOfTagEnd + 1);
                console.log(str + "--- теперь это наша строка");
                console.log(indexOfTagStart + " это индекс конца тега");

                stringCut = str;
                indexOfTagStart = str.indexOf("#");
                console.log(indexOfTagStart);
        } else {
            return "";
        }



    return finalArray;
}

console.log(test('Прохожу курс на #coursera по #javascript'));