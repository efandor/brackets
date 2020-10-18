module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length;) {
    brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
    if (str.includes(brackets)) {
        str = str.replace(brackets, '');
        i = 0;
    } else i ++;
  }
return str === '' ? true : false
}

