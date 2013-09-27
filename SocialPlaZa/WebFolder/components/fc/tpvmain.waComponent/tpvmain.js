
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'tpvmain';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var bEje = {};	// @button
	var button1 = {};	// @button
	var button4 = {};	// @button
	var button3 = {};	// @button
	var bRebuild = {};	// @button
	var bNuevo = {};	// @button
	// @endregion// @endlock


	// eventHandlers// @lock

	bEje.click = function bEje_click (event)// @startlock
	{// @endlock
		/***** Ejecutar métodos en el servidor ******/

var log = "Comentario para la consola";
log += "Añado Comentarios para la consola ";

var clase = 'A'; //La clase dónde se encuentra el método.
var methodo = 'newTest'; // El nombre del método

ds.Metodos.callMethod({method:methodo, 
    onSuccess:function(event){

      $comp.sources.knowledgeUser.resolveSource();   
     //The resolveSource( ) method forces the execution of the initialization query for the datasource. 
  	return log;  //Devuelvo la consola.


    }, onError:function(error){
        return log;  //Devuelvo la consola.
},
arguments : [clase] //Mando dos varibles. Parece que es un "array", pero no lo es...
});


/***********/

	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var sel = $comp.$comp.sources.lineasCollection.getSelection(); // get the current selection
		
		$comp.sources.docComercial.getElement(sel, { onSuccess: function(event) // we get the element of position i  
        {
            var elem = event.element; // elem contains a summarized copy of the datasource
            debugger;
            
        }
      });	
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
	
	$comp.sources.docComercial.selectPrevious();

	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
	
$comp.sources.docComercial.selectNext();   
        
	};// @lock
	

	bRebuild.click = function bRebuild_click (event)// @startlock
	{// @endlock


fcBrain.reconst(id);
	/*( var wid = $(id).widgets.dataGrid6;
wid.rebuild(); )*/


	};// @lock

	bNuevo.click = function bNuevo_click (event)// @startlock
	{// @endlock
	
		
/*var nuevoDoc = $comp.sources.docComercial;
nuevoDoc.newEntity();
nuevoDoc.save();
fcBrain.reconst(id);*/

//Las "variables" son LocalDataSources ->Variables


nuevoRegistro(vLong1,vVariable2); //fc Función nuevoRegistro en funcion.js

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_bEje", "click", bEje.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_bRebuild", "click", bRebuild.click, "WAF");
	WAF.addListener(this.id + "_bNuevo", "click", bNuevo.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
