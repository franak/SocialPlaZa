
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var rotate = {};	// @slider
	var draggable = {};	// @checkbox
	var webComponent = {};	// @combobox
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	rotate.slidestop = function rotate_slidestop (event)// @startlock
	{// @endlock
/*explorer*/
		$$('component1').$domNode.css('-webkit-transform', 'rotate(' + $$('rotate').getValue() + 'deg)');
		$$('component1').$domNode.css('-moz-transform', 'rotate(' + $$('rotate').getValue() + 'deg)');
		$$('component1').$domNode.css('-ms-transform', 'rotate(' + $$('rotate').getValue() + 'deg)');
		$$('component1').$domNode.css('-o-transform', 'rotate(' + $$('rotate').getValue() + 'deg)');
		var degrees = $$('rotate').getValue()+ "°";
		$$('rotateValue').setValue(degrees);
/* /explorer*/
		$$('samplerComponent_code').setValue("$$('component1').$domNode.css('-webkit-transform', 'rotate(" + $$('rotate').getValue() + "deg)')");
	};// @lock

	rotate.slide = function rotate_slide (event)// @startlock
	{// @endlock
/*explorer*/
		$$('component1').$domNode.css('-webkit-transform', 'rotate(' + $$('rotate').getValue() + 'deg)');
		$$('component1').$domNode.css('-moz-transform', 'rotate(' + $$('rotate').getValue() + 'deg)');
		$$('component1').$domNode.css('-ms-transform', 'rotate(' + $$('rotate').getValue() + 'deg)');
		$$('component1').$domNode.css('-o-transform', 'rotate(' + $$('rotate').getValue() + 'deg)');
		var degrees = $$('rotate').getValue()+ "°";
		$$('rotateValue').setValue(degrees);
/* /explorer*/
		$$('samplerComponent_code').setValue("$$('component1').$domNode.css('-webkit-transform', 'rotate(" + $$('rotate').getValue() + "deg)')");
	};// @lock

	draggable.change = function draggable_change (event)// @startlock
	{// @endlock
		/*explorer*/
		$$('component1').draggable($$('draggable').getValue());
		/* /explorer*/
		$$('samplerComponent_code').setValue("$$('component1').draggable('" + $$('draggable').getValue() + "')");
	};// @lock

	webComponent.change = function webComponent_change (event)// @startlock
	{// @endlock
		/*explorer*/
		$$('component1').loadComponent($$('webComponent').getValue());
		/* /explorer*/
		$$('samplerComponent_code').setValue("$$('component1').loadComponent('" + $$('webComponent').getValue() + "')");
		

	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$('component1').loadComponent('/views/personView.waComponent');
		pageInit(sources.userPerson, 'v1/component/componentExplorer1');
		$$('rotateValue').setValue("0°");
		$$('webComponent').setBeautyTipMessage("Load a new view in the Component widget.","bottom");
		$$('rotate').setBeautyTipMessage("Rotate the Component widget from 0° to 360°");
		$$('draggable').setBeautyTipMessage("Make the Component widget draggable.");		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("rotate", "slidestop", rotate.slidestop, "WAF");
	WAF.addListener("rotate", "slide", rotate.slide, "WAF");
	WAF.addListener("draggable", "change", draggable.change, "WAF");
	WAF.addListener("webComponent", "change", webComponent.change, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
