document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get the withdraw amount that has input.
  const inputField = document.getElementById("input-withdraw");
  const newWithdraw = parseFloat(inputField.value);


  inputField.value = "";
    if(isNaN(newWithdraw)){
        alert("please input number")
        return;
    }
  // adding withdraw balance
  const withdrawBalance = document.getElementById("withdraw-money");
  const currentWithdrawBalance = parseFloat(withdrawBalance.innerText);
  
  // reducing balance
  const balance = document.getElementById("balance-money");
  const currentBalance = parseFloat(balance.innerText);

  
  if (currentBalance < newWithdraw) {
    alert("you don't have sufficient money");
    return;
  }
  balance.innerText = currentBalance - newWithdraw;
  
  withdrawBalance.innerText = newWithdraw + currentWithdrawBalance

  
});
