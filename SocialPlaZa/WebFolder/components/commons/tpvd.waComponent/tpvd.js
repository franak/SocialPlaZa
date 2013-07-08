
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'tpvd';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var imageButton6 = {};	// @buttonImage
	var dataGrid1 = {};	// @dataGrid
	var imageButton5 = {};	// @buttonImage
	var imageButton4 = {};	// @buttonImage
	var imageButton1 = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	imageButton6.click = function imageButton6_click (event)// @startlock
	{// @endlock
		alert("Imprimiendo ticket nº "+$comp.sources.docComercial.Numero);
	};// @lock

	dataGrid1.onRowDraw = function dataGrid1_onRowDraw (event)// @startlock
	{// @endlock
		//getTotal($comp,id);
	};// @lock

	imageButton5.click = function imageButton5_click (event)// @startlock
	{// @endlock
		

		alert("Guardado");
		$comp.sources.docComercial.all();
		$comp.sources.docComercial.select(0);
	};// @lock

	imageButton4.click = function imageButton4_click (event)// @startlock
	{// @endlock
		
		if (confirm("¿ Desea borrar este ticket ?")) {
			$comp.sources.docComercial.removeCurrent();
			$comp.sources.docComercial.all();
		}
		
		
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		
		var docID = ds.DocComercial.crearDocComercial();
		$comp.sources.docComercial.query("ID ="+docID);
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_imageButton6", "click", imageButton6.click, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowDraw", dataGrid1.onRowDraw, "WAF");
	WAF.addListener(this.id + "_imageButton5", "click", imageButton5.click, "WAF");
	WAF.addListener(this.id + "_imageButton4", "click", imageButton4.click, "WAF");
	WAF.addListener(this.id + "_imageButton1", "click", imageButton1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
