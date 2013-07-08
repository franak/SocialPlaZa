
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'fcPaises';
	// @endregion// @endlock
	var gridPaises = getHtmlId('dataGrid1');
	//var showError = getHtmlObj('errorDIV');

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var bTodos = {};	// @button
	var bAislar = {};	// @button
	var bImportar = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var r = confirm ('¿Estás Seguro?');
		if (r==true){
			$comp.sources.paisesISO.removeCurrent();
		}
	};// @lock

	bTodos.click = function bTodos_click (event)// @startlock
	{// @endlock
		//$comp.sources.paisesISO.all();
		WAF.ds.PaisesISO.all();
	};// @lock

	bAislar.click = function bAislar_click (event)// @startlock
	{// @endlock
		fcBrain.mostrarError('hola');
		var row = $$(gridPaises).getSelectedRows();
		$$(gridPaises).reduceToSelected();
		//$comp.destroy();
		$comp.rebuild();
		
	
	};// @lock

	bImportar.click = function bImportar_click (event)// @startlock
	{// @endlock
		$.get("/import", function(data){
	  		console.log("Data Loaded: " + data);
	 		alert(data);
	 		//$$('gridPaises').redraw();
	 	
		 	$comp.sources.paisesISO.all();	
		 	$comp.rebuild();
				
		});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_bTodos", "click", bTodos.click, "WAF");
	WAF.addListener(this.id + "_bAislar", "click", bAislar.click, "WAF");
	WAF.addListener(this.id + "_bImportar", "click", bImportar.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
