# Drop-In require

RequireWebby.js is a dropin replacement for commonjs [module](http://www.commonjs.org/specs/modules/1.0/)
in a browser.
It fit well people willing to share javascript between server and browser.

If you are using node.js and is willing to share code with your browser without
much trouble, requireweeby.js is for you.

## How to use it

You just include this in your webpage

    <script type="text/javascript" src="../dropin_require.js"></script>

And after that you can use require(filename) to import your node module in the
web browser. Show, dont tell, here is a (demo)(test/text.html)

## Performance

Currently node's require() is synchronous, aka blocking. 