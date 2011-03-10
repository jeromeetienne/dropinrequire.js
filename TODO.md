
## Performance

Currently node's [require()](http://nodejs.org/docs/v0.4.0/api/globals.html#require)
is synchronous, aka blocking. It may not the best for the users. I will provide
faster means later. see TODO section for lists (it was my toy of the evening but it is now 2am).

## TODO

* Cache the result of the require()
    * not only for perf, this is about spec.
* To improve user-experience, provide a way to preload scripts asynchronously
    * simply a dropinRequireAsync() and put that at the begining.
* dynamic cache: storing what file is included in a localstorage
    * and thus preload asynchronously those files
* on the server, generater a single js file containing all those files
    * then it is included as a whole in the webpage. dropinrequire.js
