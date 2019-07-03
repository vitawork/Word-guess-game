$(document).ready(function() {
  var vwins = document.getElementById("wins");
  var vwinscounter = 0;
  var vloses = document.getElementById("loses");
  var vlosescounter = 0;
  var vguesrem = document.getElementById("guesrem");
  var vguesremcounter = 6;
  var vgueswords = document.getElementById("gueswords");
  var vword = document.getElementById("word");

  var game = {
    wordsarray: ["vampirea", "zombie", "monster", "underground"],
    stop: true,
    word: "",
    userkey: "",
    matchesnumber: 0,
    choosing_random: function() {
      return this.wordsarray[
        Math.floor(Math.random() * this.wordsarray.length)
      ];
    },
    empty_word: function() {
      vword.textContent = ""; /////////////////borrar
      for (let i = 0; i < this.word.length; i++) {
        vword.textContent = vword.textContent + "_ ";
      }
    },
    reset: function() {
      // vwins.textContent= 0;
      // vloses.textContent= 0;
      vguesrem.textContent = 6;
      vgueswords.textContent = "";
      vword.textContent = "";
      // vwinscounter= 0;
      // vlosescounter= 0;
      vguesremcounter = 6;
      this.word = this.choosing_random();
      this.empty_word();
      this.userkey = "";
      this.stop = true;
      this.matchesnumber = 0;
    },

    sust_letter: function(index) {
      var temp = vword.textContent;
      vword.textContent = "";

      for (var j = 0; j < temp.length; j++) {
        if (j === index * 2) {
          vword.textContent = vword.textContent + this.userkey;
        } else {
          vword.textContent = vword.textContent + temp[j];
        }
      }
    }
  };

  game.word = game.choosing_random(); ////////
  game.empty_word(); ////////
  console.log(game.word); ////////
  game.stop = false; ///////////

  document.onkeyup = function(event) {
    if (!game.stop) {
      game.userkey = event.key;
      if (vgueswords.textContent.indexOf(game.userkey) === -1) {
        vgueswords.textContent = vgueswords.textContent + " " + game.userkey;
        for (var i = 0; i < game.word.length; i++) {
          if (game.word[i] === game.userkey) {
            game.sust_letter(i);
            game.matchesnumber++;
            if (game.matchesnumber === game.word.length) {
              game.stop = true;
              vwinscounter++;
              vwins.textContent = vwinscounter;
            }
          }
        }
        if (game.word.indexOf(game.userkey) === -1) {
          vguesremcounter--;
          vguesrem.textContent = vguesremcounter;
          if (vguesremcounter === 0) {
            game.stop = true;
            vlosescounter++;
            vloses.textContent = vlosescounter;
          }
        }
      }
    }
  };
});
