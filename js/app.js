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

document.querySelector(".catalog-form").addEventListener("submit",
sendCatalog)

function submitForm(e){
  
   e.preventDefault();


  

/*
  var paquete=  document.getElementById("Paquete").value,
   var fecha = document.getElementById("Fecha").value,
   var observaciones = document.getElementById("mensaje").value
  */
  
    
   
var temp={  
service:document.getElementById("Servicio").value,
Name: document.getElementById("name").value,
package:  document.getElementById("Paquete").value,
date: document.getElementById("Fecha").value,
message: document.getElementById("mensaje").value,
surname: document.getElementById("surname").value,
Guest: document.getElementById("guest").value,
Adult:document.getElementById("adult").value,
Phone:document.getElementById("phone").value,
email:  document.getElementById("email").value,
}

 //sendEmail(name, email, message)
 document.getElementById("loading").style.visibility = "visible"

 emailjs.send("service_c3xrijf","template_n67m47d",temp)
.then(function(res){
    swal({
        title: "Tour agendado!",
        text: "Bienvenido a turquia!",
        icon: "success",
        button: "ok!",
      })
      document.getElementById("name").value=''
      document.getElementById("Fecha").value =''
      document.getElementById("mensaje").value=''
      document.getElementById("surname").value=''
       document.getElementById("email").value=''
        document.getElementById("mensaje").value=''
        document.getElementById("loading").style.visibility = "hidden"
        document.getElementById("adult").value='adult'
        document.getElementById("guest").value='0'
        document.getElementById("phone").value=''
    
})


    
}

function sendCatalog(e){
  


 alert('hi')

/*
 var paquete=  document.getElementById("Paquete").value,
  var fecha = document.getElementById("Fecha").value,
  var observaciones = document.getElementById("mensaje").value
 */
 
   
  


//sendEmail(name, email, message)



   
}
//send email info
