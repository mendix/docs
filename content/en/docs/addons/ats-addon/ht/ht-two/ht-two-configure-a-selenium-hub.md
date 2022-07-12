---
title: "Configure a Selenium Hub"
url: /addons/ats-addon/ht-two-configure-a-selenium-hub/
description: "Describes how to configure a selenium hub for the supported selenium providers and a custom selenium hub."
tags: ["ATS", "testing"]
---

## 1 Introduction 

This how-to explains how to configure a selenium hub in ATS. There are four selenium hub possibilities in ATS. How to configure all the four selenium hubs and where you can retrieve the necessary information is explained.

This how-to will teach you how to do the following:

* Configure a Browserstack Selenium Hub
* Configure a Saucelabs Selenium Hub
* Configure a Testingbot Selenium Hub
* Configure a Custom Selenium Hub

## 2 Prerequisites

Before starting with this how-to, make sure you have the following prerequisites in place:

* Have the appropriate role to gain access to the test settings in ATS.
* Have access to a selenium provider account or internal selenium server.

## 3 The Test Settings

To get to the test settings follow these steps:

1. Go to ATS and login.
2. Open the app where you want to add the selenium hubs.
3. Once inside your app click the profile menu and click **Show Test Settings**.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/show-test-settings.png" >}}

The **Selenium hubs** section contains all the configured selenium hubs for this app. Here you add a new selenium hub by clicking **New Selenium Hub**.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/new-selenium-hub.png" >}}

The **Select Provider** dialog box opens. Here you select one of the four configurable selenium hub options. Each of the options is explained in the sections below.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/select-provider-dialog.png" >}}

## 4 Custom Capabilities

Each selenium provider allows the user to set certain custom capabilities. The custom capabilities are used to set specific conditions. ATS uses these custom capabilities when you execute a test case or test suite. For example, Selecting 'Chrome' as your browser is a custom capability. ATS will then execute the test case or test suite using Chrome. The different selenium providers allow for different custom capabilities. How to select custom capabilities is explained for each Selenium Hub in the corresponding chapter.

Some examples of custom capabilities are:
* Timezone
* Resolution
* Builds
* Names

{{% alert color="info" %}}

Browser and platform overwrites do not work! The ATS run configuration will overwrite your custom capabilities.

{{% /alert %}}

Custom capabilities are explained separately for each Selenium option in the next chapters.

## 5 Configure Browserstack

### 5.1 Basic Configuration

To configure Browserstack as a selenium hub follow these steps:

1.  Go to the **Select Provider** dialog box and select **Browserstack**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/select-provider-dialog-browserstack.png" >}}

2. The **New Selenium Hub** dialog box opens. Here you enter the necessary information for ATS to connect to your Browserstack account.
3. In the **Name** field you enter a name for your selenium hub. This is only meant to help you identify the selenium hub when selecting the selenium hub for a test run.
4. In the **Username** field you enter the username of your Browserstack account.
5.  In the **Access Key** field you enter the access key of your Browserstack account.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-browserstack.png" >}}

To find the username and access key follow these steps:

1. Go to [Browserstack](https://www.browserstack.com) and login with the account you want to connect to ATS.
2. Click **Automate** in the navigation bar.
3.  There is a collapsible menu on the left side of the screen. When you unfold it, it displays the **Username** and the **Access Key** when you unfold it. It also has a **Copy** button.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/username-access-key-browserstack.png" >}}

Leave the **New Selenium Hub** dialog box open for the next chapter.

### 5.2 Custom Capabilities

To set a custom capability for Browserstack follow these steps:

1. Go to the **New Selenium Hub** dialog box.
2.  Click **New** in the **Custom Capabilities** section.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-browserstack-custom-capability.png" >}}

3. The **New Capability** dialog box opens.
4.  To enter a custom capability you must know which capabilities you can use. Go to the [capabilities](https://www.browserstack.com/automate/capabilities) section on the Browserstack website. Choose a capability, for example, **name**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/name-capability-browserstack.png" >}}

5.  Now enter the capability in the **Key** field and the value you want in the **Value** field.

	{{% alert color="info" %}}The datatype is always *String* unless you must enter *true* or *false* then the datatype must be set to *Boolean*.
	{{% /alert %}}

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/name-capability-browserstack-ats.png" >}}

6. Click **Save**.

7.  Add another custom capability or click **Save** when on the **New Selenium Hub** dialog to store your selenium hub set-up.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-browserstack-with-name-capability.png" >}}

You now configured your Browserstack Selenium Hub. You can create as many variations as you like. When multiple people use the same Browserstack account, you can use the name capability to keep the test runs separated.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/finished-browserstack-selenium-hub.png" >}}

## 6 Configure SauceLabs

### 6.1 Basic Configuration

To configure SauceLabs as a selenium hub follow these steps:

1.  Go to the **Select Provider** dialog box and select **SauceLabs**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/select-provider-dialog-saucelabs.png" >}}

2. The **New Selenium Hub** dialog box opens. Here you enter the necessary information for ATS to connect to your SauceLabs account.
3. In the **Name** field you enter a name for your selenium hub. This is only meant to help you identify the selenium hub when selecting the selenium hub for a test run.
4. In the **Username** field you enter the username of your SauceLabs account.
5.  In the **Access Key** field you enter the access key of your SauceLabs account.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-saucelabs.png" >}}

To find the username and access key follow these steps:

1. Go to [SauceLabs](https://saucelabs.com) and login with the account you want to connect to ATS.
2.  Open the profile menu in the upper right corner of your screen and click **My Account** in the drop-down menu.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/my-account-saucelabs.png" >}}

3.  You find your SauceLabs username and access key on this page.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/username-access-key-saucelabs.png" >}}

Leave the **New Selenium Hub** dialog box open for the next chapter.

### 6.2 Custom Capabilities

To set a custom capability for SauceLabs follow these steps:

1. Go to the **New Selenium Hub** dialog box.
2.  Click **New** in the **Custom Capabilities** section.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-saucelabs-custom-capability.png" >}}

3. The **New Capability** dialog box opens.
4.  To enter a custom capability you must know which capabilities you can use. Go to the [Test Configuration](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-TestAnnotation) section on the SauceLabs documentation website. Choose a capability, for example, **name**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/name-capability-saucelabs.png" >}}

5.  Now enter the key in the **Key** field and the value you want in the **Value** field.

	{{% alert color="info" %}}The datatype is always *String* unless you must enter *true* or *false* then the datatype must be set to *Boolean*.
	{{% /alert %}}

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/name-capability-saucelabs-ats.png" >}}

6. Click **Save**.

7.  Add another custom capability or click **Save** when on the **New Selenium Hub** dialog to store your selenium hub set-up.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-saucelabs-with-name-capability.png" >}}

	You now configured your SauceLabs Selenium Hub. You can create as many variations as you like. When multiple people use the same SauceLabs account, you can use the name capability to keep the test runs separated.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/finished-saucelabs-selenium-hub.png" >}}

## 7 Configure Testingbot

### 7.1 Basic Configuration

To configure Testingbot as a selenium hub follow these steps:

1.  Go to the **Select Provider** dialog box and select **Testingbot**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/select-provider-dialog-testingbot.png" >}}

2. The **New Selenium Hub** dialog box opens. Here you enter the necessary information for ATS to connect to your Testingbot account.
3. In the **Name** field you enter a name for your selenium hub. This is only meant to help you identify the selenium hub when selecting the selenium hub for a test run.
4. In the **Client Key** field you enter the Client key of your Testingbot account. 
5.  In the **Client Secret** field you enter the Client secret of your testingbot account.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-testingbot.png" >}}

To find the username and access key follow these steps:

1. Go to [Testingbot](https://testingbot.com) and login with the account you want to connect to ATS.
2.  Click **My Account** in the upper right corner of the screen.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/my-account-testingbot.png" >}}

3.  You find your Testingbot key and secret on this page.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/client-key-client-secret-testingbot.png" >}}

Leave the **New Selenium Hub** dialog box open for the next chapter.

### 7.2 Custom Capabilities

To set a custom capability for Testingbot follow these steps:

1. Go to the **New Selenium Hub** dialog box.
2.  Click **New** in the **Custom Capabilities** section.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-testingbot-custom-capability.png" >}}

3. The **New Capability** dialog box opens.
4.  To enter a custom capability you must know which capabilities you can use. Go to the [Test Configuration](https://testingbot.com/support/other/test-options#name) section on the Testingbot website. Choose a capability, for example, **name**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/name-capability-testingbot.png" >}}

5.  Now enter the *name* value in the **Key** field and the value you want in the **Value** field.

	{{% alert color="info" %}}The datatype is always *String* unless you must enter *true* or *false* then the datatype must be set to *Boolean*.
	{{% /alert %}}

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/name-capability-testingbot-ats.png" >}}

6. Click **Save**.

7.  Add another custom capability or click **Save** when on the **New Selenium Hub** dialog to store your selenium hub set-up.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-testingbot-with-name-capability.png" >}}

You now configured your Testingbot Selenium Hub. You can create as many variations as you like. When multiple people use the same Testingbot account, you can use the name capability to keep the test runs separated.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/finished-testingbot-selenium-hub.png" >}}

## 8 Configure a Custom Selenium Hub

### 8.1 Basic Configuration

To configure a custom selenium hub follow these steps:

1.  Go to the **Select Provider** dialog box and select **Custom**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/select-provider-dialog-custom.png" >}}

2. The **New Selenium Hub** dialog box opens. Here you enter the necessary information for ATS to connect to your local selenium server.
3. In the **Name** field you enter a name for your selenium hub. This is only meant to help you identify the selenium hub when selecting the selenium hub for a test run.
4.  In the **Custom URL** field you enter the access URL of your server.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/new-selenium-hub-dialog-custom.png" >}}

	{{% alert color="info" %}}For more information on local selenium set-up go to [Customer Hosted Selenium](/addons/ats-addon/ov-deployment/#customer-hosted-selenium).
	{{% /alert %}}

Leave the **New Selenium Hub** dialog box open for the next section.

### 8.2 Custom Capabilities

Setting a custom capability in your custom selenium is possible but must be configured on the server itself.

You now configured your Custom Selenium Hub. You can create as many variations as you like.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-configure-a-selenium-hub/finished-custom-selenium-hub.png" >}}

## 9 Next Up

You now learned how to configure the different selenium hubs. The next how-to is [How to Create a Test Case](/addons/ats-addon/ht-two-create-a-test-case/). You find an overview of all the how-tos and the structure on the [ATS 2 How-tos](/addons/ats-addon/ht-two/) page. We advise you to follow the predefined structure.
