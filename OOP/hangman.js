const hangman = function(word,number) {
    this.word = word.toLowerCase().split("")
    this.number = number
    this.guesseLetter =["c","b","t"]
}
hangman.prototype.getPuzzle =function(){
    let puzzle = ""
    this.word.forEach((letter) => {
        if(this.guesseLetter.includes(letter) || letter ===" "){
            puzzle += letter
        }else{
            puzzle += "*"
        }
    })
    return puzzle
}
const game1 = new hangman("Cat",2)
console.log(game1.getPuzzle())
const game2 = new hangman("Casa negra",5)
console.log(game2.getPuzzle())