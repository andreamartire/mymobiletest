var utils = {
	isValidDate: function(d) {
		if ( Object.prototype.toString.call(d) !== "[object Date]" )
			return false;
		return !isNaN(d.getTime());
	},
	//Safe stringify
	stringify: function (obj, currentDepth, maxDepth) {
	  if (currentDepth == maxDepth) return '';
	  var str = '{';
	  for (var key in obj) {
		  if (typeof obj[key] != "function") {
			    str += key + ': ' + (typeof obj == 'object' ?
			        utils.stringify(obj[key], currentDepth + 1, maxDepth) :
			        obj[key]);
		  }
	  }
	  return str + '}';
	}
};
