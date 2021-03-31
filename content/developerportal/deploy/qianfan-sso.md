---
title: "千帆玉符 SSO - QianFan Single Sign-On"
category: "Deployment"
menu_order: 48
description: "Use the QianFan SSO module (千帆玉符 SSO) to add Single Sign-on to your Tencent app using the user's QianFan credentials"
tags: ["SSO", "Single Sign-on", "Tencent", "QianFan"]
#draft: true
---

{{% alert type="info" %}}
This documentation is only relevant to customers deploying their Mendix app on the Tencent Cloud.
{{% /alert %}}

## 1 Introduction

The Qianfan SSO module enables your app end-users to sign in with single sign-on (SSO) using an iDaaS account when your app is deployed to the Tencent Cloud. This document explains how to integrate the Qianfan SSO module with your Mendix app.

Full documentation in Chinese can be downloaded as a PDF from [千帆玉符 SSO 模块使用手册](https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/qianfansso/QianFanSSO%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf).

## 2 Purchasing and Launching the Service

1. Open Qianfan Yufu identity management services

2. Use the following URL to purchase and launch the service:

    [https://cloud.tencent.com/product/cig](https://cloud.tencent.com/product/cig)

    After activation, you'll receive the following email:

    ![](attachments/qianfan-sso//image1.png)

## 3 Configuring Yufu iDaaS

### 3.1 Logging in to Yufu iDaaS
    
1. Log in to Yufu iDaaS using login address provided by the above-mentioned email, log in to Yufu iDaaS control panel

    ![](attachments/qianfan-sso//image2.png)

2. Go into administrator mode

    ![](attachments/qianfan-sso//image3.png)

### 3.2 User management
    
#### 3.2.1 Adding Users

1. Select Object Management -\> Department Management -\> Department Data

    ![](attachments/qianfan-sso//image4.png)

2. Click on the corresponding department and select "department users"

    ![](attachments/qianfan-sso//image5.png)

3. Click "Add User" - "Create User"

    ![](attachments/qianfan-sso//image6.png)

    Or click "Transfer Users"

4. Enter the user information and click **OK**

### 3.3 Application Management
    
#### 3.3.1 Adding an App

1. Click the "Add App" button on the right side

    ![](attachments/qianfan-sso//image7.png)

2. Select **Create Custom App**

    ![](attachments/qianfan-sso//image8.png)

3. Select OpenID Connect

    ![](attachments/qianfan-sso//image9.png)

4. Select Web

    ![](attachments/qianfan-sso//image10.png)

5. Enter the basic information

    ![](attachments/qianfan-sso//image11.png)

6. Enter the callback URI.

    Since Yufu does not support localhost, please enter this during the local testing phase

    `http://127.0.0.1:8080/Qianfan/callback`

7. After the app gets an the official domain name, update the URI to the following format

    `<APP Domain>/Qianfan/callback`

8. Save the Client ID & Client Secret values locally

    ![](attachments/qianfan-sso//image12.png)

9. Save the 'Well-known interface' address locally, and also save the contents shown when you click the link

#### 3.3.2 Configuring the app

1. Click on "Self-Service Request"

    ![](attachments/qianfan-sso//image13.png)

    The configuration is as follows

    ![](attachments/qianfan-sso//image14.png)

2. Click "Add users".

    If you have already clicked on "Users", click on the plus sign to add users

    ![](attachments/qianfan-sso//image15.png)

3. Enter the user's name and click OK

    ![](attachments/qianfan-sso//image16.png)

### 3.4 Applying Permissions Management

The permissions in Yufu are equivalent to the roles in Mendix.

#### 3.4.1 API Management

1. Select "Apps" -\> "API Management" -\> "Create"

    ![](attachments/qianfan-sso//image17.png)

2. Enter the basic information click OK. And remember the API unique identifier. For example:

    ![](attachments/qianfan-sso//image18.png)

3. Go to the API management interface and click "Add permissions"

    ![](attachments/qianfan-sso//image19.png)

4. Enter the basic information and click OK. If you have multiple roles, please add them separately. For example:

    ![](attachments/qianfan-sso//image20.png)

    {{% alert type="info" %}}Please set the Display Name as follows: {App name} + underscore “\_” + {App role name}. For example: “TestApp\_Administrator”{{% /alert %}}

    Permissions are displayed in the API management interface when successful

    ![](attachments/qianfan-sso//image21.png)

5. Click "Add apps"

    ![](attachments/qianfan-sso//image22.png)

7. Select the app created in Section 3.3 and confirm. For example:

    ![](attachments/qianfan-sso//image23.png)

8. Upon completion, check whether the permissions and the trusted SSO application is correct. For example:

    ![](attachments/qianfan-sso//image24.png)

#### 3.4.2 Rights Group Management

1. Select Object Management - Rights Group Management

    ![](attachments/qianfan-sso//image25.png)

2. Click Add permissions group

    ![](attachments/qianfan-sso//image26.png)

    ![](attachments/qianfan-sso//image27.png)

3. Enter the basic information, set the Permission Group Type to Custom, and click OK. For example:

    ![](attachments/qianfan-sso//image28.png)

4. Go to the management interface and click "Add users"

    ![](attachments/qianfan-sso//image29.png)

5. After selecting the corresponding users, click OK to confirm.

    ![](attachments/qianfan-sso//image30.png)

6. Click "Associate Permissions"

    ![](attachments/qianfan-sso//image31.png)

7. Select the API created in Section 3.4.1

    ![](attachments/qianfan-sso//image32.png)

8. Select permissions and confirm

    ![](attachments/qianfan-sso//image33.png)

    If you have more than one permission, add each permission group separately and associate them with people and permissions.

    At this point, the Yufu end is configured. For example, you have completed:

  - *Create Administrator and User permissions and assign the appropriate permissions to the appropriate people*

    ![](attachments/qianfan-sso//image34.png)

    ![](attachments/qianfan-sso//image35.png)

    ![](attachments/qianfan-sso//image36.png)

## 4 Mendix configuration
    
### 4.1 Downloading the QianfanSSO module
        
1. Download the QianfanSSO module at the following address

    [https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/Qianfansso/QianfanSSO.mpk](https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/qianfansso/QianFanSSO.mpk)

### 4.2 Importing the QianfanSSO module

1. Open an existing app project with Studio Pro, if you don't have one, create a new app project first. Right-click on the project to select "Import module package"

    ![](attachments/qianfan-sso//image37.png)

2. Select the QianfanSSO.mpk file you just downloaded and click on impport

    ![](attachments/qianfan-sso//image38.png)

### 4.3 Configuring the QianfanSSO module

1. Click "Settings" - "Runtime" - "After Startup" to select "QianfanSSO.QianfanSSO\_AfterStartup"

    ![](attachments/qianfan-sso//image39.png)

2. For local testing, please click "Configurations" - "Server" to replace the default URL with

    `http://127.0.0.1:8080`

    ![](attachments/qianfan-sso//image40.png)

3. Expand the QianfanSSO module and enter the Configuration folder

    ![](attachments/qianfan-sso//image41.png)

4. Assign the Client ID and the Client Secret values saved in section 3.3.1 to the corresponding constants (“ClientID” and “ClientSecret”)

5. In the constant “OpenIdConnectProvider”, assign the Well-known URL from section 3.3.1 after removing the segment `.well-known/openid-configuration`.

    For example: 'https://xxx.cig.tencentcs.com/sso/tn-a1be8dd15d05/ai-32234954/oidc`

6. In the constant “Issuer”, assign the issuer from the Well-known URL from section 3.3.1

    For example: `https://xxx.cig.tencentcs.com`

7.  In the constant “Audience”, assign the API unique identifier:

    For example: `TEST_Administrator`

    ![](attachments/qianfan-sso//image42.png)

8. In the constant “Prefix”, assign the first half of the permission name (including the underscore) from in section 3.5.1

    For example:

   ![](attachments/qianfan-sso//image20.png)

9. With the above example, the “Prefix” should be set to `TestApp_`

### 4.4 Configure the login page

1. Click on "Project" - "Show Project Directory in Explorer"

    ![](attachments/qianfan-sso//image43.png)

2. Go to the theme folder and replace the existing "login.html" file with the following file, which contains the login page with Qianfan Yufu SSO content

    [https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/Qianfansso/login.html](https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/qianfansso/login.html)

3. Download the Qianfan Yufu logo file “yufu.png”

    [https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/Qianfansso/yufu.png](https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/qianfansso/yufu.png)

4. Click on "Synchronize Project Directory" in Studio Pro

    ![](attachments/qianfan-sso//image44.png)

### 4.5 Configure the logout page

1. Add a button ("Button") to the page.

2. Set the "On Click" event to "Call a microflow", select "QianfanSSO.QianfanSSO\_Logout" and set the "Caption" to "Logout"

    ![](attachments/qianfan-sso//image45.png)

### 4.6 Role settings

1. Open Security and set the "Security Level" to "Production"

2. Make sure that under "User roles" the role names are consistent with the part of the permission names after the underscore, as set in section 1.5.2. For example:

    ![](attachments/qianfan-sso//image46.png)

3. Click on the corresponding role and click "Edit" to make sure that the corresponding permissions in "QianfanSSO" are checked

    ![](attachments/qianfan-sso//image47.png)

### 4.7 Sign in for verification

1. After saving the configuration, click "Run Locally" and click "View" after success

    ![](attachments/qianfan-sso//image48.png)

2. Open the login screen below and click "Qianfan IDaaS Account"

    ![](attachments/qianfan-sso//image49.png)

3. On the Yufu login interface, log in using your Yufu account

    ![](attachments/qianfan-sso//image50.png)

    The app jumps back to the app page

    ![](attachments/qianfan-sso//image51.png)

4. Click "logout" to log out and return to the login screen

    ![](attachments/qianfan-sso//image52.png)

### 4.8 Cloud verification

1. After the local test passes, go to the App deployment page via Environment in the Mendix platform

![](attachments/qianfan-sso//image53.png)

2. Click the Add Environment button

![](attachments/qianfan-sso//image54.png)

3. For "Purpose" select "Production" and enters the purchased subscription secret

4. Select the appropriate plan and click "Create Environment"

    ![](attachments/qianfan-sso//image55.png)

5. Click create Package to select the version for Build

    ![](attachments/qianfan-sso//image56.png)

6. Select the .mda file that should be deployed, and click "Deploy"

    ![](attachments/qianfan-sso//image57.png)

7. Save the Url and click "Transport"![](attachments/qianfan-sso//image58.png)

8. Click on the "Constant" tab to assign the new Url to the "AppUrl" constant

    ![](attachments/qianfan-sso//image59.png)

9. Finally click on "Apply Changes"

    Check that Deployment and Environment status are normal

    ![](attachments/qianfan-sso//image60.png)

10. Go to the Qianfan Yufu Management page and add a callback URI as following: **{App URL} + "/qianfan/callback"**

    For example:

    ![](attachments/qianfan-sso//image61.png)

11. Since the App URL is a temporary url, please use the Cluster CLB IP in the email you received when you purchased Mendix and update your local hostfile:

    * On Windows：`C:\Windows\System32\drivers\etc\hosts`

    * On Linux：/etc/hosts

12. Update the IP for the App URL

    ![](attachments/qianfan-sso//image62.png)

13. Finally, visit the "App Url" and click "Qianfan IDaaS Account" to access the app

    ![](attachments/qianfan-sso//image49.png)

