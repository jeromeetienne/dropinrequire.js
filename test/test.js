var supermod	= (function(){
	var _module	= {
		exports	: {}
	};
	
	var _require	= function(filename){
		console.log("filename", filename)
		return require(filename)
	};
	
	(function(module, exports, require){
		//module.exports	= function(){
		//	console.log("slota");
		//};
		exports.wow	= function(){
			console.log("wow")
			//console.log(require('fs').readdirSync("/tmp"));
		};
	})(_module, _module.exports, _require);
	
	return _module.exports;	
})();

supermod.wow();

