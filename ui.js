class UI {
  // Show alert------------------------------------------------------
  showAlert() {
    const div = document.createElement("div");
    div.className = "alert alert-danger text-center";
    div.appendChild(document.createTextNode("عب كل الخانات"));
    const contaier = document.querySelector(".card");
    const form = document.querySelector(".card-body");
    contaier.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  // Clear Fields ----------------------------------------------
  clearFileds() {
    document.getElementById("first-score").value = "";
    document.getElementById("second-score").value = "";
    document.getElementById("third-score").value = "";
    document.getElementById("fourth-score").value = "";
  }

  // new Game-------------------------------------

  init() {
    document.getElementById("first-score").value = "";
    document.getElementById("second-score").value = "";
    document.getElementById("third-score").value = "";
    document.getElementById("fourth-score").value = "";
    document.getElementById("first-team").value = "";
    document.getElementById("second-team").value = "";
    document.getElementById("third-team").value = "";
    document.getElementById("fourth-team").value = "";
    document.getElementById("score-table").style.display = "none";
    fScore = 0;
    sScore = 0;
    tScore = 0;
    foScore = 0;
  }
}
