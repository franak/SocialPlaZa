
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {
	

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'loginform';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		var currentscroll = 0;

		$(':input').bind('focus',function() {
		    currentscroll = $(window).scrollTop();
		});

		$(':input').bind('blur',function() {
		    $(window).scrollTop(0);  
		});
		
	// @region namespaceDeclaration// @startlock
	var richText14 = {};	// @richText
	var richText10 = {};	// @richText
	var checkbox2 = {};	// @checkbox
	var usernameInput = {};	// @textField
	var richText3 = {};	// @richText
	var passwordInput = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	richText14.click = function richText14_click (event)// @startlock
	{// @endlock
		fcBrain.openRecuperar(id);
	};// @lock
	
	$('#'+id+'_usernameInput').focus();
	
	/*$(":input").bind('keypress', function(e) {
	if(e.keyCode==13){
		fcBrain.login(id);
		}
	});	*/
	
	richText10.touchend = function richText10_touchend (event)// @startlock
	{// @endlock
		fcBrain.openAltaUsuario();
	};// @lock

	richText10.click = function richText10_click (event)// @startlock
	{// @endlock
		fcBrain.openAltaUsuario();
	};// @lock

	if (localStorage.getItem("user") != null) {
		$("#"+id+"_usernameInput").val(localStorage.user);
	}	

	checkbox2.change = function checkbox2_change (event)// @startlock
	{// @endlock
		localStorage.removeItem("user");	
	};// @lock

	usernameInput.focus = function usernameInput_focus (event)// @startlock
	{// @endlock
		fcBrain.verLabel("richText5",id);
	};// @lock

	usernameInput.blur = function usernameInput_blur (event)// @startlock
	{// @endlock
		fcBrain.verLabel("richText5",id);
	};// @lock

	richText3.touchend = function richText3_touchend (event)// @startlock
	{// @endlock
		fcBrain.login(id);
	};// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock
		fcBrain.login(id);
		$(window).scrollTop(0); 
	};// @lock

	passwordInput.focus = function passwordInput_focus (event)// @startlock
	{// @endlock
		fcBrain.verLabel("richText6",id);
	};// @lock

	passwordInput.blur = function passwordInput_blur (event)// @startlock
	{// @endlock
		fcBrain.verLabel("richText6",id);
	};// @lock
	



/*
--------------Funcion para iPad => para volver a su posicion original cuando salga el teclado-------------------
*/
var currentscroll = 0;

$(':input').bind('focus',function() {
    currentscroll = $(window).scrollTop();
});

$(':input').bind('blur',function() {
    if(currentscroll != $(window).scrollTop()){

    $(window).scrollTop(currentscroll);

    }
});
	


	// @region eventManager// @startlock
	WAF.addListener(this.id + "_richText3", "touchend", richText3.touchend, "WAF");
	WAF.addListener(this.id + "_richText10", "touchend", richText10.touchend, "WAF");
	WAF.addListener(this.id + "_richText14", "click", richText14.click, "WAF");
	WAF.addListener(this.id + "_richText10", "click", richText10.click, "WAF");
	WAF.addListener(this.id + "_checkbox2", "change", checkbox2.change, "WAF");
	WAF.addListener(this.id + "_usernameInput", "focus", usernameInput.focus, "WAF");
	WAF.addListener(this.id + "_usernameInput", "blur", usernameInput.blur, "WAF");
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	WAF.addListener(this.id + "_passwordInput", "focus", passwordInput.focus, "WAF");
	WAF.addListener(this.id + "_passwordInput", "blur", passwordInput.blur, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
