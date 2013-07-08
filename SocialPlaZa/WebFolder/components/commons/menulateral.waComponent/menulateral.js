
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'menulateral';
	// @endregion// @endlock

	this.load = function (data) {// @lock

var menuContainer = getHtmlObj ('container10');
$(menuContainer).append('<ul class="nav nav-pills nav-stacked">'
+'  <li class="nav-header">MenPrincipal</li>'
+'  <li class="active"><a href="#">Home</a></li>'
+'  <li><a href="javascript:void(0)" onclick="appds.openAgenda();">Agenda</a></li>'
+' <li class="divider"></li>'
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


+'</ul>');

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
