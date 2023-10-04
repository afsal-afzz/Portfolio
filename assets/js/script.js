var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validatename(){
    var name = document.getElementById('contact-name').value;

    if(name.length === 0){
        nameError.innerHTML = '*Name is required';
        nameError.style.color = 'red';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    nameError.innerHTML = 'Valid';
    nameError.style.color = 'green';
    
    return true


}


function validateEmail(){

    var email = document.getElementById('contact-email').value;


    if(email.length === 0){
        emailError.innerHTML ='*Email is Required'
        return false;
    }

    if(!email.match(/^[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,4}$/)){
        emailError.style.color = 'red';
        emailError.innerHTML = 'Email invalid';
        return false;
    }
  
    emailError.innerHTML = 'Valid'; // Only set 'Valid' when the email is valid
    emailError.style.color = 'green';
    return true;



}
function validatemessage(){

    var message = document.getElementById('contact-message').value; 
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more character required';
        return false;
    }

    messageError.innerHTML = 'Perfect '; 
    return true;
}

function validForm(){
    
    if(!validatename() || !validateEmail() || !validatemessage()){
        submitError.style.display = 'block';
        // submitError.innerHTML = 'Please Add Required Details to Submit';
        alert('Please Add Required Details to Submit')
        setTimeout(function(){submitError.style.display = 'none';},3000);
        
        return false;
    }
   
    alert('Click OK to submit!');  
   
   return true;
 
}