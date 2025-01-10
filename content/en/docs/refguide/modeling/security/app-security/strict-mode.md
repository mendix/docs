---
title: "Strict Mode"
url: /refguide/strict-mode/
weight: 50
---

## Introduction

Configuring [access rules](/refguide/access-rules/) is essential for the security of your app. However, accurately setting up these rules can be challenging. In case you make any mistakes setting up access rules, you want a safety net when you roll your app out to users. To make your app more secure in cases where access rules are not configured correctly, you can enable strict mode. 

Strict mode will help ensure that entities are accessible only in the ways defined within your model – through microflows, nanoflows, widgets, or pages – by restricting certain client APIs. 

Employing strict mode can be a major differentiator for app safety. Strict mode is set up in keeping with the guidelines outlined in the *OWASP Low-Code/No-Code Top 10*, addressing [LCNC-SEC-05: Security Misconfiguration](https://owasp.org/www-project-top-10-low-code-no-code-security-risks/content/2022/en/LCNC-SEC-05-Security-Misconfiguration).

{{% alert color="info" %}}
Please note, strict mode is exclusively available for the React client.
{{% /alert %}}

### Enabling Strict Mode

Strict mode can be enabled in [App Security](/refguide/app-security/#strict-mode) when the React client is enabled and the security level is set to **Production**.

## Restricted Client APIs

When strict mode is enabled, the following [client APIs](/apidocs-mxsdk/apidocs/client-api/) will be restricted:

| API           | API exceptions                                        |
| ------------- | ----------------------------------------------------- |
| data.action   |                                                       |
| data.create   |                                                       |
| data.commit   |                                                       |
| data.remove   |                                                       |
| data.rollback |                                                       |
| data.get      | The following APIs are not restricted: GUID and GUIDs |

The APIs will be disabled on the Runtime, which means that these APIs cannot be invoked in online apps via JavaScript actions or the browser's console. If any of these APIs are used in a JavaScript action, consider using a nanoflow instead.

## Save And Cancel Changes Action {#save-and-cancel}

In strict mode, your model is analyzed by Studio Pro to ensure that only entities within editable widgets can be saved or rolled back during save or cancel actions. 

Additionally, since **Save Changes Actions** and **Cancel Changes Actions** are not analyzed for layouts, placing a save or cancel button within a layout triggers a consistency error. Instead, these actions can be used within a snippet.

## Read More

* [App Security](/refguide/app-security/)
* [Client APIs](/apidocs-mxsdk/apidocs/client-api/)
* [Access Rules](/refguide/access-rules/)
