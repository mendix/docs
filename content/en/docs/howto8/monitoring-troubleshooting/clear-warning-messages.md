---
title: "Clear Warning Messages"
url: /howto8/monitoring-troubleshooting/clear-warning-messages/
weight: 1
---

## Introduction

This how-to explains how to eliminate design time warnings. While these warnings will not cause the application to break, it is important to fix them to keep a clean app.

This how-to teaches you how to do the following:

* View warning messages
* Clear warning messages

## Viewing Warning Messages

Warning messages can be seen in the **Error List** tab of Studio Pro (by default shown at the bottom of Studio Pro). Note that the **Warnings** box must be selected for them to display.

{{< figure src="/attachments/howto8/monitoring-troubleshooting/clear-warning-messages/18579992.png" class="no-border" >}}

If this tab is not visible, it can be displayed via the **View** menu by selecting the **Error List** option:

{{< figure src="/attachments/howto8/monitoring-troubleshooting/clear-warning-messages/18579991.png" class="no-border" >}}

To get more information, double-click or right-click the warning.

## Common Warnings

{{% alert color="warning" %}}

[Deprecated] Using the main placeholder contents for pop-ups is deprecated.  This potion will be removed in a future version.  Please use a separate pop-up layout instead.

{{% /alert %}}

* This will not affect the app in this version of Studio Pro, but it may cause problems when upgrading
* In this example, the pop-up layout must be adjusted in order to no longer use the main placeholder

{{% alert color="warning" %}}

A flow origination from an error handler should not return to the main flow.

{{% /alert %}}

* Once the microflow has split due to an error, the flow that executes due to the error should not merge with the flow that executes when no error occurs

{{% alert color="warning" %}}

Access rules for entity ‘System.FileDocument’ exist that define access rights for users with module role ‘System.User’.  Note that these access rights apply to all users of your application, including anonymous users (if enabled).  It is recommended it create a specialized entity for each use case and configure access rules for those entities instead.

{{% /alert %}}

* The security for the System.FileDocument entity has a default setting that which can cause security loopholes
* This warning suggests creating specialized entities to eliminate such scenarios

{{% alert color="warning" %}}

Action activity that has a side effect on the client is not recommended here because the microflow is used as a data source for data view ‘dataView1’.

{{% /alert %}}

* Data source microflows should not have an effect on the client
* This microflow likely has a show message or show page activity that should be removed

{{% alert color="warning" %}}

Empty caption. [English, United States] / Empty title. [English, United States]

{{% /alert %}}

* The specified caption or title is empty
* This should be populated so that the page will be understood

{{% alert color="warning" %}}

Empty page title of target page.  Either set the page title of the target page or override it here. [English, United States]

{{% /alert %}}

* This should be populated to ensure the page will be understood (similar to the "empty caption" above)

{{% alert color="warning" %}}

Empty progress message. [English, United States]

{{% /alert %}}

* The selected progress message is empty, but it should be populated

{{% alert color="warning" %}}

Events have no effect inside a non-editable context.

{{% /alert %}}

* This context is read-only, but there are events set on the field (either on-change, on-leave, or on-enter) 

{{% alert color="warning" %}}

Microflow ‘microflowname’ is accessible through the server API because it specifies allowed roles. This is unnecessary because the microflow is not used from navigation or a page.

{{% /alert %}}

* There is no need for a microflow that is not accessed through navigation or a page to have security roles allowed
* This can lead to a security problem, and the assigned roles should be removed

{{% alert color="warning" %}}

Microflow does not do anything.

{{% /alert %}}

* This microflow performs no functionality; it should be removed or functionality should be added

{{% alert color="warning" %}}

Module role is not part of any user role.

{{% /alert %}}

* The module role cannot be used by any users
* This module role should either be removed or assigned to a user role so that the proper security is enforced

{{% alert color="warning" %}}

Property ‘XPath constraint’ on the data grid of the select page has no effect when the page is used for selecting.  Instead, the selection constraints properties of the reference selector can be used to constrain the selectable objects.

{{% /alert %}}

* When using a form for a reference selector, the constraint should be set on the reference selector (*not* on the form)

{{% alert color="warning" %}}

Empty required message while required is true. [English, United States]

{{% /alert %}}

* On a page, a field can be set to required
* When the field is set to required, the **Required Message** should be set
* In this case, either the **Required Message** must be set or the field must not be required

{{% alert color="warning" %}}

Required message is set even though required is set to false. [English, United States]

{{% /alert %}}

* This is similar to the previous warning
* If the field is not required, the **Required Message** should be empty
* If the **Required Message** was set with the intention of making the field required, the field should be made required

{{% alert color="warning" %}}

Target namespace is ‘[http://www.example.com/](http://www.example.com/)’.  Please provide a target namespace specific to your published web service.

{{% /alert %}}

* Edit the published web service to include a proper namespace

{{% alert color="warning" %}}

Variable ‘Variable’ is never used.

{{% /alert %}}

* There are multiple potential causes here
* The solution involves removing the variable from the microflow, which could mean deleting the retrieve activity or electing to not use the return value of a microflow call

## Read More

* [Find the Root Cause of Runtime Errors](/howto8/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Test Web Services Using SoapUI](/howto8/integration/testing-web-services-using-soapui/)
* [Monitor Mendix Using JMX](/howto8/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Debug Java Actions Remotely](/howto8/monitoring-troubleshooting/debug-java-actions-remotely/)
* [Configure Log Levels](/howto8/monitoring-troubleshooting/log-levels/)
* [Debug Microflows](/howto8/monitoring-troubleshooting/debug-microflows/)
* [Debug Java Actions](/howto8/monitoring-troubleshooting/debug-java-actions/)
* [Debug Microflows Remotely](/howto8/monitoring-troubleshooting/debug-microflows-remotely/)

Several warnings relate to improper security. For more information on this, see [Project Security](/refguide8/project-security/) in the *Studio Pro Guide*.
