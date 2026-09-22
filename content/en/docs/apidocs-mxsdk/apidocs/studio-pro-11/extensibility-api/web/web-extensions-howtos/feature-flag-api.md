---
title: "Using the Feature Flag API"
linktitle: "Feature Flag API"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/feature-flag-api/
description: "Describes how to check whether a Studio Pro feature flag was provided on the command line."
---

## Introduction

This how-to describes how to query Studio Pro feature flags from an extension. Feature flags are arguments that are passed to Studio Pro in the command line.

## Prerequisites

Before starting this how-to, make sure you have completed the following
prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](https://docs.mendix.com/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.

## Set Up the Extension Structure

Replace the contents of your `src/main/index.ts` file with the following:

```typescript
import { ComponentContext, IComponent, getStudioProApi } from "@mendix/extensions-api";

const TEST_FLAG = "test-flag";

export const component: IComponent = {
    async loaded(componentContext: ComponentContext) {

        const studioPro = getStudioProApi(componentContext);
        
        // Add a menu item to the Extensions menu
        await studioPro.ui.extensionsMenu.add({
            caption: "Check Feature Flag",
            menuId: "check-feature-flag-menu",
            action: async () => {
                const isProvided = await studioPro.ui.featureFlags.isCommandLineFlagProvided(TEST_FLAG);

                await studioPro.ui.messageBoxes.show("info", `Feature flag '${TEST_FLAG}': ${isProvided ? "Yes" : "No"}`);
            }
        });
    }
}
```

The code uses the following:

* `studioPro.ui.featureFlags` to query whether a flag was provided on the command line
* `studioPro.ui.extensionsMenu` to add a menu item that runs the check on demand
* `studioPro.ui.messageBoxes` to show the result to the user

The function is `async` so you can use `await` when querying the flag.
If you follow the above code, you can add the menu item from the Extensions menu and click it to see whether the flag was provided. Start Studio Pro with the flag on the command line to see the result change from **No** to **Yes**.

## The Feature Flag API

The Feature Flag API is available in:

* `studioPro.ui.featureFlags`

It exposes a single method:

* `isCommandLineFlagProvided(featureFlagName)` – returns a `Promise<boolean>` that resolves to `true` if the named flag was passed to Studio Pro on the command line, and `false` otherwise.

`featureFlagName` is the exact name of the flag as it is provided on the command line, without the `--` in front of the name. The comparison is by name, so make sure it matches the flag you expect Studio Pro to be started with.

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a short
[survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
