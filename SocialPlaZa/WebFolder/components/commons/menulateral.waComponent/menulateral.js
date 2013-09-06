
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'menulateral';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	

var menuContainer = getHtmlObj ('container10');

var menu = '<ul class="nav nav-pills nav-stacked">'
+'  <li class="nav-header">MenPrincipal</li>'
+'  <li class="active"><a href="main.html">Home</a></li>';
var user = WAF.directory.currentUser();
if(user.fullName != "TG"){
	menu +='  <li><a href="javascript:void(0)" onclick="appds.openAgenda();">Agenda</a></li>';
}else{
	menu +='  <li><a href="javascript:void(0)" onclick="appds.openAdmin();">Administracion</a></li>';
}
menu +=' <li class="divider"></li>'
+'  <li class="nav-header">MenSecundario</li>'
+' <li><a href="#">Sección 2</a></li>'
+'  <li><a href="#">Cositas</a></li>'
+' <li class="dropdown">'
+'<a class="dropdown-toggle" data-toggle="dropdown" href="#">Dropdown'
+'<b class="caret"></b> </a>'
+' <ul class="dropdown-menu" > <!-- links -->'
+'  <li class="active"><a href="#">Home</a></li>'
+'  <li><a href="#">Library</a></li>'  
+'</ul>'
+'</ul>';

$(menuContainer).append(menu);

function abrirAgenda(){
	appds.openAgenda();
}


	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock
		//$$(getHtmlId('accordion1')).collapseAll();

	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
