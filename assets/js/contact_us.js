
/**
 * Sends contact form data to email(developer) by submiting 
 * Code written by the help of the official EmailJS tuttorial https://www.emailjs.com/docs/tutorial/creating-contact-form/
 */
window.onload = function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('-Y3MAEbI4jwmweVJZ');
    var templateId = "template_crazy_cars";
    var serviceId = "service_crazy_cars";
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm(serviceId, templateId, this)
            .then(function () {
                alert("The message was sended")
                console.log('SUCCESS!');
            }, function (error) {
                alert("FAILED...ERROR")
                console.log('FAILED...', error);
            });
    });
}
