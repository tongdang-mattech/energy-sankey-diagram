;(function() {

    window.getQueryParamsFromURL = function() {

        var params = {};

        var paramString = window.location.search.substring(1);
		if (paramString === ""){
			paramString = window.location.hash.substring(2)}
			
        // if special chars (&?/=) exist in the search string, then the url is already encoded -> decode it once
        // Note: testing for encoded chars (%3D, %3F) is not done because some parts of the url may contain these chars (e.g. value of story parameter)
        var isParamStringEncoded = !(/[\&\=\?\/]/.test(paramString));
        if (isParamStringEncoded) {
            paramString = decodeURIComponent(paramString);
        }
        paramString = paramString.replace(/\&amp;/g, '&');
        var paramArray = paramString.split("&");

        var paramKey;
        var paramValue;
        var paramPair;


        if (paramArray && paramArray.length) {
            for (var i = 0; i < paramArray.length; i++) {
                paramPair = paramArray[i].split("=");
                paramKey = paramPair[0];

                paramValue = decodeURIComponent(paramPair.slice(1).join('='));
                params[paramKey] = paramValue;
            }
        }

        return params;
    };
})();