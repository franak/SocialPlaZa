
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Dialog';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$($comp.id+"_richText17").setValue("Anadir"); // Ponemos un valor al boton
	$comp.sources.medioPago.all();
	$comp.sources.cajasTPV.all();
	$comp.sources.docComercial.all();
	$comp.sources.cajasMovimientos.all({
		onSuccess:function(){
			var total = calculaTotalCaja();
			total = total.toFixed(2);
			$$(id+"_richText19").setValue("TOTAL en caja "+total+"€");
			
		}
	});
	
		
	
		
	
	//-- Append del select de paises --\\
	function pintarSelectPaises(vDefecto){
	
		
		var selectElement = document.createElement('select');
		selectElement.setAttribute('id','select-paises');
	    $('#'+id+'_container2').append(selectElement);
	    $('#select-paises').css('position','absolute');
	    $('#select-paises').css('top','218px');
	    $('#select-paises').css('left','61px');
	    var etiqueta = '<label id="etiqueta-paises">Paises</label>';
	    $('#'+id+'_container2').append(etiqueta);
	    $('#etiqueta-paises').css('position','absolute');
	    $('#etiqueta-paises').css('top','197px');
	    $('#etiqueta-paises').css('left','65px');
	  
	    $comp.sources.paisesISO.allEntities({
	    	onSuccess:function(){
	    		 var paises = $comp.sources.paisesISO;
	    		 
	    		 for (var i = 0; i < paises.length; i++){
	    		 	
	    		 	paises.getElement(i, { 
	    		 	
	    		 		onSuccess: function(event) {
	    		 			
			        		var entity = event.element;
			        		var optionHTML;
			        		
			        		var alphaPais = entity.Alpha;
			        		alphaPais = alphaPais.toLowerCase();
			        		
			        		if(vDefecto == entity.Name){
			 
			        			optionHTML += '<option value="'+entity.Number+'" selected >'+entity.Name+'</option>';
			        		}else{
			        			optionHTML = '<option value="'+entity.Number+'">'+entity.Name+'</option>';
			        		}
			        		$('#select-paises').append(optionHTML);
			      
			       		}
				   });
	    		 
	    		 }
	    	}
	    });
	   
	}
	
	function cargarFichaEmpresa(){
		
		$comp.sources.entidades.all({
			onSuccess:function (){
				$comp.sources.entidades.select(1);
				var pais = ds.PaisesISO.devolverPais($comp.sources.entidades.ID);
				pintarSelectPaises(pais);
				
			}
		});
		
	}
	
	//-- Calcular TOTAL CAJA --\\
	
	function calculaTotalCaja(){
		
		 var movimientos = $comp.sources.cajasMovimientos;
		 var documentos = $comp.sources.docComercial;
		 var entregado = 0;
		 var cambio = 0;
		 
		 for (var i = 0; i < movimientos.length; i++){
		 	movimientos.getElement(i, { 
		 		onSuccess: function(event) {
		 			
	        		var entity = event.element;
	        		
					entregado += entity.entregado;
	       		}
		   });
		 }
		 for (var i = 0; i < documentos.length; i++){
		 	documentos.getElement(i, { 
		 		onSuccess: function(event) {
		 			
	        		var entity = event.element;
					cambio += entity.Cambio;
	       		}
		   });
		 }
		 
		 return (entregado - cambio);
	    
	}
	
	//---------------------------------\\

	// @region namespaceDeclaration// @startlock
	var cajasMovimientosEvent = {};	// @dataSource
	var richText17 = {};	// @richText
	var richText8 = {};	// @richText
	var fileUpload1 = {};	// @fileUpload
	var richText5 = {};	// @richText
	var button1 = {};	// @button
	var richText3 = {};	// @richText
	var richText2 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock

	cajasMovimientosEvent.onElementSaved = function cajasMovimientosEvent_onElementSaved (event)// @startlock
	{// @endlock
		var total = calculaTotalCaja();
		total = total.toFixed(2);
		$$(id+"_richText19").setValue("TOTAL en caja "+total+"€");
	};// @lock

	richText17.click = function richText17_click (event)// @startlock
	{// @endlock
		
		if($$($comp.id+"_richText17").getValue() == "Anadir"){
			$("#"+$comp.id+"_textField5").fadeIn(1000); 
			$$($comp.id+"_richText17").setValue("Guardar");
			$("#"+$comp.id+"_textField5").focus();
			
		}else if($$($comp.id+"_richText17").getValue() == "Guardar"){
			
			$comp.sources.cajasMovimientos.addNewElement();
			$comp.sources.cajasMovimientos.entregado = $$(id+"_textField5").getValue();
			$comp.sources.cajasMovimientos.concepto = "Anadido Manualmente";
			$comp.sources.cajasMovimientos.fecha = new Date();
			$comp.sources.cajasMovimientos.Caja.set($comp.sources.cajasTPV);
			$comp.sources.cajasMovimientos.MedioPago.set($comp.sources.medioPago);
			$comp.sources.cajasMovimientos.save({
				onSuccess:function (){
					$$(id+"_textField5").setValue("");
					$("#"+$comp.id+"_textField5").fadeOut(1000); 
					$$($comp.id+"_richText17").setValue("Anadir");
					$(window).scrollTop(0);
				}
			});
		}
	};// @lock

	richText8.click = function richText8_click (event)// @startlock
	{// @endlock
		$("#"+id+"_dialog2").css("top",200);
		$(window).scrollTop(0);
		$$(id+"_dialog3").hide();
		appds.closeDialogMovimiento();		
	};// @lock

	fileUpload1.filesUploaded = function fileUpload1_filesUploaded (event)// @startlock
	{// @endlock
		$comp.sources.entidades.save();
	};// @lock

	richText5.click = function richText5_click (event)// @startlock
	{// @endlock
		$("#"+id+"_dialog2").css("top",200);
		$(window).scrollTop(0);
		$$(id+"_dialog2").hide();
		objComponent.sources.usuarios.serverRefresh();
		appds.closeDialogEmpresa();		
	};// @lock
	
	if(data.userData.myParameter == "Empresa"){
		
		cargarFichaEmpresa();
		$$(id+"_dialog3").hide()
		$$(id+"_dialog2").hide({
			onSuccess:function(){
				$$(id+"_dialog1").show();
			}
		});
		
	}else if(data.userData.myParameter == "Movimiento"){
		$$(id+"_dialog1").hide();
		$$(id+"_dialog2").hide();
		$("#"+id+"_dialog3").css("top",100);
		$$(id+"_dialog3").show();
		
		$(":input").bind('keypress', function(e) {
			if(e.keyCode==13){
				var btn_valor = $$(id+"_richText17").getValue();
				if(btn_valor == "Guardar"){
					$("#"+id+"_richText17").click();
				}
			}
	  });
	  
	}else{
		$$(id+"_dialog1").hide();
		$$(id+"_dialog3").hide();
		$("#"+id+"_dialog2").css("top",100);
		$$(id+"_dialog2").show();
	}
	
	var objComponent = data.userData.myParameter2;

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$comp.sources.entidades.save();
	};// @lock

	

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock
		
		$comp.sources.entidades.save({
			onSuccess:function(){
				ds.Entidades.asignarPais($comp.sources.entidades.ID,$('#select-paises').val());
				$(window).scrollTop(0);
				$$(id+"_dialog1").hide();
				appds.closeDialogEmpresa();
			}
		});
					
			
		
	};// @lock

	richText2.click = function richText2_click (event)// @startlock
	{// @endlock
		$(window).scrollTop(0);
		$$(id+"_dialog1").hide();
		appds.closeDialogEmpresa();		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cajasMovimientos", "onElementSaved", cajasMovimientosEvent.onElementSaved, "WAF");
	WAF.addListener(this.id + "_richText17", "click", richText17.click, "WAF");
	WAF.addListener(this.id + "_richText8", "click", richText8.click, "WAF");
	WAF.addListener(this.id + "_fileUpload1", "filesUploaded", fileUpload1.filesUploaded, "WAF");
	WAF.addListener(this.id + "_richText5", "click", richText5.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	WAF.addListener(this.id + "_richText2", "click", richText2.click, "WAF");
	// @endregion// @endlock

	};// @lock
	
	


}// @startlock
return constructor;
})();// @endlock
