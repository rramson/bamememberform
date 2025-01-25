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

function addRow() {

    var houseTable = document.getElementById("houseHold");
    
    var row = houseTable.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    var houseName = document.createElement("input");
    houseName.type="text"
    houseName.id="housename="
    
    var houseDOB = document.createElement("input");
    houseDOB.type ="date"
    houseDOB.id="houseDOB"
    
    var houseGender=document.createElement("input");
    var houseGenderL=document.createElement("label");
    houseGender.type="radio";
    houseGender.name="GenderGroup";
    houseGenderL.value="Male";
    houseGenderL.textContent="Male";
    
    var houseGender2=document.createElement("input");
    var houseGenderL2=document.createElement("label");
    houseGender2.type="radio";
    houseGender2.name="GenderGroup";
    houseGenderL2.value="Female";
    houseGenderL2.textContent="Female";
    
    var houseSave=document.createElement("input");
    var houseSaveL=document.createElement("label");
    houseSave.type="radio";
    houseSave.name="SavedGroup";
    houseSaveL.value="Yes";
    houseSaveL.textContent="Yes";
    
    var houseSave2=document.createElement("input");
    var houseSaveL2=document.createElement("label");
    houseSave2.type="radio";
    houseSave2.name="SavedGroup";
    houseSaveL2.value="No";
    houseSaveL2.textContent="No";
    
    var houseRel = document.createElement("input");
    houseRel.type="text"
    houseRel.id="housename="

    cell1.appendChild(houseName);
    cell2.appendChild(houseDOB);
    cell3.appendChild(houseGender);
    cell3.appendChild(houseGenderL);
    cell3.appendChild(houseGender2);
    cell3.appendChild(houseGenderL2);
    cell4.appendChild(houseSave);
    cell4.appendChild(houseSaveL);
    cell4.appendChild(houseSave2);
    cell4.appendChild(houseSaveL2);
    cell5.appendChild(houseRel);
}

function delRow() {
    document.getElementById("houseHold").deleteRow(1);
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
