
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'MainHeader';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var image3 = {};	// @image
	var image2 = {};	// @image
	// @endregion// @endlock

	// eventHandlers// @lock

	image3.click = function image3_click (event)// @startlock
	{// @endlock
		
			$$('MainComp').loadComponent('/components/fc/tpvmain.waComponent');

	};// @lock

	image2.click = function image2_click (event)// @startlock
	{// @endlock
		error = 'Esto es un mensaje';
		fcBrain.mostrarError('',error);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_image3", "click", image3.click, "WAF");
	WAF.addListener(this.id + "_image2", "click", image2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
