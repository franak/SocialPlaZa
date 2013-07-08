
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'recovery';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var richText1 = {};	// @richText
	var mailRecuperar = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock
	
	$(":input").bind('keypress', function(e) {
		if(e.keyCode==13){
			recuperar(id);
		}
	});


	richText1.click = function richText1_click (event)// @startlock
	{// @endlock
		recuperar(id);
			
	};// @lock

	mailRecuperar.focus = function mailRecuperar_focus (event)// @startlock
	{// @endlock
		fcBrain.verLabel("richText5",id);
	};// @lock

	mailRecuperar.blur = function mailRecuperar_blur (event)// @startlock
	{// @endlock
		fcBrain.verLabel("richText5",id);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_richText1", "click", richText1.click, "WAF");
	WAF.addListener(this.id + "_mailRecuperar", "focus", mailRecuperar.focus, "WAF");
	WAF.addListener(this.id + "_mailRecuperar", "blur", mailRecuperar.blur, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
