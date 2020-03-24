---
title: "Clear Warning Messages"
category: "Monitoring & Troubleshooting"
tags: []
---

## 1 Introduction

This how-to explains how to eliminate design time warnings. While these warnings will not cause the application to break, it is important to fix them to keep a clean project.

**After using this how-to, you will know how to do the following:**  

* View warning messages
* Clear warning messages

## 2 Viewing Warning Messages

Warning messages can be seen in the **Error List** tab of the Modeler (by default shown at the bottom of the Modeler). Note that the **Warnings** box must be selected for them to display.

![](attachments/18448568/18579992.png)

If this tab is not visible, it can be displayed via the **View** menu by selecting the **Error List** option:

![](attachments/18448568/18579991.png)

To get more information, double-click or right-click the warning.

## 3 Common Warnings

{{% alert type="warning" %}}
[Deprecated] Using the main placeholder contents for pop-ups is deprecated.  This potion will be removed in a future version.  Please use a separate pop-up layout instead.
{{% /alert %}}

* This will not affect the project in this version of the Modeler, but it may cause problems when upgrading
* In this example, the pop-up layout must be adjusted in order to no longer use the main placeholder

{{% alert type="warning" %}}

A flow origination from an error handler should not return to the main flow.

{{% /alert %}}

* Once the microflow has split due to an error, the flow that executes due to the error should not merge with the flow that executes when no error occurs

{{% alert type="warning" %}}

Access rules for entity ‘System.FileDocument’ exist that define access rights for users with module role ‘System.User’.  Note that these access rights apply to all users of your application, including anonymous users (if enabled).  It is recommended it create a specialized entity for each use case and configure access rules for those entities instead.

{{% /alert %}}

* The security for the System.FileDocument entity has a default setting that which can cause security loopholes
* This warning suggests creating specialized entities to eliminate such scenarios

{{% alert type="warning" %}}

Action activity that has a side effect on the client is not recommended here because the microflow is used as a data source for data view ‘dataView1’.

{{% /alert %}}

* Data source microflows should not have an effect on the client
* This microflow likely has a show message or show page activity that should be removed

{{% alert type="warning" %}}

Empty caption. [English, United States]

Empty title. [English, United States]

{{% /alert %}}

* The specified caption or title is empty
* This should be populated so that the page will be understood

{{% alert type="warning" %}}

Empty page title of target page.  Either set the page title of the target page or override it here. [English, United States]

{{% /alert %}}

* This should be populated to ensure the page will be understood (similar to the "empty caption" above)

{{% alert type="warning" %}}

Empty progress message. [English, United States]

{{% /alert %}}

* The selected progress message is empty, but it should be populated

{{% alert type="warning" %}}

Events have no effect inside a non-editable context.

{{% /alert %}}

* This context is read-only, but there are events set on the field (either on-change, on-leave, or on-enter) 

{{% alert type="warning" %}}

Microflow ‘microflowname’ is accessible through the server API because it specifies allowed roles.  This is unnecessary because the microflow is not used from navigation, a page or a published app service.

{{% /alert %}}

* There is no need for a microflow that is not accessed through navigation, a page, or a published app service to have security roles allowed
* This can lead to a security problem, and the assigned roles should be removed

{{% alert type="warning" %}}

Microflow does not do anything.

{{% /alert %}}

* This microflow performs no functionality; it should be removed or functionality should be added

{{% alert type="warning" %}}

Module role is not part of any user role.

{{% /alert %}}

* The module role cannot be used by any users
* This module role should either be removed or assigned to a user role so that the proper security is enforced

{{% alert type="warning" %}}

Property ‘XPath constraint’ on the data grid of the select page has no effect when the page is used for selecting.  Instead, the selection constraints properties of the reference selector can be used to constrain the selectable objects.

{{% /alert %}}

* When using a form for a reference selector, the constraint should be set on the reference selector (*not* on the form)

{{% alert type="warning" %}}

Empty required message while required is true. [English, United States]

{{% /alert %}}

* On a page, a field can be set to required
* When the field is set to required, the **Required Message** should be set
* In this case, either the **Required Message** must be set or the field must not be required

{{% alert type="warning" %}}

Required message is set even though required is set to false. [English, United States]

{{% /alert %}}

* This is similar to the previous warning
* If the field is not required, the **Required Message** should be empty
* If the **Required Message** was set with the intention of making the field required, the field should be made required

{{% alert type="warning" %}}

Target namespace is ‘[http://www.example.com/](http://www.example.com/)’.  Please provide a target namespace specific to your published web service.

{{% /alert %}}

* Edit the published web service to include a proper namespace

{{% alert type="warning" %}}

Variable ‘Variable’ is never used.

{{% /alert %}}

* There are multiple potential causes here
* The solution involves removing the variable from the microflow, which could mean deleting the retrieve activity or electing to not use the return value of a microflow call

## 4 Read More

*   [Finding the Root Cause of Runtime Errors](finding-the-root-cause-of-runtime-errors)
*   [Testing Web Services Using SoapUI](testing-web-services-using-soapui)
*   [Monitoring Mendix Using JMX](monitoring-mendix-using-jmx)
*   [Debug Java Actions Remotely](debug-java-actions-remotely)
*   [Log Levels](log-levels)
*   [Debug Microflows](debug-microflows)
*   [Debug Java Actions](debug-java-actions)
*   [Common Mendix SSO Errors](handle-common-mendix-sso-errors)
*   [Debug Microflows Remotely](debug-microflows-remotely)

Several warnings relate to improper security. For more information on this, see the [Project Security chapter of the Mendix Reference Guide](/refguide6/project-security).
