(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('Y3MAEbI4jwmweVJZ');
})();
window.onload = function() {
    var templateId= 'template_gen1qqe' ;
    var serviceId='service_eli2pfr';
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm(serviceId,templateId, this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
