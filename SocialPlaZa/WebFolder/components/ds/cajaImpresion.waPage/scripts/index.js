
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		function pintar(codigo) {
		$('body').append(codigo);
		}

		// Medidas de la impresion
		$('body').css({'max-width':'280px','font-size':'70%'});
		pintar("<h1>Nombre de la Tienda</h1>");
		
		
		sources.cajasMovimientos.all({
			onSuccess:function(){
				
				pintar("<h2>"+localStorage.dia+"</h2>");
				var descripcionCaja = sources.cajasMovimientos.devuelveCaja();
				pintar("<h2>"+descripcionCaja+"</h2>");
				var tabla = "<table><tr><td><b>Ticket</b></td><td><b>Importe</b></td><td><b>Entregado</b></td><td><b>Cambio</b></td><td><b>Medio</b></td><td><b>Concepto</b></td></tr>";
				var resultado = sources.cajasMovimientos;
				
				
				for (var i = 0; i < resultado.length; i++){
					resultado.getElement(i, { onSuccess: function(event) // we get the element of position i  
				        {
				        	sources.cajasMovimientos.select(i);
				        	var entity = event.element;
				        	
				        	var doc = sources.cajasMovimientos.devuelveDoc();
				        	var cambio = sources.cajasMovimientos.devuelveCambio();
				        	var medio = sources.cajasMovimientos.devuelveMedio();
				        
				        	tabla += "<tr><td>"+doc+"</td>";
				        	tabla += "<td>"+entity.importeVenta+"</td>";
				        	tabla += "<td>"+entity.entregado+"</td>";
				        	tabla += "<td>"+cambio+"</td>";
				        	tabla += "<td>"+medio+"</td>";
				        	tabla += "<td>"+entity.concepto+"</td></tr>";
				        	
				       }
				   });
				}
				
				tabla += "</table>";
				pintar(tabla);
					
			}
		});
		
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
