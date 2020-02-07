const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const re_pass = document.getElementById('re_pass');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmail(input){
    const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(check.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input, "Email is not vailded");
    }
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} Check your info`);
        } else {
            showSuccess(input);
        }
    })
}

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Please chech your password");
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([name, email, pass, re_pass]);

    checkLength(name, 3, 15);
    checkLength(pass, 8, 32);
    checkEmail(email);
    checkPasswordMatch(pass, re_pass);
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
