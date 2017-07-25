---
title: "Converting to Path-Based Access Restrictions"
category: "Mendix Cloud"
---

## 1 Introduction

On August 15, 2017, all current settings of Mendix Cloud v3 applications will be converted from request handlers to the new path-based access restrictions model.

## 2 Changes

The first signfiicant change is that, previously, a path needed to be explicitly added as request handler to be able to access dynamic content on that path. The new path-based access restrictions purely act as restrictions. By default, everything is accessible. To access content on paths that are enabled by custom modules in the project (for example, `/SSO/`), it is no longer necessary to explicitly add the path `/SSO/`.

The second significant change is that, previously, all the changes made in the **Request Handler** or **Access Restriction Profile** sections were immediately active. With the new path-based access restrictions, a split is made in the **Current Value** and **New Value** settings. When restarting the app or (for Mendix Cloud v3 only) when the **Apply Now** button is used, all the prepared changes are activated at once. This makes the behavior more consistent with other parts of the settings, like **Constants**, **Scheduled Events**, and **Custom Runtime Settings**.

The final significant change is that access restrictions can be set on any path, even on static content that is included with the project.

## 3 Examples

Here are some examples:

| Scenario | Request Handlers | Path-Based Access Restrictions |
| --- | --- | --- |
| Handle requests on a custom path (for example, `/mymodule/`) | Add the `/mymodule/` request handler and enable it. | No action required. |
| Restrict access to a custom path (for example, `/my-secret-module/`) | Add the `/my-secret-module/` request handler. Enable the custom request handler. Apply the restriction profile on the request handler. | Add the `/my-secret-module/` path. Apply the restriction profile on the path. |
| Deny access to a path (for example, `/ws-doc/`) | Make sure the request handler for `/ws-doc/` is disabled. | Apply the preset **Deny all access** to the `/ws-doc/` path. |

## 4 Conversion

During the automated conversion, the following items will change, and the following rules will be applied:

1. The access restriction profiles configuration section will move from the **Network** tab of the individual environments to the application level.
2. The new style of access restriction profiles are always of the **Certificate or IP should match** type. The previous types **Certificate should match** and **IP should match** simply convert to a profile in which either the IP ranges or the client certificate CA are just omitted.
3. The three remaining sections in the **Network** tab for **Request Handlers**, **Environment Access Restrictions**, and **Request Handler Access Restrictions** are merged together in a single section called **Path-Based Access Restrictions**.
4. The top level **Environment access restriction profile** will be set on the path `/`.
5. Request handlers that do not have an attached restriction profile will be converted to a path without a restriction profile set. They will implicitely inherit the top level profile (if set).
6. Request handlers that are not enabled are converted to a path with a preset restriction profile of **Deny all access**.
7. All default paths available in the deployed application model (for example, `/ws/`, `/odata/`)that have not been converted during an earlier step will be added with a preset restriction profile of **Deny all access**. The fact that they were not present as an enabled request handler means that previously access was not possible, so the same behavior is kept.
