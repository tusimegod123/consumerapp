//Defining  a validating method
function validating() {
    var username = document.sales.fname
    /* Defining a method called allLetter with parameter(fname) and declaring a variable called leters which sets
       a condition of values entered to be alphabets ony and not numbers*/
    function allLetter(fname) {
        var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (fname.value.match(letters)) {
            fname.style.border = '2px solid green'
            return true;
        }
        else {
            // alert('Name must have alphabet characters only');
            document.getElementById('p1').innerText = "Name must have alphabet characters only"
            fname.style.border = '2px solid red'
            fname.focus();
            return false;
        }
    }
    /* Defining a method called allLetterSupervisor with parameter(supervisor) and declaring a variable called nameleters which sets
    a condition of values entered to be alphabets ony and not numbers*/
    function allLetterSupervisor(supervisor) {
        var nameletters = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (supervisor.value.match(nameletters)) {
            supervisor.style.border = '2px solid green'
            return true;
        }
        else {
            // alert("Supervisor's Name must have alphabet characters only");
            document.getElementById('p2').innerText = "Supervisor's Name must have alphabet characters only"
            supervisor.style.border = '2px solid red'
            supervisor.focus();
            return false;
        }
    }
    /*Definiong a method called passwordValidation with parameters(mx,my) and setting an if condition 
    which checks if the values of the input password are empty and meet the specified range of characters
    via name password. If the condition is met return true otherwise false*/
    function passwordValidation(min, max) {

        if (password.value.length == 0 || password.value.length < min || password.value.length > max) {
            // alert('Password should be between 6 to 12 characters')
            document.getElementById('p3').innerText = "Password should be between 6 to 12 characters"
            password.style.border = '2px solid red'
            return false
        } else {
            password.style.border = '2px solid green'
            return true
        }
    }
    /*Defining a method called uid with parameters (mx,my) and setting an if condition which checks the 
    length if the user id is empty or is between a given range and if the condition is met return true otherwise false*/
    function uid(min, max) {

        if (userid.value.length == 0 || userid.value.length < min || userid.value.length > max) {
            // alert('User Id should be between 5 to 35 characters')
            document.getElementById('p4').innerText = "User Id should be between 5 to 35 characters"
            userid.style.border = '2px solid red'
            return false
        } else {
            userid.style.border = '2px solid green'
            return true
        }
    }

    if (allLetter(username)) {

    }
    if (allLetterSupervisor(supervisor)) {
    }

    if (passwordValidation(6, 12)) {
    }

    if (uid(5, 35)) {


    }
}