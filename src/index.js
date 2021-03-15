module.exports = function check(str, bracketsConfig) {
    for(let i = 0; i < str.length + 3; i++) {
        let temp;

        bracketsConfig.forEach((elem) => {
            temp = elem[0] + elem[1]
            while (str.indexOf(temp) > -1) {
                str = str.replace(`${temp}`, '')
            }
        })
    }

    if (str.length === 0) {
        return true;
    } else {
        return false
    }
}
