
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'principal';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var container1 = {};	// @container
	var container3 = {};	// @container
	// @endregion// @endlock

	// eventHandlers// @lock

	container1.click = function container1_click (event)// @startlock
	{// @endlock
		fcBrain.welcome();
	};// @lock

	container3.click = function container3_click (event)// @startlock
	{// @endlock
		appds.openAdmin();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_container1", "click", container1.click, "WAF");
	WAF.addListener(this.id + "_container3", "click", container3.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
