exports.aFunction	= function(){
	console.log("im aFunction in parentmodule");
};

exports.kid	= require('./childmodule.js')