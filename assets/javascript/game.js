$(document).ready(function() {
  var vwins = document.getElementById("wins");
  var vwinscounter = 0;
  var vloses = document.getElementById("loses");
  var vlosescounter = 0;
  var vguesrem = document.getElementById("guesrem");
  var vguesremcounter = 6;
  var vgueswords = document.getElementById("gueswords");
  var vword = document.getElementById("word");
  var vpush = document.getElementById("push");

  var game = {
    wordsarray: ["vampire", "zombie", "monster", "underground"],
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
      vword.textContent = "";
      for (let i = 0; i < this.word.length; i++) {
        vword.textContent = vword.textContent + "_ ";
      }
    },
    reset: function() {
      vguesrem.textContent = 6;
      vgueswords.textContent = "";
      vword.textContent = "";
      vguesremcounter = 6;
      this.userkey = "";
      this.stop = true;
      vword.textContent = "Push a key to star.";
      this.matchesnumber = 0;
      canvas.clear();
      drawStick();
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
    },

    validate: function(strValue) {
      var objRegExp = /^[a-z]+$/;
      return objRegExp.test(strValue);
    }
  };

  //////////

  var canvas = new fabric.Canvas("drawarea", {
    backgroundColor: " rgb(198, 199, 202)",
    selectionColor: "gray",
    selectionLineWidth: 2
  });

  function drawStick() {
    var line1 = new fabric.Line([100, 600, 100, 200], {
      left: 50,
      top: 50,
      stroke: "brgba(27, 19, 11, 0.904)",
      strokeWidth: 20
    });
    canvas.add(line1);

    var line2 = new fabric.Line([100, 283, 100, 200], {
      left: 250,
      top: 70,
      stroke: "rgba(177, 159, 79, 0.904)",
      strokeWidth: 5
    });
    canvas.add(line2);

    var line3 = new fabric.Line([100, 100, 305, 100], {
      left: 50,
      top: 50,
      stroke: "rgba(27, 19, 11, 0.904)",
      strokeWidth: 20
    });
    canvas.add(line3);

    var line4 = new fabric.Line([100, 100, 500, 100], {
      left: 0,
      top: 450,
      stroke: "rgba(65, 60, 49, 0.856)",
      strokeWidth: 10
    });
    canvas.add(line4);
  }

  function drawHead() {
    var circle = new fabric.Circle({
      left: 225,
      top: 150,
      strokeWidth: 6,
      radius: 25,
      fill: "rgba(56, 11, 19, 0.904)",
      stroke: "rgba(32, 12, 16, 0.904)"
    });
    canvas.add(circle);
  }

  function drawb() {
    // cuerpo del señor
    var line = new fabric.Line([100, 100, 100, 200], {
      left: 245,
      top: 205,
      stroke: "rgba(56, 11, 19, 0.904)",
      strokeWidth: 15
    });
    canvas.add(line);
  }

  function drawlh() {
    var mi = new fabric.Line([50, 50, 5, 00], {
      left: 250,
      top: 200,
      stroke: "rgba(75, 22, 31, 0.904)",
      strokeWidth: 5
    });
    canvas.add(mi);
  }

  function drawrh() {
    var md = new fabric.Line([100, 05, 50, 70], {
      left: 200,
      top: 200,
      stroke: "rgba(75, 22, 31, 0.904)",
      strokeWidth: 5
    });
    canvas.add(md);
  }

  function drawlf() {
    //pies izquierdo
    var pi = new fabric.Line([50, 5, 0, 70], {
      left: 200,
      top: 300,
      stroke: "rgba(75, 22, 31, 0.904)",
      strokeWidth: 5
    });
    canvas.add(pi);
  }

  function drawrf() {
    var pd = new fabric.Line([50, 50, 5, 00], {
      left: 250,
      top: 300,
      stroke: "rgba(75, 22, 31, 0.904)",
      strokeWidth: 5
    });
    canvas.add(pd);
  }

  drawStick();

  document.onkeyup = function(event) {
    game.userkey = event.key;
    if (!game.stop) {
      if (game.validate(game.userkey)) {
        if (vgueswords.textContent.indexOf(game.userkey) === -1) {
          vgueswords.textContent = vgueswords.textContent + " " + game.userkey;
          for (var i = 0; i < game.word.length; i++) {
            if (game.word[i] === game.userkey) {
              game.sust_letter(i);
              game.matchesnumber++;
              if (game.matchesnumber === game.word.length) {
                game.reset();
                vwinscounter++;
                vwins.textContent = vwinscounter;
              }
            }
          }
          if (game.word.indexOf(game.userkey) === -1) {
            vguesremcounter--;
            vguesrem.textContent = vguesremcounter;
            switch (vguesremcounter) {
              case 5:
                drawHead();
                break;
              case 4:
                drawb();
                break;
              case 3:
                drawlh();
                break;
              case 2:
                drawrh();
                break;
              case 1:
                drawlf();
                break;
              case 0:
                drawrf();
                break;
            }
            if (vguesremcounter === 0) {
              game.reset();
              vlosescounter++;
              vloses.textContent = vlosescounter;
            }
          }
        }
      }
    } else {
      game.stop = false;
      game.word = game.choosing_random();
      game.empty_word();
      console.log(game.word); ///////////
    }
  };
});
