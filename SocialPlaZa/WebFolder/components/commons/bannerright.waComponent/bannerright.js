
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'bannerright';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	//Recogo todos los registros correspondiente a la primera casilla
	
var entrar = true;

publicidad = {};

publicidad.mostrarBloque5 = function(){
	
	
		ds.Publicidad.devolverPublicidad5({onSuccess: function(e) {
		
			if(e.result != false){
				
				$comp.sources.publicidad3.setEntityCollection(e.result);
				var tamanio = $comp.sources.publicidad3.length;
				$comp.sources.publicidad3.select(0);
				var duration = $comp.sources.publicidad3.Duracion;
				console.log($comp.sources.publicidad3.Imagen);
				var i = 0;
				var imagenString = $comp.sources.publicidad3.Trama.__deferred.uri;
				
				$$("rightComp").hide();
				$$(id+"_image4").show();
				$("body").css('background-image', 'url("'+imagenString+'")');
				$("body").css('display',' block');
				$("body").css('background-repeat',' no-repeat');
				$("body").css('background-attachment',' initial');
				$("body").css('background-position-x',' 50%');
				$("body").css('background-position-y',' -70px');
				$("body").css('background-origin',' initial');
				$("body").css('background-clip',' initial');
				$("body").css('background-color',' initial');
				
				$$("rightComp").hide();
				duration = duration*1000;
			
				
				setTimeout(function tick() {
					console.log(entrar);
					if(!entrar){
						
						if($comp.sources.publicidad3.length > 1){
							i++;
						}else if($comp.sources.publicidad3.length <= 1 ){
							i = 0;
						}
						
					    if(i == 0){
					    	
					    	$comp.sources.publicidad3.query("Bloque = 5");
					    	var imagenString = $comp.sources.publicidad3.Trama.__deferred.uri;
					    	$("body").css('background-image', 'url("'+imagenString+'")');
					    	if($comp.sources.publicidad3.length == 0){
					    		console.log("no hay ninguno");
					    		duration = 5000;
				    		}else{
				    			
				    			duration = $comp.sources.publicidad3.Duracion;
								duration = duration*1000;
				    		}
					    	
					    	if(i == $comp.sources.publicidad3.length-1){
								i = -1;
							}
							
					    }else{
					    	$comp.sources.publicidad3.select(i);
							duration = $comp.sources.publicidad3.Duracion;
							duration = duration*1000;
							var imagenString = $comp.sources.publicidad3.Trama.__deferred.uri;
							$("body").css('background-image', 'url("http://127.0.0.1:8081'+imagenString+'")');
							if(i == $comp.sources.publicidad3.length-1){
								i = -1;
							}
					    }
					    
					 }

						tamanio = $comp.sources.publicidad3.length;
				    setTimeout(tick, duration);
				}, duration);
				
			}
		  
		}});
}
		

		ds.Publicidad.devolverPublicidad1({onSuccess: function(e) {
		
			if(e.result != false){
				
				$comp.sources.publicidad.setEntityCollection(e.result);
				var tamanio = $comp.sources.publicidad.length;
				$comp.sources.publicidad.select(0);
				var duration = $comp.sources.publicidad.Duracion;
				var i = 0;
				if(tamanio == 0){
					duration = 5000;
					
				}else{
					duration = duration*1000;
					
				}
				

				setTimeout(function tick() {
					
					if($comp.sources.publicidad.length > 1){
						i++;
					}else if($comp.sources.publicidad.length <= 1 ){
						i = 0;
					}
					
				    if(i == 0){
				    	
				    	$comp.sources.publicidad.query("Bloque = 1");
				    	if($comp.sources.publicidad.length == 0){
				    		duration = 5000;
			    		}else{
			    			duration = $comp.sources.publicidad.Duracion;
							duration = duration*1000;
			    		}
				    	$comp.sources.publicidad.select(i);
						
				    }else{
				    	$comp.sources.publicidad.select(i);
						duration = $comp.sources.publicidad.Duracion;
						duration = duration*1000;
						if(i == $comp.sources.publicidad.length-1){
							i = -1;
						}
				    }
					
					tamanio = $comp.sources.publicidad.length;
				    setTimeout(tick, duration);
				}, duration);
				
			}
		  
		}});
		

						
		
	  
	
	
	ds.Publicidad.devolverPublicidad2({onSuccess: function(e) {
		
		if(e.result != false){
				
			$comp.sources.publicidad1.setEntityCollection(e.result);
			var tamanio = $comp.sources.publicidad1.length;
			$comp.sources.publicidad1.select(0);
			var duration = $comp.sources.publicidad1.Duracion;
			var i = 0;
			if(tamanio == 0){
				duration = 5000;
				
			}else{
				duration = duration*1000;
				
			}
			

			setTimeout(function tick() {
				
				if($comp.sources.publicidad1.length > 1){
					i++;
				}else if($comp.sources.publicidad1.length <= 1 ){
					i = 0;
				}
				
			    if(i == 0){
			    	
			    	$comp.sources.publicidad1.query("Bloque = 2");
			    	if($comp.sources.publicidad1.length == 0){
			    		duration = 5000;
		    		}else{
		    			duration = $comp.sources.publicidad1.Duracion;
						duration = duration*1000;
		    		}
			    	$comp.sources.publicidad1.select(i);
					
			    }else{
			    	$comp.sources.publicidad1.select(i);
					duration = $comp.sources.publicidad1.Duracion;
					duration = duration*1000;
					if(i == $comp.sources.publicidad1.length-1){
						i = -1;
					}
			    }
				
				tamanio = $comp.sources.publicidad1.length;
			    setTimeout(tick, duration);
			}, duration);
			
		}
	  
	}});
	
	ds.Publicidad.devolverPublicidad3({onSuccess: function(e) {
			
		if(e.result != false){
				
			$comp.sources.publicidad2.setEntityCollection(e.result);
			var tamanio = $comp.sources.publicidad2.length;
			$comp.sources.publicidad2.select(0);
			var duration = $comp.sources.publicidad2.Duracion;
			var i = 0;
			if(tamanio == 0){
				duration = 5000;
				
			}else{
				duration = duration*1000;
				
			}
			

			setTimeout(function tick() {
				
				if($comp.sources.publicidad2.length > 1){
					i++;
				}else if($comp.sources.publicidad2.length <= 1 ){
					i = 0;
				}
				
			    if(i == 0){
			    	
			    	$comp.sources.publicidad2.query("Bloque = 3");
			    	if($comp.sources.publicidad2.length == 0){
			    		duration = 5000;
		    		}else{
		    			duration = $comp.sources.publicidad2.Duracion;
						duration = duration*1000;
		    		}
			    	$comp.sources.publicidad2.select(i);
					
			    }else{
			    	$comp.sources.publicidad2.select(i);
					duration = $comp.sources.publicidad2.Duracion;
					duration = duration*1000;
					if(i == $comp.sources.publicidad2.length-1){
						i = -1;
					}
			    }
				
				tamanio = $comp.sources.publicidad2.length;
			    setTimeout(tick, duration);
			}, duration);
			
		}
	  
	}});
	


	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
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
   /* function sliderScroll(direction){

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
*/


	// eventHandlers// @lock
	

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		if(entrar){
			entrar = false;
			publicidad.mostrarBloque5();
		}else{
			entrar = true;
			$$(id+"_image4").hide();
			$("body").css('background', "#ffffff");
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
