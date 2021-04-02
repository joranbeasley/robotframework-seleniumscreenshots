(function (selectors, crop_margin, callback) {
    var center = null, $el, max, i;
    for (i = 0; i < selectors.length; i++) {
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
        if ($el.length > 0 && center === null) {
            center = $el.offset().left + $el.outerWidth() / 2;
        } else if ($el.length > 0) {
            max = jQuery('html').width() - $el.outerWidth() - crop_margin;
            $el.css({
                'left': Math.max(crop_margin, Math.min(
                    center - ($el.outerWidth() / 2), max
                )).toString() + 'px'
            });
        }
    }
    callback(true);
})(
    arguments[0], /* selectors */
    arguments[1], /* crop_margin */
    arguments[2]  /* callback */
);
