
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'LeftBar';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	//Inicialición Menu Lateral
			$('.sidebar-nav').show();
	
			$('#'+id+'_menu-left').find('span').hide(); //Para ocultal el texto del menú y dejar sólo iconos



				$('.togglemenuleft').on('click',function(){ //Lo que hace la flecha que abre y cierra el menú
					
                    $('#'+id+'_menu-left').toggleClass('span1');
                    $('#'+id+'_menu-left').toggleClass('icons-only');
                    $('#'+id+'_menu-left').toggleClass('span3');
                    
                    $('#'+id+'_content').toggleClass('span6');
                    $('#'+id+'_content').toggleClass('span8');
                    
                    $(this).find('i').toggleClass('icon-circle-arrow-right');
                    $(this).find('i').toggleClass('icon-circle-arrow-left');
                    $('#'+id+'_menu-left').find('span').toggle();
                    $('#'+id+'_menu-left').find('.dropdown').toggle();
	
                });
				


//Comportamiento de los botones del menú Lateral
		var elemento=$('.nav-list').find('a');
			

		elemento.live('click', function(){
					event.preventDefault();
					var enlace =	$(this).attr('data-target');
					console.log(enlace);
					$('#tpv').load(enlace).fadeIn('fast');
	
	//Control de estilo del menú para ver qué está seleccionado.
					$('#'+id+'_menu-left').find('a').removeClass('current');
					$('#'+id+'_menu-left').find('a').find('i').removeClass('icon-white');
                    $(this).addClass('current').find('i').addClass('icon-white');
			});
			
		
				// para que se iniara abierto sería...:
				       /* $('#menu-left').toggleClass('span1');
                    $('#menu-left').toggleClass('icons-only');
                    $('#menu-left').toggleClass('span3');
                    
                    $('#content').toggleClass('span6');
                    $('#content').toggleClass('span8');
                    
               	    $('.togglemenuleft').find('i').toggleClass('icon-circle-arrow-right');
                    $('.togglemenuleft').find('i').toggleClass('icon-circle-arrow-left');
                    $('#menu-left').find('span').toggle();
                    $('#menu-left').find('.dropdown').toggle();
             

               
                    $('#menu-left').find('a').removeClass('active');
                    $(this).addClass('active');
					*/
					// Inicio el menú lateral cerrado


	// eventHandlers// @lock

	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock



}// @startlock
return constructor;
})();// @endlock
