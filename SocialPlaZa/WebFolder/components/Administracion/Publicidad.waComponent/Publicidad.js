﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Publicidad';
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
	var button6 = {};	// @button
	var button5 = {};	// @button
	var button9 = {};	// @button
	var button8 = {};	// @button
	var button7 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		sources.publicidad.serverRefresh({
			onSuccess:function(){
				$$(id+"_dialog1").closeDialog();
			}
		});
		
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		sources.publicidad.save({
			onSuccess:function(){
				sources.publicidad.serverRefresh();
				$$(id+"_dialog1").closeDialog();
			}
		});
	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		sources.publicidad.removeCurrent();
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		$("body").append($("#"+id+"_dialog1"));
		$("#"+id+"_dialog1").css("top","20px");
		$$(id+"_dialog1").displayDialog();
	};// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		sources.publicidad.newEntity();
		$("body").append($("#"+id+"_dialog1"));
		$("#"+id+"_dialog1").css("top","20px");
		$$(id+"_dialog1").displayDialog();
		
	};// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		$("body").append($("#"+id+"_dialog1"));
		$("#"+id+"_dialog1").css("top","20px");
		$$(id+"_dialog1").displayDialog();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.publicidad.save();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button6", "click", button6.click, "WAF");
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_button9", "click", button9.click, "WAF");
	WAF.addListener(this.id + "_button8", "click", button8.click, "WAF");
	WAF.addListener(this.id + "_button7", "click", button7.click, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
