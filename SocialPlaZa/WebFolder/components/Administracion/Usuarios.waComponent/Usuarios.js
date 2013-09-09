
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Usuarios';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
	var button7 = {};	// @button
	var button8 = {};	// @button
	var button9 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		sources.usuarios.serverRefresh();
				$$(id+"_dialog1").closeDialog();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.usuarios.save({
			onSuccess:function(){
				sources.usuarios.serverRefresh();
				$$(id+"_dialog1").closeDialog();
			}
		});
	};// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		sources.usuarios.newEntity();
		$("body").append($("#"+id+"_dialog1"));
		$("#"+id+"_dialog1").css("top","20px");
		$$(id+"_dialog1").displayDialog();
		
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		$("body").append($("#"+id+"_dialog1"));
		$("#"+id+"_dialog1").css("top","20px");
		$$(id+"_dialog1").displayDialog();
	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		sources.usuarios.removeCurrent();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_button7", "click", button7.click, "WAF");
	WAF.addListener(this.id + "_button8", "click", button8.click, "WAF");
	WAF.addListener(this.id + "_button9", "click", button9.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
