---
title: "Teamcenter Connector Reference"
url: /appstore/modules/siemens-plm/teamcenter-reference/
weight: 8
description: "Lists and describes the Teamcenter Connector reference parameters."
---

## Domain model

### Entities

| Name | Generalization | Documentation |
| --- | --- | --- |
| `TcSession` |  | Represents the data required for maintaining a session with a Teamcenter server. |
| `Cookie` |  | HTTP Cookie |
| `SoaServiceRequest` |  | This entity is used by TcConnector published APIs internally. |
| `Credentials` |  | Credentials of the Teamcenter user. |
| `TcServerInfo` |  | Entity to store the Teamcenter server information.  <br>(Deprecated) |
|  `BaseCreateInput` |  | An input entity representing the createInputs key for forming request for the Core-2015-07-DataManagement/createRelateAndSubmitObjects2 Teamcenter service.  <br>  <br>This is an abstract entity representing object properties common across Teamcenter types. |
| `CreateInput` | TcConnector.BaseCreateInput | Represents input entity for Core-2015-07-DataManagement/createRelateAndSubmitObjects2 Teamcenter service. |
| `CompndCreateInput` | TcConnector.BaseCreateInput | Input entity representing the createInputs/compoundCreateInput key for forming request for the Core-2015-07-DataManagement/createRelateAndSubmitObjects2 Teamcenter service.  <br>  <br>This entity holds type referenced property name available on the CreateInput descriptor of the business object type. |
| `ItemCreateInput` | TcConnector.CreateInput | Input entity representing the createInputs key for forming request for the Core-2015-07-DataManagement/createRelateAndSubmitObjects2 Teamcenter service for creating Teamcenter Item.  <br>  <br>This entity can only have the properties available on CreateInput descriptor of the business object type Item. |
| `ItemRevisionCompoundCreateInput` | TcConnector.CompndCreateInput | Input entity representing the createInputs/compoundCreateInput key for forming request for the Core-2015-07-DataManagement/createRelateAndSubmitObjects2 Teamcenter service for creating Teamcenter Item.  <br>  <br>This entity holds the name of the type of Item Revision business object to be created. It has the same properties as available on CreateInput descriptor of the ItemRevision type. |
| `ModelObject` |  | Represents an abstract entity representing a Teamcenter business object. |
| `Property` |  | Represents name of the property. |
| `PropertyValue` |  | Represents value of the property |
| `User` | TcConnector.ModelObject | Represents the User business object type from Teamcenter. |
| `ServiceData` |  | ServiceData is part of ServiceResponse, It contains information regarding created, updated and deleted objects. It also has partial error information. |
| `UID` |  | Represents unique identifier for Teamcenter business object. |
| `ItemRevision` | TcConnector.WorkspaceObject | Represents the ItemRevision business object type from Teamcenter. |
| `WorkspaceObject` | TcConnector.POM_application_object | Represents the Workspaceobject business object type from Teamcenter. |
| `POM_application_object` | TcConnector.ModelObject | Represents the POM_application_object business object type from Teamcenter. |
| `Pair` |  | Represents name value pair. |
| `SearchInput` |  | Input entity for the Query-2014-11-Finder/performSearch Teamcenter service. |
| `SearchCriteriaInput` |  | The criteria used to perform search (string/string). For example, for object set search, the search criteria are parentUid and object set source string. |
| `FindSavedQueryInput` |  | Input entity for the Query-2010-04-SavedQuery/findSavedQueries Teamcenter service. |
| `SearchCriteria_SavedQuery` | TcConnector.SearchCriteriaInput | Represents common search criteria for saved queries.  <br>This is active workspace provider |
| `GeneralQuery` | TcConnector.SearchCriteria_SavedQuery | Represents input criteria for General Query.  <br>This entity is used for the active workspace provider. |
| `ItemSimpleQuery` | TcConnector.SearchCriteria_SavedQuery | Represents input criteria for Item Simple Query.  <br>This entity is used for the active workspace provider. |
| `ImanQuery` | TcConnector.POM_application_object | Represents the ImanQuery business object type from Teamcenter. |
| `Item` | TcConnector.WorkspaceObject | Represents the Item business object type from Teamcenter. |
| `ListOfModelObject` |  | Represents a list of ModelObjects. This list is introduced to access objects to be displayed on the page through association. |
| `Group` | TcConnector.ModelObject | Represents the Group business object type from Teamcenter. |
| `ReviseInputs` |  | Input entity for the Core-2013-05-DataManagement/reviseObjects Teamcenter service. |
| `ReviseItemRevision` | TcConnector.ReviseInputs | Map of property name (key) and property values (values) in string format, to be set on new object being created with revise. |
| `TeamcenterConfiguration` |  | Entity to store the Teamcenter configuration. |
| `Dataset` | TcConnector.WorkspaceObject | Represents the Dataset business object type in Teamcenter. |
| `PSBOMView` | TcConnector.WorkspaceObject | Represents the PSBOMView business object type from Teamcenter. |
| `RevisionRule` | TcConnector.WorkspaceObject | Represents the RevisionRule business object type from Teamcenter. |
| `BOMLine` | TcConnector.ModelObject | Represents the BOMLine business object type in Teamcenter. |
| `CreateRelationInput` |  | Input entity for the Core-2006-03-DataManagement/createRelations Teamcenter service.  <br>Primary object, Secondary object and RelationType is input for the service. |
| `SessionUser` | TcConnector.User | Represents the Teamcenter session user.  <br>(Deprecated) |
| `ServiceResponse` |  | Represents an abstract entity representing a Teamcenter service response. |
| `SearchResponse` | TcConnector.ServiceResponse | Response entity for the Query-2014-11-Finder/performSearch Teamcenter service. |
| `ErrorStack` |  | Represents the Teamcenter error stack. |
| `ImanRelation` | TcConnector.POM_application_object | Represents the ImanRelation business object type from Teamcenter. |
| `CreateRelationResponse` | TcConnector.ServiceResponse | Entity representing a response returned by the Core-2006-03-DataManagement/createRelations Teamcenter service.  <br>  <br>Created relation is output of the service and can be retrieved using TcConnector.relation association with this entity. |
| `FindSavedQueryResponse` | TcConnector.ServiceResponse | Response entity for the Query-2010-04-SavedQuery/findSavedQueries Teamcenter service. |
| `ReviseObjectsResponse` | TcConnector.ServiceResponse | Response entity for the Core-2013-05-DataManagement/reviseObjects Teamcenter service. |
| `ReviseOutputResponse` |  | The target object and the newly created revised objects. |
| `ReviseTreesResponse` |  | List corresponding to the input target objects that holds mapping between the original objects and the copied objects. |
| `CreateBomWindowInput` |  | Input entity for Cad-2007-01-StructureManagement/createBOMWindows Teamcenter service.  <br>Item Revision and Revision Rule is input for the service. |
| `CreateBomWindowResponse` | TcConnector.ServiceResponse | Response entity for Cad-2007-01-StructureManagement/createBOMWindows Teamcenter service.  <br>BOMLine entity is the output for the service. |
| `ExpandPSOneLevelInput` |  | Input entity for the Cad-2007-01-StructureManagement/expandPSOneLevel Teamcenter service.  <br>BOMLine is input for the service. |
| `ExpandPSOneLevelResponse` | TcConnector.ServiceResponse | Response entity for the Cad-2007-01-StructureManagement/expandPSOneLevel Teamcenter service.  <br>First level children (as list of BOMLines) of given parent BOMLines is the output of the service. |
| `ReleaseStatus` | TcConnector.ModelObject | Represents the release status maturity of a WorkspaceObject. ReleaseStatus adds effectivity information used by Teamcenter assembly features for configuration. |
| `FileDocument` | System.FileDocument | Represents the subtype of System.FileDocument object. |
| `SavedGeneralQuery` |  | Represents the input criteria for General Query. |
| `SavedItemSimpleQuery` |  | Represents the input criteria for Item Simple Query. |
| `BOMWindow` | TcConnector.ModelObject | Represents the BOMWindow business object type in Teamcenter. |
| `Relation_BOMLine` |  | Dataset object references attached by given relation name are returned. |
| `ChildrenObject` |  | List of ExpandPSData children found for the associated parent. |
| `GetRevisionRulesResponse` | TcConnector.ServiceResponse | Response entity for the Cad-2007-01-StructureManagement/getRevisionRules Teamcenter service.  <br>It contains RevisionRuleInfo |
| `RevisionRulesResponseOutput` |  | List of RevisionRuleInfo which contains Revision rule. |
| `CreateWorkflowInput` |  | Input entity for Workflow-2014-10-Workflow/createWorkflow Teamcenter service. |
| `CreateWorkflowResponse` | TcConnector.ServiceResponse | Response entity for Workflow-2014-10-Workflow/createWorkflow Teamcenter service. |
| `EPMTask` | TcConnector.WorkspaceObject | Represents the EPMTask business object type from Teamcenter. |
| `createWorkflowtRelationTypes` |  | Entity to represent Attachment Relation Types, This has association with CreateWorkflowInput entity. |
| `GetAllTasksInput` |  | Input entity for Workflow-2008-06-Workflow/getAllTasks Teamcenter service. |
| `EPMJob` | TcConnector.WorkspaceObject | Represents the EPMJob business object type from Teamcenter. |
| `GetAllTasksResponse` | TcConnector.ServiceResponse | Response entity for Workflow-2008-06-Workflow/getAllTasks Teamcenter service. |
| `PerformActionInput` |  | Input entity for Workflow-2012-10-Workflow/performAction2 Teamcenter service. |
| `StringObject]` |  | Entity represnt the the string array in the response. |
| `IntegerObject` |  | Entity represnt the the integer array in the response. |
| `UpdatedPropertiesInput` |  | List of PropInfo structure which consists of information about the objects and the property values to set. |
| `ValuesInput` |  | Values of the property |
| `FindUsersTasksResponse` | TcConnector.ServiceResponse | Response entity for FindUsersTasksTeamcenter service. |
| `TaskInbox` | TcConnector.WorkspaceObject | Represents the TaskInbox business object type from Teamcenter. |
| `GetWorkflowTemplatesInput` |  | Input entity for Workflow-2008-06-Workflow/getWorkflowTemplates Teamcenter service. |
| `GetWorkflowTemplatesResponse` | TcConnector.ServiceResponse | Response entity for Workflow-2008-06-Workflow/getWorkflowTemplates Teamcenter service. |
| `EPMTaskTemplate` | TcConnector.POM_application_object | Represents the EPMTaskTemplate business object type from Teamcenter. |
| `TC_Project` | TcConnector.POM_application_object | Represents the TC_Project business object type from Teamcenter. |
| `VariantRule` | TcConnector.WorkspaceObject | Represents the VariantRule business object type from Teamcenter. |
| `ConfigurationContext` | TcConnector.WorkspaceObject | Represents the ConfigurationContext business object type from Teamcenter. |
| `BomWindowPropFlagMap` |  | Map of property name (key) and property values (values) in string format, to be set on info input to create BOM window. |
| `ParentObject` |  | List of ExpandPSData children found for the associated parent. |
| `ExpandPSAllLevelsOutput` |  | Response entity for the Cad-2007-01-StructureManagement/expandPSOneLevel Teamcenter service.  <br>First level children (as list of BOMLines) of given parent BOMLines is the output of the service. |
| `ExpandPSAllLevelsResponse` | TcConnector.ServiceResponse | Response entity for the Cad-2007-01-StructureManagement/expandPSOneLevel Teamcenter service.  <br>First level children (as list of BOMLines) of given parent BOMLines is the output of the service. |
| `TcServerInformation` | TcConnector.ServiceResponse | Entity to store the Teamcenter server information which is response entity for Core-2007-01-Session/getTCSessionInfo teamcenter service |
| `ExtraInfo` |  | Represents additional teamcenter session infomation. |
| `Role` | TcConnector.POM_application_object | Represents the Role business object type from Teamcenter. |
| `PSBOMViewRevision` | TcConnector.WorkspaceObject |  |
| `CloseBOMWindowslInput` |  |  |
| `HomePage` |  |  |
| `GetItemFromIdResponse` | TcConnector.ServiceResponse |  |
| `ItemRevisionOutput` |  |  |
| `GetItemFromIdInput` |  |  |
| `RevisionIDs` |  |  |
| `ObjectTypeNames` |  |  |
| `ExpandGRMInput` |  |  |
| `ExpandGRMResponse` | TcConnector.ServiceResponse |  |
| `Relation__` |  |  |
| `relationshipObject` |  |  |
| `RootTargetAttachments` | TcConnector.WorkspaceObject |  |
| `ExpandPSOneLevel2Input` |  |  |
| `ExpandPSOneLevel2Response` | TcConnector.ServiceResponse |  |
| `ParentChildWrapper` |  |  |
| `Parent__` |  |  |
| `Child` |  |  |
| `relatedObjectsEntity` |  |  |
| `namedRefListEntity` |  |  |
| `ExpandBOMParentChild` |  |  |
| `WhereUsedInput` |  |  |
| `WhereUsedResponseInfo` |  |  |
| `BooleanObject` |  |  |
| `GetInitialLOVValuesInputEntity` |  |  |
| `LovInputEntity` |  |  |
| `LOVFilterDataInputEntity` |  |  |
| `GetLOVValuesResponse` | TcConnector.ServiceResponse |  |
| `LOVDataEntity` |  |  |
| `LOVValuesEntity` |  |  |
| `LOVInternalValue` |  |  |
| `LOVInternalValueType` |  |  |
| `LOVDisplayValue` |  |  |
| `LOVFilterDataOutputEntity` |  |  |
| `ListOfValues` | TcConnector.ModelObject |  |
| `DummyModelObject` | TcConnector.ModelObject |  |
| `ImanFile` |  |  |
| `Image` | System.Image |  |
| `OAuthToken` |  |  |

#### Entity `TcSession`

Represents the data required for maintaining a session with a Teamcenter server.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| HostAddress | String (200) |  | The HTTP(S) address of the Teamcenter server. |
| UserName | String (50) |  | The Teamcenter user name for this session. |
| RequestCount | Long | 1 | Sequential count of service requests made to the Teamcenter server. This is used for creating the unique log correlation ID. |
| SSOEnabled | Boolean | false |  |
| SSORedirectURL | String (1024) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| TeamcenterSession | System.Session | OneToMany |  |

#### Entity `Cookie`

HTTP Cookie

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| Name | String (200) |  | The cookie name |
| Value | String (200) |  | The cookie value |
| Path | String (200) | / | The relative path to be applied to the cookie on subsequent requests |
| Secure | Boolean | false | If true the cookie should only be used on secure (HTTPS) requests. |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| Cookies | TcConnector.TcSession | OneToMany |  |

#### Entity `SoaServiceRequest`

This entity is used by TcConnector published APIs internally.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| ServiceURL | String (200) |  |  |
| Cookies | String (2000) |  |  |
| LogCorrelationID | String (1000) |  |  |
| Body | String (unlimited) |  |  |

##### Associations

Entity `SoaServiceRequest` does not own any associations.

#### Entity `Credentials`

Credentials of the Teamcenter user.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| user | String (200) |  | The Teamcenter user name of the user. |
| password | String (2048) |  | The Teamcenter password or SSO token of the user. |
| group | String (200) |  | The group ID for this session. |
| role | String (200) |  | The role the user is performing in the group. |
| locale | String (20) |  | The locale to be used by the Teamcenter server process for this session. |
| descrimator | String (200) |  | Client defined identifier for this session. |
| LastError | String (2000) |  |  |

##### Associations

Entity `Credentials` does not own any associations.

#### Entity `TcServerInfo`

Entity to store the Teamcenter server information.  
(Deprecated)

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| Version | String (200) |  |  |
| Group | String (200) |  |  |
| Syslog | String (200) |  |  |
| ServerID | String (200) |  |  |
| Locale | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| _user | TcConnector.TcServerInfo | OneToOne |  |

#### Entity `BaseCreateInput`

An input entity representing the createInputs key for forming request for the Core-2015-07-DataManagement/createRelateAndSubmitObjects2 Teamcenter service.  
  
This is an abstract entity representing object properties common across Teamcenter types.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| __boName | String (200) |  | Type name of the business object. |
| object_name | String (128) |  | Name of the Teamcenter business object to be created. |
| object_desc | String (240) |  | Description of the Teamcenter business object to be created. |

##### Associations

Entity `BaseCreateInput` does not own any associations.

#### Entity `CreateInput`

Represents input entity for Core-2015-07-DataManagement/createRelateAndSubmitObjects2 Teamcenter service.

##### Generalization

TcConnector.BaseCreateInput

##### Attributes

Entity `CreateInput` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| compoundCreateInput__0 | TcConnector.CompndCreateInput | OneToOne |  |

#### Entity `CompndCreateInput`

Input entity representing the createInputs/compoundCreateInput key for forming request for the Core-2015-07-DataManagement/createRelateAndSubmitObjects2 Teamcenter service.  
  
This entity holds type referenced property name available on the CreateInput descriptor of the business object type.

##### Generalization

TcConnector.BaseCreateInput

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| __referencePropName | String (200) |  | This entity holds type referenced property name available on the CreateInput descriptor of the Teamcenter business object type. |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| compoundCreateInput__0 | TcConnector.CompndCreateInput | OneToOne |  |

#### Entity `ItemCreateInput`

Input entity representing the createInputs key for forming request for the Core-2015-07-DataManagement/createRelateAndSubmitObjects2 Teamcenter service for creating Teamcenter Item.  
  
This entity can only have the properties available on CreateInput descriptor of the business object type Item.

##### Generalization

TcConnector.CreateInput

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| item_id | String (128) |  | Identifier of the Teamcenter Item to be created. |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| compoundCreateInput__0 | TcConnector.CompndCreateInput | OneToOne |  |

#### Entity `ItemRevisionCompoundCreateInput`

Input entity representing the createInputs/compoundCreateInput key for forming request for the Core-2015-07-DataManagement/createRelateAndSubmitObjects2 Teamcenter service for creating Teamcenter Item.  
  
This entity holds the name of the type of Item Revision business object to be created. It has the same properties as available on CreateInput descriptor of the ItemRevision type.

##### Generalization

TcConnector.CompndCreateInput

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| item_revision_id | String (32) |  | Revision Identifier of the Teamcenter Item Revision to be created. |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| compoundCreateInput__0 | TcConnector.CompndCreateInput | OneToOne |  |

#### Entity `ModelObject`

Represents an abstract entity representing a Teamcenter business object.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| UID | String (1000) |  |  |
| _Type | String (200) |  |  |
| ClassName | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `Property`

Represents name of the property.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| Name | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| Properties | TcConnector.ModelObject | OneToMany |  |
| Property_Property | TcConnector.Property | OneToMany |  |

#### Entity `PropertyValue`

Represents value of the property

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| Value | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| UIValues | TcConnector.Property | OneToMany |  |
| DBValues | TcConnector.Property | OneToMany |  |

#### Entity `User`

Represents the User business object type from Teamcenter.

##### Generalization

TcConnector.ModelObject

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| person | String (200) |  |  |
| userid | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| workflowOwner | TcConnector.CreateWorkflowInput | OneToOne |  |
| taskinbox__ | TcConnector.TaskInbox | OneToOne |  |
| user__ | TcConnector.User | OneToOne |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `ServiceData`

ServiceData is part of ServiceResponse, It contains information regarding created, updated and deleted objects. It also has partial error information.

##### Attributes

Entity `ServiceData` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `UID`

Represents unique identifier for Teamcenter business object.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| UID | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| Deleted | TcConnector.ServiceData | OneToMany |  |

#### Entity `ItemRevision`

Represents the ItemRevision business object type from Teamcenter.

##### Generalization

TcConnector.WorkspaceObject

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| item_id | String (128) |  |  |
| item_revision_id | String (32) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| items_tag | TcConnector.ItemRevision | OneToOne |  |
| itemRev__BOMWindow | TcConnector.ItemRevision | OneToOne | ItemRevision object reference. |
| itemRevOfBOMLine | TcConnector.ItemRevision | OneToOne |  |
| itemRevOfBOMLine__Parent | TcConnector.ItemRevision | OneToOne |  |
| parentItemRev | TcConnector.WhereUsedResponseInfo | OneToOne |  |
| bl_revision | TcConnector.ItemRevision | OneToOne |  |
| checked_out_user | TcConnector.User | OneToMany |  |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `WorkspaceObject`

Represents the Workspaceobject business object type from Teamcenter.

##### Generalization

TcConnector.POM_application_object

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| object_name | String (128) |  |  |
| object_desc | String (240) |  |  |
| date_released | Date and time |  |  |
| checked_out | String (200) |  |  |
| checked_out_date | Date and time |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| checked_out_user | TcConnector.User | OneToMany |  |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `POM_application_object`

Represents the POM_application_object business object type from Teamcenter.

##### Generalization

TcConnector.ModelObject

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| creation_date | Date and time |  |  |
| last_mod_date | Date and time |  |  |
| object_string | String (4000) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `Pair`

Represents name value pair.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| Name | String (unlimited) |  |  |
| Value | String (unlimited) |  |  |

##### Associations

Entity `Pair` does not own any associations.

#### Entity `SearchInput`

Input entity for the Query-2014-11-Finder/performSearch Teamcenter service.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| providerName | String (200) | Awp0SavedQuerySearchProvider |  |
| startIndex | Integer | 0 |  |
| maxToLoad | Integer | 50 |  |
| internalPropertyName | String (200) | `` |  |
| maxToReturn | Integer | 50 |  |
| searchFilterFieldSortType | String (200) | Priority |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| searchCriteria | TcConnector.SearchCriteriaInput | OneToOne |  |

#### Entity `SearchCriteriaInput`

The criteria used to perform search (string/string). For example, for object set search, the search criteria are parentUid and object set source string.

##### Attributes

Entity `SearchCriteriaInput` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| searchCriteria | TcConnector.SearchCriteriaInput | OneToOne |  |

#### Entity `FindSavedQueryInput`

Input entity for the Query-2010-04-SavedQuery/findSavedQueries Teamcenter service.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| queryNames | String (200) |  |  |

##### Associations

Entity `FindSavedQueryInput` does not own any associations.

#### Entity `SearchCriteria_SavedQuery`

Represents common search criteria for saved queries.  
This is active workspace provider

##### Generalization

TcConnector.SearchCriteriaInput

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| utcOffset | String (200) | 330 |  |
| searchID | String (200) | `` |  |
| totalObjectsFoundReportedToClient | String (200) | `` |  |
| lastEndIndex | String (200) | `` |  |
| typeOfSearch | String (200) | ADVANCED_SEARCH |  |
| queryUID | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| searchCriteria | TcConnector.SearchCriteriaInput | OneToOne |  |

#### Entity `GeneralQuery`

Represents input criteria for General Query.  
This entity is used for the active workspace provider.

##### Generalization

TcConnector.SearchCriteria_SavedQuery

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| Name | String (200) |  |  |
| Description | String (200) |  |  |
| _Type | String (200) |  |  |
| OwningUser | String (200) |  |  |
| OwningGroup | String (200) |  |  |
| CreatedAfter | Date and time |  |  |
| CreatedBefore | Date and time |  |  |
| ModifiedAfter | Date and time |  |  |
| ModifiedBefore | Date and time |  |  |
| ReleasedAfter | Date and time |  |  |
| ReleasedBefore | Date and time |  |  |
| WorkflowTemplateName | String (200) |  |  |
| CurrentTask | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| searchCriteria | TcConnector.SearchCriteriaInput | OneToOne |  |

#### Entity `ItemSimpleQuery`

Represents input criteria for Item Simple Query.  
This entity is used for the active workspace provider.

##### Generalization

TcConnector.SearchCriteria_SavedQuery

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| Name | String (200) |  |  |
| ItemID | String (200) |  |  |
| Description | String (200) |  |  |
| _Type | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| searchCriteria | TcConnector.SearchCriteriaInput | OneToOne |  |

#### Entity `ImanQuery`

Represents the ImanQuery business object type from Teamcenter.

##### Generalization

TcConnector.POM_application_object

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| query_name | String (128) |  |  |
| query_desc | String (512) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| savedQueries | TcConnector.FindSavedQueryResponse | OneToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `Item`

Represents the Item business object type from Teamcenter.

##### Generalization

TcConnector.WorkspaceObject

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| item_id | String (128) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| items_tag | TcConnector.ItemRevision | OneToOne |  |
| checked_out_user | TcConnector.User | OneToMany |  |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `ListOfModelObject`

Represents a list of ModelObjects. This list is introduced to access objects to be displayed on the page through association.

##### Attributes

Entity `ListOfModelObject` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| PrimaryOrSecondaryObjects | TcConnector.ListOfModelObject | OneToOne |  |

#### Entity `Group`

Represents the Group business object type from Teamcenter.

##### Generalization

TcConnector.ModelObject

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| name | String (128) |  |  |
| roles | String (unlimited) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| group__ | TcConnector.Group | OneToOne |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `ReviseInputs`

Input entity for the Core-2013-05-DataManagement/reviseObjects Teamcenter service.

##### Attributes

Entity `ReviseInputs` has no attributes.

##### Associations

Entity `ReviseInputs` does not own any associations.

#### Entity `ReviseItemRevision`

Map of property name (key) and property values (values) in string format, to be set on new object being created with revise.

##### Generalization

TcConnector.ReviseInputs

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| item_revision_id | String (200) |  |  |
| object_name | String (200) |  |  |
| object_desc | String (200) |  |  |

##### Associations

Entity `ReviseItemRevision` does not own any associations.

#### Entity `TeamcenterConfiguration`

Entity to store the Teamcenter configuration.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| ConfigName | String (200) |  |  |
| TCURL | String (200) |  | Teamcenter URL |
| FMSURL | String (200) |  |  |
| SSOEnabled | Boolean | false |  |
| SSOLoginURL | String (200) |  |  |
| SSOIdentityURL | String (200) |  |  |
| SSOTCAppId | String (200) |  |  |
| SSOMendixAppId | String (200) |  |  |
| Active | Boolean | false |  |
| IsTcX | Boolean | false |  |
| TcxClientId | String (200) |  |  |
| TokenExchangeClientId | String (200) |  |  |
| TokenExchangeClientSecret | String (200) |  |  |
| TokenExchTokenEndPt | String (unlimited) |  |  |

##### Associations

Entity `TeamcenterConfiguration` does not own any associations.

#### Entity `Dataset`

Represents the Dataset business object type in Teamcenter.

##### Generalization

TcConnector.WorkspaceObject

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| dataset_type | String (32) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| datasets | TcConnector.ChildrenObject | OneToMany |  |
| parentDatasets | TcConnector.ParentObject | OneToMany |  |
| Documents | TcConnector.FileDocument | ManyToMany |  |
| datasets__ | TcConnector.ItemRevisionOutput | OneToMany |  |
| relatedObject | TcConnector.relatedObjectsEntity | OneToOne |  |
| Images | TcConnector.Image | ManyToMany |  |
| checked_out_user | TcConnector.User | OneToMany |  |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `PSBOMView`

Represents the PSBOMView business object type from Teamcenter.

##### Generalization

TcConnector.WorkspaceObject

##### Attributes

Entity `PSBOMView` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| bom_view | TcConnector.PSBOMView | OneToOne |  |
| checked_out_user | TcConnector.User | OneToMany |  |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `RevisionRule`

Represents the RevisionRule business object type from Teamcenter.

##### Generalization

TcConnector.WorkspaceObject

##### Attributes

Entity `RevisionRule` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| revRule__BOMWindow | TcConnector.RevisionRule | OneToOne | The RevisionRule object used for configuration of this BOMWindow object. |
| revRule | TcConnector.RevisionRule | OneToOne |  |
| rule | TcConnector.WhereUsedInput | OneToOne |  |
| revision_rule | TcConnector.RevisionRule | OneToOne |  |
| checked_out_user | TcConnector.User | OneToMany |  |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `BOMLine`

Represents the BOMLine business object type in Teamcenter.

##### Generalization

TcConnector.ModelObject

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| object_string | String (4000) |  | Stores the Display Name value of the business objects. |
| bl_rev_object_name | String (200) |  |  |
| bl_has_children | Boolean | false | Has children? |
| bl_quantity | String (200) |  | Quantity. Value is integer if unit of measure of the line is each. Quantities of packed lines are accumulated to the master line. |
| bl_variant_state | String (200) |  |  |
| bl_plmxml_abs_xform | String (1000) |  |  |
| bl_item_item_revision | String (400) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| bomLine__BOMWindow | TcConnector.CreateBomWindowResponse | OneToOne | Object reference for the created BOMLine |
| bomLine__ExpandPSOneLevel | TcConnector.BOMLine | OneToOne |  |
| bomLine__ExpandPSAllLevel | TcConnector.BOMLine | OneToOne |  |
| bomLine__Parent | TcConnector.Parent__ | OneToOne |  |
| BOMLineAttachments | TcConnector.FileDocument | ManyToMany |  |
| bomLine__Child | TcConnector.Child | OneToOne |  |
| ChildBOMLines | TcConnector.ExpandBOMParentChild | OneToMany |  |
| ParentBOMLIne | TcConnector.ExpandBOMParentChild | OneToOne |  |
| bl_revision | TcConnector.ItemRevision | OneToOne |  |
| top_line | TcConnector.BOMLine | OneToOne |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `CreateRelationInput`

Input entity for the Core-2006-03-DataManagement/createRelations Teamcenter service.  
Primary object, Secondary object and RelationType is input for the service.  

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| relationType | String (200) |  | Name of the relation type to create. |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |

#### Entity `SessionUser`

Represents the Teamcenter session user.  
(Deprecated)

##### Generalization

TcConnector.User

##### Attributes

Entity `SessionUser` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| _user | TcConnector.TcServerInfo | OneToOne |  |
| workflowOwner | TcConnector.CreateWorkflowInput | OneToOne |  |
| taskinbox__ | TcConnector.TaskInbox | OneToOne |  |
| user__ | TcConnector.User | OneToOne |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `ServiceResponse`

Represents an abstract entity representing a Teamcenter service response.

##### Attributes

Entity `ServiceResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `SearchResponse`

Response entity for the Query-2014-11-Finder/performSearch Teamcenter service.

##### Generalization

TcConnector.ServiceResponse

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| totalFound | Integer | 0 |  |
| totalLoaded | Integer | 0 |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `ErrorStack`

Represents the Teamcenter error stack.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| ClientID | String (200) |  |  |
| ClientIndex | Integer | 0 |  |
| Code | Integer | 0 |  |
| Level | Integer | 0 |  |
| Message | String (unlimited) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| PartialErrors | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |

#### Entity `ImanRelation`

Represents the ImanRelation business object type from Teamcenter.

##### Generalization

TcConnector.POM_application_object

##### Attributes

Entity `ImanRelation` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| relation | TcConnector.CreateRelationResponse | OneToMany | The newly created relation. |
| primary_object | TcConnector.ImanRelation | OneToOne |  |
| secondary_object | TcConnector.ImanRelation | OneToOne |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `CreateRelationResponse`

Entity representing a response returned by the Core-2006-03-DataManagement/createRelations Teamcenter service.  
  
Created relation is output of the service and can be retrieved using TcConnector.relation association with this entity.

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `CreateRelationResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `FindSavedQueryResponse`

Response entity for the Query-2010-04-SavedQuery/findSavedQueries Teamcenter service.

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `FindSavedQueryResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `ReviseObjectsResponse`

Response entity for the Core-2013-05-DataManagement/reviseObjects Teamcenter service.

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `ReviseObjectsResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `ReviseOutputResponse`

The target object and the newly created revised objects.

##### Attributes

Entity `ReviseOutputResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| output | TcConnector.ReviseObjectsResponse | OneToMany |  |

#### Entity `ReviseTreesResponse`

List corresponding to the input target objects that holds mapping between the original objects and the copied objects.

##### Attributes

Entity `ReviseTreesResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| reviseTrees | TcConnector.ReviseObjectsResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| childReviseNodes | TcConnector.ReviseTreesResponse | OneToMany |  |

#### Entity `CreateBomWindowInput`

Input entity for Cad-2007-01-StructureManagement/createBOMWindows Teamcenter service.  
Item Revision and Revision Rule is input for the service.

##### Attributes

Entity `CreateBomWindowInput` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| itemRev__BOMWindow | TcConnector.ItemRevision | OneToOne | ItemRevision object reference. |
| revRule__BOMWindow | TcConnector.RevisionRule | OneToOne | The RevisionRule object used for configuration of this BOMWindow object. |
| configContext | TcConnector.CreateBomWindowInput | OneToOne |  |
| bomWinPropFlagMap | TcConnector.BomWindowPropFlagMap | OneToOne |  |
| CreateBomWindowInput_CreateBomWindowResponse | TcConnector.CreateBomWindowResponse | OneToOne |  |

#### Entity `CreateBomWindowResponse`

Response entity for Cad-2007-01-StructureManagement/createBOMWindows Teamcenter service.  
BOMLine entity is the output for the service.

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `CreateBomWindowResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| bomLine__BOMWindow | TcConnector.CreateBomWindowResponse | OneToOne | Object reference for the created BOMLine |
| bomWindow__BOMWindow | TcConnector.BOMWindow | OneToOne |  |
| CreateBomWindowInput_CreateBomWindowResponse | TcConnector.CreateBomWindowResponse | OneToOne |  |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `ExpandPSOneLevelInput`

Input entity for the Cad-2007-01-StructureManagement/expandPSOneLevel Teamcenter service.  
BOMLine is input for the service.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| RelationName | String (200) |  |  |

##### Associations

Entity `ExpandPSOneLevelInput` does not own any associations.

#### Entity `ExpandPSOneLevelResponse`

Response entity for the Cad-2007-01-StructureManagement/expandPSOneLevel Teamcenter service.  
First level children (as list of BOMLines) of given parent BOMLines is the output of the service.

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `ExpandPSOneLevelResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `ReleaseStatus`

Represents the release status maturity of a WorkspaceObject. ReleaseStatus adds effectivity information used by Teamcenter assembly features for configuration.

##### Generalization

TcConnector.ModelObject

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| name | String (32) |  |  |
| effectivity_text | String (1000) |  | The property “effectivity_text” is a runtime string which represents the start to end effectivity of the “ReleaseStatus” object. “effectivity_text” will be displayed in an easy to understand format so that the user can easily identify the start date and end date effectivity of the “ReleaseStatus” object. “effectivity_text” will also display the start serial number and end serial numbers of the “ReleaseStatus” object. “effectivity_text” has a hard-coded length of up to 256 characters (This is incorrect, so the size here is limited to 1000) |
| date_released | Date and time |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `FileDocument`

Represents the subtype of System.FileDocument object.

##### Generalization

System.FileDocument

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| datasetUID | String (200) |  |  |
| imanFileID | String (200) |  |  |

##### Associations

Entity `FileDocument` does not own any associations.

#### Entity `SavedGeneralQuery`

Represents the input criteria for General Query.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| Name | String (200) |  |  |
| Description | String (200) |  |  |
| _Type | String (200) |  |  |
| OwningUser | String (200) |  |  |
| OwningGroup | String (200) |  |  |
| CreatedAfter | Date and time |  |  |
| CreatedBefore | Date and time |  |  |
| ModifiedAfter | Date and time |  |  |
| ModifiedBefore | Date and time |  |  |
| ReleasedAfter | Date and time |  |  |
| ReleasedBefore | Date and time |  |  |
| WorkflowTemplateName | String (200) |  |  |
| CurrentTask | String (200) |  |  |

##### Associations

Entity `SavedGeneralQuery` does not own any associations.

#### Entity `SavedItemSimpleQuery`

Represents the input criteria for Item Simple Query.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| Name | String (200) |  |  |
| ItemID | String (200) |  |  |
| Description | String (200) |  |  |
| _Type | String (200) |  |  |

##### Associations

Entity `SavedItemSimpleQuery` does not own any associations.

#### Entity `BOMWindow`

Represents the BOMWindow business object type in Teamcenter.

##### Generalization

TcConnector.ModelObject

##### Attributes

Entity `BOMWindow` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| bomWindow__BOMWindow | TcConnector.BOMWindow | OneToOne |  |
| BOMWindow_CloseBOMWindowslInput | TcConnector.CloseBOMWindowslInput | OneToMany |  |
| top_line | TcConnector.BOMLine | OneToOne |  |
| revision_rule | TcConnector.RevisionRule | OneToOne |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `Relation_BOMLine`

Dataset object references attached by given relation name are returned.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| relationName | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| info | TcConnector.ExpandPSOneLevelInput | OneToMany |  |

#### Entity `ChildrenObject`

List of ExpandPSData children found for the associated parent.

##### Attributes

Entity `ChildrenObject` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| children | TcConnector.ExpandPSOneLevelResponse | OneToMany |  |
| itemRevOfBOMLine | TcConnector.ItemRevision | OneToOne |  |
| bomLine__ExpandPSOneLevel | TcConnector.BOMLine | OneToOne |  |
| children__ExpandPSAllLevels | TcConnector.ExpandPSAllLevelsOutput | OneToMany |  |

#### Entity `GetRevisionRulesResponse`

Response entity for the Cad-2007-01-StructureManagement/getRevisionRules Teamcenter service.  
It contains RevisionRuleInfo

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `GetRevisionRulesResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `RevisionRulesResponseOutput`

List of RevisionRuleInfo which contains Revision rule.

##### Attributes

Entity `RevisionRulesResponseOutput` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| output__GetRevisionRule | TcConnector.GetRevisionRulesResponse | OneToMany |  |
| revRule | TcConnector.RevisionRule | OneToOne |  |

#### Entity `CreateWorkflowInput`

Input entity for Workflow-2014-10-Workflow/createWorkflow Teamcenter service.  

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| processName | String (200) |  |  |
| processDescription | String (200) |  |  |
| processTemplate | String (200) |  |  |
| dueDate | Date and time |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| workflowOwner | TcConnector.CreateWorkflowInput | OneToOne |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |

#### Entity `CreateWorkflowResponse`

Response entity for Workflow-2014-10-Workflow/createWorkflow Teamcenter service.  

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `CreateWorkflowResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| workflowTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `EPMTask`

Represents the EPMTask business object type from Teamcenter.

##### Generalization

TcConnector.WorkspaceObject

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| priority | Integer | 0 |  |
| task_name | String (32) |  |  |
| due_date | Date and time |  |  |
| task_duration | Integer | 0 |  |
| comments | String (4000) |  |  |
| fnd0StartDate | Date and time |  |  |
| fnd0EndDate | Date and time |  |  |
| job_name | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| workflowTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| allTasks | TcConnector.GetAllTasksResponse | OneToMany |  |
| task | TcConnector.PerformActionInput | OneToOne |  |
| tasks_to_track | TcConnector.TaskInbox | OneToMany |  |
| tasks_to_perform | TcConnector.TaskInbox | OneToMany |  |
| parent_process | TcConnector.EPMTask | OneToOne |  |
| checked_out_user | TcConnector.User | OneToMany |  |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `createWorkflowtRelationTypes`

Entity to represent Attachment Relation Types, This has association with CreateWorkflowInput entity.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| attachmentRelationTypes | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| relationTypes | TcConnector.CreateWorkflowInput | OneToMany |  |

#### Entity `GetAllTasksInput`

Input entity for Workflow-2008-06-Workflow/getAllTasks Teamcenter service.  

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| state | Integer | 0 |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| process | TcConnector.GetAllTasksInput | OneToOne |  |

#### Entity `EPMJob`

Represents the EPMJob business object type from Teamcenter.

##### Generalization

TcConnector.WorkspaceObject

##### Attributes

Entity `EPMJob` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| process | TcConnector.GetAllTasksInput | OneToOne |  |
| parent_process | TcConnector.EPMTask | OneToOne |  |
| checked_out_user | TcConnector.User | OneToMany |  |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `GetAllTasksResponse`

Response entity for Workflow-2008-06-Workflow/getAllTasks Teamcenter service.  

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `GetAllTasksResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `PerformActionInput`

Input entity for Workflow-2012-10-Workflow/performAction2 Teamcenter service.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| action | String (200) |  |  |
| comments | String (200) |  |  |
| password | String (200) |  |  |
| supportingValue | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| task | TcConnector.PerformActionInput | OneToOne |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |

#### Entity `StringObject`

Entity represnt the the string array in the response.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| value | String (unlimited) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| lov_values__0 | TcConnector.LOVInternalValue | OneToMany |  |
| lov_values__1 | TcConnector.LOVDisplayValue | OneToMany |  |

#### Entity `IntegerObject`

Entity represnt the the integer array in the response.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| value | Integer | 0 |  |

##### Associations

Entity `IntegerObject` does not own any associations.

#### Entity `UpdatedPropertiesInput`

List of PropInfo structure which consists of information about the objects and the property values to set.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| name | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| objectsSetProperties | TcConnector.ModelObject | OneToMany |  |

#### Entity `ValuesInput`

Values of the property

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| value | String (unlimited) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| values | TcConnector.UpdatedPropertiesInput | OneToMany |  |

#### Entity `FindUsersTasksResponse`

Response entity for FindUsersTasksTeamcenter service.

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `FindUsersTasksResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `TaskInbox`

Represents the TaskInbox business object type from Teamcenter.

##### Generalization

TcConnector.WorkspaceObject

##### Attributes

Entity `TaskInbox` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| taskinbox__ | TcConnector.TaskInbox | OneToOne |  |
| subscribed_inboxes | TcConnector.User | OneToMany |  |
| TaskInbox_FindUsersTasksResponse | TcConnector.FindUsersTasksResponse | OneToMany |  |
| checked_out_user | TcConnector.User | OneToMany |  |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `GetWorkflowTemplatesInput`

Input entity for Workflow-2008-06-Workflow/getWorkflowTemplates Teamcenter service.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| allOrAssignedCriteria | String (200) | SOA_EPM_All |  |

##### Associations

Entity `GetWorkflowTemplatesInput` does not own any associations.

#### Entity `GetWorkflowTemplatesResponse`

Response entity for Workflow-2008-06-Workflow/getWorkflowTemplates Teamcenter service.

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `GetWorkflowTemplatesResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `EPMTaskTemplate`

Represents the EPMTaskTemplate business object type from Teamcenter.

##### Generalization

TcConnector.POM_application_object

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| object_name | String (200) |  |  |
| object_desc | String (1024) |  |  |
| template_name | String (128) |  |  |
| task_type | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| workflowTemplates | TcConnector.GetWorkflowTemplatesResponse | OneToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `TC_Project`

Represents the TC_Project business object type from Teamcenter.

##### Generalization

TcConnector.POM_application_object

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| project_name | String (32) |  |  |
| project_desc | String (240) |  |  |
| project_id | String (64) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| project_list | TcConnector.ItemRevision | OneToMany |  |
| project | TcConnector.TC_Project | OneToOne |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `VariantRule`

Represents the VariantRule business object type from Teamcenter.

##### Generalization

TcConnector.WorkspaceObject

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| contents | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| objectsForConfigure | TcConnector.CreateBomWindowInput | OneToMany |  |
| variantRulesForItemRevision | TcConnector.ItemRevision | OneToMany |  |
| checked_out_user | TcConnector.User | OneToMany |  |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `ConfigurationContext`

Represents the ConfigurationContext business object type from Teamcenter.

##### Generalization

TcConnector.WorkspaceObject

##### Attributes

Entity `ConfigurationContext` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| configContext | TcConnector.CreateBomWindowInput | OneToOne |  |
| checked_out_user | TcConnector.User | OneToMany |  |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `BomWindowPropFlagMap`

Map of property name (key) and property values (values) in string format, to be set on info input to create BOM window.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| show_unconfigured_variants | String (200) | false |  |
| show_unconfigured_changes | String (200) | true |  |
| show_suppressed_occurrences | String (200) | true |  |
| is_packed_by_default | String (200) | true |  |
| show_out_of_context_lines | String (200) | true |  |
| fnd0show_uncnf_occ_eff | String (200) | true |  |
| fnd0bw_in_cv_cfg_to_load_md | String (200) | true |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| bomWinPropFlagMap | TcConnector.BomWindowPropFlagMap | OneToOne |  |

#### Entity `ParentObject`

List of ExpandPSData children found for the associated parent.

##### Attributes

Entity `ParentObject` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| bomLine__ExpandPSAllLevel | TcConnector.BOMLine | OneToOne |  |
| itemRevOfBOMLine__Parent | TcConnector.ItemRevision | OneToOne |  |
| parent | TcConnector.ExpandPSAllLevelsOutput | OneToOne |  |

#### Entity `ExpandPSAllLevelsOutput`

Response entity for the Cad-2007-01-StructureManagement/expandPSOneLevel Teamcenter service.  
First level children (as list of BOMLines) of given parent BOMLines is the output of the service.

##### Attributes

Entity `ExpandPSAllLevelsOutput` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ExpandAllLevelsOutput | TcConnector.ExpandPSAllLevelsResponse | OneToMany |  |
| parent | TcConnector.ExpandPSAllLevelsOutput | OneToOne |  |

#### Entity `ExpandPSAllLevelsResponse`

Response entity for the Cad-2007-01-StructureManagement/expandPSOneLevel Teamcenter service.  
First level children (as list of BOMLines) of given parent BOMLines is the output of the service.

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `ExpandPSAllLevelsResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `TcServerInformation`

Entity to store the Teamcenter server information which is response entity for Core-2007-01-Session/getTCSessionInfo teamcenter service

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `TcServerInformation` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| group__ | TcConnector.Group | OneToOne |  |
| user__ | TcConnector.User | OneToOne |  |
| extraInfo__ | TcConnector.TcServerInformation | OneToOne |  |
| role__ | TcConnector.Role | OneToOne |  |
| project | TcConnector.TC_Project | OneToOne |  |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `ExtraInfo`

Represents additional teamcenter session infomation.

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| DisplayVersion | String (200) |  |  |
| syslogFile | String (200) |  |  |
| TcServerID | String (200) |  |  |
| TCServerLocale | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| extraInfo__ | TcConnector.TcServerInformation | OneToOne |  |

#### Entity `Role`

Represents the Role business object type from Teamcenter.

##### Generalization

TcConnector.POM_application_object

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| role_name | String (32) |  |  |
| object_name | String (200) |  |  |
| description | String (240) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| role__ | TcConnector.Role | OneToOne |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `PSBOMViewRevision`

##### Generalization

TcConnector.WorkspaceObject

##### Attributes

Entity `PSBOMViewRevision` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| bom_view | TcConnector.PSBOMView | OneToOne |  |
| structure_revisions | TcConnector.ItemRevision | OneToMany |  |
| checked_out_user | TcConnector.User | OneToMany |  |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `CloseBOMWindowslInput`

##### Attributes

Entity `CloseBOMWindowslInput` has no attributes.

##### Associations

Entity `CloseBOMWindowslInput` does not own any associations.

#### Entity `HomePage`

##### Attributes

Entity `HomePage` has no attributes.

##### Associations

Entity `HomePage` does not own any associations.

#### Entity `GetItemFromIdResponse`

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `GetItemFromIdResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `ItemRevisionOutput`

##### Attributes

Entity `ItemRevisionOutput` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| itemRevOutput | TcConnector.GetItemFromIdResponse | OneToMany |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |

#### Entity `GetItemFromIdInput`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| ItemId | String (200) |  |  |
| NumberOfRevision | Integer | -1 |  |
| RelationTypeName | String (200) |  |  |

##### Associations

Entity `GetItemFromIdInput` does not own any associations.

#### Entity `RevisionIDs`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| RevisionIDs | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| revIds | TcConnector.GetItemFromIdInput | OneToMany |  |

#### Entity `ObjectTypeNames`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| ObjectTypeNames | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| objectTypeNames__ | TcConnector.GetItemFromIdInput | OneToMany |  |
| objectTypeNames__ExpandPS | TcConnector.ExpandPSOneLevelInput | OneToMany |  |

#### Entity `ExpandGRMInput`

##### Attributes

Entity `ExpandGRMInput` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| PrimaryOrSecondaryObjects | TcConnector.ListOfModelObject | OneToOne |  |

#### Entity `ExpandGRMResponse`

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `ExpandGRMResponse` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `Relation__`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| relationTypeName | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| relations | TcConnector.ExpandGRMInput | OneToMany |  |

#### Entity `relationshipObject`

##### Attributes

Entity `relationshipObject` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| relationshipObjects | TcConnector.ExpandGRMResponse | OneToMany |  |
| otherSideObject | TcConnector.ModelObject | OneToMany |  |
| _relation | TcConnector.ImanRelation | OneToMany |  |

#### Entity `RootTargetAttachments`

##### Generalization

TcConnector.WorkspaceObject

##### Attributes

Entity `RootTargetAttachments` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| root_target_attachments | TcConnector.EPMTask | OneToMany |  |
| checked_out_user | TcConnector.User | OneToMany |  |
| release_status_list | TcConnector.WorkspaceObject | ManyToMany |  |
| owning_user | TcConnector.User | OneToMany |  |
| last_mod_user | TcConnector.User | OneToMany |  |
| owning_group | TcConnector.Group | OneToMany |  |
| owning_role | TcConnector.Role | OneToMany |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `ExpandPSOneLevel2Input`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| RelationName | String (200) |  |  |
| NamedRefHandler | String (200) | AllNamedRefs |  |
| ObjectTypeName | String (200) |  |  |

##### Associations

Entity `ExpandPSOneLevel2Input` does not own any associations.

#### Entity `ExpandPSOneLevel2Response`

##### Generalization

TcConnector.ServiceResponse

##### Attributes

Entity `ExpandPSOneLevel2Response` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `ParentChildWrapper`

##### Attributes

Entity `ParentChildWrapper` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| output__ExpandPSOneLevel2Response | TcConnector.ExpandPSOneLevel2Response | OneToMany |  |
| parent__ParentChildWrapper | TcConnector.ParentChildWrapper | OneToOne |  |

#### Entity `Parent__`

##### Attributes

Entity `Parent__` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| parent__ParentChildWrapper | TcConnector.ParentChildWrapper | OneToOne |  |
| bomLine__Parent | TcConnector.Parent__ | OneToOne |  |

#### Entity `Child`

##### Attributes

Entity `Child` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| children__ParentChildWrapper | TcConnector.ParentChildWrapper | OneToMany |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| BOMLine_childrenObj | TcConnector.BOMLine | OneToMany |  |
| bomLine__Child | TcConnector.Child | OneToOne |  |

#### Entity `relatedObjectsEntity`

##### Attributes

Entity `relatedObjectsEntity` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| relatedObjects | TcConnector.Child | OneToMany |  |
| relatedObject | TcConnector.relatedObjectsEntity | OneToOne |  |

#### Entity `namedRefListEntity`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| namedReferenceType | String (200) |  |  |
| namedReferenceName | String (200) |  |  |
| fileTicket | String (1000) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| namedRefList | TcConnector.relatedObjectsEntity | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |

#### Entity `ExpandBOMParentChild`

##### Attributes

Entity `ExpandBOMParentChild` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| ParentBOMLIne | TcConnector.ExpandBOMParentChild | OneToOne |  |

#### Entity `WhereUsedInput`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| numLevels | Integer | 1 |  |
| whereUsedPrecise | Boolean | false |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| rule | TcConnector.WhereUsedInput | OneToOne |  |

#### Entity `WhereUsedResponseInfo`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| level | Integer | 0 |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| parentItemRev | TcConnector.WhereUsedResponseInfo | OneToOne |  |
| WhereUsedResponseInfo_ModelObject | TcConnector.ModelObject | OneToMany |  |

#### Entity `BooleanObject`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| value | Boolean | false |  |

##### Associations

Entity `BooleanObject` does not own any associations.

#### Entity `GetInitialLOVValuesInputEntity`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| propertyName | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| lov | TcConnector.ModelObject | OneToOne |  |
| lovInput | TcConnector.LovInputEntity | OneToOne |  |
| filterData__0 | TcConnector.LOVFilterDataInputEntity | OneToOne |  |
| lov__0 | TcConnector.ListOfValues | OneToOne |  |

#### Entity `LovInputEntity`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| operationName | String (200) |  |  |
| boName | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovInput | TcConnector.LovInputEntity | OneToOne |  |

#### Entity `LOVFilterDataInputEntity`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| filterString | String (200) |  |  |
| maxResults | Integer | 2000 |  |
| numberToReturn | Integer | 25 |  |
| order | Integer | 1 |  |
| sortPropertyName | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| filterData__0 | TcConnector.LOVFilterDataInputEntity | OneToOne |  |

#### Entity `GetLOVValuesResponse`

##### Generalization

TcConnector.ServiceResponse

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| moreValuesExist | Boolean | false |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| lovData | TcConnector.GetLOVValuesResponse | OneToOne |  |
| ResponseData | TcConnector.ServiceResponse | OneToOne |  |

#### Entity `LOVDataEntity`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| style | String (200) |  |  |
| additionalValuesSkipped | Boolean | false |  |
| currentIndex | Integer | 0 |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| lovData | TcConnector.GetLOVValuesResponse | OneToOne |  |
| filterData__1 | TcConnector.LOVFilterDataOutputEntity | OneToOne |  |

#### Entity `LOVValuesEntity`

##### Attributes

Entity `LOVValuesEntity` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| lovValues | TcConnector.GetLOVValuesResponse | OneToMany |  |
| propInternalValues | TcConnector.LOVValuesEntity | OneToOne |  |
| propInternalValueTypes | TcConnector.LOVInternalValueType | OneToOne |  |
| propDisplayValues | TcConnector.LOVValuesEntity | OneToOne |  |

#### Entity `LOVInternalValue`

##### Attributes

Entity `LOVInternalValue` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| propInternalValues | TcConnector.LOVValuesEntity | OneToOne |  |

#### Entity `LOVInternalValueType`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| lov_values | Integer | 8 |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| propInternalValueTypes | TcConnector.LOVInternalValueType | OneToOne |  |

#### Entity `LOVDisplayValue`

##### Attributes

Entity `LOVDisplayValue` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| propDisplayValues | TcConnector.LOVValuesEntity | OneToOne |  |

#### Entity `LOVFilterDataOutputEntity`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| filterString | String (200) |  |  |
| maxResults | Integer | 2000 |  |
| numberToReturn | Integer | 25 |  |
| order | Integer | 1 |  |
| sortPropertyName | String (200) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| filterData__1 | TcConnector.LOVFilterDataOutputEntity | OneToOne |  |

#### Entity `ListOfValues`

##### Generalization

TcConnector.ModelObject

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| lov_desc | String (240) |  |  |
| lov_name | String (128) |  |  |
| lov_type | String (32) |  |  |
| lov_usage | Integer | 0 |  |
| lov_value_type | Integer | 0 |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| lov__0 | TcConnector.ListOfValues | OneToOne |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `DummyModelObject`

##### Generalization

TcConnector.ModelObject

##### Attributes

Entity `DummyModelObject` has no attributes.

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| primary_object | TcConnector.ImanRelation | OneToOne |  |
| secondary_object | TcConnector.ImanRelation | OneToOne |  |
| primaryObject | TcConnector.ModelObject | OneToOne | The primary object to create the relation from |
| secondaryObject | TcConnector.ModelObject | OneToOne | The secondary object to create the relation to |
| userData | TcConnector.ModelObject | OneToOne | The user data object used to create the relation. This parameter is optional. |
| searchResults | TcConnector.SearchResponse | OneToMany |  |
| ListOfModelObjects | TcConnector.ListOfModelObject | OneToMany |  |
| Plain | TcConnector.ServiceData | OneToMany |  |
| Updated | TcConnector.ServiceData | OneToMany |  |
| Created | TcConnector.ServiceData | OneToMany |  |
| ClientObject | TcConnector.ErrorStack | OneToOne |  |
| revise_objects | TcConnector.ReviseOutputResponse | OneToMany |  |
| originalObject | TcConnector.ModelObject | OneToOne |  |
| objectCopy | TcConnector.ModelObject | OneToOne |  |
| parentBomLines | TcConnector.ExpandPSOneLevelInput | OneToMany |  |
| attachments | TcConnector.CreateWorkflowInput | OneToMany |  |
| workflowRootTask | TcConnector.CreateWorkflowResponse | OneToOne |  |
| targets | TcConnector.GetWorkflowTemplatesInput | OneToMany |  |
| supportingObject | TcConnector.PerformActionInput | OneToOne |  |
| ModelObject_TcSession | TcConnector.TcSession | OneToMany |  |
| responsibleParty | TcConnector.CreateWorkflowInput | OneToOne |  |
| assignedUser | TcConnector.CreateWorkflowInput | OneToMany |  |
| Items_GetItemFromIdResponse | TcConnector.GetItemFromIdResponse | OneToOne |  |
| itemRevision__ | TcConnector.ItemRevisionOutput | OneToOne |  |
| parentBomLines__ | TcConnector.ExpandPSOneLevel2Input | OneToMany |  |
| referenceObject | TcConnector.namedRefListEntity | OneToOne |  |
| objectOfBOMLine | TcConnector.Child | OneToOne |  |
| objects | TcConnector.WhereUsedInput | OneToMany |  |
| lov | TcConnector.ModelObject | OneToOne |  |
| owningObject | TcConnector.ModelObject | OneToOne |  |
| lovs | TcConnector.LOVDataEntity | OneToMany |  |

#### Entity `ImanFile`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| fileID | String (200) |  |  |
| name | String (200) |  |  |
| size | String (200) |  |  |
| creationDate | Date and time |  |  |
| lastModifiedDate | Date and time |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| imanFiles | TcConnector.Dataset | OneToMany |  |

#### Entity `Image`

##### Generalization

System.Image

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| datasetUID | String (200) |  |  |
| imanFileID | String (200) |  |  |

##### Associations

Entity `Image` does not own any associations.

#### Entity `OAuthToken`

##### Attributes

| Name | Type | Default value | Documentation |
| --- | --- | --- | --- |
| AccessToken | String (unlimited) |  |  |

##### Associations

| Name | Connected to | Multiplicity | Documentation |
| --- | --- | --- | --- |
| TcTokens | TcConnector.TcSession | OneToMany |  |

#### Annotations

| Caption |
| --- |
| Mendix Domain Model Entities are mapped to Teamcenter service operation data structures based on naming conventions. The Teamcenter structure element names (keys in JSON document) map one-to-one to the Entity member (Attributes or Associations) names, with the following caveats:  <br>  <br>• The Entity member name is prefixed with a `_`, i.e. `_type`. In this case the `_` is ignored, thus matching the Teamcenter name of `type`.  <br>• The Entity member name is suffixed with `__XXX`, i.e. `phone__Home`. In this case the `__Home` is ignored, thus matching the Teamcenter name of `phone`.  <br>• Entity Attribute types must match the type of the business object property type. Attributes of type String are the display or localized value of the business object property, while Attributes of other types (Boolean, Decimal, and Integer, Localized Date and time), are the database value of the business object property. To map a database value of a business object String property the Attribute name must be suffixed with `__DB`, i.e. `description__DB`. |
| Following entities are used as input/output for invoking Teamcenter service Core-2006-03-DataManagement/createRelations through `Toolbox/Teamcenter/Call Teamcenter Service`, `Toolbox/Teamcenter/Create Relation` service |
| Following entities are used as input for invoking Teamcenter service Core-2015-07-DataManagement/createRelateAndSubmitObjects2 through mendix service `Toolbox/Teamcenter/Create Object` |
| Following entities are used as input/output for invoking Teamcenter service Query-2014-11-Finder/performSearch through `Toolbox/Teamcenter/CallTeamcenterService`, `Toolbox/Teamcenter/Perform Search`, `Toolbox/Teamcenter/Perform General Search`, `Toolbox/Teamcenter/Perform Item Simple Search` services |
| Following entities are used as input/output for invoking Teamcenter service Core-2013-05-DataManagement/reviseObjects through Mendix service `Toolbox/Teamcenter/Revise Object` |
| Following entities are used as input/output for invoking Teamcenter service Cad-2007-01-StructureManagement/expandPSOneLevel through Mendix service `Toolbox/Teamcenter/Expand One Level` |
| Data model definition ends |
| Following entities are used as input/output for invoking Teamcenter service Query-2008-06-SavedQuery/executeSavedQueries through Mendix service `Toolbox/Teamcenter/Saved Query Search`  <br>  <br>Define an entity representing Search Criteria of the Saved Query to be executed. Search criteria entity attributes should be defined based on Teamcenter L10NKeys for its corresponding search criteria attribute.  <br>e.g. If the Teamcenter Saved Query has search criteria entry for `Item ID` and its corresponding L10NKey is ItemID, then in Mendix, define the Search Criteria Entity with `ItemID` as attribute name.  <br>  <br>Note: Criteria attribute L10NKeys does not change for locale and thus would work for non-english locales too.  <br>  <br>e.g. Refer to Teamcenter Query Locale keys from  <br>&lt;TC_ROOT&gt;\lang\textserver\en_US\qry_user_entry_names_locale.xml |
| Below entities are used as input/output for invoking following Teamcenter workflow services  <br>Workflow-2014-10-Workflow/createWorkflow ,  <br>Workflow-2008-06-Workflow/getAllTasks,  <br>Workflow-2012-10-Workflow/performAction2  <br>Workflow-2008-06-Workflow/getWorkflowTemplates |
| Following entities are used as input for invoking Teamcenter serviceCore-2010-09-DataManagement/setProperties through Mendix service `Toolbox/Teamcenter/UpdateProperties` |
| Following entities are used as input/output for invoking Teamcenter serviceCad-2007-01-StructureManagement/getRevisionRules through Mendix service `Toolbox/Teamcenter/Get Revision Rules` |
| Generic Service Response and Business objects in teamcenter |
| Teamcenter Coniguration and Session Management  <br>  <br>These Entities are used to configure a connection with a Teamcenter server and manage a user's Teamcenter session. |
| Following entities are used as input/output for invoking Teamcenter service Cad-2013-05-StructureManagement/createBOMWindows2 through Mendix service `Toolbox/Teamcenter/Create BOM Windows2` |
| Below entities are used as input/output for invoking following Teamcenter services  <br>Core-2007-01-DataManagement/getItemFromId  <br>Core-2007-09-DataManagement/expandGRMRelationsForPrimary  <br>Core-2007-09-DataManagement/expandGRMRelationsForSecondary |
| Following entities are used as input/output for invoking Teamcenter service Cad-2008-06-StructureManagement/expandPSOneLevel through Mendix service `Toolbox/Teamcenter/Expand One Level` |
| Following entities are used as input/output for invoking Teamcenter serviceCore-2007-01-DataManagement/whereUsed through Mendix service `Toolbox/Teamcenter/Where Used` |
| Following entities are used to read LOV values for a Business Object property |
| Activities GetInitialLOVValues/GetNextLOVValues returns ListOfValues as ModelObject and NOT as ListOfValues object with these properties. To read the properties of ListOfValues or any of its subtype, use GetProperties activity.  <br>  <br>GetAttachedLOV activity returns ListOfValues along with properties available on the Entity. |

### Microflows

| Name | Return type | Documentation |
| --- | --- | --- |
| `SSO_RegisterRequestHandlers` | Boolean | Microflow called during startup of application to enable SSO. |
| `AdminLogin` | Nothing | This microflow allow users to set the landing page after Teamcenter login. |
| `UserLogin` | Nothing | This microflow allow users to set the landing page after Teamcenter login. |
| `ExecuteAdminLogin` | Boolean | This microflow enables the configuration option for administrators. Other users will not see the configuration page. |
| `ExecuteLogout` | Nothing | Microflow to perform Teamcenter log out for given teamcenter configuration. |
| `ShowLoginPage` | Boolean | This microflow displays the login page. |
| `PerformTokenExchangeAndLoginToTC` | Boolean |  |
| `ExecuteLogin` | Nothing | Microflow to perform Teamcenter login. |
| `AreMultipleTcConfigActive` | Boolean | Microflow to returns true if multiple teamcenter congigurations are active else returns false. |
| `RetrieveTeamcenterConifgurationFromTcSession` | TcConnector.TeamcenterConfiguration | Microflow to retrieve Teamcenter configuration from database. |
| `RetrieveTeamcenterConifgurationByName` | TcConnector.TeamcenterConfiguration | Microflow to retrieve Teamcenter configuration from database. |
| `RetrieveHttpHeaderList` | List of System.HttpHeader |  |
| `RetrieveConfigNameFromSingleActiveConfiguration | String | Microflow to retrieve Teamcenter configuration if single teamcenter configuration is active. |
| `RetrieveTcSessionBasedOnConfigName` | TcConnector.TcSession | Microflow to retrieve Tc session from database for given Teamcenter configuration. |
| `DownloadFile` | Boolean |  |
| `CloseBOMWindow` | TcConnector.ServiceResponse |  |
| `HandleActiveConfigErrors` | Nothing |  |
| `ShowPartialErrors` | Nothing | This microflow retrieves partial errors from service data. |
| `HandleServiceErrors` | Nothing | Microflow to handle service errors. |
| `GetBlankCredential` | TcConnector.Credentials |  |
| `SaveTeamcenterConfiguration` | Nothing |  |
| `SSO_CreateRedirectURL` | String | This microflow constructs Teamcenter SSO redirect URL. |
| `UpdateSession` | Nothing |  |
| `GetStatusofConfiguration` | TcConnector.Cookie |  |
| `CreateBlankHomePage` | TcConnector.HomePage |  |
| `LoginToMultipleTeamcenters` | Nothing | Microflow to perform Teamcenter log in if multiiple teamcenter configurations are active. |
| `SendService` | System.HttpResponse |  |
| `ChangeActiveTeamcenterConfiguration` | Nothing | Microflow to set Teamcenter configuration as active. |
| `TeamcenterConfiguration_ValidateMandatorySSOAttributes` | Boolean |  |
| `TeamcenterConfiguration_EnsureSingleTCConfigurationsIsActive]` | Boolean | Event handler to validate the only single configuration is active if EnableMultipleActiveConfig is set to false. |

#### Microflow `SSO_RegisterRequestHandlers`

Microflow called during startup of application to enable SSO.

##### Parameters

This has no parameters.

##### Return type

Boolean

#### Microflow `AdminLogin`

This microflow allow users to set the landing page after Teamcenter login.

##### Parameters

This has no parameters.

##### Return type

Nothing

#### Microflow `UserLogin`

This microflow allow users to set the landing page after Teamcenter login.

##### Parameters

This has no parameters.

##### Return type

Nothing

#### Microflow `ExecuteAdminLogin`

This microflow enables the configuration option for administrators. Other users will not see the configuration page.

##### Parameters

This has no parameters.

##### Return type

Boolean

#### Microflow `ExecuteLogout`

Microflow to perform Teamcenter log out for given teamcenter configuration.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| TeamcenterConfiguration | TcConnector.TeamcenterConfiguration |  |

##### Return type

Nothing

#### Microflow `ShowLoginPage`

This microflow displays the login page.

##### Parameters

This has no parameters.

##### Return type

Boolean

#### Microflow `PerformTokenExchangeAndLoginToTC`

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| AccessToken | String |  |
| TcXConfigName | String |  |
| TcSession | TcConnector.TcSession |  |
| TeamcenterConfiguration | TcConnector.TeamcenterConfiguration |  |
| TcSessionObj | TcConnector.TcSession |  |

##### Return type

Boolean

#### Microflow `ExecuteLogin`

Microflow to perform Teamcenter login.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| Credentials | TcConnector.Credentials | Teamcenter credentials. |
| TeamcenterConfiguration | TcConnector.TeamcenterConfiguration |  |

##### Return type

Nothing

#### Microflow `AreMultipleTcConfigActive`

Microflow to returns true if multiple teamcenter congigurations are active else returns false.

##### Parameters

This has no parameters.

##### Return type

Boolean

#### Microflow `RetrieveTeamcenterConifgurationFromTcSession`

Microflow to retrieve Teamcenter configuration from database.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| TcSession | TcConnector.TcSession |  |

##### Return type

TcConnector.TeamcenterConfiguration

#### Microflow `RetrieveTeamcenterConifgurationByName`

Microflow to retrieve Teamcenter configuration from database.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| ConfigName | String |  |

##### Return type

TcConnector.TeamcenterConfiguration

#### Microflow `RetrieveHttpHeaderList`

##### Parameters

This has no parameters.

##### Return type

List of System.HttpHeader

#### Microflow `RetrieveConfigNameFromSingleActiveConfiguration`

Microflow to retrieve Teamcenter configuration if single teamcenter configuration is active.

##### Parameters

This has no parameters.

##### Return type

String

#### Microflow `RetrieveTcSessionBasedOnConfigName`

Microflow to retrieve Tc session from database for given Teamcenter configuration.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| ConfigName | String |  |

##### Return type

TcConnector.TcSession

#### Microflow `DownloadFile`

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| Dataset | TcConnector.Dataset |  |
| ConfigurationName | String |  |
| FileDownloadType | Enumeration TcConnector.FileDownloadType |  |

##### Return type

Boolean

#### Microflow `CloseBOMWindow`

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| BOMWindow | TcConnector.BOMWindow |  |
| configName | String |  |

##### Return type

TcConnector.ServiceResponse

#### Microflow `HandleActiveConfigErrors`

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| ConfigException | System.Error |  |

##### Return type

Nothing

#### Microflow `ShowPartialErrors`

This microflow retrieves partial errors from service data.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| ServiceResponse | TcConnector.ServiceResponse |  |

##### Return type

Nothing

#### Microflow `HandleServiceErrors`

Microflow to handle service errors.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| ServiceException | System.Error |  |

##### Return type

Nothing

#### Microflow `GetBlankCredential`

##### Parameters

This has no parameters.

##### Return type

TcConnector.Credentials

#### Microflow `SaveTeamcenterConfiguration`

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| TeamcenterConfiguration | TcConnector.TeamcenterConfiguration |  |

##### Return type

Nothing

#### Microflow `SSO_CreateRedirectURL`

This microflow constructs Teamcenter SSO redirect URL.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| TeamcenterConfiguration | TcConnector.TeamcenterConfiguration | Teamcenter configuration detail. |

##### Return type

String

#### Microflow `UpdateSession`

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| TcSession | TcConnector.TcSession |  |

##### Return type

Nothing

#### Microflow `GetStatusofConfiguration`

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| TeamcenterConfiguration | TcConnector.TeamcenterConfiguration |  |

##### Return type

TcConnector.Cookie

#### Microflow `CreateBlankHomePage`

##### Parameters

This has no parameters.

##### Return type

TcConnector.HomePage

#### Microflow `LoginToMultipleTeamcenters`

Microflow to perform Teamcenter log in if multiiple teamcenter configurations are active.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| TeamcenterConfiguration | TcConnector.TeamcenterConfiguration |  |

##### Return type

Nothing

#### Microflow `SendService`

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| SoaServiceRequest | TcConnector.SoaServiceRequest |  |

##### Return type

System.HttpResponse

#### Microflow `ChangeActiveTeamcenterConfiguration`

Microflow to set Teamcenter configuration as active.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| TeamcenterConfiguration | TcConnector.TeamcenterConfiguration | Teamcenter configuration detail. |

##### Return type

Nothing

#### Microflow `TeamcenterConfiguration_ValidateMandatorySSOAttributes`

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| TeamcenterConfiguration | TcConnector.TeamcenterConfiguration |  |

##### Return type

Boolean

#### Microflow `TeamcenterConfiguration_EnsureSingleTCConfigurationsIsActive`

Event handler to validate the only single configuration is active if EnableMultipleActiveConfig is set to false.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| TeamcenterConfiguration | TcConnector.TeamcenterConfiguration |  |

##### Return type

Boolean

### Java actions

| Name | Return type | Documentation |
| --- | --- | --- |
| `ExpandPSAllLevels` | TcConnector.ExpandPSAllLevelsResponse | SOA URL:  <br>Cad-2007-01-StructureManagement/expandPSAllLevels  <br>  <br>Description:  <br>This actions finds the chilren at all levels given parent bomline.  <br>  <br>Returns:  <br>An entity of type ExpandPSAllLevelsResponse. Expanded child bomlines with respective parents can be retrieved using association TcConnector.ExpandPSAllLevelsOutput. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `ExpandPSOneLevel2` | TcConnector.ExpandPSOneLevel2Response | SOA URL:  <br>Cad-2008-06-StructureManagement/expandPSOneLevel  <br>  <br>Description:  <br>This actions finds the first level children of given parent bomlines.  <br>InputBOMLine(ParentBOMLine) will be updated with Child Objects (BOMLine_childrenObj).  <br>DownloadFiles flag if set true, will download the files attached to Datasets.  <br>  <br>Returns:  <br>InputBOMLine(ParentBOMLine) will be updated with Child Objects (BOMLine_childrenObj)  <br>Ecah Child Object Consits of follwoing Object  <br>ChildBOMLine(TcConnector.bomLine__Child)  <br>ItemRevision of the ChildBOMLine (TcConnector.objectOfBOMLine)  <br>NamedRefrenceList of attachedched Dataset can be retrived from ChildBOMLine (TcConnector.BOMLineAttachments)  <br>Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `GetVariantRule` | Boolean | SOA URL:  <br>Cad-2007-01-StructureManagement/getVariantRules  <br>  <br>Description:  <br>The GetRevisionRules service gets all the variant rule related with given Item Revision.  <br>  <br>Returns:  <br>Input Item Revision entity's TcConnector.variantRulesForItemRevision association will be updated with related variant rules. |
| `CreateBOMWindows2` | TcConnector.CreateBomWindowResponse | SOA URL:  <br>Cad-2013-05-StructureManagement/createBOMWindows2  <br>  <br>Description:  <br>This actions Creates a BOMWindow and sets the input Item Revision as the top line , this action takes additional input such as variant rule , configuration context and bomWinPropFlagMap  <br>  <br>Returns:  <br>An entity of type CreateBomWindowResponse. Top line can be retrieved using association TcConnector.bomLine__BOMWindow. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `GetRevisionRules` | TcConnector.GetRevisionRulesResponse | SOA URL:  <br>Cad-2007-01-StructureManagement/getRevisionRules  <br>  <br>Description:  <br>The GetRevisionRules service gets all the persistent revision rules in the database.  <br>  <br>Returns:  <br>GetRevisionRulesResponse which contains RevisionRuleInfo. RevisionRuleInfo has the revision rule. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `ExpandPSOneLevel` | TcConnector.ExpandPSOneLevelResponse | SOA URL:  <br>Cad-2007-01-StructureManagement/expandPSOneLevel  <br>  <br>Description:  <br>This actions finds the first level children of given parent bomline  <br>  <br>Returns:  <br>An entity of type ExpandPSOneLevelResponse. Expanded child bomlines can be retrieved using association TcConnector.children. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `CreateBOMWindows` | TcConnector.CreateBomWindowResponse | SOA URL:  <br>Cad-2007-01-StructureManagement/createBOMWindows  <br>  <br>Description:  <br>This actions Creates a BOMWindow and sets the input Item Revision as the top line  <br>  <br>Returns:  <br>An entity of type CreateBomWindowResponse. Top line can be retrieved using association TcConnector.bomLine__BOMWindow. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `GetWorkflowTemplates` | TcConnector.GetWorkflowTemplatesResponse | SOA URL:  <br>Workflow-2008-06-Workflow/getWorkflowTemplates  <br>  <br>Description:  <br>Get the list of workflow templates given the list of target workspace objects and the All or Assigned criteria.  <br>Returns:  <br>An entity of type GetWorkflowTemplatesResponse. WorkflowTemplates can be retrieved using association TcConnector.workflowTemplates.Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `GetAllTasks` | TcConnector.GetAllTasksResponse | SOA URL:  <br>Workflow-2008-06-Workflow/getAllTasks  <br>  <br>Description:  <br>This actions gets all the tasks in a process  <br>Returns:  <br>An entity of type GetAllTasksResponse. AllTask can be retrieved using association TcConnector.allTasks.Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `PerformAction` | TcConnector.ServiceResponse | SOA URL:  <br>Workflow-2012-10-Workflow/performAction2  <br>  <br>Description:  <br>This actions performs an action on a workflow task. The following actions are supported:  <br>Assign  <br>Start  <br>Complete  <br>Skip  <br>Suspend  <br>Resume  <br>Undo  <br>Perform  <br>Approve  <br>Reject  <br>Promote  <br>Demote  <br>Claim  <br>  <br>Returns:  <br>Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `CreateWorkflow` | TcConnector.CreateWorkflowResponse | SOA URL:  <br>Workflow-2014-10-Workflow/createWorkflow  <br>  <br>Description:  <br>This actions relates a workflow process given the process template name, workflow owner, responsible party, attachments and attachment types.  <br>Returns:  <br>An entity of type CreateWorkflowResponse. WorkflowTask can be retrieved using association TcConnector.workflowTask.Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `FindUsersTasks` | TcConnector.FindUsersTasksResponse | SOA URL:  <br>Core-2007-01-Session/getTCSessionInfo  <br>Core-2006-03-DataManagement/getProperties  <br>  <br>Tc Version:  <br>Teamcenter 2007  <br>  <br>Description:  <br>This actions finds Task Inboxes of logged-in user, Task Inboxes contains `Task to Perform` and `Task to Track`  <br>Returns:  <br>An entity of type FindUsersTasksResponse. Task Inboxes can be retrieved using association TcConnector.TaskInbox_FindUsersTasksResponse. tasks_to_perform and tasks_to_track is a association between EPMTask and TaskInbox.Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `ExecuteSavedQueriesWithObjectRefresh` | TcConnector.ServiceResponse | SOA URL:  <br>Query-2010-04-SavedQuery/findSavedQueries  <br>Query-2008-06-SavedQuery/executeSavedQueries  <br>  <br>This is generic action to perform the search for the saved queries. It takes query name and corresponding search criteria entity for the given query.  <br>  <br>Returns:  <br>An entity of type ServiceResponse. Search Results can be retrieved using association TcConnector.ResponseData/TcConnector.plain. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `PerformGeneralQuerySearchAW` | TcConnector.SearchResponse | SOA URL:  <br>Query-2010-04-SavedQuery/findSavedQueries  <br>Query-2014-11-Finder/performSearch  <br>  <br>Description:  <br>This is a specific action to send the request to and receive the response from a the data provider `Awp0SavedQuerySearchProvider` for query `General...`. The input criteria for GeneralSearch query is passed through the generalQuerySearchInput object which is extended from .SearchInput Object.  <br>  <br>Returns:  <br>An entity of type SearchResponse. Search Results can be retrieved using association TcConnector.searchResultsList. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.  <br>  <br>NOTE:  <br>This action will work only if the teamcenter enviornment has active workspace installation . |
| `PerformItemSimpleQuerySearchAW` | TcConnector.SearchResponse | SOA URL:  <br>Query-2010-04-SavedQuery/findSavedQueries  <br>Query-2014-11-Finder/performSearch  <br>  <br>Description:  <br>This is a specific action to send the request to and receive the response from a the data provider `Awp0SavedQuerySearchProvider` for query `Item - simple`. The input criteria for GeneralSearch query is passed through the generalQuerySearchInput object which is extended from .SearchInput Object.  <br>  <br>Returns:  <br>An entity of type SearchResponse. Search Results can be retrieved using association TcConnector.searchResultsList. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.  <br>  <br>NOTE:  <br>This action will work only if the teamcenter enviornment has active workspace installation . |
| `FindSavedQueries` | TcConnector.FindSavedQueryResponse | SOA URL:  <br>Query-2010-04-SavedQuery/findSavedQueries  <br>  <br>Description:  <br>This is a generic action finds the saved queries of interest by passing in the criteria such as query name and description. The input for find saved queries is passed through FindSavedQueryInput entity.This operation returns the queries matching the input criteria names and descriptions.  <br>  <br>Returns:  <br>An entity of type FindSavedQueryResponse. Saved Queries can be retrieved using association TcConnector.savedQueries. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `ExecuteSavedQueries` | TcConnector.ServiceResponse | SOA URL:  <br>Query-2010-04-SavedQuery/findSavedQueries  <br>Query-2008-06-SavedQuery/executeSavedQueries  <br>  <br>This is generic action to perform the search for the saved queries. It takes query name and corresponding search criteria entity for the given query.  <br>  <br>Returns:  <br>An entity of type ServiceResponse. Search Results can be retrieved using association TcConnector.ResponseData/TcConnector.plain. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `PerformSearch` | TcConnector.SearchResponse | SOA URL:  <br>Query-2014-11-Finder/performSearch  <br>  <br>Description:  <br>This is a generic action to send the request to and receive the response from a the data provider. It routes search request to a specific provider specified as providerName in the searchInput, assuming the searchCriteria for the provider is represented in the searchCriteriaInput object e.g. `Awp0SavedQuerySearchProvider` is provider that is used for general search. The input criteria for GeneralSearch is passed through the searchCriteriaInput object.  <br>  <br>Returns:  <br>An entity of type SearchResponse. Search Results can be retrieved using association TcConnector.searchResultsList. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `RetrieveCookie` | System.HttpHeader | This Java action retrieves cookies of an established session between Teamcenter and Mendix. User is expected to be logged in before this Java action is invoked.  <br>Java action is expected to throw an error if there are no valid cookies. Application devloper is expected to handle the errors. |
| `CallTeamcenterService` | TcConnector.ServiceResponse | Tc Version:  <br>Teamcenter 10.1.5  <br>  <br>Description:  <br>The CallTeamcenterService Java Action is the entry point for calling Teamcenter service operations from a Microflow. This Java Action allows the developer to create a custom mapping between the Teamcenter service operation and the Mendix Domain Model Entities.  <br>  <br>Returns:  <br>Service response of type TcConnector.ServiceResponse. The returned list of model objects can be retrieved using appropriate association. Partial errors can be retrieved using TcConnector.ResponseData/TcConnector.PartialErrors  <br>  <br>For more information on the usage of this Java Action kindly refer to connector documentation. |
| `GetAttachedLOV` | TcConnector.ListOfValues | SOA URL:  <br>Core-2007-06-LOV/getAttachedLOVs  <br>  <br>Description:  <br>Get attached LOV based on input type name and property names structure. The LOV object is returned in the response and service data.  <br>  <br>Returns:  <br>LOV Entity |
| `GetInitialLOVValues` | TcConnector.GetLOVValuesResponse | SOA URL:  <br>Core-2013-05-LOV/getInitialLOVValues  <br>  <br>Description:  <br>This activity is invoked to query the data for a property having an LOV attachment. The results returned from the server also take into consideration any filter string to be applied on the LOV values to be retrieved.  <br>  <br>Returns:  <br>This activity returns both LOV meta data as necessary for the client to render the LOV and partial LOV values list as specified. Maximum number of results to be returned are specified in the LOVFilterDataInputEntity entity. If there are more results, the moreValuesExist flag in the GetLOVValuesResponse Entity will be set to true. If the flag is true, more values can be retrieved with a call to the GetNextLOVValues activity.  <br>  <br>For sample usage, kindly download and refer to latest version of `Teamcenter Connector Sample Application` |
| `GetNextLOVValues` | TcConnector.GetLOVValuesResponse | SOA URL:  <br>Core-2013-05-LOV/getNextLOVValues  <br>  <br>Description:  <br>This activity is invoked after a call to GetInitialLOVValues if the moreValuesExist flag is true in the GetLOVValuesResponse Entity returned from a call to the GetInitialLOVValues activity. The activity will retrieve the next set of LOV values.  <br>  <br>Returns:  <br>LOV Search Results (GetLOVValuesResponse entity instance). Response contains LOV metadata information (LOV usage, LOV style, etc.). It also contains the instance data (LOV values) that the client can use to render the LOV UI widget. The output also contains information as to whether there are more results to be processed in which case a user can page to get next set of values (this triggers a call to the subsequent GetNextLOVValues activity).  <br>  <br>For sample usage, kindly download and refer to latest version of `Teamcenter Connector Sample Application` |
| `GetTcSessionInformation` | TcConnector.TcServerInformation | SOA URL:  <br>Core-2007-01-Session/getTCSessionInfo  <br>  <br>Description:  <br>Retrieves information about the Teamcenter Server session. |
| `GetTcSessionInfo` | TcConnector.TcServerInfo | (Deprecated)  <br>  <br>SOA URL:  <br>Core-2007-01-Session/getTCSessionInfo  <br>  <br>Description:  <br>Retrieves information about the Teamcenter Server session. |
| `Logout` | Boolean | SOA URL:  <br>Core-2006-03-Session/logout  <br>  <br>Tc Version:  <br>TcEng 2005 SR1  <br>  <br>Description:  <br>Retrieves the Teamcenter Session for the user and attempts to log them out of Teamcenter.  <br>  <br>Once logged out the cookies associated with the session will be deleted and the Teamcenter Host Address within the session will be set to an empty string. |
| `LoginSSO` | Boolean | SOA URL:  <br>Core-2011-06-Session/login  <br>  <br>Tc Version:  <br>Teamcenter 9.0  <br>  <br>Description:  <br>Authenticates the users credentials and initialize a Teamcenter session for this client. The operation will throw an InvalidCredentialsException if the username, password or group is not valid.  <br>When the client application is deployed to a 4Tier environment (communication through HTTP or TCCS) the login operation also contributes to the assignment of a Teamcenter server instance to the client session. The Teamcenter architecture varies from other client server architectures in that there is a dedicated instance of the Teamcenter server per client application. However, there are use cases where it is desirable for a single user to have multiple desktop applications running and each sharing a single instance of a Teamcenter server. This is controlled through the following elements:  <br>  <br>hostPath From the Connection class constructor, this specifies the address (URI) the Teamcenter server is hosted on.  <br>username From this login operation, this specifies the user's Teamcenter user name.  <br>sessionDiscriminator From this login operation, this identifies the client session.  <br>  <br>The hostPath argument determines the server machine that the client connects to. Once there, the pool manager on that host uses the username and sessionDiscriminator arguments of the login request to determine which Teamcenter server instance to assign the client to. If the pool manager has an existing Teamcenter server instance with the username/sessionDiscriminator key, the client is assigned to that existing instance of the Teamcenter server, and therefore sharing the server with another client; otherwise, a new instance of the Teamcenter server is used. There are a few general scenarios for the sessionDiscriminator argument:  <br>  <br>Blank If the user jdoe logs on to Teamcenter using two or more client applications using a blank sessionDiscriminator argument (for example, jdoe/ ), all of those clients are assigned to the same Teamcenter server instance. These client applications can be running on the same or different client hosts.  <br>Constant If the user jdoe logs on to Teamcenter using two or more client applications using a constant or fixed sessionDiscriminator argument (for example, jdoe/MyApp ), those clients are assigned to the same Teamcenter server instance. This is similar to the blank sessionDiscriminator argument; the difference is that only multiple instances of the client application using myApp started by jdoe share the same Teamcenter server instance.  <br>Unique If the user jdoe logs on using a unique random-generated string (for example, jdoe/akdk938lakc), the client application will be assigned to a dedicated instance of the Teamcenter server.  <br>  <br>The scenario you use depends on how your client application is used in the integrated environment. The most common case is the unique sessionDiscriminator value.  <br>  <br>Returns:  <br>Basic information about the server and Partial Errors are returned when the authentication is successful but requested role or locale is not supported:  <br>  <br>214102: The login is accepted, however the requested role is not valid, and the default role will be used.  <br>214109: The login is accepted, however the login group was empty so default role will be used.  <br>128003: The logon is accepted. However, data entry should be done using certain locales, as specified by the TC_language_data_entry preference. The details of the data entry are returned in the error message.  <br>128004: The logon is accepted. However, data entry should only contain characters that belong to the encoding of the database instance. The information is in the error message.  <br>Throws:  <br>InvalidCredentialsException - When the credentials supplied are invalid or the requested locale is not allowed.  <br>  <br>515143: The logon was refused due to invalid username or password.  <br>515144: The logon was refused due to invalid username or password.  <br>515142: The logon was refused due to an invalid group.  <br>128001: The logon was refused due to conflict with the encoding of the database instance.  <br>128002: The logon was refused due to missing localization. |
| `Login` | Boolean | SOA URL:  <br>Core-2011-06-Session/login  <br>  <br>Tc Version:  <br>Teamcenter 9.0  <br>  <br>Description:  <br>Authenticates the user's credentials and initialize a Teamcenter session for this client. The operation will throw an InvalidCredentialsException if the username, password or group is not valid.  <br>When the client application is deployed to a 4Tier environment (communication through HTTP or TCCS) the login operation also contributes to the assignment of a Teamcenter server instance to the client session. The Teamcenter architecture varies from other client server architectures in that there is a dedicated instance of the Teamcenter server per client application. However, there are use cases where it is desirable for a single user to have multiple desktop applications running and each sharing a single instance of a Teamcenter server. This is controlled through the following elements:  <br>  <br>hostPath From the Connection class constructor, this specifies the address (URI) the Teamcenter server is hosted on.  <br>username From this login operation, this specifies the user's Teamcenter user name.  <br>sessionDiscriminator From this login operation, this identifies the client session.  <br>  <br>The hostPath argument determines the server machine that the client connects to. Once there, the pool manager on that host uses the username and sessionDiscriminator arguments of the login request to determine which Teamcenter server instance to assign the client to. If the pool manager has an existing Teamcenter server instance with the username/sessionDiscriminator key, the client is assigned to that existing instance of the Teamcenter server, and therefore sharing the server with another client; otherwise, a new instance of the Teamcenter server is used. There are a few general scenarios for the sessionDiscriminator argument:  <br>  <br>Blank If the user jdoe logs on to Teamcenter using two or more client applications using a blank sessionDiscriminator argument (for example, jdoe/ ), all of those clients are assigned to the same Teamcenter server instance. These client applications can be running on the same or different client hosts.  <br>Constant If the user jdoe logs on to Teamcenter using two or more client applications using a constant or fixed sessionDiscriminator argument (for example, jdoe/MyApp ), those clients are assigned to the same Teamcenter server instance. This is similar to the blank sessionDiscriminator argument; the difference is that only multiple instances of the client application using myApp started by jdoe share the same Teamcenter server instance.  <br>Unique If the user jdoe logs on using a unique random-generated string (for example, jdoe/akdk938lakc), the client application will be assigned to a dedicated instance of the Teamcenter server.  <br>  <br>The scenario you use depends on how your client application is used in the integrated environment. The most common case is the unique sessionDiscriminator value.  <br>  <br>Returns:  <br>Basic information about the server and Partial Errors are returned when the authentication is successful but requested role or locale is not supported:  <br>  <br>214102: The login is accepted, however the requested role is not valid, and the default role will be used.  <br>214109: The login is accepted, however the login group was empty so default role will be used.  <br>128003: The logon is accepted. However, data entry should be done using certain locales, as specified by the TC_language_data_entry preference. The details of the data entry are returned in the error message.  <br>128004: The logon is accepted. However, data entry should only contain characters that belong to the encoding of the database instance. The information is in the error message.  <br>Throws:  <br>InvalidCredentialsException - When the credentials supplied are invalid or the requested locale is not allowed.  <br>  <br>515143: The logon was refused due to invalid username or password.  <br>515144: The logon was refused due to invalid username or password.  <br>515142: The logon was refused due to an invalid group.  <br>128001: The logon was refused due to conflict with the encoding of the database instance.  <br>128002: The logon was refused due to missing localization. |
| `UploadFiles` | Boolean | SOA URL:  <br>Core-2010-04-DataManagement/createDatasets  <br>Core-2006-03-FileManagement/commitDatasetFiles  <br>  <br>Uploads one or more files\*\* to Teamcenter using teamcenter FMS service.  <br>  <br>Input -  <br>- Dataset.Documents association should hold files to be uploaded  <br>  <br>Output -  <br>- Action returns True or False in case of success and failure respectively.  <br>- In addtion to this UID property is updated on Dataset object which is passed as an input to action.  <br>  <br>  <br>\*\* - Only one file upload is supported at the moment |
| `GetImanFiles` | List of TcConnector.ImanFile | SOA URL:  <br>Core-2006-03-DataManagement/getProperties  <br>  <br>Read the meta properties of type ImanFile objects associated with input Dataset object  <br>  <br>Input -  <br>- Dataset object having UID  <br>  <br>Output -  <br>- Returns List of ImanFiles associated with input Dataset object |
| `WhereUsed` | Boolean | SOA URL:  <br>Core-2007-01-DataManagement/whereUsed  <br>  <br>Description:  <br>This action returns all the parent Item and ItemRevision objects in the structure where the input Item or ItemRevision is used  <br>  <br>Returns:  <br>Input Object will be updated with WhereUsedResponseInfo objects which consits of level and parentItemRev details.  <br>WhereUsedResponseInfo can be retrived using TcConnector.WhereUsedResponseInfo_ModelObject association |
| `GetFileTypesForDatasetType` | List of TcConnector.Pair | SOA URL:  <br>Core-2007-06-DataManagement/getDatasetTypeInfo  <br>  <br>Returns list of NamedReference names applicable for given Dataset Type. This NamedReference names is required while creating a dataset.  <br>  <br>Input -  <br>- Dataset Type  <br>  <br>Output -  <br>- List of valid NamedReference names for the input Dataset Type |
| `ExpandGRMRelationsForPrimary` | TcConnector.ExpandGRMResponse | SOA URL:  <br>Core-2007-09-DataManagement/expandGRMRelationsForPrimary  <br>  <br>Description:  <br>This action returns the secondary objects that are related to the input primary objects.  <br>  <br>Returns:  <br>An entity of type ExpandGRMResponse, relationshipObject can be retrieved using association TcConnector.relationshipObjects. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `DownloadImages` | Boolean | SOA URL:  <br>Core-2006-03-DataManagement/getProperties  <br>Core-2006-03-FileManagement/getFileReadTickets  <br>  <br>Downloads all the files associated with the Dataset as TcConnector.Image entity  <br>  <br>Input -  <br>- Dataset object having UID  <br>  <br>Output -  <br>- Action returns True or False in case of success and failure respectively.  <br>- Input object's Dataset.Documents association will be updated to point to downloaded files if any. |
| `GetAvailableDatasetTypes` | List of TcConnector.Pair | SOA URL:  <br>Core-2010-04-DataManagement/getAvailableTypesWithDisplayNames  <br>  <br>Tc Version:  <br>Teamcenter 8.2  <br>  <br>Returns list of available Dataset Types. This Dataset Type is required while creating a dataset.  <br>  <br>Input -  <br>- None  <br>  <br>Output -  <br>- List of Teamcenter Dataset Types |
| `GetItemFromId` | TcConnector.GetItemFromIdResponse | SOA URL:  <br>Core-2007-01-DataManagement/getItemFromId  <br>  <br>Description:  <br>This action returns Items, Item Revisions, and Dataset based on the input item id.  <br>  <br>Returns:  <br>An entity of type GetItemFromIdResponse. ItemRevisionOutput which contains item revisions and datasets can be retrieved using association TcConnector.itemRevOutput. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `GetProperties` | Boolean | SOA URL:  <br>Core-2006-03-DataManagement/getProperties  <br>  <br>Description:  <br>This service operation is provided to get property values of Model Objects,  <br>Input entities will be updated with new property values.  <br>  <br>Returns:  <br>Action returns True or False in case of success and failure respectively. |
| `UploadTemporaryFiles` | List of TcConnector.StringObject | SOA URL:  <br>Core-2007-01-FileManagement/getTransientFileTicketsForUpload  <br>  <br>Uploads one or more to Teamcenter Transient Volume using teamcenter FMS service\*.  <br>  <br>Input -  <br>- List of Files to be uploaded  <br>  <br>Output -  <br>- List of StringObject. Each StringObject holds File-Ticket information corresponding to input File.  <br>  <br>\* - By default "deleteFlag" on uploaded transient files is set to true. It indicates the file would be deleted from temporary storage after it is read. |
| `SetProperties` | TcConnector.ServiceResponse | SOA URL:  <br>Core-2010-09-DataManagement/setProperties  <br>  <br>Description:  <br>Updates Teamcenter objects corresponding to input model object entities.  <br>Updated properties will be retrive from inut entiies , updated properties list not required.  <br>  <br>Returns:  <br>An entity of type TcConnector.ServiceResponse. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. List of modified model objects can be retrieved using TcConnector.ResponseData/TcConnector.Updated association. |
| `CreateRelation` | TcConnector.CreateRelationResponse | SOA URL:  <br>Core-2006-03-DataManagement/createRelations  <br>  <br>Description:  <br>Creates the specified relation between the input objects (primary and secondary objects). If the primary object has a relation property by the specified relation name, then the secondary object is associated with the primary object through the relation property.  <br>  <br>Returns:  <br>The created relations. The partial error is returned for any request relation types that are not valid relation type name. |
| `CreateObject` | TcConnector.ServiceResponse | SOA URL:  <br>Core-2015-07-DataManagement/createRelateAndSubmitObjects2  <br>  <br>Description:  <br>This is a generic action for creating any Teamcenter business objects. This will also create any secondary (compounded) objects that need to be created, assuming the CompoundCreateInput for the secondary object is represented in the recursive CompoundCreateInput object e.g. Item is primary object that also creates Item Master and ItemRevision. ItemRevision in turn creates ItemRevision Master. The input for all these levels is passed in through the recursive CompoundCreateInput object.  <br>  <br>Returns:  <br>An entity of type ServiceResponse.  <br>Created objects can be retrieved using TcConnector.ServiceResponse/TcConnector.ResponseData/TcConnector.Created association. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `ReviseObjects` | TcConnector.ReviseObjectsResponse | SOA URL:  <br>Core-2015-07-DataManagement/getDeepCopyData  <br>Core-2013-05-DataManagement/reviseObjects  <br>  <br>Description:  <br>This is a generic revise operation for revisable business objects. This operation revises the given objects and copies or creates new objects using the data for the property values and deep copy data, assuming the reviseInput for the object is provided. The input for revise object is passed through reviseInput entity.  <br>  <br>Returns:  <br>An entity of type ReviseObjectsResponse. Revised objects can be retrieved using association TcConnector.revise_output and the revise tree can be retrieved using TcConnector.reviseTrees. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `ExpandGRMRelationsForSecondary` | TcConnector.ExpandGRMResponse | SOA URL:  <br>Core-2007-09-DataManagement/expandGRMRelationsForSecondary  <br>  <br>Description:  <br>This action returns the primary objects that are related to the input secondary objects  <br>  <br>Returns:  <br>An entity of type ExpandGRMResponse, relationshipObject can be retrieved using association TcConnector.relationshipObjects. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |
| `DownloadFiles` | Boolean | SOA URL:  <br>Core-2006-03-DataManagement/getProperties  <br>Core-2006-03-FileManagement/getFileReadTickets  <br>  <br>Downloads all the files associated with the Dataset as TcConnector.FileDocument entity  <br>  <br>Input -  <br>- Dataset object having UID  <br>  <br>Output -  <br>- Action returns True or False in case of success and failure respectively.  <br>- Input object's Dataset.Documents association will be updated to point to downloaded files if any. |
| `__SSOCallBackRequest` | Boolean |  |
| `CloseBOMWindows` | TcConnector.ServiceResponse | SOA URL:  <br>Cad-2007-01-StructureManagement/closeBOMWindows  <br>  <br>Description:  <br>Closes a BOMWindow. Must be used to close the BOMWindow created during Create BOM Window after calls to Expand Product Structure services are complete.  <br>  <br>Returns:  <br>Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. |

#### Java action `ExpandPSAllLevels`

SOA URL:  
`Cad-2007-01-StructureManagement/expandPSAllLevels ` 
  
Description:  
This actions finds the chilren at all levels given parent bomline.  
  
Returns:  
An entity of type ExpandPSAllLevelsResponse. Expanded child bomlines with respective parents can be retrieved using association TcConnector.ExpandPSAllLevelsOutput. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputEntity | TcConnector.ExpandPSOneLevelInput | Input for ExpandPSAllLevels. |
| BusinessObjectMappings | String | SOA URL:  <br>Cad-2007-01-StructureManagement/expandPSAllLevels  <br>  <br>Tc Version: Teamcenter 2007  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |
| populateServiceDataObjects | Boolean | Indicates whether to populate service data with Created/Updated/Plain objects while constructing a service response.  <br>Following are the valid values:  <br>true - Populates Service Data with model objects and partial errors if any.  <br>false - Does not populate Service Data with any model object however partial errors can still be read if any. |

##### Return type

TcConnector.ExpandPSAllLevelsResponse

#### Java action `ExpandPSOneLevel2`

SOA URL:  
`Cad-2008-06-StructureManagement/expandPSOneLevel` 
  
Description:  
This actions finds the first level children of given parent bomlines.  
InputBOMLine(ParentBOMLine) will be updated with Child Objects (BOMLine_childrenObj).  
DownloadFiles flag if set true, will download the files attached to Datasets.  
  
Returns:  
InputBOMLine(ParentBOMLine) will be updated with Child Objects (BOMLine_childrenObj)  
Ecah Child Object Consits of follwoing Object  
ChildBOMLine(TcConnector.bomLine__Child)  
ItemRevision of the ChildBOMLine (TcConnector.objectOfBOMLine)  
NamedRefrenceList of attachedched Dataset can be retrived from ChildBOMLine (TcConnector.BOMLineAttachments)  
Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputEntity | TcConnector.ExpandPSOneLevel2Input | Input for creating ExpandPSOneLevel2 |
| DownloadFiles | Boolean | DownloadFiles flag if set true, will download the files attached to Datasets. |
| BusinessObjectMappings | String | SOA URL:  <br>Cad-2008-06-StructureManagement/expandPSOneLevel API  <br>  <br>Tc Version: Teamcenter 8.0  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |
| populateServiceDataObjects | Boolean | Indicates whether to populate service data with Created/Updated/Plain objects while constructing a service response.  <br>Following are the valid values:  <br>true - Populates Service Data with model objects and partial errors if any.  <br>false - Does not populate Service Data with any model object however partial errors can still be read if any. |

##### Return type

TcConnector.ExpandPSOneLevel2Response

#### Java action `GetVariantRule`

SOA URL:  
`Cad-2007-01-StructureManagement/getVariantRules` 
  
Description:  
The GetRevisionRules service gets all the variant rule related with given Item Revision.  
  
Returns:  
Input Item Revision entity's TcConnector.variantRulesForItemRevision association will be updated with related variant rules.  

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| ItemRevision | TcConnector.ItemRevision | References of ItemRevision to get variant rules |
| BusinessObjectMappings | String | SOA URL:  <br>Cad-2007-01-StructureManagement/getVariantRules  <br>  <br>Tc Version: Teamcenter 2007  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

Boolean

#### Java action `CreateBOMWindows2`

SOA URL:  
`Cad-2013-05-StructureManagement/createBOMWindows2`  
  
Description:  
This actions Creates a BOMWindow and sets the input Item Revision as the top line , this action takes additional input such as variant rule , configuration context and bomWinPropFlagMap  
  
Returns:  
An entity of type CreateBomWindowResponse. Top line can be retrieved using association TcConnector.bomLine__BOMWindow. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputEntity | TcConnector.CreateBomWindowInput | Input for creating CreateBOMWindows2 |
| BusinessObjectMappings | String | SOA URL:  <br>Cad-2013-05-StructureManagement/createBOMWindows2  <br>  <br>Tc Version: Teamcenter 10.1  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.CreateBomWindowResponse

#### Java action `GetRevisionRules`

SOA URL:  
`Cad-2007-01-StructureManagement/getRevisionRules`  
  
Description:  
The GetRevisionRules service gets all the persistent revision rules in the database.  
  
Returns:  
GetRevisionRulesResponse which contains RevisionRuleInfo. RevisionRuleInfo has the revision rule. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters 

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| BusinessObjectMappings | String | SOA URL:  <br>Cad-2007-01-StructureManagement/getRevisionRules  <br>  <br>Tc Version: Teamcenter 2007  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.GetRevisionRulesResponse

#### Java action `ExpandPSOneLevel`

SOA URL:  
`Cad-2007-01-StructureManagement/expandPSOneLevel`  
  
Description:  
This actions finds the first level children of given parent bomline  
  
Returns:  
An entity of type ExpandPSOneLevelResponse. Expanded child bomlines can be retrieved using association TcConnector.children. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| inputEntity | TcConnector.ExpandPSOneLevelInput | Input for expand one level. |
| businessObjectMapping | String | SOA URL:  <br>Cad-2007-01-StructureManagement/expandPSOneLevel  <br>  <br>Tc Version: Teamcenter 2007  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |
| populateServiceDataObjects | Boolean | Indicates whether to populate service data with Created/Updated/Plain objects while constructing a service response.  <br>Following are the valid values:  <br>true - Populates Service Data with model objects and partial errors if any.  <br>false - Does not populate Service Data with any model object however partial errors can still be read if any. |

##### Return type

TcConnector.ExpandPSOneLevelResponse

#### Java action `CreateBOMWindows`

SOA URL:  
`Cad-2007-01-StructureManagement/createBOMWindows`  
  
Description:  
This actions Creates a BOMWindow and sets the input Item Revision as the top line  
  
Returns:  
An entity of type CreateBomWindowResponse. Top line can be retrieved using association TcConnector.bomLine__BOMWindow. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputData | TcConnector.CreateBomWindowInput | Input for creating CreateBOMWindows2 |
| BusinessObjectMappings | String | SOA URL:  <br>Cad-2013-05-StructureManagement/createBOMWindows2  <br>  <br>Tc Version: Teamcenter 10.1  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.CreateBomWindowResponse

#### Java action `GetWorkflowTemplates`

SOA URL:  
`Workflow-2008-06-Workflow/getWorkflowTemplates`  
  
Description:  
Get the list of workflow templates given the list of target workspace objects and the All or Assigned criteria.  
Returns:  
An entity of type GetWorkflowTemplatesResponse. WorkflowTemplates can be retrieved using association TcConnector.workflowTemplates.Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputData | TcConnector.GetWorkflowTemplatesInput | Input for getWorkflowTemplates service |
| BusinessObjectMappings | String | SOA URL:  <br>Workflow-2008-06-Workflow/getWorkflowTemplates  <br>  <br>Tc Version: Teamcenter 8.0  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.GetWorkflowTemplatesResponse

#### Java action `GetAllTasks`

SOA URL:  
`Workflow-2008-06-Workflow/getAllTasks`  
  
Description:  
This actions gets all the tasks in a process  
Returns:  
An entity of type GetAllTasksResponse. AllTask can be retrieved using association TcConnector.allTasks.Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputData | TcConnector.GetAllTasksInput | Input for getAllTask service |
| BusinessObjectMappings | String | SOA URL:  <br>Workflow-2008-06-Workflow/getAllTasks  <br>  <br>Tc Version: Teamcenter 8.0  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.GetAllTasksResponse

#### Java action `PerformAction`

SOA URL:  
`Workflow-2012-10-Workflow/performAction2`  
  
Description:  
This actions performs an action on a workflow task. The following actions are supported:  

* Assign  
* Start  
* Complete  
* Skip  
* Suspend  
* Resume  
* Undo  
* Perform  
* Approve  
* Reject  
* Promote  
* Demote  
* Claim  
  
Returns:  
Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputData | TcConnector.PerformActionInput | Input for performAction Service |
| BusinessObjectMappings | String | SOA URL:  <br>Workflow-2012-10-Workflow/performAction2  <br>  <br>Tc Version: Teamcenter 9.1.2  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.ServiceResponse

#### Java action `CreateWorkflow`

SOA URL:  
`Workflow-2014-10-Workflow/createWorkflow`  
  
Description:  
This actions relates a workflow process given the process template name, workflow owner, responsible party, attachments and attachment types.  
Returns:  
An entity of type CreateWorkflowResponse. WorkflowTask can be retrieved using association TcConnector.workflowTask.Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputData | TcConnector.CreateWorkflowInput | Input for Create Workflow service |
| BusinessObjectMappings | String | SOA URL:  <br>Workflow-2014-10-Workflow/createWorkflow  <br>  <br>Tc Version: Teamcenter 11.1  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.CreateWorkflowResponse

#### Java action `FindUsersTasks`

SOA URL:  
Core-2007-01-Session/getTCSessionInfo  
Core-2006-03-DataManagement/getProperties  
  
Tc Version:  
Teamcenter 2007  
  
Description:  
This actions finds Task Inboxes of logged-in user, Task Inboxes contains `Task to Perform` and `Task to Track`  
Returns:  
An entity of type FindUsersTasksResponse. Task Inboxes can be retrieved using association TcConnector.TaskInbox_FindUsersTasksResponse. tasks_to_perform and tasks_to_track is a association between EPMTask and TaskInbox.Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.FindUsersTasksResponse

#### Java action `ExecuteSavedQueriesWithObjectRefresh`

SOA URL:  
`Query-2010-04-SavedQuery/findSavedQueries`  
`Query-2008-06-SavedQuery/executeSavedQueries`  
  
This is generic action to perform the search for the saved queries. It takes query name and corresponding search criteria entity for the given query.  
  
Returns:  
An entity of type ServiceResponse. Search Results can be retrieved using association TcConnector.ResponseData/TcConnector.plain. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

| Name |
| --- |
| searchCriteria |

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| QueryName | String | The Name of query for which executesaved Quey is to be performed |
| InputData | Type parameter `searchCriteria` | This is a searchCriteria entity which represents the information required for Searching the business object. |
| BusinessObjectMappings | String | SOA URL:  <br>Query-2010-04-SavedQuery/findSavedQueries  <br>Query-2008-06-SavedQuery/executeSavedQueries  <br>  <br>Tc Version: Teamcenter 8.2 and Teamcenter 8.0  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision;WorkspaceObject=TcConnector.WorkspaceObject) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.ServiceResponse

#### Java action `PerformGeneralQuerySearchAW`

SOA URL:  
`Query-2010-04-SavedQuery/findSavedQueries`  
`Query-2014-11-Finder/performSearch`  
  
Description:  
This is a specific action to send the request to and receive the response from a the data provider `Awp0SavedQuerySearchProvider` for query `General...`. The input criteria for GeneralSearch query is passed through the generalQuerySearchInput object which is extended from .SearchInput Object.  
  
Returns:  
An entity of type SearchResponse. Search Results can be retrieved using association TcConnector.searchResultsList. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.  
  
NOTE:  
This action will work only if the teamcenter enviornment has active workspace installation .

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| generalQuerySearchInput | TcConnector.SearchInput | This is a type of SearchInput entity which represents the information required for Searching the business object. |
| businessObjectMapping | String | SOA URL:  <br>Query-2010-04-SavedQuery/findSavedQueries  <br>Query-2014-11-Finder/performSearch  <br>  <br>Tc Version: Teamcenter 8.2  <br>Tc Version: Teamcenter 9.1.3  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision;WorkspaceObject=TcConnector.WorkspaceObject) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.SearchResponse

#### Java action `PerformItemSimpleQuerySearchAW`

SOA URL:  
`Query-2010-04-SavedQuery/findSavedQueries`  
`Query-2014-11-Finder/performSearch`  
  
Description:  
This is a specific action to send the request to and receive the response from a the data provider `Awp0SavedQuerySearchProvider` for query `Item - simple`. The input criteria for GeneralSearch query is passed through the generalQuerySearchInput object which is extended from .SearchInput Object.  
  
Returns:  
An entity of type SearchResponse. Search Results can be retrieved using association TcConnector.searchResultsList. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.  
  
NOTE:  
This action will work only if the teamcenter enviornment has active workspace installation .

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| itemSimpleQuerySearchInput | TcConnector.SearchInput | This is a type of SearchInput entity which represents the information required for Searching the business object. |
| businessObjectMapping | String | SOA URL:  <br>Query-2010-04-SavedQuery/findSavedQueries  <br>Query-2014-11-Finder/performSearch  <br>  <br>Tc Version: Teamcenter 8.2  <br>Tc Version: Teamcenter 9.1.3  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;WorkspaceObject=TcConnector.WorkspaceObject) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.SearchResponse

#### Java action `FindSavedQueries`

SOA URL:  
`Query-2010-04-SavedQuery/findSavedQueries`  
  
Description:  
This is a generic action finds the saved queries of interest by passing in the criteria such as query name and description. The input for find saved queries is passed through FindSavedQueryInput entity.This operation returns the queries matching the input criteria names and descriptions.  
  
Returns:  
An entity of type FindSavedQueryResponse. Saved Queries can be retrieved using association TcConnector.savedQueries. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputData | TcConnector.FindSavedQueryInput | This is a type of FindSavedQueryInput entity which represents the information required for Fetching business object of the given query name. |
| BusinessObjectMappings | String | SOA URL:  <br>Query-2010-04-SavedQuery/findSavedQueries  <br>  <br>Tc Version: Teamcenter 8.2  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(ImanQuery=TcConnector.ImanQuery) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.FindSavedQueryResponse

#### Java action `ExecuteSavedQueries`

SOA URL:  
`Query-2010-04-SavedQuery/findSavedQueries`  
`Query-2008-06-SavedQuery/executeSavedQueries`  
  
This is generic action to perform the search for the saved queries. It takes query name and corresponding search criteria entity for the given query.  
  
Returns:  
An entity of type ServiceResponse. Search Results can be retrieved using association TcConnector.ResponseData/TcConnector.plain. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

| Name |
| --- |
| searchCriteria |

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| QueryName | String | The Name of query for which executesaved Quey is to be performed |
| InputData | Type parameter `searchCriteria` | This is a searchCriteria entity which represents the information required for Searching the business object. |
| BusinessObjectMappings | String | SOA URL:  <br>Query-2010-04-SavedQuery/findSavedQueries  <br>Query-2008-06-SavedQuery/executeSavedQueries  <br>  <br>Tc Version: Teamcenter 8.2 and Teamcenter 8.0  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision;WorkspaceObject=TcConnector.WorkspaceObject) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.ServiceResponse

#### Java action `PerformSearch`

SOA URL:  
`Query-2014-11-Finder/performSearch`  
  
Description:  
This is a generic action to send the request to and receive the response from a the data provider. It routes search request to a specific provider specified as providerName in the searchInput, assuming the searchCriteria for the provider is represented in the searchCriteriaInput object e.g. `Awp0SavedQuerySearchProvider` is provider that is used for general search. The input criteria for GeneralSearch is passed through the searchCriteriaInput object.  
  
Returns:  
An entity of type SearchResponse. Search Results can be retrieved using association TcConnector.searchResultsList. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputData | TcConnector.SearchInput | This is a type of SearchInput entity which represents the information required for Searching the business object. |
| BusinessObjectMappings | String | SOA URL:  <br>Query-2014-11-Finder/performSearch  <br>  <br>Tc Version: Teamcenter 9.1.3  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision;WorkspaceObject=TcConnector.WorkspaceObject) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.SearchResponse

#### Java action `RetrieveCookie`

This Java action retrieves cookies of an established session between Teamcenter and Mendix. User is expected to be logged in before this Java action is invoked.  
Java action is expected to throw an error if there are no valid cookies. Application devloper is expected to handle the errors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| Cookie | TcConnector.Cookie | Input Cookie |

##### Return type

System.HttpHeader

#### Java action `CallTeamcenterService`

Tc Version:  
Teamcenter 10.1.5  
  
Description:  
The CallTeamcenterService Java Action is the entry point for calling Teamcenter service operations from a Microflow. This Java Action allows the developer to create a custom mapping between the Teamcenter service operation and the Mendix Domain Model Entities.  
  
Returns:  
Service response of type TcConnector.ServiceResponse. The returned list of model objects can be retrieved using appropriate association. Partial errors can be retrieved using TcConnector.ResponseData/TcConnector.PartialErrors  
  
For more information on the usage of this Java Action kindly refer to connector documentation.

##### Type parameters

| Name |
| --- |
| InputArguments |

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| ServiceName | String | Fully qualified name of the service operation (Core-2011-06-Session/login) |
| InputArgument | Type parameter `InputArguments` | The input Entity for the service operation. |
| ResponseObject | TcConnector.ServiceResponse | The returned object. If null an instance of ServiceResponse will be created for the return. |
| OperationMapping | String | Path (relative to resources/OperationMappings) for the operation mapping definition.  <br>The InputArgument and Response are mapped to the service operation input/output based on the definition in the mapping file. |
| BusinessObjectMappings | String | A semicolon separated list of Teamcenter business object names and Entity names (BOMLine=TcConnector.BOMLine;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.ServiceResponse

#### Java action `GetAttachedLOV`

SOA URL:  
`Core-2007-06-LOV/getAttachedLOVs`  
  
Description:  
Get attached LOV based on input type name and property names structure. The LOV object is returned in the response and service data.  
  
Returns:  
LOV Entity  

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| typeName | String |  |
| propertyName | String |  |
| configurationName | String |  |

##### Return type

TcConnector.ListOfValues

#### Java action `GetInitialLOVValues`

SOA URL:  
`Core-2013-05-LOV/getInitialLOVValues`  
  
Description:  
This activity is invoked to query the data for a property having an LOV attachment. The results returned from the server also take into consideration any filter string to be applied on the LOV values to be retrieved.  
  
Returns:  
This activity returns both LOV meta data as necessary for the client to render the LOV and partial LOV values list as specified. Maximum number of results to be returned are specified in the LOVFilterDataInputEntity entity. If there are more results, the moreValuesExist flag in the GetLOVValuesResponse Entity will be set to true. If the flag is true, more values can be retrieved with a call to the GetNextLOVValues activity.  
  
For sample usage, kindly download and refer to latest version of `Teamcenter Connector Sample Application`

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| inputEntity | TcConnector.GetInitialLOVValuesInputEntity | Input entity comprising information about Business Object, Property for which LOV information is to be read. It also contains information about number of values to fetch in this call and if any filtering to be applied on the list of values to be retrieved. |
| configurationName | String | Teamcenter Configuraiton name. Request will be made to a Teamcenter instance specified in the input configuration. |

##### Return type

TcConnector.GetLOVValuesResponse

#### Java action `GetNextLOVValues`

SOA URL:  
`Core-2013-05-LOV/getNextLOVValues`  
  
Description:  
This activity is invoked after a call to GetInitialLOVValues if the moreValuesExist flag is true in the GetLOVValuesResponse Entity returned from a call to the GetInitialLOVValues activity. The activity will retrieve the next set of LOV values.  
  
Returns:  
LOV Search Results (GetLOVValuesResponse entity instance). Response contains LOV metadata information (LOV usage, LOV style, etc.). It also contains the instance data (LOV values) that the client can use to render the LOV UI widget. The output also contains information as to whether there are more results to be processed in which case a user can page to get next set of values (this triggers a call to the subsequent GetNextLOVValues activity).  
  
For sample usage, kindly download and refer to latest version of `Teamcenter Connector Sample Application`

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| lovDataEntity | TcConnector.LOVDataEntity | Input entity comprising information about LOV object is to be read. It also contains information about number of values to fetch in this call and if any filtering to be applied on the list of values to be retrieved. |
| configurationName | String | Teamcenter Configuraiton name. Request will be made to a Teamcenter instance specified in the input configuration. |

##### Return type

TcConnector.GetLOVValuesResponse

#### Java action `GetTcSessionInformation`

SOA URL:  
`Core-2007-01-Session/getTCSessionInfo`  
  
Description:  
Retrieves information about the Teamcenter Server session.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| businessObjectMapping | String | SOA URL:  <br>Core-2007-01-Session/getTCSessionInfo  <br>  <br>Tc Version: Teamcenter 2007  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.TcServerInformation

#### Java action `GetTcSessionInfo`

(Deprecated)  
  
SOA URL:  
`Core-2007-01-Session/getTCSessionInfo`  
  
Description:  
Retrieves information about the Teamcenter Server session.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.TcServerInfo

#### Java action `Logout`

SOA URL:  
`Core-2006-03-Session/logout`  
  
Tc Version:  
TcEng 2005 SR1  
  
Description:  
Retrieves the Teamcenter Session for the user and attempts to log them out of Teamcenter.  
  
Once logged out the cookies associated with the session will be deleted and the Teamcenter Host Address within the session will be set to an empty string.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

Boolean

#### Java action `LoginSSO`

SOA URL:  
`Core-2011-06-Session/login`  
  
Tc Version:  
Teamcenter 9.0  
  
Description:  
Authenticates the user's credentials and initialize a Teamcenter session for this client. The operation will throw an InvalidCredentialsException if the username, password or group is not valid.  
When the client application is deployed to a 4Tier environment (communication through HTTP or TCCS) the login operation also contributes to the assignment of a Teamcenter server instance to the client session. The Teamcenter architecture varies from other client server architectures in that there is a dedicated instance of the Teamcenter server per client application. However, there are use cases where it is desirable for a single user to have multiple desktop applications running and each sharing a single instance of a Teamcenter server. This is controlled through the following elements:  
  
hostPath From the Connection class constructor, this specifies the address (URI) the Teamcenter server is hosted on.  
username From this login operation, this specifies the user's Teamcenter user name.  
sessionDiscriminator From this login operation, this identifies the client session.  
  
The hostPath argument determines the server machine that the client connects to. Once there, the pool manager on that host uses the username and sessionDiscriminator arguments of the login request to determine which Teamcenter server instance to assign the client to. If the pool manager has an existing Teamcenter server instance with the username/sessionDiscriminator key, the client is assigned to that existing instance of the Teamcenter server, and therefore sharing the server with another client; otherwise, a new instance of the Teamcenter server is used. There are a few general scenarios for the sessionDiscriminator argument:  
  
Blank If the user jdoe logs on to Teamcenter using two or more client applications using a blank sessionDiscriminator argument (for example, jdoe/ ), all of those clients are assigned to the same Teamcenter server instance. These client applications can be running on the same or different client hosts.  
Constant If the user jdoe logs on to Teamcenter using two or more client applications using a constant or fixed sessionDiscriminator argument (for example, jdoe/MyApp ), those clients are assigned to the same Teamcenter server instance. This is similar to the blank sessionDiscriminator argument; the difference is that only multiple instances of the client application using myApp started by jdoe share the same Teamcenter server instance.  
Unique If the user jdoe logs on using a unique random-generated string (for example, jdoe/akdk938lakc), the client application will be assigned to a dedicated instance of the Teamcenter server.  
  
The scenario you use depends on how your client application is used in the integrated environment. The most common case is the unique sessionDiscriminator value.  
  
Returns:  
Basic information about the server and Partial Errors are returned when the authentication is successful but requested role or locale is not supported:  
  
214102: The login is accepted, however the requested role is not valid, and the default role will be used.  
214109: The login is accepted, however the login group was empty so default role will be used.  
128003: The logon is accepted. However, data entry should be done using certain locales, as specified by the TC_language_data_entry preference. The details of the data entry are returned in the error message.  
128004: The logon is accepted. However, data entry should only contain characters that belong to the encoding of the database instance. The information is in the error message.  
Throws:  
InvalidCredentialsException - When the credentials supplied are invalid or the requested locale is not allowed.  
  
515143: The logon was refused due to invalid username or password.  
515144: The logon was refused due to invalid username or password.  
515142: The logon was refused due to an invalid group.  
128001: The logon was refused due to conflict with the encoding of the database instance.  
128002: The logon was refused due to missing localization.  

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| UserCredentials | TcConnector.Credentials | Credentials to use for Logging int to Teamcenter. |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |
| TcSession | TcConnector.TcSession |  |

##### Return type

Boolean

#### Java action `Login`

SOA URL:  
`Core-2011-06-Session/login`  
  
Tc Version:  
Teamcenter 9.0  
  
Description:  
Authenticates the user's credentials and initialize a Teamcenter session for this client. The operation will throw an InvalidCredentialsException if the username, password or group is not valid.  
When the client application is deployed to a 4Tier environment (communication through HTTP or TCCS) the login operation also contributes to the assignment of a Teamcenter server instance to the client session. The Teamcenter architecture varies from other client server architectures in that there is a dedicated instance of the Teamcenter server per client application. However, there are use cases where it is desirable for a single user to have multiple desktop applications running and each sharing a single instance of a Teamcenter server. This is controlled through the following elements:  
  
hostPath From the Connection class constructor, this specifies the address (URI) the Teamcenter server is hosted on.  
username From this login operation, this specifies the user's Teamcenter user name.  
sessionDiscriminator From this login operation, this identifies the client session.  
  
The hostPath argument determines the server machine that the client connects to. Once there, the pool manager on that host uses the username and sessionDiscriminator arguments of the login request to determine which Teamcenter server instance to assign the client to. If the pool manager has an existing Teamcenter server instance with the username/sessionDiscriminator key, the client is assigned to that existing instance of the Teamcenter server, and therefore sharing the server with another client; otherwise, a new instance of the Teamcenter server is used. There are a few general scenarios for the sessionDiscriminator argument:  
  
Blank If the user jdoe logs on to Teamcenter using two or more client applications using a blank sessionDiscriminator argument (for example, jdoe/ ), all of those clients are assigned to the same Teamcenter server instance. These client applications can be running on the same or different client hosts.  
Constant If the user jdoe logs on to Teamcenter using two or more client applications using a constant or fixed sessionDiscriminator argument (for example, jdoe/MyApp ), those clients are assigned to the same Teamcenter server instance. This is similar to the blank sessionDiscriminator argument; the difference is that only multiple instances of the client application using myApp started by jdoe share the same Teamcenter server instance.  
Unique If the user jdoe logs on using a unique random-generated string (for example, jdoe/akdk938lakc), the client application will be assigned to a dedicated instance of the Teamcenter server.  
  
The scenario you use depends on how your client application is used in the integrated environment. The most common case is the unique sessionDiscriminator value.  
  
Returns:  
Basic information about the server and Partial Errors are returned when the authentication is successful but requested role or locale is not supported:  
  
214102: The login is accepted, however the requested role is not valid, and the default role will be used.  
214109: The login is accepted, however the login group was empty so default role will be used.  
128003: The logon is accepted. However, data entry should be done using certain locales, as specified by the TC_language_data_entry preference. The details of the data entry are returned in the error message.  
128004: The logon is accepted. However, data entry should only contain characters that belong to the encoding of the database instance. The information is in the error message.  
Throws:  
InvalidCredentialsException - When the credentials supplied are invalid or the requested locale is not allowed.  
  
515143: The logon was refused due to invalid username or password.  
515144: The logon was refused due to invalid username or password.  
515142: The logon was refused due to an invalid group.  
128001: The logon was refused due to conflict with the encoding of the database instance.  
128002: The logon was refused due to missing localization.  

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| UserCredentials | TcConnector.Credentials | Credentials to use for Logging int to Teamcenter. |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

Boolean

#### Java action `UploadFiles`

SOA URL:  
`Core-2010-04-DataManagement/createDatasets`  
`Core-2006-03-FileManagement/commitDatasetFiles`  
  
Uploads one or more files to Teamcenter using teamcenter FMS service.     
Only one file upload is supported at the moment. 
  
Input

* Dataset.Documents association should hold files to be uploaded  
  
Output

* Action returns True or False in case of success and failure respectively.  
* In addtion to this UID property is updated on Dataset object which is passed as an input to action.  

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| DatasetParameter | TcConnector.Dataset | SOA URL:  <br>Core-2010-04-DataManagement/createDatasets  <br>Core-2006-03-FileManagement/commitDatasetFiles  <br>  <br>Tc Version: Teamcenter 8.2 and TcEng 2005 SR1  <br>  <br>Placeholder to maintain the file(s) to be uplaoded to Teamcenter. Dataset.Documents association should hold files to be uploaded  <br>Input Dataset object would be updated with UID for reference once all the files are uploaded to Teamcenter. UID can be used in future to download the files from Teamcenter. |
| NamedReference | String | Reference name to be used to associate Uploaded File(s) to the Dataset.  <br>  <br>Please use getFileTypesForDatasetType Java Action to get list of valid NamedReference names for the given dataset type. |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

Boolean

#### Java action `GetImanFiles`

SOA URL:  
Core-2006-03-DataManagement/getProperties  
  
Read the meta properties of type ImanFile objects associated with input Dataset object  
  
Input

* Dataset object having UID  
  
Output

* Returns List of ImanFiles associated with input Dataset object  

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| DatasetParameter | TcConnector.Dataset | SOA URL:  <br>Core-2006-03-DataManagement/getProperties  <br>Core-2006-03-FileManagement/getFileReadTickets  <br>  <br>Tc Version: TcEng 2005 SR1  <br>  <br>Must contain UID of the Teamcenter dataset whose files are to be downloaded. |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

List of TcConnector.ImanFile

#### Java action `WhereUsed`

SOA URL:  
Core-2007-01-DataManagement/whereUsed  
  
Description:  
This action returns all the parent Item and ItemRevision objects in the structure where the input Item or ItemRevision is used  
  
Returns:  
Input Object will be updated with WhereUsedResponseInfo objects which consits of level and parentItemRev details.  
WhereUsedResponseInfo can be retrived using TcConnector.WhereUsedResponseInfo_ModelObject association

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputEntity | TcConnector.WhereUsedInput | Input for whereUsed Service |
| BusinessObjectMappings | String | SOA URL:  <br>Core-2007-01-DataManagement/whereUsed  <br>  <br>Tc Version: Teamcenter 2007  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

Boolean

#### Java action `GetFileTypesForDatasetType`

SOA URL:  
`Core-2007-06-DataManagement/getDatasetTypeInfo`  
  
Returns list of NamedReference names applicable for given Dataset Type. This NamedReference names is required while creating a dataset.  
  
Input

* Dataset Type  
  
Output

* List of valid NamedReference names for the input Dataset Type

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| dataset_type | String | SOA URL:  <br>Core-2007-06-DataManagement/getDatasetTypeInfo  <br>  <br>Tc Version: Teamcenter 8.2  <br>  <br>Dataset Type for which list of NamedReference names is to be returned. |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

List of TcConnector.Pair

#### Java action `ExpandGRMRelationsForPrimary`

SOA URL:  
`Core-2007-09-DataManagement/expandGRMRelationsForPrimary`  
  
Description:  
This action returns the secondary objects that are related to the input primary objects.  
  
Returns:  
An entity of type ExpandGRMResponse, relationshipObject can be retrieved using association TcConnector.relationshipObjects. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputEntity | TcConnector.ExpandGRMInput | Input for ExpandGRMRelationsForPrimary |
| BusinessObjectMappings | String | SOA URL:  <br>Core-2007-09-DataManagement/expandGRMRelationsForPrimary  <br>  <br>Tc Version: Teamcenter 2007  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.ExpandGRMResponse

#### Java action `DownloadImages`

SOA URL:  
`Core-2006-03-DataManagement/getProperties`  
`Core-2006-03-FileManagement/getFileReadTickets`  
  
Downloads all the files associated with the Dataset as TcConnector.Image entity  
  
Input

* Dataset object having UID  
  
Output

* Action returns True or False in case of success and failure respectively.  
* Input objec's Dataset.Documents association will be updated to point to downloaded files if any.  

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| DatasetParameter | TcConnector.Dataset | SOA URL:  <br>Core-2006-03-DataManagement/getProperties  <br>Core-2006-03-FileManagement/getFileReadTickets  <br>  <br>Tc Version: TcEng 2005 SR1  <br>  <br>Must contain UID of the Teamcenter dataset whose files are to be downloaded. |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

Boolean

#### Java action `GetAvailableDatasetTypes`

SOA URL:  
`Core-2010-04-DataManagement/getAvailableTypesWithDisplayNames`  
  
Tc Version:  
Teamcenter 8.2  
  
Returns list of available Dataset Types. This Dataset Type is required while creating a dataset.  
  
Input

* None  
  
Output

* List of Teamcenter Dataset Types  

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

List of TcConnector.Pair

#### Java action `GetItemFromId`

SOA URL:  
`Core-2007-01-DataManagement/getItemFromId`  
  
Description:  
This action returns Items, Item Revisions, and Dataset based on the input item id.  
  
Returns:  
An entity of type GetItemFromIdResponse. ItemRevisionOutput which contains item revisions and datasets can be retrieved using association TcConnector.itemRevOutput. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputEntity | TcConnector.GetItemFromIdInput | Input for GetItemFromId Service |
| BusinessObjectMappings | String | SOA URL:  <br>Core-2007-01-DataManagement/getItemFromId  <br>  <br>Tc Version: Teamcenter 2007  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.GetItemFromIdResponse

#### Java action `GetProperties`

SOA URL:  
Core-2006-03-DataManagement/getProperties  
  
Description:  
This service operation is provided to get property values of Model Objects,  
Input entities will be updated with new property values.  
  
Returns:  
Action returns True or False in case of success and failure respectively.  

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputObjects | List of TcConnector.ModelObject | List of Mendix objects whose properties are to be fetched. All the properties available on the input object will be retrieved. |
| BusinessObjectMappings | String | SOA URL:  <br>Core-2006-03-DataManagement/getProperties  <br>  <br>Tc Version: TcEng 2005 SR1  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(ImanQuery=TcConnector.ImanQuery) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

Boolean

#### Java action `UploadTemporaryFiles`

SOA URL:  
`Core-2007-01-FileManagement/getTransientFileTicketsForUpload`  
  
Uploads one or more to Teamcenter Transient Volume using teamcenter FMS service.    
By default, `deleteFlag` on uploaded transient files is set to true. It indicates the file would be deleted from temporary storage after it is read.  
  
Input

* List of Files to be uploaded  
  
Output

* List of StringObject. Each StringObject holds File-Ticket information corresponding to input File.  

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |
| Files | List of TcConnector.FileDocument | List of files to be uploaded to Teamcenter Transient Volume. |

##### Return type

List of TcConnector.StringObject

#### Java action `SetProperties`

SOA URL:  
`Core-2010-09-DataManagement/setProperties`  
  
Description:  
Updates Teamcenter objects corresponding to input model object entities.  
Updated properties will be retrive from inut entiies , updated properties list not required.  
  
Returns:  
An entity of type TcConnector.ServiceResponse. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors. List of modified model objects can be retrieved using TcConnector.ResponseData/TcConnector.Updated association.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| modelObjects | List of TcConnector.ModelObject | List of model object entities ( with updated values ) whose corresponding Teamcenter objects to be updated on Teamcenter site. |
| businessObjectMapping | String | SOA URL:  <br>Core-2010-09-DataManagement/setProperties  <br>  <br>Tc Version: Teamcenter 8.3  <br>  <br>Business object mappings  <br>e.g. ItemRevision=TcConnector.ItemRevision |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.ServiceResponse

#### Java action `CreateRelation`

SOA URL:  
`Core-2006-03-DataManagement/createRelations`  
  
Description:  
Creates the specified relation between the input objects (primary and secondary objects). If the primary object has a relation property by the specified relation name, then the secondary object is associated with the primary object through the relation property.  
  
Returns:  
The created relations. The partial error is returned for any request relation types that are not valid relation type name.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputData | TcConnector.CreateRelationInput | Input argument for invoking createRelations service. |
| BusinessObjectMappings | String | SOA URL:  <br>Core-2006-03-DataManagement/createRelations  <br>  <br>Tc Version: TcEng 2005 SR1  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(ImanRelation=TcConnector.ImanRelation) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.CreateRelationResponse

#### Java action `CreateObject`

SOA URL:  
`Core-2015-07-DataManagement/createRelateAndSubmitObjects2`  
  
Description:  
This is a generic action for creating any Teamcenter business objects. This will also create any secondary (compounded) objects that need to be created, assuming the CompoundCreateInput for the secondary object is represented in the recursive CompoundCreateInput object e.g. Item is primary object that also creates Item Master and ItemRevision. ItemRevision in turn creates ItemRevision Master. The input for all these levels is passed in through the recursive CompoundCreateInput object.  
  
Returns:  
An entity of type ServiceResponse.  
Created objects can be retrieved using TcConnector.ServiceResponse/TcConnector.ResponseData/TcConnector.Created association. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| createInput | TcConnector.CreateInput | This is a type of CreateInput entity which represents the information required for Creating the business object. |
| businessObjectMapping | String | SOA URL:  <br>Core-2015-07-DataManagement/createRelateAndSubmitObjects2  <br>  <br>Tc Version: Teamcenter 11.2  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.ServiceResponse

#### Java action `ReviseObjects`

SOA URL:  
`Core-2015-07-DataManagement/getDeepCopyData`  
`Core-2013-05-DataManagement/reviseObjects`  
  
Description:  
This is a generic revise operation for revisable business objects. This operation revises the given objects and copies or creates new objects using the data for the property values and deep copy data, assuming the reviseInput for the object is provided. The input for revise object is passed through reviseInput entity.  
  
Returns:  
An entity of type ReviseObjectsResponse. Revised objects can be retrieved using association TcConnector.revise_output and the revise tree can be retrieved using TcConnector.reviseTrees. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| objectToRevise | TcConnector.WorkspaceObject | The target business object being revised. |
| reviseInput | TcConnector.ReviseInputs | This is a type of ReviseInput entity which represents the information required for revising the business object. |
| businessObjectMapping | String | SOA URL:  <br>Core-2015-07-DataManagement/getDeepCopyData  <br>Core-2013-05-DataManagement/reviseObjects  <br>Core-2007-09-DataManagement/loadObjects  <br>  <br>Tc Version: Teamcenter 11.2  <br>Tc Version: Teamcenter 10.1  <br>Tc Version: Teamcenter 2007.1 MP1  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision;WorkspaceObject=TcConnector.WorkspaceObject) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.ReviseObjectsResponse

#### Java action `ExpandGRMRelationsForSecondary`

SOA URL:  
`Core-2007-09-DataManagement/expandGRMRelationsForSecondary`  
  
Description:  
This action returns the primary objects that are related to the input secondary objects  
  
Returns:  
An entity of type ExpandGRMResponse, relationshipObject can be retrieved using association TcConnector.relationshipObjects. Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputEntity | TcConnector.ExpandGRMInput | Input for ExpandGRMRelationsForSecondary |
| BusinessObjectMappings | String | SOA URL:  <br>Core-2007-09-DataManagement/expandGRMRelationsForSecondary  <br>  <br>Tc Version: Teamcenter 2007  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.ExpandGRMResponse

[Back to top](https://docs.sw.siemens.com/documentation/external/PL20250618245080666/en-US/TcConnectorAPI/TCConnector_2506.html#top)

#### Java action `DownloadFiles`

SOA URL:  
`Core-2006-03-DataManagement/getProperties`  
`Core-2006-03-FileManagement/getFileReadTickets`  
  
Downloads all the files associated with the Dataset as TcConnector.FileDocument entity  
  
Input

* Dataset object having UID  
  
Output

* Action returns True or False in case of success and failure respectively.  
* Input object's Dataset.Documents association will be updated to point to downloaded files if any.  

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| DatasetParameter | TcConnector.Dataset | SOA URL:  <br>Core-2006-03-DataManagement/getProperties  <br>Core-2006-03-FileManagement/getFileReadTickets  <br>  <br>Tc Version: TcEng 2005 SR1  <br>  <br>Must contain UID of the Teamcenter dataset whose files are to be downloaded. |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

Boolean

#### Java action `__SSOCallBackRequest`

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| contextPath | String |  |

##### Return type

Boolean

#### Java action `CloseBOMWindows`

SOA URL:  
`Cad-2007-01-StructureManagement/closeBOMWindows`  
  
Description:  
Closes a BOMWindow. Must be used to close the BOMWindow created during Create BOM Window after calls to Expand Product Structure services are complete.  
  
Returns:  
Partial errors can be retrieved using association TcConnector.ResponseData/TcConnector.PartialErrors.

##### Type parameters

This has no type parameters.

##### Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| InputEntity | TcConnector.CloseBOMWindowslInput | Input for creating CloseBOMWindows |
| BusinessObjectMappings | String | SOA URL:  <br>Cad-2007-01-StructureManagement/closeBOMWindows  <br>  <br>Tc Version: Teamcenter 2007  <br>  <br>A semicolon separated list of Teamcenter business object names and Entity names. e.g.(Item=TcConnector.Item;ItemRevision=TcConnector.ItemRevision) |
| ConfigurationName | String | The teamcenter configuration name for which the action is to be performed. In case of single active connection pass the configuration name or empty value. |

##### Return type

TcConnector.ServiceResponse

### Enumerations

| Name | Documentation |
| --- | --- |
| `FileDownloadType` |  |

#### Enumeration `FileDownloadType`

##### Values

| Name | Caption |
| --- | --- |
| FileDocument | FileDocument |
| Image | Image |

### ModuleRoles

| Name | Documentation |
| --- | --- |
| Administrator | This module role gives the admin rights to the assigned user roles. |
| User | This module role only give the user rights to the assigned user roles. |

### Pages

| Title | Documentation | Allowed Roles |
| --- | --- | --- |
| Teamcenter Home |  |  |
| Admin Home |  |  |
| Teamcenter Configuration |  | TcConnector.Administrator |
| Teamcenter Configurations |  | TcConnector.Administrator |
| Teamcenter Login |  |  |
| Teamcenter Login |  |  |
| Active Configurations |  | TcConnector.Administrator, TcConnector.User |

### Constants

| Name | Value | Documentation |
| --- | --- | --- |
| EnableMultipleActiveConfig | False | Set to true to use multiple configuration active at same time, false value with only allow single active configuration. |
| Version | 2412.0225.0 |  |
| SSO_ContextURLPath | TCSSO |  |
| UseSharedSession | True | Set to true to share a single TcServer session for a given user across all Mendix sessions.  <br>When set to false, a new TcServer is assinged for each Mendix session. |

### Snippets

| Name | Documentation |
| --- | --- |
| _TCSSO_Connector_Documentation |  |
| _TCX_Connector_Documentation |  |
