const form = document.getElementById('form');
var name = document.getElementById('name');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var re_pass = document.getElementById('re_pass');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isVaildEmail(email){
    const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(String(email).toLowerCase());
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    if(name.value === '')
    {  
        showError(name, "Please type your name!");
    } 
    else 
    {
        showSuccess(name);
    }

    if(email.value === '')
    {
        showError(email, "Please type your name!");
    }
    else if (!isVaildEmail(email.value))
    {
        showError(email, 'Email is not vaild');
    } 
    else 
    {
        showSuccess(email);
    }

    if(pass.value === '')
    {
        showError(pass, "Please type your name!");
    } 
    else 
    {
        showSuccess(pass);
    }

    if(re_pass.value === '')
    {
        showError(re_pass, "Please type your name!");
    } 
    else 
    {
        showSuccess(re_pass);
    }
})



// if(name.length < 0){
//     $msg = "Please fill out your name";
//     return $msg;
// }

// if(email()){
//     $msg = "Please fill out your name";
//     return $msg;
// }

// if(pass.length < 6 ){
//     $msg = "Please check your password length";
//     return $msg;
// }
// else if(pass !== re_pass){
//     $msg = "Please check your password";
//     return $msg;
// }