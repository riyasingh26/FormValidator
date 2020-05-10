
const form = document.getElementById('form');
const username = document.getElementById('Username');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const password2 = document.getElementById('Password2');

function showError(input,message){
    const control = input.parentElement;
    control.className = 'control error';
    const small = control.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const control = input.parentElement;
    control.className = 'control success'; 
}

function checkEmail(input){
    const re =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(re.test(input.value.trim())){
       showSuccess(input);
   }else{
       showError(input,"Enter the valid Email");
   }
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
           showError(input,`${input.id} is required`);
        }else{
            showSuccess(input);
        }
    });
}

function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${input.id} must be atleast ${min} characters`);
    }else if(input.value.length>max){
        showError(input,`${input.id} must be less than ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}

function checkPasswordsMatch(input1,input2){
      if(input1.value!==input2.value){
      showError(input2,"Passwords do not match");
      }
}

form.addEventListener('submit',function(e){
    e.preventDefault();

   checkRequired([username,email,password,password2]);

   checkLength(username,3,15);
   checkLength(password,6,25);
   checkEmail(email);
   checkPasswordsMatch(password,password2);
}); 