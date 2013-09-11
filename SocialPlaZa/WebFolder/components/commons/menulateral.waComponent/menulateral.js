
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
+' <li><a href="#">Sección 2</a>'
+'<ul class="nav">'
  +'  <li><a href="#glyphicons-glyphs">Available glyphs</a></li>'
    +'<li><a href="#glyphicons-how-to-use">How to use</a></li>'
    +'<li><a href="#glyphicons-examples">Examples</a></li>'
 +' </ul>'

+ '</li>'
+'  <li><a href="#">Cositas</a></li>'
+' <li class="dropdown">'
+'<a class="dropdown-toggle" data-toggle="dropdown" href="#">Dropdown'
+'<b class="caret"></b> </a>'
+' <ul class="dropdown-menu" > <!-- links -->'
+'  <li><a href="#">Home</a></li>'
+'  <li><a href="#">Library</a></li>'  
+'</ul>'

+' <li class="dropdown" id="accountmenu">'
     +'               <a class="dropdown-toggle" data-toggle="dropdown" href="#">Account Settings<b class="caret"></b></a>'
       +'             <ul class="dropdown-menu">'
         +'               <li><a href="#">Login</a></li>'
           +'           	<li class="dropdown-submenu">'
             +'             <a tabindex="-1" href="#">More options</a>'
               +'           <ul class="dropdown-menu">'
                 +'           <li><a tabindex="-1" href="#">Second level</a></li>'
                   +'         <li class="dropdown-submenu">'
                     +'         <a href="#">More..</a>'
                       +'       <ul class="dropdown-menu">'
                         +'         <li><a href="#">3rd level</a></li>'
                           +'       <li><a href="#">3rd level</a></li>'
                             +' </ul>'
              +'              </li>'
                +'            <li><a href="#">Second level</a></li>'
                  +'          <li><a href="#">Second level</a></li>'
                    +'      </ul>'
                      +'  </li>'
        +'                <li><a href="#">Register</a></li>'
          +'              <li class="divider"></li>'
            +'            <li><a href="#">Logout</a></li>'
              +'      </ul>'
                +'</li>'



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
