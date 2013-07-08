
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'rsscomponent';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock
	
	rssDIV = getHtmlObj('rss');
	rssDIV.rssfeed('http://socialerp.wordpress.com/feed/',{
		snippet: true,
		limit	: 10,
		media	:true,
		header	: false,
		dateformat : 'dd/MM/yyyy'
}, function(e) {
		$(e).find('div.rssBody').vTicker({ 
		speed: 500,
		pause: 10000,
		showItems: 2,
		animation: 'fade',
		mousePause: true,
		height: 0,
		direction: 'up'
		});
	});


	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
