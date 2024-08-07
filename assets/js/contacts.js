function sendMail() {
    var params = {
        from_name : document.getElementById("full-name").value,
        email_id : document.getElementById("email").value,
        object : document.getElementById("object").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_tovtr19", "template_s0f2f17", params)
        .then(alert("Messaggio inviato correttamente"));
}