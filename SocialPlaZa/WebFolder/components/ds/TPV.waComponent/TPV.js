
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {
		
	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'TPV';
	// @endregion// @endlock


	this.load = function (data) {// @lock

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

var bNuevo = getHtmlObj('imageButton1');	
//bNuevo.popover({'placement':'top', 'trigger' : 'hover', 'content' : 'Nuevo Artículo'});


		var app = {};
		var app = SPL.getUrlVars()["app"];
		
		
		//++++++++++++++++++++++++++++++++++++++++++
		//Se crea un docComercial si no existe ninguno.
		//++++++++++++++++++++++++++++++++++++++++++

	/*$('MainComp').hide();
//	

setTimeout(function(){$('#MainComp').fadeIn('slow');},2000);		

*/

		
		var tamanio;
		
		$comp.sources.cajasTPV.all({
			onSuccess:function (event){
				$comp.sources.docComercial.all({
					onSuccess:function (event){
					tamanio = $comp.sources.docComercial.length;	
					

						if(tamanio == 0){
							fcBrain.crearDocComercial($comp,1);
							tamanio = 1;
						}
				
  setTimeout(function(){ //Le pongo un tiempo de espera porque al cargar, lineasCollection se refrescaba y perdía la posición.

	$comp.sources.docComercial.select(tamanio-1);

        },300);
				
					}
				});			
			}
		});	


		//DS DECLARACION DE LA VARIABLE POS A LA QUE SE REFIERE A LAS POSICIONES DE LAS LINEAS
		pos = 0;
		vPosRestada = null;
		//DS DECLARACION DE qString PARA SABER EN QUE MOMENTO EN QUE FAMILIA ESTAMOS
		qString = null;
	
	// @region namespaceDeclaration// @startlock
	var btnAll = {};	// @buttonImage
	var imageButton15 = {};	// @buttonImage
	var btnArticulo = {};	// @richText
	var imageButton1 = {};	// @buttonImage
	var imageButton14 = {};	// @buttonImage
	var imageButton9 = {};	// @buttonImage
	var containerFamilias = {};	// @container
	var bContinuarDispensar = {};	// @richText
	var bCancelDispensar = {};	// @richText
	var imageButton4 = {};	// @buttonImage
	var imageButton10 = {};	// @buttonImage
	var imageButton6 = {};	// @buttonImage
	var imageButton5 = {};	// @buttonImage
	var richText23 = {};	// @richText
	var richText6 = {};	// @richText
	var richText19 = {};	// @richText
	var richText18 = {};	// @richText
	var richText4 = {};	// @richText
	var richText21 = {};	// @richText
	var richText9 = {};	// @richText
	var imageButton13 = {};	// @buttonImage
	var richText14 = {};	// @richText
	var richText15 = {};	// @richText
	var lineasCollectionEvent = {};	// @dataSource
	var dataGrid1 = {};	// @dataGrid
	// @endregion// @endlock


	// eventHandlers// @lock

	btnAll.click = function btnAll_click (event)// @startlock
	{// @endlock
		qString = null;
		$comp.sources.articulos.resolveSource();
		$('.solapa').removeClass('btn-maniadmin-4');
		$('.matrix_a').removeClass('tpv-btn');
		this.addClass('disabled');
		this.removeClass('btn-warning');
	};// @lock

	imageButton15.click = function imageButton15_click (event)// @startlock
	{// @endlock
				anadirArticulo_btn();

	};// @lock

	btnArticulo.mousedown = function btnArticulo_mousedown (event)// @startlock
	{// @endlock
		vTime = 0;
		vTime = new Date();
		
	};// @lock

	btnArticulo.mouseup = function btnArticulo_mouseup (event)// @startlock
	{// @endlock
			
			var cobrado = $comp.sources.docComercial.Cobrado;
			botonArticulo = getHtmlId('btnArticulo');
			if(cobrado == true){
			$$(botonArticulo).setState('disabled');
			UI.alert('Ya está Cobrado','Atención');
			}else{
			
			articulo_btn(this);
			
		}

	};// @lock

	btnArticulo.touchstart = function btnArticulo_touchstart (event)// @startlock
	{// @endlock
		vTime = 0;
		vTime = new Date();
		
	};// @lock

	btnArticulo.touchend = function btnArticulo_touchend (event)// @startlock
	{// @endlock
		articulo_btn(this);
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		appds.openAgenda();
	};// @lock

	imageButton14.click = function imageButton14_click (event)// @startlock
	{// @endlock
		$$(getHtmlId("dialog2")).closeDialog(); //cancel button
	};// @lock

	imageButton9.click = function imageButton9_click (event)// @startlock
	{// @endlock
		$$(id+"_richText14").setValue("Guardar");
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
	console.log(data);

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

		$$(getHtmlId("dialog1")).closeDialog(); //Cancelar button
	};// @lock

	imageButton4.click = function imageButton4_click (event)// @startlock
	{// @endlock
		cargarMovimientoCaja_btn();

	};// @lock

	imageButton10.click = function imageButton10_click (event)// @startlock
	{// @endlock
		borrarDocComercial_btn();
	};// @lock

	imageButton6.click = function imageButton6_click (event)// @startlock
	{// @endlock
			UI.alert('Guardado');
	};// @lock

	imageButton5.click = function imageButton5_click (event)// @startlock
	{// @endlock
		var tipoDoc = 1;
		fcBrain.crearDocComercial($comp,tipoDoc);		
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
	};// @lock

	richText6.click = function richText6_click (event)// @startlock
	{// @endlock
			var familiaselec = this.getValue();
		$comp.sources.articulos.query("Familia.Nombre=:1",familiaselec);
		qString = familiaselec;
		

		$('.solapa').removeClass('btn-maniadmin-4');
				this.addClass('btn-maniadmin-4');

$('.disabled').addClass('btn-warning');
		$('.disabled').removeClass('disabled');


	};// @lock

	richText6.touchend = function richText6_touchend (event)// @startlock
	{// @endlock
		var familiaselec = this.getValue();
		$comp.sources.articulos.query("Familia.Nombre=:1",familiaselec);
		qString = familiaselec;
		
		$('.solapa').addClass('tpv-btn');
		this.removeClass('tpv-btn');
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
		okArticulo_btn();
	};// @lock

	richText4.click = function richText4_click (event)// @startlock
	{// @endlock
		appds.estadoConfirmacion($comp, "modificar");
	};// @lock

	richText21.click = function richText21_click (event)// @startlock
	{// @endlock
		$$(getHtmlId("dialog2")).closeDialog(); //cancel button
	};// @lock

	richText9.click = function richText9_click (event)// @startlock
	{// @endlock
		$comp.sources.lineasCollection.save();
		$comp.sources.docComercial.serverRefresh();
		$$(getHtmlId("dialog2")).closeDialog(); //Guardar button

	};// @lock

	imageButton13.click = function imageButton13_click (event)// @startlock
	{// @endlock
		$$(getHtmlId("dialog2")).closeDialog();
	};// @lock

	richText14.click = function richText14_click (event)// @startlock
	{// @endlock
		guardarArticulo_btn();
	};// @lock

	richText15.click = function richText15_click (event)// @startlock
	{// @endlock
		$$(id+"_richText14").setValue("Guardar");
		$$(getHtmlId("dialog3")).closeDialog();
	};// @lock


	lineasCollectionEvent.onElementSaved = function lineasCollectionEvent_onElementSaved (event)// @startlock
	{// @endlock
		$$(id+"_dataGrid1").setSelectedRows([pos]);
	};// @lock

	lineasCollectionEvent.onCollectionChange = function lineasCollectionEvent_onCollectionChange (event)// @startlock
	{// @endlock
		var docID = $comp.sources.docComercial.ID;
		if(docID){	
			fcBrain.sumarLineas(id,docID)
		}
		
		$$(id+"_dataGrid1").setSelectedRows([pos]);
		
	};// @lock
	

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		var dialogo = getHtmlId("dialog2");
		var jqdialogo = getHtmlObj("dialog2");
	
		$("BODY").append($(jqdialogo));
		$(jqdialogo).css("top",100);
		$(jqdialogo).css("left",100);
		$(jqdialogo).css("position","fixed");
		$$(dialogo).displayDialog();
		
		

	};// @lock
	
	
	
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btnAll", "click", btnAll.click, "WAF");
	WAF.addListener(this.id + "_imageButton15", "click", imageButton15.click, "WAF");
	WAF.addListener(this.id + "_richText6", "click", richText6.click, "WAF");
	WAF.addListener(this.id + "_btnArticulo", "mousedown", btnArticulo.mousedown, "WAF");
	WAF.addListener(this.id + "_btnArticulo", "mouseup", btnArticulo.mouseup, "WAF");
	WAF.addListener(this.id + "_btnArticulo", "touchstart", btnArticulo.touchstart, "WAF");
	WAF.addListener(this.id + "_btnArticulo", "touchend", btnArticulo.touchend, "WAF");
	WAF.addListener(this.id + "_richText23", "touchend", richText23.touchend, "WAF");
	WAF.addListener(this.id + "_richText6", "touchend", richText6.touchend, "WAF");
	WAF.addListener(this.id + "_imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener(this.id + "_imageButton14", "click", imageButton14.click, "WAF");
	WAF.addListener(this.id + "_imageButton9", "click", imageButton9.click, "WAF");
	WAF.addListener(this.id + "_containerFamilias", "click", containerFamilias.click, "WAF");
	WAF.addListener(this.id + "_bContinuarDispensar", "click", bContinuarDispensar.click, "WAF");
	WAF.addListener(this.id + "_bCancelDispensar", "click", bCancelDispensar.click, "WAF");
	WAF.addListener(this.id + "_imageButton4", "click", imageButton4.click, "WAF");
	WAF.addListener(this.id + "_imageButton10", "click", imageButton10.click, "WAF");
	WAF.addListener(this.id + "_imageButton6", "click", imageButton6.click, "WAF");
	WAF.addListener(this.id + "_imageButton5", "click", imageButton5.click, "WAF");
	WAF.addListener(this.id + "_richText23", "click", richText23.click, "WAF");
	WAF.addListener(this.id + "_richText19", "click", richText19.click, "WAF");
	WAF.addListener(this.id + "_richText18", "click", richText18.click, "WAF");
	WAF.addListener(this.id + "_richText4", "click", richText4.click, "WAF");
	WAF.addListener(this.id + "_richText21", "click", richText21.click, "WAF");
	WAF.addListener(this.id + "_richText9", "click", richText9.click, "WAF");
	WAF.addListener(this.id + "_imageButton13", "click", imageButton13.click, "WAF");
	WAF.addListener(this.id + "_richText14", "click", richText14.click, "WAF");
	WAF.addListener(this.id + "_richText15", "click", richText15.click, "WAF");
	WAF.addListener(this.id + "_lineasCollection", "onElementSaved", lineasCollectionEvent.onElementSaved, "WAF");
	WAF.addListener(this.id + "_lineasCollection", "onCollectionChange", lineasCollectionEvent.onCollectionChange, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	// @endregion// @endlock

	
	};// @lock

//Funciones de la página.

//Cargar el pago (Dispensar)
function cargarMedioPago(donde){
 		
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
      $(tabla).append('<input  format="###.###.###,00" type="number"  id="input_'+ medio.Codigo +'" class="entrada" placeholder='+ medio.Descripcion +' >');
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
	 $(":input").bind('touchstart', function(event){//iPad
		$(this).focus();
	});

 });
		


setTimeout(function(){ //Le pongo un tiempo de espera porque al cargar, lineasCollection se refrescaba y perdía la posición.
		   

var fpEfectivo = getHtmlId("input_EF");
var fpEfectivoObj = getHtmlObj("input_EF");

console.log("vSuma: "+vSuma);
var vSumaR =  Math.round(vSuma*100)/100
vSumaR = vSumaR.toFixed(2);
//$("#input_EF").val(vSumaR);

//$(fpEfectivoObj).select();//Para que apareza seleccionado todo el contenido
		
 //INICIALIZACIÓN DE LOS CAMPOS Y EVENTOS
 

var total={};
var valorActual={};
var diferencia = {};
total = 0;  
$(".entrada").blur( function(event) {
	
	total = 0;   
	$(".entrada").each( function(){
		total += $(this).val() * 1;
		console.log("total1: "+total);
	});

});

$(".entrada").focus( function(event) {
	
	
	
	total += $(this).val() * 1;
	console.log("total2: "+total);
	diferencia = vSumaR - total;
	
	if (total < vSuma){
		
		diferenciaCambio = diferencia;
		diferencia = parseFloat(diferencia);//ds pasar a numero la variable
		diferencia = diferencia.toFixed(2);//ds fijar 2 decimales a la variable
		$(this).val(diferencia);
		$(this).select();
	}

});	

//->
        },500);

      
}
 
 
 //Eliminar línea
function eliminaLinea(){
//DS asigno la posicion anterior a pos para cuando borre se valla hacia arriba

	
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
}//Fui de function


//Modificar Línea
function modificarLinea(){
	//$comp.sources.lineasCollection1.query("ID = 1");
	var dialogo = getHtmlId("dialog2");
	var jqdialogo = getHtmlObj("dialog2");

	$("BODY").append($(jqdialogo));
	$$(dialogo).displayDialog();
	
	$(jqdialogo).css("top",20);
	$(jqdialogo).css("left",300);
		
		
}	
 //Menú para el botón Toolbar
 
 var menuBoton = ' <ul id="format-toolbar-options"  role="menu" aria-labelledby="dLabel" style="display:none">'
+'<li><a href="#" id="elimina" class="tool"><i class=" icon-remove"></i> Eliminar</a></li>'
+'<li><a  href="#" id="modifica" class="tool"><i class="icon-screenshot"></i> Modificar</a></li>'
+'</ul>';
$('body').append(menuBoton);

//Comportamiento de los botones de la toolbar:
$('#elimina').click(function() {
	eliminaLinea();
});
$('#elimina').bind('touchend', function(event){//iPad
	eliminaLinea();
});

$('#modifica').click(function() {
	modificarLinea();
});
$('#modifica').bind('touchend', function(event){ //iPad
	modificarLinea();
});

 	
 //Botón con menú
 var bToolbar = getHtmlObj('bOpciones');
 $(bToolbar).toolbar({
	content: '#format-toolbar-options', 
	position: 'right',
	hideOnClick: true
});




/*
--------------Funcion para iPad => para volver a su posicion original cuando salga el teclado-------------------
*/
var currentscroll = 0;

$('input').bind('focus',function() {
    currentscroll = $(window).scrollTop();
 
});

$('input').bind('blur',function() {
    if(currentscroll != $(window).scrollTop()){

    $(window).scrollTop(currentscroll);

    }
});

var botonArticulo = getHtmlId('btnArticulo');
$('.matrix_articulos').live("touchstart", function(e){
    e.preventDefault();
});
//btnArticulo

/*
--------------Funcion Repetidas a causa de los eventos click y touchEnd-------------------
*/

//Funcion de borrar ticket

function borrarDocComercial_btn(){
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

//Funcion de cargar los movimientos de caja e imprimir

function cargarMovimientoCaja_btn(){
	var cobrado = $comp.sources.docComercial.Cobrado;
		console.log(cobrado+" Numero "+$comp.sources.docComercial.Numero);
		if(cobrado != true){
			//UI.mostrarAdvertencia('Atención','Está función no está todavía disponible');
			
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
			UI.alert("Este Ticket ya esta cobrado");
			$$(getHtmlId("dialog1")).closeDialog(); //Guardar button
		}
}

//Funcion cuando hacemos un click o mantenemos pulsado un articulo

function articulo_btn(esteObjeto){
	var vTimeResta = new Date();
	vTimeResta = vTimeResta - vTime;
	
	if (vTimeResta >= 650) {
		
		var dialogo = getHtmlId("dialog3");//Obtengo el dialogo widget
		$$(dialogo).setState("modificar");//El dialogo pasa a estado modificar
		
		appds.estadoInicial($comp, "modificar",esteObjeto);
		
		$("BODY").append($("#"+id+"_dialog3"));
		$$(dialogo).displayDialog();
		$("#"+id+"_dialog3").css("top",100);
		$("#"+id+"_dialog3").css("left",200);
		
	}else{
		//anadir linea
		appds.anadirLinea($comp,esteObjeto);
		
		
	}
}

//Funcion guardar dentro del dialogo articulo

function guardarArticulo_btn(){
	
	//Hasta que no termine la accion de guardar anterior no se permite guardar mas
	if($$(id+"_richText14").getState() != "disabled"){
		$$(id+"_richText14").setState("disabled");
		var dialogo = getHtmlId("dialog3");
		var estado = $$(dialogo).getState();
		//Si el usuario va modificar o borrar el articulos
		if(estado == "modificar"){
			
			//appds.modificarArticulo($comp); DA FALLO
			
			var codigo = $$($comp.id+"_textField2").getValue();
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
					$$($comp.id+'_dialog3').closeDialog();
				}
			});
			
		}else if (estado == "crear"){
			appds.estadoConfirmacion($comp, "crear");
			
		}
	}
}

//Funcion del boton OK dentro del dialogo articulo

function okArticulo_btn(){
	var dialogo = getHtmlId("dialog3");
	var estado = $$(dialogo).getState();
	if(estado == "crear"){
		
		var codigo = $$($comp.id+"_textField2").getValue();
		var precio = $$($comp.id+"_textField6").getValue();
		var descripcion = $$($comp.id+"_textField7").getValue();
		$comp.sources.articulos.addNewElement();
		$comp.sources.articulos.Codigo = codigo;
		$comp.sources.articulos.Precio = precio;
		$comp.sources.articulos.Descripcion = descripcion;
		$comp.sources.articulos.Familia.set($comp.sources.familias2);
		$comp.sources.articulos.save();
		$comp.sources.articulos.serverRefresh();
		if(WAF.directory.currentUser().fullName == "TG"){
			ds.PreArticulos.creaPreArticulo(codigo,precio,descripcion,$comp.sources.familias2.Nombre);
		}
		$$(id+"_richText14").setState("default");
		$$(id+"_dialog3").closeDialog();
	}else{
		$comp.sources.articulos.removeCurrent();
		$comp.sources.articulos.serverRefresh({
			onSuccess:function (event){
				$$(id+"_richText4").hide();
				$$(id+"_dialog3").closeDialog();
			}
		});
	}
}

//Funcion del boton añadir articulo

function anadirArticulo_btn(){
	var dialogo = getHtmlId("dialog3");//Coger el dialogo widget
	var jqdialogo = getHtmlId("dialog3");
	
	$$(dialogo).setState("crear");//Estado del dialogo pasa a crear
	
	appds.estadoInicial($comp,"crear");
	
	$("BODY").append($("#"+id+"_dialog3"));
	$$(dialogo).displayDialog();
	$("#"+id+"_dialog3").css("top",100);
	$("#"+id+"_dialog3").css("left",200);
}

//Funcion dispensar el movimiento de caja

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
						var cambio = aMediosPagos[i] - diferenciaCambio;
						if(cambio > 0){
							localStorage.cambio = formato_numero(cambio,2,".",",")+"€";
							//alert("Cambio: "+formato_numero(cambio,2,",",".")+"€");
					 	UI.alert(localStorage.cambio,'Devolución' ,'success');

						}else{
							localStorage.cambio= null;
						}
						break;
				case 1: var m = ds.MedioPago.asignarMedioPago("Tarjeta"); 
						$comp.sources.cajasMovimientos.MedioPago.set(m);
						break;
				case 2: var m = ds.MedioPago.asignarMedioPago("Regalo"); 
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

	$$(getHtmlId("dialog1")).closeDialog({
				onSuccess: function(){
					if(localStorage.cambio  > 0){
				UI.alert(localStorage.cambio,'Devolución' ,'success');
				}					
			}
			}); //Guardar button
	
	
	
	//Se ejecuta la impresión. El botón está activado desde el "load".
}



}// @startlock
return constructor;
})();// @endlock

		