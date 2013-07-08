
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		debugger;
		var art = ds.Articulos;
/*$.getJSON(art, function(data) {*/
//var menuLateral ='<ul class="nav nav-list">';
console.log(art.ID);
$(art).each(function() {
	if(this.ID > 0){
     $('#container1').append('<li><a href="#" data-target="contenido/'+this.Codigo +'"><i class="icon-'+this.Descipcion+'"></i><span>'+this.Precio+'</span></a> </li>');  
	console.log(this.enlace); 
	}
	});//./each*/

/*});*/ //./function data



	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
