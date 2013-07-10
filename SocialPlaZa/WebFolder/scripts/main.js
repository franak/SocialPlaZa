
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var button1 = {};	// @button
	
	var richText3 = {};	// @richText
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock


	button5.click = function button5_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //ok button
		$('errorMsg').html("");
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$('rightComp').loadComponent('/components/commons/bannerright.waComponent');
	};// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock
		//loguearse(id);
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
	/*
		--- Funcion si existe en el sistema los eventos touch (iPad) ---
	*/	
		function isTouchDevice(){
		    try{
		        document.createEvent("TouchEvent");
		        return true;
		    }catch(e){
		        return false;
		    }
		}
		
	/*
		--- Funcion para quitar el scroll del iPad y desactivar la selecion de texto en iPad ---
	*/

		function touchScroll(){
		    if(isTouchDevice()){ //if touch events exist...
		        var el=document;
		        var scrollStartPos=0;

		        document.addEventListener("touchstart", function(event) {
		            scrollStartPos=this.scrollTop+event.touches[0].pageY;      
		        },false);
		     

		        document.addEventListener("touchmove", function(event) {
		            this.scrollTop=scrollStartPos-event.touches[0].pageY;
		            event.preventDefault();
		        },false);
		    }
		}
		
		
		
		/*
		--- Funcion para quitar el scroll del PC ---
		*/

		
		function unloadScrollBars() {
		 //   document.documentElement.style.overflow = 'hidden';  // firefox, chrome
		    document.body.scroll = "no"; // ie only
		}
		
		
		
		// llamadas a las funciones declaradas anteriormente
		unloadScrollBars();
		touchScroll();
		// -------------------------------------------------------
		
		/*
			--- Funcion para quitar los 300ms de espera del dobleClick del iPad ---
		*/
		
		   // FastClick.attach(document.body);
		
		// -------------------------------------------------------
		
		//Desactivar la capitalizacion en los input
		jQuery('input').attr('autocapitalize', 'off');
		//$$('MainComp').hide();

		//DS CONSIGO EL USUARIO LOGUEADO, EL CONTENIDO DE LAS VARIABLES DE LA URL Y LA COOKIE DE SESION
		var cod = UI.getUrlVars()["cod"];
		if(cod){
			if(ds.Metodos.activarUser(cod)==true){
				alert("Cuenta Activada");
				var usuario = ds.Metodos.primerLog(cod);
				WAF.directory.loginByPassword(usuario.NombreAcceso.getValue(),usuario.Password.getValue());
			}else if(ds.Metodos.activarUser(cod)==false){
				alert("La cuenta ya a sido activada");
			}else{
				alert("Fallo de activacion");
			}
		}
		
		var user = WAF.directory.currentUser();
		var origen = UI.getUrlVars()["origin"];
		var lasesion = sessionStorage.getItem("demo");

			
			//DS SI LA COOKIE SE SESSION EXISTE Y EL USUARIO NO ESTA LOGUEADO
			//DS LA COOKIE DE SESSION ES ELIMINADA
		if(lasesion && !user){		
			sessionStorage.clear();
		}
		
		//DS SI EL USUARIO NO ESTA LOGUEADO
		if(!user){
			//DS SI LA VARIABLES DE LA URL NO EXISTE
			if(!origen && !cod){
				ds.Metodos.importacionInicial();
				var retorno = ds.Metodos.crearDemo();
				sessionStorage.setItem("demo","true");
			}

		//DS SI LA VARIABLE DE SESSION HA SIDO ELIMINADA Y ESTAS LOGUEADO COMO DEMO
		}else if(sessionStorage.getItem("demo")!="true" && ds.Metodos.getGrupo() == "Prueba"){
			ds.Metodos.eliminarDemo();
			ds.Metodos.importacionInicial();
			var retorno = ds.Metodos.crearDemo();
			sessionStorage.setItem("demo","true");
		}
		
		
		fcBrain.welcome();
		
		fcBrain.welcomeHead();

/*
*	Para cargar información del tamaño de la ventana y del usario


UI.mostrarSizeVentana();
$(window).resize(function() {	
UI.mostrarSizeVentana();
});
*/
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("richText3", "click", richText3.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
