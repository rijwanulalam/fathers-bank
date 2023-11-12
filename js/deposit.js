
// const withdrawMoney = document.getElementById("withdraw-money").innerText;
// let balance = document.getElementById("balance-money").innerText;


// deposit button
document.getElementById("deposit-btn").addEventListener("click", function(){
    // withdraw input field
    const depositInputField = document.getElementById("input-deposit");
    const newDeposit = depositInputField.value;
    // adding with deposit balance
    const depositMoney = document.getElementById("deposit-money");
    const depositBalance = depositMoney.innerText;

    depositMoney.innerText = parseFloat(depositBalance) + parseFloat(newDeposit);

// balance add
    const balanceMoney = document.getElementById("balance-money");
    const balance = balanceMoney.innerText;

    balanceMoney.innerText = parseFloat(balance)+ parseFloat(newDeposit);
    
    
})