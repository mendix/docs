---
title: "Closing the Server Connection"
parent: "manipulating-existing-models"
---
The SDK observes the complete model using the [mobx](https://github.com/mobxjs/mobx) library. This means that any change you make to the model is immediately synced with the working copy on the server. Sending changes to the server happens in the background and automatically, so there is no explicit commit. However, sending changes might take a while and your script should not end before all changes are flushed. In particular, changes are by default sent in batches of 1000 or after 200ms - whatever happens first. To wait until all changes are submitted to the server, use the [`closeConnection`](https://apidocs.mendix.com/modelsdk/latest/classes/model.html#closeconnection) function of the `model` object.

The example below shows a function `closeConnection` which you can invoke when working with a workingCopy instance, as a last step before `done()`.

```js
function closeConnection(workingCopy: OnlineWorkingCopy): when.Promise<OnlineWorkingCopy> {
    return when.promise<OnlineWorkingCopy>((resolve, reject) => {
        workingCopy.model().closeConnection(
            () => {
                console.log(`Closed connection to Model API successfully.`);
                resolve(workingCopy);
            },
            (reason) => {
                console.log(`Failed to closed connection to Model API. Reason: ${reason}`);
                reject(reason);
            });
    });
}
```

Continue the learning path with [Finding things in the model](finding-things-in-the-model).
