var appdsObj;
   
appdsObj = function () {
    	
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//DS Declaracion de variables path, id_component, "variables-funciones";
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	components = {};
    components = {
        Login : {
            path:"/components/ds/Login.waComponent"
        },
        AltaUsuario : {
            path:"/components/ds/AltaUsuario.waComponent"
        },
        TPV : {
            path:"/components/ds/TPV.waComponent"
        },
        Agenda : {
            path:"/components/ds/Agenda.waComponent"
        },
        Dialog : {
            path:"/components/ds/Dialog.waComponent"
        },
        Admin : {
            path:"/components/ds/Administracion.waComponent"
        }
    };
        
     components.main = 'MainComp';
     components.dialog = 'dialogComp';
     components.sub1 = 'compEntorno';
     components.dsComp = 'compds';
   
     
     
     functions = {};
     functions.openEntorno1 = function() {
     	
     	$$(components.mainId).loadComponent(components.Entorno1.path);
     	$$("button1").setValue("Sing out");
		$('#richText1').html(WAF.directory.currentUser().fullName);
     	
     }
     
     functions.openEntorno2 = function() {
     	
     	$$(components.mainId).loadComponent(components.Entorno2.path);
     	$$("button1").setValue("Sing out");
		$('#richText1').html(WAF.directory.currentUser().fullName);
     	
     }
     
     functions.openMain = function() {
     	
     	$$(components.mainId).removeComponent();
     	$$(components.mainId).loadComponent(components.Main.path);
     	$$("button1").setValue("Sing in");
		$("#richText1").html("");
					
     }
     
     functions.openEntorno = function(){
     
     	switch (aUsuarios.getEntorno()){  //DS segun el entorno abre uno u otro
            case 1: 
                
                functions.openEntorno1();
                break;
            
            case 2: 
                
                functions.openEntorno2();
            
        }
     	
     }
     
     
     
     //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     //DS Declaracion de funciones
     //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     

     
     this.inicio = function() {
     	
     	if(WAF.directory.currentUser()){  //DS Si el usuario ha sido logueado abrele el entorno
     		
     		functions.openEntorno();
     		
     	} else {   //DS Si no abre la pagina principal
     		
     		functions.openMain();
     			
     	}
     }
     
     this.cerraWelcome = function(){
     	$$(components.main).removeComponent();
     }
     
     this.openAdmin = function(){
     	$$("MainComp").removeComponent();
		$$("rightComp").removeComponent();
		$$("socialComponent").removeComponent();
    	$$("adminComp").loadComponent(components.Admin.path);
     }
     
     this.openLogin = function() {
     	
     	$$(components.main).loadComponent(components.Login.path);
     	
     }
     
     this.openAgenda = function() {
     	
     	$$(components.main).loadComponent(components.Agenda.path);
     	
     }
     
     this.openDialogEmpresa = function() {
     	
     	$$(components.dialog).hide();
     	
     	$$(components.dialog).loadComponent({path: components.Dialog.path,userData: { myParameter: "Empresa"}});
		
		setTimeout(function(){	//lo retardo para que no aparezca primero vacío y después aparezcan los datos
		     	$$(components.dialog).show();

		},600);		
     	

    
     }
	
	this.closeDialogEmpresa = function() {
     	
     	$$(components.dialog).removeComponent();
     	
     }
     this.openDialogUsuario = function($comp) {
     	
     	$$(components.dialog).loadComponent({path: components.Dialog.path,userData: { myParameter: "Usuario", myParameter2: $comp}});
    
     }
	
	this.closeDialogUsuario = function() {
     	
     	$$(components.dialog).removeComponent();
     	
     }
     
     this.openDialogMovimiento = function($comp) {
     	
     	$$(components.dialog).loadComponent({path: components.Dialog.path,userData: { myParameter: "Movimiento", myParameter2: $comp}});
    
     }
	
	this.closeDialogMovimiento = function() {
     	
     	$$(components.dialog).removeComponent();
     	
     }
	     
     this.openAltaUsuario = function() {
     	
     	$$(components.main).loadComponent(components.AltaUsuario.path);
     
     }
     
     this.openEntorno1 = function(){
     	
     	$$(components.sub1).loadComponent(components.Entorno1.path);
     	
     }
 
     this.openTPV = function(){
     	
     	$$(components.dsComp).loadComponent(components.TPV.path);
     	
     }
     
     
     
     this.anadirLinea = function($comp,esteObjeto){
     
		var id = $comp.id; //FC Traemos el id mendiante el $comp. Siempre enviar $comp en lugar de id
		
		//DS CONDICIONO AL BOTON QUE LA ACCION ANTERIOR SE HA TERMINADO ¡¡
		if($$(esteObjeto.id).getState() != "disabled"){
			
		
			//DS PONGO EL ESTADO DISABLED AL BOTON
			$$(esteObjeto.id).setState('disabled');
		
			var art = ds.Articulos.devolverArticulo(esteObjeto._value);
			
			var articuloCodigo = art.Codigo.value;
			var docComercialID = $comp.sources.docComercial.ID;
			
			var lin = ds.Lineas.getLinea(articuloCodigo,docComercialID); //en el servidor
			
			if(lin != null){
			
				var tamnioLineas = $comp.sources.lineasCollection.length;
				if(lin.Posicion.getValue()+1 == tamnioLineas){
					pos = lin.Posicion.getValue();
					$comp.sources.lineasCollection.select(lin.Posicion.getValue());
					var cant = $comp.sources.lineasCollection.Cantidad + 1;
					$comp.sources.lineasCollection.Cantidad = cant;
					$comp.sources.lineasCollection.save({
						onSuccess:function(){
							$$(esteObjeto.id).setState('default');
							var docID = $comp.sources.docComercial.ID;
							if(docID){	
								fcBrain.sumarLineas(id,docID)
							}
							$$(id+"_dataGrid1").setSelectedRows([pos]);
						},
						onError:function(){
							UI.alert("No se ha podido añadir el articulo","ERROR");
						}
					});
				}else{
					 functions.guardarLinea(docComercialID,art,$comp,esteObjeto);
				}
				
			}else{
				
				functions.guardarLinea(docComercialID,art,$comp,esteObjeto);
			}
		}
	}
	
	
	 this.anadirLineaPorCodigo = function($comp){
     	
		var id = $comp.id; //FC Traemos el id mendiante el $comp. Siempre enviar $comp en lugar de id

		//DS CONDICIONO AL BOTON QUE LA ACCION ANTERIOR SE HA TERMINADO ¡¡
		
		
		var articuloCodigo = sources.articulos2.Codigo;
		
		var docComercialID = $comp.sources.docComercial.ID;
		var art = ds.Articulos.devolverArticuloCodigo($$(id+"_textField4").getValue());
		if(art != null){
			
		var lin = ds.Lineas.getLinea(art.Codigo.value,docComercialID); //en el servidor.
				
			if(lin != null){
				pos = lin.Posicion.getValue();
				$comp.sources.lineasCollection.select(lin.Posicion.getValue());
				var cant = $comp.sources.lineasCollection.Cantidad + 1;
				$comp.sources.lineasCollection.Cantidad = cant;
				$comp.sources.lineasCollection.save({
					onSuccess:function(){
						var docID = $comp.sources.docComercial.ID;
						if(docID){	
							fcBrain.sumarLineas(id,docID)
						}
					},
					onError:function(){
						UI.alert("Error al añadir el articulo","ERROR");
					}
				});
				
			}else{
				var aPos = ds.Lineas.getPosiciones(docComercialID);
			
				//Se crea un registro en la coleccion lineasCollection;
				$comp.sources.lineasCollection.newEntity();
				$comp.sources.lineasCollection.Codigo = art.Codigo.value;
				$comp.sources.lineasCollection.Descripcion = art.Descripcion.value;
				$comp.sources.lineasCollection.PrecioUnitario = art.Precio.value;
				$comp.sources.lineasCollection.Cantidad = 1;
				$comp.sources.lineasCollection.Documento.set($comp.sources.docComercial);
				$comp.sources.lineasCollection.Almacen.set($comp.sources.almacenes);
				$comp.sources.lineasCollection.cajasTPV.set($comp.sources.cajasTPV);
				//DS si ha habido algun borrado previamente se le asigna automaticamente su posicion antigua
				if(vPosRestada != null){
					
					//DS se le incrementa en 1 a todas las lineas cuyas posiciones son mayores que la borrada 
					ds.Lineas.sumarPosiciones($comp.sources.docComercial.ID, vPosRestada);
					//$comp.sources.lineas.Posicion=vPosRestada;
					pos = vPosRestada;
					vPosRestada = null;
					
				//DS si es la primera linea, se le da la posicion 0
				}else if(aPos.length == 0){
					$comp.sources.lineasCollection.Posicion=0;
					pos = 0;
					
				}else{
					var n = aPos[0] + 1;
					$comp.sources.lineasCollection.Posicion = n;
					pos = n;
				}
				
				$comp.sources.lineasCollection.save({
					onSuccess:function (event){
						//Cuando se guarda se añade esta nueva entidad a la coleccion lineasCollection;
						$comp.sources.lineasCollection.addEntity($comp.sources.lineasCollection.getCurrentElement());
					},
					onError:function(){
						UI.alert("Error al añadir el articulo","ERROR");
					}
				});	
			
			}
			
		}else{
			UI.alert("Codigo de Articulo no encontrado","AVISO");
			
		}
	}
	
	functions.guardarLinea = function (docComercialID,art,$comp,esteObjeto){
     	var aPos = ds.Lineas.getPosiciones(docComercialID);
					
		//Se crea un registro en la coleccion lineasCollection;
		$comp.sources.lineasCollection.newEntity();
		$comp.sources.lineasCollection.Codigo = art.Codigo.value;
		$comp.sources.lineasCollection.Descripcion = art.Descripcion.value;
		$comp.sources.lineasCollection.PrecioUnitario = art.Precio.value;
		$comp.sources.lineasCollection.Cantidad = 1;
		$comp.sources.lineasCollection.Documento.set($comp.sources.docComercial);
		$comp.sources.lineasCollection.Almacen.set($comp.sources.almacenes);
		$comp.sources.lineasCollection.cajasTPV.set($comp.sources.cajasTPV);
		
		//DS si ha habido algun borrado previamente se le asigna automaticamente su posicion antigua
		if(vPosRestada != null){
			
			//DS se le incrementa en 1 a todas las lineas cuyas posiciones son mayores que la borrada 
			ds.Lineas.sumarPosiciones($comp.sources.docComercial.ID, vPosRestada);
			//$comp.sources.lineas.Posicion=vPosRestada;
			pos = vPosRestada;
			vPosRestada = null;
			
		//DS si es la primera linea, se le da la posicion 0
		}else if(aPos.length == 0){
			$comp.sources.lineasCollection.Posicion=0;
			pos = 0;
			
		}else{
			var n = aPos[0] + 1;
			$comp.sources.lineasCollection.Posicion = n;
			pos = n;
		}
		
		$comp.sources.lineasCollection.save({
			onSuccess:function (event){
				//Cuando se guarda se añade esta nueva entidad a la coleccion lineasCollection;
				$comp.sources.lineasCollection.addEntity($comp.sources.lineasCollection.getCurrentElement());
				$$(esteObjeto.id).setState('default');
			},
			onError:function(){
				UI.alert("No se ha podido añadir el articulo","ERROR");
			}
		});	
     }
	
	
	this.estadoInicial = function ($comp,estado,objeto){
		
		if(estado == "crear"){
			$$($comp.id+"_richText12").hide();
			$$($comp.id+"_richText18").hide();
			$$($comp.id+"_richText19").hide();
			$$($comp.id+"_richText4").hide();//Esconder el boton Eliminar
			
			$$($comp.id+"_richText14").show();
			$$($comp.id+"_richText15").show();
			
			$$($comp.id+"_richText14").setValue("Crear");//Botn Guardar pasa ser Crear
		
			if($comp.sources.articulos.length != 0){
				var codigoArticulo = $comp.sources.articulos.Codigo;
				var vFamilia = ds.Articulos.getFamilia(codigoArticulo);
				
				$("#select-familias2 option[value="+ vFamilia +"]").attr("selected","selected");
			}else{
				
				$("#select-familias2 option[value="+ $comp.sources.familias2.getCurrentElement() +"]").attr("selected","selected");
			}
			
			
			
			
			$$($comp.id+"_textField5").setValue("");
			$$($comp.id+"_textField6").setValue("");
			$$($comp.id+"_textField7").setValue("");
			
			
			
		}else if(estado == "modificar"){
			
			$$($comp.id+"_richText12").hide();
			$$($comp.id+"_richText18").hide();
			$$($comp.id+"_richText19").hide();
			
			$$($comp.id+"_richText14").show();
			$$($comp.id+"_richText15").show();
			$$($comp.id+"_richText4").show();
			
			$$($comp.id+"_richText14").setValue("Guardar");

			sources.articulos1.query("Descripcion =:1",objeto._value,{
			
				onSuccess:function (){
					
					$$($comp.id+"_richText4").show();//Mostrar el boton eliminar
	
					$("BODY").append($("#"+$comp.id+"_dialog3"));
					$$($comp.id+"_dialog3").displayDialog();
					$("#"+$comp.id+"_dialog3").css("top",20);
					$("#"+$comp.id+"_dialog3").css("left",200);
					$("#"+$comp.id+"_textField2").focus();
				}
			
			});
			
		}
		
	}
	
	this.estadoConfirmacion = function($comp, estado){
		if(estado == "crear"){
			$$($comp.id+"_richText14").hide();
			$$($comp.id+"_richText15").hide();
			$("#"+$comp.id+"_richText12").html("&#191;Desea crear este Articulo?");
			$("#"+$comp.id+"_richText12").fadeIn(1000);
			$("#"+$comp.id+"_richText18").fadeIn(1000);
			$("#"+$comp.id+"_richText19").fadeIn(1000);
		}else if(estado == "modificar"){
			$("#"+$comp.id+"_richText14").hide();
			$("#"+$comp.id+"_richText15").hide();
			$("#"+$comp.id+"_richText4").hide();
			$("#"+$comp.id+"_richText12").html("&#191;Desea eliminar este articulo?");
			$("#"+$comp.id+"_richText12").fadeIn(1000);
			$("#"+$comp.id+"_richText18").fadeIn(1000);
			$("#"+$comp.id+"_richText19").fadeIn(1000);
		}
		
	}
	
	this.estadoCancelar = function ($comp, estado){
		
		if(estado == "crear"){
			$("#"+$comp.id+"_richText14").fadeIn(1000);
			$("#"+$comp.id+"_richText15").fadeIn(1000);
			$$($comp.id+"_richText12").setValue("&#191;Desea crear este articulo?");
			$$($comp.id+"_richText12").hide();
			$$($comp.id+"_richText18").hide();
			$$($comp.id+"_richText19").hide();
		}else if(estado == "modificar"){
			$("#"+$comp.id+"_richText14").fadeIn(1000);
			$("#"+$comp.id+"_richText15").fadeIn(1000);
			$("#"+$comp.id+"_richText4").fadeIn(1000);
			$$($comp.id+"_richText12").setValue("&#191;Desea eliminar este articulo?");
			$("#"+$comp.id+"_richText12").hide();
			$("#"+$comp.id+"_richText18").hide();
			$("#"+$comp.id+"_richText19").hide();
		}
		
	}
	
	// Declaracion del array source listo;
	var arrSource = new Array();
	for(var i = 0; i < 11; i++){
		arrSource[i] = false;
	}
	
	function sourceReady($comp){
		
		var flag = true;
		

		for(var i = 0; i < 11; i++){
			flag *=  arrSource[i];
		}
		
		if(flag){
			//$$($comp.id+"_textField4").setValue("");
			if(window.navigator.platform != "iPad"){
				$("#"+$comp.id+"_textField4").focus();
			}
			TPV.pintarFamilias();
			TPV.pintarFamiliasDialog();
			var tamanio;
			tamanio = $comp.sources.docComercial.length;	
			if(tamanio == 0){
				tamanio = 1;
			}
			$comp.sources.docComercial.select(tamanio-1);
			$comp.sources.docComercial.serverRefresh();
			setTimeout(function(){
				//-- Se elimina el preLoader de carga (overlay) --\\
				$('#overlay').remove();
				
				var user = WAF.directory.currentUser();
			    if (user) {
			      if (ds.Metodos.getGrupo() == "Prueba") {
						$('#modalBienvenido').modal({
					   	 backdrop: false
						});
						$("#btn_empezar").click(function(){
							if(window.navigator.platform != "iPad"){
								$("#"+$comp.id+"_textField4").focus();
							}
						});
				   }
							
				}
			},500);
			
		}
	 
	};
	
	this.cargarDataTPV = function($comp){
	
		
		
	// CARGA DE CajasMovimientos
		ds.Metodos.consultar("CajasMovimientos", {onSuccess: function(e) {
		  $comp.sources.cajasMovimientos.setEntityCollection(e.result);
		  arrSource[0] = true;
		  sourceReady($comp)
		}});
		
	//CARGA DE Articulos
		ds.Metodos.consultar("Articulos", {onSuccess: function(e) {
		  $comp.sources.articulos.setEntityCollection(e.result);
		  arrSource[1] = true;
		  sourceReady($comp)
		}});
		
	//CARGA DE Articulos Copia1
		ds.Metodos.consultar("Articulos", {onSuccess: function(e) {
		  sources.articulos1.setEntityCollection(e.result);
		  arrSource[2] = true;
		  sourceReady($comp);
		}});
		
	//CARGA DE Articulos Copia2
		ds.Metodos.consultar("Articulos", {onSuccess: function(e) {
		  sources.articulos2.setEntityCollection(e.result);
		  arrSource[3] = true;
		  sourceReady($comp);
		  sources.articulos2.select(-1);
		}});
			
	// CARGA DE DocComercial

		ds.Metodos.consultar("DocComercial", {onSuccess: function(e) {
		  $comp.sources.docComercial.setEntityCollection(e.result);
		  arrSource[4] = true;
		  sourceReady($comp)
		}});
		
	// CARGA DE MedioPago
		ds.Metodos.consultar("MedioPago", {onSuccess: function(e) {
		  $comp.sources.medioPago.setEntityCollection(e.result);
		  arrSource[5] = true;
		  sourceReady($comp)
		}});
		
	// CARGA DE Familias
		ds.Metodos.consultar("Familias", {onSuccess: function(e) {
		  sources.familias.setEntityCollection(e.result);
		  arrSource[6] = true;
		  sourceReady($comp)
		}});
	
		
	// CARGA DE Almacenes
		ds.Metodos.consultar("Almacenes", {onSuccess: function(e) {
		  $comp.sources.almacenes.setEntityCollection(e.result);
		  arrSource[7] = true;
		  sourceReady($comp)
		}});
		
	// CARGA DE Usuarios
		ds.Metodos.consultar("Usuarios", {onSuccess: function(e) {
		  $comp.sources.usuarios.setEntityCollection(e.result);
		  arrSource[8] = true;
		  sourceReady($comp)
		}});
		
		
	// CARGA DE CajasTPV
		ds.Metodos.consultar("CajasTPV", {onSuccess: function(e) {
		  $comp.sources.cajasTPV.setEntityCollection(e.result);
		  arrSource[9] = true;
		  sourceReady();
		}});
		
	// CARGA DE Lineas
		ds.Metodos.consultar("Lineas", {onSuccess: function(e) {
		  sources.lineas.setEntityCollection(e.result);
		  arrSource[10] = true;
		  sourceReady($comp)
		}});
			
	}
	
	this.montarArrayAccesos = function(){
		
		// Declaracion de arrays
		
		aNivel1 = [];
		aNivel2 = [];
		aNivel3 = [];
		aNivel3A = [];
		aColores = [];
		
		
		  functions.anhadirAccesoMenu("Social Plaza","Gestion","Entornos");
		  functions.anhadirAccesoMenu("Social Plaza","Marketing","Anuncios");
		  functions.anhadirAccesoMenu("Generales","Configuracion","Empresas");
		  functions.anhadirAccesoMenu("Generales","Configuracion","Usuarios");
		  functions.anhadirAccesoMenu("Gestion Comercial","Bases","Familias");
		  functions.anhadirAccesoMenu("Gestion Comercial","Bases","Articulos");
		  
		  functions.anhadirAccesoMenu("T.P.V.","Bases","Familias");
		  functions.anhadirAccesoMenu("T.P.V.","Bases","Articulos");
		  functions.anhadirAccesoMenu("T.P.V.","Archivos","Ventas TPV");
		  functions.anhadirAccesoMenu("T.P.V.","Archivos","Cajas TPV");
		  
		  functions.anhadirAccesoMenu("T.P.V.","...mas","Listas");
		  functions.anhadirAccesoMenu("T.P.V.","...mas","Informes");
		  functions.anhadirAccesoMenu("T.P.V.","...mas","Utilidades");
		  functions.anhadirAccesoMenu("SocialPlaza","Configuracion","Listas");
		 
	}
	
	functions.anhadirAccesoMenu = function(vParametro1,vParametro2,vParametro3){
		
		var textoNivel1 = vParametro1;
		var textoNivel2 = vParametro2;
		var textoNivel3 = vParametro3;
		
		
		functions.ArrayAnhadirElemento(aNivel1,"Final",textoNivel1);
		functions.ArrayAnhadirElemento(aNivel2,"Final",textoNivel2);
		functions.ArrayAnhadirElemento(aNivel3,"Final",textoNivel3);
		
		
		
	}
	
	functions.ArrayAnhadirElemento = function(array,posicion,valor){
		
		if(posicion == "Final"){
			//Se inserta el elemento en el array pasado por parametro;
			//El array.length indica la ultima posicion
			array[array.length] = valor;
		}
		
	}

	this.pintarMenu = function(){
		
		//se pinta la estructura general del menu;
		
		var menuHTML = '<div class="accordion" id="accordionMenu"></div>';
		$("#MenuComp_container1").append(menuHTML);
		
		
		for(var i=0;i<aNivel1.length; i++){
			
				if(aNivel1[i] == aNivel1[i-1]){
					
					if(aNivel2[i] == aNivel2[i-1]){
						
						//En este caso se pinta el 3º nivel;
						$("#"+nivel3ID).append("<hr>"+aNivel3[i]+"<br>");
						
					}else{
						
						//En este caso se pinta 2º y 3º nivel;
						functions.pintar2Niveles(i);
					}
					
				}else{
					
					//En este caso se pinta 1º,2º y 3º nivel;
					functions.pintar3Niveles(i);
				}
				
		}
		
	
	}

	functions.pintar3Niveles = function(i){
		
	
    
		var n ='<div class="accordion-group">'
			+'<div class="accordion-heading nivel1" id="cor'+i+'">'
					+'<a onClick="functions.cambiarFlecha('+i+');" name ="'+aNivel1[i]+'"class="accordion-toggle" data-toggle="collapse" data-parent="#accordionMenu" href="#nivel1'+i+'">'
					+'<i class="icon icon-chevron-right"> </i>'
					+aNivel1[i]
					+'</a>'
			+'</div>'
			+'<div id="nivel1'+i+'" class="accordion-body collapse">'
					+'<div id="nivelb1'+i+'" class="accordion-inner">'
					
						+'<div class="accordion" id="accordion'+i+'"></div>'
						+'<div class="accordion-group">'
		    				+'<div class="accordion-heading" id="corD'+i+'">'
		      					+'<a class="accordion-toggle" onClick="functions.cambiarFlechaD('+i+');" data-toggle="collapse" data-parent="#accordion'+i+'" href="#nivel2'+i+'">'
		        				+'<i class="icon icon-chevron-right"> </i>'
		        				+aNivel2[i]
		      					+'</a>'
		    				+'</div>'
		    				+'<div id="nivel2'+i+'" class="accordion-body collapse">'
		      		    		+'<div class="accordion-inner" id="nivel3'+i+'">'
		        					+aNivel3[i]+"<br>"
		      					+'</div>'
		    				+'</div>'
		  				+'</div>'
		  			+'</div>'
		  			
					+'</div>'
			+'</div>'
			   +'</div>';
	
		$("#accordionMenu").append(n);
		nivel2ID = "nivelb1"+i;
		nivel1ID = "nivel2"+i;
		nivel3ID = "nivel3"+i;
		accordion = "accordion"+i;
				
				
				
}
	
	functions.cambiarFlecha = function(i){
				
	/*var elementoAcor = $('.nivel1 i');
if(elementoAcor.attr('data-state')){
	if(elementoAcor.attr('data-state') = 'open'){
	$('.nivel1 i').toggleClass('icon-chevron-down');
	$('.nivel1 i').addClass('icon-chevron-right');
	}
}
	$('#cor'+i+' i').toggleClass('icon-chevron-right');
	$('#cor'+i+' i').toggleClass('icon-chevron-down');
	$('#cor'+i+' i').attr('data-state','open');
	
	*/

	$('#cor'+i+' i').toggleClass('icon-chevron-right');
	$('#cor'+i+' i').toggleClass('icon-chevron-down');
	
	}
	
	functions.cambiarFlechaD = function(i){
	
	$('#corD'+i+' i').toggleClass('icon-chevron-right');
	$('#corD'+i+' i').toggleClass('icon-chevron-down');
	
	}
	
	functions.pintar2Niveles = function(i){
		var t = '<div class="accordion" id="accordion'+i+'"></div>'
					+'<div class="accordion-group">'
						+'<div class="accordion-heading" id="corD'+i+'">'
		  					+'<a class="accordion-toggle"  onClick="functions.cambiarFlechaD('+i+');" data-toggle="collapse" data-parent="#accordion'+i+'" href="#nivel2'+i+'">'
		    				+'<i class="icon icon-chevron-right"> </i>'
		    				+aNivel2[i]
		  					+'</a>'
						+'</div>'
						+'<div id="nivel2'+i+'" class="accordion-body collapse">'
		  		    		+'<div class="accordion-inner" id="nivel3'+i+'">'
		    					+aNivel3[i]+"<br>"
		  					+'</div>'
						+'</div>'
						+'</div>'
					+'</div>'
					$("#"+nivel2ID).append(t)
				nivel1ID = "nivel2"+i;
				nivel3ID = "nivel3"+i;
	}
	
	
	
	
}

var appds = new appdsObj();




function getTotal($comp,id){
	
	
	var rowsSum = 0;

	// use the toArray method to all entities in array and loop over it using foreach
	$comp.sources.lineasCollection.toArray("Importe", {
	    onSuccess: function(event) // asynchronous call
	    {
	       var myArray = event.result; // we retrieve the array of objects
	       
	            myArray.forEach(function(entity){
			              rowsSum += entity.Importe;
		                                   });

	//display the sum of all rows of the column
		$$(id+"_richText2").setValue(rowsSum);
		
		

	   }
	});
		
}

function cargarEntorno($comp){
	var ID = ds.Usuarios.restrincionUsuario();
	$comp.sources.entornos.query("ID = :1",ID);
}

function cargarArticulos($comp){
	var ID = ds.Usuarios.restrincionUsuario();
	//alert($comp.sources.familias.articulosCollection.Entorno.ID);
	$comp.sources.familias.all();
	alert($comp.sources.articulosCollection.Entorno.ID);
}

/*
 * Da formato a un número para su visualización
 *
 * numero (Number o String) - Número que se mostrará
 * decimales (Number, opcional) - Nº de decimales (por defecto, auto)
 * separador_decimal (String, opcional) - Separador decimal (por defecto, coma)
 * separador_miles (String, opcional) - Separador de miles (por defecto, ninguno)
 */
function formato_numero(numero, decimales, separador_decimal, separador_miles){ // v2007-08-06
    numero=parseFloat(numero);
    if(isNaN(numero)){
        return "";
    }

    if(decimales!==undefined){
        // Redondeamos
        numero=numero.toFixed(decimales);
    }

    // Convertimos el punto en separador_decimal
    numero=numero.toString().replace(".", separador_decimal!==undefined ? separador_decimal : ",");

    if(separador_miles){
        // Añadimos los separadores de miles
        var miles=new RegExp("(-?[0-9]+)([0-9]{3})");
        while(miles.test(numero)) {
            numero=numero.replace(miles, "$1" + separador_miles + "$2");
        }
    }

    return numero;
}
