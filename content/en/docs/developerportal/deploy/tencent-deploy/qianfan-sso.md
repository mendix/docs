---
title: "千帆玉符 SSO – QianFan Single Sign-On"
url: /developerportal/deploy/qianfan-sso/
weight: 20
description: "Use the QianFan SSO module (千帆玉符 SSO) to add Single Sign-on to your Tencent app using the user's QianFan credentials"
tags: ["SSO", "Single Sign-on", "Tencent", "QianFan"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#draft: true
---

{{% alert color="info" %}}
This documentation is only relevant to customers deploying their Mendix app on the Tencent Cloud.

<img src="/attachments/china.png" class="d-inline-block" /> Full documentation in Chinese can be downloaded as a PDF from [千帆玉符 SSO 模块使用手册](https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/qianfansso/QianFanSSO%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf).
{{% /alert %}}

## 1 Introduction

The Qianfan SSO module enables your app end-users to sign in with single sign-on (SSO) using an iDaaS account when your app is deployed to the Tencent Cloud. This document explains how to integrate the Qianfan SSO module with your Mendix app.


## 2 Purchasing and Launching the Service

1. Open Qianfan Yufu identity management services.

2. Use the following URL to purchase and launch the service:

    [https://cloud.tencent.com/product/cig](https://cloud.tencent.com/product/cig)

    After activation, you'll receive the following email:

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image1.png" >}}

## 3 Configuring Yufu iDaaS

### 3.1 Logging in to Yufu iDaaS

1. Log in to Yufu iDaaS using login address provided by the above-mentioned email, log in to Yufu iDaaS control panel.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image2.png" >}}

2. Switch to administrator mode (管理员模式).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image3.png" >}}

### 3.2 User Management

#### 3.2.1 Adding Users

1. Select **对象管理** -> **部门管理** -> **部门数据** (Object Management -> Department Management -> Department Data).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image4.png" >}}

2. Click on the correct department and select **本部门人员** (Department Users).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image5.png" >}}

3. Click **添加人员** -> **创建人员** (Add User -> Create User).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image6.png" >}}

    Or click** 转入人员** (Transfer Users).

4. Enter the user information and click **确定** (OK).

### 3.3 Application Management

#### 3.3.1 Adding an App

1. Click the **添加应用** (Add App) button on the right side.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image7.png" >}}

2. Select **创键自定义应用** (Create Custom App).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image8.png" >}}

3. Select **OpenID Connect**.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image9.png" >}}

4. Select **Web**.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image10.png" >}}

5. Enter the basic information.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image11.png" >}}

6. Enter the callback URI.

    Since Yufu does not support `localhost`, please use the following URI during the local testing phase:

    `http://127.0.0.1:8080/Qianfan/callback`

    After the app gets an the official domain name, update the URI to the following format:

    `<App Domain>/Qianfan/callback`

7. Save the **Client ID** and **Client Secret** values locally

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image12.png" >}}

8. Save the **Well-known** interface address locally, and also save the contents shown when you click the link.

#### 3.3.2 Configuring the App

1. Click **自助申请** (Self-Service Request).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image13.png" >}}

    The configuration is as follows

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image14.png" >}}

2. Click **添加人员** (Add Users).

    If you have already clicked "users" (人员), click on the plus sign (**+**) to add users.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image15.png" >}}

3. Enter the user's name and click **确定** (OK).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image16.png" >}}

### 3.4 Applying Permissions Management

The permissions in Yufu are equivalent to the roles in Mendix.

#### 3.4.1 API Management

1. Select **应用** -> **API管理** -> **创建** (Apps -> API Management -> Create).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image17.png" >}}

2. Enter the basic information and click **确定** (OK). And remember the API unique identifier. For example:

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image18.png" >}}

3. Go to the API management interface and click **添加权限** (Add Permissions).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image19.png" >}}

4. Enter the basic information and click **确定** (OK). If your app has multiple roles, please add them separately. For example:

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image20.png" >}}

    {{% alert color="info" %}}Set the Display Name as follows: `{App name} + underscore (_) + {App role name}`.<br/>For example: `TestApp_Administrator`.{{% /alert %}}

    Permissions are displayed in the API management interface when successful.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image21.png" >}}

5. Click **添加应用** (Add Apps).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image22.png" >}}

6. Select the app created in Section 3.3 and confirm. For example:

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image23.png" >}}

7. Upon completion, check whether the permissions and the trusted SSO application are correct. For example:

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image24.png" >}}

#### 3.4.2 Rights Group Management

1. Select **对象管理** -> **权限组管理** (Object Management -> Rights Group Management).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image25.png" >}}

2. Click **添加权限组** (Add Permissions Group).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image26.png" >}}

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image27.png" >}}

3. Enter the basic information, set the Permission Group Type to Custom, and click **确定** (OK). For example:

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image28.png" >}}

4. Go to the management interface and click **添加人员** (Add Users).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image29.png" >}}

5. After selecting the corresponding users, click **确定** (OK) to confirm.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image30.png" >}}

6. Click **关联权限** (Associate Permissions).

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image31.png" >}}

7. Select the API created in Section 3.4.1.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image32.png" >}}

8. Select permissions and confirm.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image33.png" >}}

    If you have more than one permission, add each permission group separately and associate them with people and permissions.

    At this point, the Yufu end is configured. You have done the following:

    *Create Administrator and User permissions and assign the appropriate permissions to the appropriate people.*

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image34.png" >}}

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image35.png" >}}

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image36.png" >}}

## 4 Mendix Configuration

### 4.1 Downloading the QianfanSSO Module

1. Download the QianfanSSO module from the following address.

    [https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/Qianfansso/QianfanSSO.mpk](https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/qianfansso/QianFanSSO.mpk)

### 4.2 Importing the QianfanSSO Module

1. Open an existing app in Studio Pro. If you do not have one, create a new app first. Right-click the app to select **Import module package…**.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image37.png" >}}

2. Select the QianfanSSO.mpk file you just downloaded and click **Import**.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image38.png" >}}

### 4.3 Configuring the QianfanSSO Module

1. Open **Settings**.

2. Choose the **Runtime** tab.

3. Set the **After startup** microflow to *QianfanSSO.QianfanSSO\_AfterStartup*.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image39.png" >}}

4. For local testing, you need to set the application's root URL:

    1.  Choose the **Configurations** tab
    
    2. Select the *Default* configuration and click **Edit**.
    
    3. Choose the **Server** tab.
    
    4. Set the **Application Root URL** to the following:

        `http://127.0.0.1:8080`

        {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image40.png" >}}

5. Expand the **QianfanSSO** module and the **Configuration** folder within the module.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image41.png" >}}

6. Assign the Client ID and the Client Secret values saved in section 3.3.1 to the corresponding constants (**ClientID** and **ClientSecret**).

7. Assign the *Well-known* URL from section 3.3.1 to the constant **OpenIdConnectProvider** *after removing the segment `.well-known/openid-configuration`*.

    For example: `https://xxx.cig.tencentcs.com/sso/tn-a1be8dd15d05/ai-32234954/oidc`

8. In the constant **Issuer**, assign the issuer from the Well-known URL from section 3.3.1.

    For example: `https://xxx.cig.tencentcs.com`

9.  In the constant **Audience**, assign the API unique identifier:

    For example: `TEST_Administrator`

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image42.png" >}}

10. In the constant “Prefix”, assign the first half of the permission name (including the underscore) from in section 3.5.1. For example, for the permission shown below, **Prefix** should be set to `TestApp_`:

   {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image20.png" >}}

### 4.4 Configure the Login Page

1. Choose the menu item **App** > **Show App Directory in Explorer**.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image43.png" >}}

2. Go to the **theme** folder and replace the existing **login.html** file with the following file, which contains the login page with Qianfan Yufu SSO content.

    [https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/Qianfansso/login.html](https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/qianfansso/login.html)

3. Download the Qianfan Yufu logo file **yufu.png**.

    [https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/Qianfansso/yufu.png](https://mendix-cdn-prod-1305133312.cos.ap-shanghai.myqcloud.com/qianfansso/yufu.png)

4. Choose **App** >  **Synchronize App Directory** in Studio Pro.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image44.png" >}}

### 4.5 Configure the Logout Page

1. Add a **Button** widget to the page.

2. Double-click the **Button** widget to open the **Edit Action Button** dialog box.

3. Set the **On click** event to *Call a microflow*.

4. Set the **Microflow** to *QianfanSSO.QianfanSSO\_Logout*.

5. Set the **Caption** to *logout*.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image45.png" >}}

### 4.6 Role Settings

1. Open **Security** and set the **Security Level** to *Production*.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/security-production.png" alt="security-set-to-production" >}}

2. Make sure that, in the **User roles** tab, the role **Name**s are consistent with the part of the permission names after the underscore, as set in section 3.4.1. For example:

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image46.png" >}}

3. Choose the role and click **Edit** to confirm that the corresponding permissions in **QianFanSSO** are checked.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image47.png" >}}

### 4.7 Sign in for Verification

1. Save the configuration, then click **Run Locally**. Once the app has started successfully, click **View App**.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image48.png" >}}

2. You will see the login screen below in your browser. Click **Qianfan IDaaS Account**.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image49.png" >}}

3. In the Yufu login interface, log in using your Yufu account.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image50.png" >}}

    The app jumps back to the app page.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image51.png" >}}

4. Click **logout** to sign out and return to the login screen.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image52.png" >}}

### 4.8 Cloud Verification

1. Once the local test passes, go to the App deployment page via **Environment** in the Mendix Platform

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image53.png" >}}

2. Click **Add Environment**.

{{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image54.png" >}}

3. For **Purpose** select **Production** and enter the **Subscription Secret** you have purchased.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image55.png" >}}

4. Click **Next** and select the appropriate plan, then click **Create Environment**.

5. Click **Create Package** and select the version to be built.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image56.png" >}}

6. Once packages have been built, select the .mda file that should be deployed, and click **Deploy**.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image57.png" >}}

7. Save the URL and click **Transport**.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image58.png" >}}

8. Select the **Constants** tab, and assign the new URL to the **AppUrl** constant.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image59.png" >}}

9. Finally, click **Apply Changes**.

    Check that the **Status** valuse for **Loaded Deployment Details** and **Environment Details** are normal.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image60.png" >}}

10. Go to the Qianfan Yufu Management page and add a callback URI as following: **{App Url} + "/qianfan/callback"**. For example:

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image61.png" >}}

11. Since the App Url is a temporary URL, please use the Cluster CLB IP in the email you received when you purchased Mendix and update your local hostfile:

    * On Windows：`C:\Windows\System32\drivers\etc\hosts`

    * On Linux：`/etc/hosts`

12. Update the IP for the App Url.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image62.png" >}}

13. Finally, visit the App Url and click **Qianfan IDaaS Account** to access the app.

    {{< figure src="/attachments/developerportal/deploy/tencent-deploy/qianfan-sso/image49.png" >}}
