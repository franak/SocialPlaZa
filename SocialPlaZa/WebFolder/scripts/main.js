
WAF.onAfterInit = function onAfterInit() {// @lock



// @region namespaceDeclaration// @startlock
	
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock







	
	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
	
	//++++++++++++++++++++++++++++++++++\\
	//++ Empieze de carga del sistema ++\\
	//++++++++++++++++++++++++++++++++++\\
	
	
	
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
		
		touchScroll();
		
		//++ Quitar el scroll en PC++\\
		
		function unloadScrollBars() {
		    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
		    document.body.scroll = "no"; // ie only
		}
		
		unloadScrollBars();
		
		// -------------------------------------------------------
		
		/*
			--- Funcion para quitar los 300ms de espera del dobleClick del iPad ---
		*/
		
		 FastClick.attach(document.body);
		
		// -------------------------------------------------------
		
		//Desactivar la capitalizacion en los input
		jQuery('input').attr('autocapitalize', 'off');

		//+++++++++++++++++++++++++++++++++++++++++\\
		//++ Procedimientos ¿Que entorno cargar? ++\\
		//++++++++++++++++++++++++++++++++++++++++++\\
		
		//DS CONSIGO EL USUARIO LOGUEADO, EL CONTENIDO DE LAS VARIABLES DE LA URL Y LA COOKIE DE SESION
		
		var cod = UI.getUrlVars()["cod"];
		if(cod){
			if(ds.Metodos.activarUser(cod)==true){
				UI.alert("Cuenta Activada");
				var usuario = ds.Metodos.primerLog(cod);
				WAF.directory.loginByPassword(usuario.NombreAcceso.getValue(),usuario.Password.getValue());
			}else if(ds.Metodos.activarUser(cod)==false){
				UI.alert("La cuenta ya a sido activada");
			}else{
				UI.alert("Fallo de activacion");
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
		
		if(ds.Metodos.getGrupo() == "Prueba"){
			
			proceso.abrirProceso("cabezera");
			proceso.abrirProceso("bannerAnuncios");
			proceso.abrirProceso("social");
			proceso.abrirProceso("TPV");
			
		}else{
			
			proceso.abrirProceso("menu");
			proceso.abrirProceso("cabezera");
			proceso.abrirProceso("bannerAnuncios");
			proceso.abrirProceso("social");
			proceso.abrirProceso("TPV");
		}
		
		
		
		//fcBrain.welcome();
		
		//fcBrain.welcomeHead();
		
		//Fondo
		//<li><span>Image 01</span><div><h3>re·lax·a·tion</h3></div></li>'
	var slide =  '<ul class="cb-slideshow">'
	+'         <li><span>Image 01</span></li>'
   +'         <li><span>Image 02</span></li>'
     +'       <li><span>Image 03</span></li> '
       +'     <li><span>Image 04</span></li>'
         +'   <li><span>Image 05</span></li>'
           +' <li><span>Image 06</span></li>'
    +'    </ul>	';
    
  //  $('#waf-body').append(slide);
		
		



	};// @lock
	
	

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
