module.exports	= function(){
	return "im nested";
};

module.exports.nestedChild = require('./nestedChildModule.js');
