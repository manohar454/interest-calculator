const data = JSON.parse(localStorage.getItem("interestStatement"));

if (!data) {
  alert("No statement data found");
  window.location.href = "index.html";
}

document.getElementById("borrower").innerText = data.borrower;
document.getElementById("lender").innerText = data.lender;
document.getElementById("principal").innerText =
  "₹ " + data.principal.toLocaleString("en-IN", { minimumFractionDigits: 2 });

document.getElementById("rate").innerText =
  data.rate + " per ₹100 per month";

document.getElementById("period").innerText =
  data.days + " days (" + data.months + " months)";

document.getElementById("si").innerText =
  "₹ " + data.SI.toLocaleString("en-IN", { minimumFractionDigits: 2 });

document.getElementById("total").innerText =
  "₹ " + data.total.toLocaleString("en-IN", { minimumFractionDigits: 2 });

document.getElementById("date").innerText = data.calcDate;

