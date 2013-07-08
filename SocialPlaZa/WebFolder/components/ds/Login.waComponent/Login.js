
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Login';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var textField1 = {};	// @textField
	var richText3 = {};	// @richText
	var richText4 = {};	// @richText
	var textField2 = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock
	
	$(":input").bind('keypress', function(e) {
	if(e.keyCode==13){
		loguearse(id);
		}
	});	

	textField1.blur = function textField1_blur (event)// @startlock
	{// @endlock
		//mostrar("richText5",id);
		fcBrain.verLabel("richText5",id);
	};// @lock

	textField1.focus = function textField1_focus (event)// @startlock
	{// @endlock
		//mostrar("richText5",id);
		fcBrain.verLabel("richText5",id);
	};// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock

		loguearse(id);
	};// @lock

	richText4.click = function richText4_click (event)// @startlock
	{// @endlock
		fcBrain.welcome();
	};// @lock

	textField2.blur = function textField2_blur (event)// @startlock
	{// @endlock
		//mostrar("richText6",id);
		fcBrain.verLabel("richText6",id);
	};// @lock

	textField2.focus = function textField2_focus (event)// @startlock
	{// @endlock
		//mostrar("richText6",id);
		fcBrain.verLabel("richText6",id);
	};// @lock
			
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textField2", "blur", textField2.blur, "WAF");
	WAF.addListener(this.id + "_textField1", "blur", textField1.blur, "WAF");
	WAF.addListener(this.id + "_textField1", "focus", textField1.focus, "WAF");
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	WAF.addListener(this.id + "_richText4", "click", richText4.click, "WAF");
	WAF.addListener(this.id + "_textField2", "focus", textField2.focus, "WAF");
	// @endregion// @endlock

	};// @lock

}// @startlock
return constructor;
})();// @endlock
