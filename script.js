document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name && email && message) {
        document.getElementById("formStatus").innerText = "✅ Message sent successfully!";
        document.getElementById("formStatus").style.color = "green";
        this.reset();
    } else {
        document.getElementById("formStatus").innerText = "❌ Please fill all fields!";
        document.getElementById("formStatus").style.color = "red";
    }
});
