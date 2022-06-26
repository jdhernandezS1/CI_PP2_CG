
/**
 * Sends contact form data to email(developer) by submiting 
 * Code written by the help of the official EmailJS tuttorial https://www.emailjs.com/docs/tutorial/creating-contact-form/
 */
window.onload = function () {
    // the id is on https://dashboard.emailjs.com/admin/account
    emailjs.init('-Y3MAEbI4jwmweVJZ');
    var templateId = "template_crazy_cars";
    var serviceId = "service_crazy_cars";
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm(serviceId, templateId, this)
            .then(function () {
                alert("The message was sended");
                thanksMessage();
            }, function (error) {
                alert("FAILED...ERROR");
            });
        
    });
}
function thanksMessage() {
    let newHtml = `
    <div id="thanksWrapper" class="thanksMessage>
        <div class="thanksDiv thanksImg">
        <p class="thanksMessage">Thank you for let us your opinion. </p>
        </div> 
        <div class="thanksDiv">  
        <a href="index.html" class="">Return to Home page</a>  
        </div>
    </div>
        `;
    document.getElementById("formId").innerHTML = newHtml;
}