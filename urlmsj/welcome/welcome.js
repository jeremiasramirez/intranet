
     let timeErrorMessage = setTimeout(()=>{
                        let deleteErrorMessage = document.getElementById("user__name");

                        if(deleteErrorMessage){
                            deleteErrorMessage.remove();
                        }

                    }, 2200);



	// let form =  document.getElementById("form__publish");
	// let title = document.getElementById("code");
 
// let description = document.getElementById("textPublish");
	// let btnSend = document.getElementById("sendData");
// if(document.getElementById("emptyCamp")){
//     setTimeout(()=>{
//         document.getElementById("emptyCamp").remove();
//     },2000)
// }
// let counter = 0;
function messageError(){
	
 	   //validando si no hay otro mensaje de error
    if(!document.getElementById("error")){
    	// counter+=1;
    	let messageBlocked = " Intento";
        let messageError = document.createElement("p");
        

	        messageError.textContent = "Termina de completar tu perfil";
	      
	        messageError.setAttribute("class", "error");
	        messageError.setAttribute("id", "error");
	        document.body.insertAdjacentElement("beforebegin",messageError);

	       document.getElementById("error").addEventListener("click", (e)=>{
	       		window.scrollBy(0,500);
	       })
         let message = setTimeout(()=>{
                      messageError.remove()
                }, 3000);
    }


}

function validationForm(title,btn){

         let timeErrorMessage = setTimeout(()=>{
                      messageError()
                }, 1000);

}

if(!document.getElementById("male") || !document.getElementById("city")||!document.getElementById("age")){
	validationForm();
}




