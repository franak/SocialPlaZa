
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var richText3 = {};	// @richText
	var richText4 = {};	// @richText
	var openMenu = {};	// @richText
	var image2 = {};	// @image
	var image1 = {};	// @image
	var splitToggle = {};	// @image
	var documentEvent = {};	// @document
// @endregion// @endlock
var changeSplit = function(position){
	$$('container6').setSplitPosition(position);
	prevSplitPosition = splitPosition;
	splitPosition = position;
}
// eventHandlers// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock
		$(botonera1).slideToggle();
		$(botonera2).css('top','24px').slideToggle();
	};// @lock

	richText4.click = function richText4_click (event)// @startlock
	{// @endlock
			fcBrain.openAltaUsuario();
	};// @lock

	openMenu.click = function openMenu_click (event)// @startlock
	{// @endlock
		UI.openCloseMenu();
	};// @lock

	image2.click = function image2_click (event)// @startlock
	{// @endlock
		
var tituloMensaje = 'Oh snap! You got an error!';
var cuerpoMensaje = 'Change this and that and try again. Duis mollis, est non commodo luctu, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.';

var cajaError = '<div id="errorDiv" class="alert alert-block alert-error">';  
cajaError += '<button type="button" class="close">×</button><h4 class="alert-heading">'+tituloMensaje+'</h4><p>'+cuerpoMensaje+'</p>';
cajaError +='</div>';
  $(cajaError).appendTo('body').css('top','70px').animate({height:'120xp'}, 500);
//$('#errorDiv').css('top','50px');
//$('#errorDiv').show();
//$('#errorDiv').show().animate({height:'120px'}, 500);

//$('#errorDiv').html(mensaje);

$('.close').on('click',function(){
//$('#errorDiv').fadeOut();
$('#errorDiv').remove();
});

		/*error = 'Esto es un mensaje';
		fcBrain.mostrarError('',error);
		getHtmlObj('image2').tooltip('toggle')*/
	};// @lock

	image1.click = function image1_click (event)// @startlock
	{// @endlock
		splitPosition = $$('container8').getSplitPosition();
		if(splitPosition != 0){
			changeSplit(0);
			//$$('splitToggle').setValue('/images/show.png');
		} else {
			changeSplit(prevSplitPosition);
			//$$('splitToggle').setValue('/images/hide.png');
		}
	};// @lock

	splitToggle.click = function splitToggle_click (event)// @startlock
	{// @endlock
		splitPosition = $$('container6').getSplitPosition();
		if(splitPosition != 0){
			changeSplit(0);
			//$$('splitToggle').setValue('/images/show.png');
		} else {
			changeSplit(
);
			//$$('splitToggle').setValue('/images/hide.png');
		}
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		mostrarSizeVentana();
		$(window).resize(function() {	
		mostrarSizeVentana();
		});
			
			if (!WAF.directory.currentUser()) {
			console.log('No es Usuario');
			}else{
			console.log('Acceso Permitido');
			}
				       
	};// @lock
		

// @region eventManager// @startlock
	WAF.addListener("richText3", "click", richText3.click, "WAF");
	WAF.addListener("richText4", "click", richText4.click, "WAF");
	WAF.addListener("openMenu", "click", openMenu.click, "WAF");
	WAF.addListener("image2", "click", image2.click, "WAF");
	WAF.addListener("image1", "click", image1.click, "WAF");
	WAF.addListener("splitToggle", "click", splitToggle.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
