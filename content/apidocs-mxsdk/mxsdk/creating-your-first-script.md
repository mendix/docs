---
title: "Creating Your First Script"
parent: "your-learning-path-for-the-mendix-sdk"
---

## 1 Introduction
This documentation will guide you through the process of setting up everything you need to start working with the Mendix Platform SDK. In [the previous part](setting-up-your-development-environment) you set up all the development tools. Let's create an SDK script that automatically bootstraps a new Mendix app.

## 2 Writing a First Script

After setting up all the prerequisites, you can start writing a first script that will use the Mendix Platform SDK.

1.  In VS Code, create a file named `script.ts` in the same directory as where your other files live.

    The following script creates a new app, adds a new entity to the domain model, and commits the changes to the Team Server.
2.  Copy the following code to the  `script.ts` file:

    ```ts
    import { MendixSdkClient, OnlineWorkingCopy } from 'mendixplatformsdk';
    import { domainmodels } from 'mendixmodelsdk';

    const username = 'richard.ford51@example.com';
    const apikey = '364fbe6d-c34d-4568-bb7c-1baa5ecdf9d1';
    const client = new MendixSdkClient(username, apikey);

    async function main() {
        const project = await client.platform().createNewApp(`NewApp-${Date.now()}`);
        const workingCopy = await project.createWorkingCopy();

        const domainModel = await loadDomainModel(workingCopy);
        const entity = domainmodels.Entity.createIn(domainModel);
        entity.name = `NewEntity_${Date.now()}`;
        entity.location = { x: 100, y: 100 };

        try {
            const revision = await workingCopy.commit();
            console.log(`Successfully committed revision: ${revision.num()}. Done.`)
        } catch (error) {
            console.error('Something went wrong:', error);
        }
    }

    function loadDomainModel(workingCopy: OnlineWorkingCopy): Promise<domainmodels.DomainModel> {
        const dm = workingCopy.model().allDomainModels().filter(dm => dm.containerAsModule.name === 'MyFirstModule')[0];

        return new Promise((resolve, reject) => dm.load(resolve));
    }

    main();
    ```

3.  Replace the `username` and `apikey `variables (lines 7 and 8) with the email address of your Mendix account. From your "[Show Profile](https://sprintr.home.mendix.com/link/myprofile)" Page, you can [generate an API Key](../apidocs/authentication).

### 2.1 Code Explanation

Here are some explanations about the script:

#### 2.1.1 Line 6

```ts
const client = new MendixSdkClient(username, apikey);
```

This line is where the MendixSdkClient object is instantiated.

#### 2.1.2 Lines 9-10

```ts
const project = await client.platform().createNewApp(`NewApp-${Date.now()}`);
const workingCopy = await project.createWorkingCopy();
```

The `createNewApp()` call is where you actually kick off the process that will create a new project in the Mendix Platform which will also create a commit in the Team Server repository. By using `await`, you're waiting for the asynchoronous call for creating the app and resuming the code afterwards. The result of this call will be accessible via the Mendix Modeler, but in order to be able to manipulate it using the SDK, you need to expose it as an online working copy. The subsequent call `createWorkingCopy()` will exactly do that.

If you create an online working copy from an existing app on the Team Server, be sure your app has been saved using the latest Mendix Desktop Modeler version. Earlier versions might not be supported!

#### 2.1.3 Lines 12-15

```ts
const domainModel = await loadDomainModel(workingCopy);
const entity = domainmodels.Entity.createIn(domainModel);
entity.name = `NewEntity_${Date.now()}`;
entity.location = { x: 100, y: 100 };
```

Now that you have an online working copy, you can start manipulating the model. In this example, first you grab the default module named "MyFirstModule" (see the function `loadDomainModel()` on lines 25-29). Once you have loaded the domain model in memory with the function `dm.load()`, you create a new Entity in the domain model and give it a name and coordinates.

#### 2.1.4 Lines 22-29

```ts
try {
    const revision = await workingCopy.commit();
    console.log(`Successfully committed revision: ${revision.num()}. Done.`)
} catch (error) {
    console.error('Something went wrong:', error);
}
```

Once you're done with the model changes, you can commit the changes back to the Team Server by calling `workingCopy.commit()`. Finally, in the done block you print a success message if things went OK, or handle the error otherwise. 

For more information, see [Async Await](https://basarat.gitbooks.io/typescript/docs/async-await.html) and [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).

## 3 Compiling and Running the Script

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

## 4 Opening the App in the Mendix Modeler

1.  In the Mendix [Developer Portal](https://sprintr.home.mendix.com/), navigate to your Projects. The app you just created should be visible at the top of the list.
2.  Open the new project, and on the right hand side click on **Edit in Modeler**.
3.  If you have the latest [Mendix Desktop Modeler](https://appstore.home.mendix.com/link/modelers/), it will start and load the app you just created from the Team Server.

## 5 Next Step

Continue with [Creating the Domain Model](creating-the-domain-model).
