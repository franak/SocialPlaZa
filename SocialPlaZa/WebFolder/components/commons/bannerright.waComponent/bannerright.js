
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'bannerright';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	//Recogo todos los registros correspondiente a la primera casilla
	
		
			
		ds.Publicidad.devolverPublicidad1({onSuccess: function(e) {
		
			if(e.result != false){
				
				$comp.sources.publicidad.setEntityCollection(e.result);
				$comp.sources.publicidad.select(0);
				var duration = $comp.sources.publicidad.Duracion;
				duration = duration*1000;
				
				var i = 0;
				
				setTimeout(function tick() {
				    i++;
				    if(i == 0){
				    	$comp.sources.publicidad.query("Bloque = 1");
				    }
					$comp.sources.publicidad.select(i);
					duration = $comp.sources.publicidad.Duracion;
					duration = duration*1000;
					if(i == $comp.sources.publicidad.length-1){
						
						i = -1;
						
					}
				 
				    setTimeout(tick, duration);
				}, duration);
				
			}else{
				console.log("No hay publicidad 1");
			}
		  
		}});
						
		
	  
	
	
	ds.Publicidad.devolverPublicidad2({onSuccess: function(e) {
		
		if(e.result != false){
			
			$comp.sources.publicidad1.setEntityCollection(e.result);
			$comp.sources.publicidad1.select(0);
			var duration = $comp.sources.publicidad1.Duracion;
			duration = duration*1000;
			
			var i = 0;
			
			setTimeout(function tick() {
			    i++;
			    if(i == 0){
			    	$comp.sources.publicidad.query("Bloque = 2");
			    }
				$comp.sources.publicidad1.select(i);
				duration = $comp.sources.publicidad1.Duracion;
				duration = duration*1000;
				if(i == $comp.sources.publicidad1.length-1){
					i = -1;
					
				}
			 
			    setTimeout(tick, duration);
			}, duration);
			
		}else{
			console.log("No hay publicidad 2");
		}
	  
	}});
	
	ds.Publicidad.devolverPublicidad3({onSuccess: function(e) {
			
		if(e.result != false){
			console.log(e.result);
			$comp.sources.publicidad2.setEntityCollection(e.result);
			$comp.sources.publicidad2.select(0);
			var duration = $comp.sources.publicidad2.Duracion;
			duration = duration*1000;
				
			var i = 0;
		
			setTimeout(function tick() {
			    i++;
			    if(i == 0){
			    	$comp.sources.publicidad.query("Bloque = 3");
			    }
				$comp.sources.publicidad2.select(i);
				duration = $comp.sources.publicidad2.Duracion;
				duration = duration*1000;
				if(i == $comp.sources.publicidad2.length-1){
					i = -1;
					
				}
			 
			    setTimeout(tick, duration);
			}, duration);
			
		}else{
			console.log("No hay publicidad 3");
		}
	  
	}});

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

   /*
     * Variables
     */

    var slides, timer;


    //Crea un objeto con informaci√≥n de los slides
    slides = $('#rightComp_slider .slidesContainer > .slide');


    /*
     * Funciones
     */
    
    //Desplaza el contenedor hacia la direcci√≥n definida
    //@direction = [left,right]
    function sliderScroll(direction){

       //Calcula la posici√≥n actual del contenedor
       position = $('#rightComp_slider').scrollLeft();

       //Calcula la anchura total menos el √∫ltimo slide.
       //Se usa para calcular cuando el scroll llega al final.
       totalWidth = (slides.length * slides[0].offsetWidth) - slides[0].offsetWidth

       //Se comprueba la variable direction para hacer el scroll hacia izquierda o derecha
       switch (direction) {
            case 'right': //Derecha
                if (position+slides[0].offsetWidth > totalWidth){ //Si la siguiente posici√≥n se sale del contenedor, vuelve al principio.
                    $('#rightComp_slider:not(:animated)').animate({scrollLeft:0},1000);
                } else { //Si no es el final, suma a la posici√≥n actual la anchura del slide.
                    $('#rightComp_slider:not(:animated)').animate({scrollLeft:position+slides[0].offsetWidth},1000);
                }
                break;

            case 'left': //Izquierda
                if (position-slides[0].offsetWidth < 0){ //Si la siguiente posici√≥n se sale del contenedor, vuelve al final.
                    $('#rightComp_slider:not(:animated)').animate({scrollLeft:totalWidth},1000);
                } else { //Si no es el final, resta a la posici√≥n actual la anchura del slide.
                    $('#rightComp_slider:not(:animated)').animate({scrollLeft:position-slides[0].offsetWidth},1000);
                }
                break;
        }

   }

   //Funci√≥n que crea el temporizador
   function initTimer(){
        timer = setInterval(function(){sliderScroll('right');}, 5000);
   }


   /*
    * C√≥digo
    */

    //Asigna el ancho total de los slides al contenedor
    //La anchura total se obtiene multiplicando la medida de un slide por el n√∫mero de slides)
    $('#rightComp_slider .slidesContainer').css('width',slides[0].offsetWidth * slides.length);


    //Click en el bot√≥n "next"
    $('.next').click(function(){
        clearInterval(timer); //Desactiva el temporizador
        sliderScroll('right'); //Mueve el scroll a la derecha
        initTimer(); //Vuelve a activar el temporizador
        return false;
    });

    //Click en el bot√≥n "prev"
    $('.prev').click(function(){
        clearInterval(timer); //Desactiva el temporizador
        sliderScroll('left'); //Mueve el scroll a la izquierda
        initTimer(); //Vuelve a activar el temporizador
        return false;
    });


    //Inicia el temporizador
    initTimer();



	// eventHandlers// @lock

	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
