
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'InputUsuario';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var button2 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		appds.openUsuario();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
				
		nom = $('#'+id+'_textField4').val();
		ape1 = $('#'+id+'_textField5').val();
	    ape2 = $('#'+id+'_textField6').val();
	    tacceso =  $('#'+id+'_textField3').val();
	    acceso = $('#'+id+'_textField1').val();
	    pass = $('#'+id+'_textField2').val();
	   
	 //INSERTAR NUEVO USUARIO
	     ds.Metodos.insertaUsuarioEntidad(acceso,pass,tacceso,nom,ape1,ape2);
	
	     alert("Guardado con exito");
	     
	     appds.openUsuario();
	};// @lock

	

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
