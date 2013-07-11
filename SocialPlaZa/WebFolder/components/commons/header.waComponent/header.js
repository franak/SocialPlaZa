﻿
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
	var foto_usuario = {};	// @image
	var openMenu = {};	// @richText
	var richText3 = {};	// @richText
	var richText4 = {};	// @richText
	var conectText = {};	// @richText
	var richText5 = {};	// @richText
	var richText2 = {};	// @richText
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




	 var user = WAF.directory.currentUser();
	if(user){
		$(getHtmlObj('conectText')).text('DESCONECTAR');
		}else{
		$(getHtmlObj('foto_usuario')).css( '-webkit-filter', 'grayscale(100%)');
		$(getHtmlObj('foto_usuario')).css( '-webkit-filter', 'blur(2px)');
		$(getHtmlObj('conectText')).text('INICIAR');
	}
			

	// eventHandlers// @lock

	foto_usuario.touchend = function foto_usuario_touchend (event)// @startlock
	{// @endlock
		$('#myModal').modal('show');
	};// @lock

	foto_usuario.click = function foto_usuario_click (event)// @startlock
	{// @endlock
		$('#myModal').modal('show');
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

	richText5.click = function richText5_click (event)// @startlock
	{// @endlock
		$(botonera1).slideToggle();
		$(botonera2).css('top','24px').slideToggle();

	};// @lock

	richText2.touchend = function richText2_touchend (event)// @startlock
	{// @endlock
		var user = WAF.directory.currentUser();
		
		if(user){
		//ds Si le da al usuario demo al boton desconectar se elimina sus datos y logout();
		
		
			
			if( ds.Metodos.getGrupo() == "Prueba"){
				
				ds.Metodos.eliminarDemo();
			
				sessionStorage.clear();
				
				
			}
		
			WAF.directory.logout({
		        onSuccess: function(event) {
		         	location.href = '/main.html';
		         	self.location.search = 'origin=demo';
			
		           // fcBrain.openLoginForm();
		          
		        
		           
		        },
		        onError: function(error) {
		        	UI.getMensaje("Logout error");
		          //  alert ("Logout error"); 
		        }
		    });       
		
		}else{
			
			fcBrain.openLoginForm();
		}
	};// @lock

	richText2.click = function richText2_click (event)// @startlock
	{// @endlock
		var user = WAF.directory.currentUser();
		
		if(user){
		//ds Si le da al usuario demo al boton desconectar se elimina sus datos y logout();
		
		
			
			if( ds.Metodos.getGrupo() == "Prueba"){
				
				ds.Metodos.eliminarDemo();
			
				sessionStorage.clear();
				
				
			}
		
			WAF.directory.logout({
		        onSuccess: function(event) {
		         	location.href = '/main.html';
		         	self.location.search = 'origin=demo';
			
		           // fcBrain.openLoginForm();
		          
		        
		           
		        },
		        onError: function(error) {
		        	UI.getMensaje("Logout error");
		          //  alert ("Logout error"); 
		        }
		    });       
		
		}else{
			
			fcBrain.openLoginForm();
		}
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

		/*error = 'Esto es un mensaje';
		fcBrain.mostrarError('',error);
		getHtmlObj('image2').tooltip('toggle')*/
	};// @lock
		



	// @region eventManager// @startlock
	WAF.addListener(this.id + "_foto_usuario", "touchend", foto_usuario.touchend, "WAF");
	WAF.addListener(this.id + "_foto_usuario", "click", foto_usuario.click, "WAF");
	WAF.addListener(this.id + "_openMenu", "touchend", openMenu.touchend, "WAF");
	WAF.addListener(this.id + "_richText2", "touchend", richText2.touchend, "WAF");
	WAF.addListener(this.id + "_openMenu", "click", openMenu.click, "WAF");
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	WAF.addListener(this.id + "_richText4", "click", richText4.click, "WAF");
	WAF.addListener(this.id + "_conectText", "click", conectText.click, "WAF");
	WAF.addListener(this.id + "_richText5", "click", richText5.click, "WAF");
	WAF.addListener(this.id + "_richText2", "click", richText2.click, "WAF");
	WAF.addListener(this.id + "_login2", "login", login2.login, "WAF");
	WAF.addListener(this.id + "_image2", "click", image2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
