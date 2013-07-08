
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Usuario';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var textField8 = {};	// @textField
	var imageButton4 = {};	// @buttonImage
	var button1 = {};	// @button
	var imageButton10 = {};	// @buttonImage
	var imageButton2 = {};	// @buttonImage
	var imageButton9 = {};	// @buttonImage
	var imageButton7 = {};	// @buttonImage
	var imageButton3 = {};	// @buttonImage
	var imageButton5 = {};	// @buttonImage
	var dataGrid2 = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	textField8.keyup = function textField8_keyup (event)// @startlock
	{// @endlock
		$comp.sources.usuariosCliente.query("NombreAcceso = :1", $$(id+"_textField8").getValue() + "*");
	};// @lock

	imageButton4.click = function imageButton4_click (event)// @startlock
	{// @endlock
		if(confirm("Deseas eliminar el registro")){
			$comp.sources.usuariosCliente.removeCurrent();
			$comp.sources.entidades.removeCurrent();
			$comp.sources.usuariosCliente.all();
			$("#"+id+"_container1").hide(1000);
		}
		
	};// @lock
	
	vCompOut = $comp;

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		if(!comprobarAbierto("InPut")){
			newTab("InPut","/components/ds/InputUsuario.waComponent");
		}

	};// @lock
	

	imageButton10.click = function imageButton10_click (event)// @startlock
	{// @endlock
		consultaEntidades();
	};// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		consultaEntidades();
	};// @lock

	imageButton9.click = function imageButton9_click (event)// @startlock
	{// @endlock
		consultaEntidades();
	};// @lock

	imageButton7.click = function imageButton7_click (event)// @startlock
	{// @endlock
		consultaEntidades();
	};// @lock

	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock
		$("#"+id+"_container1").hide(1000);
	};// @lock
	
	function consultaEntidades(){
	
		argumentos={};
		argumentos.key = $comp.sources.usuariosCliente.ID;
		
		//GET ENTIDAD DEL USUARIO
		
		var identificador = ds.Metodos.getInformacion(argumentos,1);
	
		
		$comp.sources.entidades.query("ID ="+identificador);
	}

	imageButton5.click = function imageButton5_click (event)// @startlock
	{// @endlock
		$comp.sources.usuariosCliente.save();
		$comp.sources.entidades.save();
		$comp.sources.usuariosCliente.all();
		$("#"+id+"_container1").hide(1000);
	};// @lock

	dataGrid2.onRowClick = function dataGrid2_onRowClick (event)// @startlock
	{// @endlock
		consultaEntidades();
	};// @lock

	dataGrid2.onRowDblClick = function dataGrid2_onRowDblClick (event)// @startlock
	{// @endlock
		consultaEntidades();
		
		$("#"+id+"_container1").show(1000);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textField8", "keyup", textField8.keyup, "WAF");
	WAF.addListener(this.id + "_imageButton4", "click", imageButton4.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_imageButton10", "click", imageButton10.click, "WAF");
	WAF.addListener(this.id + "_imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener(this.id + "_imageButton7", "click", imageButton7.click, "WAF");
	WAF.addListener(this.id + "_imageButton9", "click", imageButton9.click, "WAF");
	WAF.addListener(this.id + "_imageButton3", "click", imageButton3.click, "WAF");
	WAF.addListener(this.id + "_dataGrid2", "onRowClick", dataGrid2.onRowClick, "WAF");
	WAF.addListener(this.id + "_imageButton5", "click", imageButton5.click, "WAF");
	WAF.addListener(this.id + "_dataGrid2", "onRowDblClick", dataGrid2.onRowDblClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
