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
        }
    };
        
     components.main = 'MainComp';
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
     	
 		//DS DECLARACION DEL OBJETO DE SONIDO:
//		var mySound = new buzz.sound( "/sounds/clickElegante", {
//		    formats: [ "wav", "mp3" ]
//		});	
//		
//		mySound.play();

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
						$comp.sources.docComercial.serverRefresh();

						//DS PONGO EL ESTADO DEFAULT AL BOTON
						$$(esteObjeto.id).setState('default');
					}
				});
				
			}else{
				var aPos = ds.Lineas.getPosiciones(docComercialID);
				

				
				$comp.sources.lineas.newEntity();
				$comp.sources.lineas.Codigo = art.Codigo.value;
				$comp.sources.lineas.Descripcion = art.Descripcion.value;
				$comp.sources.lineas.PrecioUnitario = art.Precio.value;
				$comp.sources.lineas.Cantidad = 1;
				$comp.sources.lineas.Documento.set($comp.sources.docComercial);
				$comp.sources.lineas.Almacen.set($comp.sources.almacenes);
				//DS si ha habido algun borrado previamente se le asigna automaticamente su posicion antigua
				if(vPosRestada != null){
					
					//DS se le incrementa en 1 a todas las lineas cuyas posiciones son mayores que la borrada 
					ds.Lineas.sumarPosiciones($comp.sources.docComercial.ID, vPosRestada);
					//$comp.sources.lineas.Posicion=vPosRestada;
					pos = vPosRestada;
					vPosRestada = null;
					
				//DS si es la primera linea, se le da la posicion 0
				}else if(aPos.length == 0){
					$comp.sources.lineas.Posicion=0;
					pos = 0;
					 
				}else{
					var n = aPos[0] + 1;
					$comp.sources.lineas.Posicion = n;
					pos = n;
				}
				
				$comp.sources.lineas.save({
					onSuccess:function (event){
						$comp.sources.docComercial.serverRefresh();
						$$(esteObjeto.id).setState('default');
					}
				});	
			}
		}
	}
	
	
	 this.anadirLineaPorCodigo = function($comp,botonCodigo){
     	
		var id = $comp.id; //FC Traemos el id mendiante el $comp. Siempre enviar $comp en lugar de id

		//DS CONDICIONO AL BOTON QUE LA ACCION ANTERIOR SE HA TERMINADO ¡¡
		if($$(botonCodigo).getState() != "disabled"){
			
		
		//DS PONGO EL ESTADO DISABLED AL BOTON
		$$(botonCodigo).setState('disabled');
		
		var articuloCodigo = $comp.sources.articulos1.Codigo;
		var docComercialID = $comp.sources.docComercial.ID;
		var art = ds.Articulos.devolverArticuloCodigo(articuloCodigo);
		console.log(art);
		var lin = ds.Lineas.getLinea(articuloCodigo,docComercialID); //en el servidor.
			
		//	var lin = $comp.sources.lineas.query("Documento.ID=:1 AND Codigo =:2",docComercialID,articuloCodigo);
			
				
			if(lin != null){
				lin.Cantidad.setValue(lin.Cantidad.getValue() + 1);
				pos = lin.Posicion.getValue();
				lin.save({
					onSuccess:function (event){
						//mySound.play();
						$comp.sources.docComercial.serverRefresh();

						//DS PONGO EL ESTADO DEFAULT AL BOTON
						$$(botonCodigo).setState('default');
					}
				});
				
			}else{
				var aPos = ds.Lineas.getPosiciones(docComercialID);
			
				$comp.sources.lineas.newEntity();
				$comp.sources.lineas.Codigo = art.Codigo.value;
				$comp.sources.lineas.Descripcion = art.Descripcion.value;
				$comp.sources.lineas.PrecioUnitario = art.Precio.value;
				$comp.sources.lineas.Cantidad = 1;
				$comp.sources.lineas.Documento.set($comp.sources.docComercial);
				$comp.sources.lineas.Almacen.set($comp.sources.almacenes);
				//DS si ha habido algun borrado previamente se le asigna automaticamente su posicion antigua
				if(vPosRestada != null){
					
					//DS se le incrementa en 1 a todas las lineas cuyas posiciones son mayores que la borrada 
					ds.Lineas.sumarPosiciones($comp.sources.docComercial.ID, vPosRestada);
					//$comp.sources.lineas.Posicion=vPosRestada;
					pos = vPosRestada;
					vPosRestada = null;
					
				//DS si es la primera linea, se le da la posicion 0
				}else if(aPos.length == 0){
					$comp.sources.lineas.Posicion=0;
					pos = 0;
					 
				}else{
					var n = aPos[0] + 1;
					$comp.sources.lineas.Posicion = n;
					pos = n;
				}
				
				$comp.sources.lineas.save({
					onSuccess:function (event){
						$comp.sources.docComercial.serverRefresh();
						$$(botonCodigo).setState('default');
					}
				});	
			}
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
			var codigoArticulo = $comp.sources.articulos.Codigo;
			var vFamilia = ds.Articulos.getFamilia(codigoArticulo);
			$$($comp.id+"_combobox2").setValue(vFamilia);//Poner el combo a la familia deseada
			
			$$($comp.id+"_textField2").setValue("");
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
			
			$comp.sources.articulos1.query("Descripcion =:1",objeto._value);
			var vFamilia = ds.Articulos.getFamilia($comp.sources.articulos1.Codigo);
			$$($comp.id+"_combobox2").setValue(vFamilia);//Ponermos los respectivos datos elegidos
			$$($comp.id+"_richText4").show();//Mostrar el boton eliminar
			
			$("BODY").append($("#"+$comp.id+"_dialog3"));
			$$($comp.id+"_dialog3").displayDialog();
			$("#"+$comp.id+"_dialog3").css("top",100);
			$("#"+$comp.id+"_dialog3").css("left",200);
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
	
this.crearContainerGeneral = function ($comp){
		
		var tamanio=0;
		
		 WAF.dataSource.create({
          'id': 'articulos', // id
          'binding': 'Articulos' // name of the datastore class
        });

		sources.articulos.resolveSource({
			onSuccess:function (event){
				tamanio = sources.articulos.length;
			

				for (var i=0;i<tamanio;i++){
					var div = document.createElement("div");
					div.setAttribute('id', 'contanierArticulo'+i);
					div.style.width = "86px";
					div.style.height = "84px";
									
					div.style.marginTop ="7px";
					div.style.marginLeft = "9px";
					div.style.cssFloat = "left";
					
					div.style.background = "blue";
					div.style.border = "solid 1px black";
					div.style.zIndex = "3";
					
					var divGeneral = document.getElementById($comp.id+"_containerGeneral");
					divGeneral.appendChild(div);
					
					myContainer2 = new WAF.widget.Container({ 
					'id': 'contanierArticulo'+i,
					'data-type': 'container',
					'data-lib': 'WAF',
					'data-constraint-top': 'true',
					'data-constraint-left': 'true' 
					});
					
					$$($comp.id+"_containerGeneral").addChild($$(myContainer2));
					
					
					
					 sources.articulos.select(i);
				     var descrip = sources.articulos.Descripcion;
				     var codigo = sources.articulos.Codigo;
				     var precio = sources.articulos.Precio;
					
					 var buttonRenderer = document.createElement('button'); //Step1
				     buttonRenderer.setAttribute('id', 'myButton'+i); //Step 2
				     buttonRenderer.setAttribute('value', sources.articulos.Codigo); //Step 2
				     buttonRenderer.style.width = "75px";
				     buttonRenderer.style.height = "60px";
					 buttonRenderer.style.marginTop ="5px";
					 buttonRenderer.style.marginLeft = "5px";
					 
					 
				     div.appendChild(buttonRenderer); 
				    
				     
				     
				     var buttonWidget = new WAF.widget.Button({
				          'id': 'myButton'+i,
				          'data-lib': 'WAF',
				          'data-type': 'button',
				          'data-text': sources.articulos.Descripcion,
				          'class': 'tpv-btn',
				          'data-action': 'simple', // action
          				  'data-binding': 'articulos' // datasource ID
				     });
				     
				     $$($comp.id+"_containerGeneral").addChild($$(buttonWidget))
				     
				     var textRenderer = document.createElement('div'); //Step1
				     textRenderer.setAttribute('id', 'myRich'+i); //Step 2
				     textRenderer.style.width = "75px";
				     textRenderer.style.height = "15px";
				     buttonRenderer.style.marginTop ="5px";
					 textRenderer.style.marginLeft = "5px";
					 textRenderer.style.background = "yellow";
					 textRenderer.style.cssFloat = "left";
					 textRenderer.innerHTML = precio;
					 
					 div.appendChild(textRenderer);
					 
					 myContainer3 = new WAF.widget.Container({ 
						'id': 'myRich'+i,
						'data-type': 'richText',
						'data-lib': 'WAF',
						'data-constraint-top': 'true',
						'data-constraint-left': 'true'	
					});
					
					$('#myButton'+i).mousedown(function(){
						vTime = 0;
						vTime = new Date();
					});
					
					$('#myButton'+i).mouseup(function(){
						var vTimeResta = new Date();
						vTimeResta = vTimeResta - vTime;
						
						if (vTimeResta >= 650) {
							
							$$($comp.id+"_dialog3").setState("modificar");//El dialogo pasa a estado modificar
							
							appds.estadoInicial($comp, "modificar",$(this).val());
							
							$("BODY").append($("#"+$comp.id+"_dialog3"));
							$$($comp.id+"_dialog3").displayDialog();
							$("#"+$comp.id+"_dialog3").css("top",100);
							$("#"+$comp.id+"_dialog3").css("left",200);
							
						}else{
							//anadir linea
							//alert($(this).val());
							var esteObjeto = $(this);//fc para pasarle el objeto dóde pulso
							appds.anadirLinea($comp,esteObjeto);
						}
					});
					
					
					 
				}
				
			}
		});
			
	}

    	
}

var appds = new appdsObj();


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