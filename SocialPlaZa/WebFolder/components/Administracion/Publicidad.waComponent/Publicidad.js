
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Publicidad';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	var crear = false;

	var selectElement = document.createElement('select');
	selectElement.setAttribute('id','select-orden');
	selectElement.setAttribute('tabindex','3');
    $('#'+id+'_container2').append(selectElement);
    $('#select-orden').css('position','absolute');
    $('#select-orden').css('top','125px');
    $('#select-orden').css('left','44px');
    $('#select-orden').css('height','35px');
    $('#select-orden').css('width','200px');
    $("#select-orden option[value='1']").attr("selected",true);
    
    var optionHTML;	
	for (var i = 1; i < 4; i++){
	 	
        	optionHTML += '<option value="'+i+'">'+i+'ºBloque</option>';
        	
	}
	optionHTML += '<option value="5">5ºBloque</option>';
	$('#select-orden').append(optionHTML);
	
		
		
var currentscroll = 0;

$(':input').bind('focus',function() {
	
    currentscroll = $(window).scrollTop();
 
});

$(':input').bind('blur',function() {
	
    
    	$(window).scrollTop(0);
    
});

 
	// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button3 = {};	// @button
	var button9 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var button6 = {};	// @button
	var button5 = {};	// @button
	var button8 = {};	// @button
	var button7 = {};	// @button
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var relleno = false;
		
		if($("#"+id+"_textField1").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField2").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField3").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField8").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField9").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField10").val() != ""){
			relleno = true;
		}
		
		if(relleno == true){
			$comp.sources.publicidad.save();
		}else{
			alert("Error, tienes que completar algun campo antes");
		}
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		proceso.abrirProceso("TPV2");
	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		$comp.sources.publicidad.serverRefresh();
	};// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		var valor = $comp.sources.publicidad.Bloque;
		$("#select-orden option[value="+ valor +"]").attr("selected",true);
		$("#"+id+"_dialog1").css("top","0px");
		$("#"+id+"_dialog1").css("left","0px");
		$$(id+"_dialog1").displayDialog();
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		$comp.sources.publicidad.serverRefresh({
			onSuccess:function(){
				$$(id+"_dialog1").closeDialog();
			}
		});
		
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		var relleno = false;
		
		if($("#"+id+"_textField1").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField2").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField3").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField8").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField9").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField10").val() != ""){
			relleno = true;
		}
		
		if(relleno == true){
			
			if(crear == true){
				$comp.sources.publicidad.save({
					onSuccess:function(){
						crear = false;
						$comp.sources.publicidad.addEntity($comp.sources.publicidad.getCurrentElement());
						$comp.sources.publicidad.asignarBloque($("#select-orden").val());
						$comp.sources.publicidad.all();
						$$(id+"_dialog1").closeDialog();
					}
				});
			}else{
				$comp.sources.publicidad.save({
					onSuccess:function(){
						$comp.sources.publicidad.asignarBloque($("#select-orden").val());
						$comp.sources.publicidad.all();
						$$(id+"_dialog1").closeDialog();
					}
				});
			}
		}else{
			alert("Error al guardar, revisa los campos");
		}
		
			
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock

		var valor = $comp.sources.publicidad.Bloque;
		$("#select-orden option[value="+ valor +"]").attr("selected",true);
		$("#"+id+"_dialog1").css("top","0px");
		$("#"+id+"_dialog1").css("left","0px");
		
		$$(id+"_dialog1").displayDialog();
	};// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		crear = true;
		$comp.sources.publicidad.newEntity();
		$("#"+id+"_textField9").focus();
		$("#"+id+"_dialog1").css("top","0px");
		$("#"+id+"_dialog1").css("left","0px");
		$$(id+"_dialog1").displayDialog();
		
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var relleno = false;
		
		if($("#"+id+"_textField1").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField2").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField3").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField8").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField9").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField10").val() != ""){
			relleno = true;
		}
		
		if(relleno == true){
			$comp.sources.publicidad.save();
		}else{
			alert("Error, tienes que completar algun campo antes");
		}
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_button9", "click", button9.click, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	WAF.addListener(this.id + "_button6", "click", button6.click, "WAF");
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_button8", "click", button8.click, "WAF");
	WAF.addListener(this.id + "_button7", "click", button7.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock
	
	


}// @startlock
return constructor;
})();// @endlock
