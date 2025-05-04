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
  if (answer.value === 'MTransfer') {
    document.getElementById('mCert').style.display = 'block';
  }
};
