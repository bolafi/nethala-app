// Score in LS
class LSscore {
  static addScore(s1, s2) {
    let fScores, sScores;
    if (
      localStorage.getItem("fScores") === null ||
      localStorage.getItem("sScores") === null
    ) {
      fScores = [];
      sScores = [];
    } else {
      fScores = JSON.parse(localStorage.getItem("fScores"));
      sScores = JSON.parse(localStorage.getItem("sScores"));
    }

    fScores.push(s1);
    sScores.push(s2);
    localStorage.setItem("fScores", JSON.stringify(fScores));
    localStorage.setItem("sScores", JSON.stringify(sScores));
  }

  static displayScore() {
    let fScores, sScores;
    if (
      localStorage.getItem("fScores") === null ||
      localStorage.getItem("sScores") === null
    ) {
      fScores = [];
      sScores = [];
    } else {
      fScores = JSON.parse(localStorage.getItem("fScores"));
      sScores = JSON.parse(localStorage.getItem("sScores"));
    }

    fScores.forEach(function(s1) {
      //console.log(s1);
      return s1;
    });

    sScores.forEach(function(s2) {
      return s2;
    });
    // addScore(s1, s2);
  }
}
