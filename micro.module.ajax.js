$.ajax = function(url, settings) {
	var DefaultSettings = {
		method: "GET",
		url: "/",
		header: undefined,
		data: undefined,
		dataType: "text",
		async: true,
		timeout: 30,
		completed: undefined,
		success: undefined,
		fail: undefined
	};
	
	var settingsAjax = $.copySetting(DefaultSettings, (typeof url === "object" ? url : settings));
		
	var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4) {
			clearTimeout(AjaxTimeout);
			if (typeof settingsAjax.completed === func)
				settingsAjax.completed(xmlhttp, xmlhttp.statusText);
			if (xmlhttp.status==200) {
				if (typeof settingsAjax.success === func)
					settingsAjax.success(dataType == "json" ? JSON.parse(xmlhttp.responseText) : xmlhttp.responseText);
			} else {
				if (typeof settingsAjax.fail === func)
					settingsAjax.fail(xmlhttp.status, xmlhttp.statusText);
			}
		}
	};
	xmlhttp.open(settingsAjax.method, (typeof url === "object" ? settingsAjax.url : url), settingsAjax.sync);
	if (settingsAjax.header.length>0) {
		for (var key in settingsAjax.header) {
			if (settingsAjax.header.hasOwnProperty(key))
				xmlhttp.setRequestHeader(key, settingsAjax.header[key]);
		}
	}
	if (typeof settingsAjax.data != undef) {
		var data = "";
		if (typeof settingsAjax.data === "object") {
			for (var key in settingsAjax.data) {
				if (settingsAjax.header.hasOwnProperty(key)) {
					data += encodeURI(key) + "=" + encodeURI(settingsAjax.data[key]) + "&";
				}
			}
			data = data.substr(0, data.length-1);
		} else if (typeof settingsAjax.data === "string") {
			data = settingsAjax.data;
		}
		xmlhttp.send(data);
		return xmlhttp;
	}
	xmlhttp.send();
	var AjaxTimeout = setTimeout(function() {xmlhttp.abort();}, settingsAjax.timeout);
	return xmlhttp;
} 

$.post = function(url, data, success, dataType) {
	return $.ajax({url: url, method: "POST", data: data, success: success, dataType: dataType});
}

$.get = function(url, success, dataType) {
	return $.ajax({url: url, success: success, dataType: dataType });
}

$.json = function(url, success) {
	return $.ajax({ url: url, success: success, dataType: "json" });
}

