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
