
function validarNombre(){
	
	var nombre=document.getElementById("nombre").value;//obtiene el valor de la caja de texto.
	
	var elem=document.getElementById("nombre");
	
		 if(nombre==""){
			 elem.style.borderColor="red";
			 elem.value="";
			 elem.focus();
			 }else{
				 elem.style.borderColor="";
				 }
}


function validarApellidos(){
	
	var apellido=document.getElementById("apellido").value;//obtiene el valor de la caja de texto.
	
	var elem=document.getElementById("apellido");
	
		 if(apellido==""){
			 elem.style.borderColor="red";
			 elem.value="";
			 elem.focus();
			 }else{
				 elem.style.borderColor="";
				 }
}



function validarEdad(){
			var edad=document.getElementById("edad").value;
			var elem=document.getElementById("edad");
			    
				if((edad==="")||(isNaN(edad))){
					elem.style.borderColor="Red";
					elem.focus();
					}else{
						elem.style.borderColor="";
						}
			   }


function validarcom(){
	
	var com=document.getElementById("com").value;//obtiene el valor de la caja de texto.
	
	var elem=document.getElementById("com");
	
		 if(com==""){
			 elem.style.borderColor="red";
			 elem.value="";
			 elem.focus();
			 }else{
				 elem.style.borderColor="";
				 }
}





