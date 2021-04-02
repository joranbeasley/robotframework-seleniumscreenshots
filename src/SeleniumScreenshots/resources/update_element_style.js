(function (selector, name, value, callback) {
    var $el = null;
	
	if(selector.startsWith("//")){
		selector = `xpath:${selector}`
	}
	if(selector.startsWith("xpath://")){
		var headings = document.evaluate(selector.substring(6), document, null, XPathResult.ANY_TYPE, null);
		$el = headings.iterateNext();		
	}else{ 
	   $el = jQuery(selector);
	}
    if ($el.length > 0) {
        $el.css(name, value);
        callback(true);
    } else {
        callback(false);
    }
})(
    arguments[0], /* selector */
    arguments[1], /* name */
    arguments[2], /* value */
    arguments[3]  /* callback */
);
