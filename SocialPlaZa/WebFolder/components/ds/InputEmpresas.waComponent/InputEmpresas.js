
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'InputEmpresas';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var imageButton5 = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		if(!comprobarAbierto("Empresas")){
			newTab("Empresas","/components/ds/Empresa.waComponent");
		}
	};// @lock
	
	paisPropuesto(id);

	imageButton5.click = function imageButton5_click (event)// @startlock
	{// @endlock
		 
		var argumentos = {}; 
			
		argumentos.nom = $('#'+id+'_textField1').val();
		argumentos.ape1 = "";
	    argumentos.ape2 = "";
	    argumentos.pais = $('#'+id+'_textField8').val();
	    argumentos.entID = "";
	    argumentos.userID = "";
	  
	 //INSERTAR ENTIDAD DE LA EMPRESA
	     ds.Metodos.newRegistro(argumentos,2);
	     
	 //INSERTA LA EMPRESA
	     ds.Metodos.newRegistro(argumentos,3);
	     
	     
	     
	    alert("Guardado con exito");
	    $('#'+id+'_textField1').val("");
	    
	    if(comprobarAbierto("Empresas")){
			vCompOut2.sources.empresasCliente.all();
	   	 	cargarFiltroPaises(vCompOut2.name);
		}
	    
	    
		
	
	 	
		 
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_imageButton5", "click", imageButton5.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
