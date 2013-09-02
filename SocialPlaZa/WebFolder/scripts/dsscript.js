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
        Usuarios : {
            path:"/components/ds/dsUsuarios.waComponent"
        },
        InputUsuarios : {
            path:"/components/ds/InputUsuario.waComponent"
        },
        Entidades : {
            path:"/components/ds/dsEntidades.waComponent"
        },
        Articulos : {
            path:"/components/ds/dsArticulos.waComponent"
        },
        Empresa : {
            path:"/components/ds/Empresa.waComponent"
        },
        TPV : {
            path:"/components/ds/TPV.waComponent"
        },
        InputArticulo : {
            path:"/components/ds/InputArticulo.waComponent"
        },
        Agenda : {
            path:"/components/ds/Agenda.waComponent"
        },
        Dialog : {
            path:"/components/ds/Dialog.waComponent"
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
     
    /* functions.openWelcome = function () {
		
		$('#'+components.main).hide('fast');
		$(components.main).loadComponent(components.defaults.landing.compPath);
		$('#'+components.main).fadeIn('fast');

	};
     */
     //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     //DS Declaracion de funciones
     //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     
     
     this.comprobarActivacion = function(cod) {
     	
     	
     }
     
     this.inicio = function() {
     	
     	if(WAF.directory.currentUser()){  //DS Si el usuario ha sido logueado abrele el entorno
     		
     		functions.openEntorno();
     		
     	} else {   //DS Si no abre la pagina principal
     		
     		functions.openMain();
     			
     	}
     }
     
     this.cerraWelcome = function(){
     	$$(components.main).removeComponent();

 //$('#containerLanding').hide();

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
     
     this.openUsuario = function(){
     	
     	$$(components.dsComp).loadComponent(components.Usuarios.path);
     	
     }
     
     this.openInputUsuario = function(){
     	
     	$$(components.dsComp).loadComponent(components.InputUsuarios.path);
     	
     }
     
     this.openEntidad = function(){
     	
     	$$(components.dsComp).loadComponent(components.Entidades.path);
     	
     }
     
     this.openArticulo = function(){
     	
     	$$(components.dsComp).loadComponent(components.Articulos.path);
     	
     }
     
     this.openEmpresa = function(){
     	
     	$$(components.dsComp).loadComponent(components.Empresa.path);
     	
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
		
		/*JUEGO DE COLORES*/	
		//$('.matrix_a').removeClass('tpv-btn');
		//esteObjeto.addClass('tpv-btn');
			//console.log($comp.sources.articulos.getCurrentElement().Codigo.value);
			//console.log(esteObjeto);
			var art = ds.Articulos.devolverArticulo(esteObjeto._value);
			
			var articuloCodigo = art.Codigo.value;
			var docComercialID = $comp.sources.docComercial.ID;
			
			var lin = ds.Lineas.getLinea(articuloCodigo,docComercialID); //en el servidor.
			
		//	var lin = $comp.sources.lineas.query("Documento.ID=:1 AND Codigo =:2",docComercialID,articuloCodigo);
			
			if(lin != null){
				lin.Cantidad.setValue(lin.Cantidad.getValue() + 1);
				pos = lin.Posicion.getValue();
				lin.save({
					onSuccess:function (event){
						//mySound.play();
						
						$comp.sources.docComercial.collectionRefresh();

						//DS PONGO EL ESTADO DEFAULT AL BOTON
						$$(esteObjeto.id).setState('default');
					}
				});
				
			}else{
				var aPos = ds.Lineas.getPosiciones(docComercialID);
				

				
				sources.lineas.newEntity();
				sources.lineas.Codigo = art.Codigo.value;
				sources.lineas.Descripcion = art.Descripcion.value;
				sources.lineas.PrecioUnitario = art.Precio.value;
				sources.lineas.Cantidad = 1;
				sources.lineas.Documento.set($comp.sources.docComercial);
				sources.lineas.Almacen.set($comp.sources.almacenes);
				//DS si ha habido algun borrado previamente se le asigna automaticamente su posicion antigua
				if(vPosRestada != null){
					
					//DS se le incrementa en 1 a todas las lineas cuyas posiciones son mayores que la borrada 
					ds.Lineas.sumarPosiciones($comp.sources.docComercial.ID, vPosRestada);
					//$comp.sources.lineas.Posicion=vPosRestada;
					pos = vPosRestada;
					vPosRestada = null;
					
				//DS si es la primera linea, se le da la posicion 0
				}else if(aPos.length == 0){
					sources.lineas.Posicion=0;
					pos = 0;
					 
				}else{
					var n = aPos[0] + 1;
					sources.lineas.Posicion = n;
					pos = n;
				}
				
				sources.lineas.save({
					onSuccess:function (event){
						$comp.sources.docComercial.collectionRefresh();
						$$(esteObjeto.id).setState('default');
					}
				});	
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
				lin.Cantidad.setValue(lin.Cantidad.getValue() + 1);
				pos = lin.Posicion.getValue();
				lin.save({
					onSuccess:function (event){
						$comp.sources.docComercial.collectionRefresh();
					}
				});
				
			}else{
				var aPos = ds.Lineas.getPosiciones(docComercialID);
			
				sources.lineas.newEntity();
				sources.lineas.Codigo = art.Codigo.value;
				sources.lineas.Descripcion = art.Descripcion.value;
				sources.lineas.PrecioUnitario = art.Precio.value;
				sources.lineas.Cantidad = 1;
				sources.lineas.Documento.set($comp.sources.docComercial);
				sources.lineas.Almacen.set($comp.sources.almacenes);
				//DS si ha habido algun borrado previamente se le asigna automaticamente su posicion antigua
				if(vPosRestada != null){
					
					//DS se le incrementa en 1 a todas las lineas cuyas posiciones son mayores que la borrada 
					ds.Lineas.sumarPosiciones($comp.sources.docComercial.ID, vPosRestada);
					//$comp.sources.lineas.Posicion=vPosRestada;
					pos = vPosRestada;
					vPosRestada = null;
					
				//DS si es la primera linea, se le da la posicion 0
				}else if(aPos.length == 0){
					sources.lineas.Posicion=0;
					pos = 0;
					 
				}else{
					var n = aPos[0] + 1;
					sources.lineas.Posicion = n;
					pos = n;
				}
				
				sources.lineas.save({
					onSuccess:function (event){
						$comp.sources.docComercial.collectionRefresh();
						
					}
				});	
			
			}
			
		}else{
			UI.alert("Codigo de Articulo no encontrado","AVISO");
			
		}
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
				TPV.recargarFamiliasDialog();
				$("#select-familias2 option[value="+ vFamilia +"]").attr("selected","selected");
			}else{
				TPV.recargarFamiliasDialog();
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
					
					
					TPV.recargarFamiliasDialog();
					
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
	
	
	
	
}

var appds = new appdsObj();

function gritar(recurso){
	alert(recurso);
}

function comprobarAbierto(titulo){
	
	for (var i=2; i<=$$("tabView1").countTabs()  ;i++) {
		$$("tabView1").selectTab(i);
		if($$("tabView1").getSelectedTab().menuItem.id == titulo){
			return true;
		}
	}
	 
	return false;
	
}

function newTab (title, component, id, entityID){
  
  	
     $$("tabView1").addTab(title, true);

     var selectedTab = $$("tabView1").getSelectedTab();
     selectedTab.menuItem.id = title;
     var tabContainerID = $$("tabView1").getTabContainer(selectedTab.index).id;
     
     if(entityID == null){
          domID = Math.floor(Math.random()*100000)+1;
         
          var isNew = true;
     }
     var componentDOM = document.createElement('div');
     componentDOM.setAttribute('id','comp_'+domID);
     
     document.body.appendChild(componentDOM);
     
     var componentWidget = new WAF.widget.Component({
          'id': 'comp_' + domID,
          'data-type': 'component',
          'data-lib': 'WAF',
          'data-constraint-top': 'true',
          'data-constraint-right': 'true',
          'data-constraint-left': 'true',
          'data-constraint-bottom': 'true',
          'class': 'compTransparente'
     });

     $$(tabContainerID).addChild(componentWidget);
     componentWidget.loadComponent({
          path: component,
          userData: {entityID: entityID}
     });    
}

function cargarFiltroPaises(id){
	paises = ds.Entidades.getPaisesEmpresas();
	
	for (var i = 0; i <= paises.length-1; i++ ) {
		$$(id+'_combobox1').addOption(paises[i],paises[i],false);
	}
	
}



function comprobarEntidad($comp){
	var datos = $comp.sources.empresasCliente.getEntidadEmpresa();
	/*alert(datos.entidad);
	alert(datos.pais);*/
	$comp.sources.entidades.query("ID ="+datos.entidad);
	$comp.sources.paisesISO.query("ID ="+datos.pais);
}

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
