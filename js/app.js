/*  ---------------------------------------------------
    Template Name: Phozogy
    Description:  Phozogy photography HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */
document.querySelector(".email-form").addEventListener("submit",
submitForm)

function submitForm(e){
  
   e.preventDefault();
  var name = document.getElementById("Nombre").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
   /* var email = document.querySelector("email").value;
    var message = document.querySelector("message").value;*/

 sendEmail(name, email, message)

    
}

//send email info
function sendEmail(name, email, message){
    
  
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "viajaenturquia@gmail.com",
        Password : "capadoccia2021",
        To : 'viajaenturquia@gmail.com',
        From : "viajaenturquia@gmail.com",
        Subject : 'prueba',
        Body : "hola"
    }).then(
      message => alert('mail has been succesfully send')

    );
}
