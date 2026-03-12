// Yeh JavaScript code aap apni website ko interactive banane ke liye use kar sakte ho.
// Filhaal yeh console mein ek message print karega.

console.log("Website load ho gayi! 😊");

// Example: click event sunna
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            alert('Section par click kiya: ' + this.querySelector('h2').innerText);
        });
    });
});