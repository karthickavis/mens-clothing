







let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let cpassword = document.getElementById('cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateinputs();
}
)

function  validateinputs(){
    let usernameval = username.value.trim();
    let emailval = email.value.trim();
    let isPasswordWrong = false;
    let passwordval =password.value.trim();
    let cpasswordval = cpassword.value.trim();
    console.log(validateEmail(emailval))
    let checkemail = validateEmail(emailval);
    if(usernameval===''){
        seterror(username,"username is required");
    }
    else{
        setsuccess(username);
    }
    if(emailval===''){
        seterror(email,'email is required');
    }
    
    else if(checkemail ? checkemail.length==0 :  true ){
        seterror(email,'please enter a valid email');
    }
    else{
        setsuccess(email)
    }
    if(passwordval===''){
        seterror(password,'password is required');
        isPasswordWrong = true;
    }
    else if(passwordval.length<8){
        seterror(password,'password must be atleast 8 character');
        isPasswordWrong = true;
    }
    else{
        setsuccess(password);
        isPasswordWrong = false;
    }
    if(cpasswordval===''){
        seterror(cpassword,'conform password is required');
        isPasswordWrong = true;
    }
    else if(!isPasswordWrong && cpasswordval!==passwordval){
        seterror(password,'passsword does not match');
    }
    else{
        setsuccess(cpassword)
    }
}

function seterror(element,message){
    let formgroup = element.parentElement;
    let errorelement = formgroup.querySelector('.error');
    
    errorelement.innerText = message;
    formgroup.classList.add('error');
    formgroup.classList.remove('success');
}

function setsuccess(element){
    let formgroup = element.parentElement;
    let errorelement = formgroup.querySelector('.error');
    errorelement.innerText = " ";
    formgroup.classList.add('success');
    formgroup.classList.remove('error');
}

const validateEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(
        
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
    );
};




