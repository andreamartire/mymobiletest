var utils = {
	isValidDate: function(d) {
		if ( Object.prototype.toString.call(d) !== "[object Date]" )
			return false;
		return !isNaN(d.getTime());
	}
};
