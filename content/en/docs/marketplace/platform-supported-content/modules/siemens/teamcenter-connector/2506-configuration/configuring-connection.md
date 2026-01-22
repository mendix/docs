---
title: "Configuring the Connection to Teamcenter"
url: /appstore/modules/siemens-plm/configuring-connection/
weight: 3
description: "Describes the connection configuration steps for Teamcenter."
---

## Configuring the Connection to Teamcenter

To help administrators configure the connection to Teamcenter, the Teamcenter Connector contains configuration microflows and pages. To configure the connection to Teamcenter, the Mendix administrator must do the following:

1. In the navigation, update the Default home page to connect to the **ExecuteAdminLogin** microflow.

    {{< figure src="/attachments/partners/siemens/teamcenter/image005.png" alt="" class="no-border" >}}

2. In navigation, update the **Role-based home pages** to connect to **AdminLogin** and **UserLogin** microflows based on the role.

    {{< figure src="/attachments/partners/siemens/teamcenter/image010.png" alt="" class="no-border" >}}

3. In navigation, update the **Home** menu items to include the **ExecuteAdminLogin** and **ExecuteLogin** microflows.

    {{< figure src="/attachments/partners/siemens/teamcenter/image011.png" alt="" class="no-border" >}}

4. In the security page of your project, add the respective administrator and user roles in the **User roles** tab.

    {{< figure src="/attachments/partners/siemens/teamcenter/image012.png" alt="" class="no-border" >}}

5. Run your project. The browser displays the AdminHomePage.

    {{< figure src="/attachments/partners/siemens/teamcenter/image006.png" alt="" class="no-border" >}}

6. Click the **TEAMCENTER CONFIGURATIONS** tile in the web browser.

7. Click **New** in the Teamcenter Environment Configuration page.

8. In the **Add Teamcenter Configuration** dialog box, specify the required fields and click **Save**.

9. Once you have updated the Teamcenter configuration information, log on to Teamcenter using the **TEAMCENTER LOGIN** icon.

In the previous steps, the configuration shows the Home page. If you want to customize the page that you finally see, create a new microflow that contains the **ExecuteAdminLogin** and the **ExecuteLogin** microflows. Update your **Default home page** and the **Home** menu item to connect to the microflow you created.

In the security page of Teamcenter Connector, select the appropriate permissions for the new microflows you created.

The Teamcenter Sample Application has a microflow called **MyAdminLogin** that uses the **ExecuteAdminLogin** service. Refer to that microflow for help.

{{< figure src="/attachments/partners/siemens/teamcenter/image009.png" alt="" class="no-border" >}}

## Configuring the Connection to Teamcenter with SSO {#teamcenter-sso}

To configure the connection to Teamcenter with SSO, you must set up the Teamcenter connection, and update Mendix settings.

1. In the navigation, update the Default home page and the **Home** menu item to connect to the **ExecuteAdminLogin** microflow.

    {{< figure src="/attachments/partners/siemens/teamcenter/image005.png" alt="" class="no-border" >}}

2. Add the **SSO_RegisterRequestHandlers** microflow to your startup microflow. You can perform this step in the **Runtime** tab of the **Settings** panel.

     {{< figure src="/attachments/partners/siemens/teamcenter/image007.png" alt="" class="no-border" >}}   

3. Add any Teamcenter SSL certificates to the **Certificates** tab.

4. Run your project. The browser displays the AdminHomePage.

    {{< figure src="/attachments/partners/siemens/teamcenter/image006.png" alt="" class="no-border" >}}

5. Click the **TEAMCENTER CONFIGURATIONS** tile.

6. Click **New** in the Teamcenter Environment Configuration page.

7. In the **Add Teamcenter Configuration** dialog box, specify the required fields:

    * **SSO Login Server URL**    
      Specify the SSO Login Server URL in this format: `https://<hostname:portname>/<login-service>/weblogin/login_redirect`    
      Example: `https://<your-teamcenter-url>/ssol/weblogin/login_redirect`

    * **SSO Identity Server URL**    
      Specify the SSO Identity Server URL in this format: `https://<hostname:portname>/<identity-service>`    
      Example: `https://<your-teamcenter-url>/ssoi`

    * **Teamcenter Application ID**    
      Provide the existing Teamcenter Application ID from the Teamcenter Security Services Identity Service configuration.

    * **Mendix Application ID**    
      Create a new **Application Id** for your Mendix app in the Teamcenter Security Services Identity Service configuration and enter your Mendix application root URL in the Identity Service **Application Root URL** field.    
      This action is required to redirect the browser to your Mendix app after successful authentication with Teamcenter Security Services.    
      For more information about using SSO with Teamcenter, see the [Teamcenter Security Services](https://docs.sw.siemens.com/doc/282219420/PL20241125556497283.tss00001/xid373993) help.

    {{< figure src="/attachments/partners/siemens/teamcenter/tc_connection_configuration.png" alt="" class="no-border" >}}
