---
title: "Clearing Warning Messages in Mendix"
category: 'Monitoring & Troubleshooting'
---
# Clearing Warning Messages in Mendix

This how-to explains how to eliminate design time warnings.  While these warnings will not cause the application to break, it is important to fix them to keep a clean project.

# Table of contents

## 1. Viewing Warnings

Warnings can be seen in the ‘Error List’ tab.  By default, this is shown in the bottom of the modeler.  Note that the ‘Warnings’ box must be selected for them to display.

![](attachments/11436111/13402334.png)

If this tab is not visible, it can be shown via the 'View' menu, by selecting the 'Error List' option.

![](attachments/11436111/13402336.png)

The warning can be double clicked or right-clicked to get more information.



## 2\. Common Warnings

{{% alert type="warning" %}}

**[Deprecated] Using the main placeholder contents for pop-ups is deprecated.  This potion will be removed in a future version.  Please use a separate pop-up layout instead.**

{{% /alert %}}

*   This will not affect the project in this version of the modeler, but may cause problems upgrading.  In this example, the pop-up layout must be adjusted to no longer use the main placeholder.

{{% alert type="warning" %}}

**A flow origination from an error handler should not return to the main flow.**

{{% /alert %}}

*   Once the microflow has split due to an error, the flow that executes due to the error should not merge with the flow that executes when no error occurred. 

{{% alert type="warning" %}}

**Access rules for entity ‘System.FileDocument’ exist that define access rights for users with module role ‘System.User’.  Note that these access rights apply to all users of your application, including anonymous users (if enabled).  It is recommended it create a specialized entity for each use case and configure access rules for those entities instead.**

{{% /alert %}}

*   The security for the entity 'System.FileDocument' has a default setting, which can cause security loopholes.  This warning suggests creating specialized entities to eliminate such scenarios. 

{{% alert type="warning" %}}

**Action activity that has a side effect on the client is not recommended here because the microflow is used as a data source for data view ‘dataView1’.**

{{% /alert %}}

*   Data source microflows should not have an effect on the client.  This microflow likely has a 'Show Message'  or 'Show Page' activity which should be removed. 

{{% alert type="warning" %}}

**Empty caption. [English, United States]**

**Empty title. [English, United States]**

{{% /alert %}}

*   The specified caption or title is empty.  This should be populated, so the page will be understood.

{{% alert type="warning" %}}

 **Empty page title of target page.  Either set the page title of the target page or override it here. [English, United States]**

{{% /alert %}}

*   Similar to the 'Empty Caption' above, this should be populated to ensure the page will be understood.

{{% alert type="warning" %}}

 **Empty progress message. [English, United States]**

{{% /alert %}}

*   The selected progress message is empty, but should be populated.

{{% alert type="warning" %}}

 **Events have no effect inside a non-editable context.**

{{% /alert %}}

*   This context is read only, but there are events set on the field - either on-change, on-leave, or on-enter.  

{{% alert type="warning" %}}

 **Microflow ‘microflowname’ is accessible through the server API because it specifies allowed roles.  This is unnecessary because the microflow is not used from navigation, a page or a published app service.**

{{% /alert %}}

*   There is no need for a microflow which is not accessed through navigation, page, or published app service to have security roles allowed.  This can lead to a security problem, and the assigned roles should be removed.  

{{% alert type="warning" %}}

 **Microflow does not do anything.**

{{% /alert %}}

*   This microflow performs no functionality.  It should either be removed or functionality should be added. 

{{% alert type="warning" %}}

 **Module role is not part of any user role.**

{{% /alert %}}

*   The module role cannot be used by any users.  This module role should either be removed or assigned to a user role, so the proper security is enforced.

{{% alert type="warning" %}}

 **Property ‘XPath constraint’ on the data grid of the select page has no effect when the page is used for selecting.  Instead, the selection constraints properties of the reference selector can be used to constrain the selectable objects.**

{{% /alert %}}

*   When using a form for reference selector, the constraint should be set on the reference selector  - _not_ the form

{{% alert type="warning" %}}

 **Empty required message while required is true. [English, United States]**

{{% /alert %}}

*   On a page, a field can be set to required.  When the field is set to required, the 'Required Message' should be set.  Here, either the 'Required Message' must be set, or the field must not be required. 

{{% alert type="warning" %}}

 **Required message is set even though required is set to false. [English, United States]**

{{% /alert %}}

*   This is similar to the previous warning.  If the field is not required, the 'Required Message' should be empty.  If the 'Required Message' was set with the intention of making the field required, the field should be made required. 

{{% alert type="warning" %}}

 **Target namespace is ‘[http://www.example.com/](http://www.example.com/)’.  Please provide a target namespace specific to your published web service.**

{{% /alert %}}

*   Edit published web service to include a proper namespace

{{% alert type="warning" %}}

 **Variable ‘Variable’ is never used.**

{{% /alert %}}

*   There are multiple potential causes here.  The solution involves removing the variable from the microflow.  This could mean deleting the retrieve activity or electing to not use the return value of a microflow call.



## 3\. Related content

*   [Finding the Root Cause of Runtime Errors](finding-the-root-cause-of-runtime-errors)
*   [Clearing Warning Messages in Mendix](clearing-warning-messages-in-mendix)
*   [Finding the Root Cause of Runtime Errors](/howto6/finding-the-root-cause-of-runtime-errors)
*   [Testing web services using SoapUI](testing-web-services-using-soapui)
*   [Debugging Microflows](debugging-microflows)
*   [Common Mendix SSO Errors](common-mendix-sso-errors)
*   [Monitoring Mendix using JMX](monitoring-mendix-using-jmx)
*   [Debugging Java Actions](debugging-java-actions)



Several warnings relate to improper security.  To read more on this, please view the documentation [here](/refguide5/project-security).
