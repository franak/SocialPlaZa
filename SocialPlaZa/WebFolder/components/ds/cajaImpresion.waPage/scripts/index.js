
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
		
		var fecha =localStorage.dia;
		var dia = fecha.substring(0,2);
		var mes = fecha.substring(3,5);
		mes = mes-1;
		var anio = fecha.substring(6);

		//f0 es la fecha inicio
		var f0 = new Date(anio, mes, dia);
		dia = parseInt(dia);
		dia++;
		//f1 es la fecha fin
		var f1 = new Date(anio, mes, dia);
		ds.CajasMovimientos.consultaMovimientos(f0,f1,{onSuccess: function(e) {
				sources.cajasMovimientos.setEntityCollection(e.result);
				
				pintar("<h2>"+localStorage.dia+"</h2>");
				var descripcionCaja = sources.cajasMovimientos.devuelveCaja();
				pintar("<h2>"+descripcionCaja+"</h2>");
				var tabla = "<table class='table table-condensed'><tr><td><b>Ticket</b></td><td><b>Importe</b></td><td><b>Entregado</b></td><td><b>Cambio</b></td><td><b>Medio</b></td><td><b>Concepto</b></td></tr>";
				//Inicio de las operaciones de la consulta inicial:
				
				
				var resultado = sources.cajasMovimientos;
				
				var totalEfectivo = 0;
				var totalTarjeta = 0;
				for (var i = 0; i < resultado.length; i++){
					resultado.getElement(i, { onSuccess: function(event) // we get the element of position i  
				        {
				        	sources.cajasMovimientos.select(i);
				        	var entity = event.element;
				        	
				        	var doc = sources.cajasMovimientos.devuelveDoc();
				        	var cambio = sources.cajasMovimientos.devuelveCambio();
				        	var medio = sources.cajasMovimientos.devuelveMedio();
				        
				        	if(doc == null){
				        		tabla += "<tr><td> - </td>";
				      		}else{
				      			tabla += "<tr><td>"+doc+"</td>";
				      		}
				        	if(entity.importeVenta == null){
				        		tabla += "<td>0</td>";
				      		}else{
				      			tabla += "<td>"+entity.importeVenta+"</td>";
				      		}
				      		if(entity.entregado == null){
				        		tabla += "<td>0</td>";
				      		}else{
				      			tabla += "<td>"+entity.entregado+"</td>";
				      		}
				      		
				      		if(cambio == null){
				        		tabla += "<td>0</td>";
				      		}else{
				      			cambio = parseFloat(cambio);
				      			cambio = cambio.toFixed(2);
				      			tabla += "<td>"+cambio+"</td>";
				      		}
							if(medio == null){
				        		tabla += "<td> - </td>";
				      		}else{
				      			tabla += "<td>"+medio+"</td>";
				      		}
				      		
				      		if(entity.concepto == null){
				        		tabla += "<td>&nbsp;&nbsp;-</td></tr>";
				      		}else{
				      			tabla += "<td>"+entity.concepto+"</td></tr>";
				      		}
				      		
				      		if(medio == "Efectivo"){
				      			totalEfectivo += entity.importeVenta;
				      		}else{
				      			totalTarjeta += entity.importeVenta;
				      		}		        	
				      
				       
				        	
				       }
				   });
				}
				
				tabla += "</table>";
				pintar(tabla);
				pintar("<h3>Total Efectivo: €"+totalEfectivo+"</h3>");
				pintar("<h3>Total Tarjeta: €"+totalTarjeta+"</h3>");
			
			
		}});
		
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
