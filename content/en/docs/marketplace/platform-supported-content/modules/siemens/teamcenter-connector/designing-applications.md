---
title: "Designing Mendix Applications with Single or Multiple Active Teamcenter Configurations"
linktitle: "Designing Mendix applications"
url: /appstore/modules/siemens-plm/designing-applications/
weight: 3
description: "Describes the process of designing Mendix application with single of multiple active Teamcenter configurations."
---

## Introduction

Ensure that you perform the following steps when designing your Mendix applications, depending on single or multiple Teamcenter configurations.

### Applications with a Single Active Teamcenter Configuration

* Ensure that the value of the **EnableMultipleActiveConfig** constant in Mendix is **False**.

   {{< figure src="/attachments/partners/siemens/teamcenter/image017.png" alt="" class="no-border" >}}

* Ensure that the value of the **ConfigurationName** parameter in the java action to be used is empty.

### Applications with Multiple Active Teamcenter Configurations

* Ensure that the value of the **EnableMultipleActiveConfig** constant in Mendix is **True**.
* Note down the value of the configuration name when designing the Mendix application with multiple Teamcenter configurations.
* Ensure that the value of the **ConfigurationName** parameter in the java action has the configuration you want to use.
* The configuration name can be passed dynamically or can be hardcoded. If it is hardcoded, ensure that the configuration name after application deployment is the same as that in the **ConfigurationName** parameter in the java actions.
* To pass the configuration dynamically, add the logic to the application using microflows or java actions.

### Creating Configurations that Contain Teamcenter Connection Information

1. Run your project.
2. Go to the Home page.
3. Click the **TEAMCENTER CONFIGURATIONS** tile in the web browser.
    {{< figure src="/attachments/partners/siemens/teamcenter/image006.png" alt="" class="no-border" >}}
4. To create a new Teamcenter configuration, click **New**.
    {{< figure src="/attachments/partners/siemens/teamcenter/image015.png" alt="" class="no-border" >}}
5. In the **Add Teamcenter Configuration** dialog box, specify the required fields and click **Save**.
6. If you have enabled SSO, ensure that you [specify the SSO information](/appstore/modules/siemens-plm/configuring-connection/#teamcenter-sso).

### Setting a Teamcenter Configuration as Active

1. Run your project.
2. Go to the Home page.
3. Click the **TEAMCENTER CONFIGURATIONS** tile in the web browser.
    {{< figure src="/attachments/partners/siemens/teamcenter/image006.png" alt="" class="no-border" >}}
4. Select a Teamcenter configuration that you want to set as active or inactive and click **Toggle Active**.
    {{< figure src="/attachments/partners/siemens/teamcenter/image015.png" alt="" class="no-border" >}}

If you have setup multiple Teamcenter configurations, you can choose a specific Teamcenter configuration as follows:

1. Run your project.
2. Go to the Home page.
3. Click the **TEAMCENTER CONFIGURATIONS** tile in the web browser.
    {{< figure src="/attachments/partners/siemens/teamcenter/image006.png" alt="" class="no-border" >}}
4. From the configurations list, click **Login** against the configuration that you want to use.
    {{< figure src="/attachments/partners/siemens/teamcenter/image016.png" alt="" class="no-border" >}}
5. In the page that appears, log on to the chosen configuration.

