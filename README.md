# Drop-In require

dropinrequire.js is a dropin replacement for commonjs [module](http://www.commonjs.org/specs/modules/1.0/)
in a browser. No server to run, No preprocessing of javascript files.

If you are using (node.js)[http://nodejs.org] and is willing to share code with your browser without
much trouble, requireweeby.js is for you.

## How to use it

You just include this in your webpage

    <script type="text/javascript" src="../dropin_require.js"></script>

And after that you can use require(filename) to import your node module in the
web browser. 
Show, dont tell, here is a (demo)(test/text.html)

Suppose you got a module 'foobar.js'

    exports.foo	= "bar";

And with this html, it will display "bar". That's it.

    <script src="../dropin_require.js"></script>
    <script>
        alert( require('./foobar.js').foo );
    </script>

## Performance

Currently node's (require())[http://nodejs.org/docs/v0.4.0/api/globals.html#require]
is synchronous, aka blocking. It may not the best for the users. I will provide
faster means later (it was my toy of the evening but it is now 2am)

## TODO 
* Cache the result of the require()
  * not only for perf, this is about spec.
* To improve user-experience, provide a way to preload scripts asynchronously
  * simply a dropinRequireAsync() and put that at the begining.
* dynamic cache: storing what file is included in a localstorage
  * and thus preload asynchronously those files
* on the server, generater a single js file containing all those files
  * then it is included as a whole in the webpage. dropinrequire.js
