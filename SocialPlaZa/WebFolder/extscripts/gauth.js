﻿/*Botones login/logout:<a href="#"  id="login_item" onClick="login();">Conectar</a></li><a href="#"  id="logoutText" target='myIFrame' onclick="myIFrame.location='https://www.google.com/accounts/Logout'; startLogoutPolling();return false;"><i class="icon-off"></i> Desconectar</a>	<iframe name='myIFrame' id="myIFrame" style='display:none'></iframe>*/	/*        GOOGLE API    ===================================    */                   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/auth?';		        var VALIDURL    =   'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';				var SCOPE ='https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar';						var APIKEY	= 'AIzaSyCYXElVIsSfXEr89tZFk-lw11IOS88FZb4';		        var CLIENTID    =   '186839421332.apps.googleusercontent.com';		        var REDIRECT    =   'http://comunidad.socialerp.net/serp/index.html';		        var LOGOUT      =   'http://accounts.google.com/Logout';        var TYPE        =   'token';        var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;        var acToken;        var tokenType;        var expiresIn;        var user;        var loggedIn    =   false;	 	var tocken;	            function login() {						if(!sessionStorage.gusername){            var win         =   window.open(_url, "windowname1", 'width=800, height=600'); 			}            var pollTimer   =   window.setInterval(function() {                 try {                    console.log(win.document.URL);                    if (win.document.URL.indexOf(REDIRECT) != -1) {                        window.clearInterval(pollTimer);                        var url =   win.document.URL;                        acToken =   gup(url, 'access_token');                        tokenType = gup(url, 'token_type');                        expiresIn = gup(url, 'expires_in');                        win.close();						sessionStorage.token=acToken;                        validateToken(acToken);                    }                } catch(e) {                }            }, 500);        }        function validateToken(token) {						if (token==='undefined'){			token=sessionStorage.token;			}			            $.ajax({                url: VALIDURL + token,                data: null,                success: function(responseText){                     getUserInfo();                    loggedIn = true;                   $('#logoutText').show();					$('#menu_usuario').fadeIn('fast');					                },                  dataType: "jsonp"              });        }        function getUserInfo() {            $.ajax({                url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + acToken,                data: null,                success: function(resp) {                    user    =   resp;                    console.log(user);					UserID = user.id;					sessionStorage.userid=UserID;					sessionStorage.gusername=user.name;					sessionStorage.picture=user.picture;					sessionStorage.email=user.email;					sessionStorage.link=user.link;								$('#uName').html('<img src="" id="imgHolder" height="24px" width="24px"> '+user.name+'<b class="caret"></b>');					$('#uName').removeAttr('onclick');					$('#titulo').text(sessionStorage.username);					$('#error_div').append('<li class="active">'+sessionStorage.gusername+' <span class="divider">/</span></li>');					$('#login_item').text('Perfil').attr('href','#myModal_perfil').attr('data-toggle','modal');					$('#imgHolder').attr('src', user.picture);                    $('#uPlus').text('link: ' + user.link);					                },                dataType: "jsonp"            });        		}			function getUserActivities() {            $.ajax({							   url:'https://www.googleapis.com/plus/v1/people?'+UserID,			    data: null,                success: function(resp) {                  var   user2    =   resp;                    console.log(user2);                    $('#uNamep').text('Activity ID: ' + UserID);					                },                dataType: "jsonp"            });        }        //credits: http://www.netlobo.com/url_query_string_javascript.html        function gup(url, name) {            name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");            var regexS = "[\\#&]"+name+"=([^&#]*)";            var regex = new RegExp( regexS );            var results = regex.exec( url );            if( results == null )                return "";            else                return results[1];        }        function startLogoutPolling() {            $('#loginText').show();            $('#logoutText').hide();            loggedIn = false;			$('#menu_usuario').fadeIn('fast');            $('#uName').html('<img src="https://ssl.gstatic.com/images/icons/gplus-32.png" alt="" style="border:0;width:24px;height:24px;" id="imgHolder"> Iniciar Sessión<b class="caret"></b>');			 $('#uName').removeAttr('onclick');			 $('#login_item').text('Conectar');			 $('#login_item').removeAttr('href','data-toggle');			 $('#error_div').remove('.active');			 $('#nomusuario').remove();			$('#error_div').fadeOut('fast').fadeIn('slow');			 sessionStorage.gusername='';			 sessionStorage.picture='';			 sessionStorage.userid='';			 sessionStorage.token='';			 sessionStorage.email='';			 		}		