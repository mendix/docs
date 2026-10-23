---
title: "Microflows in the Mendix Metamodel"
linktitle: "Microflows in the Metamodel"
description: "This document explains in detail how you can create and invoke microflows."
url: /apidocs-mxsdk/mxsdk/microflows-metamodel/
weight: 4
---

## Introduction

Microflows have parameters, a return type (the return value is defined in an object, see below), and allowed module roles. Rules are similar to microflows, but have rule parameters, and they do not have some Microflow-specific properties

### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842814.svg" class="no-border" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
The [Microflows](/refguide/microflows/) overview page | The [`microflows`](https://apidocs.rnd.mendix.com/modelsdk/latest/modules/microflows.html) package
[Microflow](/refguide/microflow/), technical information on properties of a microflow | [Microflow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Microflow.html)
[Rule](/refguide/rules/) | [Rule](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Rule.html)
[Parameter](/refguide/parameter/) | [MicroflowParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MicroflowParameter.html)

### Microflow and Rule Structure

Microflows consist of a collection of objects connected by flows. The objects represent activities, such as Object manipulation and retrieval, microflow calls, web service calls, etc. (details follow below).

For example, a simple microflow could consist of a start event, a single activity, and an end event. The microflow would then have three MicroflowObjects in its MicroflowObjectCollection, and would have two SequenceFlows. The first sequence flow would have the start event as its origin and the activity as its destination. The second sequence flow would have the activity as its origin, and the end event as its destination.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842811.svg" class="no-border" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Activities](/refguide/activities/) | [MicroflowObjectCollection](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MicroflowObjectCollection.html)
[Sequence Flow](/refguide/sequence-flow/) | [SequenceFlow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SequenceFlow.html)

### Microflow Objects

There are several types of objects that can be added to a microflow. One type is `Activity`, which can either be a loop, or an action activity, which will execute a microflow action (see the next section for more details on different types of activities). Other microflow object types include start and end events, decisions and merges, annotations and parameters.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842852.svg" class="no-border" >}}

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582249.svg" class="no-border" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Activities](/refguide/activities/) | [MicroflowParameterObject](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MicroflowParameterObject.html), [Activity](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Activity.html)
[Start](/refguide/start-event/) and [End](/refguide/end-event/) events | [StartEvent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.StartEvent.html), [EndEvent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.EndEvent.html)
[Loop](/refguide/loop/)s, with [Break](/refguide/break-event/) and [Continue](/refguide/continue-event/) events | [LoopedActivity](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.LoopedActivity.html), [BreakEvent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.BreakEvent.html), [ContinueEvent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ContinueEvent.html)
[Annotation](/refguide/annotation/) | [Annotation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Annotation.html)

### Flows {#flows}

A microflow consists of objects that are connected by flows, specifically, `SequenceFlow`s. A flow has an origin and a destination, with which the order of objects in the microflow is defined.

A decision on an enumeration has a sequence flow for each enumeration value. In the meta model, this is represented by the case value of the sequence flows. Each sequence flow has an enumeration case value with `value` set to the corresponding enumeration case. Boolean decisions have two sequence flows, one for each of `true` and `false`, with each a corresponding case value.

Object type decisions have sequence flows for each specialization of the entity type on which is split. Each sequence flow has an inheritance case value with a specialization entity value.

Annotation flows are used to connect annotations to other microflow objects.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842853.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | ---  |
| [Sequence Flow](/refguide/sequence-flow/) | [Flow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Flow.html) |
| [Annotation flow](/refguide/annotation/#annotation-flow) | [SequenceFlow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SequenceFlow.html) |
| |[AnnotationFlow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.AnnotationFlow.html) |
| |Properties [`origin`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Flow.html#origin) and [`destination`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Flow.html#destination) of Flow |
| |[CaseValue](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CaseValue.html) and its inheritance hierarchy |

### Decisions

The control flow in microflows is defined with decisions of two types: 

* **Decisions** – for Boolean or enumeration decisions
* **Object type decisions** – for control based on specialization entity types

Two paths of a control can be merged with a decision.

A decision conditionally splits on either an expression or a rule. In case of a rule, a call is made, similar to a microflow call, with a rule parameter mapping.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842854.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | --- | 
| [Decision](/refguide/decision/) |[ExclusiveSplit](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ExclusiveSplit.html) |
| [Object Type Decision](/refguide/object-type-decision/) |[InheritanceSplit](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.InheritanceSplit.html) |
| [Merge](/refguide/merge/) |[ExclusiveMerge](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ExclusiveMerge.html) |
| [Rules](/refguide/rules/) |[ExpressionSplitCondition](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ExpressionSplitCondition.html) |
| |[RuleSplitCondition](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RuleSplitCondition.html) |
| |[RuleCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RuleCall.html) |
| |[RuleCallParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RuleCallParameterMapping.html) |

## Microflow Activities

### Working with Objects

Objects can be manipulated in microflows through several activities. New objects can be created. Existing objects can be retrieved (see the next subsection for details). All objects can be updated or deleted. All changes (including creation and deletion) can be committed or rolled back.

Object attributes can be updated with a change action, both in a create action and in an update action.These actions have a list of items that describe which attribute or association is set, to a certain value.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582248.svg" class="no-border" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Create Object](/refguide/create-object/) |[CreateObjectAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CreateObjectAction.html) and [ChangeObjectAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ChangeObjectAction.html) ([ChangeMembersAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ChangeMembersAction.html), [MemberChange](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MemberChange.html))
[Change Object](/refguide/change-object/) | [DeleteAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.DeleteAction.html)
[Rollback Object](/refguide/rollback-object/) |[CommitAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CommitAction.html) and [RollbackAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RollbackAction.html)

### Retrieving Objects

A retrieve action is either an association-based retrieve or a database-based retrieve. An association-based retrieve points to a specific association and retrieves the relevant objects over that association. A database-based retrieve directly accesses the database and provides control over the XPath constraint, sorting of the retrieved objects and the range of objects to retrieve.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582244.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | --- |
| [Retrieve object(s)](/refguide/retrieve-objects/) |[RetrieveSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RetrieveSource.html) |
| [XPath](/refguide/xpath/) constraints |[AssociationRetrieveSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.AssociationRetrieveSource.html) |
| |[DatabaseRetrieveSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.DatabaseRetrieveSource.html) |
| |[Range](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Range.html), [ConstantRange](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ConstantRange.html) and [CustomRange](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CustomRange.html) |
| |[SortItemList](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SortItemList.html) and [SortItem](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SortItem.html) |

### Microflow Calls

Microflows can call other microflows by defining a mapping of expressions to parameters (of the called microflow).

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842821.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | --- |
| [Call Microflow](/refguide/microflow-call/) |[MicroflowCallAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MicroflowCallAction.html) |
| |[MicroflowCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MicroflowCall.html) |
| |[MicroflowCallParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MicroflowCallParameterMapping.html) |

### Web Client Activities

Microflows can trigger behavior in the browser: showing and closing pages, showing (popup) messages, providing validation feedback and triggering file downloads.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582245.svg" class="no-border" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Show Page](/refguide/show-page/) and [Show Home Page](/refguide/show-home-page/) |[ShowPageAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ShowPageAction.html) and [ShowHomePageAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ShowHomePageAction.html)
[Close Page](/refguide/close-page/) |[CloseFormAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CloseFormAction.html)
[Show Message](/refguide/show-message/) |[ShowMessageAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ShowMessageAction.html)
[Validation Feedback](/refguide/validation-feedback/) |[ValidationFeedbackAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ValidationFeedbackAction.html)
[Download File](/refguide/download-file/) |[DownloadFileAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.DownloadFileAction.html)

### App Service Calls

An app service call action points to a specific app service action (which is part of a consumed app service). The action call has a list of parameter mappings of app service action parameters to expressions.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842823.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | --- |
| | [AppServiceCallAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.AppServiceCallAction.html) |
| |[AppServiceAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/appservices.AppServiceAction.html) |
| |[AppServiceCallParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.AppServiceCallParameterMapping.html) |
| |[AppServiceActionParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/appservices.AppServiceActionParameter.html) |

### Web Service Calls

A web service call to an imported web service has an HTTP configuration, and a request and response handling configuration to map the request and response parameters of the third-party web service operation to Mendix app concepts.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842843.svg" class="no-border" >}}

See the following diagrams for details on the HTTP configuration, request handling, and response handling.

| Studio Pro Guide | Model SDK API docs |
| --- | --- |
| [Call Web Service](/refguide/call-web-service-action/) |[WebServiceCallAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.WebServiceCallAction.html) |
| |[HttpConfiguration](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.HttpConfiguration.html) |
| |[RequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RequestHandling.html) and [ResultHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ResultHandling.html) |

### Web Service Calls – Request HTTP Configuration

An HTTP configuration has an optional custom endpoint location, authentication credentials, and optional HTTP headers.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842844.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | --- |
| [Call Web Service](/refguide/call-web-service-action/) |[HttpConfiguration](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.HttpConfiguration.html) |
| |[HttpHeaderEntry](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.HttpHeaderEntry.html) |

### Web Service Calls – Request Handling

A web service operation request needs to be mapped from Mendix app concepts to the specifics of the web service operation. There are four different ways in which request handling can be configured. Each has its own specific configuration options.

1. Export Mapping – The recommended option whenever you are sending complex XML objects (non-primitives) to a third party.
2. Simple Parameter Mapping – Use this option when you are just sending primitive values to a third party. The argument can be any MicroflowExpression producing a value compatible with the parameter type. The ElementPath is a string representing the place in the element tree of the parameter in the XML message.
3. Advanced Parameter Mapping – This is a combination of the above two mappings, starting one level deeper in the XML hierarchy than a regular export mapping. Use a MicroflowExpression for a primitive value and an ExportMapping for a complex one.
4. Custom mapping – Specify the XML to be sent manually. Powerful yet dangerous.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582232.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | --- |
| [Call Web Service](/refguide/call-web-service-action/) |[RequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.RequestHandling.html) |
| |[SimpleRequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SimpleRequestHandling.html) - [WebServiceOperationSimpleParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.WebServiceOperationSimpleParameterMapping.html) |
| |[AdvancedRequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.AdvancedRequestHandling.html) - [WebServiceOperationAdvancedParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.WebServiceOperationAdvancedParameterMapping.html) |
| |[MappingRequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.MappingRequestHandling.html) |
| |[CustomRequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CustomRequestHandling.html) |

### Web Service Calls – Response Handling

The result of a web service operation needs to be mapped to Mendix app concepts with an import mapping call which uses an import mapping. The range of objects to map can also be controlled.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842842.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | --- |
| [Call Web Service](/refguide/call-web-service-action/) |[ResultHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ResultHandling.html) |
| |[ImportMappingCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ImportMappingCall.html) |
| |[ImportMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/importmappings.ImportMapping.html) |
| |[Range](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Range.html) |

### Variables

Microflow variables can be created and changed with specific actions. A create variable action also has a data type to indicate the type of the newly created variable.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842846.svg" class="no-border" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Create Variable](/refguide/create-variable/) |[CreateVariableAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CreateVariableAction.html)
[Change Variable](/refguide/change-variable/) |[ChangeVariableAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ChangeVariableAction.html)

### Lists

Lists can be created, changed and deleted with specific actions. List aggregation actions have a specific function (for example, sum or average). List operations can also be run, see the following sections for details.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582227.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | --- |
| [Create List](/refguide/create-list/) |[CreateListAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.CreateListAction.html) |
| [Change List](/refguide/change-list/) |[ChangeListAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ChangeListAction.html) |
| [Aggregate List](/refguide/aggregate-list/) |[DeleteAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.DeleteAction.html) |
| [List Operation](/refguide/list-operation/) |[AggregateListAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.AggregateListAction.html) |
| |[ListOperationAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ListOperationAction.html) and [ListOperation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ListOperation.html) |

### Lists – Operations

Lists can be manipulated with different types of operations. Lists can be sorted, with a list of sorting items. Head and tail provide the first and remainder of a list, respectively. Find and filter respectively pick one and all elements of a list that adhere to some condition.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582228.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | --- |
| [List Operation](/refguide/list-operation/) |[ListOperation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ListOperation.html) |
| |[Head](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Head.html) and [Tail](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Tail.html) |
| |[Sort](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Sort.html), [SortItemList](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SortItemList.html) and [SortItem](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.SortItem.html) |
| |[Filter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Filter.html) and [Find](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Find.html) |

### Lists – Binary Operations

Lists can be manipulated with several binary operations, which take two lists as input.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842849.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | --- |
| [List Operation](/refguide/list-operation/) |[BinaryListOperation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.BinaryListOperation.html) |
| |[Contains](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Contains.html) |
| |[Intersect](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Intersect.html) |
| |[ListEquals](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ListEquals.html) |
| |[Subtract](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Subtract.html) |
| |[Union](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.Union.html) |

### Java Action Calls

Java action calls point to a specific Java action and have a parameter mapping with an expression for every parameter of the Java action.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582230.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | --- |
| [Call Java Action](/refguide/call-java-action/) |[JavaAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/javaactions.JavaAction.html) |
| |[JavaActionParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/javaactions.JavaActionParameter.html) |
| |[JavaActionCallAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.JavaActionCallAction.html) |
| |[JavaActionParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.JavaActionParameterMapping.html) |

### Logging

Logging actions target a single log node on a specific log level. The log message is parameterized.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16844080.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | --- |
| [Log Message](/refguide/log-message/) |[LogMessageAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.LogMessageAction.html) |
| |[LogLevel](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.LogLevel.html) |
| |[StringTemplate](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.StringTemplate.html) |
| |[TemplateArgument](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.TemplateArgument.html) |

### Importing and Exporting XML

XML import actions use an XML-to-domain mapping similar to web service response mappings.

XML export actions use a domain-to-XML mapping similar to web service request mappings.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582238.svg" class="no-border" >}}

Model SDK API docs

* [ImportXmlAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ImportXmlAction.html)
* [ResultHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ResultHandling.html)
* [ExportXmlAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.ExportXmlAction.html)
* [ExportMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/exportmappings.ExportMapping.html)
* [FileDocumentExport](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.FileDocumentExport.html)
* [VariableExport](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.VariableExport.html)

### Document Generation

Documents are generated from a document template. Such a template has parameters, which are mapped with a parameter mapping at each call site.

#### Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16844082.svg" class="no-border" >}}

| Studio Pro Guide | Model SDK API docs |
| --- | --- |
| [Generate Document](/refguide/generate-document/) |[GenerateDocumentAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.GenerateDocumentAction.html) |
| |[DocumentTemplate](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/documenttemplates.DocumentTemplate.html) |
| |[DocumentTemplateParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.DocumentTemplateParameterMapping.html) |
