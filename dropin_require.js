var dropinRequire	= function(moduleId){
	var req	= new XMLHttpRequest();
	req.open('GET', moduleId, false);
	req.send(null);
// TODO here there is a bug
// - the result MUST be cached
// - this is not perf, this is spec
	if(req.status != 200)	throw new Error()
	var txt	= dropinRequire.modPrefix + req.responseText + dropinRequire.modSuffix;
	return eval(txt);
}
//dropinRequire.modPrefix	= document.getElementById('prefix').textContent;
//dropinRequire.modSuffix	= document.getElementById('suffix').textContent;
dropinRequire.modPrefix	= "(function(){"+
			"	var _module	= { exports: {} };"+
			"	var _require	= function(moduleId){"+
			"		return dropinRequire(moduleId)"+
			"	};"+
			"	(function(module, exports, require){";
			// Here goes the javascript with commonjs modules
dropinRequire.modSuffix	= "	})(_module, _module.exports, _require);"+
			"	return _module.exports;"+
			"})();";

// to handle the replacement of "require" function
// - TODO do i need a global
dropinRequire.prevRequire	= require;
/**
 * dropinRequire.noConflict
 * - attemps to make a jQuery-like noConflict
 * - check and make it work
*/
dropinRequire.noConflict	= function(){	// no removeAll ?
	require	= dropinRequire.prevRequire;
	return dropinRequire;
}
var require	= dropinRequire;