﻿//********* INICIALIZACIÓN DE LLAMADAS *********\\btmodales = {};btmodales.initModal = function (clase,$comp){	var ruta = '/rest/'+clase;$.getJSON( ruta, function(data) {   var usuarios = data.__ENTITIES;     // var usuario;         for (var idx in usuarios)    {        usuario = usuarios[idx];                  } btmodales.modalUsuario($comp);		 });}//********* MODALES DE BOOTSTRAP *********\\btmodales.modalUsuario = function ($comp) {var modal = '<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+' <div class="modal-header">'// CABECERA+'    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+'    <h3 id="myModalLabel">'+usuario.NombreAcceso+'</h3>'+'  </div>'+'  <div class="modal-body">'// CUERPO+'    <p>Entidad: '+ usuario.Entidad.__deferred.__KEY +'</p>'+'    <p>Entorno: '+ usuario.Entorno.__deferred.__KEY +'</p>'+' <label>Nombre de usuario</label>'+'<input type="text" data-provide="typeahead" class="entrada left form" id="nombreAcceso" value="'+usuario.NombreAcceso+'">'+' <label>Contraseña</label>'+'<input type="text" data-provide="typeahead" class="entrada left form" value="'+usuario.Password+'" disabled>'+'</div>'//-> CUERPO+'  <div class="modal-footer">'// PIE+'    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>'+'  <button class="btn btn-primary" id="guardar">Save changes</button>'+'  </div>'+'</div>';$('body').append(modal);};//--- Otro codigo diferente para coger datos por rest --\\btmodales.obtenerRest = function ($comp,clase) {		var mydata = [];	$.ajax({	  url: '/rest/'+clase+'/',	  async: false,	  dataType: 'json',	  success: function (data) { //Cuando el aceso al dato o url esten disponibles...	    mydata = data.__ENTITIES;	    btmodales.modalEmpresa($comp,mydata);	  }	});		 }btmodales.modalEmpresa = function ($comp,mydata) {	//-- Creacion del container de la ficha de la Empresa --\\var modal = '<div id="modal_empresa" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+' <div class="modal-header">'// CABECERA+'    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+'    <h3 id="myModalLabel">'+mydata[1].Nombre+'</h3>'+'  </div>'+'  <div id="modal_empresa_cuerpo" class="modal-body">'// CUERPO+'</div>'+'  <div class="modal-footer">'// PIE+'    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>'+'  <button class="btn btn-primary" id="guardar">Save changes</button>'+'  </div>'+'</div>';$('body').append(modal);btmodales.crearInput("txt_nombre",mydata[1].Nombre,"Nombre");btmodales.crearInput("txt_direccion",mydata[1].Direccion,"Direccion");btmodales.crearInput("txt_nif",mydata[1].NIF,"N.I.F.");					};	  	btmodales.crearInput = function (id,valor,label){				var inputElement = document.createElement('input'); //HTML tag    inputElement.setAttribute('id',id);     inputElement.setAttribute('type','text');    inputElement.setAttribute('class','entrada left form');    inputElement.setAttribute('value',valor);            var label = "<label>"+label+"</label>";        $('.modal-body').append(label);    $('.modal-body').append(inputElement);}//-> ********* MODALES DE BOOTSTRAP *********\\//********* INICIALIZACIÓN DE LLAMADAS *********\\btmodales.getPendientes = function ($comp){ 	    var emps = $comp.sources.docComercial; // we put the datasource in a variable    var numelem = emps.length;  // we get the size of the current entity collection    console.log(emps.length);    var html = "";     for (var i = 0; i < numelem; i++) // for each element of the entity collection    {        emps.getElement(i, { onSuccess: function(event) // we get the element of position i          {            var elem = event.element; // elem contains a summarized copy of the datasource            html += elem.firstname+" <b>"+elem.name+"</b>"+" works for <I>"+elem.getAttributeValue("employer.name")+"</I><br/>";                    // Direct access for reading storage attributes of the element                    // Access through getAttributValue to relation attributes                    // In order for this access to work, you must declare the dependencies            if (event.userData.onLastEntity) // custom boolean value calculated in the userData param (see below),                                        // returns true only during processing the last entity            {                $("#display").html(html); // Display in the container                        // Must be called after processing last entity (asynchronous call)                        console.log(html);            }        },         userData: {onLastEntity: i == numelem-1} // object passed in the userData      });    }	 }//********* MODALES DE BOOTSTRAP *********\\btmodales.modalListaRegistros = function () {var modalListado = '<div id="modalLista" class="modal hide" tabindex="-1" role="dialog" aria-labelledby="modalListalLabel" aria-hidden="true">'+' <div class="modal-header">'// CABECERA+'    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+'    <h3 id="myModalLabel">Tickets Pendientes</h3>'+'  </div>'+'  <div id="modalListaBody" class="modal-body" style="max-height:250px;>'// CUERPO//Aquí append lo que corresponda.+'</div>'//-> CUERPO+'  <div class="modal-footer">'// PIE+'    <button class="btn" data-dismiss="modal" aria-hidden="true">Cerrar</button>'//+'  <button class="btn btn-primary" id="guardar">Save changes</button>'+'  </div>'+'</div>';$('body').append(modalListado);};