
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
	var button1 = {};	// @button
	var button2 = {};	// @button
	var clickMenu = {};	// @richText
	var sNomUsu = {};	// @richText
	var foto_usuario = {};	// @image
	var login2 = {};	// @login
	var image2 = {};	// @image
	// @endregion// @endlock
 var botonera1 = getHtmlObj('botonera1');
 var botonera2 = getHtmlObj('botonera2');
 var botonera2b = getHtmlId('botonera2');
 
 $$(id+"_openMenu").setValue("c");
 
 

//SERVICIO PARA AVERIGUAR LA IP PÚBLICA 
/* $.getJSON("http://jsonip.com", function(data){ip=data.ip; 
 UI.alert(ip);
});*/





//INICIALIZACIÓN DE MODALES.
btmodales.initModal('Usuarios',$comp);

	$$(id+"_textField1").setValue(localStorage.user)

	 var user = WAF.directory.currentUser();
	 var grupo = ds.Metodos.getGrupo();
	if(grupo == "Prueba"){
		$(getHtmlObj('foto_usuario')).css( '-webkit-filter', 'grayscale(100%)');
		$(getHtmlObj('foto_usuario')).css( '-webkit-filter', 'blur(2px)');
		$(getHtmlObj('conectText')).text('INICIAR');
		$$(id+"_button1").show();
        $$(id+"_textField1").show();
        $$(id+"_textField2").show();
        $$(id+"_button2").show();
        
        $$(id+"_sNomUsu").hide();
        $$(id+"_foto_usuario").hide();
       
	}else{
		$$(id+"_button1").hide();
        $$(id+"_textField1").hide();
        $$(id+"_textField2").hide();
        $$(id+"_button2").hide();
        
        $$(id+"_sNomUsu").show();
        $$(id+"_foto_usuario").show();
        $(getHtmlObj('foto_usuario')).css( '-webkit-filter', 'grayscale(100%)');
		$(getHtmlObj('foto_usuario')).css( '-webkit-filter', 'blur(0px)');
        
    
	}
			

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
        var acceso = $("#" + id + "_textField1").val();
        var resultado = ds.Metodos.getUserActivado(acceso);

        if (resultado == true || resultado == "Error") {
			
            if (WAF.directory.loginByPassword(acceso, $("#" + id + "_textField2").val())) {
                //Para ense√±ar el nombre de usuario una vez logueado:
                WAF.directory.logout();
                WAF.directory.loginByPassword(acceso, $("#" + id + "_textField2").val());
                $$(id+"_button1").hide();
                $$(id+"_textField1").hide();
                $$(id+"_textField2").hide();
                $$(id+"_button2").hide();
                
                $comp.sources.usuarios.all();
                $$(id+"_sNomUsu").show();
                $("#"+id+"_foto_usuario").show();
                localStorage.user = acceso;
                proceso.abrirProceso("TPV");

            }else{
                UI.alert("Datos Incorrectos")
            }
            
        }else{
            UI.alert("Active su cuenta");
        }
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		proceso.abrirProceso("AltaUsuario");
	};// @lock

	clickMenu.click = function clickMenu_click (event)// @startlock
	{// @endlock
		UI.openCloseMenuAcord();
	/*	bClickMenu = getHtmlObj('clickMenu');
		bClickMenu.toggleClass('icon-white');*/
		
	};// @lock

	sNomUsu.click = function sNomUsu_click (event)// @startlock
	{// @endlock
		appds.openDialogUsuario($comp);
	};// @lock

	foto_usuario.click = function foto_usuario_click (event)// @startlock
	{// @endlock
		//$('#myModal').modal('show');
		appds.openDialogUsuario($comp);
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

//Llamo al prodecimiento en el módulo btBarras en el servidor
//Desactivado hasta que lo termine
/*var herramientas = btBarras.barraUno();
contenedorBar = getHtmlObj('container2');
contenedorBar.html(herramientas);*/




	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_clickMenu", "click", clickMenu.click, "WAF");
	WAF.addListener(this.id + "_sNomUsu", "click", sNomUsu.click, "WAF");
	WAF.addListener(this.id + "_foto_usuario", "click", foto_usuario.click, "WAF");
	WAF.addListener(this.id + "_login2", "login", login2.login, "WAF");
	WAF.addListener(this.id + "_image2", "click", image2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
