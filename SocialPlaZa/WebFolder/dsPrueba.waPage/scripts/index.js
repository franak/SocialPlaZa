
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var menuItem4 = {};	// @menuItem
	var menuItem3 = {};	// @menuItem
	var documentEvent = {};	// @document
	var menuItem2 = {};	// @menuItem
	var menuItem1 = {};	// @menuItem
	var menuItem12 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		alert(ds.Metodos.getGrupo());
	};// @lock

	menuItem4.click = function menuItem4_click (event)// @startlock
	{// @endlock
		if(!comprobarAbierto("Nueva Empresa")){
			newTab("Nueva Empresa","/components/ds/InputEmpresas.waComponent");
		}
	};// @lock

	menuItem3.click = function menuItem3_click (event)// @startlock
	{// @endlock
		if(!comprobarAbierto("Empresas")){
			newTab("Empresas","/components/ds/Empresa.waComponent");
		}
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//changeSplit(splitPosition);
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		if(!comprobarAbierto("Nuevo Usuario")){
			newTab("Nuevo Usuario","/components/ds/InputUsuario.waComponent");
		}	
	};// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		if(!comprobarAbierto("Usuarios")){
			newTab("Usuarios","/components/ds/Usuario.waComponent");
		}
		
	};// @lock

	menuItem12.click = function menuItem12_click (event)// @startlock
	{// @endlock
		if(!comprobarAbierto("TPV")){
			newTab("TPV","/components/ds/TPV.waComponent");
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("menuItem12", "click", menuItem12.click, "WAF");
// @endregion
};// @endlock
