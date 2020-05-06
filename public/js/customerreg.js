//Defining  a validatingg method
function validatingg() {
    var userid = document.customer.fullName
    
    /* Defining a method called allLetter with parameter(fullName) and declaring a variable called leters which sets
    a condition of values entered to be alphabets ony and not numbers*/
    function allLetter(fullName) {
        var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (fullName.value.match(letters)) {
            fullName.style.border = '2px solid green'
            return true;
        }
        else {
            // alert('Name must have alphabet characters only');
            document.getElementById('p1').innerText = "Full Name must have alphabet characters only";
            fullName.style.border = '2px solid red'
            fullName.focus();
            return false;
        }
    }

    /* Defining a method called allLetterRefName with parameter(refreesname) and declaring a variable called leters which sets
    a condition of values entered to be alphabets ony and not numbers*/
    function allLetterRefName(refreesName) {
        var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (refreesName.value.match(letters)) {
            refreesName.style.border = '2px solid green'
            return true;
        }
        else {
            // alert('Name must have alphabet characters only');
            document.getElementById('p5').innerText = "Refrees Name must have alphabet characters only";
            refreesName.style.border = '2px solid red'
            refreesName.focus();
            return false;
        }
    }

    /* Defining a method called allLetterRefName with parameter(refreesname) and declaring a variable called leters which sets
   a condition of values entered to be alphabets ony and not numbers*/
    function allLetterLc1(lc1) {
        var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (lc1.value.match(letters)) {
            lc1.style.border = '2px solid green'
            return true;
        }
        else {
            // alert('Name must have alphabet characters only');
            document.getElementById('p6').innerText = "LC1's Name must have alphabet characters only";
            lc1.style.border = '2px solid red'
            lc1.focus();
            return false;
        }
    }

    /* Defining a method called allLetterlc3 with parameter(lc3) and declaring a variable called leters which sets
   a condition of values entered to be alphabets ony and not numbers*/
    function allLetterLc3(lc3) {
        var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (lc3.value.match(letters)) {
            lc3.style.border = '2px solid green'
            return true;
        }
        else {
            // alert('Name must have alphabet characters only');
            document.getElementById('p7').innerText = "LC3's Name must have alphabet characters only";
            lc3.style.border = '2px solid red'
            lc3.focus();
            return false;
        }
    }

    /* Defining a method called allLetterStageLeaader with parameter(stageleader) and declaring a variable called leters which sets
   a condition of values entered to be alphabets ony and not numbers*/
    function allLetterStageLeader(stageleader) {
        var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (stageleader.value.match(letters)) {
            stageleader.style.border = '2px solid green'
            return true;
        }
        else {
            // alert('Name must have alphabet characters only');
            document.getElementById('p8').innerText = "Stage Leader's Name must have alphabet characters only";
            stageleader.style.border = '2px solid red'
            stageleader.focus();
            return false;
        }
    }

    /* Defining a method called alphanuericDownPayment with parameter(downPayment) and declaring a variable called leters which sets
    a condition of values entered to be alphabets ony and not alphabets*/
    function alphanumericDownPayment(downPayment) {
        var letters = /^[0-9a-zA-Z]+$/;
        if (downPayment.value.match(letters)) {
            downPayment.style.border = '2px solid green'
            return true;
        }
        else {
            // alert('Down Payment must have alphanumeric characters only');
            document.getElementById('p4').innerText = "Down Payment must have alphanumeric characters only";
            downPayment.style.border = '2px solid red'
            downPayment.focus();
            return false;
        }
    }

    /* Defining a method called alphanuericContact with parameter(contact) and declaring a variable called leters which sets
    a condition of values entered not to be numbers*/
    function allLetterContact(contact) {
        var letters = /^[0-9a-zA-Z]+$/;
        if (contact.value.match(letters)) {
            contact.style.border = '2px solid green'
            return true;
        }
        else {
            // alert('Phone number should not be less than 10 characters and not numbers');
            document.getElementById('p2').innerText = "Phone number should not be less than 10 characters and not numbers";
            contact.style.border = '2px solid red'
            contact.focus();
            return false;
        }
    }

    

    /*Defining a method called uid with parameters (mx,my) and setting a condition which which checks
     he length if the customer nin is empty or is between a given range and if the condition is met return 
     true otherwise false*/
    function uid(min, max) {
        if (nin.value.length == 0 || nin.value.length < min || nin.value.length > max) {
            // alert('Nin should be between 5 to 35 characters')
            document.getElementById('p3').innerText = "Nin should be between 5 to 35 characters";
            nin.style.border = '2px solid red'
            return false
        } else {
            nin.style.border = '2px solid green'
            return true
        }
    }


    if (allLetter(userid)) {

    }
    if (allLetterRefName(refreesName)) {
    
    }
    if (allLetterLc1(lc1)) {
    
    }
    if (allLetterLc3(lc3)) {
    
    }
    if (allLetterStageLeader(stageleader)) {
    }

    if (allLetterContact(contact)) {

    }
    if (alphanumericDownPayment(downPayment)) {

    }

    if (uid(5, 35)) {
    }


}