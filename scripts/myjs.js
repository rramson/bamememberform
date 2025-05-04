function enableSCS(answer) {
  console.log(answer.value);
  if (answer.value === 'Yes') {
    document.getElementById('SCS1').style.display = 'block';
  }
  else if (answer.value === 'No') {
    document.getElementById('SCS1').style.display = 'none';
  }
  else if (answer.value === 'NoWantMoreInfo') {
    document.getElementById('SCS1').style.display = 'none';
  }
  else {
    document.getElementById('SCS1').style.display = 'none';
  }
};

function enableSCS1(answer) {
  console.log(answer.value);
  if (answer.value === 'MethodistTransfer') {
    document.getElementById('mCert').style.display = 'block';
  }
  else if (answer.value === 'NewMember') {
    document.getElementById('mCert').style.display = 'none';
  }
  else if (answer.value === 'WatchCare') {
    document.getElementById('mCert').style.display = 'none';
  }
  else if (answer.value === 'ReturningMember') {
    document.getElementById('mCert').style.display = 'none';
  }  
  else {
    document.getElementById('mCert').style.display = 'none';
  }
};

function enableAFI(answer) {
  console.log(answer.value);
  if (answer.value === 'Yes') {
    document.getElementById('AFI1').style.display = 'block';
    document.getElementById('AFI2').style.display = 'block';
    document.getElementById('AFI3').style.display = 'block';
    document.getElementById('AFI4').style.display = 'block';
  }
  else if (answer.value === 'No') {
    document.getElementById('AFI1').style.display = 'none';
    document.getElementById('AFI2').style.display = 'none';
    document.getElementById('AFI3').style.display = 'none';
    document.getElementById('AFI4').style.display = 'none';
  }  
  else {
    document.getElementById('AFI1').style.display = 'none';
    document.getElementById('AFI2').style.display = 'none';
    document.getElementById('AFI3').style.display = 'none';
    document.getElementById('AFI4').style.display = 'none';
  }
};
