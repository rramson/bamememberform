function showOtherTxt(){
		
    var OTBox = document.getElementById("OT");
    var OTCondBox = document.getElementById("condOT")

    if (OTBox.checked) {
        OTCondBox.style.display="block";
    }
    else {
        OTCondBox.style.display="none";
    }
}

function validateEmail(emailId) {
var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(emailId.value.match(mailformat))
        {
            document.form1.text1.focus();
            return true;
        }
    else
        {
            alert("Invalid email address.");
            document.form1.text1.focus();
            return false;
        }
}

function validateEmail() {
    var email = document.getElementById("emailInput").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
}

// phone number format: nnn-nnn-nnnn
function format_phone(textfield){
    var val=textfield.value;
    val=val.replace(/[^\d]/g, ''); // remove all non-digits
    if(val.length>10) // crop surplus characters
    {
        val=val.substring(0,10);
    }

    if(val.length>2) // first dash
    {
        val=val.replace(val.substring(0,3), val.substring(0,3)+'-');
    }

    if(val.length>6) // second dash
    {
        val=val.replace(val.substring(3,7), val.substring(3,7)+'-');
    }
    textfield.value=val;
}
