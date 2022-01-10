function sendMail(params) {
    var tempParams = {
        name: document.getElementById("firstname").value + " " + document.getElementById("lastname").value,
        email:document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    emailjs.send('service_r504sbn', 'template_t2ei16h', tempParams).then(res => {
        console.log(res.status)
    })
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
