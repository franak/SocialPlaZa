/***** fc Para Ejecutar métodos alojados en una class en el servidor ******/

var log = "Comentario para la consola";
log += "Añado Comentarios para la consola ";

var clase = 'KnowledgeUser'; //La clase dónde se encuentra el método.
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

/***************/


