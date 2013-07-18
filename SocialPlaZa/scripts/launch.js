/*fc escuchador para redirigir al usuario si no está identificado */
addHttpRequestHandler("^(?!/walib/)(.*\.js|.*\.html)$", "scripts/securityHandler.js",  "handleSecurityFilter");

//addHttpRequestHandler("^(?!/walib/)(.*\.js|.*\.html|.*\.png|.*\.gif|.*\.jpg|.*\.css)$", "scripts/securityHandler.js",  "handleSecurityFilter");

addHttpRequestHandler('/import','scripts/Import.js','doImportEmpsAndComps');
addHttpRequestHandler('/sendMail','scripts/HANDLER.js','sendMail'); 


