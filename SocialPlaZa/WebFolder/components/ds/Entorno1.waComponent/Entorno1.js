
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Entorno1';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var richText5 = {};	// @richText
	var richText4 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock
	
	function comprobarAbierto(title){
	
		var t = $$(id+"_tabView1").countTabs();
			
			for (var i = 2; i <= t; i++) {
				$$(id+"_tabView1").selectTab(i);
				var tab = $$(id+"_tabView1").getSelectedTab();
				if (tab.menuItem.id == title){
					return true;
					
				}
			}
				
		return false;
		
	}
	

	richText5.click = function richText5_click (event)// @startlock
	{// @endlock
		if(!comprobarAbierto("Empresa")){
			newTab("Empresa","/components/ds/Empresa.waComponent", id);
		} 

	};// @lock

	richText4.click = function richText4_click (event)// @startlock
	{// @endlock
		if(!comprobarAbierto("Usuario")){
			newTab("Usuario","/components/ds/Usuario.waComponent", id);
		} 
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_richText5", "click", richText5.click, "WAF");
	WAF.addListener(this.id + "_richText4", "click", richText4.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
