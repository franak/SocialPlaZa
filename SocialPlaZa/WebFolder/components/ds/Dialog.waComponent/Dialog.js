
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Dialog';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var fileUpload2 = {};	// @fileUpload
	var richText5 = {};	// @richText
	var button1 = {};	// @button
	var fileUpload1 = {};	// @fileUpload
	var richText3 = {};	// @richText
	var richText2 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock

	fileUpload2.filesUploaded = function fileUpload2_filesUploaded (event)// @startlock
	{// @endlock
		$comp.sources.entidades.save({
			onSuccess: function(){
				cargarFichaEmpresa();
			}
		});
		
	};// @lock

	richText5.click = function richText5_click (event)// @startlock
	{// @endlock
		$("#"+id+"_dialog2").css("top",200);
		$$(id+"_dialog2").hide();
		appds.closeDialogEmpresa();		
	};// @lock
	
	if(data.userData.myParameter == "Empresa"){
		
		cargarFichaEmpresa();
		$$(id+"_dialog2").hide();
		$$(id+"_dialog1").show();
	}else{
		$$(id+"_dialog1").hide();
		$("#"+id+"_dialog2").css("top",100);
		$$(id+"_dialog2").show();
	}

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$comp.sources.entidades.save({
			onSuccess: function(){
				cargarFichaEmpresa();
			}
		});
	};// @lock

	fileUpload1.filesUploaded = function fileUpload1_filesUploaded (event)// @startlock
	{// @endlock
		$comp.sources.entidades.save({
			onSuccess: function(){
				cargarFichaEmpresa();
			}
		});
		
	};// @lock

	

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock
		
		$comp.sources.entidades.Nombre = $$(id+"_textField1").getValue();
		$comp.sources.entidades.Direccion = $$(id+"_textField2").getValue();
		$comp.sources.entidades.NIF = $$(id+"_textField3").getValue();
		$comp.sources.entidades.CodigoPostal = $$(id+"_textField4").getValue();
		
		$comp.sources.entidades.save({
			onSuccess:function() {
				ds.Entidades.asignarPais($comp.sources.entidades.ID,$$(id+"_textField5").getValue());
				var dialogo = getHtmlId("dialog1");//Obtengo el dialogo widget
				$$(id+"_dialog1").hide();
				appds.closeDialogEmpresa();	
			}
		});
		
	};// @lock

	richText2.click = function richText2_click (event)// @startlock
	{// @endlock
		$$(id+"_dialog1").hide();
		appds.closeDialogEmpresa();		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_fileUpload2", "filesUploaded", fileUpload2.filesUploaded, "WAF");
	WAF.addListener(this.id + "_richText5", "click", richText5.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_fileUpload1", "filesUploaded", fileUpload1.filesUploaded, "WAF");
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	WAF.addListener(this.id + "_richText2", "click", richText2.click, "WAF");
	// @endregion// @endlock

	};// @lock
	
	function cargarFichaEmpresa(){
		
		$comp.sources.entidades.all({
			onSuccess:function (){
				$comp.sources.entidades.select(1);
				var posicionPais = ds.PaisesISO.devolverPos($comp.sources.entidades.ID);
				if(posicionPais != false){
					$comp.sources.paisesISO.select(posicionPais);
				}
			}
		});
		
		
	}


}// @startlock
return constructor;
})();// @endlock
