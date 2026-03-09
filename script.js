const email = document.querySelector("#email");
const password= document.querySelector("#password");
const btn = document.querySelector("#submit"); 


function checkinput(){
    if(email.value !== "" && password.value !== ""){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
}
email.addEventListener("input" ,checkinput);
password.addEventListener("input" ,checkinput);
btn.addEventListener("click" , checklength());
function loginform(){
    btn.textContent = "Logging In..."

    setTimeout(() => {
        alert("Welcome Back!!");
        btn.textContent = "Log In";
        email.value = "";
        password.value = "";
    },1000);
}

