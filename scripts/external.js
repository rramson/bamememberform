function validateEmail() {
    var email = document.getElementById("emailInput").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
}

IMask(document.getElementById('PhoneID1'), {
    mask: '(000) 000-0000'
});

IMask(document.getElementById('PhoneID2'), {
    mask: '(000) 000-0000'
});

IMask(document.getElementById('PhoneID3'), {
    mask: '(000) 000-0000'
});

IMask(document.getElementById('PhoneID4'), {
    mask: '(000) 000-0000'
});

IMask(document.getElementById('PhoneID5'), {
    mask: '(000) 000-0000'
});

(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
