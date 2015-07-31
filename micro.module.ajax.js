$.ajax = function(method, url, data, completed, error, dataType) {
	dataType = typeof dataType === undef ? "text" : dataType;
		
	var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4) {
			if (xmlhttp.status==200) {
				if (typeof completed === func)
					completed(dataType == "json" ? JSON.parse(xmlhttp.responseText) : xmlhttp.responseText);
			} else {
				if (typeof error === func)
					error(xmlhttp.status, xmlhttp.statusText);
			}
		}
	};
	xmlhttp.open(method, url, true);
	return (typeof data != undef ? xmlhttp.send(data) : xmlhttp.send());
} 

$.post = function(url, data, completed, dataType) {
	return $.ajax("POST", url, data, completed, undefined, dataType);
}

$.get = function(url, completed, dataType) {
	return $.ajax("POST", url, undefined, completed, undefined, dataType);
}

$.json = function(url, completed) {
	return $.ajax("GET", url, undefined, completed, undefined, "json");
}