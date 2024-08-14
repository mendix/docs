---
title: "Close the Server Connection"
url: /apidocs-mxsdk/mxsdk/closing-the-server-connection/
---

The SDK observes the complete model using the [mobx](https://github.com/mobxjs/mobx) library. This means that any change you make to the model is immediately synced with the working copy on the server. Sending changes to the server happens in the background and automatically, so there is no explicit commit. However, sending changes might take a while and your script should not end before all changes are flushed. In particular, changes are by default sent in batches of 1000 or after 200ms, whichever happens first. To wait until all changes are submitted to the server, use the [`closeConnection`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/model.html#closeconnection) function of the `model` object.

This example shows the function `closeConnection`, which you can invoke when working with a `workingCopy` instance as a last step before the final commit:

```ts
async function closeConnection(workingCopy: OnlineWorkingCopy) {
    await new Promise<void>((resolve, reject) => {
        workingCopy.model().closeConnection(
            () => {
                console.log(`Closed connection to Model API successfully.`);
                resolve();
            },
            (err) => {
                console.error(`Failed to closed connection to Model API. Error: ${err}`);
                reject();
            }
        );
    });
}
```

Continue with [How to Find Things in the Model](/apidocs-mxsdk/mxsdk/finding-things-in-the-model/).
