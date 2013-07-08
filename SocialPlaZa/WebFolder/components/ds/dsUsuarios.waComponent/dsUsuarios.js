
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'dsUsuarios';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	
	
	$comp.sources.entornos.all();
	
	vCompUsuarios = $comp;
	
	sources.vCompUsuarios.sync();
	
	
	
	
	
	
	
	
	

	// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		appds.openInputUsuario();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
