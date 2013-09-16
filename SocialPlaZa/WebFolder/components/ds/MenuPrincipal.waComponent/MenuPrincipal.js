
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'MenuPrincipal';
	// @endregion// @endlock

	this.load = function (data) {// @lock

 $('#MenuComp').css('left','-300');
 
    appds.montarArrayAccesos();
    appds.pintarMenu();
    
/*    $(".proceso").click(function(){
    	
		
			
		switch(this.id){
				case "Entornos":break;
				case "Anuncios"://$("#headComp_imageButton1").click();
								$("MainComp").removeComponent();
								$("socialComponent").removeComponent();
								$("rightComp").removeComponent();
								$("adminComp").loadComponent("/components/Administracion/Publicidad.waComponent");
								break;
				case "Empresas":break;
				case "Usuarios":break;
				case "Familias":break;
				case "Articulos":break;
				
				case "Ventas TPV":break;
				case "Cajas TPV":break;
				case "Listas":break;
				case "Informes":break;
				case "Utilidades":break;
				case "Articulos":break;
			}
		});*/
    

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock

	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
