class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'/\s/]+/g, "")
  }

  static titleize(string) {
    const excludeWords = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the'];
    const newString = string.split(' ');
    return newString.map((word, index) => {
      return excludeWords.includes(word) && index !== 0 ? [word] : this.capitalize(word)
    }).join(' ')

  }

}

console.log(Formatter.capitalize('egg'))
console.log(Formatter.sanitize('%%egg\' shell'))
console.log(Formatter.titleize('i am  girl and he is a boy'))
console.log(Formatter.titleize("in the night kitchen"))