﻿/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:	var result = require('dsModule').helloWorld();	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html*/exports.helloWorld = function helloWorld () {	return ('Hello world');};exports.restrincion = function restrinncion () {		var curUser = currentUser();		if (curUser.name == "default guest" ) {				return false;			} else {				var entornoID = ds.Usuarios.find("NombreAcceso = :1", curUser.name).Entorno.ID;				return entornoID;		}	};exports.restrincionEntorno = function restrincionEntorno (clase) {		var session = currentSession(); 		//ds Si tienes privilegios del sistema	if (session.belongsTo("Internal")){				return clase.all();			} else {				//ds devuelve el entorno id del usuario logueado;		//ds la funcion restrincion esta en este archivo		var entornoID = require("dsModule").restrincion();				//ds si no estas logueado, lo que es lo mismo que entornoID = false		if(entornoID == false){						return clase.query("ID < 0");							} else {						if(clase.getName() == "Entornos"){								return clase.query("ID = :1",entornoID);							}else if (clase.getName() == "Empresas") {								return clase.query("Entidad.Entorno.ID = :1",entornoID);						}else if (clase.getName() == "Articulos") {								var emp = ds.Empresas.find("Entidad.Entorno.ID =:1",entornoID).Entidad.Nombre;								return clase.query("Empresa.Entidad.Nombre= :1",emp);							}else if (clase.getName() == "Familias") {								var emp = ds.Empresas.find("Entidad.Entorno.ID =:1",entornoID).Entidad.Nombre;							return clase.query("articulosCollection.Empresa.Entidad.Nombre= :1",emp);							}else if (clase.getName() == "Lineas") {								return clase.query("Documento.Entorno.ID = :1",entornoID);							}else if (clase.getName() == "CajasTPV") {								return clase.query("Empresa.Entidad.Entorno.ID = :1",entornoID);							}else if (clase.getName() == "Almacenes") {								return clase.query("Empresa.Entidad.Entorno.ID = :1",entornoID);							}else if (clase.getName() == "CajasMovimientos") {								return clase.query("Caja.Empresa.Entidad.Entorno.ID = :1",entornoID);							}						return clase.query("Entorno.ID = :1",entornoID);					}					}	};exports.oninit = function oninit (clase, claseCollection) {			var user = currentUser(); // conseguir usuario logueado	if (user.name != "default guest" && user.name != "manager") {			var usuario = ds.Usuarios.find("NombreAcceso ="+user.name);			if (user != null){ // if a user is logged in	   		   		if (claseCollection.getName() == "Usuarios"){	   				   			clase.UserID = user.ID;	   			clase.Entorno = usuario.Entorno; 	   				   		} else if (claseCollection.getName() == "Empresa"){	   				   			clase.Entidad.Entorno = usuario.Entorno; 	   				   		}else if (claseCollection.getName() == "Articulos"){	   				   			var emp = ds.Empresas.find("ID > 0");	   			clase.Empresa = emp; 	   				   		}else if (claseCollection.getName() == "CajasTPV" || claseCollection.getName() == "Alamcenes"){	   				   			clase.Empresa.Entidad.Entorno = usuario.Entorno;	   			clase.usuarioCollection.Entorno = usuario.Entorno;	   			 	   				   		}else if (claseCollection.getName() == "CajasMovimientos"){	   					   			clase.Caja.Empresa.Entidad.Entorno = usuario.Entorno; 		   					   	}else if (claseCollection.getName() != "Lineas"){	   				   			clase.Entorno = usuario.Entorno; 	   				   		}	   				}	}	}exports.onvalidate = function onvalidate (clase, claseCollection) {		if (clase.UserID == null) //if the entity does not have a user    {    	        var user = currentUser(); // we get the user			if (user.name != "default guest" && user.name != "manager") {						var usuario = ds.Usuarios.find("NombreAcceso ="+user.name);					if (user != null){ // if a user is logged in							//ds Si la clase es Usuarios				if (claseCollection.getName() == "Usuarios"){	   					   			clase.UserID = user.ID;		   			clase.Entorno = usuario.Entorno; 	   				   			//ds Si la clase es Empresa		   		} else if (claseCollection.getName() == "Empresa"){		   					   			clase.Entidad.Entorno = usuario.Entorno; 		   				   		//ds Si la clase es Lineas		   		}else if (claseCollection.getName() == "Articulos"){	   					   			var emp = ds.Empresas.find("ID > 0");		   			clase.Empresa = emp; 		   					   		}else if (claseCollection.getName() == "CajasTPV"){	   					   			clase.usuarioCollection.Entorno = usuario.Entorno; 		   					   		}else if (claseCollection.getName() == "CajasMovimientos"){	   					   			clase.Caja.Empresa.Entidad.Entorno = usuario.Entorno; 		   					   		}else if (claseCollection.getName() == "Lineas"){			   					   			//clase.Documento.Entorno = usuario.Entorno; 		   					   		}else {		   					   			clase.Entorno = usuario.Entorno; 		   		}							}		}		    }    if (clase.UserID == null) // error if no user is identified    {    	var err = 'Hay un error al validar el usuario';        return err;	};	}