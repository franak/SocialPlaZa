
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var richText2 = {};	// @richText
// @endregion// @endlock

// eventHandlers// @lock

$('#richText2').hide();
$('#richText4').hide();

	if (WAF.directory.currentUser()) {
		
		$('#richText2').show();
		$('#richText4').show();
		$('#richText4').html(WAF.directory.currentUser().fullName);
		
	} else {
		fcBrain.welcome();
	}
	
	richText2.click = function richText2_click (event)// @startlock
	{// @endlock
		 WAF.directory.logout({
	        onSuccess: function(event) { 
				$('#richText2').hide();
				$('#richText4').hide();
				fcBrain.welcome();
	        },
	        onError: function(error) {
	            alert ("Logout error"); 
	        }
	    }); 
			
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("richText2", "click", richText2.click, "WAF");
// @endregion
};// @endlock
