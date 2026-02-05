function formatINR(value) {
  return "₹ " + value.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function calculateInterest() {
  const borrower = document.getElementById("borrower").value.trim();
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const start = new Date(document.getElementById("startDate").value);
  const end = new Date(document.getElementById("endDate").value);

  if (!borrower || isNaN(principal) || isNaN(rate) || isNaN(start) || isNaN(end)) {
    alert("Please fill all fields correctly");
    return;
  }

  if (end <= start) {
    alert("End date must be after start date");
    return;
  }

  const days = Math.floor((end - start) / (1000 * 60 * 60 * 24));
  const months = days / 30; // PN / Rural loan method

  const SI = (principal * rate * months) / 100;
  const total = principal + SI;

  document.getElementById("sBorrower").innerText = borrower;
  document.getElementById("sPrincipal").innerText = formatINR(principal);
  document.getElementById("sRate").innerText = rate + " per 100 per month";
  document.getElementById("sDays").innerText = days + " days";
  document.getElementById("sMonths").innerText = months.toFixed(2) + " months";
  document.getElementById("sSI").innerText = formatINR(SI);
  document.getElementById("sTotal").innerText = formatINR(total);

  const today = new Date();
  document.getElementById("calcDate").innerText =
    today.toLocaleDateString("en-GB");
}

function basicCalc() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("op").value;

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("basicResult").innerText = "Result : Invalid input";
    return;
  }

  let result;
  if (op === "+") result = a + b;
  else if (op === "-") result = a - b;
  else if (op === "*") result = a * b;
  else if (op === "/") result = b !== 0 ? a / b : "Error";

  document.getElementById("basicResult").innerText = "Result : " + result;
}
