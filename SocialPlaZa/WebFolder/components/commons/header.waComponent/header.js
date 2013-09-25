
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'header';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	vCompHeader = $comp;
	sources.vCompHeader.sync();
	// @region namespaceDeclaration// @startlock
	var textAcceso = {};	// @richText
	var foto_usuario = {};	// @image
	var clickMenu = {};	// @richText
	var login2 = {};	// @login
	// @endregion// @endlock

var user = WAF.directory.currentUser();
var grupo = ds.Metodos.getGrupo();
var textAcceso = getHtmlObj('textAcceso');

if(grupo !== "Prueba"){
		
		$(textAcceso).hide();
	}
 
 $$(id+"_openMenu").setValue("c");
 
 
 
 

//SERVICIO PARA AVERIGUAR LA IP PÚBLICA 
/* $.getJSON("http://jsonip.com", function(data){ip=data.ip; 
 UI.alert(ip);
});*/
 	




	//$$(id+"_textField1").setValue(localStorage.user)

	 var user = WAF.directory.currentUser();
	 var grupo = ds.Metodos.getGrupo();
	if(grupo == "Prueba"){
		
        
        $$(id+"_sNomUsu").hide();
        $$(id+"_foto_usuario").hide();
       
	}else{
		
        
        $$(id+"_sNomUsu").show();
        $("#"+id+"_sNomUsu").append('<i class="icon icon-user"></i>');
        $$(id+"_foto_usuario").show();
        
	}
	
	

	// eventHandlers// @lock

	textAcceso.click = function textAcceso_click (event)// @startlock
	{// @endlock
		$('#headComp_textAcceso').fadeOut('fast');
			var loginForm = '<div id="loginDiv" class="well">'+
		'<form class="form-horizontal">'+
 ' <fieldset>'+
  '  <legend>Datos de Acceso</legend>'+
    '<input type="text" class="input-large" placeholder="email" id="input-email" style="height:30px" autofocus>'+
    '<input type="password" placeholder="Contraseña" id="input-contra"  style="height:30px">'+
    '<span class="help-block"></span>'+
    ' <a class="btn" id="soyNuevo">Soy nuevo y quiero darme de alta</a>'+
'  <button type="button" class="btn btn-success pull-right" id="Conectar">Entrar</button>'+
  '</fieldset>'+
'</form>'+
'</div>';


$('#containerPrincipal').append(loginForm);

$('#loginDiv').css('position','absolute').css('right','0px').css('z-index','auto');

$('#loginDiv').animate({
            top: '60px'
        }, 200);
        
$('#Conectar').click(function() {

		 var acceso = $("#input-email").val();
        var uDemo = sources.usuarios.NombreAcceso;
		var uPass = sources.usuarios.Password;
		WAF.directory.logout();
        var resultado = ds.Metodos.getUserActivado(acceso);

        if (resultado == true || resultado == "Error") {
		
			$$("MainComp").removeComponent();
            if (WAF.directory.loginByPassword(acceso, $("#input-contra").val())) {
                //Para ense√±ar el nombre de usuario una vez logueado:
               	$('#Conectar').text('conectando...');
               	$('#headComp_textAcceso').fadeOut();
                $('#loginDiv').remove();
        		
                proceso.abrirProceso("menu");
                proceso.abrirProceso("TPV");
               
                $comp.sources.usuarios.all();
                $$(id+"_sNomUsu").show();
                $("#"+id+"_foto_usuario").show();
                localStorage.user = acceso;
                

            }else{
            	WAF.directory.loginByPassword(uDemo,uPass);
            	
                //UI.alert("Datos Incorrectos")
                UI.mostrarAdvertencia('Nombre de usuario o contraseña incorrectos','Por favor, vuelva a intentarlo');
            }
            
        }else{
        	WAF.directory.loginByPassword(uDemo,uPass);
            UI.alert("Active su cuenta");
        }
        
        	
	
});
        
        
         $('#soyNuevo').click(function() {

	proceso.abrirProceso("AltaUsuario");
	
	$('#loginDiv').animate({
            top: '-160px'
        }, 200);

$('#loginDiv').remove();

});


//$(loginForm).appendTo('#containerPrincipal');
 //  $(cajaError).css('left','70%');
/*  $(loginForm).removeClass('animated bounceOutUp');
	$('#errorDiv').addClass('animated bounceInDown');*/
  
 
	};// @lock

	foto_usuario.click = function foto_usuario_click (event)// @startlock
	{// @endlock
		//$('#myModal').modal('show');
		appds.openDialogUsuario($comp);
	};// @lock

	clickMenu.click = function clickMenu_click (event)// @startlock
	{// @endlock
		UI.openCloseMenuAcord();
	/*	bClickMenu = getHtmlObj('clickMenu');
		bClickMenu.toggleClass('icon-white');*/
		
	};// @lock

	login2.login = function login2_login (event)// @startlock
	{// @endlock
		var paramsString = document.location.search.substr(1);
		var params = paramsString.split("&");
		var newLocation = params[0].split("=")[1];
		document.location = newLocation;
	};// @lock
		
//Menú para el botón Toolbar
	 
 //Usuario
 
 var menuBoton2 = ' <ul id="toolbar-options-emp" role="menu" aria-labelledby="dLabel" style="display:none">'
+'<li><a class="tool" href="#" id="mPerfil" ><i class="icon icon-user"></i>  Ver Perfil</a></li>'
+'<li><a class="tool dropdown-toggle" data-toggle="dropdown" href="#" id="mDesconectar"><i class="icon icon-off"></i>  Desconectar</a></li>'
+'</ul>';
$('body').append(menuBoton2);

//Comportamiento de los botones de la toolbar:
$('#mPerfil').click(function() {
	$('#headComp_sNomUsu').click();
	UI.gifCargando($comp);
	appds.openDialogUsuario();
	
});

$('#mDesconectar').click(function() {
	alert('Gracias por participar');
	proceso.abrirProceso('Login');
	$('#headComp_sNomUsu').click();
	$('#headComp_textAcceso').show();


	$$(id+"_button1").show();
    $$(id+"_textField1").show();
    $$(id+"_textField2").show();
    $$(id+"_button2").show();
    
    $$(id+"_sNomUsu").hide();
    $$(id+"_foto_usuario").hide();
	
// Codigo sin no es un enlace
});
 	
 	
 //Botón con menú
 var bToolbar = getHtmlObj('sNomUsu');
 $(bToolbar).toolbar({
	content: '#toolbar-options-emp', 
	position: 'bottom',
	hideOnClick: true
});			


//Llamo al prodecimiento en el módulo btBarras en el servidor
//Desactivado hasta que lo termine
/*var herramientas = btBarras.barraUno();
contenedorBar = getHtmlObj('container2');
contenedorBar.html(herramientas);*/


	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textAcceso", "click", textAcceso.click, "WAF");
	WAF.addListener(this.id + "_foto_usuario", "click", foto_usuario.click, "WAF");
	WAF.addListener(this.id + "_clickMenu", "click", clickMenu.click, "WAF");
	WAF.addListener(this.id + "_login2", "login", login2.login, "WAF");
	// @endregion// @endlock


	};// @lock


}// @startlock
return constructor;
})();// @endlock


