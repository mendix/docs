---
title: "Webhooks"
url: /apidocs-mxsdk/apidocs/webhooks-sprints/
category: "API Documentation"
menu_order: 75
---

## 1 Introduction

Webhooks allow you to build or set up Mendix Platform connectors that subscribe to certain events on the Developer Portal. When one of those events is triggered, Mendix sends an HTTP POST payload to the webhook's configured URL. Webhooks can be used to update an external application to keep it up-to-date with the changes happening in the Developer Portal.

Every POST payload contains the following delivery information as part of the header:

* `MxAPI-Projects-EventCategory` – the types of event subscribed to (for example, sprints)
* `MxAPI-Projects-Delivery` – a random UUID
* `MxAPI-Signature` –  the HMAC hex digest (asymmetric hash using the *HMAC_SHA256* hash algorithm) of the response body, which is calculated using the hash (the hashes secret provided in the webhooks setting using the *SHA-256* hash algorithm with the length as 50)
	* For example, `(gNh407kBD1wkpHfwIrjWcTMjw4rKxIKX0s5b48FYOys=)`
* `MxAPI-Webhooks-Version` – the version of the webhooks payload (for example, 1)
* `MxAPI-Webhooks-Version-Expiry` – the expiry date for this version (empty if it is the latest version)
* `User-Agent` – `Mx-Platform`

## 2 Sprints

Webhook events are generated when a [sprint](/developerportal/collaborate/stories/#sprint-actions) is created or updated.

The required event category subscription is **sprints**.

## 3 Stories

Webhooks event are generated when a [story](/developerportal/collaborate/stories/) is created or updated.

The required event category subscription is **stories**.

## 4 Payload

* `Action` – whether the item was created or updated
* `Meta` – metadata information about the resources
* `Resource` – the current state of the resource
* `Sender`  – the user who triggered the event
* `Project`  – the project to which the resource belongs

## 5 Example

  ```json
{
    "Action": "updated",
    "Meta": {
        "CreatedAt": "2019-03-22T16:07:50.930Z",
        "UpdatedAt": "2019-03-22T16:08:14.452Z"
    },
    "Story": {
        "StoryId": 123,
        "ParentId": 546,
        "ParentType": "Sprint",
        "Name": "Add email address as a mandatory field to the Employee object",
        "Description": "Need to add email address to the Employees to be able to contact them.",
        "Status": "Running",
        "StoryType": "Feature",
        "HasSubStories": false,
        "CreationDate": "2019-03-22T16:07:50.930Z"
    },
    "Sender": {
        "Name": "nicholas.nelson40@example.com",
        "Avatar": "https://sprintr.home.mendix.dev/document/image?uuid=cc2381eb-cfee-4628-9e72-fe282b0e2301&target=internal&thumb=false&v=5",
        "EmailAddress": "nicholas.nelson40@example.com",
        "FullName": "Nicholas Nelson",
        "OpenId": "https://mxid2.mendix.dev/mxid2/id?id=c8101ad7-bdfb-48b1-b212-99fa86f8cdb0",
        "Company": {
            "AccountId": "5f84b213-c1c5-4236-ac1e-de9ccdc2ffb3",
            "DisplayName": "Mendix"
        }
    },
    "Project": {
        "Name": "Stock Management",
        "AppId": "dd2824e1-1c76-453a-aeaa-4d4304d46fd3",
        "Avatar": "http://sprintr.home.mendix.dev/document/image?uuid=afffa450-079e-4f75-8b62-dd970d579484&target=internal&thumb=false&v=2",
        "Company": {
            "AccountId": "5f84b213-c1c5-4236-ac1e-de9ccdc2ffb3",
            "DisplayName": "Mendix"
        }
    }
}
  ```
