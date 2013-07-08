
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'dsEntidades';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	

		
		
	
		
		
	// Listener al datasources entornos con el evento onElementSaved se situe en el elemento guardado
	$comp.sources.entornos.addListener("onElementSaved", function(event) {
	    $comp.sources.entornos.select(event.position);
	});
	
	
	
	
	$comp.sources.entornos.all();
	
	
	vCompEntidades = $comp;
	
	//cargarEntorno($comp);
	
	
	
	
	// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		if (confirm("¿Desea modificar esta Entidad?")) {
			
			$comp.sources.entidadesCollection.save();
			
		} else {
			
			$comp.sources.entornos.serverRefresh();
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
