---
title: "Consistency Checks for Custom Blob Documents"
linktitle: "Consistency Checks"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/consistency-checks/
description: "Describes how to define consistency checks for custom blob documents in Studio Pro extensions."
---

## Introduction

Consistency checks allow your extension to validate custom blob documents and display errors, warnings, and deprecation notices in Studio Pro's **Errors** pane. These checks run automatically before deployment and whenever referenced elements change, ensuring your documents remain valid throughout the development lifecycle.

## Prerequisites

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.
* Familiarize yourself with creating custom documents as described in [Custom Blob Documents](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/).

## Basic Example

Based on the code described in [Custom Blob Documents](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/), this section defines consistency checks for the first name field and shows how to display errors, warnings, and deprecation notices in Studio Pro's **Errors** pane.

```typescript {hl_lines=["10-13", "19-58", "69"]}
import { 
    IComponent, 
    getStudioProApi, 
    ConsistencyError, 
    ConsistencyCheckRegistration 
} from "@mendix/extensions-api";
import { personDarkThemeIcon, personDocumentType, personLightThemeIcon } from "../model/constants";
import { PersonInfo } from "../model/PersonInfo";

// Error code for empty first name
const FIRST_NAME_EMPTY = "PRSN001";
const FIRST_NAME_TOO_SHORT = "PRSN002";
const DEFAULT_VALUE_WARNING = "PRSN003";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);

        // Define consistency check
        const check = async (data: PersonInfo) => {
            const errors: ConsistencyError[] = [];

            if (!data.firstName) {
                errors.push({
                    errorCode: FIRST_NAME_EMPTY,
                    errorDescription: "First name cannot be empty",
                    severity: "error",
                    elementText: "Extension",
                    propertyName: "firstName"
                });
            }
            
            if (data.firstName && data.firstName.trim().length < 2) {
                errors.push({
                    errorCode: FIRST_NAME_TOO_SHORT,
                    errorDescription: "First name must be at least 2 characters",
                    severity: "warning",
                    propertyName: "firstName"
                });
            }

            if (data.firstName === "John Doe") {
                errors.push({
                    errorCode: DEFAULT_VALUE_WARNING,
                    errorDescription: "Please change the default name 'John Doe' to a real name",
                    severity: "deprecation",
                    propertyName: "firstName"
                });
            }

            return { errors };
        };

        // Create registration object
        const consistencyCheckRegistration: ConsistencyCheckRegistration<PersonInfo> = {
            reservedErrorCodes: [FIRST_NAME_EMPTY, FIRST_NAME_TOO_SHORT, DEFAULT_VALUE_WARNING],
            check
        };
        
        await studioPro.app.model.customBlobDocuments.registerDocumentType<PersonInfo>({
            type: personDocumentType,
            readableTypeName: 'Person',
            defaultContent: {
                firstName: '',
                lastName: '',
                age: 0,
                email: ''
            },
            consistencyCheckRegistration
        });

        await studioPro.ui.editors.registerEditorForCustomDocument({
            documentType: personDocumentType,
            editorEntryPoint: 'editor',
            editorKind: 'tab',
            iconLight: personLightThemeIcon,
            iconDark: personDarkThemeIcon
        })

  }
}
```

Every `errorCode` returned by your check function must be listed in `reservedErrorCodes`. You cannot use the Mendix reserved prefixes `cw`, `ce`, or `ci`during registration or the check will fail and a generic error message will appear in the **Errors** pane.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/consistencyChecks/generic_error.png" alt="" >}}

This error also appears if one of your checks throws an unexpected exception. To find out what the exception was, check the Mendix logs.

{{% alert color="warning" %}}
Do not modify the blob document or its dependencies during consistency checks. Saving is blocked at this point because changes could interfere with the checks and leave the app in an invalid state.
{{% /alert %}}

{{% alert color="info" %}}
The check function is async, so you can use `await` when loading other model elements to validate references.
{{% /alert %}}

## ConsistencyError Properties

| Property           | Required | Description                                 |
|--------------------|----------|---------------------------------------------|
| `errorCode`        | Yes      | Unique code                                 |
| `errorDescription` | Yes      | Message shown to the user                   |
| `severity`         | Yes      | `"error"`, `"warning"`, or `"deprecation"`  |
| `elementText`      | No       | Text shown in the Element column            |
| `propertyName`     | No       | Name of the property with the error         |

## Checking References to Other Documents

If your document stores references to other model elements (microflows, constants, or other custom blob documents), you can validate that those elements still exist. If a user deletes a referenced microflow, your consistency check can report the error.

Replace your `src/main/index.ts` file with the following:

```typescript {hl_lines=["14", "20", "27-54", "95", "99", "103"]}
import { 
    IComponent, 
    getStudioProApi, 
    ConsistencyError, 
    ConsistencyCheckRegistration
} from "@mendix/extensions-api";
import { personDarkThemeIcon, personDocumentType, personLightThemeIcon } from "../model/constants";
import { PersonInfo } from "../model/PersonInfo";

// Error codes
const FIRST_NAME_EMPTY = "PRSN001";
const FIRST_NAME_TOO_SHORT = "PRSN002";
const DEFAULT_VALUE_WARNING = "PRSN003";
const WRONG_CONSTANT_TYPE = "PRSN004";

const reservedErrorCodes: string[] = [
    FIRST_NAME_EMPTY,
    FIRST_NAME_TOO_SHORT,
    DEFAULT_VALUE_WARNING,
    WRONG_CONSTANT_TYPE
];

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);

        const constantCheck = async (data: PersonInfo) => {
            const result: ConsistencyError[] = [];
            const dependentElementIds: string[] = [];

            if (data.configConstant) {
                const constants = await studioPro.app.model.constants.loadAll(
                    k => k.$ID === data.configConstant!.id
                );

                const constant = constants.find(c => c.$ID === data.configConstant!.id);

                if (constant) {
                    if (constant.excluded) {
                        result.push({
                            errorCode: DOC_EXCLUDED,
                            errorDescription: "Referenced document is excluded",
                            severity: "error",
                            elementText: "Config Constant",
                            propertyName: "configConstant"
                        });
                    }

                    if (constant.type.$Type !== "DataTypes$StringType") {
                        result.push({
                            errorCode: WRONG_CONSTANT_TYPE,
                            errorDescription: `Constant '${data.configConstant.name}' must be of type String`,
                            severity: "error",
                            elementText: "Config Constant",
                            propertyName: "configConstant"
                        });
                    }
                    
                    dependentElementIds.push(data.configConstant.id);                    
                }
            }

            return { result, dependentElementIds };
        };

        // Check firstName field
        const firstNameCheck = async (data: PersonInfo) => {
            const result: ConsistencyError[] = [];

            if (!data.firstName) {
                const error: ConsistencyError = {
                    errorCode: FIRST_NAME_EMPTY,
                    errorDescription: "First name cannot be empty",
                    severity: "error",
                    elementText: "Extension",
                    propertyName: "firstName"
                };

                result.push(error);
            } else if (data.firstName.trim().length < 2) {
                const error: ConsistencyError = {
                    errorCode: FIRST_NAME_TOO_SHORT,
                    errorDescription: "First name must be at least 2 characters",
                    severity: "warning",
                    propertyName: "firstName"
                };

                result.push(error);
            } else if (data.firstName === "John Doe") {
                const error: ConsistencyError = {
                    errorCode: DEFAULT_VALUE_WARNING,
                    errorDescription: "Please change the default name 'John Doe' to a real name",
                    severity: "deprecation",
                    propertyName: "firstName"
                };

                result.push(error);
            }

            return { result, dependentElementIds: [] };
        };

        const consistencyCheck = async (data: PersonInfo) => {
            const firstNameCheckResult = await firstNameCheck(data);
            const constantCheckResult = await constantCheck(data);
            return {
                errors: [
                    ...firstNameCheckResult.result,
                    ...constantCheckResult.result
                ],
                dependentElementIds: [
                    ...(firstNameCheckResult.dependentElementIds ?? []),
                    ...(constantCheckResult.dependentElementIds ?? [])
                ]
            };
        };

        const consistencyCheckRegistration: ConsistencyCheckRegistration<PersonInfo> = {
            check: consistencyCheck,
            reservedErrorCodes
        };

        await studioPro.app.model.customBlobDocuments.registerDocumentType<PersonInfo>({
            type: personDocumentType,
            readableTypeName: "Person",
            defaultContent: {
                firstName: "",
                lastName: "",
                age: 0,
                email: "",
                configConstant: undefined
            },
            consistencyCheckRegistration
        });

        await studioPro.ui.editors.registerEditorForCustomDocument({
            documentType: personDocumentType,
            editorEntryPoint: "editor",
            editorKind: "tab",
            iconLight: personLightThemeIcon,
            iconDark: personDarkThemeIcon
        });
    }
};
```


Replace your `src/model/PersonInfo.ts` file with the following:

```typescript {hl_lines=["6-10"]}
export type PersonInfo = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    configConstant?: { 
        id: string;
        name: string;
        qualifiedName: string;
    };
}
```

Change the editor.tsx to:

```typescript {hl_lines=["47-71", "89-97"]}
import React, { StrictMode, useCallback, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { getStudioProApi, IComponent, StudioProApi } from "@mendix/extensions-api";
import type { PersonInfo } from "../model/PersonInfo";

function PersonEditor(input: { studioPro: StudioProApi; documentId: string }) {
    const { studioPro, documentId } = input;
    const documentApi = studioPro.app.model.customBlobDocuments;
    
    const [person, setPerson] = useState<PersonInfo>({
        firstName: "",
        lastName: "",
        age: 0,
        email: "",
    });
    const [documentVersion, setDocumentVersion] = useState(0);

    useEffect(() => {
        documentApi.addEventListener("documentsChanged", ({ documents }) => {
            if (documents.some(doc => doc.documentId === documentId)) {
                setDocumentVersion(v => v + 1);
            }
        });
    }, [documentApi, documentId]);

    useEffect(() => {
        documentApi
            .getDocumentById<PersonInfo>(documentId)
            .then(documentFromModel => {
                if (documentFromModel && !("error" in documentFromModel)) {
                    setPerson(documentFromModel.document.contents);
                }
            })
            .catch(err => {
                studioPro.ui.messageBoxes.show("error", "Error loading document", "Details: " + err?.message || err);
            });
    }, [studioPro, documentApi, documentId, documentVersion]);

    const savePerson = useCallback(async () => {
        try {
            await documentApi.updateDocumentContent<PersonInfo>(documentId, person);
        } catch (error) {
            studioPro.ui.messageBoxes.show("error", "Error saving document", "Details: " + ((error as { message?: string })?.message || error));
        }
    }, [studioPro, documentApi, documentId, person]);

    // Constant Selection 
    const selectConstant = useCallback(async () => {
        const selected = await studioPro.ui.elementSelectors.selectDocument({
            query: { elementType: "Constants$Constant" }
        });

        if (selected.status === "ok") {
            const newDoc: PersonInfo = {
                ...person,
                configConstant: {
                    id: selected.selected.id,
                    name: selected.selected.name,
                    qualifiedName: `${selected.selected.module}.${selected.selected.name}`
                }
            };
            setPerson(newDoc);
            await documentApi.updateDocumentContent(documentId, newDoc);
        }
    }, [studioPro, documentApi, documentId, person]);

    const clearConstant = useCallback(async () => {
        const newDoc: PersonInfo = { ...person, configConstant: undefined };
        setPerson(newDoc);
        await documentApi.updateDocumentContent(documentId, newDoc);
    }, [documentApi, documentId, person]);

    const labelStyle = { display: "inline-block", width: "300px" };

    return (
        <div style={{ backgroundColor: "white", padding: "20px" }}>
            <h2>Person Editor</h2>
            <div>
                <label style={labelStyle}>
                    First name:
                    <input
                        type="text"
                        value={person.firstName}
                        onChange={e => setPerson({ ...person, firstName: e.target.value })}
                    />
                </label>
            </div>

            <div style={{ marginTop: 16 }}>
                <button onClick={selectConstant}>Select Config Constant (must be String)</button>
            </div>
            {person.configConstant && (
                <div style={{ marginTop: 8 }}>
                    Selected: {person.configConstant.qualifiedName}
                    <button onClick={clearConstant} style={{ marginLeft: 8 }}>Clear</button>
                </div>
            )}

            <div style={{ marginTop: 16 }}>
                <button onClick={savePerson}>Save</button>
            </div>
        </div>
    );
}

export const component: IComponent = {
    async loaded(componentContext, args: { documentId: string }) {
        const studioPro = getStudioProApi(componentContext);
        createRoot(document.getElementById("root")!).render(
            <StrictMode>
                <PersonEditor studioPro={studioPro} documentId={args.documentId} />
            </StrictMode>
        );
    }
};
```


Return `dependentElementIds` to tell Studio Pro which elements your document depends on. When those elements change, your checks rerun automatically.

{{% alert color="info" %}}
Without dependency tracking, your checks only run during full consistency check runs. With dependency tracking, checks run immediately when referenced elements change.
{{% /alert %}}

### Changed Elements

When one of your dependencies gets modified in Studio Pro, you can return a consistency error based on that change. To be notified when any element (document or entity) changes, subscribe to the `documentsChanged` event.

For example, if you have a document type that contains multiple lists of dependencies for microflows, entities, or other custom blob documents, you can update your document for each of these types.

```typescript
import { DocumentInfo, getStudioProApi } from "@mendix/extensions-api";

const dependentDocumentType = "myextension.DependentType";

type Dependency = {
    id: string;
    name: string;
    qualifiedName: string;
    documentType: string;
};

type DependentType = {
    dependencies: Dependency[];
};

export async function handleDocumentChanges(studioPro: ReturnType<typeof getStudioProApi>) {
    studioPro.app.projectChanges.addEventListener("documentsChanged", async ({ documents }) => {
        const dependentDocuments = await studioPro.app.model.customBlobDocuments.getDocumentsOfType(dependentDocumentType);

        const changes: { [id: string]: DependentType } = {};

        for (const doc of dependentDocuments) {
            const customDocument = await studioPro.app.model.customBlobDocuments.getDocumentById<DependentType>(doc.id);

            if ("document" in customDocument && customDocument.document) {
                if (checkDependencyWasChanged(customDocument.document.contents.dependencies, documents)) {
                    changes[doc.id] = customDocument.document.contents; 
                }             
            }
        }

        for (const [id, content] of Object.entries(changes)) {
            try {
                await studioPro.app.model.customBlobDocuments.updateDocumentContent(id, content);
            } catch (error) {
                console.error(`Error updating document ${id}:`, error);
            }
        }
    });
}

async function checkDependencyWasChanged(dependencies: Dependency[], documents: DocumentInfo[]): boolean {

    for (const dependency of dependencies) {
        const document = documents
            .filter(f => f.documentType === dependency.documentType)
            .find(change => change.documentId === dependency.id);

        if (document !== undefined) {
            return true;
        }
    }
}
```

By checking whether any of the changed documents from the event payload are included in your dependencies, you can trigger the consistency checks to run again by updating the content of your blob document using `studioPro.app.model.customBlobDocuments.updateDocumentContent`. This ensures your checks run again whenever one of your dependencies is modified in Studio Pro.


### Renamed Elements

If one of your dependencies gets renamed, you may need to update the dependency names in your document. Studio Pro cannot automatically rename your dependencies; it can only notify you that the document matching the ID now has a new name. It is up to you to update your dependency's name.

To be notified when an element (any document or entity) gets renamed, subscribe to the `elementsRenamed` event. The event payload contains a list of `ElementRenameInfo`, which includes the old name, the new name, and the document type. You can use the old name to search your dependencies, and if it exists, update the dependency with its new name.

{{% alert color="info" %}}
This is also useful for detecting when one of your dependencies has been moved to a different module. When entities or documents move between modules, their fully qualified name changes, which triggers the rename event.
{{% /alert %}}

```typescript
import { getStudioProApi, StudioProApi } from "@mendix/extensions-api";

const dependentDocumentType = "myextension.DependentType";

type Dependency = {
    id: string;
    name: string;
    qualifiedName: string;
    documentType: string;
};

type DependentType = {
    microflows: Dependency[];
    entities: Dependency[];
    constants: Dependency[];
    blobs: Dependency[];
};

type ElementName = { qualifiedName: string; name: string };

export async function handleRenamings(studioPro: ReturnType<typeof getStudioProApi>) {
    studioPro.app.projectChanges.addEventListener("elementsRenamed", async ({ elements }) => {
        const dependentDocuments = await studioPro.app.model.customBlobDocuments.getDocumentsOfType(dependentDocumentType);

        for (const doc of dependentDocuments) {
            let needsSave = false;

            const customDocument = await studioPro.app.model.customBlobDocuments.getDocumentById<DependentType>(doc.id);

            if ("document" in customDocument && customDocument.document) {
                const microflowsRenamed = checkDependencyRenamed(customDocument.document.contents.microflows, elements);

                for (const microflowRenamed of microflowsRenamed) {
                    renameDependency(customDocument.document.contents.microflows, microflowRenamed.dependency.id, microflowRenamed.newName);

                    needsSave = true;
                }

                const entitiesRenamed = checkDependencyRenamed(customDocument.document.contents.entities, elements);

                for (const entityRenamed of entitiesRenamed) {
                    renameDependency(customDocument.document.contents.entities, entityRenamed.dependency.id, entityRenamed.newName);

                    needsSave = true;
                }

                const constantsRenamed = checkDependencyRenamed(customDocument.document.contents.constants, elements);

                for (const constantRenamed of constantsRenamed) {
                    renameDependency(customDocument.document.contents.constants, constantRenamed.dependency.id, constantRenamed.newName);

                    needsSave = true;
                }

                const blobsRenamed = checkDependencyRenamed(customDocument.document.contents.blobs, elements);

                for (const blobRenamed of blobsRenamed) {
                    renameDependency(customDocument.document.contents.blobs, blobRenamed.dependency.id, blobRenamed.newName);

                    needsSave = true;
                }

                if (needsSave)
                    studioPro.app.model.customBlobDocuments.updateDocumentContent(
                        customDocument.document.$ID,
                        customDocument.document.contents
                    );
            }
        }
    });
}

function renameDependency(dependencies: Dependency[], id: string, newName: ElementName): void {
    const dependency = dependencies.find(d => d.id === id);

    dependency!.qualifiedName = newName.qualifiedName;
    dependency!.name = newName.name;

    console.log("Renamed dependency to", dependency!.qualifiedName);
}

function checkDependencyRenamed(
    dependencies: Dependency[],
    renames: { oldName: ElementName; newName: ElementName; documentType: string }[]
): { dependency: Dependency; newName: ElementName; documentType: string }[] {
    const moduleRenames = renames.find(r => r.documentType === "Projects$Module");

    const renamedElements: { dependency: Dependency; newName: ElementName; documentType: string }[] = [];

    if (moduleRenames) {
        for (const dependency of dependencies) {
            const dependencyCurrentModuleName = dependency.qualifiedName.split(".")[0];
            const rename = renames.find(rename => rename.oldName.qualifiedName === dependencyCurrentModuleName);

            if (rename !== undefined) {
                renamedElements.push({
                    dependency,
                    newName: { qualifiedName: `${rename.newName.name}.${dependency.name}`, name: dependency.name },
                    documentType: rename.documentType
                });
            }
        }
    }

    for (const dependency of dependencies) {
        const rename = renames
            .filter(f => f.documentType === dependency.documentType)
            .find(rename => rename.oldName.qualifiedName === dependency.qualifiedName);

        if (rename !== undefined) {
            renamedElements.push({ dependency, newName: rename.newName, documentType: rename.documentType });
        }
    }

    return renamedElements;
}
```

You search for your dependency by qualified name instead of ID, by comparing it to the `oldName` property of the event's list payload. After renaming your dependency, you must update your custom document's content.

Note that if a module gets renamed in Studio Pro, you must update all the qualified names of your dependencies. Listen to the `elementsRenamed` event and check whether the type is `Projects$Module` to ensure your dependencies always have the correct qualified name. When a module is renamed in Studio Pro, the event payload contains only the module, not the documents it contains. It is up to the extension developer to update the qualified names of all dependencies belonging to the renamed module.

### Added Documents

To detect when a new document is added in Studio Pro, subscribe to the `documentAdded` event in the `projectChanges` API. Note that this does not trigger when entities are added to a domain model, because entities are not documents. In that case, the `documentsChanged` event triggers instead, with `DomainModels$DomainModel` as the document type.

For example, if you have a dependency on a microflow named *MySpecialMicroflow* and a consistency check that shows an error when that microflow is deleted, a user may resolve the error by adding a new microflow with the same name in the same module. Because the new microflow has a different ID than the original, you must update your dependency's ID. To do this, listen to the `documentAdded` event, compare dependencies by name, and when a match is found, update the ID and then update your custom document.

```typescript
import { DocumentInfo, getStudioProApi } from "@mendix/extensions-api";

const dependentDocumentType = "myextension.DependentType";

type Dependency = {
    id: string;
    name: string;
    qualifiedName: string;
    documentType: string;
};

type DependentType = {
    dependencies: Dependency[];
};

export async function handleDocumentAdded(studioPro: ReturnType<typeof getStudioProApi>) {
    studioPro.app.projectChanges.addEventListener("documentAdded", async ({ document }) => {
        const dependentDocuments = await studioPro.app.model.customBlobDocuments.getDocumentsOfType(dependentDocumentType);

        const changes: { [id: string]: DependentType } = {};

        for (const doc of dependentDocuments) {
            const d = await studioPro.app.model.customBlobDocuments.getDocumentById<DependentType>(doc.id);

            if ("document" in d && d.document) {
                if (dependencyWasRemovedAndReaddedWithSameName(d.document.contents.microflows, document))
                    changes[doc.id] = d.document.contents;
                if (dependencyWasRemovedAndReaddedWithSameName(d.document.contents.constants, document))
                    changes[doc.id] = d.document.contents;
                if (dependencyWasRemovedAndReaddedWithSameName(d.document.contents.blobs, document)) changes[doc.id] = d.document.contents;

                if (document.documentType === "DomainModels$DomainModel") {
                    console.log("domain model added");
                    return;
                }
            }
        }

        for (const [id, content] of Object.entries(changes)) {
            try {
                await studioPro.app.model.customBlobDocuments.updateDocumentContent(id, content);
            } catch (error) {
                console.error(`Error updating document ${id}:`, error);
            }
        }
    });
}

function dependencyWasRemovedAndReaddedWithSameName(dependencies: Dependency[], document: DocumentInfo): boolean {
    const matchingElement = dependencies.find(d => d.qualifiedName === `${document.moduleName}.${document.documentName}`);

    if (matchingElement !== undefined) {
        matchingElement.id = document.documentId; // update the dependency id to the new document id
        console.log("Updated dependency id with restored object", matchingElement);
        return true;
    }

    return false;
}
```

To detect when an entity is removed and then another one is added with the same name, use `documentsChanged` instead. Retrieve the entities of the changed domain model and compare them to your current list of entity dependencies in your custom document, then trigger the checks by saving the document.

```typescript
/* eslint-disable no-console */
import { DocumentInfo, getStudioProApi } from "@mendix/extensions-api";

const dependentDocumentType = "myextension.DependentType";

type DomainModelEntityInfo = {
    $ID: string;
    $Name: string;
    $QualifiedName: string;
    $DomainModel?: {
        $ID: string;
        $QualifiedName: string;
    };
};

type Dependency = {
    id: string;
    name: string;
    qualifiedName: string;
    documentType: string;
};

export type EntityDependency = Dependency & {
    domainModelQualifiedName: string;
    domainModelId: string;
};

type DependentType = {
    dependencies: Dependency[];
};

export async function handleDocumentChanges(studioPro: ReturnType<typeof getStudioProApi>) {
    studioPro.app.projectChanges.addEventListener("documentsChanged", async ({ documents }) => {
        const dependentDocuments = await studioPro.app.model.customBlobDocuments.getDocumentsOfType(dependentDocumentType);

        const changes: { [id: string]: DependentType } = {};

        console.log("Documents changed event received. Changed documents:", documents);
        for (const doc of dependentDocuments) {
            const d = await studioPro.app.model.customBlobDocuments.getDocumentById<DependentType>(doc.id);

            if ("document" in d && d.document) {
                if (await checkDependencyWasChanged(d.document.contents.microflows, documents, studioPro))
                    changes[doc.id] = d.document.contents;
                if (await checkDependencyWasChanged(d.document.contents.entities, documents, studioPro))
                    changes[doc.id] = d.document.contents;
                if (await checkDependencyWasChanged(d.document.contents.constants, documents, studioPro))
                    changes[doc.id] = d.document.contents;
                if (await checkDependencyWasChanged(d.document.contents.blobs, documents, studioPro)) changes[doc.id] = d.document.contents;
            }
        }

        for (const [id, content] of Object.entries(changes)) {
            try {
                await studioPro.app.model.customBlobDocuments.updateDocumentContent(id, content);
            } catch (error) {
                console.error(`Error updating document ${id}:`, error);
            }
        }
    });
}

function getNewEntities(domainModelsEntities: DomainModelEntityInfo[], dataEntities: EntityDependency[]): EntityDependency[] {
    const existingQualifiedNames = new Set(dataEntities.map(entity => entity.qualifiedName));

    const newEntities = domainModelsEntities
        .filter(entity => !existingQualifiedNames.has(entity.$QualifiedName))
        .map(entity => ({
            id: entity.$ID,
            name: entity.$Name,
            qualifiedName: entity.$QualifiedName,
            documentType: "DomainModels$Entity",
            domainModelId: entity.$DomainModel?.$ID ?? "",
            domainModelQualifiedName: entity.$DomainModel?.$QualifiedName ?? ""
        }));

    return newEntities;
}

async function checkDependencyWasChanged(
    dependencies: Dependency[],
    documents: DocumentInfo[],
    studioPro: ReturnType<typeof getStudioProApi>
): Promise<boolean> {

    for (const dependency of dependencies) {
        const document = documents
            .filter(f => f.documentType === dependency.documentType)
            .find(change => change.documentId === dependency.id);

        if (document !== undefined) {
            return true;
        }
    }

    const domainModelsChanged = documents.some(f => f.documentType === "DomainModels$DomainModel");

    if (!domainModelsChanged) 
        return false;
    const dataEntities = dependencies.filter(d => d.documentType === "DomainModels$Entity").map(e => e as EntityDependency);

    if (dataEntities.length > 0) {
        const domainModelsEntities = (await studioPro.app.model.domainModels.loadAll(k => k.moduleName !== "System")).flatMap(
            dm => dm.entities
        ) as unknown as DomainModelEntityInfo[];

        const newEntities = getNewEntities(domainModelsEntities, dataEntities);

        if (newEntities.length > 0) {
            return true;
        }
    }
    
    return false;
}
```
