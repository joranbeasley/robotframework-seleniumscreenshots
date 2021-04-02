(function (selector, callback) {
    var $el = null;
	
	if(selector.startsWith("//")){
		selector = `xpath:${selector}`
	}
	if(selector.startWith("xpath://")
		var headings = document.evaluate(selector.substring(6), document, null, XPathResult.ANY_TYPE, null);
		$el = headings.iterateNext();		
	}else{ 
	   $el = jQuery(selector);
	}
    if ($el.length > 0) {
        $el.remove();
        callback(true);
    } else {
        callback(false);
    }
})(
    arguments[0], /* selector */
    arguments[1]  /* callback */
);
