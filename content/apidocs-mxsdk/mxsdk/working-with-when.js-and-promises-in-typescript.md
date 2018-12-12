---
title: "Working with when.js and Promises in TypeScript"
category: "Mendix Platform SDK"
menu_order: 50
---
On this page you will find an explanation about the use of _promises_ in the Mendix SDK.

## What's a promise and why do you want to use it?

Some of the operations you perform when, for instance, loading a working copy in the Model Server, take some time to complete. In regular (synchronous) programming, you would have to wait for each operation to complete before you could start with the next one.

In an asynchronous programming paradigm, you can start operations in the background and continue with other stuff while you are waiting for the background jobs to complete. Traditional JavaScript uses [callback functions](http://recurial.com/programming/understanding-callback-functions-in-javascript/) to achieve this. However, these tend to become [very complicated](http://know.cujojs.com/tutorials/async/async-programming-is-messy.html.md) when you have multiple nested, callbacks. This phenomenon is known as _callback hell_. Hence, the need for [ _promises_ ](http://know.cujojs.com/tutorials/async/simplifying-async-with-promises).

A _promise_ is an object that will eventually either get a value (the promise is _fulfilled_), or it will be _rejected_ if something goes wrong. Promises can be _chained_ , meaning that a command _y_ will only be executed once the promise for _x_ is fulfilled.

There are multiple libraries that implement promises in JavaScript; in the Mendix SDK we have chosen to use [when.js](https://github.com/cujojs#usage).

## How do when.js promises map to TypeScript?

In the when.js [documentation](http://know.cujojs.com/tutorials/promises/consuming-promises.html.md) you will find many code examples that look like this:

```js
// sayHello() is a function which returns a promise
var greetingPromise = sayHello();
greetingPromise.then(function (greeting) {
    console.log(greeting);    // 'hello world'
});
```

Even though this is still valid TypeScript, you have a more elegant way to write this. Instead, in Mendix SDK code you would write something like this:

```js
var greetingPromise = sayHello();
greetingPromise.then( (greeting) => {
    console.log(greeting);    // 'hello world'
});
```

or even shorter:

```js
var greetingPromise = sayHello();
greetingPromise.then( greeting => console.log(greeting) ); // 'hello world'
```

As you can see, specifying the `function` keyword isn't required here. In TypeScript you can use _arrow functions_. In the above example, `(greeting)` is simply the list of parameters of the function that is defined after the `=>`. If there is just a single parameter, the parentheses may even be omitted. Likewise, when the function body is a single expression, the curly braces may be omitted.

## How do you use promises?

The returning pattern is that each time you receive a Promise object from a function call, you call `then` on it, until you end the chain with `done`. In `done`, you handle either the result if everything worked correctly, or you handle the error in case a promise was rejected somewhere along the way.

```js
client.platform()
	.createNewApp(appname)
	.then(project => {
		myLog(`Created new project: ${project.id() }: ${project.name() }`);
		readlineSync.question("About to create online working copy...");

		return project.createWorkingCopy();
	})
	.then(workingCopy => {
		myLog(`Created working copy: ${workingCopy.id() }`);
		readlineSync.question("About to generate a domain model...");

		return generateApp(workingCopy);
	})
	.then(workingCopy => {
		readlineSync.question("About to commit changes back to the Team Server...");
		return workingCopy.commit();
	})
	.done(
	() => {
		myLog("Done. Check the result in the Mendix Modeler.");
	},
	error => {
		console.log("Something went wrong:");
		console.dir(error);
	});
```

Note that `workingCopy.commit()` returns a `Promise<[Revision](https://apidocs.mendix.com/platformsdk/latest/classes/_mendix_platform_sdk_.revision.html)``>`. You ignore this value in our success handler (line 68), but you could have used it for instance to show the revision number to the user.

{{% alert type="success" %}}

Always either [return a promise to a caller, or end it with `done`](https://github.com/cujojs/when/blob/master/docs/api.md#promisethen-vs-promisedone) (From the when.js documentation).

{{% /alert %}}

## Common pitfalls

### Execution in the wrong order

In a piece of code that looks like the following snippet, it can happen that `Done` is printed to the console before `loadAllDocuments()` has finished.

```js
function loadAllDocuments(documents: projects.IDocument[]): void {
	documents.forEach( doc => loadAsPromise(doc) );
}

// Assuming you already have a project at your disposal
project.createWorkingCopy()
  .then((workingCopy) => {
    let firstModule = workingCopy.model().allModules()[0];
    loadAllDocuments(firstModule.documents));
  })
  .done( () => console.log("Done"), errorHandler);
```

In this example, you use the `loadAsPromise` convenience function to load a module's documents into memory. The body of `loadAllDocuments()` contains asynchronous code, but does not return a promise. Because of that, the log statement in the `done` block is executed immediately after `loadAllDocuments()` is invoked, before all documents have finished loading.

How to fix this? By creating a promise on top of the asynchronous calls, of course!

```js
function loadAllDocumentsAsPromise(documents: projects.IDocument[]): when.Promise<projects.Document[]> {
  return when.all<projects.Document[]>(documents.map( doc => loadAsPromise(doc)));
}
```

In the snippet above, `documents.map( doc => loadAsPromise(doc))` transforms the documents[] array into a Promise of an array of Documents. Using [when.all](https://github.com/cujojs/when/wiki/Examples#whenall), you return a promise that resolves only when all documents have been loaded. Only then you can make sure that you do not enter `done()` before the promise has been resolved.

{{% alert type="success" %}}

You can load model units or elements using the convenience method `loadAsPromise`, which is available in the Mendix Platform SDK as a way to load and get `promise` as an output instead of having to use a callback function.

{{% /alert %}}

### `this` binding

In an arrow function, the object `this` points to is different from what it would be in a regular function declaration.

In practice, this sometimes makes you prefer the function notation (for example, when you want to put a timeout on an integration test).

### Potentially unhandled rejection

If your script exits with `Potentially unhandled rejection` somewhere in the output, then you have most likely started an asynchronous/background operation as a [when.js](http://know.cujojs.com/tutorials/async/simplifying-async-with-promises) promise, but you did not "finish" the promise chain with a [`done`](https://github.com/cujojs/when/blob/master/docs/api.md#promisedone) operation. You should always end like this:

```js
asyncOperation(...)
	.then(...)
	.then(...)
	.done(callback, errorHandler); // Always end with 'done'
```

## Resources

*   When.js [API documentation](https://github.com/cujojs/when/blob/master/docs/api.md#api)
*   "Learning promises" [tutorial](http://know.cujojs.com/tutorials/promises/consuming-promises)
