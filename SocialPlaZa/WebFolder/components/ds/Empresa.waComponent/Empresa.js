
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Empresa';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dataGrid2 = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	cargarFiltroPaises(id);
	
	
	

	//$comp.sources.paisesISO.query("Name = :1");

	vCompOut2 = $comp;

	dataGrid2.onRowClick = function dataGrid2_onRowClick (event)// @startlock
	{// @endlock
		comprobarEntidad($comp);
	};// @lock

	dataGrid2.onRowDblClick = function dataGrid2_onRowDblClick (event)// @startlock
	{// @endlock
		
		comprobarEntidad($comp);
		
		$("#"+id+"_container2").show(1000);
	};// @lock
	
	
	


	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dataGrid2", "onRowClick", dataGrid2.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid2", "onRowDblClick", dataGrid2.onRowDblClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
