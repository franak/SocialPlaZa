﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Articulos';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	var crear = false;
		
	$comp.sources.familias.allEntities({
		onSuccess:function(){
			var selectElement = document.createElement('select');
			selectElement.setAttribute('id','select-familias3');
			selectElement.setAttribute('tabindex','6');
		    $('#'+id+'_container1').append(selectElement);
		    $('#select-familias3').css('position','absolute');
		    $('#select-familias3').css('top','193px');
		    $('#select-familias3').css('left','401px');
		    $('#select-familias3').css('height','35px');
    		$('#select-familias3').css('width','200px');
		    var familias = $comp.sources.familias;
		    var optionHTML;
		   
			for (var i = 0; i < familias.length; i++){
			 	familias.getElement(i, { 
			 		onSuccess: function(event) {

		        		var entity = event.element;
		        		optionHTML += '<option value="'+entity.ID+'">'+entity.Nombre+'</option>';
		        		
		       		}
			   });
			 
			}
			
			$('#select-familias3').append(optionHTML);
		}
	});
	
	
	
	
	
	
	
	// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var button3 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var button9 = {};	// @button
	var button8 = {};	// @button
	var button4 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		proceso.abrirProceso("TPV2");
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$comp.sources.articulos.removeCurrent();
	};// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		//recargarFamilias();
		var vFamilia = ds.Articulos.getFamilia($comp.sources.articulos.Codigo);
		$("#select-familias3 option[value="+ vFamilia +"]").attr("selected","selected");
		
		$("#"+id+"_dialog1").css("top","0px");
		//$("body").append($("#"+id+"_dialog1"));
		$$(id+"_dialog1").displayDialog();
	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		$comp.sources.articulos.serverRefresh({
			onSuccess:function(){
				$$(id+"_dialog1").closeDialog();
			}
		});
	};// @lock

	button8.click = function button8_click (event)// @startlock
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
		if($("#"+id+"_textField4").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField5").val() != ""){
			relleno = true;
		}
		
		
		
		
		
		
		if(crear == true){
			
			if(relleno == true){
				
				$comp.sources.articulos.save({
					onSuccess:function(){

						crear = false;
						$comp.sources.articulos.addEntity($comp.sources.articulos.getCurrentElement());
						$comp.sources.articulos.asignarFamilia($("#select-familias3").val());
						var idArticulo = $comp.sources.articulos.ID;
						$comp.sources.articulos.all({
							onSuccess:function(){
								/*if(WAF.directory.currentUser().fullName == "TG"){
									ds.PreArticulos.creaPreArticulo(idArticulo);
								}*/
							}
						});

						$$(id+"_dialog1").closeDialog();
					}
				});
				
			}else{
				
				alert("Error al guardar, revisa los campos");
				
			}
			
		}else{
			$comp.sources.articulos.save({
				onSuccess:function(){
					$comp.sources.articulos.asignarFamilia($("#select-familias3").val());
					$comp.sources.articulos.serverRefresh();
					$$(id+"_dialog1").closeDialog();
				}
			});
		}
	};// @lock

	button4.click = function button4_click (event)// @startlock
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
		if($("#"+id+"_textField4").val() != ""){
			relleno = true;
		}
		if($("#"+id+"_textField5").val() != ""){
			relleno = true;
		}
		
		if(relleno == true){
			$comp.sources.articulos.save();
		}else{
			alert("Error, tienes que completar algun campo antes");
		}
		
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var vFamilia = ds.Articulos.getFamilia($comp.sources.articulos.Codigo);
		
		$("#select-familias3 option[value="+ vFamilia +"]").attr("selected","selected");
		$("#"+id+"_dialog1").css("top","0px");
		//$("body").append($("#"+id+"_dialog1"));
		
		$$(id+"_dialog1").displayDialog();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		crear = true;
		$comp.sources.articulos.newEntity();
		$("#"+id+"_textField1").focus();
		$("#"+id+"_dialog1").css("top","0px");
		$("#"+id+"_dialog1").css("left","0px");
		//$("body").append($("#"+id+"_dialog1"));
		
		
		$$(id+"_dialog1").displayDialog();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	WAF.addListener(this.id + "_button9", "click", button9.click, "WAF");
	WAF.addListener(this.id + "_button8", "click", button8.click, "WAF");
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
