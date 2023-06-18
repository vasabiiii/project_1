let output = document.getElementById('first_typewrite')
let words = [
    'pro league',
    'big games',
    'The best teams',
    'The best major'
]
let charTurn = 0;
let wordTurn = 0;
printWord()
function printWord(){
    if(charTurn<=words[wordTurn].length){
        output.innerHTML=words[wordTurn].substr(0,charTurn)
        charTurn++
        setTimeout(printWord, 100)
    }
    else{
        setTimeout(deleteWord, 1000)
    }
}
function deleteWord()
{
    if(charTurn >=0)
    {
        output.innerHTML=words[wordTurn].substr(0,charTurn)
        charTurn--
        setTimeout(deleteWord, 100)
    }
    else
    {
        if(wordTurn<words.length -1)
        {
            wordTurn++
        }
        else
        {
            wordTurn = 0
        }
        charTurn =0
        setTimeout(printWord, 300)
    }

}