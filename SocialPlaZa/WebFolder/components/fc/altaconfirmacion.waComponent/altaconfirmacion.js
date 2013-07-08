
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'altaconfirmacion';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var richText6 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock

	richText6.click = function richText6_click (event)// @startlock
	{// @endlock
		$$('MainComp').removeComponent();
		$$('MainComp').loadComponent('/components/commons/principal.waComponent');
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_richText6", "click", richText6.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
