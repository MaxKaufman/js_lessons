function test(str) {
    var arr = str.split("");
    try {
        arr.forEach(function(element) {
            var match = (element.match(/[a-zA-Zа-яА-ЯёЁ0-9# ]/));
            if(match === null) {
                throw {
                    reason: "Херню написал, должно укладываться в условия RegExp: /[a-zA-Zа-яёЁ0-9# ]/ а у тебя недоспутимый символ ",
                    index: "\'" + element + "\'"
                }
            }
        });
        console.log("Все ок, ты ввел допустимые символы.");
    } catch ({
        reason, index
    }) {
        if (reason) {
            console.log(reason, ": ", index);
        }
    }
}

console.log(test('Прохожу курс на #coursera по #javascript'));