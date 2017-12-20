---
title: "Creating Your First Script"
parent: "your-learning-path-for-the-mendix-sdk"
---
This tutorial will guide you through the process of setting up everything you need to start working with the Mendix Platform SDK. In [the previous part](setting-up-your-development-environment) you set up all the development tools. Let's create an SDK script that automatically bootstraps a new Mendix app.

## Writing a First Script

After setting up all the prerequisites, you can start writing a first script that will use the Mendix Platform SDK.

1.  In VS Code, create a file named `script.ts` in the same directory as where your other files live.

    The following script creates a new app, adds a new entity to the domain model, and commits the changes to the Team Server.
2.  Copy the following code to the  `script.ts` file:

    ```js
    import {MendixSdkClient, Project, OnlineWorkingCopy} from 'mendixplatformsdk';
    import {IModel, domainmodels} from 'mendixmodelsdk';
    import when = require('when');

    const username = 'richard.ford51@example.com';
    const apikey = '364fbe6d-c34d-4568-bb7c-1baa5ecdf9d1';
    const client = new MendixSdkClient(username, apikey);

    client.platform().createNewApp(`NewApp-${Date.now() }`)
        .then(project => project.createWorkingCopy())
        .then(workingCopy => loadDomainModel(workingCopy))
        .then(workingCopy => {
            const dm = pickDomainModel(workingCopy);
            const domainModel = dm.load();
            let entity = domainmodels.Entity.createIn(domainModel);
            entity.name = `NewEntity_${Date.now() }`;
            entity.location = { x: 100, y: 100 };
            return workingCopy;
        })
        .then(workingCopy => workingCopy.commit())
        .done(
            revision => console.log(`Successfully committed revision: ${revision.num() }. Done.`),
            error => {
                console.log('Something went wrong:');
                console.dir(error);
            });

    function loadDomainModel(workingCopy: OnlineWorkingCopy): when.Promise<OnlineWorkingCopy> {
        const dm = pickDomainModel(workingCopy);
        return when.promise<OnlineWorkingCopy>((resolve, reject) => {
            dm.load(dm => resolve(workingCopy));
        });
    }

    function pickDomainModel(workingCopy: OnlineWorkingCopy): domainmodels.IDomainModel {
        return workingCopy.model().allDomainModels()
            .filter(dm => dm.qualifiedName === 'MyFirstModule')[0];
    }

    ```

3.  Replace the `username` and `apikey `variables (lines 7 and 8) with the email address of your Mendix account. From your "[Show Profile](https://sprintr.home.mendix.com/link/myprofile)" Page, you can [generate an API Key](../apidocs/authentication).

### Code Explanation

Here are some explanations about the script starting from line 9:

**line 9**
```js
const client = new MendixSdkClient(username, apikey);
```

This line is where the MendixSdkClient object is instantiated.

**lines 11-12**
```js
client.platform().createNewApp(`NewApp-${Date.now() }`)
    .then(project => project.createWorkingCopy())
```

The `createNewApp()` call is where you actually kick off the process that will create a new project in the Mendix Platform which will also create a commit in the Team Server repository. The result of this call will be accessible via the Mendix Modeler but in order to be able to manipulate it using the SDK you need to expose it as an online working copy. The subsequent call `createWorkingCopy()` will exactly do that.

If you create an online working copy from an existing app on the Team Server, be sure your app has been saved using the latest Mendix Desktop Modeler version. Earlier versions might not be supported!

**lines 13-21**
```js
    .then(workingCopy => loadDomainModel(workingCopy))
    .then(workingCopy => {
        const dm = pickDomainModel(workingCopy);
        const domainModel = dm.load();
        let entity = domainmodels.Entity.createIn(domainModel);
        entity.name = `NewEntity_${Date.now() }`;
        entity.location = { x: 100, y: 100 };
        return workingCopy;
    })
```

Now that you have an online working copy, you can start manipulating the model. In this example, first you grab the default module named "MyFirstModule" (see the functions `loadDomainModel()` and `pickDomainModel()` on lines 32-40). Once you have loaded the domain model in memory with the function `dm.load()`, you create a new Entity in the domain model and give it a name and coordinates.

**lines 22-29**
```js
    .then(workingCopy => workingCopy.commit())
    .done(
        revision => console.log(`Successfully committed revision: ${revision.num() }. Done.`),
        error => {
            console.log('Something went wrong:');
            console.dir(error);
        });
```

Once you are done with the model changes, you can commit the changes back to the Team Server by calling `workingCopy.commit()`. Finally, in the done block you print a success message if things went OK, or handle the error otherwise. 

You may have noticed that the script above uses `then()` and `done()` methods instead of callback functions. These can be called on the Promises that the Platform SDK returns to enable you to handle the result of asynchronous calls.

Read more about [consuming promises](http://know.cujojs.com/tutorials/promises/consuming-promises) with [when.js](https://github.com/cujojs/when).

## Compiling and Running the Script

1.  Compile the script with the TypeScript compiler into JavaScript using the following command:

    ```java
    $ tsc
    ```

    A file named `script.js` should appear (or, if you named the original TypeScript file e.g. `app.ts`, then it would be named `app.js`.

    The TypeScript compiler will execute in a single run to compile all files configured in `tsconfig.json`. While developing your script, it can be practical to have the compiler immediately run once you make changes to your code. Use the `--watch` flag for `tsc` to monitor the files configured in the `tsconfig.json` file for changes and immediately run the compiler when you save the file:

    ```java
    $ tsc --watch
    ```

2.  Run the script with `node` to see the results:

    ```text
    $ node script.js
    Creating new project with name NewApp-[...] for user [...]
    Project creation for user [...] underway with job id: [...]
    Project created successfully for user [...] with id [...]
    Creating new online working copy for project [...] : NewApp-[...]
    Successfully created new online working copy [...] for project [...]: NewApp-[...]
    Successfully opened new online working copy [...] for project [...]: NewApp-[...]
    Closing connection to Model API...
    Closed connection to Model API successfully.
    Committing changes in online working copy [...] to team server project [...] branch null base revision -1
    Successfully committed changes to team server: revision 3 on branch null
    Successfully committed revision: 3\. Done.
    ```

Note that the steps for project creation (line 3) and committing to the Team Server (line 10) can take some time, so please be patient. Be aware that 'revision -1' refers to the latest revision, and that 'branch null' is equal to mainline.

## Opening the App in the Mendix Modeler

1.  In the Mendix [Developer Portal](https://sprintr.home.mendix.com/), navigate to your Projects. The app you just created should be visible at the top of the list.
2.  Open the new project, and on the right hand side click on **Edit in Modeler**.
3.  If you have the latest [Mendix Desktop Modeler](https://appstore.home.mendix.com/link/modelers/), it will start and load the app you just created from the Team Server.

## Next Step

Continue with [Creating the Domain Model](creating-the-domain-model)
