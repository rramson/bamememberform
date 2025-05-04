function enableSCS(answer) {
  console.log(answer.value);
  if (answer.value === 'Yes') {
    document.getElementById('SCS1').style.display = 'block';
  }
};

function enableSCS1(answer) {
  console.log(answer.value);
  if (answer.value === 'MTransfer') {
    document.getElementById('mCert').style.display = 'block';
  }
};
