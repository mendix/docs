---
title: "Strict Mode"
url: /refguide/strict-mode/
weight: 50
tags: ["studio pro", "strict mode", "strict", "app security", "security", "api"]
---

## 1 Introduction

Configuring [access rules](/refguide/access-rules/) is essential for the security of your app. However, setting this up correctly can be hard. Strict Mode mode will help making your app secure, even if the access rules are not set up right. 

Enabling Strict Mode ensures that entities are exclusively accessible as defined within your model, through microflows, nanoflows, widgets, or pages. It does this by restricing certain Client APIs. 

Strict Mode is only available for React Client. 

## 2 Restricted Client APIs
When Strict Mode is enabled, the following [Client APIs](/apidocs-mxsdk/apidocs/client-api/) will be restricted:

| API           | Remarks                 |
|---------------|-------------------------|
| data.action   |                         |
| data.create   |                         |
| data.commit   |                         |
| data.remove   |                         |
| data.rollback |                         |
| data.get      | Except by GUID or GUIDs |

This means these APIs cannot be invoked via JavaScript Actions or the browser's console. The APIs are also disabled on the Runtime. 

## 3 Disallowing Save button on Page Templates
Additionally, Studio Pro will throw a consistency error when using a save button on a page template. This will make sure that only entities which are on a page with a save button can be commited to the runtime. 

## 4 Read More

* [App Security](/refguide/app-security/)
* [Client APIs](/apidocs-mxsdk/apidocs/client-api/)
* [Access Rules](/refguide/access-rules/)
