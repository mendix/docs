---
title: "Configure a Selenium Hub"
url: /appstore/partner-solutions/ats/ht-two-configure-a-selenium-hub/
description: "Describes how to configure a Selenium hub for the supported Selenium providers and a custom Selenium hub."
---

## Introduction 

This how-to explains how to configure a Selenium hub in ATS. There are four Selenium hub possibilities in ATS. How to configure all the four Selenium hubs and where you can retrieve the necessary information is explained.

This how-to teaches you how to do the following:

* Configure a BrowserStack Selenium hub
* Configure a Sauce Labs Selenium hub
* Configure a TestingBot Selenium hub
* Configure a Custom Selenium hub

## Prerequisites

Before starting with this how-to, make sure you have the following prerequisites in place:

* Have the appropriate role to gain access to the test settings in ATS.
* Have access to a Selenium provider account or internal Selenium server.

## The Test Settings

To get to the test settings follow these steps:

1. Go to ATS and log in.
2. Open the app where you want to add the Selenium hubs.
3. Once inside your app click the profile menu and click **Show Test Settings**.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/show-test-settings.png" class="no-border" >}}

The **Selenium hubs** section contains all the configured Selenium hubs for this app. Here you add a new Selenium hub by clicking **New Selenium Hub**.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/new-selenium-hub.png" class="no-border" >}}

The **Select Provider** dialog box opens. Here you select one of the four configurable Selenium hub options. Each of the options is explained in the sections below.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/select-provider-dialog.png" class="no-border" >}}

## Custom Capabilities

Each Selenium provider allows the user to set certain custom capabilities. The custom capabilities are used to set specific conditions. ATS uses these custom capabilities when you execute a test case or test suite. For example, Selecting 'Chrome' as your browser is a custom capability. ATS will then execute the test case or test suite using Chrome. The different Selenium providers allow for different custom capabilities. How to select custom capabilities is explained for each Selenium hub in the corresponding chapter.

Some examples of custom capabilities are:

* Timezone
* Resolution
* Builds
* Names

{{% alert color="info" %}}
Browser and platform overwrites do not work! The ATS run configuration will overwrite your custom capabilities.
{{% /alert %}}

Custom capabilities are explained separately for each Selenium option in the next chapters.

## Configure BrowserStack

### Basic Configuration

To configure BrowserStack as a Selenium hub follow these steps:

1. Go to the **Select Provider** dialog box and select **BrowserStack**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/select-provider-dialog-browserstack.png" class="no-border" >}}

2. The **New Selenium Hub** dialog box opens. Here you enter the necessary information for ATS to connect to your BrowserStack account.
3. In the **Name** field you enter a name for your Selenium hub. This is only meant to help you identify the Selenium hub when selecting the Selenium hub for a test run.
4. In the **Username** field you enter the username of your BrowserStack account.
5. In the **Access Key** field you enter the access key of your BrowserStack account.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-browserstack.png" class="no-border" >}}

To find the username and access key follow these steps:

1. Go to [BrowserStack](https://www.browserstack.com) and log in with the account you want to connect to ATS.
2. Click **Automate** in the navigation bar.
3. There is a collapsible menu on the left side of the screen. When you unfold it, it displays the **Username** and the **Access Key** when you unfold it. It also has a **Copy** button.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/username-access-key-browserstack.png" class="no-border" >}}

Leave the **New Selenium Hub** dialog box open for the next chapter.

### Custom Capabilities

To set a custom capability for BrowserStack follow these steps:

1. Go to the **New Selenium Hub** dialog box.
2. Click **New** in the **Custom Capabilities** section.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-browserstack-custom-capability.png" class="no-border" >}}

3. The **New Capability** dialog box opens.
4. To enter a custom capability you must know which capabilities you can use. Go to the [capabilities](https://www.browserstack.com/automate/capabilities) section on the BrowserStack website. Choose a capability, for example, **name**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/name-capability-browserstack.png" class="no-border" >}}

5. Now enter the capability in the **Key** field and the value you want in the **Value** field.

    {{% alert color="info" %}}The datatype is always *String* unless you must enter *true* or *false* then the datatype must be set to *Boolean*.
    {{% /alert %}}

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/name-capability-browserstack-ats.png" class="no-border" >}}

6. Click **Save**.

7. Add another custom capability or click **Save** when on the **New Selenium Hub** dialog to store your Selenium hub set-up.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-browserstack-with-name-capability.png" class="no-border" >}}

You now configured your BrowserStack Selenium hub. You can create as many variations as you like. When multiple people use the same BrowserStack account, you can use the name capability to keep the test runs separated.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/finished-browserstack-selenium-hub.png" class="no-border" >}}

## Configure Sauce Labs

### Basic Configuration

To configure Sauce Labs as a Selenium hub follow these steps:

1. Go to the **Select Provider** dialog box and select **SauceLabs**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/select-provider-dialog-saucelabs.png" class="no-border" >}}

2. The **New Selenium Hub** dialog box opens. Here you enter the necessary information for ATS to connect to your Sauce Labs account.
3. In the **Name** field you enter a name for your Selenium hub. This is only meant to help you identify the Selenium hub when selecting the Selenium hub for a test run.
4. In the **Username** field you enter the username of your Sauce Labs account.
5. In the **Access Key** field you enter the access key of your Sauce Labs account.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-saucelabs.png" class="no-border" >}}

To find the username and access key follow these steps:

1. Go to [Sauce Labs](https://saucelabs.com) and log in with the account you want to connect to ATS.
2. Open the profile menu in the upper right corner of your screen and click **My Account** in the drop-down menu.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/my-account-saucelabs.png" class="no-border" >}}

3. You find your Sauce Labs username and access key on this page.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/username-access-key-saucelabs.png" class="no-border" >}}

Leave the **New Selenium Hub** dialog box open for the next chapter.

### Custom Capabilities

To set a custom capability for Sauce Labs follow these steps:

1. Go to the **New Selenium Hub** dialog box.
2. Click **New** in the **Custom Capabilities** section.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-saucelabs-custom-capability.png" class="no-border" >}}

3. The **New Capability** dialog box opens.
4. To enter a custom capability you must know which capabilities you can use. Go to the [Test Configuration](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-TestAnnotation) section on the Sauce Labs documentation website. Choose a capability, for example, **name**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/name-capability-saucelabs.png" class="no-border" >}}

5. Now enter the key in the **Key** field and the value you want in the **Value** field.

    {{% alert color="info" %}}The datatype is always *String* unless you must enter *true* or *false* then the datatype must be set to *Boolean*.
    {{% /alert %}}

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/name-capability-saucelabs-ats.png" class="no-border" >}}

6. Click **Save**.

7. Add another custom capability or click **Save** when on the **New Selenium Hub** dialog to store your Selenium hub set-up.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-saucelabs-with-name-capability.png" class="no-border" >}}

    You now configured your Sauce Labs Selenium hub. You can create as many variations as you like. When multiple people use the same Sauce Labs account, you can use the name capability to keep the test runs separated.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/finished-saucelabs-selenium-hub.png" class="no-border" >}}

## Configure TestingBot

### Basic Configuration

To configure TestingBot as a Selenium hub follow these steps:

1. Go to the **Select Provider** dialog box and select **TestingBot**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/select-provider-dialog-testingbot.png" class="no-border" >}}

2. The **New Selenium Hub** dialog box opens. Here you enter the necessary information for ATS to connect to your TestingBot account.
3. In the **Name** field you enter a name for your Selenium hub. This is only meant to help you identify the Selenium hub when selecting the Selenium hub for a test run.
4. In the **Client Key** field you enter the Client key of your TestingBot account. 
5. In the **Client Secret** field you enter the Client secret of your testingbot account.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-testingbot.png" class="no-border" >}}

To find the username and access key follow these steps:

1. Go to [TestingBot](https://testingbot.com) and log in with the account you want to connect to ATS.
2. Click **My Account** in the upper right corner of the screen.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/my-account-testingbot.png" class="no-border" >}}

3. You find your TestingBot key and secret on this page.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/client-key-client-secret-testingbot.png" class="no-border" >}}

Leave the **New Selenium Hub** dialog box open for the next chapter.

### Custom Capabilities

To set a custom capability for TestingBot follow these steps:

1. Go to the **New Selenium Hub** dialog box.
2. Click **New** in the **Custom Capabilities** section.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-testingbot-custom-capability.png" class="no-border" >}}

3. The **New Capability** dialog box opens.
4. To enter a custom capability you must know which capabilities you can use. Go to the [Test Configuration](https://testingbot.com/support/other/test-options#name) section on the TestingBot website. Choose a capability, for example, **name**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/name-capability-testingbot.png" class="no-border" >}}

5. Now enter the *name* value in the **Key** field and the value you want in the **Value** field.

    {{% alert color="info" %}}The datatype is always *String* unless you must enter *true* or *false* then the datatype must be set to *Boolean*.
    {{% /alert %}}

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/name-capability-testingbot-ats.png" class="no-border" >}}

6. Click **Save**.

7. Add another custom capability or click **Save** when on the **New Selenium Hub** dialog to store your Selenium hub set-up.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-testingbot-with-name-capability.png" class="no-border" >}}

You now configured your TestingBot Selenium hub. You can create as many variations as you like. When multiple people use the same TestingBot account, you can use the name capability to keep the test runs separated.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/finished-testingbot-selenium-hub.png" class="no-border" >}}

## Configure a Custom Selenium Hub

### Basic Configuration

To configure a custom Selenium hub follow these steps:

1. Go to the **Select Provider** dialog box and select **Custom**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/select-provider-dialog-custom.png" class="no-border" >}}

2. The **New Selenium Hub** dialog box opens. Here you enter the necessary information for ATS to connect to your local Selenium server.
3. In the **Name** field you enter a name for your Selenium hub. This is only meant to help you identify the Selenium hub when selecting the Selenium hub for a test run.
4. In the **Custom URL** field you enter the access URL of your server.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-custom.png" class="no-border" >}}

    {{% alert color="info" %}}For more information on local Selenium set-up go to [Customer Hosted Selenium](/appstore/partner-solutions/ats/ov-deployment/#customer-hosted-selenium).
    {{% /alert %}}

Leave the **New Selenium Hub** dialog box open for the next section.

### Custom Capabilities

Setting a custom capability in your custom Selenium is possible but must be configured on the server itself.

You now configured your custom Selenium hub. You can create as many variations as you like.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-configure-a-selenium-hub/finished-custom-selenium-hub.png" class="no-border" >}}

## Next Up

You now learned how to configure the different Selenium hubs. The next how-to is [How to Create a Test Case](/appstore/partner-solutions/ats/ht-two-create-a-test-case/). You find an overview of all the how-tos and the structure on the [ATS 2 How-tos](/appstore/partner-solutions/ats/ht-two/) page. We advise you to follow the predefined structure.
