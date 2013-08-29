
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {
		
	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'TPV';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	

//ds Necesito la variable $comp en el componente dialogo para recargar resources desde alli;
vComp = $comp;

btmodales.modalListaRegistros();
btmodales.modalBienvenido();


//-- FUNCION QUE CARGA TODOS LOS RECURSOS DEL COMPONENTE--\\

//appds.cargarDataTPV(vComp);

$(this.id).ready(function(){
	
	appds.cargarDataTPV(vComp);
	
	
});



//Tener el campo de busqueda de codigo enfocado y vacio a la vez;
enfocar();


function enfocar (){
		
	$("input").blur(function (){
		
		
		switch (this.id){
			
			case id+"_textField4": break;
			case id+"_textField5": break;
			case id+"_textField10": break;
			case id+"_textField2": break;
			case id+"_textField7": break;
			case id+"_textField6": break;
			case id+"_textField11": break;
			case id+"_textField12": break;
			case id+"_textField14": break;
			case id+"_textField9": break;
			case "textField1": break;
			case "textField4": break;
			case "textField7": break;
			case "textField6": break;
			case "textField5": break;
			case "textField9": break;
			default : mantenerFoco();
			
		}
		
	});
	
	
}




	
	



//Activación del botón para imprimir		
var printContinuar = getHtmlObj('bContinuarDispensar');

$(printContinuar).printPage({
      url: "impPages/ticket.html",
      message:"Imprimiendo Ticket..."
});

var bPrint = getHtmlObj('bPrint');

$(bPrint).printPage({
      url: "impPages/ticket.html",
      message:"Imprimiendo Duplicado..."
});



//Desactivo el doble click de los botones de TPV
$('.matrix_a').dblclick(function(e){ 
    e.preventDefault();
});

//Evito que se seleccione el texto de los botones
UI.disableSelection(document.body);

//Se crean los modales de Bootstrap

  

var bNuevo = getHtmlObj('imageButton1');	
//bNuevo.popover({'placement':'top', 'trigger' : 'hover', 'content' : 'Nuevo Artículo'});


var app = {};
var app = SPL.getUrlVars()["app"];

		
//++++++++++++++++++++++++++++++++++++++++++
//Se crea un docComercial si no existe ninguno.
//++++++++++++++++++++++++++++++++++++++++++
	

	
	
	

	
	
	

	

//DS DECLARACION DE LA VARIABLE POS A LA QUE SE REFIERE A LAS POSICIONES DE LAS LINEAS
pos = 0;
vPosRestada = null;
//DS DECLARACION DE qString PARA SABER EN QUE MOMENTO EN QUE FAMILIA ESTAMOS
qString = null;

	
	// @region namespaceDeclaration// @startlock
	var infoText = {};	// @richText
	var imageButton4 = {};	// @buttonImage
	var imageButton10 = {};	// @buttonImage
	var imageButton5 = {};	// @buttonImage
	var richText25 = {};	// @richText
	var btnAll = {};	// @buttonImage
	var richText30 = {};	// @richText
	var bOpciones = {};	// @buttonImage
	var imageButton12 = {};	// @buttonImage
	var imageButton7 = {};	// @buttonImage
	var imageButton3 = {};	// @buttonImage
	var imageButton2 = {};	// @buttonImage
	var imageButton8 = {};	// @buttonImage
	var textField4 = {};	// @textField
	var textField3 = {};	// @textField
	var imageButton11 = {};	// @buttonImage
	var button11 = {};	// @button
	var docComercialEvent = {};	// @dataSource
	var imageButton15 = {};	// @buttonImage
	var btnArticulo = {};	// @richText
	var imageButton14 = {};	// @buttonImage
	var imageButton9 = {};	// @buttonImage
	var containerFamilias = {};	// @container
	var bContinuarDispensar = {};	// @richText
	var bCancelDispensar = {};	// @richText
	var richText23 = {};	// @richText
	var richText6 = {};	// @richText
	var richText19 = {};	// @richText
	var richText18 = {};	// @richText
	var richText4 = {};	// @richText
	var richText21 = {};	// @richText
	var richText9 = {};	// @richText
	var bPrint = {};	// @buttonImage
	var richText14 = {};	// @richText
	var richText15 = {};	// @richText
	var lineasCollectionEvent = {};	// @dataSource
	// @endregion// @endlock


	// eventHandlers// @lock
		
	var arElementos = ["Elimina Linea","Modifica Linea","/","Ver Caja"];
	appMenu.abrirMenuSencillo(arElementos2,"MenuPrueba",$comp);
	
	$("#"+id+"_bOpciones").toolbar({
		content: '#MenuPrueba', 
		position: 'right',
		hideOnClick: true
	});
	
	

	infoText.click = function infoText_click (event)// @startlock
	{// @endlock
		UI.confirm('¿Desea borrar los articulos demos?', 'Confirmacion', function(r) {
			
			if(r == true){

				ds.Articulos.borrarArticulosDemos({
					onSuccess:function(){
						$comp.sources.articulos.all();
					}
				});
			
			}
		
		});
		
		
	};// @lock

	imageButton4.click = function imageButton4_click (event)// @startlock
	{// @endlock
			cargarMovimientoCaja_btn();
		mantenerFoco();
	};// @lock

	imageButton10.click = function imageButton10_click (event)// @startlock
	{// @endlock
		btn_borrar();
		mantenerFoco();
	};// @lock

	imageButton5.click = function imageButton5_click (event)// @startlock
	{// @endlock
		var tipoDoc = 1;
		fcBrain.crearDocComercial($comp,tipoDoc);
		mantenerFoco();
	};// @lock

	richText25.mousedown = function richText25_mousedown (event)// @startlock
	{// @endlock
		vTime = 0;
		vTime = new Date();
	};// @lock

	richText25.touchend = function richText25_touchend (event)// @startlock
	{// @endlock
		articulo_btn(this);
		mantenerFoco();
	};// @lock

	richText25.touchstart = function richText25_touchstart (event)// @startlock
	{// @endlock
		vTime = 0;
		vTime = new Date();
	};// @lock

	richText25.mouseup = function richText25_mouseup (event)// @startlock
	{// @endlock
		articulo_btn(this);
		mantenerFoco();
		
	};// @lock

	btnAll.click = function btnAll_click (event)// @startlock
	{// @endlock
		UI.gifCargando();
		qString = null;
		$comp.sources.articulos.all();
		$('.solapa').removeClass('btn-maniadmin-4');
		//$('.matrix_a').removeClass('tpv-btn');
		//this.addClass('disabled');
		botonTodos = getHtmlId('btnAll');
		$$(botonTodos).setState('disabled');

		///this.removeClass('btn-warning');
		mantenerFoco();
	};// @lock

	richText30.click = function richText30_click (event)// @startlock
	{// @endlock
		$$(id+"_dialog4").closeDialog();
	};// @lock

	bOpciones.click = function bOpciones_click (event)// @startlock
	{// @endlock
		mantenerFoco();
	};// @lock

	imageButton12.click = function imageButton12_click (event)// @startlock
	{// @endlock
		UI.gifCargando();
		appds.openDialogMovimiento($comp);
		mantenerFoco();
	};// @lock

	imageButton7.click = function imageButton7_click (event)// @startlock
	{// @endlock
		mantenerFoco();
	};// @lock

	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock
		mantenerFoco();
	};// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		mantenerFoco();
	};// @lock

	imageButton8.click = function imageButton8_click (event)// @startlock
	{// @endlock
		mantenerFoco();
	};// @lock

	textField4.blur = function textField4_blur (event)// @startlock
	{// @endlock
		
		setTimeout(function() { 
		
			if($$(id+"_textField4").getValue() != ""){
				var cobrado = $comp.sources.docComercial.Cobrado;
				if(cobrado != true){
					
					appds.anadirLineaPorCodigo($comp);
					
				}else{
					
					UI.alert('Ya está Cobrado','Atención');
				}
			}
			$$(id+"_textField4").setValue("");

        }, 300);

	};// @lock

	textField4.focus = function textField4_focus (event)// @startlock
	{// @endlock
		
		$$(id+"_textField4").setValue("");	
	
	};// @lock

	textField3.blur = function textField3_blur (event)// @startlock
	{// @endlock
		$comp.sources.docComercial.getCurrentElement();
		$comp.sources.docComercial.Denom = $("#"+id+"_textField3").val();
		$comp.sources.docComercial.save({
			onSuccess: function (){
				$comp.sources.docComercial.serverRefresh();
				$(window).scrollTop(0);
			}
		});
	};// @lock

	imageButton11.click = function imageButton11_click (event)// @startlock
	{// @endlock
		$comp.sources.docComercial.save({
			onSuccess:function(){
				$('#modalLista').modal('show');
				listarDocComercial();
				
				mantenerFoco();
			}
		});
		
	};// @lock

	button11.click = function button11_click (event)// @startlock
	{// @endlock
		$("#"+id+"_container16").text("");
    	$$(getHtmlId("dialog5")).closeDialog(); //cancel button
    			
	};// @lock

	docComercialEvent.onCurrentElementChange = function docComercialEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		if($comp.sources.docComercial.Cobrado == true){
			$$(id+"_richText17").setValue("Cambio: "+formato_numero($comp.sources.docComercial.Cambio,2,".",",")+"€");
			$$(id+"_richText3").setValue("Cobrado");
			$$(id+"_richText17").show();
			$$(id+"_richText3").show();
		}else{
			$$(id+"_richText17").hide();
			$$(id+"_richText3").hide();
		}
	};// @lock

	imageButton15.click = function imageButton15_click (event)// @startlock
	{// @endlock
		result = ds.Metodos.consultar("Familias");
		$comp.sources.familias2.setEntityCollection(result);
		var dialogo = getHtmlId("dialog3");//Coger el dialogo widget
		var jqdialogo = getHtmlId("dialog3");
		
		$$(dialogo).setState("crear");//Estado del dialogo pasa a crear
		
		appds.estadoInicial($comp,"crear");
		
		$("BODY").append($("#"+id+"_dialog3"));
		$$(dialogo).displayDialog();
		$("#"+id+"_dialog3").css("top",20);
		$("#"+id+"_dialog3").css("left",200);
		$("#"+$comp.id+"_textField5").focus();

	};// @lock

	

	imageButton14.click = function imageButton14_click (event)// @startlock
	{// @endlock
		mantenerFoco();
		$(window).scrollTop(0);
		$$(getHtmlId("dialog2")).closeDialog(); //cancel button
	};// @lock

	imageButton9.click = function imageButton9_click (event)// @startlock
	{// @endlock
		$$(id+"_richText14").setValue("Guardar");
		mantenerFoco();
		$(window).scrollTop(0);
		$$(getHtmlId("dialog3")).closeDialog();
	};// @lock

	containerFamilias.click = function containerFamilias_click (event)// @startlock
	{// @endlock
		//GRIDTEST
		var over = '<img id="loading" src="../images/loading.gif">'
   	 	var containerFam = getHtmlObj('containerFamilias');

   	 	$(containerFam).html(over);

		var ruta = '/rest/Familias';
		$.getJSON( ruta, function(data) {
		
   		var articulos = data.__ENTITIES;
  
   	 	$(containerFam).html( '<div class="row-fluid">'
          +'  <ul class="thumbnails" style="list-decoration:none">'
        );
 
    	for (var idx in articulos)
    	{
        	articulo = articulos[idx];
       		// var tabla = getHtmlObj('container4');
       		var nombre = articulo.Nombre.substring(0, 20) + '...';

        	$(containerFam).append(
            '  <li class="product" >'
			+'<span><small>'+nombre+'</small></span>'
            +'  </li>'
           
            ); 
    	} 
    
  		$(containerFam).append( '</ul>'
         +' </div>'
         );

 		});
 
 
 //-> GRITEST
	};// @lock

	bContinuarDispensar.click = function bContinuarDispensar_click (event)// @startlock
	{// @endlock
		dispensar();		
	};// @lock

	bCancelDispensar.click = function bCancelDispensar_click (event)// @startlock
	{// @endlock
		$$(id+"_dialog1").disable();
		$(window).scrollTop(0);
		$$(getHtmlId("dialog1")).closeDialog(); //Cancelar button
		
	};// @lock

	richText23.touchend = function richText23_touchend (event)// @startlock
	{// @endlock
		var dialogo = getHtmlId("dialog3");//Obtengo el dialogo widget
		$$(dialogo).setState("modificar");//El dialogo pasa a estado modificar
		
		appds.estadoInicial($comp, "modificar");
		
		$("BODY").append($("#"+id+"_dialog3"));
		$$(dialogo).displayDialog();
		$("#"+id+"_dialog3").css("top",100);
		$("#"+id+"_dialog3").css("left",200);
	};// @lock

	richText23.click = function richText23_click (event)// @startlock
	{// @endlock
		
		var dialogo = getHtmlId("dialog3");//Obtengo el dialogo widget
		$$(dialogo).setState("modificar");//El dialogo pasa a estado modificar
		
		appds.estadoInicial($comp, "modificar");
		
		$("BODY").append($("#"+id+"_dialog3"));
		$$(dialogo).displayDialog();
		$("#"+id+"_dialog3").css("top",100);
		$("#"+id+"_dialog3").css("left",200);
		$("#"+$comp.id+"_textField2").focus();
	};// @lock

	richText6.click = function richText6_click (event)// @startlock
	{// @endlock
		var familiaselec = this.getValue();
		$comp.sources.articulos.query("Familia.Nombre=:1",familiaselec);
		qString = familiaselec;
		

		$('.solapa').removeClass('btn-maniadmin-4');
		this.addClass('btn-maniadmin-4');

		botonTodos = getHtmlId('btnAll');

		$$(botonTodos).setState('active');
		
		//$('.allArticulos').removeClass('disabled');
		
		mantenerFoco();
	};// @lock

	richText19.click = function richText19_click (event)// @startlock
	{// @endlock
		var dialogo = getHtmlId("dialog3");
		var estado = $$(dialogo).getState();
		$$(id+"_richText14").setState("default");
		if(estado == "crear"){
			appds.estadoCancelar($comp, "crear");
		}else if(estado == "modificar"){
			appds.estadoCancelar($comp, "modificar");
		}
	};// @lock

	richText18.click = function richText18_click (event)// @startlock
	{// @endlock
		var dialogo = getHtmlId("dialog3");
		var estado = $$(dialogo).getState();
		if(estado == "crear"){
			
			var codigo = $$($comp.id+"_textField5").getValue();
			var precio = $$($comp.id+"_textField6").getValue();
			var descripcion = $$($comp.id+"_textField7").getValue();
			$comp.sources.articulos.addNewElement();
			$comp.sources.articulos.Codigo = codigo;
			$comp.sources.articulos.Precio = precio;
			$comp.sources.articulos.Descripcion = descripcion;
			$comp.sources.articulos.Familia.set($comp.sources.familias2.getCurrentElement());
			$comp.sources.articulos.save();
			$comp.sources.articulos.serverRefresh();
			if(WAF.directory.currentUser().fullName == "TG"){
				ds.PreArticulos.creaPreArticulo(codigo,precio,descripcion,$comp.sources.familias2.Nombre);
			}
			$$(id+"_richText14").setState("default");
			mantenerFoco();
			$(window).scrollTop(0);
			$$(id+"_dialog3").closeDialog();
		}else{
			$comp.sources.articulos.removeCurrent();
			$comp.sources.articulos.serverRefresh({
				onSuccess:function (event){
					$$(id+"_richText4").hide();
					mantenerFoco();
					$(window).scrollTop(0);
					$$(id+"_dialog3").closeDialog();
				}
			});
		}
	};// @lock

	richText4.click = function richText4_click (event)// @startlock
	{// @endlock
		appds.estadoConfirmacion($comp, "modificar");
	};// @lock

	richText21.click = function richText21_click (event)// @startlock
	{// @endlock
		$('#'+id+'_richText16').slideUp('fast');
		mantenerFoco();
		$(window).scrollTop(0);
		$comp.sources.docComercial.serverRefresh();
		$$(getHtmlId("dialog2")).closeDialog(); //cancel button
	};// @lock

	richText9.click = function richText9_click (event)// @startlock
	{// @endlock
		var relleno = true;
		
		if($("#"+id+"_textField12").val() == ""){
			relleno = false;
		}
		if($("#"+id+"_textField9").val() == ""){
			relleno = false;
		}
		if($("#"+id+"_textField14").val() == ""){
			relleno = false;
		}
		
		if(relleno){
			
			$('#'+id+'_richText16').slideUp(100);
		
			$comp.sources.lineasCollection.Descripcion = $("#"+id+"_textField12").val();
			$comp.sources.lineasCollection.PrecioUnitario = $("#"+id+"_textField9").val();
			$comp.sources.lineasCollection.Cantidad = $("#"+id+"_textField14").val();
			$comp.sources.lineasCollection.save();
			$comp.sources.docComercial.serverRefresh();
			mantenerFoco();
			$(window).scrollTop(0);
			$$(getHtmlId("dialog2")).closeDialog(); //Guardar button
				
		}else{
			$('#'+id+'_richText16').slideDown(100);
		}
	};// @lock

	bPrint.click = function bPrint_click (event)// @startlock
	{// @endlock
		var docActual = $comp.sources.docComercial.ID;
		localStorage.docActual = docActual;
		mantenerFoco();
	};// @lock

	richText14.click = function richText14_click (event)// @startlock
	{// @endlock
		
		if($$(id+"_richText14").getState() != "disabled"){
			
			var relleno = true;
			if($("#"+id+"_textField5").val()==""){
				relleno = false
			}
			if($("#"+id+"_textField6").val()==""){
				relleno = false
			}
			if($("#"+id+"_textField7").val()==""){
				relleno = false
			}
			
			if(relleno){
				$("#"+id+"_richText23").slideUp(100);
				$$(id+"_richText14").setState("disabled");
				var dialogo = getHtmlId("dialog3");
				var estado = $$(dialogo).getState();
				//Si el usuario va modificar o borrar el articulos
				if(estado == "modificar"){
					
					//appds.modificarArticulo($comp); DA FALLO
					$("#"+id+"_textField2").blur();
					
					var codigo = $$($comp.id+"_textField5").getValue();
					var precio = $$($comp.id+"_textField6").getValue();
					var descripcion = $$($comp.id+"_textField7").getValue();
					var familia = ds.Familias.getFamilia($$($comp.id+"_combobox2").getValue());
				
					$comp.sources.articulos.Codigo = codigo;
					$comp.sources.articulos.Precio = precio;
					$comp.sources.articulos.Descripcion = descripcion;
					$comp.sources.articulos.Familia.set(familia);
					$comp.sources.articulos.save({
						onSuccess:function(event){
							$comp.sources.articulos.serverRefresh();
							if(qString != null){
								$comp.sources.articulos.query("Familia.Nombre =:1",qString);
							}
							$$($comp.id+"_richText14").setState("default");
							mantenerFoco();
							$(window).scrollTop(0);
							$$($comp.id+'_dialog3').closeDialog();
						}
					});
					
				}else if (estado == "crear"){
					appds.estadoConfirmacion($comp, "crear");
					
				}
			}else{
				$("#"+id+"_richText23").slideDown(100);
			}
			
			
			
			
		}
	};// @lock

	richText15.click = function richText15_click (event)// @startlock
	{// @endlock
		$$(id+"_richText14").setValue("Guardar");
		$("#"+id+"_richText23").slideUp("fast");
		mantenerFoco();
		$(window).scrollTop(0);
		$$(getHtmlId("dialog3")).closeDialog();
	};// @lock


	lineasCollectionEvent.onCollectionChange = function lineasCollectionEvent_onCollectionChange (event)// @startlock
	{// @endlock
		var docID = $comp.sources.docComercial.ID;
		if(docID){	
			fcBrain.sumarLineas(id,docID)
		}
		
		$$(id+"_dataGrid1").setSelectedRows([pos]);
		
	};// @lock
	
	
	
	
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_infoText", "click", infoText.click, "WAF");
	WAF.addListener(this.id + "_richText25", "mousedown", richText25.mousedown, "WAF");
	WAF.addListener(this.id + "_imageButton4", "click", imageButton4.click, "WAF");
	WAF.addListener(this.id + "_imageButton10", "click", imageButton10.click, "WAF");
	WAF.addListener(this.id + "_imageButton5", "click", imageButton5.click, "WAF");
	WAF.addListener(this.id + "_richText25", "touchend", richText25.touchend, "WAF");
	WAF.addListener(this.id + "_richText25", "touchstart", richText25.touchstart, "WAF");
	WAF.addListener(this.id + "_richText25", "mouseup", richText25.mouseup, "WAF");
	WAF.addListener(this.id + "_textField3", "blur", textField3.blur, "WAF");
	WAF.addListener(this.id + "_textField4", "blur", textField4.blur, "WAF");
	WAF.addListener(this.id + "_btnAll", "click", btnAll.click, "WAF");
	WAF.addListener(this.id + "_richText30", "click", richText30.click, "WAF");
	WAF.addListener(this.id + "_textField4", "focus", textField4.focus, "WAF");
	WAF.addListener(this.id + "_bOpciones", "click", bOpciones.click, "WAF");
	WAF.addListener(this.id + "_imageButton12", "click", imageButton12.click, "WAF");
	WAF.addListener(this.id + "_imageButton7", "click", imageButton7.click, "WAF");
	WAF.addListener(this.id + "_imageButton3", "click", imageButton3.click, "WAF");
	WAF.addListener(this.id + "_imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener(this.id + "_imageButton8", "click", imageButton8.click, "WAF");
	WAF.addListener(this.id + "_imageButton11", "click", imageButton11.click, "WAF");
	WAF.addListener(this.id + "_button11", "click", button11.click, "WAF");
	WAF.addListener(this.id + "_docComercial", "onCurrentElementChange", docComercialEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_imageButton15", "click", imageButton15.click, "WAF");
	WAF.addListener(this.id + "_richText6", "click", richText6.click, "WAF");
	WAF.addListener(this.id + "_btnArticulo", "mousedown", btnArticulo.mousedown, "WAF");
	WAF.addListener(this.id + "_btnArticulo", "mouseup", btnArticulo.mouseup, "WAF");
	WAF.addListener(this.id + "_btnArticulo", "touchstart", btnArticulo.touchstart, "WAF");
	WAF.addListener(this.id + "_btnArticulo", "touchend", btnArticulo.touchend, "WAF");
	WAF.addListener(this.id + "_richText23", "touchend", richText23.touchend, "WAF");
	WAF.addListener(this.id + "_imageButton14", "click", imageButton14.click, "WAF");
	WAF.addListener(this.id + "_imageButton9", "click", imageButton9.click, "WAF");
	WAF.addListener(this.id + "_containerFamilias", "click", containerFamilias.click, "WAF");
	WAF.addListener(this.id + "_bContinuarDispensar", "click", bContinuarDispensar.click, "WAF");
	WAF.addListener(this.id + "_bCancelDispensar", "click", bCancelDispensar.click, "WAF");
	WAF.addListener(this.id + "_richText23", "click", richText23.click, "WAF");
	WAF.addListener(this.id + "_richText19", "click", richText19.click, "WAF");
	WAF.addListener(this.id + "_richText18", "click", richText18.click, "WAF");
	WAF.addListener(this.id + "_richText4", "click", richText4.click, "WAF");
	WAF.addListener(this.id + "_richText21", "click", richText21.click, "WAF");
	WAF.addListener(this.id + "_richText9", "click", richText9.click, "WAF");
	WAF.addListener(this.id + "_bPrint", "click", bPrint.click, "WAF");
	WAF.addListener(this.id + "_richText14", "click", richText14.click, "WAF");
	WAF.addListener(this.id + "_richText15", "click", richText15.click, "WAF");
	WAF.addListener(this.id + "_lineasCollection", "onCollectionChange", lineasCollectionEvent.onCollectionChange, "WAF");
	// @endregion// @endlock

	
	};// @lock

//Funciones de la página.


 
 
//Cargar el pago (Dispensar)
function cargarMedioPago(donde){
	
	$$(id+"_dialog1").enable();
 		
	var ruta = '/rest/MedioPago';
	$.getJSON( ruta, function(data) {

   var medios = data.__ENTITIES;
  
//  var tabla = getHtmlObj('container6');
   var tabla = donde;
     $(tabla).html('<form class="form-inline"> <fieldset> <legend>Dispensar</legend>'); 

    for (var idx in medios){
       medio = medios[idx];

      $(tabla).append('<div class="control-group success">');
      
	//INPUTS DE BOOTSTRAP
	
      $(tabla).append('<label class="control-label" for="input_'+ medio.Codigo +'">'+ medio.Descripcion +'</label>');
      $(tabla).append('<input  type="number"  id="input_'+ medio.Codigo +'" class="entrada cobro" placeholder='+ medio.Descripcion +' >');
    //  $(tabla).append(' <span class="help-block">Indique el importe en '+ medio.Descripcion +'</span>');     
   

  //INPUTS DE WAKANDA:
/*    $(tabla).append('<label id="{id}label1" for={id}input_'+ medio.Codigo +'" data-valign="middle" data-type="label" data-margin="5" data-lib="WAF" data-constraint-top="true" data-constraint-left="true" class="waf-widget waf-label default inherited  waf-label-textField control-label">'+medio.Descripcion+'</label>');
	$(tabla).append('<input value="[vEfectivo]" type="text" id="{id}input_'+ medio.Codigo +'" data-type="textField" data-readOnly="false" data-password="false" data-multiline="false" data-lib="WAF" data-label-position="left" data-label="'+ medio.Descripcion +'" data-format="###,###,###.00" data-datapicker-icon-only="false" data-constraint-top="true" data-constraint-right="false" data-constraint-left="true" data-constraint-bottom="false" data-binding="vEfectivo" class="waf-widget waf-textField default inherited entrada"/>');
    */
    	$(tabla).append('</div></div>');
 
    } 
    
 	 $(tabla).append('</fieldset></form>'); 
 	 $(tabla).fadeIn();
	 $('#input_EF').attr("autofocus","autofocus"); 

	 
	 
	 $(":input").bind('keypress', function(e) {
		if(e.keyCode==13){
			var activo = $$(id+"_dialog1").isDisabled();
			console.log($$(id+"_dialog1").isDisabled());
			if(activo == false){
				$('#input_EF').blur();
				var printContinuar = getHtmlObj('bContinuarDispensar');
				$(printContinuar).click();
			}
			
		}
	  });
  
	
});
		


setTimeout(function(){ //Le pongo un tiempo de espera porque al cargar, lineasCollection se refrescaba y perdía la posición.
		   




var vSumaR =  Math.round(vSuma*100)/100;
vSumaR = vSumaR.toFixed(2);
		
 //INICIALIZACIÓN DE LOS CAMPOS Y EVENTOS
 
 

var total={};
var valorActual={};
var diferencia = {};
total = 0;  
$(".cobro").blur( function(event) {
	
	total = 0;   
	$(".cobro").each( function(){
		total += $(this).val() * 1;
	});

});

$(".cobro").focus( function(event) {

	total += $(this).val() * 1;
	diferencia = vSumaR - total;
	
	if(diferencia > 0){
		diferencia = parseFloat(diferencia);//ds pasar a numero la variable
		diferencia = diferencia.toFixed(2);//ds fijar 2 decimales a la variable
		console.log("diferencia :"+diferencia);
		
		if(this.id == 'input_EF'){
			diferenciaCambio = diferencia;
		}
		$(this).val(diferencia);
		$(this).select();
	}else if(vSumaR < 0){
		diferencia = diferencia.toFixed(2);//ds fijar 2 decimales a la variable
		$(this).val(diferencia);
		$(this).select();
		$('#input_EF').attr('readonly', true);
		$('#input_TJ').attr('readonly', true);
	}
	
	


});	

//->
        },500);

      
}
 
 

/*
--------------Funcion para iPad => para volver a su posicion original cuando salga el teclado-------------------
*/

var botonArticulo = getHtmlId('richText25');
$('.matrix_articulos').live("touchstart", function(e){
    e.preventDefault();
});
//btnArticulo

// Dos funciones para que cuando se esconda el teclado la pantalla vuelva a su posicion incial...¡¡

var currentscroll = 0;

$(':input').bind('focus',function() {
	
    currentscroll = $(window).scrollTop();
 
});

$(':input').bind('blur',function() {
	
    if(currentscroll != $(window).scrollTop()){
    	$(window).scrollTop(currentscroll);
    }
});


//Funcion de cargar los movimientos de caja e imprimir

function cargarMovimientoCaja_btn(){
	
	var cobrado = $comp.sources.docComercial.Cobrado;
	botonDispensar = getHtmlId('imageButton4');
	if(cobrado != true){
		
		UI.gifCargando(); //el chirimbolo de "carga"
			
		var dialogo = getHtmlId("dialog1");
		var jqdialogo = getHtmlObj("dialog1");		
	
		$("BODY").append($(jqdialogo));	
		
		$(jqdialogo).css("left",300);
		setTimeout(function(){ //Espero a abrir el diálogo para que de tiempo a que se carguen los eventos
		$$(dialogo).displayDialog();
		},600);

		var donde = getHtmlObj('container6');
		//En funciones de la página:
		cargarMedioPago(donde); //Le paso el contenedor dónde tiene que cargarlo
		
	}else{
		
		$$(botonDispensar).setState('disabled');
		UI.alert('Ya está Cobrado','Atención');
		
	}
	
	
}

//Funcion cuando hacemos un click o mantenemos pulsado un articulo

function articulo_btn(esteObjeto){
	
	var vTimeResta = new Date();
	vTimeResta = vTimeResta - vTime;
	
	if (vTimeResta >= 700) {
		result = ds.Metodos.consultar("Familias");
		$comp.sources.familias2.setEntityCollection(result);
		vTime = 0;
		var dialogo = getHtmlId("dialog3");//Obtengo el dialogo widget
		$$(dialogo).setState("modificar");//El dialogo pasa a estado modificar
		
		appds.estadoInicial($comp, "modificar",esteObjeto);
		
		
	}else{
		
		var cobrado = $comp.sources.docComercial.Cobrado;
		botonArticulo = getHtmlId('richText25');
		if(cobrado != true){
			
			appds.anadirLinea($comp,esteObjeto);
			
		}else{
			
			$$(botonArticulo).setState('disabled');
			UI.alert('Ya está Cobrado','Atención');
			
		}

	}
}

function btn_borrar(){
	var cobrado =  $comp.sources.docComercial.Cobrado;
	var referencia = $comp.sources.docComercial.Referencia;
	if(cobrado == true){
		NegativoTicket();
	}else if (referencia != null){
		UI.alert('Ya está Abonado','Atención');
	}else{
		borrarTicket();
	}
}

function borrarTicket(){
	
	UI.confirm('¿Desea borrar este ticket?', 'Confirmacion', function(r) {
	    if (r == true) {
	    	
	        $comp.sources.docComercial.removeCurrent();
	        $comp.sources.docComercial.all({
	            onSuccess: function(event) {
	                if ($comp.sources.docComercial.length == 0) {
	                    //ds.DocComercial.crearPrincipio
	                    fcBrain.crearDocComercial($comp, 1, {
	                        onSuccess: function(event) {
	                            $comp.sources.docComercial.all({
	                                onSuccess: function(event) {
	                                    tamanio = $comp.sources.docComercial.length;
	                                    if (tamanio == 0) {
	                                        fcBrain.crearDocComercial($comp, 1);
	                                        tamanio = 1;
	                                    }
	                                    setTimeout(function() { //Le pongo un tiempo de espera porque al cargar, lineasCollection se refrescaba y perdía la posición.
	                                        $comp.sources.docComercial.select(tamanio - 1);

	                                    }, 300);
	                                } // Fin de On Success de All
	                            });// Fin de All
	                        }
	                    });
	                }
	            }
	        });
	    }
	});
}

function NegativoTicket(){
	UI.confirm('Ya está cobrado, no se puede eliminar ¿Desea abonar este ticket?', 'Confirmacion', function(r) {
	    if (r == true) {
	    	
	    	var tipoDoc = 1;
			fcBrain.crearDocComercial($comp,tipoDoc,true);	
	    	
	    }
	    	
	 });
}

function dispensar(){
	var aMediosPagos = [$("#input_EF").val(),$("#input_TJ").val()]
		
		for (var i =0; i < aMediosPagos.length; i++){
			
			if(aMediosPagos[i] != "" && aMediosPagos[i] != 0){
				$comp.sources.cajasMovimientos.newEntity();
				$comp.sources.cajasMovimientos.importeVenta = vSuma;
				$comp.sources.cajasMovimientos.entregado = aMediosPagos[i];
				$comp.sources.cajasMovimientos.fecha = new Date();
				$comp.sources.cajasMovimientos.Documento.set($comp.sources.docComercial);
				$comp.sources.cajasMovimientos.Caja.set($comp.sources.cajasTPV);
				switch(i){
					case 0: var m = ds.MedioPago.asignarMedioPago("Efectivo"); 
							$comp.sources.cajasMovimientos.MedioPago.set(m);
							console.log("valor del campo:"+aMediosPagos[i]);
							console.log("diferenciaCambio: "+diferenciaCambio);
							var cambio = aMediosPagos[i] - diferenciaCambio;
							/*console.log("Cambio: "+cambio);*/
							diferenciaCambio = 0;
							if(cambio > 0){
								$comp.sources.docComercial.Cambio = cambio;
								localStorage.cambio = formato_numero(cambio,2,".",",")+"€";
								//alert("Cambio: "+formato_numero(cambio,2,",",".")+"€");
						 		UI.alert(localStorage.cambio,'Devolución');

							}else{
								localStorage.cambio= 0;
							}
							break;
					case 1: var m = ds.MedioPago.asignarMedioPago("Tarjeta"); 
							$comp.sources.cajasMovimientos.MedioPago.set(m);
							break;
				}
				$comp.sources.cajasMovimientos.save({
					onSuccess: function(){
						$comp.sources.cajasMovimientos.serverRefresh();
						
					}
				});
			}

		}
		
		var docActual = $comp.sources.docComercial.ID;
		localStorage.docActual = docActual;
		localStorage.Total = vSuma.toFixed(2);
		$comp.sources.docComercial.Cobrado = true;
		$comp.sources.docComercial.save();
		
		$$(id+"_dialog1").disable();
		
		$(window).scrollTop(0);
		$$(getHtmlId("dialog1")).closeDialog({
			onSuccess: function(){
				if(localStorage.cambio  > 0){
					UI.alert(localStorage.cambio,'Devolución');
				}					
			}
		}); //Guardar button
		
	
		 dataGrid1Lineas = getHtmlObj('dataGrid1');		
		$('#dataGrid2 .waf-dataGrid-body').scrollLeft(10);
   
 
}

function listarDocComercial(){
	   
	
	$comp.sources.docComercial.all({
		onSuccess:function(){
			var resultado = $comp.sources.docComercial;
			var lineas = $comp.sources.lineasCollection;
			var caja = $comp.sources.cajasTPV.Codigo;
				
			var html="";
			//var html = '<ul class="nav nav-tabs nav-stacked">';
			var html = "<table class='table table-hover ' id='tabla_tickets'>";

			html += '<thead>'
			+'<tr> <th>#Caja</th>'
			+'<th>Venta Nº</th>'
			+'<th>Descripción</th>'
			+'<th>Importe</th>'
			+'</thead><tbody>';

			for (var i = 0; i < resultado.length; i++){
				resultado.getElement(i, { onSuccess: function(event) // we get the element of position i  
		        {
		        
		        	var entity = event.element;
		        	
					if (entity.Denom){
						var denominacion = entity.Denom;
					}else{
						var denominacion = "";
					}
					
			        if(entity.Cobrado == false){
			       		var total = ds.Lineas.devolverTotal(entity.ID);
			       		total = total.toFixed(2);
			       		html += "<tr class='linkDoc lead' id='"+event.position+"'><td><h6><code>"+caja+"</code></h6></td><td><h6>"+entity.Numero +"</h6></td><td><h6 class='label label-success'>"+ denominacion +"</h6></td><td><h6>"+total+"€</h6></td></tr>";
						console.log(event.position);
		//	html += "<li><a class='linkDoc' id='"+event.position+"' ><h5>Numero: "+entity.Numero +" "+ denominacion +" </h5></a></li>";

			       }
		       }
			   });
			}
			html += "</tbody></table>";
			
			//html += '</ul>';
			
			//$("#"+id+"_container16").append(html);
			$('#modalListaBody').html(html);
			
		  	$('.linkDoc').click(function(){ 
		  	UI.gifCargando();
		    	$comp.sources.docComercial.select(this.id);
		    	mantenerFoco();
		    	$('#modalLista').modal('hide');
		    	/*$("#"+id+"_container16").text("");
		    	$(getHtmlId("dialog5")).closeDialog(); //cancel button*/
		   	});
		}
	});
	
   	
}

TPV = {}; //defino el objeto global

TPV.mantenerFoco = function(){
	
	
	if(window.navigator.platform != "iPad"){
		$("#"+id+"_textField4").focus();
	}
	
  }

}// @startlock
return constructor;
})();// @endlock

		