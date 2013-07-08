
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var searchPersonEvent = {};	// @dataSource
	var dataGrid1 = {};	// @dataGrid
	var search = {};	// @textField
	var splitToggle = {};	// @image
	var documentEvent = {};	// @document
// @endregion// @endlock
var hidden = false;
var splitPosition = 200;
var prevSplitPosition = 0;

/*explorer*/
var changeSplit = function(position){
	$$('container1').setSplitPosition(position);
	prevSplitPosition = splitPosition;
	splitPosition = position;
}
/* /explorer*/
// eventHandlers// @lock

	searchPersonEvent.onCurrentElementChange = function searchPersonEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		if(sources.userCompany.getCurrentElement() == null){
			sources.userCompany.query('ID = :1', sources.searchPerson.employerID);
		}
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		sources.userCompany.query('ID = :1', sources.searchPerson.employerID);
	};// @lock

	search.keyup = function search_keyup (event)// @startlock
	{// @endlock
		sources.searchPerson.query('firstName = :1 || lastName = :2', $$('search').getValue() + '*', $$('search').getValue() + '*');
	};// @lock

	splitToggle.click = function splitToggle_click (event)// @startlock
	{// @endlock
		/*explorer*/
		splitPosition = $$('container1').getSplitPosition();
		if(splitPosition != 0){
			changeSplit(0);
			$$('splitToggle').setValue('/images/show.png');
		} else {
			changeSplit(prevSplitPosition);
			$$('splitToggle').setValue('/images/hide.png');
		}
/* /explorer*/
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		changeSplit(splitPosition);
		pageInit(sources.searchPerson, 'v1/container/container1');
		$('#textField4').attr("readonly","readonly"); //render the Text Input widget read only
		$('#textField5').attr("readonly","readonly"); //render the Text Input widget read only
		$('#textField6').attr("readonly","readonly"); //render the Text Input widget read only
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("searchPerson", "onCurrentElementChange", searchPersonEvent.onCurrentElementChange, "WAF");
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener("search", "keyup", search.keyup, "WAF");
	WAF.addListener("splitToggle", "click", splitToggle.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
