document.getElementById("submit-btn").addEventListener("click", function(){
    const emaildField = document.getElementById("user-email");
    const email = emaildField.value;
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    if(email === "father@son.com" && password === "secret"){
        window.location.href = "bank.html";
    }
    else{
        alert("onvalid user. please try again");
    }
    emaildField.value = "";
    passwordField.value = "";
})