
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {
	$("#"+id+"_dialog1").hide();
	$("#"+id+"_dialog2").hide();
	$("#"+id+"_dialog3").hide();
	$("#ui-datepicker-div").css("z-index","99999999");

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Dialog';
	// @endregion// @endlock

	this.load = function (data) {// @lock
			
		
		
	
		if(data.userData.myParameter == "Empresa"){
			
			cargarFichaEmpresa();
			$("#"+id+"_dialog1").css("top",20);
			$$(id+"_dialog1").show();
			
		}else if(data.userData.myParameter == "Movimiento"){
			
			$comp.sources.cajasTPV.all();
			$comp.sources.medioPago.all();	
			$comp.sources.docComercial.all();
			
			cargarDataPicker(); 
			
		}else{
			$comp.sources.usuarios.all({
				onSuccess:function(){
					$("#"+id+"_dialog2").css("top",20);
					$$(id+"_dialog2").show();
				}
			});
			
		}
		
	
	var objComponent = data.userData.myParameter2;
		
		
		
	var printCaja = getHtmlObj('printCaja');

	$(printCaja).printPage({
	      url: "components/ds/cajaImpresion.waPage/index.html",
	      message:"Imprimiendo Caja..."
	});
		
	


		
function cargarDataPicker(){
	
	//Se coje la fecha de hoy por defecto:
	var fecha= new Date();
	var dia = fecha.getDate();
	dia = parseInt(dia);
	if(dia < 10){
		dia = "0"+dia;
	}
	var mes = fecha.getMonth()+1;
	mes = parseInt(mes);
	if(mes < 10){
		mes = "0"+mes;
	}
	var anio = fecha.getFullYear();
	
	
	var fechaElement =  '<div id="datepicker" class="input-append date" data-date-format="dd-mm-yyyy">'
    					+'<input class="span2" size="16" type="text" value="'+dia+"/"+mes+"/"+anio+'"><span2 class="add-on"><i class="icon-calendar"></i></span2>'
						+'</div>';
	$("#"+id+"_container9").append(fechaElement);

	$("#"+id+"_container9").css("background","transparent");
	$(".span2").css("position","absolute");
	$(".span2").css("left","250px");
	$(".span2").css("top","15px");
	$(".span2").css("height","40px");
	$(".add-on").css("position","absolute");
	$(".add-on").css("left","370px");
	$(".add-on").css("top","15px");
	$(".add-on").css("width","25px");
	$(".add-on").css("height","40px");
	$(".icon-calendar").css("position","absolute");
	$(".icon-calendar").css("top","10px");
	
	//Inicio de las operaciones de la consulta inicial:
	//var fecha = $(".span2").val();
	var fecha = $(".span2").val();
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
	
	
	$comp.sources.cajasMovimientos.query("fecha >=:1 and fecha <:2",f0,f1,{
		onSuccess:function(){
			$$(id+"_dialog3").show();
			$("#"+id+"_dialog3").css("top",20);
			//$(id+"_dialog3").displayDialog();
			$(":input").bind('keypress', function(e) {
				if(e.keyCode==13){
					$("#"+id+"_textField8").blur();
					$("#"+id+"_richText26").click();
				}
		    });
		}
	});
	
	$(".add-on").click(function(){
			
			$(".ui-datepicker-inline").css("position","absolute");
			$(".ui-datepicker-inline").css("left","400px");
			$("#"+id+"_container9").css("height","240px");
			$(".ui-datepicker-inline").slideToggle('200');
	
	});
	
	

	$('#datepicker').datepicker({
				onSelect: function (ev){
					$('.span22').val(this.value);
					
					var fecha = this.value;
					var dia = fecha.substring(0,2);
					var mes = fecha.substring(3,5);
					mes = mes-1;
					var anio = fecha.substring(6);
					//f2 es la fecha inicio
					var f2 = new Date(anio, mes, dia);
					dia = parseInt(dia);
					dia++;
					//f3 es la fecha fin
					var f3 = new Date(anio, mes, dia);
					
					$comp.sources.cajasMovimientos.query("fecha >=:1 and fecha <:2",f2,f3);
					UI.gifCargando();
					$("#"+id+"_container9").css("height","59px");
					$(".ui-datepicker-inline").slideToggle('200');
				}
			});
			
	$(".ui-datepicker-inline").hide();
	
				
	
}
	
		
	
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
		 var totalEfectivo = 0;
		 var totalTarjeta = 0;
		 
		 for (var i = 0; i < movimientos.length; i++){
		 	movimientos.getElement(i, { 
		 		onSuccess: function(event) {
		 			
		 			var entity = event.element;
	      			totalEfectivo += entity.importeVenta;
	      			totalTarjeta += entity.importeVenta;
		      		
	       		}
		   });
		 }
		 
		var arTotal = [totalEfectivo,totalTarjeta];
		 
		 
		 return arTotal;
	    
	}
	
	//---------------------------------\\

	// @region namespaceDeclaration// @startlock
	var dataGrid1 = {};	// @dataGrid
	var printCaja = {};	// @richText
	var imageButton3 = {};	// @buttonImage
	var imageButton2 = {};	// @buttonImage
	var imageButton1 = {};	// @buttonImage
	var richText24 = {};	// @richText
	var richText26 = {};	// @richText
	var richText27 = {};	// @richText
	var textField5 = {};	// @textField
	var textField8 = {};	// @textField
	var richText5 = {};	// @richText
	var richText17 = {};	// @richText
	var cajasMovimientosEvent = {};	// @dataSource
	var richText7 = {};	// @richText
	var richText8 = {};	// @richText
	var fileUpload1 = {};	// @fileUpload
	var button1 = {};	// @button
	var richText3 = {};	// @richText
	var richText2 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock
	$("#ui-datepicker-div").css("z-index","999999999");

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		$("#ui-datepicker-div").css("z-index","999999999");
	};// @lock

	printCaja.click = function printCaja_click (event)// @startlock
	{// @endlock
		localStorage.dia = $(".span2").val();		
	};// @lock

	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock
		//-- Boton sumar Fecha --\\
		var fecha = $(".span2").val();
					
		var dia = fecha.substring(0,2);
		var mes = fecha.substring(3,5);
		mes = mes-1;
		var anio = fecha.substring(6);
		dia = parseInt(dia);
		dia++;
		
		//f2 es la fecha inicio
		var f2 = new Date(anio, mes, dia);
		var dia2 = f2.getDate();
		dia2 = parseInt(dia2);
		if(dia2 < 10){
			dia2 = "0"+dia2;
		}
		var mes2 = f2.getMonth()+1;
		mes2 = parseInt(mes2);
		if(mes2 < 10){
			mes2 = "0"+mes2;
		}
		var anio2 = f2.getFullYear();
		
		$('.span2').val(dia2+"/"+mes2+"/"+anio2);
		
		dia++;
		//f3 es la fecha fin
		var f3 = new Date(anio, mes, dia);
		
		
		$comp.sources.cajasMovimientos.query("fecha >=:1 and fecha <:2",f2,f3);
		
	};// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		var fecha= new Date();
		var dia = fecha.getDate();
		if(dia < 10){
			dia = "0"+dia;
		}
		var mes = fecha.getMonth()+1;
		if(mes < 10){
			mes = "0"+mes;
		}
		var anio = fecha.getFullYear();
		
		$(".span2").val(dia+'/'+mes+'/'+anio);
		mes = mes-1;
		
		//f0 es la fecha inicio
		var f0 = new Date(anio, mes, dia);
		console.log(f0);

		dia = parseInt(dia);
		dia++;
		//f1 es la fecha fin
		var f1 = new Date(anio, mes, dia);
		console.log(f1);
		
		$comp.sources.cajasMovimientos.query("fecha >=:1 and fecha <:2",f0,f1);
		
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		//-- Boton restar Fecha --\\
		var fecha = $(".span2").val();
					
		var dia = fecha.substring(0,2);
		var mes = fecha.substring(3,5);
		mes = mes-1;
		var anio = fecha.substring(6);
		
		
		//f2 es la fecha inicio
		var f2 = new Date(anio, mes, dia);
		f2.setTime(f2.getTime() - 86400000);
		
		
		
		var dia2 = f2.getDate();
		
		dia2 = parseInt(dia2);
		
		if(dia2 < 10 && dia2 != 0){
			dia2 = "0"+dia2;
		}else if(dia2 == 0){
			dia2 = -1;
		}
		var mes2 = f2.getMonth()+1;
		mes2 = parseInt(mes2);
		if(mes2 < 10){
			mes2 = "0"+mes2;
		}
		
		var anio2 = f2.getFullYear();
		$(".span2").val(dia2+"/"+mes2+"/"+anio2);
		
		
		//f3 es la fecha fin
		
		var f3 = new Date(anio, mes, dia);
		console.log(f3);
		console.log(f2);
		
		
		$comp.sources.cajasMovimientos.query("fecha >=:1 and fecha <:2",f2,f3);
	};// @lock

	richText24.click = function richText24_click (event)// @startlock
	{// @endlock
		//-- FUNCION MOSTRAR TODOS LOS REGISTROS --\\
		
			mostrarTodo($comp.sources.cajasMovimientos);
			
			
		//-- FUNCION QUE SELECCIONA TODOS LOS REGISTROS--\\

			//$$(id+'_dataGrid1').selectAll();
			
		
		//-- FUNCION QUE NO SELECCIONA NADA--\\

			//$$(id+'_dataGrid1').selectNone();
		
		//-- FUNCION AISLAR REGISTROS SELECCIONADOS--\\
		
			/*var sel = $$(id+'_dataGrid1').getSelection();
			sel.setToInverted($$(id+'_dataGrid1').source.length);
			$$(id+'_dataGrid1').source.buildFromSelection(sel);*/
			
			//en cuanto se recarga el recurso o la pagina los registros vuelve aparecer
			
		//-- FUNCION OMITIR REGISTROS SELECCIONADOS--\\
			
			//appds.omitirSeleccionados($comp.sources.cajasMovimientos,$$(id+'_dataGrid1').getSelectedRows());
		
			//muestro por console.log un array con las posiciones de los registros NO omitidos.
			
		//-- FUNCION SELECCION INVERSA DE LOS REGISTROS SELECCIONADOS--\\

			//$$(id+'_dataGrid1').invertSelection();
			
			
		//Todas estas funciones estan en herramientas.js
		
		
		
	};// @lock

	richText26.click = function richText26_click (event)// @startlock
	{// @endlock
		if($$(id+"_richText26").getState()!="diabled"){
			
			var relleno = true;
			
			if($("#"+id+"_textField5").val()==""){
				relleno = false;
			}
			if($("#"+id+"_textField8").val()==""){
				relleno = false;
			}
			
			if(relleno){
				
				$("#"+id+"_richText22").hide();
				$$(id+"_richText26").setState("disabled");
				$comp.sources.cajasMovimientos.addNewElement();
				$comp.sources.cajasMovimientos.importeVenta = $$(id+"_textField5").getValue();
				$comp.sources.cajasMovimientos.concepto = $$(id+"_textField8").getValue();
				var fecha = $(".span2").val();
				var dia = fecha.substring(0,2);
				var mes = fecha.substring(3,5);
				mes = mes-1;
				var anio = fecha.substring(6);
				var fechaObjeto = new Date(anio, mes, dia);
				
				$comp.sources.cajasMovimientos.fecha = fechaObjeto;
				$comp.sources.cajasMovimientos.Caja.set($comp.sources.cajasTPV);
				$comp.sources.cajasMovimientos.MedioPago.set($comp.sources.medioPago);
				$comp.sources.cajasMovimientos.save({
					onSuccess:function (){
						$$(id+"_textField5").setValue("");
						$$(id+"_textField8").setValue("");
						$("#"+$comp.id+"_richText18").fadeOut();
						$("#"+$comp.id+"_richText20").fadeOut();
						$(window).scrollTop(0);
						//$("BODY").animate({ "top": "0px" }, "slow" );
						$$(id+"_container16").hide({
							onSuccess:function (e){
								$$(id+"_richText26").setState("default");
							}
						});
						
						
					}
				});
					
			}else{
				$("#"+id+"_richText22").slideDown(100);
			}
			
		}
	};// @lock

	richText27.click = function richText27_click (event)// @startlock
	{// @endlock
		$$(id+"_textField5").setValue("");
		$$(id+"_textField8").setValue("");
		$("#"+id+"_richText22").hide();
		$("#"+$comp.id+"_richText18").fadeOut();
		$("#"+$comp.id+"_richText20").fadeOut();
		$("#"+id+"_container16").fadeOut();
	};// @lock

	textField5.keydown = function textField5_keydown (event)// @startlock
	{// @endlock
		if($$(id+"_textField5").getValue()!=""){
			$("#"+id+"_richText18").fadeIn();
		}
	};// @lock

	textField8.keydown = function textField8_keydown (event)// @startlock
	{// @endlock
		if($$(id+"_textField8").getValue()!=""){
			$("#"+id+"_richText20").fadeIn();
		}
	};// @lock

	richText5.click = function richText5_click (event)// @startlock
	{// @endlock
		$("#"+id+"_dialog2").css("top",200);
		$(window).scrollTop(0);
		$$(id+"_dialog2").hide();
		sources.usuarios.serverRefresh();
		appds.closeDialogEmpresa();		
	};// @lock

	richText17.click = function richText17_click (event)// @startlock
	{// @endlock
		if(confirm("¿Desea eliminar lo(s) movimiento(s) de caja seleccionado(s)?")){
			$comp.sources.cajasMovimientos.eliminarSeleccionados( {
			    onSuccess: function(evt) {
			    	if(evt.result == "error"){
			    		alert("No se puede borrar tickets dispensados");
			    	}else{
			    		$comp.sources.cajasMovimientos.setEntityCollection( evt.result );	
			    	}
			    }
			}, $$(id+'_dataGrid1').getSelectedRows());
		}
			
	};// @lock

	cajasMovimientosEvent.onCurrentElementChange = function cajasMovimientosEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		var total = calculaTotalCaja();
		//$$(id+"_richText19").setValue("TOTAL Ejectivo "+total[0]+"€");
		//$$(id+"_richText23").setValue("TOTAL Tarjeta "+total[1]+"€");
	};// @lock
 
	richText7.click = function richText7_click (event)// @startlock
	{// @endlock

		
		$("#"+id+"_container16").fadeIn(500);
		$("#"+$comp.id+"_textField5").focus();
				
	};// @lock

	richText8.click = function richText8_click (event)// @startlock
	{// @endlock

		$(window).scrollTop(0);
		$$(id+"_dialog3").hide();
		$comp.removeComponent();		
	};// @lock

	fileUpload1.filesUploaded = function fileUpload1_filesUploaded (event)// @startlock
	{// @endlock
		$comp.sources.entidades.save();
	};// @lock
	
	

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
				$$(id+"_dialog1").closeDialog();
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
	WAF.addListener(this.id + "_dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	WAF.addListener(this.id + "_printCaja", "click", printCaja.click, "WAF");
	WAF.addListener(this.id + "_imageButton3", "click", imageButton3.click, "WAF");
	WAF.addListener(this.id + "_imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener(this.id + "_imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener(this.id + "_richText24", "click", richText24.click, "WAF");
	WAF.addListener(this.id + "_richText26", "click", richText26.click, "WAF");
	WAF.addListener(this.id + "_richText27", "click", richText27.click, "WAF");
	WAF.addListener(this.id + "_textField5", "keydown", textField5.keydown, "WAF");
	WAF.addListener(this.id + "_textField8", "keydown", textField8.keydown, "WAF");
	WAF.addListener(this.id + "_richText5", "click", richText5.click, "WAF");
	WAF.addListener(this.id + "_cajasMovimientos", "onCurrentElementChange", cajasMovimientosEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_richText17", "click", richText17.click, "WAF");
	WAF.addListener(this.id + "_richText7", "click", richText7.click, "WAF");
	WAF.addListener(this.id + "_richText8", "click", richText8.click, "WAF");
	WAF.addListener(this.id + "_fileUpload1", "filesUploaded", fileUpload1.filesUploaded, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	WAF.addListener(this.id + "_richText2", "click", richText2.click, "WAF");
	// @endregion// @endlock

	};// @lock
	
	
	
	


}// @startlock
return constructor;
})();// @endlock
