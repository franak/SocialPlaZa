 //Array asociativo con los diferentes patrones que necesitamos para validar
var aPatron=[];
	//Cuenta de correo
	aPatron['email']=/^[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}$/;
	//Numero tarjeta de credito
	aPatron['tarjetaCredito']=/^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))(-?\s?\d{4}){3}|(3[4,7])\d{2}-?\s?\d{6}-?\s?\d{5}$/;
	//Numero telŽfono
	aPatron['telefono']=/^[0-9]{2,3}-? ?[0-9]{6,7}$/;
	//Codigo postal
	aPatron['cp']=/^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
	//Dato solo letras
	aPatron['letras']=/^[a-zA-Z\ \'\u00e9\‡Ž’—œçƒêîò–„Ÿ†]+$/;
	//Dato numerico
	aPatron['numeros']=/^[0-9]+$/;
	//Dato numerico
	aPatron['alfa']=/^[^]+$/;
	

/* Funcion que valida String
		id 		==> id del campo donde esta el valor a comprobar
		indice 	==> tipo de tado que es, para buscar en el array
						
   Utilizamos test para comprobar si el parametro valor cumple con el patron.
   La funci—n devuelve true o false, y llama a las funcione correctoValue
   o errorValue para cambiar el css */
   
function validarCampo(id1,indice,comp){
	var id='#';
	if(comp){
		 id= '#'+comp+'_';
    }
    id1=id+id1;
    if(aPatron[indice].test($(id1).val())){
    	correctoValue(id1);
        return true;
    }else{
    	errorValue(id1);
        return false;
	}
}

//Funcion para comprobar si dos campos son iguales, gestiÃ³n de errores igual que funciÃ³n validarCampo
function iguales(id1,id2,comp){
	var id='#';
	if(comp){
		 id= '#'+comp+'_';
    }
    id1=id+id1;
    id2=id+id2;
	if($(id1).val()==$(id2).val() && $(id1).val()!=""){
		correctoValue(id1);
		correctoValue(id2);
		return true;
	}else{
		errorValue(id1);
		errorValue(id2);
		return false;
	}
}


//pone el borde en rojo
function errorValue(id){
	$(id).css("border-color","#fc2525");
}

//pone el borde en gris
function correctoValue(id){
	$(id).css("border-color","#999")
}

//Funcion que mira si todos los campos son correctos.
//En el caso que lo sean devuelve true, sino, false
function comprobarFormulario(comp){
	var ok=true;
	ok*=validarCampo('inputUsuario','email',comp);
	ok*=iguales('inputPass','textField6',comp);
	return ok;
}

function registrarse(id){
	if($$(id+'_checkbox3').getValue()){
		if (comprobarFormulario(id)) {
		    var acceso=$('#'+id+'_inputUsuario').val();
		    var pass=$('#'+id+'_inputPass').val();
		    var nombre= acceso.split('@');

			if (ds.Metodos.consultarUserID(acceso)==false){
				var resultado = ds.Metodos.insertaUsuarioNuevo(acceso,pass,nombre[0]);
				if (resultado != "error") {
				$('#'+id+'_richText2').html('conectando...');
				$('#'+id+'_richText2').attr('disabled','disable');

			    	$.get("/sendMail",{tipo:'1', correo:acceso, id:resultado, password:pass}, function(data){
						if(data){
							UI.alert("GRACIAS POR REGISTRARSE\r\nCompruebe su correo electronico. Recibira un mensaje con instrucciones para completar el proceso de alta.","Enviado",function(r){
								if(r == true){
									$('#'+id+'_richText2').html('Enviado');
									self.location.search = 'origin=registro';
								}
							});
						
						
						}else{
							UI.alert("Fallo al enviar");
							$('#'+id+'_richText2').html('Registrarse');
							$('#'+id+'_richText2').attr('disabled','enable');
						}
					});
				}
			}else{
				UI.alert("El correo ya existe");
			} 
	    } else {
	        UI.alert("Revisa los campos del formularios");
	        
	    }
	}else{
		UI.alert("Debe aceptar la clausula de proteccion de datos");
	}
}


//funcion que pone el pais que detecta a traves de la IP
function paisPropuesto(id){ 
	$.getJSON('http://api.wipmania.com/jsonp?callback=?', function (data) {
		//data contiene todos los datos del pais asociado a la IP
		//data.address.country_code contiene el codigo alpha del pais	
 		ds.PaisesISO.find("Alpha = :1", 
			{ onSuccess: function(event) 
				{ 
					//busqueda del nombre del pais y asignacion al textfield correspondiente
					$$(id+"_textField8").setValue(event.entity.Name.getValue());
				}, params:[data.address.country_code] 
			}		
		);
 	});
}



//Funcion que devuelve el valor de cualquier variable pasada por get
		//name	==>	Nombre de la variable a consultar

function getUrlParam(name){
    var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
    return results[1] || 0;
}

function mostrarSizeVentana(){
	
	var anchoVentana=$(window).width();
	var altoVentana=$(window).height();
			
	var domID = Math.floor(Math.random()*100000)+1;
	
	var containerWidget = new WAF.widget.Container({
    	'id': 'cont-' + domID,
        'data-type': 'container',
        'data-lib': 'WAF',
        'class': 'waf-widget waf-container defaul',
        'data-hideonload': false
    });
    var componentDOM = document.createElement('div');
    componentDOM.setAttribute('id','cont-'+domID);
    document.body.appendChild(componentDOM);
     
	$(containerWidget).html('Ancho: '+anchoVentana+' | ');  
	$(containerWidget).append('Alto: '+altoVentana);    // returns width of browser viewport
	$(containerWidget).css('position','relative');  
	$(containerWidget).css('color','red');  

	$('#contentInt').css('color','red');  
	$('#contentInt').html('Ancho: '+anchoVentana+' | ');  
	$('#contentInt').append('Alto: '+altoVentana);    // returns width of browser viewport
}	

function nuevoRegistro(vLong1,vString1){
	//Recibo 2 variables  
	//execute a method with the callMethod function
	ds.Metodos.callMethod({method:"NuevoRegistro", 
	    onSuccess:function(event){
	         console.log(event.err);
	    }, onError:function(error){
	        console.log(error);
		},
		arguments : [vLong1, vStrin1] //Mando dos varibles. Parece que es un "array", pero no lo es...
	});	

}

function recuperar(id){
	var acceso=$("#"+id+"_mailRecuperar").val();
	
	var pass = ds.Metodos.recuperarPass(acceso);

	if (pass==false){
		UI.alert("Correo no registrado en Social Plaza");
	}else{
		$.get("/sendMail",{tipo:'2', correo:acceso, id:null, password:pass}, function(data){
			if(data){
				UI.alert("Compruebe su correo electronico","recuperaci—n",function(r){
					if(r==true){
						fcBrain.welcome();
					}
				});
			}else{
				UI.alert("Fallo al enviar");
			}
		});
	}
	
}
