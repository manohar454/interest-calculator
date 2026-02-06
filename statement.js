const data = JSON.parse(localStorage.getItem("statementData"));

if (!data) {
  alert("No data found");
  window.location.href = "index.html";
}

document.getElementById("sBorrower").innerText = data.borrower;
document.getElementById("calcDate").innerText = data.date;

document.getElementById("sPrincipal").innerText =
  data.principal.toLocaleString("en-IN", { minimumFractionDigits: 2 });

document.getElementById("sRate").innerText =
  data.rate + " per 100 per month";

document.getElementById("sDays").innerText = data.days + " days";
document.getElementById("sMonths").innerText = data.months + " months";

document.getElementById("sSI").innerText =
  data.SI.toLocaleString("en-IN", { minimumFractionDigits: 2 });

document.getElementById("sTotal").innerText =
  data.total.toLocaleString("en-IN", { minimumFractionDigits: 2 });

function printStatement() {
  window.print();
}
