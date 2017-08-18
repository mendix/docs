---
title: "Send Custom Emails from Your App"
category: "Extendability"
tags: []
---

## 1 Introduction

Each application can leverage Mendix App Store content to create and send custom emails based off of configurable templates. To achieve this, the app will require three Mendix App Store modules and configuration settings for the SMTP server that will be used to relay the messages.

**This how-to will teach you how to do the following:**

* Download the required modules
* Add navigation items
* Configure settings

## 2 Prerequisites

None.

## 3 Download the Required Modules from the Mendix App Store

In this part of the how-to, you will learn how to download the necessary modules from the Mendix App Store. This is a very quick process, as the modules will be imported into your project in just a few clicks. The modules that are required for this process are called MxModelReflection, Encryption, and Email Module with Templates.

{{% alert type="info" %}}

The MxModelReflection module is a commonly used module in most apps. The purpose of this module is to allow the app to reflect into the domain model (entities and attributes) and microflow definitions at runtime.

{{% /alert %}}

### 3.1 Download the MxModelReflection Module

1. Open the **Mendix App Store** from within the Modeler.
2. Search for the keyword *Reflection*.
3. Click **Download** and include the module as a new module:

    ![](attachments/18448688/18581166.png)

4. Ensure the module has been downloaded successfully and is now a new module in your project.

### 3.2 Download the Encryption Module

1. Open the **Mendix App Store** from within the Modeler.
2. Search for the keyword *Encryption*.
3. Click **Download** and include the module as a new module:

    ![](attachments/18448688/18581179.png)

4. Ensure the module has been downloaded successfully and is now a new module in your project.

### 3.3 Download the Email Module with Templates Module 

1. Open the **Mendix App Store** from within the modeler.
2. Search for the keywords *Email Template*.
3. Click **Download** and include the module as a new module.

    ![](attachments/18448688/18581178.png)

4. Ensure the module has been downloaded successfully and is now a new module in your project.

{{% alert type="warning" %}}

Depending on the layout selected when the project was created, errors in the modeler may arise due to the new module's default layouts. To correct this, open each page that has an error and update the layout to the desired layout within the app.

{{% /alert %}}

## 4 Add Navigation Items to Allow Users to Configure Settings

In this part of the how-to, you will learn how to add the required pages into the **Project Navigation** that are needed to configure both the SMTP settings and email templates that will be used within the application.

1. Open the **Navigation** tab within the project.
2. Add a new item to the Navigation for **Administrator** to access **MxModelReflection.MxObjects_Overview**:

    ![](attachments/18448688/18581165.png)

3. Add a new item to the Navigation for **Administrator** to access **EmailTemplate.IVK_OpenEmailSettings**:

    ![](attachments/18448688/18581177.png)

4. Add a new item to the Navigation for **Administrator** to access **EmailTemplate.EmailTemplate_Overview**:

    ![](attachments/18448688/18581176.png) 

{{% alert type="info" %}}

Within the EmailTemplate module, there are several useful pages that can help in tracking email logs and failures. Add those pages to the Navigation as well for additional information on the email history.

{{% /alert %}}

## 5 Configuration

In this part of the how-to, you will learn how to run the MxModelReflection synchronization as well as configure the SMTP settings required to send email from the app, the encryption module, and email templates that will be used in the app. SMTP server settings and configurations should be known at the time of configuration. This encompasses settings such as username and password (if authentication is required), server name/address, port number for SMTP relay (25 is default, 587 for TLS), and sender address.

### 5.1 Run the MxModelReflection Synchronization

1. Open the **MxModelReflection** overview page via the navigation item configured to **MxModelReflection.MxObjects_Overview**.
2. Highlight each module the app needs to synchronize and click **Toggle Module Sync** (**Sync this Module** should now be **Yes**).
3. Click **Synchronize Objects** to execute the synchronization process.

### 5.2 Configuring SMTP Settings

1. Open the **SMTP Settings** page via the navigation item configured to **EmailTempate.IVK_OpenEmailSettings**.
2. If an account is required to authenticate against the SMTP server, enter the **User name** and **Password**(which will be encrypted).
3. Configure the **Server** as the SMTP server location (server name or IP address).
4. Configure the **Port** that will be open to SMTP relay (25 is default, 465 for SSL encryption, 587 for TLS encryption).
5. Configure the **From address** that will be the sender of the email.
6. Select an encryption method if SSL or TLS encryption methods are required to send an SMTP relay.
7. Click **Save** to save the SMTP configuration settings:

    ![](attachments/18448688/18581171.png)

{{% alert type="info" %}}

Make sure to allow a administrator to access this page and that they can read/write the configuration settings entity.

{{% /alert %}}

### 5.3 Configuring Email Templates

1. Open the **Email Template Overview** page via the navigation item configured to **EmailTemplate.EmailTemplate_Overview**.
2. Click **New** to start the creation of a new template.
3. Enter a name for the template in the **Name** field.
4. Specify by default what the values are for **From**, **CC**, **BCC**, **Subject**, and **Use Only Plain Text**:

    ![](attachments/18448688/18581167.png)

    {{% alert type="info" %}}

    All of the email values for To, From, CC, BCC, and Subject can be overridden once the email functionality is implemented if those values are to be dynamic within the app. Also, attachments can be added to this process at runtime within a microflow. 

    {{% /alert %}}
5. Configure both the HTML Text and Plain Text formats for the email with the template text that needs to be in the email body. Since the template can handle tokens (described next), put placeholders in for the dynamic attributes needed in the email in the format of `&123;%TokenSequenceNumber%&125;`.

    ![](attachments/18448688/18581168.png)

6. Specify and upload any attachments that will be sent automatically when the email is triggered.

### 5.4 Configuring the Template Tokens

1. Select the object from which the token will need to be derived:

    ![](attachments/18448688/18581162.png)

    {{% alert type="info" %}}

    Within the context of email templates, the object will be the entity in the Domain Model from which the data value will be derived.

    {{% /alert %}}
2. Set the **TokenSequenceNumber** between the token characters, the **Description**, and the **Attribute** that will populate in the email when triggered:

    ![](attachments/18448688/18581163.png)

3.  Save the token and the template.

    {{% alert type="info" %}}

    If tokens are used within the template, it will be required that a parameter of the same entity type is passed to the email microflow so that the tokens can be read off of the correct object.

    {{% /alert %}}

### 5.5 Configuring the Encryption Key

Navigate to the **Encryption.EncryptionKey** constant within the app and set this value to a 16-character alpha-numeric value:

![](attachments/18448688/18581170.png)

## 6 Implementing Email Functionality

In this part of the how-to, you will learn how to utilize the previous configurations to send custom emails from the app by invoking microflows that interact with the EmailTemplate module. There is an example microflow within the EmailTemplate module (EmailTemplate.IVK_CreateAndSendEmail) that should be used as the basis for all email transmissions.

### 6.1 Configuring the Microflow to Send Emails

1. Duplicate the **EmailTemplate.IVK_CreateAndSendEmail** microflow.
2. Rename the duplicated microflow to the desired name.
3. Move the microflow into a non-App Store content module so that it is not overwritten or removed in the future.
4. Change the microflow to use the input parameters relevant to the emails in your app.
5. Remove the **Order** and **Customer** example objects for valid objects.
6. The appropriate EmailTemplate should be retrieved and passed to this microflow:

    ![](attachments/18448688/18581160.png)

7. Customize the **Set email data based on the customer and template** Actionto the necessary attributes from the microflow parameters:

    ![](attachments/18448688/18581161.png)

8. Test the functionality to ensure the SMTP and templates are configured correctly.

{{% alert type="info" %}}

It is very important to set up log activities within the microflows to capture errors or other key events in the log for ease of debugging.

{{% /alert %}}

## 7 Related Content

* [How to Explore the Connectors and Adapters](explore-the-connectors-and-adapters)
* [How to Access a Samba Share from the MxCloud](access-a-samba-share-from-the-mxcloud)
