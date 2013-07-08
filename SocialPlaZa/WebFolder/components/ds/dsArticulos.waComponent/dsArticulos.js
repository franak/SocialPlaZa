
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'dsArticulos';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	//cargarEntorno($comp);
	
	$comp.sources.entornos.all();
	
	vCompArticulos = $comp;
	
	sources.vCompArticulos.sync();

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock

	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
