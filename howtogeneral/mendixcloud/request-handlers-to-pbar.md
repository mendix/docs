---
title: "Converting to Path Based Access Restrictions"
space: "General How-To's"
category: "Mendix Cloud"
---
# Converting from Request Handlers to Path Based Access Restrictions

On August 15th 2017, all current settings of Mendix Cloud v3 applications will be converted to the new Path Based Access Restrictions model.

In short, the most significant changes are:
* Previously, a path needed to be explicitely added as Request Handler to be able to access dynamic content on that path. The new Path Based Access Restrictions purely act as restrictions. By default everything is accessible. To access content on paths which are enabled by custom modules in the project (e.g. /SSO/), it's not needed anymore to explicitely add the path '/SSO/'.
* Previously, all changes made in the Request Handler or Access Restriction Profile sections were immediately active. With the new Path Based Access Restrictions, a split is made in 'Current Value' and 'New Value' settings. When restarting the application, or when (for Mendix Cloud v3 only) the 'Apply Now' button is used, all prepared changes are activated at once. This makes the behaviour more consistent with other parts of the settings, like Constants, Scheduled Events and Custom Runtime Settings.
* Access restrictions can be set on any path, even on static content that is included with the project.

Examples:

|    | Request Handlers | Path Based Access Restrictions |
| --- | --- | --- |
| Handle requests on a custom path, e.g. '/mymodule/'. | Add the /mymodule/ request handler and enable it. | No action required. |
| Restrict access to a custom path, e.g. '/my-secret-module/'. | Add the /my-secret-module/' request handler. Enable the custom request handler. Apply the restriction profile on the request handler. | Add the /my-secret-module/' path. Apply the restriction profile on the path. |
| Deny access to a path, e.g. '/ws-doc/'. | Make sure the request handler for '/ws-doc/' is disabled. | Apply the preset 'Deny all access' to the '/ws-doc/' path. |

During the automated conversion, the following will change, and the following rules will be applied:

1. The Access Restriction Profiles configuration section moves from the Network tab of the individual environments to application level.
2. New style Access Restriction Profiles are always of the type "Certificate or IP should match". The previous types "Certificate should match" and "IP should match" simply convert to a profile where either IP ranges or the Client Certificate CA are just omitted.
3. The three remaining sections in the Network tab for "Request Handlers", "Environment Access Restrictions" and "Request Handler Access Restrictions" are merged together in a single section called "Path Based Access Restrictions".
4. The top level "Environment access restriction profile" will be set on the Path '/'.
5. Request Handlers that do not have an attached Restriction Profile will be converted to a Path without a Restriction Profile set. They will implicitely inherit the top level profile, if set.
6. Request Handlers that are not enabled are converted to a Path with a preset Restriction Profile of 'Deny all access'.
7. All default paths that are available in the deployed application model (e.g. '/ws/', '/odata/') but have not been converted during an earlier step are added, with a preset Restriction Profile of 'Deny all access'. The fact that they were not present as enabled request handler means that previously access was not possible, so the same behaviour is kept.
