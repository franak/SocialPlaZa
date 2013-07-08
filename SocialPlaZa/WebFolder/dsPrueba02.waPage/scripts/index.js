
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
	var menuItem3 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var documentEvent = {};	// @document
	var menuItem1 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		
		if(vCompUsuarios != ""){
			vCompUsuarios.sources.entornos.all();
		}
		
		if(vCompEntidades != ""){
			vCompEntidades.sources.entornos.all();
		}
		
		if(vCompArticulos != ""){
			vCompArticulos.sources.entornos.all();
		}
		
		
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		if(vCompUsuarios != ""){
			vCompUsuarios.sources.entornos.all();
		}
		
		if(vCompEntidades != ""){
			vCompEntidades.sources.entornos.all();
		}
		
		if(vCompArticulos != ""){
			vCompArticulos.sources.entornos.all();
		}
		
	};// @lock

	menuItem3.click = function menuItem3_click (event)// @startlock
	{// @endlock
		appds.openTPV();
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		appds.openEntidad();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
	};// @lock
	
	

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		appds.openUsuario();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
// @endregion
};// @endlock
