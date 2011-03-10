# Drop-In require

dropinrequire.js is a dropin replacement for commonjs [module](http://www.commonjs.org/specs/modules/1.0/)
in a browser. No server to run, No preprocessing of javascript files. It aims for 
If you are using [node.js](http://nodejs.org) and is willing to share code with your browser without
hassle, [dropinrequire.js](http://jeromeetienne.github.com/dropinrequire.js) is for you.

The code is available on [github](https://github.com/jeromeetienne/dropinrequire.js) under
[MIT license](https://github.com/jeromeetienne/dropinrequire.js/blob/master/MIT-LICENSE.txt) and has been
written by [Jerome Etienne](http://jetienne.com).
That's it. No fuss no muss.

## How to use it

You just include this in your webpage

    <script type="text/javascript" src="./dropin_require.js"></script>

And after that you can use require(filename) to import your node module in the
web browser. 
Show, dont tell, here is a (demo)(test/text.html)

Suppose you got a module 'foobar.js'

    exports.foo	= "bar";

And with this html, it will display "bar". Show, dont tell? Here it is [live](demo/)

    <script src="../dropin_require.js"></script>
    <script>
        alert( require('./foobar.js').foo );
    </script>
