exports.insertaUsuarioNuevo = function insertaUsuarioNuevo (vNombreAcceso, vPass, vNom){
	
		if(loginByPassword("manager", "123")){		
	
	  	  	var entorno = new ds.Entornos();
	  	  	entorno.FechaAlta = new Date();
			entorno.save();
			var tipoAcceso = 2;
			var var1 = generateUUID();
			var myFoto = loadImage ("/Users/dsantiago/Documents/SocialPlaZa/SocialPlaZa/onebit_18.png");
			//++++++++++++++++++++++++++++++++++
			//NUEVO USUARIO
			//++++++++++++++++++++++++++++++++++
			
			new_usuario = new ds.Usuarios({
				NombreAcceso: vNombreAcceso,
				Password: vPass,
				Activado: false,
				accessType: tipoAcceso,
				Foto: myFoto,
				UserID: var1,
				Entorno: entorno
			});
			new_usuario.save();
			var resultado = var1;
			//++++++++++++++++++++++++++++++++++
			//NUEVA ENTIDAD USUARIO
			//++++++++++++++++++++++++++++++++++
			new_entidad = new ds.Entidades({
				Nombre: vNom,
				Entorno: entorno
			});
			new_entidad.save();
		
			new_usuario.Entidad = new_entidad;
			new_usuario.save();
			
			//++++++++++++++++++++++++++++++++++
			//NUEVA ENTIDAD EMPRESA
			//++++++++++++++++++++++++++++++++++

			new_entidad2 = new ds.Entidades({
				Nombre: "Empresa_"+new_usuario.ID,
				Entorno: entorno
			});
			new_entidad2.save();	
			//++++++++++++++++++++++++++++++++++
			//NUEVA  EMPRESA
			//++++++++++++++++++++++++++++++++++
			new_empresa = new ds.Empresas();
			new_empresa.Entidad = new_entidad2
			new_empresa.Tipo = "Peluqueria";
			new_empresa.save();
			
			//++++++++++++++++++++++++++++++++++
			//NUEVA CAJA PARA DEMO
			//++++++++++++++++++++++++++++++++++
			var caja = new ds.CajasTPV();
			caja.Descripcion = 'Caja 1';
			caja.Codigo = 'C1';
			caja.Empresa = new_empresa;
			caja.save();
			//++++++++++++++++++++++++++++++++++
			//NUEVO ALMACƒN PARA DEMO
			//++++++++++++++++++++++++++++++++++
			var almacen = new ds.Almacenes();
			almacen.Descripcion = 'Almacen 1';
			almacen.Codigo = 'A1';
			almacen.Empresa = new_empresa;
			almacen.save();
			
			var medio1 = new ds.MedioPago();
			medio1.Codigo = "EF";
			medio1.Descripcion = "Efectivo";
			medio1.Empresa = new_empresa;
			medio1.save();
			
			var medio2 = new ds.MedioPago();
			medio2.Codigo = "TJ";
			medio2.Descripcion = "Tarjeta";
			medio2.Empresa = new_empresa;
			medio2.save();
			
			new_usuario.TPVCaja = caja;
			new_usuario.TPVAlmacen = almacen;
			new_usuario.save();
			
			
			
			require("importacionModule").pegarArticulos(new_empresa);
			logout();
			return resultado;	
		}
};


exports.eliminarDemo = function eliminarDemo () {

		// ds.Familias.remove(); ELIMINA TODA LA CLASE, PERO COMO ESTA RESTRINGIDA:
		
		//SE ELIMINARA SOLO AQUELLOS REGISTROS QUE PERTENEZCA AL USUARIO
		// Y ADEMAS TE AHORRAS CONSULTAS INNECESARIAS
		
		
		ds.Familias.remove();
		ds.Articulos.remove();
		ds.CajasMovimientos.remove();
		ds.CajasTPV.remove();
		ds.Almacenes.remove();
		ds.Lineas.remove();
		ds.DocComercial.remove();
		ds.MedioPago.remove();
		ds.Empresas.remove();
		ds.Entidades.remove();
		
		
		// EN ESTE PUNTO HABRA QUE COGER EL ENTORNO ID DEL USUARIO DEMO PARA QUE EL MANAGER LO ELIMINE
		
		var entornoID = ds.Entornos.find("ID > 0").ID;
		
		//LOGOUT DEL USUARIO DEMO
		logout();
		
		loginByPassword("manager","123")
		
		//ELIMINACION DEL USUARIO DEMO A TRAVES DEL USUARIO MANAGER
		var entorno = ds.Entornos.query("ID =:1",entornoID);
		var usuario = ds.Usuarios.query("Entorno.ID =:1",entornoID);
		entorno.remove();
		usuario.remove();
		
		logout();
		
	
}





