
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {
	
	$$('mlateralComp').loadComponent('/components/commons/menulateral.waComponent');
	
	
	var admin = {};

	admin.devuelveComponente = function(){
		var selectedTab = $$(id+"_tabView1").getSelectedTab();
	    return selectedTab.menuItem.id;
	}

	admin.pintarRecursos = function(){
		var selectElement = document.createElement('select');
		selectElement.setAttribute('id','select-recursos');
	    $('#'+id+'_container2').append(selectElement);
	    $('#select-recursos').css('position','absolute');
	    $('#select-recursos').css('top','20px');
	    $('#select-recursos').css('left','300px');
	    var optionHTML;
	   
	    optionHTML += '<option value="publicidad">Publicidad</option>';
		optionHTML += '<option value="usuarios">Usuarios</option>';
	    
	        		

		$('#select-recursos').append(optionHTML);
		$('#select-recursos').change(function(){
		
			var nombre = $(this).val();
			admin.abrirPestania(nombre);
	    });
	
	}
	
	admin.abrirPestania = function(nombre){
		
		switch(nombre){
			case "usuarios": admin.nuevoTab("Usuarios","dt_usuarios","usuariosComp","/components/Administracion/Usuarios.waComponent");
				
		}
	}
	
	admin.nuevoTab = function(title, identificador,identificadorComponente, component, entityID){
	  
	  	
	     $$(id+"_tabView1").addTab(title);

	     var selectedTab = $$(id+"_tabView1").getSelectedTab();
	     selectedTab.menuItem.id = identificador;
	     var tabContainerID = $$(id+"_tabView1").getTabContainer(selectedTab.index).id;
	     
	     if(entityID == null){
	          domID = Math.floor(Math.random()*100000)+1;
	         
	          var isNew = true;
	     }
	     var componentDOM = document.createElement('div');
	     componentDOM.setAttribute('id',identificadorComponente);
	     
	     document.body.appendChild(componentDOM);
	     
	     var componentWidget = new WAF.widget.Component({
	          'id': identificadorComponente,
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




	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Administracion';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	admin.pintarRecursos();
	// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		var comp = admin.devuelveComponente();
		
		switch(comp){
			case id+"_dt_publicidad": 
				sources.publicidad.removeCurrent();break;
			case "dt_usuarios": 
				sources.usuarios.removeCurrent();break;
		}
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var comp = admin.devuelveComponente();
		
		switch(comp){
			case id+"_dt_publicidad": 
				sources.publicidad.save({
					onSuccess:function(){
						sources.publicidad.all();
				    }
		        });break;
		    case "dt_usuarios": 
				sources.usuarios.save({
					onSuccess:function(){
						sources.usuarios.all();
				    }
		        });break;
		}
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var comp = admin.devuelveComponente();
		console.log(comp);
		switch(comp){
			case id+"_dt_publicidad": sources.publicidad.addNewElement();
									  $("#"+id+"_publicidadComp_textField7").focus();break;
			case "dt_usuarios": sources.usuarios.addNewElement();
									  $("#usuariosComp_textField1").focus();break;
		}
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
