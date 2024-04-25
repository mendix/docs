---
title: "Strict Mode"
url: /refguide/strict-mode/
weight: 50
tags: ["studio pro", "strict mode", "strict", "app security", "security", "api"]
---

## 1 Introduction

Configuring [access rules](/refguide/access-rules/) is essential for the security of your app. However, accurately setting up these rules can be challenging. To help making your app secure, even when access rules are not configured correctly, you can enable Strict Mode. 

Strict Mode will help ensuring that entities are accessible only in the ways defined within your model — through microflows, nanoflows, widgets, or pages — by restricting certain Client APIs. 

Please note, Strict Mode is exclusively available for the React Client.

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

The APIs will be disabled on the Runtime, which means that these APIs cannot be invoked in online apps via JavaScript actions or the browser's console. If any of these APIs are used in a JavaScript action, consider to use a nanoflow instead.

This aids in following the guidelines outlined in the *OWASP Low-Code/No-Code Top 10*, addressing [LCNC-SEC-05: Security Misconfiguration](https://owasp.org/www-project-top-10-low-code-no-code-security-risks/content/2022/en/LCNC-SEC-05-Security-Misconfiguration).

## 3 Disallowing Save button on Layouts
Additionally, Studio Pro will throw a consistency error when a save button is used on a layout. This will ensure that exclusively entities which are on the page with a save button can be commited to the runtime. 


## 4 Read More

* [App Security](/refguide/app-security/)
* [Client APIs](/apidocs-mxsdk/apidocs/client-api/)
* [Access Rules](/refguide/access-rules/)
