/***** ds Modules SSJS para dividir el codigo por modulos ******/

/*

	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	1º PASO Crear Modulo y la funcion
	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	
	new Module js, se crea una carpeta Modules y nos saldra un ejemplo sencillo
	
*/


exports.helloWorld = function helloWorld () {
	return ('Hello world');
};

// Si por ejemplo estoy en el modulo de usuarios ,tendriamos una funcion llamda insertaUsuario:


exports.insertaUsuario = function insertaUsuario (var1,var2) {
	
	//Codigo ...
	
};


/*

	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	2º PASO Llamada desde el Model.js
	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	
	En el Model.js tendriamos un codigo de llamada asi:
	
*/

methods :
	{
		newRegistroUsuario:function(d1,d2)
		{
			
			//require([Nombre Modulo]).[Nombre Funcion Modulo]();
			
			require("UsuariosModule").insertaUsuario(var1,var2);
			
			//si retorna datos :
			
			var resultado = require("UsuariosModule").insertaUsuario(var1,var2);
			
			return resultado;
			
		}
	}
	
	
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++ BORRADO DE LINEAS +++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//Client-side:

var linea = $comp.sources.lineasCollection.ID;
ds.Lineas.borrarLinea(linea);

//Server-side:

function borrarLinea(vLinea){

	var lin = ds.Lineas.query("ID =:1", vLinea);
	lin.remove();

}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++ FIN BORRADO DE LINEAS +++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++ INPUT ARTICULOS EN EL CLIENT-SIDE +++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

if(confirm("¿Desea crear este articulo?")){
			
	var fam = $comp.sources.familias.getCurrentElement();
	var art = ds.Articulos.newEntity();
			
	art.Codigo.setValue($$(id+"_textField2").getValue());
	art.Precio.setValue($$(id+"_textField4").getValue());
	art.Descripcion.setValue($$(id+"_textField3").getValue());
	art.Familia.setValue(fam);
	art.save({
		onSuccess:function (event){
			$comp.sources.empresas.serverRefresh();
		}
			
	});
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++ FIN INPUT ARTICULOS EN EL CLIENT-SIDE +++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++ AÑADIR LINEA EN EL CLIENT-SIDE +++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//



		//DS CONDICIONO AL BOTON QUE LA ACCION ANTERIOR SE HAYA TERMINADO¡¡
		if($$(id+"_richText3").getState() != "disabled"){
		
			//DS PONGO EL ESTADO DISABLED AL BOTON
			$$(id+"_richText3").setState('disabled');
			
			//DS COMPRUEBO SI EXISTE YA ESA LINEA EN EL DOCUMENTO COMERCIAL
			var lin = ds.Lineas.getLinea($comp.sources.articulos.ID,$comp.sources.docComercial.ID);
			
			if(lin != null){
			
				//DS SI YA EXISTE LA LINEA:
				//DS INCREMENTO SU CANTIDAD EN 1, RECARGO Y PONGO EL ESTADO A DEFAULT
				lin.Cantidad.setValue(lin.Cantidad.getValue() + 1);
				pos = lin.Posicion.getValue();
				lin.save({
					onSuccess:function (event){
						$comp.sources.docComercial.serverRefresh();
						//DS PONGO EL ESTADO DEFAULT AL BOTON
						$$(id+"_richText3").setState('default');
					}
				});
				
			//DS SI LA LINEA NO EXISTE LA CREAMOS
			}else{
			
				//DS CONSEGUIMOS EL ARRAY CON TODAS LAS POSICIONES EN EL GRID 
				var aPos = ds.Lineas.getPosiciones($comp.sources.docComercial.ID);
				
				$comp.sources.lineas.newEntity();
				$comp.sources.lineas.Codigo = $comp.sources.articulos.Codigo;
				$comp.sources.lineas.Descripcion = $comp.sources.articulos.Descripcion;
				$comp.sources.lineas.PrecioUnitario = $comp.sources.articulos.Precio;
				$comp.sources.lineas.Cantidad = 1;
				$comp.sources.lineas.Documento = $comp.sources.docComercial.getCurrentElement();
				//DS si ha habido algun borrado previamente se le asigna automaticamente su posicion antigua
				if(vPosRestada != null){
					
					//DS se le incrementa en 1 a todas las lineas cuyas posiciones son mayores que la borrada 
					ds.Lineas.sumarPosiciones($comp.sources.docComercial.ID, vPosRestada);
					$comp.sources.lineas.Posicion=vPosRestada;
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
				
				//DS AÑADIMOS LA NUEVA ENTIDAD A LA COLECCIÓN DE LINEAS, GUARDAMOS, RECARGAMOS Y PONEMOS EL ESTADO DEL BOTONB A DEFAULT
				$comp.sources.lineasCollection.addEntity($comp.sources.lineas.getCurrentElement());
				$comp.sources.lineas.save({
					onSuccess:function (event){
						$comp.sources.docComercial.serverRefresh();
						$$(id+"_richText3").setState('default');
					}
				});	
			
			}
		
		}
		
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++ FIN AÑADIR LINEA EN EL CLIENT-SIDE +++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++ BORRADO DE LINEA EN EL CLIENT-SIDE Y SERVER-SIDE +++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//DS asigno la posicion anterior a pos para cuando borre se valla hacia arriba
pos = $comp.sources.lineasCollection.Posicion - 1;
		
vPosRestada = $comp.sources.lineasCollection.Posicion;
var linea = $comp.sources.lineasCollection.ID;
ds.Lineas.borrarLinea(linea);
		
//DS resto las posiciones a todas las lineas a partir de la borrada
ds.Lineas.restarPosiciones($comp.sources.docComercial.ID,vPosRestada);
$comp.sources.docComercial.serverRefresh();


//DS ** LA VARIABLE pos CONTIENE LA POSICION EN LA QUE DEBE DE ACTUAR LA SELECCION DEL GRID CUANDO HAYA UN CAMBIO

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++ FIN BORRADO DE LINEA EN EL CLIENT-SIDE Y SERVER-SIDE +++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++ EVENTO HOLD IT (MANTENER PULSADO) +++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//DS ** LA VARIABLE vTime ES UNA VARIABLE GLOBAL

//DS AL INICIAR EL PRESIONADO DEL ELEMENTO, COGEMOS EL PRIMER TIEMPO Y LO GUARDAMOS
Button6.mousedown = function Button6_mousedown (event){
	vTime = 0;
	vTime = new Date();
};


//DS AL TERMINAR DE PRESIONAR EL ELEMENTO SE MIDE OTRA VEZ EL TIEMPO Y SE RESTAN
Button6.mouseup = function Button_mouseup (event){
	var vTimeResta = new Date();
	vTimeResta = vTimeResta - vTime;
		
	//DS SI LA DIFERENCIA ES MAYOR O IGUAL A 65O ms SE DA POR HECHO QUE EL USUARIO HA QUERIDO MANTENER PULSADO
	if (vTimeResta >= 650) {
		//DS ACTUARIA EL EVENTO ON HOLD IT
		alert("Has mantenido pulsado el boton");
	}else{
		//DS ACTUARIA EL EVENTO ON CLICK
		alert("Has hecho click en el boton");
	}
		
};


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++ FIN EVENTO HOLD IT (MANTENER PULSADO) +++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//archivos para hacer alerta,confirm y promp customizados
http://labs.abeautifulsite.net/archived/jquery-alerts/demo/






