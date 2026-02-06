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
  const months = days / 30;

  const SI = (principal * rate * months) / 100;
  const total = principal + SI;

  // Save data for statement page
  localStorage.setItem("borrower", borrower);
  localStorage.setItem("principal", principal);
  localStorage.setItem("rate", rate);
  localStorage.setItem("days", days);
  localStorage.setItem("months", months.toFixed(2));
  localStorage.setItem("si", SI.toFixed(2));
  localStorage.setItem("total", total.toFixed(2));
  localStorage.setItem("date", new Date().toLocaleDateString("en-GB"));

  window.location.href = "statement.html";
}

function basicCalc() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("op").value;

  let result;
  if (op === "+") result = a + b;
  if (op === "-") result = a - b;
  if (op === "*") result = a * b;
  if (op === "/") result = b !== 0 ? a / b : "Error";

  document.getElementById("basicResult").innerText = "Result : " + result;
}
