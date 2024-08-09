function sendMail() {
    if ((document.getElementById("full-name").value == "") || 
    (document.getElementById("email").value == "") || 
    (document.getElementById("object").value == "") || 
    (document.getElementById("message").value == "")) {
        alert("Compila i campi obbligatori")
    } else {
        var params = {
            from_name : document.getElementById("full-name").value,
            email_id : document.getElementById("email").value,
            object : document.getElementById("object").value,
            message : document.getElementById("message").value
        }
    
        emailjs.send("service_tovtr19", "template_s0f2f17", params)
            .then(alert("Messaggio inviato correttamente"));
    } 
}