---
title: "General Development Best Practices"
linktitle: "General Development Best Practices"
url: /refguide/general-best-practices/
description: "Explains general Mendix development best practices."
no_list: false
description_list: true
---

## Introduction

This document provides general miscellaneous best practices for setting up microflows, warnings, and other commonly used elements in Mendix apps. If you know the basics of Mendix, try implementing these bits of advice to raise your app to the next level.

## App Size

Mendix apps are best built in a way that they are easily scalable through a microservice architecture. They are ideally designed for a single purpose, focusing each app on a distinct business domain to keep functionality clear and manageable. 

By applying a microservice architecture, each app operates autonomously and communicates via APIs, enabling independent development, deployment, and scaling. This not only simplifies maintenance and upgrades, but also provides the highest degree of scalability, flexibility, and resilience, as each microservice can be tailored and scaled according to demand without impacting the rest of the system. Following this approach helps development teams build robust and future-proof solutions, accelerates deployment cycles, and ensures Mendix apps remain efficient and adaptable to evolving business requirements.

To ensure maintainability and performance, it is recommended to keep your app within: 

* 3,000 microflows and 750 entities if using a high-end machine
* 2,000 microflows and 500 entities on a lower-spec machine

Staying within these limits helps maintain optimal performance in Studio Pro, while ensuring your app remains manageable and scalable over time. If your app exceeds these limits, consider breaking your app into smaller services to improve maintainability and performance.

Applications exceeding these guidelines may still function, depending on your system. However, Mendix cannot provide support for performance issues in oversized apps.

{{% alert color="info" %}}
App size impacts IDE performance. Choose a development strategy that aligns with your system's capabilities and Mendix's recommended guidelines.
{{% /alert %}}

## Model SDK

The Mendix Model SDK enforces a strict limit of 20,000 units per working copy.
  
A unit represents a single document or element found in the app explorer. This limit helps ensure stable performance and efficient resource handling when working with large Mendix applications and models through the SDK. When building solutions or automation using the Model SDK, ensure that working copies do not exceed the 20,000-unit threshold to avoid errors or incomplete processing.

## Domain Models

### Attributes {#attributes}

Using calculated (virtual) attributes is discouraged. These introduce a performance risk since they need to be calculated every time the object is used, regardless of whether the attribute itself is used.

### Inheritance {#inheritance}

When using inheritance (specialization/generalization), it is recommended to use no more than two levels for performance reasons.

### Delete Behavior

[Delete behavior](/refguide/configuring-a-domain-model/#delete-behavior) must be specified where possible. Delete behavior must, however, never be relied upon when deleting large amounts of data. For performance reasons it is better to explicitly delete dependent objects when doing batch deletes.

### Event Handlers

[Event handlers](/refguide/event-handlers/) on domain entities must be used with a lot of caution. They can quickly result in complex and possibly unexpected behavior when several of them are applied to a single entity. It is often best to make the execution of microflows more explicit by using sub-microflows that are called manually, for example, just before committing an object.

## Microflows {#microflow-dev-best-practices}

### Size {#size}

The size of a microflow should not exceed 25 elements. An element is any block that Studio Pro allows in a microflow (loops, action activities, decisions, etc.). In some cases exceeding this limit is acceptable; this can occur, for instance, for validation or data copying flows.

Split microflows up into logical, functional elements. If a microflow has more than twenty-five elements, split the microflow up by creating a sub-microflow for a part of it. For example, by separating presentation logic from business logic.

Certain cases (such as validation checks) may require this rule to be ignored to produce an understandable result.

### Documentation and Annotations {#documentation-and-annotations}

All complex microflows (more than ten activities or more than two decisions) should have an [annotation](/refguide/annotations/) describing the purpose of the microflow, expected parameters, and return values. This annotation should be placed at the start, so it is visible when the microflow is opened. This will assist other developers in quickly understanding the general purpose of a microflow, without having to read through it entirely.

Complex, non-standard or integration-related sections in microflows should also have an accompanying annotation. Examples of these are web service calls, custom loops, and Java calls.

### Readability

The normal flow in a microflow should be aligned from left to right to ensure readability. Exceptions to the normal flow may branch out vertically: downwards is preferred, upwards if the downwards direction is already used.

Avoid crossing of lines of the links between the microflow elements.

If you decide to color code the different activities in your app, be sure to align within your team on their meaning.

### Complexity

Nested `if` statements in a single microflow expression are not recommended. If multiple checks depend on one another, this should be represented by multiple decisions in the microflow, so that the complexity is not hidden away in the expressions. You can use `and` and `or` operators to produce complex expressions if necessary. 

The example below shows a low-code approach that Mendix recommends, because it presents a clear picture of what is happening in the microflow:

{{< figure src="/attachments/refguide/modeling/dev-best-practices/recommended-microflow.png" width="700px" class="no-border" >}}

The example below shows an approach that we do not recommend. You can rewrite the microflow expression in this example as `if ($currentDeviceType = System.DeviceType.Phone and $Parameter = true) then true else false` using the `and` operator. However, it is still not clear enough and the low-code approach shown in the above example is preferable.

{{< figure src="/attachments/refguide/modeling/dev-best-practices/not-recommended-microflow.png" width="450px" class="no-border" >}}

Event triggers on input fields must be kept as simple as possible, since they are potentially executed very often, depending on user behavior. Complex operations here will reduce performance.

The number of parameters for a microflow should be kept to a minimum to facilitate reusability. The more parameters a microflow has, the more difficult it is to determine what should be put into the parameters to make the microflow run correctly.

### Error Handling and Logging

Use microflow [error handling](/refguide/error-handling-in-microflows/) for all integration and Java calls. Make sure to determine the correct rollback behavior. Always log the error that occurred, even if the process can continue, this is essential for later analysis of the error.

Complex processes and important business logic (like workflow processing or validations) must include debug and trace [logging](/refguide/logging/). Logging actions must write the current state and progress of the process and must include a request ID or other identifying information. The log node should be the name of the module. This will greatly assist error analysis.

### Validating Inputs in Microflows

When microflows are invoked from the client side, it is important to validate the inputs. By having validations, you prevent incorrect, inappropriate, or potentially harmful data from being used in your microflows. This protects your application against security vulnerabilities. The following presents the best practices regarding the integrity and validation of inputs in your microflows.

#### Implementing Validation Checks

Adding validation checks is vital for ensuring that input data conforms to the expected data type, format, range, or other application-specific constraints. For instance, if a numeric input is expected within a defined range, validation checks should confirm that the input is indeed numeric and falls within the specified range.

#### Managing Unexpected Values

When building microflows, it is important to account for the potential occurrence of unexpected values. These could be empty values, or values outside the expected range or format. It is also important to ensure that read-only attributes only contain expected values.

{{% alert color="warning" %}}
We strongly recommend adding validation checks to all microflows inputs, including read-only attributes. 

We also recommend avoiding storing intermediary values in attributes (such as, *TotalPrice*). Instead, calculate these values when needed to ensure you have the correct values.
{{% /alert %}}

Microflows should incorporate mechanisms to detect unexpected values and respond suitably – this might involve returning an error message to the end-user or executing a fallback operation. 

#### Updating Validation Logic Regularly

As the application evolves, the validation logic within microflows should be updated accordingly to reflect changes in business logic or data models. This regular review and update of validation checks ensures that microflows remain secure and function correctly over time.

By prioritizing the validation of inputs in microflows, you not only enhance the security of your application, but also ensure a more predictable and stable user experience. This practice underscores the development of reliable and robust applications.

## Warnings 

No warnings should be visible in Studio Pro, unless explicitly documented with a reason. Warnings can indicate many issues, including maintainability and security risks, which must be resolved.

## Excluded and Unused Documents

Excluded documents are documents that are in a project but excluded from deployment. These documents can be kept in your app for reference, but Studio Pro will act as if they do not exist. 

Unused documents are documents that are still being considered while being deployed that can be used if you want to replace a document with another document. 

Unused and excluded documents should be removed from the model when they are no longer needed. When a version of the application is prepared for a release, all these items should be cleaned up. Make sure to check whether items that appear unused are not actually called from a Java action before removing them. Studio Pro provides the possibility to mark such items as used to override warnings about this.

## XPath

[XPath](/refguide/xpath/) constraints in any part of the model should be kept as simple as possible. As a general rule, XPaths must not appear when the **Find advanced > XPath** option in Studio Pro is used with all options enabled.

## Security

The [security](/howto/security/) overview in Studio Pro must not show any incomplete (yellow) parts. All entity, microflow, and page access must be configured completely.

Assigning default rights to new members when defining entity access is NOT recommended. This will ensure that access is only granted after a conscious decision.

## Mendix Version

Apps should keep up with new Mendix releases as much as possible.

## Marketplace Content

When introducing a new [Mendix Marketplace](https://marketplace.mendix.com/) component to an app, carefully consider the support level of the component. Using components that are community supported introduces a maintainability and upgrade risk.

Marketplace modules should NOT be modified. If a Marketplace module is modified, updating to a new version becomes much harder, because the changes will be overwritten when a new version is downloaded from the Marketplace. If changing an Marketplace module is unavoidable, you have two options:

* Mark any changes you make explicitly and clearly, and perform them again when the module is updated
* Copy the contents of the Marketplace module to another module in your app and use that module instead (remember that your app will no longer reflect updates to the original Marketplace module)

To minimize the number of changes in the actual Marketplace module, it is advisable to combine them in a separate extension module wherever possible.
