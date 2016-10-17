---
title: "Common Mendix SSO Errors"
category: "howto50"
space: "Mendix 5 How-to's"
---
<table><thead><tr><th class="confluenceTh">Mendix Version</th><th class="confluenceTh">Author</th><th class="confluenceTh">Create Date</th><th colspan="1" class="confluenceTh">Last Modified By</th><th colspan="1" class="confluenceTh">Modified Date</th></tr></thead><tbody><tr><td class="confluenceTd">5</td><td class="confluenceTd"><a href="    /~sjoerd.breur@mendix.com
" class="url fn confluence-userlink" data-username="sjoerd.breur@mendix.com" rel="nofollow">Sjoerd Breur</a></td><td class="confluenceTd">Aug 05, 2014 14:19</td><td colspan="1" class="confluenceTd"><a href="    /~jan
" class="url fn confluence-userlink" data-username="jan" rel="nofollow">Jan de Vries</a></td><td colspan="1" class="confluenceTd">Sep 03, 2015 14:04</td></tr></tbody></table>



Below you will find solutions for some of the most common problems you may encounter when developing an AppCloud-enabled app.

## 1. 404 Not Found errors when navigating to /openid/login

A frequent cause of this issue is that the OpenID request handler is not enabled. It should be enabled on startup. To fix this, make sure that the `AppCloudServices.StartAppCloudServices` microflow is executed during the startup of your application. You can do this by setting it as the app's after-startup microflow, or by having the application's existing after-startup microflow trigger it.

## 2\. Realm verification errors

These are commonly caused by compatibility issues with JAR files in the <projectpath>/userlib directory of your project. You can refer to [this article](/refguide5/Troubleshooting) for the most common compatibility issues.

## 3\. Related content

*   [Finding the Root Cause of Runtime Errors](/howto50/Finding+the+Root+Cause+of+Runtime+Errors)
*   [Clearing Warning Messages in Mendix](/howto50/Clearing+Warning+Messages+in+Mendix)
*   [Finding the Root Cause of Runtime Errors](/howto6/Finding+the+Root+Cause+of+Runtime+Errors)
*   [Clearing Warning Messages in Mendix](/howto6/Clearing+Warning+Messages+in+Mendix)
*   [Testing web services using SoapUI](/howto6/Testing+web+services+using+SoapUI)
*   [Testing web services using SoapUI](/howto50/Testing+web+services+using+SoapUI)
*   [Debugging Microflows](/howto50/Debugging+Microflows)
*   [Common Mendix SSO Errors](/howto50/Common+Mendix+SSO+Errors)
*   [Monitoring Mendix using JMX](/howto50/Monitoring+Mendix+using+JMX)
*   [Debugging Java Actions](/howto50/Debugging+Java+Actions)

