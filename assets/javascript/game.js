$(document).ready(function() {
 
    var vwins= document.getElementById("wins");
    var vwinscounter= 0;
    var vloses= document.getElementById("loses");
    var vlosescounter= 0;
    var vguesrem= document.getElementById("guesrem");
    var vguesremcounter= 6;
    var vgueswords= document.getElementById("lgueswords");
    // var vgueswordscounter;
    var vword= document.getElementById("word");
    
   
    var game={
        wordsarray: ["vampire","zombie","monster","underground"],
        lose: true,
        word,
        choosing_random: function() {
            return this.wordsarray[Math.floor(Math.random() * this.wordsarray.length)];           
        },
        empty_word: function() {
            vword.textContent="";   /////////////////borrar         
            for (let i = 0; i < this.word.length; i++) {
                vword.textContent = vword.textContent + "_ ";                               
            }
            console.log(vword.textContent);
        },
        reset: function(){
             vword.textContent="";

        },

    };


    game.word = game.choosing_random();
    console.log(game.word);
    game.empty_word();
    

});