const ui = new UI();

let counter = 0;
const btnCount = document.querySelector("#btn-count");
//const scoreTable = document.getElementById("score-table");
let color = 0;
let fScore = [];
let sScore = [];
let tScore = [];
let foScore = [];
const colors = ["primary", "warning"];

// Add SCORE ---------------------------------------------------
// function addScore(firstScore, secondScore, thridScore, forthScore) {
//   fScore += parseInt(firstScore);
//   sScore += parseInt(secondScore);
//   tScore += parseInt(thridScore);
//   foScore += parseInt(forthScore);
//   const row = document.createElement("tr");
//   const list = document.getElementById("list-score");
//   row.className = "bg-" + rowColor();
//   row.innerHTML = `<td>${fScore}</td>
//                    <td>${sScore}</td>
//                    <td>${tScore}</td>
//                    <td>${foScore}</td>`;
//   list.appendChild(row);
// }

function addScore(firstScore, secondScore, thirdScore, fourthScore) {
  fScore.push(parseInt(firstScore));
  sScore.push(parseInt(secondScore));
  tScore.push(parseInt(thirdScore));
  foScore.push(parseInt(fourthScore));
  calculateScore(fScore);
  calculateScore(sScore);
  calculateScore(tScore);
  calculateScore(foScore);
}

function calculateScore(arr) {
  let html = 0;
  arr.forEach(function (score) {
    html += score;
  });

  const row = document.createElement("tr");
  const list = document.getElementById("list-score");
  row.className = "bg-" + rowColor();
  row.innerHTML = `<td>${html}</td>
                    `;
  //console.log(html);
  list.appendChild(row);
}

// Undo count
function undoCount() {
  if (fScore.length === 0) {
    return;
  }
  fScore.splice(fScore.length - 1, 1);
  sScore.splice(sScore.length - 1, 1);
  tScore.splice(tScore.length - 1, 1);
  foScore.splice(foScore.length - 1, 1);

  updateScore();
}

function updateScore() {
  const lis = document.querySelectorAll("tr");
  // if (lis.length === 0) {
  //   return;
  // }

  lis[lis.length - 1].remove();
}
// DOM LOAD EVENT

//document.addEventListener("DOMContentLoaded", LSscore.displayScore);

// Event Listener ------------------------------------------------------

btnCount.addEventListener("click", function () {
  const firstTeam = document.getElementById("first-team").value;
  //firstTeam.disabled = true;
  const secondTeam = document.getElementById("second-team").value;
  const thirdTeam = document.getElementById("third-team").value;
  const fourthTeam = document.getElementById("fourth-team").value;

  const firstScore = document.getElementById("first-score").value;
  const secondScore = document.getElementById("second-score").value;
  const thirdScore = document.getElementById("third-score").value;
  const fourthScore = document.getElementById("fourth-score").value;

  //alert("fuckin checken chips");

  if (
    firstTeam === ""
    // ||
    // secondTeam === "" ||
    // thirdTeam === "" ||
    // fourthTeam === "" ||
    // firstScore === "" ||
    // secondScore === "" ||
    // thirdScore === "" ||
    // fourthScore === ""
  ) {
    // alert("hi");
    ui.showAlert();
  } else {
    document.getElementById("first-col").textContent = firstTeam;

    document.getElementById("second-col").textContent = secondTeam;

    document.getElementById("third-col").textContent = thirdTeam;
    document.getElementById("fourth-col").textContent = fourthTeam;
    //console.log(firstTeam);

    addScore(firstScore, secondScore, thirdScore, fourthScore);
    //LSscore.addScore(firstScore, secondScore);

    ui.clearFileds();

    document.getElementById("score-table").style.display = "block";
  }
});

// Back button
document.getElementById("btn-back").addEventListener("click", undoCount);

// New Game-------------------------

document.getElementById("new-game").addEventListener("click", ui.init);

// row color -------------------
function rowColor() {
  color === 0 ? (color = 1) : (color = 0);
  // let col;
  // if (counter === 5) {
  //   counter = 0;
  // }
  col = colors[color];
  // counter += 1;

  return col;
}
