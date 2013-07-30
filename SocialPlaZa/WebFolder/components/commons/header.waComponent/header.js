
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'header';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		$$('mlateralComp').loadComponent('/components/commons/menulateral.waComponent');
$('#mlateralComp').hide();
	// @region namespaceDeclaration// @startlock
	var richText14 = {};	// @richText
	var foto_usuario = {};	// @image
	var openMenu = {};	// @richText
	var richText3 = {};	// @richText
	var richText4 = {};	// @richText
	var conectText = {};	// @richText
	var login2 = {};	// @login
	var image2 = {};	// @image
	// @endregion// @endlock
 var botonera1 = getHtmlObj('botonera1');
 var botonera2 = getHtmlObj('botonera2');
 var botonera2b = getHtmlId('botonera2');
 
 

//SERVICIO PARA AVERIGUAR LA IP PÚBLICA 
/* $.getJSON("http://jsonip.com", function(data){ip=data.ip; 
 UI.alert(ip);
});*/





//INICIALIZACIÓN DE MODALES.
btmodales.initModal('Usuarios',$comp);


	 var user = WAF.directory.currentUser();
	if(user){
		$(getHtmlObj('conectText')).text('DESCONECTAR');
	}else{
		$(getHtmlObj('foto_usuario')).css( '-webkit-filter', 'grayscale(100%)');
		$(getHtmlObj('foto_usuario')).css( '-webkit-filter', 'blur(2px)');
		$(getHtmlObj('conectText')).text('INICIAR');
		$$(id+'_botonera1').hide();
	}
			

	// eventHandlers// @lock

	richText14.click = function richText14_click (event)// @startlock
	{// @endlock
		
		fcBrain.openAltaUsuario();
		
	};// @lock

	foto_usuario.click = function foto_usuario_click (event)// @startlock
	{// @endlock
		//$('#myModal').modal('show');
		appds.openDialogUsuario($comp);
	};// @lock

	openMenu.touchend = function openMenu_touchend (event)// @startlock
	{// @endlock
			UI.openCloseMenu();
	};// @lock

	openMenu.click = function openMenu_click (event)// @startlock
	{// @endlock
//$('#mlateralComp').fadeIn();
			UI.openCloseMenu();
	};// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock
		$(botonera1).slideToggle();
		$(botonera2).css('top','24px').slideToggle();
	};// @lock

	richText4.click = function richText4_click (event)// @startlock
	{// @endlock
			fcBrain.openAltaUsuario();
	};// @lock

	conectText.click = function conectText_click (event)// @startlock
	{// @endlock
		fcBrain.desconectar(id);
	};// @lock

	login2.login = function login2_login (event)// @startlock
	{// @endlock
		var paramsString = document.location.search.substr(1);
		var params = paramsString.split("&");
		var newLocation = params[0].split("=")[1];
		document.location = newLocation;
	};// @lock

	image2.click = function image2_click (event)// @startlock
	{// @endlock
		
UI.mostrarAdvertencia('ha cometido un pecado','Vaya a su cura más cercano para que le imponga la penitencia más adecuada');

		
	};// @lock
		
	 //Menú para el botón Toolbar
	 
 //EMPRESA
 
 var menuBoton2 = ' <ul id="toolbar-options-emp" role="menu" aria-labelledby="dLabel" style="display:none">'
+'<li><a class="tool" href="#" id="mEmpresa" > Empresa</a></li>'
+'<li><a class="tool dropdown-toggle" data-toggle="dropdown" href="#" id="mDonde">Dónde estamos</a></li>'
+'<li><a class="tool" href="#" id="mClientes"> Nuestros Clientes</a></li>'
+'</ul>';
$('body').append(menuBoton2);

//Comportamiento de los botones de la toolbar:
$('#mEmpresa').click(function() {
	appds.openDialogEmpresa();
});

$('#mDonde').click(function() {
// Codigo sin no es un enlace
});
 	$('#mClientes').click(function() {
// Codigo sin no es un enlace
});
 	
 //Botón con menú
 var bToolbar = getHtmlObj('richText7');
 $(bToolbar).toolbar({
	content: '#toolbar-options-emp', 
	position: 'bottom',
	hideOnClick: true
});			


//RECURSOS
 var menuRecursos = ' <ul id="toolbar-options-rec" role="menu" aria-labelledby="dLabel" style="display:none">'
+'<li><a class="tool" href="#" id="mRecursosEmpresa" > Usuarios</a></li>'
+'<li><a class="tool dropdown-toggle" data-toggle="dropdown" href="#" id="mRecursosDistribuidores"> Distribuidores</a></li>'
+'<li><a class="tool" href="#" id="mRecursosPrensa"> Prensa</a></li>'
+'</ul>';
$('body').append(menuRecursos);


 var bToolbarRecursos = getHtmlObj('richText2');
 $(bToolbarRecursos).toolbar({
	content: '#toolbar-options-rec', 
	position: 'bottom',
	hideOnClick: true
});			


//SERVICIOS
 var menuServicios = ' <ul id="toolbar-options-serv" role="menu" aria-labelledby="dLabel" style="display:none">'
+'<li><a class="tool" href="#" id="mRecursosEmpresa" > Usuarios</a></li>'
+'<li><a class="tool dropdown-toggle" data-toggle="dropdown" href="#" id="mRecursosDistribuidores"> Distribuidores</a></li>'
+'<li><a class="tool" href="#" id="mRecursosPrensa"> Prensa</a></li>'
+'</ul>';
$('body').append(menuServicios);


 var bToolbarServicios = getHtmlObj('richText5');
 $(bToolbarServicios).toolbar({
	content: '#toolbar-options-serv', 
	position: 'bottom',
	hideOnClick: true
});			

var herramientas = btBarras.barraUno();
contenedorBar = getHtmlObj('container2');
contenedorBar.html(herramientas);




	// @region eventManager// @startlock
	WAF.addListener(this.id + "_richText14", "click", richText14.click, "WAF");
	WAF.addListener(this.id + "_foto_usuario", "click", foto_usuario.click, "WAF");
	WAF.addListener(this.id + "_openMenu", "touchend", openMenu.touchend, "WAF");
	WAF.addListener(this.id + "_openMenu", "click", openMenu.click, "WAF");
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	WAF.addListener(this.id + "_richText4", "click", richText4.click, "WAF");
	WAF.addListener(this.id + "_conectText", "click", conectText.click, "WAF");
	WAF.addListener(this.id + "_login2", "login", login2.login, "WAF");
	WAF.addListener(this.id + "_image2", "click", image2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
