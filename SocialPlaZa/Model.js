
guidedModel =// @startlock
{
	Publicidad :
	{
		entityMethods :
		{// @endlock
			asignarBloque:function(bloque)
			{// @lock
				this.Bloque = bloque;
				this.save();
			}// @startlock
		},
		methods :
		{// @endlock
			devolverPublicidad5:function()
			{// @lock
				var collecionPublicidad = this.query("Bloque = 5");
				if(collecionPublicidad != null){
					return collecionPublicidad;
				}else{
					return false
				}
			},// @lock
			devolverPublicidad3:function()
			{// @lock
				
				var collecionPublicidad = this.query("Bloque = 3");
				if(collecionPublicidad != null){
					return collecionPublicidad;
				}else{
					return false
				}
				
				
			},// @lock
			devolverPublicidad2:function()
			{// @lock
				
				var collecionPublicidad = this.query("Bloque = 2");
				if(collecionPublicidad != null){
					return collecionPublicidad;
				}else{
					return false
				}

			},// @lock
			devolverPublicidad1:function()
			{// @lock
				var collecionPublicidad = this.query("Bloque = 1");
				if(collecionPublicidad != null){
					return collecionPublicidad;
				}else{
					return false
				}
				
			}// @startlock
		}
	},
	PaisesISO :
	{
		methods :
		{// @endlock
			devolverPais:function(entidadID)
			{// @lock
				var entidad = ds.Entidades.find("ID =:1",entidadID);
				try{
					var pais = entidad.Pais.Name;
					return pais;
				}catch(e){
					return "SPAIN";
				}
			}// @startlock
		}
	},
	MedioPago :
	{
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				var myClass = ds.MedioPago;
				return require("dsModule").restrincionEntorno(myClass);
			},// @startlock
			onValidate:function()
			{// @endlock
				var myClass = ds.MedioPago;
				return require("dsModule").onvalidate(this, myClass);
			},// @startlock
			onInit:function()
			{// @endlock
				var myClass = ds.MedioPago;
				return require("dsModule").oninit(this, myClass);
			}// @startlock
		},
		methods :
		{// @endlock
			asignarMedioPago:function(medio)
			{// @lock
				var objRetorno = this.find("Descripcion = :1",medio);
				return objRetorno;
			}// @startlock
		}
	},
	CajasMovimientos :
	{
		methods :
		{// @endlock
			consultaMovimientos:function(vFecha1,vFecha2)
			{// @lock
				var collMovimientos = ds.CajasMovimientos.query("fecha >=:1 and fecha <:2",vFecha1,vFecha2);
				return collMovimientos;
			}// @startlock
		},
		entityMethods :
		{// @endlock
			devuelveMedio:function()
			{// @lock
				return this.MedioPago.Descripcion;
			},// @lock
			devuelveCambio:function()
			{// @lock
				try{
					return this.Documento.Cambio;
				}catch(e){
					return null;
				}
			},// @lock
			devuelveDoc:function()
			{// @lock
				try{
					return this.Documento.Numero;
				}catch(e){
					return null;
				}
			},// @lock
			devuelveCaja:function()
			{// @lock
				try{
					return this.Caja.Descripcion;
				}catch(e){
					return null;
				}
			}// @startlock
		},
		collectionMethods :
		{// @endlock
			eliminarSeleccionados:function(inSelectedRows)
			{// @lock
				 // Create an empty collection, that will be filled with entities to delete
                var toDelete = ds.CajasMovimientos.createEntityCollection();
                var collDocumentos = ds.DocComercial.createEntityCollection();
                
                // Fill the collection to delete
                
                var flag = false;
                
                inSelectedRows.forEach(function(rowNum) {
                	
                	// se a–ade a una collecion los documentos afectados por la eliminacion de los registros
                	if(this[rowNum].Documento == null){
                		toDelete.add( this[rowNum] );
                	}else{
                		flag = true;	
                	}
              
                }, this);
                
             	if(flag == true){
             		return "error";
             		
         		}else{
         			// Reduce current collection
	                var newColl = this.minus( toDelete );
	                // Delete what needs to be deleted
	                toDelete.remove();
	                // Return the new collection
	                return newColl;
         		}
            
			}// @startlock
		},
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				var myClass = ds.CajasMovimientos;
				return require("dsModule").restrincionEntorno(myClass);
			}// @startlock
		}
	},
	PreArticulos :
	{
		methods :
		{// @endlock
			creaPreArticulo:function(codigo,precio,descripcion,familiaNombre)
			{// @lock
				var familia = ds.PreFamilias.find("Nombre =:1",familiaNombre);
				var new_preArticulo = new ds.PreArticulos();
				new_preArticulo.Codigo = codigo;
				new_preArticulo.Precio = precio;
				new_preArticulo.Descripcion = descripcion;
				new_preArticulo.Familia = familia;
				new_preArticulo.save();
			}// @startlock
		}
	},
	Familias :
	{
		methods :
		{// @endlock
			getFamilia:function(vFamilia)
			{// @lock
				var familia = ds.Familias.find("Nombre =:1",vFamilia);
				return familia;
			}// @startlock
		},
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				var myClass = ds.Familias;
				//Le paso como parametro la clase entera;
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").restrincionEntorno(myClass);
			},// @startlock
			onValidate:function()
			{// @endlock
				var myClass = ds.Familias;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").onvalidate(this, myClass);
			},// @startlock
			onInit:function()
			{// @endlock
				var myClass = ds.Familias;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").oninit(this, myClass);
			}// @startlock
		}
	},
	Almacenes :
	{
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				var myClass = ds.Almacenes;
				//Le paso como parametro la clase entera;
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").restrincionEntorno(myClass);
			},// @startlock
			onValidate:function()
			{// @endlock
				var myClass = ds.Almacenes;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").onvalidate(this, myClass);
			},// @startlock
			onInit:function()
			{// @endlock
				var myClass = ds.Almacenes;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").oninit(this, myClass);
			}// @startlock
		}
	},
	CajasTPV :
	{
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				var myClass = ds.CajasTPV;
				//Le paso como parametro la clase entera;
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").restrincionEntorno(myClass);
			},// @startlock
			onValidate:function()
			{// @endlock
				var myClass = ds.CajasTPV;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").onvalidate(this, myClass);
			},// @startlock
			onInit:function()
			{// @endlock
				var myClass = ds.CajasTPV;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").oninit(this, myClass);
			}// @startlock
		}
	},
	Articulos :
	{
		PrecioIVA :
		{
			onSet:function(value)
			{// @endlock
				return this.Precio + this.Iva;
			},// @startlock
			onGet:function()
			{// @endlock
				return this.Precio + this.Iva;
			}// @startlock
		},
		methods :
		{// @endlock
			borrarArticulosDemos:function()
			{// @lock
				var collPreArticulos = ds.PreArticulos.all();
				
				 collPreArticulos.forEach(function(registro) {
                	
                	var codigo = registro.Codigo;
                	var articulo = ds.Articulos.find("Codigo =:1",codigo);
                	
            		familia = ds.Familias.find("articulosCollection.Codigo =:1",codigo);
            		if(familia!=null){
            			familia.remove();
            		}

                	articulo.remove();
                	
                    
                }, this);
				
			},// @lock
			devolverArticuloCodigo:function(vCod)
			{// @lock
				var art = ds.Articulos.find("Codigo =:1",vCod);
				return art;
			},// @lock
			devolverArticulo:function(desc)
			{// @lock
				var art = ds.Articulos.find("Descripcion =:1",desc);
				return art;
			},// @lock
			getFamilia:function(vCodigo)
			{// @lock
				var familia = ds.Articulos.find("Codigo =:1",vCodigo).Familia.Nombre;
				return familia;
			}// @startlock
		},
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				var myClass = ds.Articulos;
				//Le paso como parametro la clase entera;
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").restrincionEntorno(myClass);
			},// @startlock
			onValidate:function()
			{// @endlock
				var myClass = ds.Articulos;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").onvalidate(this, myClass);
			},// @startlock
			onInit:function()
			{// @endlock
				var myClass = ds.Articulos;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").oninit(this, myClass);
			}// @startlock
		}
	},
	Entornos :
	{
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				var myClass = ds.Entornos;
				//Le paso como parametro la clase entera;
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").restrincionEntorno(myClass);
			}// @startlock
		}
	},
	DocComercial :
	{
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				var myClass = ds.DocComercial;
				//Le paso como parametro la clase entera;
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").restrincionEntorno(myClass);
			},// @startlock
			onValidate:function()
			{// @endlock
				var myClass = ds.DocComercial;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				return require("dsModule").onvalidate(this, myClass);
			},// @startlock
			onInit:function()
			{// @endlock
				var myClass = ds.DocComercial;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				return require("dsModule").oninit(this, myClass);
			}// @startlock
		},
		entityMethods :
		{// @endlock
			borraDocComercial:function()
			{// @lock
				this.remove();
			}// @startlock
		},
		methods :
		{// @endlock
			nuevaFecha:function()
			{// @lock
				var nfecha = new Date();
				this.Fecha = nfecha;

			},// @lock
			crearPrincipio:function()
			{// @lock
				
				var vDoc = ds.DocComercial.query("ID > 0");
				
				if(vDoc.length == 0){
					var newDoc = new ds.DocComercial();
					newDoc.Numero = 1;
					newDoc.save();
				}
			},// @lock
			getNumero:function()
			{// @lock
				
				//DS COJO TODOS LOS DOCUMENTOS
				var ultDocumento = ds.DocComercial.orderBy("Numero desc");
				
				var ultNumero = 1;
				
				//DS SI NO HAY DOCUMENTOS EL NUMERO SERA UNO;
				//DS Y SI LOS HAY COGERE EL ULTIMO Y LO INCREMENTARE
				
				if(ultDocumento.length != 0){
					ultNumero = ultDocumento.first().Numero + 1;
				}
				return ultNumero;
			}// @startlock
		}
	},
	Metodos :
	{
		methods :
		{// @endlock
			consultar:function(clase)
			{// @lock
				switch(clase){
					case "Articulos": return ds.Articulos.all();
					case "DocComercial": return ds.DocComercial.all();
					case "Lineas": return ds.Lineas.all();
					case "CajasMovimientos": return ds.CajasMovimientos.all();
					case "CajasTPV": return ds.CajasTPV.all();
					case "Almacenes": return ds.Almacenes.all();
					case "Familias": return ds.Familias.all();
					case "MedioPago": return ds.MedioPago.all();
					case "Usuarios": return ds.Usuarios.all();
					case "DocComercial": return ds.DocComercial.all();
					default: return "Error";
				};
			},// @lock
			recuperarPass:function(acceso)
			{// @lock
				loginByPassword("manager","123");
				var resultado = ds.Usuarios.recuperarPass(acceso);
				logout();
				return resultado;
			},// @lock
			primerLog:function(cod)
			{// @lock
				loginByPassword("manager","123");
				var resultado = ds.Usuarios.primerLog(cod);
				logout();
				return resultado;
			},// @lock
			pegarArticulos:function()
			{// @lock
				require("importacionModule").pegarArticulos();
			},// @lock
			getDocComercial:function()
			{// @lock
				return ds.DocComercial.find("ID > 0");
			},// @lock
			importacionInicial:function()
			{// @lock
				require("importacionModule").importacionInicial();
			},// @lock
			eliminarDemo:function()
			{// @lock
				require("UsuariosModule").eliminarDemo();
			},// @lock
			crearDemo:function()
			{// @lock
				return require("importacionModule").crearUsuarioDemo();
			},// @lock
			getParam:function(loc)
			{// @lock
				var vQuery=getURLQuery(loc);
				//vQuery es un objeto con todos los parametros q tenga la url
				return vQuery;
			},// @lock
			insertaUsuarioNuevo:function(acceso,pass,nom)
			{// @lock
				return require("UsuariosModule").insertaUsuarioNuevo(acceso,pass,nom);
			},// @lock
			getGrupo:function()
			{// @lock
				var session = currentSession();
				
				if (session.belongsTo("Prueba")) {
					return "Prueba";
				}else if (session.belongsTo("Usuarios")){
					return "Usuarios";
				}else if(session.belongsTo("Supervisor")){
					return "Supervisor";
				}else if(session.belongsTo("Internal")){
					return "Internal";
				}else if(session.belongsTo("Admin")){
					return "Admin";
				}else{
					return "Nada";
				}			
			},// @lock
			getParam:function(loc)
			{// @lock
				var vQuery=getURLQuery(loc);
				//vQuery es un objeto con todos los parametros q tenga la url
				return vQuery;
			},// @lock
			getUserActivado:function(param)
			{// @lock
				loginByPassword("manager","123");
				var resultado = ds.Usuarios.getActivado(param);
				logout();
				return resultado;
			},// @lock
			consultarUserID:function(param)
			{// @lock
				loginByPassword("manager","123");
				var resultado = ds.Usuarios.consultarID(param);
				logout();
				return resultado;
			},// @lock
			activarUser:function(id)
			{// @lock
				loginByPassword("manager","123");
				var resultado = ds.Usuarios.activarUsuario(id);
				logout();
				return resultado;
				
			},// @lock
			comprobarUserID:function(param)
			{// @lock
				loginByPassword("manager","123");
				var resultado = ds.Usuarios.comprobarID(param);
				logout();
				return resultado;
			},// @lock
			newRegistro:function(argumentos,modo)
			{// @lock
				switch(modo){
					case 1 : return ds.Usuarios.insertaUsuario(argumentos.acceso,argumentos.pass);break;
					case 2 : ds.Entidades.insertaEntidad(argumentos.nom,argumentos.ape1,argumentos.ape2,argumentos.pais,argumentos.entID,argumentos.userID);break;
					case 3 : ds.Empresas.insertaEmpresa(argumentos.nom);break;
				};		
			},// @lock
			getInformacion:function(argumentos,modo)
			{// @lock
				switch(modo){
					case 1: 
						var usuario = ds.Usuarios.find("ID ="+argumentos.key);
						return usuario.getEntidad();
				}
			}// @startlock
		}
	},
	
	Lineas :
	{
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				var myClass = ds.Lineas;
				//Le paso como parametro la clase entera;
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").restrincionEntorno(myClass);
			},// @startlock
			onValidate:function()
			{// @endlock
				var myClass = ds.Lineas;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				return require("dsModule").onvalidate(this, myClass);
			},// @startlock
			onInit:function()
			{// @endlock
				var myClass = ds.Lineas;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				return require("dsModule").oninit(this, myClass);
			}// @startlock
		},
		methods :
		{// @endlock
			devolverTamanio:function(docID)
			{// @lock
				var collLineas = this.query("Documento.ID =:1",docID);
				return collLineas.length;
			},// @lock
			insertarLinea:function(articuloDescrpcion,doc,almacen,caja)
			{// @lock
				
				var articulo = ds.Articulos.devolverArticulo(articuloDescrpcion);
				var newLinea = new ds.Lineas({
					
					Codigo: articulo.Codigo,
					Descripcion: articulo.Descripcion,
					PrecioUnitario: articulo.Precio,
					Cantidad: 1,
					Documento: doc,
					Almacen: almacen,
					Caja: caja
					
				}).save();
				
				return newLinea;
			},// @lock
			devolverTotal:function(docID)
			{// @lock
				var documento = ds.DocComercial.find("ID =:1",docID);
				
				var lineasCol = ds.Lineas.query("Documento.ID =:1",documento.ID);
				
				var total=0;
				
				for (var i = 0; i < lineasCol.length; i++){
						total += lineasCol[i].Importe;
				}
				
				return total;
				
				
			},// @lock
			insertarLineasNegativas:function(docCobrado,docNegativo,almacenID)
			{// @lock
				var documentoCobrado = ds.DocComercial.find("ID =:1",docCobrado);
				var documentoNegativo = ds.DocComercial.find("ID =:1",docNegativo);
				var almacen = ds.Almacenes.find("ID =:1",almacenID);
				var collecionLineas = ds.Lineas.query("Documento.ID =:1", documentoCobrado.ID);
				for (var i = 0; i < collecionLineas.length; i++){
					
					var newLineaNegativa = new ds.Lineas();
					newLineaNegativa.Codigo = collecionLineas[i].Codigo;
					newLineaNegativa.Descripcion = collecionLineas[i].Descripcion;
					newLineaNegativa.PrecioUnitario = collecionLineas[i].PrecioUnitario;
					newLineaNegativa.Cantidad = collecionLineas[i].Cantidad * -1;
					newLineaNegativa.Posicion = collecionLineas[i].Posicion;
					newLineaNegativa.Documento = documentoNegativo;
					newLineaNegativa.Almacen = almacen;
					
					newLineaNegativa.save();
					
				}
			},// @lock
			sumarPosiciones:function(documentoID,posicion)
			{// @lock
				var lineasCollec = ds.Lineas.query("Documento.ID =:1",documentoID);
				
				for (var i = posicion; i < lineasCollec.length; i++){
					
					var theLinea = lineasCollec[i];
					theLinea.Posicion ++;
					theLinea.save();

				}
			},// @lock
			restarPosiciones:function(documentoID,posicion)
			{// @lock
				var lineasCollec = ds.Lineas.query("Documento.ID =:1",documentoID);
				
				for (var i = posicion; i < lineasCollec.length; i++){
					
					var theLinea = lineasCollec[i];
					theLinea.Posicion --;
					theLinea.save();

				}
				
			},// @lock
			getLinea:function(articuloCodigo, docID)
			{// @lock
				var lin = ds.Lineas.find("Documento.ID=:1 AND Codigo =:2 order by ID desc",docID,articuloCodigo);
				return lin;

			},// @lock
			borrarLinea:function(vLinea)
			{// @lock
				var lin = ds.Lineas.query("ID =:1", vLinea);
				lin.remove();
			},// @lock
			sumarLineas:function(docID)
			{// @lock
			var suma = ds.Lineas.query("Documento.ID=:1",docID).sum("Importe");
				return suma;
			},// @lock
			getPosiciones:function(docID)
			{// @lock
				
				var lineasColl = ds.Lineas.query("Documento.ID =:1",docID);
				var aPos = lineasColl.orderBy("Posicion desc").Posicion;
				return aPos;
				
			}// @startlock
		},
		Importe :
		{
			onSet:function(value)
			{// @endlock
				return this.Cantidad * this.PrecioUnitario;

			},// @startlock
			onGet:function()
			{// @endlock
				return this.Cantidad * this.PrecioUnitario;
			}// @startlock
		}
	},
	Knowledge :
	{
		events :
		{
			onValidate:function()
			{// @endlock
				if (this.Owner == null){ //if the entity does not have a user
			        var user = currentUser(); // we save the user ID in the owner attribute
			        if (user != null)
					this.Owner = user.ID;
			    }
			    if (this.Owner == null){ // error if no user is identified
			    	var err = 'Hay un error al validar el usuario';
			        return err;
				};
			},// @startlock
			onInit:function()
			{// @endlock
				var user = currentUser(); // we get the user 
				if (user != null){ // if a user is logged in
			   		this.Owner = user.ID; // we save the user ID in the owner attribute
				}
			}// @startlock
		}
	},
	Empresas :
	{
		methods :
		{// @endlock
			devolverEntidad:function()
			{// @lock
				var entidadID = this.find("ID > 0").Entidad.ID;
				return entidadID;
			}// @startlock
		},
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				var myClass = ds.Empresas;
				//Le paso como parametro la clase entera;
				//La funcion restrincionEntorno esta en Modules/dsModule.js	
				return require("dsModule").restrincionEntorno(myClass);
			},// @startlock
			onValidate:function()
			{// @endlock
				var myClass = ds.Empresas;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				return require("dsModule").onvalidate(this, myClass);
			},// @startlock
			onInit:function()
			{// @endlock
				var myClass = ds.Empresas;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				return require("dsModule").oninit(this, myClass);
			}// @startlock
		}
	},
	Entidades :
	{
		methods :
		{// @endlock
			asignarPais:function(vEntidadID,vPais)
			{// @lock
				var pais = ds.PaisesISO.find("Number =:1",vPais);
				var entidad = this.find("ID =:1",vEntidadID);
				entidad.Pais = pais;
				entidad.save();
			}// @startlock
		},
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				var myClass = ds.Entidades;
				//Le paso como parametro la clase entera;
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").restrincionEntorno(myClass);
			},// @startlock
			onValidate:function()
			{// @endlock
				var myClass = ds.Entidades;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				return require("dsModule").onvalidate(this, myClass);
			},// @startlock
			onInit:function()
			{// @endlock
				var myClass = ds.Entidades;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				return require("dsModule").oninit(this, myClass);
			}// @startlock
		},
		NombreCompleto :
		{
			onGet:function()
			{// @endlock
				return this.Nombre+" "+this.Apellido1+" "+this.Apellido2;
			}// @startlock
		}
	},
	Usuarios :
	{
		entityMethods :
		{// @endlock
			getEntidadID:function()
			{// @lock
				return this.Entidad.ID;
			}// @startlock
		},
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				var myClass = ds.Usuarios;				
				//Le paso como parametro la clase entera;
				//La funcion restrincionEntorno esta en Modules/dsModule.js
				return require("dsModule").restrincionEntorno(myClass);
				
			},// @startlock
			onValidate:function()
			{// @endlock
				var myClass = ds.Usuarios;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				return require("dsModule").onvalidate(this, myClass);
			},// @startlock
			onInit:function()
			{// @endlock
				var myClass = ds.Usuarios;
				//Le paso como parametro la clase entera;
				//La funcion oninit() esta en Modules/dsModule.js
				return require("dsModule").oninit(this, myClass);
			}// @startlock
		},
		methods :
		{// @endlock
			recuperarPass:function(correo)
			{// @lock
				try {
					var Result = ds.Usuarios.find("NombreAcceso = :1", correo);
					return Result.Password;
				}
				catch(e){
					return false;
				}
			},// @lock
			primerLog:function(cod)
			{// @lock
				try {
					var Result = ds.Usuarios.find("UserID = :1", cod);
					return Result;
				} catch (e) {
					return "Error";
				}
			},// @lock
			getActivado:function(correo)
			{// @lock
				
				try {
					var Result = ds.Usuarios.find("NombreAcceso = :1", correo);
					return Result.Activado;
				}
				catch(e){
					return "Error";
				}
			},// @lock
			activarUsuario:function(parametro)
			{// @lock
				try {
					var Result = ds.Usuarios.find("UserID = :1", parametro);
					if(Result.Activado==true){
						return false;
					}else{
						Result.Activado=true;
						Result.save();
						return true;
					}
					
				} catch (e) {
					return "Error";
				}
			},// @lock
		
			comprobarID:function(parametro)
			{// @lock
				
				try{
					var Result = ds.Usuarios.find("UserID = :1", parametro);
					return Result.getKey();
				}
				catch(e){
					return false;
				}
			},// @lock
			consultarID:function(acc)
			{// @lock
				
				try{
					var Result = ds.Usuarios.find("NombreAcceso = :1", acc);
					return Result.getKey();
				}
				catch(e){
					return false;
				}
			}// @startlock
		}
	}
};// @endlock

