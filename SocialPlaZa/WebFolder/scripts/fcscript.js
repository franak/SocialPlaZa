var fcBrainObj;
fcBrainObj = function() {

    //fc el Código:
    var components, functions, data; //Hay que inicialicar todas las variables
    // Variables
    //fc En las funciones que se tienen que ejecutar dentro de componentes, el primer parámetro siepre es el id

    components = {}; //fc las hacemos del tipo "objeto"
    components.main = 'MainComp';
    components.header = 'headComp';
    components.footer = 'footComp';
    components.right = 'rightComp';
    components.left = 'leftComp';
    components.banner = 'bannerComponent';


    components.defaults = {
        landing: {
            compPath: "/components/fc/fcindex.waComponent"
        },
        bannerInf: {
            compPath: "/components/commons/bannerlog.waComponent"
        },
        bannerNegocios: {
            compPath: "/components/commons/bannerright.waComponent"
        },
        bannerSocial: {
            compPath: "/components/commons/rsscomponent.waComponent"
        },
        principal: {
            compPath: "/components/ds/TPV.waComponent"
        },
        principald: {
            compPath: "/components/commons/principal.waComponent"
        },
        header: {
            compPath: "/components/commons/header.waComponent"
        },
        login: {
            compPath: "/components/commons/loginform.waComponent"
        },
        AltaUsuario: {
            // compPath : "/components/commons/altausuario.waComponent"
            compPath: "/components/ds/altausuario.waComponent"
        },
        Recuperar: {
            compPath: "/components/js/recovery.waComponent"
        },
        Main: {
            compPath: "/components/fc/fcindex.waComponent"
        }
    };


    // Funciones
    this.welcome = function() {
        functions.openWelcome();
    }


    this.welcomeHead = function() {
        functions.openWelcomeHead();

    }


    this.ventanaSize = function() {
        functions.mostrarSizeVentana();

    }

    this.mostrarError = function(id, error) {
        functions.showError(id, error);

    }

    this.mostrarContenido = function() {
        functions.verContenido();

    }
    this.reconst = function(id) {
        functions.reconstruir(id);
    }

    this.verLabel = function(id, cont) {
        functions.mostrar(id, cont);

    }
    this.login = function(id) {
        functions.loguearse(id);

    }

    this.verErrores = function() {
        UI.getMensaje();

    }

    this.openLoginForm = function() {
        $$(components.main).loadComponent(components.defaults.login.compPath);
    }
    this.openRecuperar = function() {
        $$(components.main).loadComponent(components.defaults.Recuperar.compPath);
    }

    this.openAltaUsuario = function() {


   var user = WAF.directory.currentUser();

        if (user) {
            //ds Si le da al usuario demo al boton desconectar se elimina sus datos y logout();


            if (ds.Metodos.getGrupo() == "Prueba") {

                ds.Metodos.eliminarDemo();

                sessionStorage.clear();


            }

            WAF.directory.logout({
                onSuccess: function(event) {
                    location.href = '/main.html';
                    self.location.search = 'origin=AltaUsuario';

             

                },
                onError: function(error) {
                    UI.getMensaje("Logout error");
                }
            });
        }
       
        $$(components.right).removeComponent();
        $$(components.banner).removeComponent();
        $$('socialComponent').removeComponent();
        $$('headComp_botonera1').hide();
        $$(components.main).removeComponent();
        $$(components.main).loadComponent(components.defaults.AltaUsuario.compPath);
        $('#' + components.main).attr('z-index', '999');
        $('#' + id + '_conectText').text('INICIAR');

    }

    this.sumarLineas = function(id, docID) {

        functions.sumarLineas(id, docID);
    }

    this.crearDocComercial = function($comp, tipo, abonado) {
		
		var docCobrado = $comp.sources.docComercial.ID;
		var docReferencia = $comp.sources.docComercial.Numero+" "+$comp.sources.docComercial.Fecha
		
		
        // DS CREO EL DOCUMENTO
        var n = ds.DocComercial.getNumero();
        $comp.sources.docComercial.addNewElement();
        $comp.sources.docComercial.Numero = n;
        $comp.sources.docComercial.Tipo = tipo;
        $comp.sources.docComercial.Fecha = new Date();
        $comp.sources.docComercial.Cobrado = false;
        $comp.sources.docComercial.Cambio = 0;
        $comp.sources.docComercial.CajaTpv.set($comp.sources.cajasTPV);
        if(abonado == true){
           $comp.sources.docComercial.Referencia = docReferencia;
        }
        $comp.sources.docComercial.save({
            onSuccess: function(event) {
                $comp.sources.docComercial.serverRefresh();
                var almacen = $comp.sources.almacenes.ID;
                if(abonado == true){
                	abonar($comp,docCobrado,almacen);
                }
            },
            onError:function(){
            	UI.alert("No se ha podido crear el ticket Nuevo","ERROR");	
            }
        });
    }
    
    function abonar($comp,docCobrado,almacen){
    	
    	var docNegativo = $comp.sources.docComercial.ID;
    	ds.Lineas.insertarLineasNegativas(docCobrado,docNegativo,almacen);
    	$comp.sources.docComercial.serverRefresh();
  
    }

    this.desconectar = function(id) {

        var user = WAF.directory.currentUser();

        if (user) {
            //ds Si le da al usuario demo al boton desconectar se elimina sus datos y logout();


            if (ds.Metodos.getGrupo() == "Prueba") {

                ds.Metodos.eliminarDemo();

                sessionStorage.clear();


            }

            WAF.directory.logout({
                onSuccess: function(event) {
                    location.href = '/login.html';
                    self.location.search = 'origin=demo';

                },
                onError: function(error) {
                    UI.getMensaje("Logout error");
                }
            });
        }
        else {
            fcBrain.openLoginForm();
            $('#' + id + '_conectText').text('INICIAR');

        }


    }
    functions = {}; //las hacemos del tipo "objeto"
    functions.getUrlVars = function() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        return vars;
    }


    functions.CargarUI = function() {

      UI.loadingMsg();

        self.location.hash = 'tpv';

        var user = WAF.directory.currentUser().fullName;
        if (user == 'demo') {
            self.location.search = 'app=demo';
        }
        else {
            self.location.search = 'app=general';
        }

        $('#bannerPrincipal').hide();

        var $comp = components.main;

        WAF.loadComponent({
            id: components.main,
            path: components.defaults.principal.compPath,
            onSuccess: function() {
          
            }
        });
        
        $$('rightComp').loadComponent('/components/commons/bannerright.waComponent');
        $$('bannerComponent').removeComponent();
        $$('socialComponent').loadComponent(components.defaults.bannerSocial.compPath);

    };

    functions.openWelcome = function() {
        var parametros = ds.Metodos.getParam(window.location.href);
        
        if (parametros.origin =='demo#tpv') {
            //Si procede de una página que necesitaba hacer "login", se lo enseño
            $$(components.main).loadComponent(components.defaults.login.compPath);
        
       }else if(parametros.origin =='AltaUsuario#tpv'){
            
           $$(components.main).loadComponent(components.defaults.AltaUsuario.compPath);

       }
        
        else {
            
            var user = WAF.directory.currentUser();
            if (!user) {
                //WAF.directory.loginByPassword('demo', '123');
                $('#' + components.header + '_conectText').text('DESCONECTAR');
                $$(components.banner).loadComponent('/components/commons/bannerlog.waComponent');
            }
            else {
                functions.CargarUI();
                $('#' + components.header + '_conectText').text('DESCONECTAR');
            }
        }
    };

    functions.openWelcomeHead = function() {


        $$(components.header).loadComponent(components.defaults.header.compPath);

        var origin = functions.getUrlVars()["origin"];

        if (origin) {

            $('#headComp_botonera1').hide();
        }


    };

    functions.loguearse = function(id) {
        $('.alert').fadeOut(); //Oculto alertas
        var acceso = $("#" + id + "_usernameInput").val();

        var resultado = ds.Metodos.getUserActivado(acceso);

        if (resultado == true || resultado == "Error") {

            if (WAF.directory.loginByPassword(acceso, $("#" + id + "_passwordInput").val())) {
                //Para enseñar el nombre de usuario una vez logueado:	
                $("#" + id + "_richText4").show();
                $("#" + id + "_richText4").html(WAF.directory.currentUser().fullName);
                
                
                if ($$(id + '_checkbox2').getValue()) {
                    localStorage.user = acceso;
                }else{
                    localStorage.removeItem("user");
                }
                appds.cerraWelcome();

                //No le llevo a d�nde viene. Cada vez que se loguea aparece en el men� principal
                functions.CargarUI();
                

            }
            else {
                UI.alert("Datos Incorrectos")
            }
        }
        else {
            UI.alert("Active su cuenta");
        }
    }


    functions.showError = function(id, error) { //En las funciones que se tienen que ejecutar dentro de componentes, el primer parámetro siepre es el id
        var usuario = WAF.directory.currentUser();

        if (usuario == null) var error = 'No ha iniciado sesión';

        if (!id) {
            // fc El div del error siempre debería estar en la principal	
            $('#errorDiv').show();
            //$('#errorDiv').html('<b>'+error+'</b>');
            console.log(id + ' / ' + error);
            $('#errorDiv').fadeOut(3000).html('<b>' + error + '</b>');
        }
        else {
            //fc Si el div del error está dentro de un componente:
            $('#' + id + '_errorDiv').fadeIn();
            $('#' + id + '_errorDiv').html('<div>' + error + '</div>');
            console.log(id + ' / ' + error);
            $('#' + id + '_errorDiv').fadeOut(3000);
        }

    }
    functions.verContenido = function() {

        newTab("Usuario", "/components/ds/Usuario.waComponent");
    }

    functions.reconstruir = function(id) {


        var wid = $$(id).widgets.dataGrid6;
        wid.redraw();

        //en una página sería $$('dataGrid6')
        var elGrid = $$(id).widgets.dataGrid6; //Accedo a los datos dentro del dataGrid
        //http://doc.wakanda.org/home2.en.html#/Widgets-API/Grid.201-812419.en.html
        var dataStoreClass = elGrid.source.getClassTitle(); //Accedo al nombre del Class
        alert(dataStoreClass);

        /*
var datagridotro = getHtmlId('dataGrid6'); //El ID copmleto del elemento dentro del componente Sólo se pude usar dentro del js del componente
alert (datagridotro);
*/

        var sel = $$(id).sources.lineasCollection.getSelection(); // get the current selection
        //var selArray = sel.getSelectedRows ();  // selArray = [ 1 , 4 , 5 ]
        alert('sel = ' + sel);
        var selArray = sel.getSelectedRows();
        alert('selArray = ' + selArray);


    }

    functions.mostrar = function(id1, idCont) {
        var id = '#';
        if (idCont) {
            id = '#' + idCont + '_';
        }
        id += id1;
        $(id).fadeToggle("slow");
    }


    //Sustituido por SPL
    /*functions.mostrarSizeVentana = function(){
	
	var anchoVentana=$(window).width();
	var altoVentana=$(window).height();

	$('#contentInt').css('color','white');  
	$('#contentInt').html('Ancho: '+anchoVentana+' | ');  
	$('#contentInt').append('Alto: '+altoVentana);    // returns width of browser viewport
	
}	*/

    functions.sumarLineas = function(id, docID) {
        var docID = $$(id).sources.docComercial.ID;
        if (docID) {
            vSuma = ds.Lineas.sumarLineas(docID);
            sources.vSuma.sync(); //a las variables globales se las puede llamar sin indicar su ubicaci�n en el componente.
        }
    }

};

//set it as global
var fcBrain = new fcBrainObj();


/**** Objeto SPL ****/

SPL = {}; //defino el objeto global
SPL.mostrarSizeVentana = function() {

    var anchoVentana = $(window).width();
    var altoVentana = $(window).height();

    $('#contentInt').css('color', 'white');
    $('#contentInt').html('Ancho: ' + anchoVentana + ' | ');
    $('#contentInt').append('Alto: ' + altoVentana); // returns width of browser viewport
}

SPL.getUrlVars = function() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

SPL.getMensaje = function(msg) {
    //var origin = functions.getUrlVars()["origin"];
    var mensaje = '<span class="label label-warning">';
    mensaje += msg;
    mensaje += '</span>';

    $('#dialog1').css("top", 200);
    $('#errorDiv2').html(mensaje);
    WAF.widgets['dialog1'].displayDialog();

    mensaje = msg;
    return;

}

SPL.cargarMatrixArticulos = function() {


    //GRIDTEST
    var over = '<img id="loading" src="../images/loading.gif">'
    // $('body').html(over);

    var matrizArticulos = getHtmlObj('matrix_articulos');

    var ruta = '/rest/Articulos';
    $.getJSON(ruta, function(data) {
        console.log(data);

        var articulos = data.__ENTITIES;

        $(matrizArticulos).html('<div class="row-fluid">' + '  <ul class="thumbnails" style="list-decoration:none">');

        for (var idx in articulos) {
            articulo = articulos[idx];
            // var tabla = getHtmlObj('container4');
            var nombre = articulo.Descripcion.substring(0, 20) + '...';

            $(matrizArticulos).append('  <li class="product btn" >' + '    <a href="#" class="thumbnail">'

            + '<img data-src="holder.js/160x120" alt="160x120" style="width: 90px; height: 70px; " src="data:image/png;base64,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">'

            + '<span class="price-tag">' + articulo.Precio + ' �</span>'

            + '<span><small>' + nombre + '</small></span>'

            + '    </a>'

            + '  </li>'

            );
        }

        $(matrizArticulos).append('</ul>' + ' </div>');

    });


    //-> GRITEST



}