
// const withdrawMoney = document.getElementById("withdraw-money").innerText;
// let balance = document.getElementById("balance-money").innerText;


// deposit button
document.getElementById("deposit-btn").addEventListener("click", function(){
    // withdraw input field
    const depositInputField = document.getElementById("input-deposit");
    const newDeposit = parseFloat(depositInputField.value);

    depositInputField.value = "";
    if(isNaN(newDeposit)){
        alert("please input number");
        return;
    }

    // adding with deposit balance
    const depositMoney = document.getElementById("deposit-money");
    const currentDepositMoney = parseFloat(depositMoney.innerText);

    depositMoney.innerText = currentDepositMoney + newDeposit;

// balance add
    const currentBalanceMoney = document.getElementById("balance-money");
    const balance = parseFloat(currentBalanceMoney.innerText);

    currentBalanceMoney.innerText = balance + newDeposit;

    
    
    
})