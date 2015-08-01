undef = "undefined";
func = "function";

$ = function (query) {
	if (typeof query == "object") return query;
	return document.querySelectorAll(query);
};

Object.prototype.find = function(query) {
	return this[0].querySelectorAll(query);
}

Object.prototype.loE = function(fn) {
	if (typeof this.length==="undefined") fn(this, 0);
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
	if (typeof property == "string" && typeof style === undef)
		return this[0].style[property];
	this.loE(function(ei, i) {
		if (typeof property == "string") {
			this[i]['style'][property] = style;
		} else if (typeof property == "object") {
			for (var key in property) {
				if (property.hasOwnProperty(key))
					this[i].style[key] = property[key];
			}
		}
	});
	return this;
};

Object.prototype.html = function(n) {
	if (typeof n === undef)
		return this[0].innerHTML;
	else {
		this.loE(function(el) {
			el.innerHTML = n;
		});
	}
	return this;
}

Object.prototype.text = function(n) {
	if (typeof n === undef)
		return this[0].innerText;
	else {
		this.loE(function(el) {
			el.innerText = n;
		});
	}
	return this;
}

Object.prototype.remove = function() {
	this.loE(function(el) {
		el.removeChild(el);
	});
	return true;
}

Object.prototype.on = function(e, fn) {
	this.loE(function(el) {
		el.addEventListener(e, fn);
	});
	return this;
}

Object.prototype.attr = function(n,v) {
	if (typeof v !== undef){
		this.loE(function(el) {
			el.setAttribute(n, v);
		});
		return this;
	} else 
		return this[0].getAttribute(n);
}

Object.prototype.removeAttr = function(n) {
	this.loE(function(el) {
		el.removeAttribute(n);
	});
	return this;
}

$.copySetting = function(defaultValue, settings) {
	var settingsCopy = defaultValue;
	for (var key in settings) {
		if (settings.hasOwnProperty(key)) {
			settingsCopy[key] = settings[key];
		}
	}
	return settingsCopy;
}

microjs = true;