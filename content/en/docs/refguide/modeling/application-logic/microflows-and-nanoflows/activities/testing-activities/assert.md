---
title: "Assert"
url: /refguide/assert/
weight: 10
description: "Describes the Assert activity, which checks a condition in a testflow."
beta: true
---

{{% alert color="warning" %}} This feature is in beta. For more information, see [Release Status](/releasenotes/release-status/). {{% /alert %}}

{{% alert color="info" %}}
This activity can only be used in testflows.
{{% /alert %}}

## Introduction

The **Assert** activity checks whether a condition is true. Use it in a [testflow](/refguide/testflows/) to check that the logic you test gives the result you expect, for example that a microflow returns the right value or changes an object in the right way.

If the condition is true, the testflow continues. If the condition is not true, the Assert activity fails: the testflow stops immediately and the **Test Runner** pane shows the testflow as failed, together with the failure message.

A testflow passes when it reaches its end without a failed Assert activity or another error.

## Properties

The **Assert** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Target Expression {#target-expression}

The condition that you want to check. The target expression is an [expression](/refguide/expressions/) that must evaluate to a Boolean. The Assert activity passes when the expression evaluates to `true`, and fails otherwise.

This property is required.

For example, to check that a microflow called from the testflow returned a total of 100, use the following target expression:

```text
$Total = 100
```

### Failure Result Expression {#failure-result-expression}

The message that is shown when the Assert activity fails. The failure result expression is an [expression](/refguide/expressions/) that must evaluate to a string. Use it to explain what went wrong, for example by including the actual value:

```text
'Expected a total of 100, but the total was ' + toString($Total)
```

This property is optional. If you do not set it, or if it does not evaluate to a string, the failure message names the target expression that did not evaluate to `true`.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## Error Handling {#error-handling}

A failed Assert activity must always stop the testflow, so that the test fails. For this reason, the following rules apply:

* The [error handling type](/refguide/microflow-element-common-properties/#error-handling) of an Assert activity is always **Rollback**. You cannot choose another error handling type.
* If you place an Assert activity inside a [loop](/refguide/loop/), the error handling type of that loop must be **Rollback**. This also applies to every loop that contains that loop. Otherwise, the loop would continue with the next iteration after a failed Assert activity, and Studio Pro shows a consistency error.

## Read More

* [Testflows](/refguide/testflows/)
* [Testing Activities](/refguide/testing-activities/)
* [Error Handling in Microflows](/refguide/error-handling-in-microflows/)
