---
title: "Using Platform SDK"
parent: "sdk-howtos"
menu_order: 12
---

# Using Platform SDK
This article guides you on how to use the Platform SDK to:
* [Create a new app](#create-a-new-app)
* [Open an existing app](#open-an-existing-app)
* [Delete an app](#delete-an-app)
* [Create a temporary Working Copy](#create-a-temporary-working-copy)
* [Open the working copy model](#open-the-working-copy-model)
* [Commit a temporary Working Copy](#commit-a-temporary-working-copy)
* [Change the Platfrom SDK configurations](#change-the-platfrom-sdk-configurations)

## The platfrom client
The entry point for Mendix Platform SDK is `MendixPlatformClient`. In most cases you will need to instantiate a new object from this class.
```ts
const client = new MendixPlatformClient();
```

## Create a new app
The platform client allows you to create a new Mendix app by simply passing the app name
```ts
const app = await client.createNewApp("My new App");
```
You can pass some options to `createNewApp`
| Name                | Description                                                                                                                                                |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| repositoryType      | Type of repository to be used. Possible values: `svn` and `git`.                                                                                           |
| summary             | Short description of the app.                                                                                                                              |
| image               | Base64 encoded data of an app image (height and width between 200 and 400 px, maximum size 5 MB).                                                           |
| useAppTemplate      | Indicates whether repository must be initialized with the given app template. Either `templateId` or `templateDownloadURL` is mandatory when this is true. |
| templateDownloadURL | URL of the download location of the app template package file (mpk). If the template package is private, this URL must be authenticated with a signature.  |
| templateId          | UUID of the app template the app should be based on.                                                                                                       |

Example for creating Mendix app based on [Asset Management](https://marketplace.mendix.com/link/component/107652) template.
```ts
const app = await client.createNewApp("My Asset Management", {
    useAppTemplate: true,
    templateId: "6e66fe4d-6e96-4eb8-a2b6-a61dec37a799"
});
```

## Open an existing app
The platform client allows you to open an existing app using the app ID. You can get the app ID in the developer portal under 'General Settings'
```ts
const app = client.getApp("33118fbf-7053-482a-8aff-7bf1c626a6d9");
```

## Delete an app
The app object allows you to delete the corresponding Mendix app. Please note that all resources of this app will be deleted permanently.
```ts
await app.delete();
```

## Create a temporary Working Copy
To change your app, you need to create a temporary working copy of a particular Team Server branch, make the changes there, and then submit that working copy to Team Server.
```ts
const workingCopy = await app.createTemporaryWorkingCopy("main");
```
You can pass some options to `createTemporaryWorkingCopy`
| Name     | Description                                                                                                                                          |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| commitId | Id of the commit on which the working copy should be based. If not passed, the working copy is created from the last commit in the specified branch. |

## Open the working copy model
After creating the working copy, you can load the model to make changes.
```ts
const model = await workingCopy.openModel();
```

## Commit a temporary Working Copy
After making the changes, you need to commit the changes back to Team Server.
```ts
await workingCopy.commitToTeamServer();
```
You can pass some options to `commitToTeamServer`
| Name           | Description                                                                                                        |
|----------------|--------------------------------------------------------------------------------------------------------------------|
| branchName     | You can specify a branch other than the working copy base branch. In that case you should set `force` to `true`.   |
| commitMessage  | Specify a custom commit message instead of the default message (`Imported model changes from online working copy`) |
| targetCommitId | This commit ID will be set to the working copy base commit ID if not specified.                                    |
| force          | Set to true to commit to a branch that is different from the working copy's base branch.                           |

## Change the Platfrom SDK configurations
* By default, the Platform SDK reads your personal access token from the environment variable ([more details on how to create and store your personal access token](setup-your-pat)). But you can change this configuration, for example you can load it from a file like in the following example:
```ts
setPlatformConfig({
    mendixToken: fs.readFileSync("mendix-token.txt", {encoding: "utf8"})
});
```
* By default, the Platform SDK prints some logs to the console. You can customize the logging experience using the following APIs:
```ts
disableLogger()          // Disables all logging
enableLogger()           // Enable logging through the console
setLogger(customLogger); // Override the logger object
```
The custom logger object should have the following methods:
```ts
info(message?: string, ...optionalParams: any[]): any;
warn(message?: string, ...optionalParams: any[]): any;
error(message?: string, ...optionalParams: any[]): any;
```
