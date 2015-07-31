var $ = function (query) {
	return document.querySelectorAll(query);
};

Object.prototype.loE = function(fn) {
	for (var i=0;i<this.length;i++)
		fn(this[i], i);
}

Object.prototype.hide = function() {
	this.loE(function(el) {
		el.style.display = 'none';
	});
	return this;
};

Object.prototype.show = function() {
	this.loE(function(el) {
		el.style.display = 'block';
	});
	return this;
};

Object.prototype.css = function(property, style) {
	this.loE(function(ei, i) {
		if (typeof property == "string") {
			eval('this[' + i + '].style.' + property + ' = \'' + style + '\'');
		} else if (typeof property == "object") {
			for (var key in property) {
				if (property.hasOwnProperty(key))
					eval('this[' + i + '].style.' + key + ' = \'' + property[key] + '\'');
			}
		}
	});
	return this;
};

Object.prototype.html = function(n) {
	if (typeof n === "undefined")
		return this[0].innerHTML;
	else {
		this.loE(function(el) {
			el.innerHTML = n;
		});
	}
	return this;
}

Object.prototype.text = function(n) {
	if (typeof n === "undefined")
		return this[0].innerText;
	else {
		this.loE(function(el) {
			el.innerText = n;
		});
	}
	return this;
}

Object.prototype.on = function(e, fn) {
	this.loE(function(el) {
		el.addEventListener(e, fn);
	});
	return this;
}

Object.prototype.attr = function(n,v) {
	if (typeof v !== "undefined"){
		this.loE(function(el) {
			el.setAttribute(n, v);
		});
		return this;
	} else 
		return this[0].getAttribute(n);
}

Object.prototype.serialize = function() {
	return new FormData(this[0]);
}
