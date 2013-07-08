
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'AltaUsuario';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	// @region namespaceDeclaration// @startlock
	var authorize_button = {};	// @richText
	var inputUsuario = {};	// @textField
	var textField6 = {};	// @textField
	var richText3 = {};	// @richText
	var richText2 = {};	// @richText
	var inputPass = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	authorize_button.click = function authorize_button_click (event)// @startlock
	{// @endlock
		login();
	};// @lock

	inputUsuario.focus = function inputUsuario_focus (event)// @startlock
	{// @endlock
		fcBrain.verLabel("richText14",id);
		getHtmlObj('helptextu').html('<p class="alert alert-info">Este será tu nombre de acceso</p>').slideToggle();

	};// @lock

	inputUsuario.blur = function inputUsuario_blur (event)// @startlock
	{// @endlock
		fcBrain.verLabel("richText14",id);
		getHtmlObj('helptextu').slideToggle();

	};// @lock

	textField6.blur = function textField6_blur (event)// @startlock
	{// @endlock
		fcBrain.verLabel("richText16",id);

	};// @lock

	textField6.focus = function textField6_focus (event)// @startlock
	{// @endlock
		fcBrain.verLabel("richText16",id);

	};// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock

	};// @lock

	richText2.click = function richText2_click (event)// @startlock
	{// @endlock
		registrarse(id);

	};// @lock

	inputPass.blur = function inputPass_blur (event)// @startlock
	{// @endlock
		fcBrain.verLabel("richText15",id);
		getHtmlObj('helptextp').slideToggle();

	};// @lock

	inputPass.focus = function inputPass_focus (event)// @startlock
	{// @endlock
		fcBrain.verLabel("richText15",id);
		getHtmlObj('helptextp').html('<p class="alert alert-info">Esta será tu contraseña</p>').slideToggle();

	};// @lock

	$(":input").bind('keypress', function(e) {
		if(e.keyCode==13){
			registrarse(id);
		}
	});

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_authorize_button", "click", authorize_button.click, "WAF");
	WAF.addListener(this.id + "_inputUsuario", "focus", inputUsuario.focus, "WAF");
	WAF.addListener(this.id + "_inputUsuario", "blur", inputUsuario.blur, "WAF");
	WAF.addListener(this.id + "_textField6", "blur", textField6.blur, "WAF");
	WAF.addListener(this.id + "_textField6", "focus", textField6.focus, "WAF");
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	WAF.addListener(this.id + "_richText2", "click", richText2.click, "WAF");
	WAF.addListener(this.id + "_inputPass", "blur", inputPass.blur, "WAF");
	WAF.addListener(this.id + "_inputPass", "focus", inputPass.focus, "WAF");
	// @endregion// @endlock

	};// @lock

}// @startlock
return constructor;
})();// @endlock



