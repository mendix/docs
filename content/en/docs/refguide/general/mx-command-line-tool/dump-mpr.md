---
title: "MPR dump"
url: /refguide/mx-command-line-tool/dump-mpr
weight: 60
description: "Describes the command used to create a JSON description of the model of a Mendix App."
---

## Introduction

The `mx dump-mpr` command enables you to export the app model of Mendix in the form of JSON. This command is available as of Mendix 10.4.

## Usage

Use the following command pattern: `mx dump-mpr [OPTIONS] [TARGET-FILE]`

The `TARGET-FILE` points to the location of the project file (this file has the extension *.mpr*).

These are the `OPTIONS`:

| Option | Value | Result |
| --- | --- | --- |
| `--unit-type` | A single unit type, or a comma-separated list of unit types. | Filters the results on the supplied unit types and limits the JSON export. |

### Examples

These are valid examples:

* `mx dump-mpr temp.mpr`
* `mx dump-mpr temp.mpr --unit-type DomainModels$DomainModel`
* `mx dump-mpr --unit-type DomainModels$DomainModel,Texts$SystemTextCollection temp.mpr`

A sample output with the unit type filter on domain models would be:

<details>

<summary>Expand for code sample</summary>

  ```json
  {
    "units": [        
        {
            "$ID": "c67c5271-da7d-45f1-81df-ceb6946b8abe",
            "$Type": "DomainModels$DomainModel",
            "$ContainerID": "ff1f3392-a281-4fb9-b7a8-9cc9c5267a37",
            "$ContainerProperty": "domainModel",
            "entities": [
                {
                    "$ID": "dd8d5828-d9a2-42b3-b48c-3641e2d72a45",
                    "$Type": "DomainModels$Entity",
                    "$QualifiedName": "NanoflowCommons.Geolocation",
                    "generalization": {
                        "$ID": "f3c8d2bc-d02f-4fc6-a726-a17dc89bf8d5",
                        "$Type": "DomainModels$NoGeneralization",
                        "hasChangedDate": false,
                        "hasCreatedDate": false,
                        "hasOwner": false,
                        "hasChangedBy": false,
                        "persistable": false
                    },
                    "attributes": [
                        {
                            "$ID": "76c41318-8e4f-4619-b4de-c99b8371086e",
                            "$Type": "DomainModels$Attribute",
                            "$QualifiedName": "NanoflowCommons.Geolocation.Timestamp",
                            "type": {
                                "$ID": "74563b78-b6bc-4cc3-8a67-ad284654be72",
                                "$Type": "DomainModels$DateTimeAttributeType",
                                "localizeDate": true
                            },
                            "value": {
                                "$ID": "d73b03ba-72c2-4fbd-bda3-e89e3a7c6699",
                                "$Type": "DomainModels$StoredValue",
                                "defaultValue": ""
                            },
                            "name": "Timestamp",
                            "dataStorageGuid": "2b1e641a-3313-4bf3-9c4a-19e5437d3409",
                            "documentation": "",
                            "exportLevel": "Hidden"
                        },
                        {
                            "$ID": "492dc560-1bc8-436d-b4c0-3e344f1d384c",
                            "$Type": "DomainModels$Attribute",
                            "$QualifiedName": "NanoflowCommons.Geolocation.Latitude",
                            "type": {
                                "$ID": "7407521a-9479-4c38-b6d3-28cb7298303a",
                                "$Type": "DomainModels$StringAttributeType",
                                "length": 200
                            },
                            "value": {
                                "$ID": "eb9e1f21-dfb9-4772-925e-07bb3335823c",
                                "$Type": "DomainModels$StoredValue",
                                "defaultValue": ""
                            },
                            "name": "Latitude",
                            "dataStorageGuid": "be684b6d-d0d6-42df-a4e4-3117ace70c97",
                            "documentation": "",
                            "exportLevel": "Hidden"
                        },
                        {
                            "$ID": "2517de87-2a92-4189-98cd-ea5a9ea4161a",
                            "$Type": "DomainModels$Attribute",
                            "$QualifiedName": "NanoflowCommons.Geolocation.Longitude",
                            "type": {
                                "$ID": "039b1e07-1024-4543-aa0d-7c84d5320172",
                                "$Type": "DomainModels$StringAttributeType",
                                "length": 200
                            },
                            "value": {
                                "$ID": "7c79894f-b2bb-48b6-88c8-4de78f2d61f1",
                                "$Type": "DomainModels$StoredValue",
                                "defaultValue": ""
                            },
                            "name": "Longitude",
                            "dataStorageGuid": "3a2391ec-6607-4f2a-84af-f36b34e3435b",
                            "documentation": "",
                            "exportLevel": "Hidden"
                        },
                        {
                            "$ID": "7f31f59e-a02f-4fa7-b715-739bcd513821",
                            "$Type": "DomainModels$Attribute",
                            "$QualifiedName": "NanoflowCommons.Geolocation.Altitude",
                            "type": {
                                "$ID": "5dbe0124-143a-45e3-bf54-f2aa088a07f5",
                                "$Type": "DomainModels$StringAttributeType",
                                "length": 200
                            },
                            "value": {
                                "$ID": "1470981a-42fe-41d8-96e8-bd0f98e003bd",
                                "$Type": "DomainModels$StoredValue",
                                "defaultValue": ""
                            },
                            "name": "Altitude",
                            "dataStorageGuid": "8bc8ac7e-9413-4be8-8512-30825bf60058",
                            "documentation": "",
                            "exportLevel": "Hidden"
                        },
                        {
                            "$ID": "6aa5d61c-64b7-4342-a548-36fb2f72424c",
                            "$Type": "DomainModels$Attribute",
                            "$QualifiedName": "NanoflowCommons.Geolocation.Accuracy",
                            "type": {
                                "$ID": "102b81b7-6d07-48e9-ba4d-9078c6a0ab82",
                                "$Type": "DomainModels$StringAttributeType",
                                "length": 200
                            },
                            "value": {
                                "$ID": "a9d43190-bd39-45cc-8af2-c1b42d208fbd",
                                "$Type": "DomainModels$StoredValue",
                                "defaultValue": ""
                            },
                            "name": "Accuracy",
                            "dataStorageGuid": "c74a4d63-4b25-4fa4-b26b-46275a72a575",
                            "documentation": "",
                            "exportLevel": "Hidden"
                        },
                        {
                            "$ID": "c758d8e2-e02d-49c2-85a5-9b72f85856cd",
                            "$Type": "DomainModels$Attribute",
                            "$QualifiedName": "NanoflowCommons.Geolocation.AltitudeAccuracy",
                            "type": {
                                "$ID": "c1facf7b-007c-4285-802e-ca9d276c18c9",
                                "$Type": "DomainModels$StringAttributeType",
                                "length": 200
                            },
                            "value": {
                                "$ID": "8baea155-12f3-47fe-9020-a38c68e7be71",
                                "$Type": "DomainModels$StoredValue",
                                "defaultValue": ""
                            },
                            "name": "AltitudeAccuracy",
                            "dataStorageGuid": "7b261047-8ca4-4cfa-b15f-0ea536236b69",
                            "documentation": "",
                            "exportLevel": "Hidden"
                        },
                        {
                            "$ID": "f8f015d2-8283-43ac-acd7-0e29f7232a88",
                            "$Type": "DomainModels$Attribute",
                            "$QualifiedName": "NanoflowCommons.Geolocation.Heading",
                            "type": {
                                "$ID": "14b984c9-f616-4388-9c4e-4977119250f2",
                                "$Type": "DomainModels$StringAttributeType",
                                "length": 200
                            },
                            "value": {
                                "$ID": "ff34b2c7-8b40-4bd7-9b6c-ab310dc34dcd",
                                "$Type": "DomainModels$StoredValue",
                                "defaultValue": ""
                            },
                            "name": "Heading",
                            "dataStorageGuid": "582cf720-77eb-433e-8a00-dc8bcf948a35",
                            "documentation": "",
                            "exportLevel": "Hidden"
                        },
                        {
                            "$ID": "57a6ac27-c094-4e5c-8d54-2d0542f97d60",
                            "$Type": "DomainModels$Attribute",
                            "$QualifiedName": "NanoflowCommons.Geolocation.Speed",
                            "type": {
                                "$ID": "f7f16635-0414-4bc5-b9a1-dd56391ab2b3",
                                "$Type": "DomainModels$StringAttributeType",
                                "length": 200
                            },
                            "value": {
                                "$ID": "a9c60765-0a11-430f-b6be-f261a92b9373",
                                "$Type": "DomainModels$StoredValue",
                                "defaultValue": ""
                            },
                            "name": "Speed",
                            "dataStorageGuid": "028e79f2-5dbe-4563-b4bc-100d771f2550",
                            "documentation": "",
                            "exportLevel": "Hidden"
                        }
                    ],
                    "validationRules": [],
                    "eventHandlers": [],
                    "indexes": [],
                    "accessRules": [
                        {
                            "$ID": "99a614ef-2400-43ad-976d-b709f348aae2",
                            "$Type": "DomainModels$AccessRule",
                            "memberAccesses": [
                                {
                                    "$ID": "ce874fbc-8682-461f-a403-a5595d4f1072",
                                    "$Type": "DomainModels$MemberAccess",
                                    "attribute": "NanoflowCommons.Geolocation.Timestamp",
                                    "association": "",
                                    "accessRights": "ReadWrite"
                                },
                                {
                                    "$ID": "571a5c09-6a15-470d-8cf6-924b5835aa5d",
                                    "$Type": "DomainModels$MemberAccess",
                                    "attribute": "NanoflowCommons.Geolocation.Latitude",
                                    "association": "",
                                    "accessRights": "ReadWrite"
                                },
                                {
                                    "$ID": "3d2f3206-fcbd-44fe-8d17-4780625d1627",
                                    "$Type": "DomainModels$MemberAccess",
                                    "attribute": "NanoflowCommons.Geolocation.Longitude",
                                    "association": "",
                                    "accessRights": "ReadWrite"
                                },
                                {
                                    "$ID": "561589ad-51e8-4cb0-9618-702e18326948",
                                    "$Type": "DomainModels$MemberAccess",
                                    "attribute": "NanoflowCommons.Geolocation.Altitude",
                                    "association": "",
                                    "accessRights": "ReadWrite"
                                },
                                {
                                    "$ID": "7b3f4454-0fe1-4002-9319-593a0237d5c8",
                                    "$Type": "DomainModels$MemberAccess",
                                    "attribute": "NanoflowCommons.Geolocation.Accuracy",
                                    "association": "",
                                    "accessRights": "ReadWrite"
                                },
                                {
                                    "$ID": "88e72847-8d22-4e4e-af71-11b714174fee",
                                    "$Type": "DomainModels$MemberAccess",
                                    "attribute": "NanoflowCommons.Geolocation.AltitudeAccuracy",
                                    "association": "",
                                    "accessRights": "ReadWrite"
                                },
                                {
                                    "$ID": "988d53f6-4d0b-4415-9381-ac1728dfc2da",
                                    "$Type": "DomainModels$MemberAccess",
                                    "attribute": "NanoflowCommons.Geolocation.Heading",
                                    "association": "",
                                    "accessRights": "ReadWrite"
                                },
                                {
                                    "$ID": "98a67480-fa72-4e93-af54-21ac2c8481e8",
                                    "$Type": "DomainModels$MemberAccess",
                                    "attribute": "NanoflowCommons.Geolocation.Speed",
                                    "association": "",
                                    "accessRights": "ReadWrite"
                                }
                            ],
                            "moduleRoles": [
                                "NanoflowCommons.User"
                            ],
                            "documentation": "",
                            "allowCreate": true,
                            "allowDelete": true,
                            "defaultMemberAccessRights": "ReadWrite",
                            "xPathConstraintCaption": "",
                            "xPathConstraint": ""
                        }
                    ],
                    "source": null,
                    "name": "Geolocation",
                    "dataStorageGuid": "4010a780-b01f-4b4a-be37-9bbceda36014",
                    "location": {
                        "x": 220,
                        "y": 250
                    },
                    "documentation": "",
                    "image": "",
                    "imageData": "",
                    "exportLevel": "Hidden"
                },
                {
                    "$ID": "48cef8b8-a198-4628-a5fd-53df7239e1c2",
                    "$Type": "DomainModels$Entity",
                    "$QualifiedName": "NanoflowCommons.Position",
                    "generalization": {
                        "$ID": "cec867c4-fe47-4e11-bf9e-aa514b5bdf31",
                        "$Type": "DomainModels$NoGeneralization",
                        "hasChangedDate": false,
                        "hasCreatedDate": false,
                        "hasOwner": false,
                        "hasChangedBy": false,
                        "persistable": false
                    },
                    "attributes": [
                        {
                            "$ID": "96308176-77a3-4153-918d-eca357b7a3c6",
                            "$Type": "DomainModels$Attribute",
                            "$QualifiedName": "NanoflowCommons.Position.Latitude",
                            "type": {
                                "$ID": "48a212ff-4770-41de-8bfe-60ce6fc71142",
                                "$Type": "DomainModels$StringAttributeType",
                                "length": 200
                            },
                            "value": {
                                "$ID": "080d35f8-c985-49d5-80d3-97b62804dd0c",
                                "$Type": "DomainModels$StoredValue",
                                "defaultValue": ""
                            },
                            "name": "Latitude",
                            "dataStorageGuid": "c8f66a8f-aa9b-40e7-ba48-9f82ab7d5000",
                            "documentation": "",
                            "exportLevel": "Hidden"
                        },
                        {
                            "$ID": "f99022e0-c5c1-49bf-a224-a15ae8cfab09",
                            "$Type": "DomainModels$Attribute",
                            "$QualifiedName": "NanoflowCommons.Position.Longitude",
                            "type": {
                                "$ID": "2325a944-8fc0-4410-b05a-df0636f9b672",
                                "$Type": "DomainModels$StringAttributeType",
                                "length": 200
                            },
                            "value": {
                                "$ID": "1d9026de-518a-4016-9638-41d2ef195669",
                                "$Type": "DomainModels$StoredValue",
                                "defaultValue": ""
                            },
                            "name": "Longitude",
                            "dataStorageGuid": "2008c37c-9e89-45ee-a5ac-be47d0a25355",
                            "documentation": "",
                            "exportLevel": "Hidden"
                        }
                    ],
                    "validationRules": [],
                    "eventHandlers": [],
                    "indexes": [],
                    "accessRules": [
                        {
                            "$ID": "37a564c4-175b-460a-a312-615dbdb4784b",
                            "$Type": "DomainModels$AccessRule",
                            "memberAccesses": [
                                {
                                    "$ID": "45ec89e2-000b-454c-9eb7-a264fa506409",
                                    "$Type": "DomainModels$MemberAccess",
                                    "attribute": "NanoflowCommons.Position.Latitude",
                                    "association": "",
                                    "accessRights": "ReadWrite"
                                },
                                {
                                    "$ID": "37810a75-ba32-4341-9d72-8b5da315cb97",
                                    "$Type": "DomainModels$MemberAccess",
                                    "attribute": "NanoflowCommons.Position.Longitude",
                                    "association": "",
                                    "accessRights": "ReadWrite"
                                }
                            ],
                            "moduleRoles": [
                                "NanoflowCommons.User"
                            ],
                            "documentation": "",
                            "allowCreate": true,
                            "allowDelete": true,
                            "defaultMemberAccessRights": "ReadWrite",
                            "xPathConstraintCaption": "",
                            "xPathConstraint": ""
                        }
                    ],
                    "source": null,
                    "name": "Position",
                    "dataStorageGuid": "88c601a4-8e82-4824-80e8-52ae43d5c4f1",
                    "location": {
                        "x": 470,
                        "y": 260
                    },
                    "documentation": "",
                    "image": "",
                    "imageData": "",
                    "exportLevel": "Hidden"
                }
            ],
            "annotations": [],
            "associations": [],
            "crossAssociations": [],
            "documentation": ""
        },
        {
            "$ID": "6d17d485-2170-462e-8652-cdbf00f65d8e",
            "$Type": "DomainModels$DomainModel",
            "$ContainerID": "7b78a151-2c00-4bb8-996d-0e87200f14a9",
            "$ContainerProperty": "domainModel",
            "entities": [],
            "annotations": [],
            "associations": [],
            "crossAssociations": [],
            "documentation": ""
        }
    ]
}
```
  
</details>

### Return Codes

This table shows the return codes and their description:

| Return Code | Description |
| --- | --- |
| `0` | OK |
| `1` | An incorrect project file was supplied |
| `2` | The supplied unit types do not exist |
| `3` | An unknown error occurred during export |
| `4` | The supplied mpr is of a version Studio Pro cannot open |
