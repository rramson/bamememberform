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

document.querySelectorAll('input[name="maritalStatus"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const spouseDiv = document.getElementById('spouseInfo');
        if (this.value === 'married') {
            spouseDiv.style.display = 'block'; // or 'inline' depending on your layout
        } else {
            spouseDiv.style.display = 'none';
        }
    });
});

// Optional:  Handle initial state of the form (if "married" is selected by default)
if (document.getElementById('married').checked) {
    document.getElementById('spouseInfo').style.display = 'block';
}

const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(form);
    // Add any other logic to process the data (e.g., send it to a server)
    console.log(formData);  // or send it to your server

    //Example using fetch API
    // fetch('/your-server-endpoint', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //      console.log('Success:', data);
    //  })
    //  .catch(error => {
    //      console.error('Error:', error);
    //  });
});
