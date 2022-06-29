---
title: "Microflows in the Mendix Metamodel"
url: /apidocs-mxsdk/mxsdk/microflows-metamodel/
weight: 4
---

## 1 Introduction

Microflows have parameters, a return type (the return value is defined in an object, see below), and allowed module roles. Rules are similar to microflows, but have rule parameters, and they do not have some Microflow-specific properties

### 1.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842814.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
The [Microflows](/refguide/microflows/) overview page | The [`microflows`](https://apidocs.rnd.mendix.com/modelsdk/latest/modules/microflows.html) package
[Microflow](/refguide/microflow/), technical information on properties of a microflow | [Microflow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.microflow.html)
[Rule](/refguide/rules/) | [Rule](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.rule.html)
[Parameter](/refguide/parameter/) | [MicroflowParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.microflowparameter.html)

### 1.2 Microflow & Rule Structure

Microflows consist of a collection of objects connected by flows. The objects represent activities, such as Object manipulation & retrieval, microflow calls, web service calls, etc. (details follow below).

For example, a simple microflow could consist of a start event, a single activity, and an end event. The microflow would then have three MicroflowObjects in its MicroflowObjectCollection, and would have two SequenceFlows. The first sequence flow would have the start event as its origin and the activity as its destination. The second sequence flow would have the activity as its origin, and the end event as its destination.

#### 1.2.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842811.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Activities](/refguide/activities/) | [MicroflowObjectCollection](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.microflowobjectcollection.html)
[Sequence Flow](/refguide/sequence-flow/) | [SequenceFlow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.sequenceflow.html)

### 1.3 Microflow Objects

There are several types of objects that can be added to a microflow. One type is `Activity`, which can either be a loop, or an action activity, which will execute a microflow action (see the next section for more details on different types of activities). Other microflow object types include start and end events, decisions and merges, annotations and parameters.

#### 1.3.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842852.svg" >}}

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582249.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Activities](/refguide/activities/) | [MicroflowParameterObject](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.microflowparameterobject.html), [Activity](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.activity.html)
[Start](/refguide/start-event/) and [End](/refguide/end-event/) events | [StartEvent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.startevent.html), [EndEvent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.endevent.html)
[Loop](/refguide/loop/)s, with [Break](/refguide/break-event/) and [Continue](/refguide/continue-event/) events | [LoopedActivity](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.loopedactivity.html), [BreakEvent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.breakevent.html), [ContinueEvent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.continueevent.html)
[Annotation](/refguide/annotation/) | [Annotation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.annotation.html)

### 1.4 Flows {#flows}

A microflow consists of objects that are connected by flows, specifically, `SequenceFlow`s. A flow has an origin and a destination, with which the order of objects in the microflow is defined.

A decision on an enumeration has a sequence flow for each enumeration value. In the meta model, this is represented by the case value of the sequence flows. Each sequence flow has an enumeration case value with `value` set to the corresponding enumeration case. Boolean decisions have two sequence flows, one for each of `true` and `false`, with each a corresponding case value.

Object type decisions have sequence flows for each specialization of the entity type on which is split. Each sequence flow has an inheritance case value with a specialization entity value.

Annotation flows are used to connect annotations to other microflow objects.

#### 1.4.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842853.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- 
[Sequence Flow](/refguide/sequence-flow/) | [Flow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.flow.html)
[Annotation flow](/refguide/annotation/#annotation-flow) | [SequenceFlow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.sequenceflow.html)
|[AnnotationFlow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.annotationflow.html)
|Properties [`origin`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.flow.html#origin) and [`destination`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.flow.html#destination) of Flow
|[CaseValue](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.casevalue.html) and its inheritance hierarchy

### 1.5 Decisions

The control flow in microflows is defined with decisions of two types: 

* **Decisions** – for Boolean or enumeration decisions
* **Object type decisions** – for control based on specialization entity types

Two paths of a control can be merged with a decision.

A decision conditionally splits on either an expression or a rule. In case of a rule, a call is made, similar to a microflow call, with a rule parameter mapping.

#### 1.5.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842854.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Decision](/refguide/decision/) |[ExclusiveSplit](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.exclusivesplit.html)
[Object Type Decision](/refguide/object-type-decision/) |[InheritanceSplit](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.inheritancesplit.html)
[Merge](/refguide/merge/) |[ExclusiveMerge](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.exclusivemerge.html)
[Rules](/refguide/rules/) |[ExpressionSplitCondition](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.expressionsplitcondition.html)
|[RuleSplitCondition](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.rulesplitcondition.html)
|[RuleCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.rulecall.html)
|[RuleCallParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.rulecallparametermapping.html)

## 2 Microflow Activities

### 2.1 Working with Objects

Objects can be manipulated in microflows through several activities. New objects can be created. Existing objects can be retrieved (see the next subsection for details). All objects can be updated or deleted. All changes (including creation and deletion) can be committed or rolled back.

Object attributes can be updated with a change action, both in a create action and in an update action.These actions have a list of items that describe which attribute or association is set, to a certain value.

#### 2.1.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582248.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Create Object](/refguide/create-object/) |[CreateObjectAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.createobjectaction.html) and [ChangeObjectAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.changeobjectaction.html) ([ChangeMembersAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.changemembersaction.html), [MemberChange](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.memberchange.html))
[Change Object](/refguide/change-object/) | [DeleteAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.deleteaction.html)
[Rollback Object](/refguide/rollback-object/) |[CommitAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.commitaction.html) and [RollbackAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.rollbackaction.html)

### 2.2 Retrieving Objects

A retrieve action is either an association-based retrieve or a database-based retrieve. An association-based retrieve points to a specific association and retrieves the relevant objects over that association. A database-based retrieve directly accesses the database and provides control over the XPath constraint, sorting of the retrieved objects and the range of objects to retrieve.

#### 2.2.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582244.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Retrieve](/refguide/retrieve/) |[RetrieveSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.retrievesource.html)
[XPath](/refguide/xpath/) constraints |[AssocationRetrieveSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.associationretrievesource.html)
|[DatabaseRetrieveSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.databaseretrievesource.html)
|[Range](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.range.html), [ConstantRange](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.constantrange.html) and [CustomRange](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.customrange.html)
|[SortItemList](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.sortitemlist.html) and [SortItem](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.sortitem.html)

### 2.3 Microflow Calls

Microflows can call other microflows by defining a mapping of expressions to parameters (of the called microflow).

#### 2.3.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842821.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Microflow Call](/refguide/microflow-call/) |[MicroflowCallAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.microflowcallaction.html)
|[MicroflowCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.microflowcall.html)
|[MicroflowCallParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.microflowcallparametermapping.html)

### 2.4 Web Client Activities

Microflows can trigger behavior in the browser: showing and closing pages, showing (popup) messages, providing validation feedback and triggering file downloads.

#### 2.4.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582245.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Show Page](/refguide/show-page/) and [Show Home Page](/refguide/show-home-page/) |[ShowPageAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.showpageaction.html) and [ShowHomePageAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.showhomepageaction.html)
[Close Page](/refguide/close-page/) |[CloseFormAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.closeformaction.html)
[Show Message](/refguide/show-message/) |[ShowMessageAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.showmessageaction.html)
[Validation Feedback](/refguide/validation-feedback/) |[ValidationFeedbackAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.validationfeedbackaction.html)
[Download File](/refguide/download-file/) |[DownloadFileAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.downloadfileaction.html)

### 2.5 App Service Calls

An app service call action points to a specific app service action (which is part of a consumed app service). The action call has a list of parameter mappings of app service action parameters to expressions.

#### 2.5.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842823.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[AppServiceCallAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.appservicecallaction.html)
|[AppServiceAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/appservices.appserviceaction.html)
|[AppServiceCallParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.appservicecallparametermapping.html)
|[AppServiceActionParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/appservices.appserviceactionparameter.html)

### 2.6 Web Service Calls

A web service call to an imported web service has an HTTP configuration, and a request and response handling configuration to map the request and response parameters of the third-party web service operation to Mendix app concepts.

#### 2.6.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842843.svg" >}}

See the following diagrams for details on the HTTP configuration, request handling, and response handling.

Studio Pro Guide | Model SDK API docs
--- | --- |
[Call Web Service](/refguide/call-web-service-action/) |[WebServiceCallAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.webservicecallaction.html)
|[HttpConfiguration](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.httpconfiguration.html)
|[RequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.requesthandling.html) and [ResultHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.resulthandling.html)

### 2.7 Web Service Calls – Request HTTP Configuration

An HTTP configuration has an optional custom endpoint location, authentication credentials, and optional HTTP headers.

#### 2.7.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842844.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Call Web Service](/refguide/call-web-service-action/) |[HttpConfiguration](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.httpconfiguration.html)
|[HttpHeaderEntry](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.httpheaderentry.html)

### 2.8 Web Service Calls – Request Handling

A web service operation request needs to be mapped from Mendix app concepts to the specifics of the web service operation. There are four different ways in which request handling can be configured. Each has its own specific configuration options.

1.  Export Mapping - The recommended option whenever you are sending complex XML objects (non-primitives) to a third party.
2.  Simple Parameter Mapping - Use this option when you are just sending primitive values to a third party. The argument can be any MicroflowExpression producing a value compatible with the parameter type. The ElementPath is a string representing the place in the element tree of the parameter in the XML message.
3.  Advanced Parameter Mapping - This is a combination of the above two mappings, starting one level deeper in the XML hierarchy than a regular export mapping. Use a MicroflowExpression for a primitive value and an ExportMapping for a complex one.
4.  Custom mapping - Specify the XML to be sent manually. Powerful yet dangerous.

#### 2.8.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582232.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Call Web Service](/refguide/call-web-service-action/) |[RequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.requesthandling.html)
|[SimpleRequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.simplerequesthandling.html) - [WebServiceOperationSimpleParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.webserviceoperationsimpleparametermapping.html)
|[AdvancedRequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.advancedrequesthandling.html) - [WebServiceOperationAdvancedParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.webserviceoperationadvancedparametermapping.html)
|[MappingRequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.mappingrequesthandling.html)
|[CustomRequestHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.customrequesthandling.html)

### 2.9 Web Service Calls – Response Handling

The result of a web service operation needs to be mapped to Mendix app concepts with an import mapping call which uses an import mapping. The range of objects to map can also be controlled.

#### 2.9.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842842.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Call Web Service](/refguide/call-web-service-action/) |[ResultHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.resulthandling.html)
|[ImportMappingCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.importmappingcall.html)
|[ImportMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/importmappings.importmapping.html)
|[Range](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.range.html)

### 2.10 Variables

Microflow variables can be created and changed with specific actions. A create variable action also has a data type to indicate the type of the newly created variable.

#### 2.10.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842846.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Create Variable](/refguide/create-variable/) |[CreateVariableAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.createvariableaction.html)
[Change Variable](/refguide/change-variable/) |[ChangeVariableAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.changevariableaction.html)

### 2.11 Lists

Lists can be created, changed and deleted with specific actions. List aggregation actions have a specific function (for example, sum or average). List operations can also be executed, see the following sections for details.

#### 2.11.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582227.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Create List](/refguide/create-list/) |[CreateListAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.createlistaction.html)
[Change List](/refguide/change-list/) |[ChangeListAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.changelistaction.html)
[Aggregate List](/refguide/aggregate-list/) |[DeleteAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.deleteaction.html)
[List Operation](/refguide/list-operation/) |[AggregateListAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.aggregatelistaction.html)
|[ListOperationAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.listoperationaction.html) and [ListOperation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.listoperation.html)

### 2.12 Lists – Operations

Lists can be manipulated with different types of operations. Lists can be sorted, with a list of sorting items. Head and tail provide the first and remainder of a list, respectively. Find and filter respectively pick one and all elements of a list that adhere to some condition.

#### 2.12.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582228.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[List Operation](/refguide/list-operation/) |[ListOperation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.listoperation.html)
|[Head](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.head.html) and [Tail](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.tail.html)
|[Sort](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.sort.html), [SortItemList](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.sortitemlist.html) and [SortItem](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.sortitem.html)
|[Filter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.filter.html) and [Find](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.find.html)

### 2.13 Lists – Binary Operations

Lists can be manipulated with several binary operations, which take two lists as input.

#### 2.13.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16842849.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[List Operation](/refguide/list-operation/) |[BinaryListOperation](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.binarylistoperation.html)
|[Contains](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.contains.html)
|[Intersect](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.intersect.html)
|[ListEquals](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.listequals.html)
|[Subtract](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.subtract.html)
|[Union](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.union.html)

### 2.14 Java Action Calls

Java action calls point to a specific Java action and have a parameter mapping with an expression for every parameter of the Java action.

#### 2.15 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582230.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Java Action Call](/refguide/java-action-call/) |[JavaAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/javaactions.javaaction.html)
|[JavaActionParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/javaactions.javaactionparameter.html)
|[JavaActionCallAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.javaactioncallaction.html)
|[JavaActionParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.javaactionparametermapping.html)

### 2.16 Logging

Logging actions target a single log node on a specific log level. The log message is parameterized.

#### 2.16.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16844080.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Log Message](/refguide/log-message/) |[LogMessageAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.logmessageaction.html)
|[LogLevel](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.loglevel.html)
|[StringTemplate](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.stringtemplate.html)
|[TemplateArgument](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.templateargument.html)

### 2.17 Importing & Exporting XML

XML import actions use an XML-to-domain mapping similar to web service response mappings.

XML export actions use a domain-to-XML mapping similar to web service request mappings.

#### 2.17.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/18582238.svg" >}}

Model SDK API docs

*   [ImportXmlAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.importxmlaction.html)
*   [ResultHandling](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.resulthandling.html)
*   [ExportXmlAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.exportxmlaction.html)
*   [ExportMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/exportmappings.exportmapping.html)
*   [FileDocumentExport](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.filedocumentexport.html)
*   [VariableExport](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.variableexport.html)

### 2.18 Document Generation

Documents are generated from a document template. Such a template has parameters, which are mapped with a parameter mapping at each call site.

#### 2.18.1 Graphical Overview

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/microflows-metamodel/16844082.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Generate Document](/refguide/generate-document/) |[GenerateDocumentAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.generatedocumentaction.html)
|[DocumentTemplate](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/documenttemplates.documenttemplate.html)
|[DocumentTemplateParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/microflows.documenttemplateparametermapping.html)
