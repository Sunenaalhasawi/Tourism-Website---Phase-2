function validateMessage()
{
     var message = document.getElementById('message');
     var msgerror = document.getElementById('msgerror');
         if(message.value == '') 
         {      
            msgerror.innerHTML="Message field is empty"
            msgerror.style.color='red'
              message.focus();
              return false;       
         }
         else{
            msgerror.innerHTML=""
            msgerror.style.color='red'
            return true;
         }
           
}
function validateName(){
    let name = document.getElementById("name");
    let nameError=document.getElementById("nameerror");
    let regexName = /^[A-Za-z ]+$/;
    // let  regexName= /^[a-zA-Z]+( [a-zA-Z]+)+$/;
    // let regexName=/^[a-zA-Z]+ [a-zA-Z]+$/;
    if(regexName.test(name.value)==true){
        nameError.innerHTML="Valid Format"
        nameError.style.color='green'
        return true

    }
    else{
        nameError.innerHTML="Invalid Format"
        nameError.style.color='red'
        return false
    }
}
function validateName1(){
    let name = document.getElementById("name1");
    let nameError=document.getElementById("nameerror1");
    let regexName = /^[A-Za-z ]+$/;
    if(regexName.test(name.value)==true){
        nameError.innerHTML="Valid Format"
        nameError.style.color='green'
        return true

    }
    else{
        nameError.innerHTML="Invalid Format"
        nameError.style.color='red'
        return false
    }
}
 
function validatePassword(password) {
                
    // Do not show anything when the length of password is zero.
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
   
    
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates
    

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
       
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Password Strength : Very Weak";
            color = "red";
            break;
        case 3:
            strength = "Password Strength : Medium";
            color = "orange";
            break;
        case 4:
            strength = "Password Strength : Strong";
            color = "green";
            break;
    }
  
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}
function validatemail(){
    let name = document.getElementById("mail");
    let nameError=document.getElementById("mailerror");
    let regexName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regexName.test(name.value)==true){
        nameError.innerHTML="Valid Format"
        nameError.style.color='green'
        return true

    }
    else{
        nameError.innerHTML="You have entered an invalid email address!"
        nameError.style.color='red'
        return false
    }
}
function validatephone(){
    let name = document.getElementById("phone");
    let nameError=document.getElementById("phoneerror");
    // let regexName = /^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\d{3}\.\d{3}\.\d{4}$|^\d{3} \d{3} \d{4}$/;
    let regexName=/^\(?(\d{3})\)?[-?. ]?(\d{3})[-?. ]?(\d{4})$/;
    if(regexName.test(name.value)==true){
        nameError.innerHTML="Valid Format"
        nameError.style.color='green'
        return true

    }
    else{
        nameError.innerHTML="Invalid Format"
        nameError.style.color='red'
        return false
    }
}
function validateconfirmPassword() {
    var password = document.getElementById("pswd").value;
    var confirmPassword = document.getElementById("confirm_pswd").value;
    if (password != confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
    return true;
  }

function checkPassword(){
    let name = document.getElementById("pswd");
    let nameError=document.getElementById("pswderror");
    let regexName =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
    if(regexName.test(name.value)==true){
        nameError.innerHTML="Valid Format"
        nameError.style.color='green'
        return true

    }
    else{
        nameError.innerHTML="Password must have minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number!"
        nameError.style.color='red'
        nameError.style.fontSize='12px'
        return false
    }
}

function validateMyForm()
{
   if(validatemail() === true && checkPassword() === true)
  { 
    alert("Welcome,Login Successfully");
    return true;
    
   }
else{
    
    alert("Login Failed");
    return false;
 }
}

function validateEnquiry()
{

   if(validateName() === true && validatemail() === true && validateMessage()===true)
  { 
    alert("Enquiry submitted successfully");
    return true;
    
   }
else{
    
    alert("Enquiry Failed");
    return false;
 }
}

function validateMyFormsign()
{
   if(validateName() === true && validatemail()=== true && validatephone()=== true && validateconfirmPassword()===true &&checkPassword()===true )
  { 
    alert("Registration Completed Succeessfully");
    return true;
   }
else{
    
    alert("Validations failed");
    return false;
 }
}