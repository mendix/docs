---
title: "Create Your First Script"
url: /apidocs-mxsdk/mxsdk/creating-your-first-script/
weight: 20
---

## 1 Introduction

In [How to Set Up Your Development Environment](/apidocs-mxsdk/mxsdk/setting-up-your-development-environment/) and [How to Set Up Your Personal Access Token](/apidocs-mxsdk/mxsdk/setup-your-pat/), you set up all the development tools and security settings. Now you will create an SDK script that automatically bootstraps a new Mendix app.

## 2 Writing a First Script

After setting up all the prerequisites, you can start writing a first script that will use the Mendix Platform SDK.

1.  In VS Code, create a file named `script.ts` in the same directory as where your other files live.

    The following script creates a new app, adds a new entity to the domain model, and commits the changes to the Team Server.
2.  Copy the following code to the  `script.ts` file:

    ```ts
    import { domainmodels } from "mendixmodelsdk";
    import { MendixPlatformClient } from "mendixplatformsdk";

    async function main() {
        const client = new MendixPlatformClient();

        const app = await client.createNewApp(`NewApp-${Date.now()}`, {
            repositoryType: "git",
        });

        const workingCopy = await app.createTemporaryWorkingCopy("main");
        const model = await workingCopy.openModel();

        const domainModelInterface = model.allDomainModels().filter(dm => dm.containerAsModule.name === "MyFirstModule")[0];
        const domainModel = await domainModelInterface.load();

        const entity = domainmodels.Entity.createIn(domainModel);
        entity.name = `NewEntity_${Date.now()}`;

        await model.flushChanges();

        await workingCopy.commitToRepository("main");
    }

    main().catch(console.error);
    ```
Don't forget to [Setup your Personal Access Token](/apidocs-mxsdk/mxsdk/setup-your-pat/) before executing the script.
### 2.1 Code Explanation

Here are some explanations about the script:

```ts
const client = new MendixPlatformClient();
```
This line is where the MendixSdkClient object is instantiated.

```ts
const app = await client.createNewApp(`NewApp-${Date.now()}`, {
    repositoryType: "git",
});

const workingCopy = await app.createTemporaryWorkingCopy("main");
```

The `createNewApp()` call is where you actually kick off the process that will create a new app in the Mendix Platform which will also create a commit in the Team Server repository. By using `await`, you're waiting for the asynchronous call for creating the app and resuming the code afterwards. The result of this call will be accessible via Studio Pro, but in order to be able to manipulate it using the SDK, you need to expose it as an online working copy. The subsequent call `createTemporaryWorkingCopy()` will do exactly that.

If you create an online working copy from an existing app on the Team Server, be sure your app has been saved using the latest Mendix Studio Pro version. Earlier versions might not be supported!

```ts
const domainModelInterface = model.allDomainModels().filter(dm => dm.containerAsModule.name === "MyFirstModule")[0];
const domainModel = await domainModelInterface.load();

const entity = domainmodels.Entity.createIn(domainModel);
entity.name = `NewEntity_${Date.now()}`;
```

Now that you have an online working copy, you can start manipulating the model. In this example, first you grab the domain model of the default module named **MyFirstModule**. After finding your document, you have to obtain it in its fully-loaded form to be able to change it. This is because the Model SDK does not load the entire model into the client's memory, it only loads the public elements and properties of the document. Once you have loaded the domain model in memory with the function `domainModelInterface.load()`, you create a new entity in the domain model and give it a name.

```ts
await model.flushChanges();
await workingCopy.commitToRepository("main");
```
Once you are done with the model changes, you can flush the changes to make sure they have been sent, and then commit the working copy back to the Team Server by calling `workingCopy.commitToRepository()`.

## 3 Compiling and Running the Script

1.  Compile the script with the TypeScript compiler into JavaScript using the following command:

    ```bash
    $ tsc
    ```

    A file named `script.js` should appear (or, if you named the original TypeScript file for example, `app.ts`, then it would be named `app.js`.

    The TypeScript compiler will execute in a single run to compile all files configured in *tsconfig.json*. While developing your script, it can be practical to have the compiler immediately run once you make changes to your code. Use the `--watch` flag for `tsc` to monitor the files configured in the *tsconfig.json* file for changes and immediately run the compiler when you save the file:

    ```bash
    $ tsc --watch
    ```

2.  Run the script with `node` to see the results:

    ```text
    $ node script.js
    Creating new app 'NewApp-1637595970665'...
    Successfully created app with id '64760e41-9507-42d3-99da-3950454dd40a'
    Creating temporary working copy for branch 'main'...
    Successfully created temporary working copy with id 'c70b078e-a323-42a7-b95d-7407a0e611d3' based on branch 'main'
    Committing temporary working copy 'c70b078e-a323-42a7-b95d-7407a0e611d3' to branch 'main'...
    Successfully committed the working copy with id 'c70b078e-a323-42a7-b95d-7407a0e611d3' to branch 'main'
    ```

Note that the steps for app creation and committing to the Team Server can take some time, so please be patient.

## 4 Opening the App in Studio Pro

1.  In the **Apps** page of the [Developer Portal](https://sprintr.home.mendix.com/), the app you just created should be visible at the top of the list.
2.  Open the new app, and on the right side, click **Edit in Studio**.
3.  If you have the latest [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/), it will start and load the app you just created from the Team Server.

## 5 Next Step

Continue with [How to Create the Domain Model](/apidocs-mxsdk/mxsdk/creating-the-domain-model/).
