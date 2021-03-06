﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {
		
	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'TPV';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	
//+++ ESQUEMA DEL CODIGO TPV.js +++\\
/*

	1.- Operaciones y cargas necesarias para el funcionamiento del TPV.
	
	2.- EventHandlers.
	
	3.- Declaracion Objeto TPV.

*/
//++++++++++++++++++++++++++++++++++\\	

	
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\ 
//++ Operaciones y cargas necesarias para el funcionamiento del TPV ++\\
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\ 

//++ Declaracion de Variables del TPV ++\\

var app = {};
var app = SPL.getUrlVars()["app"];

//DS DECLARACION DE LA VARIABLE POS A LA QUE SE REFIERE A LAS POSICIONES DE LAS LINEAS
pos = 0;
vPosRestada = null;

//DS DECLARACION DE qString PARA SABER EN QUE MOMENTO EN QUE FAMILIA ESTAMOS
qString = null;

//ds Necesito la variable $comp en el componente dialogo para recargar resources desde alli;
vComp = $comp;

//-- FUNCION QUE CARGA TODOS LOS RECURSOS DEL COMPONENTE (Tablas)--\\
$(this.id).ready(function(){
	
	if(!vtpv){
		appds.cargarDataTPV(vComp);
		var arElementos = ["Nuevo Ticket","Borrar Ticket","Dispensar Ticket","Imprimir Duplicado","Ticket Pendientes","Elimina Linea","Modifica Linea","Ver Caja","Nuevo Articulo"];
		Menu.abrirMenuSencillo(arElementos,"MenuTPV",$comp);

		$("#"+id+"_bOpciones").toolbar({
			content: '#MenuTPV', 
			position: 'bottom',
			hideOnClick: true
		});
	}else{
		sources.articulos.allEntities();
		$comp.sources.docComercial.all();
		TPV.pintarFamilias();
		TPV.pintarFamiliasDialog();
		$("#"+id+"_bOpciones").toolbar({
			content: '#MenuTPV', 
			position: 'bottom',
			hideOnClick: true
		});
	}
});

//++ Carga de Modales ++\\
btmodales.modalListaRegistros();
btmodales.modalBienvenido();


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
			default : TPV.mantenerFoco();
		}
	});
}


// Llamada a la creacion de un menu dinamico de prueba;
// Se crea un array con todos los elementos del menu que se quiera mostrar;
// La barra En diagonal "/" indica un espacio entre dos elementos;


//Activación del botón para imprimir		
var printContinuar = getHtmlObj('bContinuarDispensar');

$(printContinuar).printPage({
      url: "impPages/ticket.html",
      message:"Imprimiendo Ticket..."
});

//Desactivo el doble click de los botones de TPV
$('.matrix_a').dblclick(function(e){ 
    e.preventDefault();
});

//Evito que se seleccione el texto de los botones
UI.disableSelection(document.body);

$('.matrix_articulos').live("touchstart", function(e){
    e.preventDefault();
});

/*
--------------Funcion para iPad => para volver a su posicion original cuando salga el teclado-------------------
*/

// Dos funciones para que cuando se esconda el teclado la pantalla vuelva a su posicion incial...¡¡

var currentscroll = 0;

$(':input').bind('focus',function() {
	
    currentscroll = $(window).scrollTop();
 
});

$(':input').bind('blur',function() {
	
    if(currentscroll != $(window).scrollTop()){
    	$(window).scrollTop(0);
    }
});

//-- Procedimiento del cambio de orientazion del iPad--\\

readDeviceOrientation();
window.onorientationchange = readDeviceOrientation;
function readDeviceOrientation() {

    switch (window.orientation) {  
    case 0:  
    
        // Portrait
        TPV.orientacionVertical();
        break; 
        
    case 180:  
    
        // Portrait (Upside-down)
        TPV.orientacionVertical();
        break; 
  
    case -90:  
    
        // Landscape (Clockwise)
        TPV.orientacionHorizontal();
        break;  
  
    case 90:  
    
        // Landscape  (Counterclockwise)
        TPV.orientacionHorizontal();
        break;
    }
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\ 
//++ FIN Operaciones y cargas necesarias para el funcionamiento del TPV ++\\
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\ 

	
	// @region namespaceDeclaration// @startlock
	var image1 = {};	// @image
	var infoText = {};	// @richText
	var btnAll = {};	// @buttonImage
	var richText30 = {};	// @richText
	var bOpciones = {};	// @buttonImage
	var textField4 = {};	// @textField
	var docComercialEvent = {};	// @dataSource
	var btnArticulo = {};	// @richText
	var imageButton14 = {};	// @buttonImage
	var imageButton9 = {};	// @buttonImage
	var bContinuarDispensar = {};	// @richText
	var bCancelDispensar = {};	// @richText
	var richText23 = {};	// @richText
	var richText19 = {};	// @richText
	var richText18 = {};	// @richText
	var richText4 = {};	// @richText
	var richText21 = {};	// @richText
	var richText9 = {};	// @richText
	var richText14 = {};	// @richText
	var richText15 = {};	// @richText
	var lineasCollectionEvent = {};	// @dataSource
	// @endregion// @endlock


	// eventHandlers// @lock

	image1.touchend = function image1_touchend (event)// @startlock
	{// @endlock
		TPV.articulos_btn(this);
		TPV.mantenerFoco();
	};// @lock

	image1.touchstart = function image1_touchstart (event)// @startlock
	{// @endlock
		vTime = 0;
		vTime = new Date();
	};// @lock

	image1.mouseup = function image1_mouseup (event)// @startlock
	{// @endlock
		

		TPV.articulos_btn(this);
		TPV.mantenerFoco();
		

	};// @lock

	image1.mousedown = function image1_mousedown (event)// @startlock
	{// @endlock
		vTime = 0;
		vTime = new Date();
		

	};// @lock

	infoText.click = function infoText_click (event)// @startlock
	{// @endlock
		UI.confirm('¿Desea borrar los articulos demos?', 'Confirmacion', function(r) {
			
			if(r == true){

				ds.Articulos.borrarArticulosDemos({
					onSuccess:function(){
						sources.articulos.all();
					},
					onError:function(){
						UI.alert("No se ha podido borrar los articulos demos","ERROR");
					}
				});
			
			}
		
		});
		
		
	};// @lock

	btnAll.click = function btnAll_click (event)// @startlock
	{// @endlock
		UI.gifCargando();
		sources.articulos.all();
		$('.solapa').removeClass('btn-maniadmin-4');
		botonTodos = getHtmlId('btnAll');
		$$(botonTodos).setState('disabled');
		TPV.recargarFamilias();
		qString = null;
		TPV.mantenerFoco();
	};// @lock

	richText30.click = function richText30_click (event)// @startlock
	{// @endlock
		$$(id+"_dialog4").closeDialog();
	};// @lock

	bOpciones.click = function bOpciones_click (event)// @startlock
	{// @endlock
		TPV.mantenerFoco();
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

	

	imageButton14.click = function imageButton14_click (event)// @startlock
	{// @endlock
		TPV.mantenerFoco();
		$(window).scrollTop(0);
		$$(getHtmlId("dialog2")).closeDialog(); //cancel button
	};// @lock

	imageButton9.click = function imageButton9_click (event)// @startlock
	{// @endlock
		$$(id+"_richText14").setValue("Guardar");
		TPV.mantenerFoco();
		$(window).scrollTop(0);
		$$(getHtmlId("dialog3")).closeDialog();
	};// @lock

	bContinuarDispensar.click = function bContinuarDispensar_click (event)// @startlock
	{// @endlock
		$("#"+id+"_bOpciones").click();
		TPV.dispensar();
	};// @lock

	bCancelDispensar.click = function bCancelDispensar_click (event)// @startlock
	{// @endlock
		$("#"+id+"_bOpciones").click();
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
			var familia = ds.Familias.getFamilia($("#select-familias2").val());
			var codigo = $$($comp.id+"_textField5").getValue();
			var precio = $$($comp.id+"_textField6").getValue();
			var descripcion = $$($comp.id+"_textField7").getValue();
			sources.articulos.addNewElement();
			sources.articulos.Codigo = codigo;
			sources.articulos.Precio = precio;
			sources.articulos.Descripcion = descripcion;
			sources.articulos.Familia.set(familia);
			sources.articulos.save({
				onSuccess:function(){
					sources.articulos.serverRefresh();
					if(WAF.directory.currentUser().fullName == "TG"){
						ds.PreArticulos.creaPreArticulo(codigo,precio,descripcion,sources.familias2.Nombre);
					}
				},
				onError:function(){
					UI.alert("No se ha podido crear el articulo","ERROR");
				}
			});
			
			$$(id+"_richText14").setState("default");
			TPV.mantenerFoco();
			$(window).scrollTop(0);
			$$(id+"_dialog3").closeDialog();
		}else{
			sources.articulos.removeCurrent({
				onError:function(){
					UI.alert("No se ha podido eliminar el articulo","ERROR");
				}
			});
			sources.articulos.serverRefresh({
				onSuccess:function (event){
					$$(id+"_richText4").hide();
					TPV.mantenerFoco();
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
		TPV.mantenerFoco();
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
			$comp.sources.lineasCollection.save({
				onError:function(){
					UI.alert("No se ha podido modificar la linea","ERROR");
				}
			});
			
			pos = $comp.sources.lineasCollection.Posicion;
			$comp.sources.docComercial.serverRefresh();
			TPV.mantenerFoco();
			$(window).scrollTop(0);
			$$(getHtmlId("dialog2")).closeDialog(); //Guardar button
				
		}else{
			$('#'+id+'_richText16').slideDown(100);
		}
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
					var familia = ds.Familias.getFamilia($("#select-familias2").val());
					sources.articulos.Codigo = codigo;
					sources.articulos.Precio = precio;
					sources.articulos.Descripcion = descripcion;
					sources.articulos.Familia.set(familia);
					sources.articulos.save({
						onSuccess:function(event){
							sources.articulos.serverRefresh();
							if(qString != null){
								sources.articulos.query("Familia.Nombre =:1",qString);
							}
							$$($comp.id+"_richText14").setState("default");
							TPV.mantenerFoco();
							$(window).scrollTop(0);
							$$($comp.id+'_dialog3').closeDialog();
						},
						onError:function(){
							UI.alert("No se ha podido modificar el articulo","ERROR");
							$$($comp.id+"_richText14").setState("default");
							TPV.mantenerFoco();
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
		TPV.mantenerFoco();
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
	WAF.addListener(this.id + "_image1", "touchend", image1.touchend, "WAF");
	WAF.addListener(this.id + "_image1", "touchstart", image1.touchstart, "WAF");
	WAF.addListener(this.id + "_image1", "mouseup", image1.mouseup, "WAF");
	WAF.addListener(this.id + "_image1", "mousedown", image1.mousedown, "WAF");
	WAF.addListener(this.id + "_lineasCollection", "onCollectionChange", lineasCollectionEvent.onCollectionChange, "WAF");
	WAF.addListener(this.id + "_infoText", "click", infoText.click, "WAF");
	WAF.addListener(this.id + "_textField4", "blur", textField4.blur, "WAF");
	WAF.addListener(this.id + "_btnAll", "click", btnAll.click, "WAF");
	WAF.addListener(this.id + "_richText30", "click", richText30.click, "WAF");
	WAF.addListener(this.id + "_textField4", "focus", textField4.focus, "WAF");
	WAF.addListener(this.id + "_bOpciones", "click", bOpciones.click, "WAF");
	WAF.addListener(this.id + "_docComercial", "onCurrentElementChange", docComercialEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_btnArticulo", "mousedown", btnArticulo.mousedown, "WAF");
	WAF.addListener(this.id + "_btnArticulo", "mouseup", btnArticulo.mouseup, "WAF");
	WAF.addListener(this.id + "_btnArticulo", "touchstart", btnArticulo.touchstart, "WAF");
	WAF.addListener(this.id + "_btnArticulo", "touchend", btnArticulo.touchend, "WAF");
	WAF.addListener(this.id + "_richText23", "touchend", richText23.touchend, "WAF");
	WAF.addListener(this.id + "_imageButton14", "click", imageButton14.click, "WAF");
	WAF.addListener(this.id + "_imageButton9", "click", imageButton9.click, "WAF");
	WAF.addListener(this.id + "_bContinuarDispensar", "click", bContinuarDispensar.click, "WAF");
	WAF.addListener(this.id + "_bCancelDispensar", "click", bCancelDispensar.click, "WAF");
	WAF.addListener(this.id + "_richText23", "click", richText23.click, "WAF");
	WAF.addListener(this.id + "_richText19", "click", richText19.click, "WAF");
	WAF.addListener(this.id + "_richText18", "click", richText18.click, "WAF");
	WAF.addListener(this.id + "_richText4", "click", richText4.click, "WAF");
	WAF.addListener(this.id + "_richText21", "click", richText21.click, "WAF");
	WAF.addListener(this.id + "_richText9", "click", richText9.click, "WAF");
	WAF.addListener(this.id + "_richText14", "click", richText14.click, "WAF");
	WAF.addListener(this.id + "_richText15", "click", richText15.click, "WAF");
	// @endregion// @endlock

	
	};// @lock




//+++++++++++++++++++++++++++++++++++\\
//++ OBJETO TPV (Funciones del tpv) ++\\
//+++++++++++++++++++++++++++++++++++\\




TPV = {};

TPV.mantenerFoco = function(){
	
	if(window.navigator.platform != "iPad"){
		$("#"+id+"_textField4").focus();
	}
	
}

TPV.eliminaLinea = function(){
	var cobrado = $comp.sources.docComercial.Cobrado;
	if(cobrado != true){
		pos = $comp.sources.lineasCollection.Posicion - 1;
		vPosRestada = $comp.sources.lineasCollection.Posicion;
		var linea = $comp.sources.lineasCollection.ID;
		
		if(linea == null){
			UI.alert("No hay Líneas")
		}else{
	
		UI.confirm('¿Desea borrar <b>'+$comp.sources.lineasCollection.Descripcion+'</b> del ticket?', 'Confirmacion', function(r) {
			
			if(r == true){

			ds.Lineas.borrarLinea(linea);
			//DS resto las posiciones a todas las lineas a partir de la borrada
			ds.Lineas.restarPosiciones($comp.sources.docComercial.ID,vPosRestada);
			$comp.sources.docComercial.serverRefresh();
				setTimeout(function(){	UI.mostrarAdvertencia('Atención','Se ha eliminado la línea');},500);		
			}
		
			});//Fin de Confirm
		}//Fin de Else
	}else{
		UI.alert('Ya está Cobrado','Atención');
	}
}

TPV.modificaLinea = function(){
	var cobrado = $comp.sources.docComercial.Cobrado;
	if(cobrado != true){
		$("BODY").append($("#"+$comp.id+"_dialog2"));
		$$($comp.id+"_dialog2").displayDialog();
		
		$("#"+$comp.id+"_dialog2").css("top",20);
		$("#"+$comp.id+"_dialog2").css("left",300);
		$("#"+$comp.id+"_textField12").focus();
	}else{
		UI.alert('Ya está Cobrado','Atención');
	}
}

TPV.articulos_btn = function (esteObjeto){
	var vTimeResta = new Date();
	vTimeResta = vTimeResta - vTime;
	
	if (vTimeResta >= 500) {
		
		TPV.recargarFamiliasDialog();
		result = ds.Metodos.consultar("Familias");
		sources.familias2.setEntityCollection(result);
		vTime = 0;
		var dialogo = getHtmlId("dialog3");//Obtengo el dialogo widget
		$$(dialogo).setState("modificar");//El dialogo pasa a estado modificar
		
		appds.estadoInicial($comp, "modificar",esteObjeto);
		
		
	}else{
		
		var cobrado = $comp.sources.docComercial.Cobrado;
		botonArticulo = getHtmlId('image1');
		if(cobrado != true){
			
			appds.anadirLinea($comp,esteObjeto);
			
		}else{
			
			$$(botonArticulo).setState('disabled');
			UI.alert('Ya está Cobrado','Atención');
			
		}

	}
}

TPV.verCaja = function(){
	UI.gifCargando();
	appds.openDialogMovimiento($comp);
	TPV.mantenerFoco();
}

TPV.nuevoTicket = function (){
	var tipoDoc = 1;
	fcBrain.crearDocComercial($comp,tipoDoc);
	TPV.mantenerFoco();
}

TPV.imprimirDuplicado = function (){
	var docActual = $comp.sources.docComercial.ID;
	localStorage.docActual = docActual;
	TPV.mantenerFoco();
}

TPV.accionBorrado = function (){
	var cobrado =  $comp.sources.docComercial.Cobrado;
	var referencia = $comp.sources.docComercial.Referencia;
	if(cobrado == true){
		TPV.negativoTicket();
	}else if (referencia != null){
		UI.alert('Ya está Abonado','Atención');
	}else{
		TPV.borrarTicket();
	}
}

TPV.borrarTicket = function (){
	UI.confirm('¿Desea borrar este ticket?', 'Confirmacion', function(r) {
	    if (r == true) {
	    	
	        $comp.sources.docComercial.removeCurrent({
	        	onSuccess:function(){
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
	        	},
	        	onError:function(){
	        		UI.alert("No se ha podido eliminar el ticket","ERROR");
	        	}
	        });
	    }
	});
}

TPV.negativoTicket = function (){
	UI.confirm('Ya está cobrado, no se puede eliminar ¿Desea abonar este ticket?', 'Confirmacion', function(r) {
	    if (r == true) {
	    	var tipoDoc = 1;
			fcBrain.crearDocComercial($comp,tipoDoc,true);	
	    }
	    	
	 });
}

TPV.cargarMovimientoCaja = function (){
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
		TPV.cargarMedioPago(donde); //Le paso el contenedor dónde tiene que cargarlo
		
	}else{
		
		UI.alert('Ya está Cobrado','Atención');
		
	}
}

TPV.cargarMedioPago = function(donde) {
		
	$$(id+"_dialog1").enable();
 		
	var ruta = '/rest/MedioPago';
	$.getJSON( ruta, function(data) {
		var medios = data.__ENTITIES;
  		var tabla = donde;
     	$(tabla).html('<form class="form-inline"> <fieldset> <legend>Dispensar</legend>'); 

		for (var idx in medios){
			medio = medios[idx];

			$(tabla).append('<div class="control-group success">');
      		$(tabla).append('<label class="control-label" for="input_'+ medio.Codigo +'">'+ medio.Descripcion +'</label>');
      		$(tabla).append('<input  type="number"  id="input_'+ medio.Codigo +'" class="entrada cobro" placeholder='+ medio.Descripcion +' >');
   			$(tabla).append('</div></div>');
 
    	} 
    
 	 	$(tabla).append('</fieldset></form>'); 
 	 	$(tabla).fadeIn();
	 	$('#input_EF').attr("autofocus","autofocus"); 

		// Se intercepta la tecla INTRO
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
	// FIN getJSON
		
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
			$(window).scrollTop(0);
			

		});

		$(".cobro").focus( function(event) {

			total += $(this).val() * 1;
			diferencia = vSumaR - total;
			
			if(diferencia > 0){
				diferencia = parseFloat(diferencia);//ds pasar a numero la variable
				diferencia = diferencia.toFixed(2);//ds fijar 2 decimales a la variable
				
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
     },500);
}

TPV.listarDocComercial = function(){
	
	$comp.sources.docComercial.all({
		onSuccess:function(){
			var resultado = $comp.sources.docComercial;
			var lineas = $comp.sources.lineasCollection;
			var caja = sources.cajasTPV.Codigo;
				
			var html="";
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
			       }
		       }
			   });
			}
			html += "</tbody></table>";
			
			$('#modalListaBody').html(html);
			
		  	$('.linkDoc').click(function(){ 
		  	UI.gifCargando();
		    	$comp.sources.docComercial.select(this.id);
		    	TPV.mantenerFoco();
		    	$('#modalLista').modal('hide');
		   	});
		}
	});
}

TPV.dispensar = function(){
	
	var aMediosPagos = [$("#input_EF").val(),$("#input_TJ").val()]
		
		for (var i =0; i < aMediosPagos.length; i++){
			
			if(aMediosPagos[i] != "" && aMediosPagos[i] != 0){
				sources.cajasMovimientos.newEntity();
				sources.cajasMovimientos.entregado = aMediosPagos[i];
				sources.cajasMovimientos.fecha = new Date();
				sources.cajasMovimientos.Documento.set($comp.sources.docComercial);
				sources.cajasMovimientos.Caja.set(sources.cajasTPV);
				switch(i){
					case 0: var m = ds.MedioPago.asignarMedioPago("Efectivo");
							sources.cajasMovimientos.MedioPago.set(m);
							var cambio = aMediosPagos[i] - diferenciaCambio;
							
							/*console.log("Cambio: "+cambio);*/
							diferenciaCambio = 0;
							if(cambio > 0){
								sources.cajasMovimientos.importeVenta = aMediosPagos[i] - cambio;
								$comp.sources.docComercial.Cambio = cambio;
								localStorage.cambio = formato_numero(cambio,2,".",",")+"€";
								//alert("Cambio: "+formato_numero(cambio,2,",",".")+"€");
						 		UI.alert(localStorage.cambio,'Devolución');

							}else{
								sources.cajasMovimientos.importeVenta = aMediosPagos[i];
								localStorage.cambio= 0;
							}
							break;
					case 1: var m = ds.MedioPago.asignarMedioPago("Tarjeta"); 
							sources.cajasMovimientos.importeVenta = aMediosPagos[i];
							sources.cajasMovimientos.MedioPago.set(m);
							break;
				}
				sources.cajasMovimientos.save({
					onSuccess: function(){
						sources.cajasMovimientos.serverRefresh();	
					},
					onError:function(){
						UI.alert("No se ha podido dispensar el ticket","ERROR");
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

TPV.ticketPendientes = function (){
	$comp.sources.docComercial.save({
		onSuccess:function(){
			$('#modalLista').modal('show');
			TPV.listarDocComercial();
			TPV.mantenerFoco();
		}
	});
}

TPV.nuevoArticulo = function () {
	result = ds.Metodos.consultar("Familias");
	sources.familias2.setEntityCollection(result);
	
	TPV.recargarFamiliasDialog();
	
	var dialogo = getHtmlId("dialog3");//Coger el dialogo widget
	var jqdialogo = getHtmlId("dialog3");
	
	$$(dialogo).setState("crear");//Estado del dialogo pasa a crear
	
	appds.estadoInicial($comp,"crear");
	
	$("BODY").append($("#"+id+"_dialog3"));
	$$(dialogo).displayDialog();
	$("#"+id+"_dialog3").css("top",20);
	$("#"+id+"_dialog3").css("left",200);
	$("#"+$comp.id+"_textField5").focus();
}

TPV.pintarFamilias = function (){
	var selectElement = document.createElement('select');
	selectElement.setAttribute('id','select-familias');
	selectElement.setAttribute('tabindex','-1');
    $('#'+id+'_containerArticulos').append(selectElement);
    $('#select-familias').css('position','absolute');
    $('#select-familias').css('top','10px');
    $('#select-familias').css('left','420px');
    $('#select-familias').css('height','35px');
    var familias = sources.familias;
    var optionHTML = '<option id="playholder" value="" disabled selected style="display:none">Familia...</option>';	
	for (var i = 0; i < familias.length; i++){
	 	familias.getElement(i, { 
	 		onSuccess: function(event) {
        		var entity = event.element;
        		optionHTML += '<option value="'+entity.Nombre+'">'+entity.Nombre+'</option>';
        		
       		}
	   });
	 
	}
	$('#select-familias').append(optionHTML);
	$('#select-familias').change(function(){
		$('#playholder').remove();
		var nombre = $(this).val();
		sources.articulos.query("Familia.Nombre =:1",nombre);
		qString = nombre;
	});
}

TPV.recargarFamilias = function (){
	$('#select-familias').empty();
	sources.familias.allEntities({
		onSuccess:function(){
			var familias = sources.familias;
		    var optionHTML = '<option id="playholder" value="" disabled selected style="display:none">Familia...</option>';
			for (var i = 0; i < familias.length; i++){
			 	familias.getElement(i, { 
			 		onSuccess: function(event) {
		        		var entity = event.element;
		        		optionHTML += '<option value="'+entity.Nombre+'">'+entity.Nombre+'</option>';
		        		
		       		}
			   });
			 
			}
			$('#select-familias').append(optionHTML);
		}
	});
}

TPV.pintarFamiliasDialog = function (){
	
	var selectElement = document.createElement('select');
	selectElement.setAttribute('id','select-familias2');
	selectElement.setAttribute('tabindex','13');
    $('#'+id+'_container11').append(selectElement);
    $('#select-familias2').css('position','absolute');
    $('#select-familias2').css('top','150px');
    $('#select-familias2').css('left','200px');
    var familias = sources.familias2;
    var optionHTML;
   
	for (var i = 0; i < familias.length; i++){
	 	familias.getElement(i, { 
	 		onSuccess: function(event) {

        		var entity = event.element;
        		optionHTML += '<option value="'+entity.Nombre+'">'+entity.Nombre+'</option>';
        		
       		}
	   });
	 
	}
	$('#select-familias2').append(optionHTML);
}

TPV.recargarFamiliasDialog = function (){
	
	sources.familias2.allEntities({
		onSuccess:function(){
			var familias = sources.familias2;
		    var optionHTML;
		    $('#select-familias2').empty();
			for (var i = 0; i < familias.length; i++){
			 	familias.getElement(i, { 
			 		onSuccess: function(event) {
		        		var entity = event.element;
		        		optionHTML += '<option value="'+entity.Nombre+'">'+entity.Nombre+'</option>';
		        		
		       		}
			   });
			 
			}
			$('#select-familias2').append(optionHTML);
			var vFamilia = ds.Articulos.getFamilia(sources.articulos.Codigo);
			$("#select-familias2 option[value="+ vFamilia +"]").attr("selected","selected");
		}
	});
}

TPV.orientacionVertical = function (){

	$("#headComp").css("left","2px");
	$("#MainComp").css("left","2px");
	$("#socialComponent").css("left","2px");





//++ Movimiento de la Publicidad ++\\
	$("#rightComp").css("width","768px");
	$("#rightComp").css("height","256px");
	$("#rightComp").css("top","723px");
	$("#rightComp").css("left","2px");
	$("#rightComp_container1").css("left","0px");
	$("#rightComp_container2").css("top","0px");
	$("#rightComp_container2").css("left","256px");
	$("#rightComp_container4").css("top","0px");
	$("#rightComp_container4").css("right","0px");
	$("#rightComp_container4").css("left","512px");
}

TPV.orientacionHorizontal = function (){
	
	$("#headComp").css("left","0px");
	$("#MainComp").css("left","0px");
	$("#socialComponent").css("left","0px");
	
//++ Movimiento de la Publicidad ++\\
	$("#rightComp").css("width","256px");
	$("#rightComp").css("height","768px");
	$("#rightComp").css("top","59px");
	$("#rightComp").css("left","767px");
	$("#rightComp_container1").css("left","0px");
	$("#rightComp_container1").css("top","0px");
	$("#rightComp_container2").css("top","204px");
	$("#rightComp_container2").css("left","0px");
	$("#rightComp_container4").css("top","408px");
	$("#rightComp_container4").css("left","0px");
}


}// @startlock
return constructor;
})();// @endlock

		