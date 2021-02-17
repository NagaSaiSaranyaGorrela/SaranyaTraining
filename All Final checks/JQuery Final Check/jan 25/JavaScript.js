 function validateregisterform() {

    
var name = $("#name").val();
var valid=true;
    if (name == "") {
        alert("Name field must be filled out");
        valid = false;
    }
    var username = ($("#username").val());
    if (username == "") {
        alert("Username field must be filled out");
        valid = false;
    }
    var password = ($("#password").val());
    if (password == "") {
        alert("Password field must be filled out");
        valid=false;
    }
    var retypepassword = ($("#retypepassword").val());
    if (retypepassword == "") {
        alert("Re-Enter password field must be filled out");
        valid= false;
    }
    if(password!=retypepassword){
    alert("The Passwords entered do not match");
    valid=false;
} 
    var email = ($("#email").val());
    if (email == "") {
        alert("Email field must be filled out");
        valid= false;
    }
    var address = ($("#address").val());
    if (address == "") {
        alert("Address field must be filled out");
        valid =false;
    }
    var mobilenumber = ($("#mobilenumber").val());
    if (mobilenumber == "") {
        alert("Mobile number field must be filled out");
        valid= false;
    }
    if (username.length < 8 || username.length > 20) {
        alert("The length of the username field is 8 to 20");
        valid= false;
    }
    if (password.length < 8 || password.length > 20) {
        alert("The length of the password field is 8 to 20");
        valid= false;
    }
    if (retypepassword.length < 8 || retypepassword.length > 20) {
        alert("The length of the re-enter password field is 8 to 20");
        valid= false;
    }

return valid;

}

function validateloginForm() {
    var username = $("#username").val();
var valid=true;
    if (username == "") {
        alert("Username field must be filled out");
        valid= false;
    }
    var password = ($("#password").val());
    if (password == "") {
        alert("Password field must be filled out");
        valid= false;
    }
    if (username.length < 8 || username.length > 20) {
        alert("The length of the username field is 8 to 20");
        valid= false;
    }
    if (password.length < 8 || password.length > 20) {
        alert("The length of the password field is 8 to 20");
        valid= false;
    }

return valid;
}
