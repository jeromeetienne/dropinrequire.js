exports.aFunction	= function(){
	return "im the parent";
};

exports.wow	= 42;

exports.kid	= require('./childmodule.js')