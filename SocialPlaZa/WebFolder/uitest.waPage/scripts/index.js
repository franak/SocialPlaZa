
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
//GRIDTEST
var docActual = localStorage.docActual;
var over = '<img id="loading" src="../images/loading.gif">'
   	 $('body').html(over);

var ruta = '/rest/Articulos';
$.getJSON( ruta, function(data) {
	console.log(data);

   var articulos = data.__ENTITIES;
   	 
   	 $('body').html( '<div class="row-fluid">'
          +'  <ul class="thumbnails" style="list-decoration:none">'
          );
 
    for (var idx in articulos)
    {
        articulo = articulos[idx];
       // var tabla = getHtmlObj('container4');
       var nombre = articulo.Descripcion.substring(0, 20) + '...';

        $('body').append(
            '  <li class="product" >'
		+'    <a href="#" class="thumbnail">'

		+'<img data-src="holder.js/160x120" alt="160x120" style="width: 160px; height: 120px; " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAC0CAYAAABytVLLAAAMLklEQVR4Ae3b+1OTVx7H8U8TQhENEmEwC4qyeIMiq1XrljrtbP/uTt3b6DqtO9iyVIMUEWUwxhCNXMQk7cnlyUlYPejqGme+7/wgJznP5ZzXOc8nzyV+ks/nfxMvBBBAwAnEUEAAAQQiAQIhkuAvAghwhsAcQAABL8AZgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBcgEMxPAQAQ8AIEgreghIB5AQLB/BQAAAEvQCB4C0oImBfoMi/wUQGUtHZnTnfWnioejyuW2KfDR8c1Ptzf1sri6oJu31vV5ouKFPtUqSN/1OR4Wn4wK8ouzinzYF3l2poJpU+e1enhZNt23vhNpaDZf83puQ7ozBfnNOh35Daxo9WFjFYeFfSyukHXnsPHz+hk277ec3veuOEs+LYCn+Tz+d/ediWW/38IlHT/5j+UWa8fwq176Bma1JXp4dpHhXs39ePd9dbqWjmeOqVvLoyqesq3NvdPza1t/9cyqVOXdWH0bUPBHcwLN/XT8lO3vR5NfX1F6e5o0ztauPZ3LW9G7/3f3qPnNHN6sPbB+22P3wel9y/AJcP7N/2ftljKL7WEQY+GhlKKN7a0nb2jexvubKCU03wzDHp09MQxRYd3eX1J2R23wvaqO8OIwiCpY2NpJRrbWc9kVHzT1pXymr32N129+n0jDOortk6YapubYZA4qJGRwea+NlcWlSu9x/a8abtZ7p0E2k7+3mlLrPxOAjvbW831xy7OaLw/po0Hs7p+O+c+L+v5xo52th4r+jJOT3+h00Puq7o/oR/mH7nTdTeUpYo289n6qbtb6+i58zo52K2Byob+vVyNgmfKFndUfDCvh25DsUpZ/WOfaXywR5vZBf2y/Kz6oRIDJzU9vKP1zZeNS45m09oKFbe/+iuuU5cuabRXGt1/U9cz1TOYl9XmaDO3V3tKSiaZhm2wHXzDSHQQv3XXZXf0xBMJxeIHNdBX/x5OdLV+H7vD+Ul0qdCrA+5sYfHOU3cF361jZ89rKFk/j8/++ryx2V6l+uuf9Q24exC1QChra6uikYFPNf/wYW259Z8z+sM3Y/rlp2XVt+4O7jN9Unevzk5Nuu3HVHq6osxK9ZKh/RVrtq+sQq6gUZcIT/JRsCXU7Zr/vLBXe9xpBIHQDtvBdwRCB/Fbd50cPae/jLZ+sqHFX580PojrwD53cEdv3XnC3fn55sIPV5bUOzKlmYm0C5SWEGl8gXcdSLmr/xVFFxI9QxOaSj+p32coZ3Xt+2xzW6kTF923fHUb3RpM1+9blLqfvjIQug6d1FhyRUvu5COb+VHfZZqbUXLstA652ZV7g/b4tSh1WqBl9nS6Kew/EigVV3Xj6nV3Wt+4wZg8ouHkrqGKJ5VuvWZ/OKfFYnQK77aU6NOB+gmCuwyI1W42Vre/8bR+0ZGeOq/B6CZFY8fxg2P60/HorkTjQ/enUmnZrv/YPWDIKf+amxKbucfu7KLltUd7Wpak2EGBXbOsgy1h1zWB7MIP+uuNeRUbWZBIndDXl0+67+vWV6+mvrqsqYlz+urzo82Kwnp0uu4+elnQs8YRWdl6rheNpfpSBxql/Zr8LN1ct1oYmxxveXTZVvXKN7nFjKILifTkZX377deaHKkHSrm4rEztLmdj1T3b88pd8OEHFiAQPjB4aHf5hRstd/R7dGx6xj1KPL4rDKpb6FXjloG6+qqXA/VX6UV02NffuxOD2qvyYqt5c7Dc/Lbf1mJmrb5A49+l2/f1mnOBtuXqb0pafxZdhKQ05n53EIt1a3j0cMuy7VsLt6dlNYodEyAQOkbfvuNK8V7jSUD988ETJ5SKPdfa2ppWV9dU2K6o//BAYyV3Q/F+oVbOLS037w1Uv/39MttaWqw+oShpeSk68Ht0qK8eH/k7t/QwOp4bWy2vZzS3Gj3HaHz42j9dSu6LHmg+02quul5FudXHzTWq2fOm7WmuRKGjAtxU7Ci/33lh9ZF/40q5u3OqHs7Ra2jqiqbTxzTSs1I7kHffxJMGNeoeMXbpiIbiK8q6S47iyqy+W4m24P66exFplwfV8Lm10rj4jw/p4sVDunXjdu1xZXZ+VtnBGVWfaO71OpQecncTq08rylqevablthWSGnaPM7u69m5P22q86agAZwgd5fc7r7jfBIReidpI9Wjizxc1VP+S94snUpqamdb+2if7Nf3ltA7uumHoHkPo8qXj7uai+3Xhz3eblxDpiVPqd0ExMeJ+RFB7beo/8w8a5d1/2qdLt3ta8fmpoeYPqJpLu/ZMfnmh8RPnvdrTXIvCRyDAT5c/gkF4+yZUtFFw/3eg+kivnFBf//7mUwS/rZKKhWe1A7/i7jL09/e+Yhm/9DuVKtsqVu8nuBAqx9y+9u9OrOrWP2B73qkztlcmEGyPP71HoE2g/RywrYo3CCBgTYBAsDbi9BeBgACBEMChCgFrAgSCtRGnvwgEBAiEAA5VCFgTIBCsjTj9RSAgQCAEcKhCwJoAgWBtxOkvAgEBAiGAQxUC1gQIBGsjTn8RCAgQCAEcqhCwJkAgWBtx+otAQIBACOBQhYA1AQLB2ojTXwQCAgRCAIcqBKwJEAjWRpz+IhAQIBACOFQhYE2AQLA24vQXgYAAgRDAoQoBawIEgrURp78IBAQIhAAOVQhYEyAQrI04/UUgIEAgBHCoQsCaAIFgbcTpLwIBAQIhgEMVAtYECARrI05/EQgIEAgBHKoQsCZAIFgbcfqLQECAQAjgUIWANQECwdqI018EAgIEQgCHKgSsCRAI1kac/iIQECAQAjhUIWBNgECwNuL0F4GAAIEQwKEKAWsCBIK1Eae/CAQECIQADlUIWBMgEKyNOP1FICBAIARwqELAmgCBYG3E6S8CAQECIYBDFQLWBAgEayNOfxEICBAIARyqELAmQCBYG3H6i0BAgEAI4FCFgDUBAsHaiNNfBAICBEIAhyoErAkQCNZGnP4iEBAgEAI4VCFgTYBAsDbi9BeBgACBEMChCgFrAgSCtRGnvwgEBAiEAA5VCFgTIBCsjTj9RSAgQCAEcKhCwJoAgWBtxOkvAgEBAiGAQxUC1gQIBGsjTn8RCAgQCAEcqhCwJkAgWBtx+otAQIBACOBQhYA1AQLB2ojTXwQCAgRCAIcqBKwJEAjWRpz+IhAQIBACOFQhYE2AQLA24vQXgYAAgRDAoQoBawIEgrURp78IBAQIhAAOVQhYEyAQrI04/UUgIEAgBHCoQsCaAIFgbcTpLwIBAQIhgEMVAtYECARrI05/EQgIEAgBHKoQsCZAIFgbcfqLQECAQAjgUIWANQECwdqI018EAgIEQgCHKgSsCRAI1kac/iIQECAQAjhUIWBNgECwNuL0F4GAAIEQwKEKAWsCvwPoTEtK0mR87QAAAABJRU5ErkJggg==">'

			+'<span class="price-tag">'+articulo.Precio+' €</span>'

			+'<span><small>'+nombre+'</small></span>'

            +'    </a>'

            +'  </li>'
           
            ); 
    } 
    
  $('body').append( '</ul>'
         +' </div>'
         );

 });
 
 
 //-> GRITEST
	};// @lock



// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
