﻿/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:	var result = require('importacionModule').helloWorld();	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html*/exports.importacionInicial = function importacionInicial(){	loginByPassword("manager","123");				creaArticulo("1209","Schwarzkopf Osis 500ml",10.99,"Lacas");		creaArticulo("1208","Tahe Natural Hair 300ml",12.50,"Lacas");		creaArticulo("1207","Wella Styling Stay Essential 150ml",15.15,"Lacas");				creaArticulo("1408","Schwarzkopf 160ml ",8.90,"Gomina");		creaArticulo("1407","Loreal Tecni Aqua Gloss 150ml",7.50,"Gomina");		creaArticulo("1409","Tahe Natural Hair Gel Wet fijación normal 150ml",8.00,"Gomina");				creaArticulo("1309","Loreal Mythic Oil Champú 250ml",15.10,"Champu");		creaArticulo("1308","Champú Loreal Abosolut Repair Celullar 500ml",8.20,"Champu");		creaArticulo("1307","Fanola after colour Champú color 350ml.",5.75,"Champu");		crearUsuarioTG();			logout();	}function crearUsuarioTG(){		var result = ds.Usuarios.find("NombreAcceso = TG");			//SI EL USUARIO DEMO NO EXISTE SE CREA		if(result == null){		var entorno = new ds.Entornos();		entorno.save();		var tipoAcceso = 1;		var var1 = generateUUID();				new_usuario = new ds.Usuarios({			NombreAcceso: "TG",			Password: "123",			Activado: true,			accessType: tipoAcceso,			UserID: var1,			Entorno: entorno		});		new_usuario.save();				//++++++++++++++++++++++++++++++++++		//NUEVA ENTIDAD EMPRESA		//++++++++++++++++++++++++++++++++++		new_entidad2 = new ds.Entidades({			Nombre: "La Barberia"+new_usuario.ID,			Entorno: entorno		});		new_entidad2.save();					//++++++++++++++++++++++++++++++++++		//NUEVA  EMPRESA		//++++++++++++++++++++++++++++++++++		new_empresa = new ds.Empresas();		new_empresa.Entidad = new_entidad2;		new_empresa.Tipo = "Peluqueria";		new_empresa.save();				//++++++++++++++++++++++++++++++++++		//NUEVA CAJA PARA TG		//++++++++++++++++++++++++++++++++++		var caja = new ds.CajasTPV();		caja.Descripcion = 'Caja 1';		caja.Codigo = 'C1';		caja.Empresa = new_empresa;		caja.save();		//++++++++++++++++++++++++++++++++++		//NUEVO ALMACÉN PARA TG		//++++++++++++++++++++++++++++++++++		var almacen = new ds.Almacenes();		almacen.Descripcion = 'Almacen 1';		almacen.Codigo = 'A1';		almacen.Empresa = new_empresa;		almacen.save();				new_usuario.TPVCaja = caja;		new_usuario.TPVAlmacen = almacen;		new_usuario.save();				var medio1 = new ds.MedioPago();		medio1.Codigo = "EF";		medio1.Descripcion = "Efectivo";		medio1.Empresa = new_empresa;		medio1.save();				var medio2 = new ds.MedioPago();		medio2.Codigo = "TJ";		medio2.Descripcion = "Tarjeta";		medio2.Empresa = new_empresa;		medio2.save();				//SE PEGA LOS ARTICULOS A LA EMPRESA DEL USUARIO TG CREADO				require('importacionModule').pegarArticulos(new_empresa);	}}exports.crearUsuarioDemo = function crearUsuarioDemo(){			loginByPassword("manager","123");	//++++++++++++++++++++++++++++++++++	//NUEVO ENTORNO PARA DEMO	//++++++++++++++++++++++++++++++++++	var entorno = new ds.Entornos();	entorno.FechaAlta = new Date();	entorno.save();	var tipoAcceso = 4;	var var1 = generateUUID();		//++++++++++++++++++++++++++++++++++	//NUEVO USUARIO PARA DEMO	//++++++++++++++++++++++++++++++++++	var myFoto = loadImage ("/Users/dsantiago/Documents/SocialPlaZa/SocialPlaZa/onebit_18.png");	new_usuario = new ds.Usuarios({		NombreAcceso: "demo",		Password: var1, 		Activado: true,		accessType: tipoAcceso,		Foto: myFoto,		UserID: var1,		Entorno: entorno	});	new_usuario.save();	new_usuario.NombreAcceso = "demo_"+new_usuario.ID;	new_usuario.save();		var retorno = {};	retorno.pass = var1;	retorno.user = "demo_"+new_usuario.ID;		//++++++++++++++++++++++++++++++++++	//NUEVA ENTIDAD USUARIO	//++++++++++++++++++++++++++++++++++	new_entidad = new ds.Entidades({		Entorno: entorno	});	new_entidad.save();	new_usuario.Entidad = new_entidad;	new_usuario.save();			//++++++++++++++++++++++++++++++++++	//NUEVA ENTIDAD EMPRESA	//++++++++++++++++++++++++++++++++++	new_entidad2 = new ds.Entidades({		Nombre: "La Barberia"+new_usuario.ID,		Entorno: entorno	});	new_entidad2.save();			//++++++++++++++++++++++++++++++++++	//NUEVA  EMPRESA	//++++++++++++++++++++++++++++++++++	new_empresa = new ds.Empresas();	new_empresa.Entidad = new_entidad2;	new_empresa.Tipo = "Peluqueria";	new_empresa.save();		//++++++++++++++++++++++++++++++++++	//NUEVA CAJA PARA DEMO	//++++++++++++++++++++++++++++++++++	var caja = new ds.CajasTPV();	caja.Descripcion = 'Caja 1';	caja.Codigo = 'C1';	caja.Empresa = new_empresa;	caja.save();	//++++++++++++++++++++++++++++++++++	//NUEVO ALMACÉN PARA DEMO	//++++++++++++++++++++++++++++++++++	var almacen = new ds.Almacenes();	almacen.Descripcion = 'Almacen 1';	almacen.Codigo = 'A1';	almacen.Empresa = new_empresa;	almacen.save();		var medio1 = new ds.MedioPago();	medio1.Codigo = "EF";	medio1.Descripcion = "Efectivo";	medio1.Empresa = new_empresa;	medio1.save();		var medio2 = new ds.MedioPago();	medio2.Codigo = "TJ";	medio2.Descripcion = "Tarjeta";	medio2.Empresa = new_empresa;	medio2.save();		new_usuario.TPVCaja = caja;	new_usuario.TPVAlmacen = almacen;	new_usuario.save();		//SE PEGA LOS ARTICULOS A LA EMPRESA DEL USUARIO DEMO CREADO		logout();	loginByPassword(retorno.user,retorno.pass);	require("importacionModule").pegarArticulos(new_empresa);	//RETORNO LA CONTRASEÑA DEL USUARIO DEMO CREADO PARA LOGUEARME COMO TAL	return retorno;}function creaArticulo(codigo,descripcion,precio,familia){	var fam = ds.PreFamilias.find("Nombre =:1",familia);		//ds Si la familia no existe, lo crea	if(fam == null){		fam = new ds.PreFamilias();		fam.Nombre= familia;		fam.save();	}		var art = ds.PreArticulos.find("Codigo =:1",codigo);			//ds Si el articulo no existe, lo crea	if(art == null){		art = new ds.PreArticulos({			Codigo: codigo,			Descripcion: descripcion,			Precio: precio,			Familia: fam		}).save();	}}exports.pegarArticulos = function pegarArticulos(empresa) {		for(var i = 0; i < ds.PreArticulos.length;i++){				var todosArt = ds.PreArticulos.all();		var preArt = todosArt[i];				var fam = ds.Familias.find("Nombre =:1",preArt.Familia.Nombre);		if(fam == null){			fam = new ds.Familias();			fam.Nombre= preArt.Familia.Nombre;			fam.Tpv = true;			fam.save();		}				art = new ds.Articulos({			Codigo: preArt.Codigo,			Descripcion: preArt.Descripcion,			Precio: preArt.Precio,			Familia: fam,			Empresa: empresa		}).save();			}}