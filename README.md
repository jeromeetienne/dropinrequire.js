# Drop-In require

[dropinrequire.js](http://jeromeetienne.github.com/dropinrequire.js)
is a drop-in replacement for commonjs [module](http://www.commonjs.org/specs/modules/1.0/)
in a browser. No server to run, No preprocessing of javascript files.
It is very simple it needs only [20-lines](https://github.com/jeromeetienne/dropinrequire.js/blob/master/dropin_require.js#L1-20)
of js.

It is designed for rapid prototyping, not for *production* (see <a href="#performance">details</a>).
If you are in a rush, are using [node.js](http://nodejs.org) and are willing to share code
with your browser without hassle, [dropinrequire.js](http://jeromeetienne.github.com/dropinrequire.js) is for you.

## How to use it

You just include this in your webpage

    <script type="text/javascript" src="./dropin_require.js"></script>

And after that you can use require(filename) to import your node module in the
web browser. 
Suppose you got a module `foobar.js`

    exports.foo	= "bar";

then this html will display `bar`. Here it is a [demo](http://jeromeetienne.github.com/dropinrequire.js/demo/) to show, and not tell.

    <script src="../dropin_require.js"></script>
    <script>
        alert( require('./foobar.js').foo );
    </script>

## Performance vs Compatibility

<a name="performance"></a>

[dropinrequire.js](http://jeromeetienne.github.com/dropinrequire.js) goals were to be short and compatible.
The compatibility part is the painfull one.
Nodejs [require](http://nodejs.org/docs/v0.4.3/api/globals.html#require) is synchronous, so when you require
you dont do anything else. To ensure compatibility, dropinrequire must be synchronous too.
But It is ok for nodejs because reading files from local disks is fast, much faster than network transfert.
The same doesnt apply in the browser.
Because of compatibility, dropinrequire.js relies on synchronous xhr which have
signficant performance issues. maybe one day i will incude a cache in LocalStorage.
For now, i recommend [brequire](https://github.com/weepy/brequire) for production.  It does
require you to preprocess your js files on the server, but it is in the same
spirit than [dropinrequire.js](http://jeromeetienne.github.com/dropinrequire.js), small and clean.

## About

The code is available on [github](https://github.com/jeromeetienne/dropinrequire.js) under
[MIT license](https://github.com/jeromeetienne/dropinrequire.js/blob/master/MIT-LICENSE.txt) and has been
written by [Jerome Etienne](http://jetienne.com).
That's it. No fuss no muss.
