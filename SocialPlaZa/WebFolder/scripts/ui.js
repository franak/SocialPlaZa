﻿/**** Objeto UI *** Interface de usuario*/UI = {}; //defino el objeto globalUI.mostrarSizeVentana = function(){		var anchoVentana=$(window).width();	var altoVentana=$(window).height();	var user = WAF.directory.currentUser();	$('#contentInt').css('color','red');  	$('#contentInt').html('Ancho: '+anchoVentana+' | ');  	$('#contentInt').append('Alto: '+altoVentana+' | ');    // returns width of browser viewport	if(user){		var userName = user.fullName;		$('#contentInt').append(' - Usuario: '+userName);    // returns width of browser viewport	}}	UI.getUrlVars = function () {//var origin = functions.getUrlVars()["origin"];    var vars = {};    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {        vars[key] = value;    });    return vars;}	UI.alert = function(message, title, callback) {		$.alerts.alert(message, title, callback);	}	UI.confirm = function(message, title, callback) {		$.alerts.confirm(message, title, callback);	};			UI.prompt = function(message, value, title, callback) {		$.alerts.prompt(message, value, title, callback);	};  UI.getMensaje = function(message, title, buttonText){ 	 	buttonText = (buttonText == undefined) ? "Ok" : buttonText;    title = (title == undefined) ? "The page says:" : title;    var div = $('<div>');    //DS clase del div es alerta para despues dar estilos a los mensajes    div.attr('class', 'alerta');    div.html(message);    div.attr('title', title);    div.dialog({        autoOpen: true,        modal: true,        draggable: false,        resizable: false,        buttons: [{            text: buttonText,            click: function () {                $(this).dialog("close");                div.remove();            }        }]    }); }    UI.crearComponente = function (title, component, id, entityID){     	     $$("tabView1").addTab(title, true);     var selectedTab = $$("tabView1").getSelectedTab();     selectedTab.menuItem.id = title;     var tabContainerID = $$("tabView1").getTabContainer(selectedTab.index).id;          if(entityID == null){          domID = Math.floor(Math.random()*100000)+1;                   var isNew = true;     }     var componentDOM = document.createElement('div');     componentDOM.setAttribute('id','comp_'+domID);          document.body.appendChild(componentDOM);          var componentWidget = new WAF.widget.Component({          'id': 'comp_' + domID,          'data-type': 'component',          'data-lib': 'WAF',          'data-constraint-top': 'true',          'data-constraint-right': 'true',          'data-constraint-left': 'true',          'data-constraint-bottom': 'true',          'class': 'compTransparente'     });     $$(tabContainerID).addChild(componentWidget);     componentWidget.loadComponent({          path: component,          userData: {entityID: entityID}     });      }UI.loadingMsg = function (estado){	  // add the overlay with loading image to the page  var over = '<div id="overlay" class="alert alert-block alert-error">' +  '<p>Cargando...</p><img id="loading" src="images/loading.gif">' +  '</div>';  $(over).appendTo('body');  // click on the overlay to remove it  $('#overlay').click(function() {    $(this).remove();  });  if(estado){  	$('#overlay').remove();  	}  // hit escape to close the overlay  $(document).keyup(function(e) {    if (e.which === 27) {      $('#overlay').remove();    }  });	}	UI.gifCargando = function($comp){	// OVERLAY	 // add the overlay with loading image to the pagevar over = '<img id="loading" src="images/loading.gif">';    // donde = getHtmlObj($comp.id+'_dialog1');  $(over).appendTo('#MainComp');  // click on the overlay to remove it  $('#loading').click(function() {    $(this).remove();  });  // hit escape to close the overlay  $(document).keyup(function(e) {    if (e.which === 27) {      $('#loading').remove();    }  });setTimeout(function(){        $('#loading').remove();},500);// OVERLAY}			UI.openCloseMenu = function() {    /*var mySound = new buzz.sound( "/sounds/clickElegante", {			    formats: [ "wav", "mp3" ]			});							mySound.play();*/    //Animaciones ; http://daneden.me/animate/    var bOpenMenu = $$('headComp_openMenu');    if (bOpenMenu.getValue() == 'c') {        $('#mlateralComp').show();       /*         $('#rightComp').animate({            right: '-160px'        }, 200);                 $('#socialComponent').animate({            right: '-360px'        }, 200);*/                 $('#rightComp').removeClass('animated bounceInRight');       	 $('#rightComp').addClass('animated bounceOutRight');       	        	   $('#socialComponent').removeClass('animated bounceInRight');       	 $('#socialComponent').addClass('animated bounceOutRight');                $('#MainComp').animate({            left: '189px'        }, 200);        $('#mlateralComp').removeClass('animated bounceOutLeft');        $('#mlateralComp').addClass('animated fadeInLeft');        setTimeout(function() {}, 500);        bOpenMenu.setValue('a');    }    else if (bOpenMenu.getValue() == 'a') {        $('#MainComp').animate({            left: '-2px'        }, 200);               /*          $('#rightComp').animate({            right: '0px'        }, 200);                 $('#socialComponent').animate({            right: '0px'        }, 200);*/		$('#rightComp').removeClass('animated bounceOutRight');        $('#rightComp').addClass('animated bounceInRight');		$('#socialComponent').removeClass('animated bounceOutRight');        $('#socialComponent').addClass('animated bounceInRight');        $('#mlateralComp').removeClass('animated fadeInLeft');        $('#mlateralComp').addClass('animated bounceOutLeft');        setTimeout(function() {}, 500);        bOpenMenu.setValue('c');    }}		UI.mostrarAdvertencia = function(tituloMensaje,cuerpoMensaje,tipoMensaje){			//var tituloMensaje = 'Oh snap! You got an error!';//var cuerpoMensaje = 'Change this and that and try again. Duis mollis, est non commodo luctu, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.'; var posicionCartel = 0;var cajaError = '<div id="errorDiv" class="alert alert-block alert-error">';  cajaError += '<button type="button" class="close">×</button><h4 class="alert-heading">'+tituloMensaje+'</h4><p>'+cuerpoMensaje+'</p>';cajaError +='</div>';  $(cajaError).appendTo('body').css('top',posicionCartel+70+'px'); //.animate({height:'120xp'}, 500);   $(cajaError).css('right','70%');  $(cajaError).removeClass('animated bounceOutUp');	$('#errorDiv').addClass('animated bounceInDown');  posicionCartel = posicionCartel+ 70;//$('#errorDiv').css('top','50px');//$('#errorDiv').show();//$('#errorDiv').show().animate({height:'120px'}, 500);//$('#errorDiv').html(mensaje); setTimeout(function(){ //Le pongo un tiempo de espera porque al cargar, lineasCollection se refrescaba y perdía la posición.$('#errorDiv').removeClass('animated bounceInDown');$('#errorDiv').addClass('animated bounceOutUp');var posicionCartel = 0;//$('#errorDiv').remove();        },2500);        $('.close').on('click',function(){$('#errorDiv').removeClass('animated bounceInDown');$('#errorDiv').addClass('animated bounceOutUp');setTimeout(function(){ //Le pongo un tiempo de espera porque al cargar, lineasCollection se refrescaba y perdía la posición.$('#errorDiv').remove();       },1000);		        });		}UI.disableSelection =  function disableSelection(target){ //Para desactivar la selección de texto en los textosif (typeof target.onselectstart!="undefined") //For IE     target.onselectstart=function(){return false}else if (typeof target.style.MozUserSelect!="undefined") //For Firefox    target.style.MozUserSelect="none"else //All other route (For Opera)    target.onmousedown=function(){return false}target.style.cursor = "default"}		