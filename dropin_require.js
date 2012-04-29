var dropinRequire = function( moduleId, root ) {
	if ( !root ) {
		root = ''
	}
	// add the .js to module names
	if ( !moduleId.match(/.js$/) ) {
		moduleId += '.js';
	}

	if( moduleId in dropinRequire.cache ) {
		return dropinRequire.cache[moduleId];
	}
	var req	= new XMLHttpRequest();
	var modulePath = moduleId;
	if ( modulePath.match(/^\.+\//) ) {
		modulePath = root + modulePath;
	}
	req.open('GET', modulePath, false);
	req.send(null);
	if( req.status != 200 ) {
		throw new Error(req);
	}

	var txt	= [
		dropinRequire.prefix,
		req.responseText,
		dropinRequire.suffix(moduleId, root),
	].join('\n');

	return dropinRequire.cache[moduleId] = eval(txt);
}
dropinRequire.cache	= {};
dropinRequire.prefix = [
		'(function(root){',
			'var _module = { exports: {} };',
			'var _require = function(moduleId){',
				'return dropinRequire(moduleId, root)',
			'};',
			'(function(module, exports, require){',
	].join('\n'),

// Here goes the javascript with commonjs modules
dropinRequire.suffix = function(moduleId, root){
	var parts;

	if ( moduleId && (parts = moduleId.match( /\/([^\/]+)$/ )) ) {
		root += moduleId.slice(0, moduleId.lastIndexOf( parts[0] ) + 1);
	}

	return [
			'})(_module, _module.exports, _require);',
			'return _module.exports;',
		'})("' + root + '");',
	].join('\n');
}

// to handle the replacement of "require" function
// - TODO do i need a global
dropinRequire.prevRequire = require;
/**
 * dropinRequire.noConflict
 * - attemps to make a jQuery-like noConflict
 * - check and make it work
*/
dropinRequire.noConflict	= function(){	// no removeAll ?
	require	= dropinRequire.prevRequire;
	return dropinRequire;
}

var require = dropinRequire;