Object.prototype.submit = function(fn){
	if (typeof fn === func) {
		this.loE(function(el){
			el.onsubmit = fn;
		});
	} else
		el.submit();
	return this;
}

Object.prototype.val = function(n) {
	if (typeof n === undef)
		return this[0].value;
	else {
		this.loE(function(el) {
			el.value = n;
		});
	}
	return this;
}

Object.prototype.click = function(fn) {
	this.on("click", fn);
	return this;
}

Object.prototype.serialize = function() {
	return new FormData(this[0]);
}