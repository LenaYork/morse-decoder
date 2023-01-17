const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    const symbolsTens = expr.match(/.{1,10}/g);   //разделить на десятки

    const morseSymbols = symbolsTens.map(elem => {
        if (elem === "**********") {
            return " ";
        }
        else {
            const pairsMorseSymbols = elem.match(/.{1,2}/g); //разделить на двойки

            const specialCases = {
                "10" : ".",
                "11" : "-",
                "00" : "",
            }
            
        return pairsMorseSymbols.map(el => specialCases[el]).join("");
        } 
    });

    return morseSymbols.map(element =>  MORSE_TABLE[element]).join("");
}

module.exports = {
    decode
}