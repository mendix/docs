---
title: "Testflows"
url: /refguide/testflows/
weight: 25
description: "Describes testflows, which you use to test the logic of your app in Studio Pro."
beta: true
---

{{% alert color="warning" %}} This feature is in beta. For more information, see [Release Status](/releasenotes/release-status/). {{% /alert %}}

## Introduction

A testflow is a document that tests the logic of your app. You build a testflow in the same way as a [microflow](/refguide/microflows/): you add activities, decisions, and loops, and you connect them with sequence flows. In addition, a testflow can contain Assert activities, which check whether the result of your logic is what you expect.

You run testflows from the **Test Runner** pane in Studio Pro. A testflow passes when all of its Assert activities pass. It fails as soon as an Assert activity fails or another error occurs.

Testflows are available in Studio Pro 11.18 and above.

## Creating a Testflow {#create}

You can only create testflows in the **Testing** node of a module. To create a testflow, follow these steps:

1. In the [App Explorer](/refguide/app-explorer/), expand the module where you want to add the testflow.
2. Right-click the **Testing** node and select **Add testflow**.
3. Enter a name for the testflow and click **OK**.

The testflow opens in the editor, and the **Test Runner** pane shows the new testflow.

For naming conventions for testflows, see the [Testflows and Test Microflows](/refguide/naming-convention-best-practices/#unit-test-microflows) section in *Naming Convention Best Practices*.

## Testflow Elements {#elements}

A testflow can contain the same elements as a microflow, with the following differences:

* A testflow can contain [testing activities](/refguide/activities/#testing-activities), such as the Assert activity. Testing activities are only available in testflows.
* A testflow cannot have [parameters](/refguide/parameter/).
* A testflow does not return a value. The result of a testflow is determined by its Assert activities.

If a testflow contains an element that is not allowed, Studio Pro shows a consistency error.

Because Studio Pro runs testflows from the **Test Runner** pane, a testflow does not need to be called from other parts of your app. Studio Pro does not report testflows as unused documents.

## Checking Results with the Assert Activity {#assert}

A typical testflow prepares the data it needs, calls the microflow you want to test, and then uses one or more [Assert](/refguide/assert/) activities to check the result. Each Assert activity has a Boolean target expression that must evaluate to `true`, and an optional failure result expression that describes what went wrong.

When an Assert activity fails, the testflow stops and fails, and the **Test Runner** pane shows the failure message. A failed Assert activity always stops the testflow, so its error handling is always **Rollback**. For more information, see the [Error Handling](/refguide/assert/#error-handling) section in *Assert*.

## Running Testflows {#run}

You run testflows from the [Test Runner](/refguide/test-runner/) pane. To open this pane, click **View** > **Test Runner**. When you open a testflow in the editor, the **Test Runner** pane also opens and selects that testflow.

You can run all testflows in your app, or only the testflows and modules you select. Studio Pro runs the testflows one at a time. Each testflow runs in a dedicated runtime with its own in-memory database, so testflows do not affect each other or the data of your app. If your app is running locally, Studio Pro asks you to confirm before it stops the app to run the tests.

Testflows run without a user session, as the system user.

## Pipelines and Deployment {#pipelines-deployment}

When you deploy your app, its testflows are currently deployed with it, including to production environments. This will change in an upcoming 11.18 patch release, after which testflows are no longer deployed.

You cannot run testflows in a CI/CD pipeline yet. This is on the roadmap.

## Read More

* [Assert](/refguide/assert/)
* [Test Runner](/refguide/test-runner/)
* [Microflows](/refguide/microflows/)
* [Testing](/refguide/testing/)
