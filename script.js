const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});
//add event deposit
const depositButton = document.getElementById("addDeposit");

depositButton.addEventListener("click", function () {
  const depositNumber = getInputNumber("depositAmount");

  if (depositNumber < 0) {
    alert("Deposit number can not be negative!");
  } else {
    const currentDepositAmount =
      document.getElementById("currentDeposit").innerText;

    const currentDepositAmountNumber = parseFloat(currentDepositAmount);
    totalDeposit = depositNumber + currentDepositAmountNumber;
    document.getElementById("currentDeposit").innerText = totalDeposit;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + depositNumber;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("depositAmount").value = "";
  }
});

// withdraw button event
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdrawAmount");
  if (withdrawNumber < 0) {
    alert("Withdraw number can not be negative!");
  } else {
    const currentWithdrawAmount =
      document.getElementById("currentWithdraw").innerText;

    const currentWithdrawNumber = parseFloat(currentWithdrawAmount);
    totalWithdraw = withdrawNumber + currentWithdrawNumber;
    document.getElementById("currentWithdraw").innerText = totalWithdraw;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + withdrawNumber * -1;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("withdrawAmount").value = "";
  }
});

function getInputNumber(id) {
  const Amount = document.getElementById(id).value;

  amountNumber = parseFloat(Amount);
  return amountNumber;
}
