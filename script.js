function calculateInterest() {
  const borrower = document.getElementById("borrower").value;
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const start = new Date(document.getElementById("startDate").value);
  const end = new Date(document.getElementById("endDate").value);

  if (!borrower || !principal || !rate || !start || !end) {
    alert("Please fill all fields");
    return;
  }

  const days = Math.floor((end - start) / (1000 * 60 * 60 * 24));
  if (days <= 0) {
    alert("End date must be after start date");
    return;
  }

  const months = days / 30;
  const SI = (principal * rate * months) / 100;
  const total = principal + SI;

  const data = {
    borrower,
    lender: "Manohar",
    principal,
    rate,
    days,
    months: months.toFixed(2),
    SI,
    total,
    calcDate: new Date().toLocaleDateString("en-IN")
  };

  localStorage.setItem("interestStatement", JSON.stringify(data));

  window.location.href = "statement.html";
}


  const months = days / 30;
  const SI = (principal * rate * months) / 100;
  const total = principal + SI;

  document.getElementById("sBorrower").innerText = borrower;
  document.getElementById("sPrincipal").innerText =
    "₹ " + principal.toLocaleString("en-IN", { minimumFractionDigits: 2 });
  document.getElementById("sRate").innerText =
    rate + " per ₹100 per month";
  document.getElementById("sDays").innerText = days + " days";
  document.getElementById("sMonths").innerText = months.toFixed(2) + " months";
  document.getElementById("sSI").innerText =
    "₹ " + SI.toLocaleString("en-IN", { minimumFractionDigits: 2 });
  document.getElementById("sTotal").innerText =
    "₹ " + total.toLocaleString("en-IN", { minimumFractionDigits: 2 });

  document.getElementById("calcDate").innerText =
    new Date().toLocaleDateString("en-IN");

  document.getElementById("resultCard").classList.remove("hidden");
}
function printStatement() {
  window.print();
}
