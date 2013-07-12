var
    defaultUser, // Name of the default user returned by the currentUser() method when no user was logged in
    excludedFiles; // Files that should be delivered even if no user were logged in.

defaultUser = "default guest";
excludedFiles = [
"confirmacioncuenta.html",
"falloactivacion.html",
"activado.html",
"index.js", 
"main.html",
"main.js", 
"bootstrap.js",
"fcscript.js",
"jmscript.js",
"dsscript.js",
"funcion.js",
"fcindex.html",
"fcindex.js",
"altaUsuario.js",
"altaUsuario,html",
"header.html",
"header.js",
"bannerlog.html",
"bannerlog.js",
"loginform.html",
"loginform.js",
"activacioncuenta.html",
"altausuario.html",
"altausuario.js",
"bannerright.html",
"bannerright.js",
"altaconfirmacion.html",
"altaconfirmacion.js",
"principal.html",
"principal.js",
"gauth.js",
"ui.js",
"menulateral.html",
"menulateral.js",
"recovery.js",
"recovery.html",
"recovery.js",
"buzz.js",
"fastclick.js",
"fullcalendar.min.js",
"jquery.toolbar.min.js",
"jquery.vticker.js",
"jquery.zrssfeed.js",
"jquery.printPage.js"
];





var serverIP = application.httpServer.ipAddress;
var urlPath = getURLPath(serverIP); 
/**
* This method will be invoke to handle incoming request
* @param request {HTTPRequest} the request made to the wakanda server
* @param response {HTTPResponse} the response wakanda server will send back to the caller
*/
function handleSecurityFilter(request, response) {
    "use strict";
    var
        fileContent,
        targettedFileName,
        tempArray,
        user,
        contentType;

	// add CORS headers
    response.headers["Access-Control-Allow-Origin"] = "*";
    response.headers["Access-Control-Allow-Headers"] = "Content-Type";
	if (request.method === "OPTIONS") {
		// Client is asking for the allowed methods
		// We provide the allowed methods and stop the execution
		response.headers["Access-control-allow-methods"] = "POST,GET,PUT,DELETE,OPTIONS";
		return;
	}

	user = currentUser();
	tempArray = request.urlPath.split("/");
	targettedFileName = tempArray[tempArray.length - 1]; // Getting the name of the targettedFile
	contentType = "application/octet-stream";
	
	if (user.name !== defaultUser
		|| excludedFiles.indexOf(targettedFileName.toLowerCase()) !== -1) {
		// If the user is connected or this file can be delivered to a not connected user.
		// Note that we only handle files within the WebFolder subfolder. 
		fileContent = new File(application.getFolder().path+"WebFolder" + request.urlPath);
		// We handle the fileType to set the response contentType.
		if (fileContent != null) {
			if (fileContent.extension == "html") {
				contentType = "text/html; charset=UTF-8";
			} else if (fileContent.extension == "js") {
				contentType = "application/javascript";
			} else if (fileContent.extension == "css") {
				contentType = "text/css";
			} else if (fileContent.extension == "gif") {
				contentType = "image/gif";
			} else if (fileContent.extension == "png") {
				contentType = "image/png";
			} else if (fileContent.extension == "jpg") {
				contentType = "image/jpg";
			}
			
			
		}
	} else {
		contentType = "text/html; charset=UTF-8";
		response.statusCode = 301;
		//response.headers["Location"] = "/login.html?origin="+request.url; // Redirect to the login.
		//user = 'demo';
		response.headers["Location"] = "/main.html" // Redirect to the login.
		
		
	}
	
	// Getting the file as a Blob since HttpResponse body accepts Blob, Image or String.
	if (fileContent != null && fileContent.name !="undefined") {
		fileContent = fileContent.toBuffer();
		if (fileContent != null) {
			fileContent = fileContent.toBlob();
		}
	}
	
	response.contentType = contentType;
	return fileContent || null;
}

