---
title: "SAP BTP Release Notes"
linktitle: "SAP BTP"
url: /releasenotes/developer-portal/sap-cloud-platform/
weight: 30
description: "Release notes for deployment to SAP Business Technology Platform"
---

These release notes cover changes to deployment to [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/) (SAP BTP).

SAP Business Technology Platform deployments are also dependent on the latest version of the [Mendix Cloud Foundry Buildpack](https://github.com/mendix/cf-mendix-buildpack). The [Mendix Cloud Foundry Buildpack release notes](https://github.com/mendix/cf-mendix-buildpack/releases) are published separately as other deployment targets are also dependent on the buildpack.

For information on the current status of deployment to SAP BTP and any planned releases see [Mendix Status](https://status.mendix.com/).

## 2024

### August 27, 2024

#### Bug Fixes

* Fixed updating the buildpack version to the latest while re-deploying the application on SAP BTP.

### August 25, 2024

#### Portal Improvements

* Deployment package creation and deployment for Mendix version 7 and below is no longer supported.

#### Bug Fixes

* We have solved an issue where the tag description for a deployment package was missing.

### July 14, 2024

#### Portal Improvements

* We upgraded the CF calls to API v3. This includes the deployment and management of the environment.
* We renamed the Portal to **Deployment**.

#### Bug Fixes

* We fixed an MxDock login issue.

## 2022

### November 17, 2022

#### Improvements

* We improved the flow when creating an environment with an SAP HANA database by allowing the upload of a custom binding file when you create an environment.
* We added the ability to choose which environment is the target for deployments directly from Mendix Studio.
* We upgraded Mendix to use version 3 of the Cloud Foundry API, as version 2 has been deprecated.

### August 4, 2022

#### Improvements

* You can now add custom Mendix Runtime settings under the [Runtime tab](/developerportal/deploy/sap-cloud-platform/#runtime-tab).
    * this replaces the previous method of adding custom settings using User-Provided Variables.

### June 20, 2022

#### Improvements

* We released new versions of the [SAP Fiori 3 UI Resource](https://marketplace.mendix.com/link/component/116359) and [UI Package for SAP Fiori themed apps](https://marketplace.mendix.com/link/component/107625) modules in the Mendix Marketplace. These modules allow you to use Mendix 9.6.11 and above to make Fiori-styled apps which work alongside the Atlas Core theme.

### March 2, 2022

#### BAPI Connector

* We added the new BAPI Connector for SAP solutions, which allows Mendix apps to integrate using the SAP Business API (SAP BAPI) available with SAP Business Suite, SAP S/4HANA, and SAP S/4HANA Cloud. For more information, see [BAPI Connector for SAP Solutions](/appstore/modules/sap/sap-bapi-connector/).

## 2021

### December 9, 2021

#### Improvements

* We added a configurator to help you create a custom *xs-security-json* file to configure an XSUAA service. For more information, see [XSUAA Connector for SAP Business Technology Platform](/appstore/modules/sap/sap-xsuaa-connector/).

### October 14, 2021

#### Improvements

* We added the ability to provide a custom *xs-security.json* file to configure an XSUAA service. This allows you to apply the configuration every time your app is deployed. You can add your configuration by unbinding and rebinding the XSUAA service in the [Services](/developerportal/deploy/sap-cloud-platform/#binding-services) tab.

### August 30, 2021

* You can now upload your service configurations directly from the Configurator without having to download the configuration first.
* We added the ability to unbind services from your environment without deleting the service. This makes it easier to change the configuration of a service and then rebind it.

### August 19, 2021

#### Improvements – OData Connector for SAP Solutions

* We improved the error handling for expired access tokens when using [Get Destination](/developerportal/deploy/sap-cloud-platform/sap-destination-service/). Users will now be signed out so that they can retrieve a new access token.
* We added the ability to fetch the SAP Destination even if the application is not XSUAA enabled or not using XSUAA.

### July 26, 2021

#### Improvements

* We released version 2.1.1 of the [XSUAA Connector for SAP Business Technology Platform](/appstore/modules/sap/sap-xsuaa-connector/).

    {{% alert color="info" %}}This version uses a new user administration module called **SapAuthentication** and customers using *XSUAA Connector for SAP Business Technology Platform* version 2.0.0 or below will need to migrate their existing users from **Administration.Account** to **SapAuthentication.SapUser** using the community supported [User Migration](https://marketplace.mendix.com/link/component/118015) Marketplace module.{{% /alert %}}

### July 14, 2021

#### Fix

* We resolved an issue where the PostgreSQL, Hyperscaler Option service did not appear in the **Services** tab of the environment details. (Tickets 121404 and 123430)

### June 16, 2021

#### Improvements

* We released a new version of the [OData Model Creator for SAP Solutions](/appstore/services/use-sap-model-creator/) and [OData Connector for SAP Solutions](/appstore/modules/sap/sap-odata-connector/) which support read-only access to SAP OData Gateway Services which use OData v4. This is in addition to the existing support for OData v2 and v3.

#### Fix

* We fixed an issue where the activity log reported the wrong value when the memory of the environment was scaled. (Ticket 122642)

### June 2, 2021

#### Improvements

* We have added the ability to upload an MDA file to the Developer Portal for deployment to SAP BTP.

### May 27, 2021

#### Improvements

* We have added support for the [Deep Link](/appstore/modules/deep-link/) module for apps using the SAP XSUAA Connector. When you set up the module, you need to set the **LoginLocation** constant to `/xsauaalogin/` to ensure your end users are logged in.

### March 28, 2021

#### Fix

* We resolved an issue where a change in SAP BTP meant that apps using XSUAA could not be deployed.

    (Tickets 118831 118847 118861 118862 118874 118876 118908 118925 118935 118983 119020)

### February 10, 2021

#### Improvements

* We added the ability to extend the timeout period for the Cloud Foundry health check when transporting an app to a new environment on SAP BTP.
* We added the ability to define custom environment variables for your app deployed on SAP BTP.
* We added the ability to enable *Dynatrace* for your app deployed to SAP BTP by selecting variables from the supported custom environment variables list.
* SAP Cloud Platform was renamed SAP Business Technology Platform (SAP BTP) and changes were made to the documentation to reflect this.

For more information see [SAP Business Technology Platform - deploy](/developerportal/deploy/sap-cloud-platform/).

## 2020

### December 21, 2020

#### Improvements

* We released the [SAP Fiori 3 UI Resource](https://marketplace.mendix.com/link/component/116359) module in the Mendix Marketplace. This allows you to create the SAP Fiori 3 user experience in your Mendix apps. SAP Fiori 3 is the new target design system for all SAP products in the *Intelligent Suite*. For more information, see [SAP Fiori UI Resources](/appstore/modules/sap-ui-resources/sap-fiori-3-0/).

### December 9, 2020

#### Improvements

* We have added support for PostgreSQL on SAP Cloud Platform, Hyperscaler Option for Mendix apps deployed to SAP Cloud Platform.
    * this comes with a configurator to help you create the correct configuration.
    * see [Running Mendix on PostgreSQL on SAP Cloud Platform](/developerportal/deploy/sap-cloud-platform/#sap-hyperscaler) for more information.
* As part of a Developer Portal clean up, we removed the *Model* option from the *DEVELOP* section of the Developer Portal menu when you are looking at environments on SAP Cloud Platform. The functions of this page are still available via the **Edit in Studio Pro** button on the environments page.

### October 21, 2020

#### Improvements

* We split the **Edit App** button into two separate buttons, **Edit in Studio** and **Edit in Studio Pro** on some of the Developer Portal pages (Environments, App Services, Metrics, Alerts, Logs, Backups, and the Node Permissions tab of Security).
* We also updated the drop down for the **View App** button.

### April 24, 2020

#### Improvements

* We have added an easy-to-use autoscaler configurator to allow you to easily create JSON configuration files for the **Application Autoscaler** on SAP Cloud Platform. See [Application Autoscaler for SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/sap-autoscaler/) for more information.
    * There is currently an issue with how the JSON is uploaded. We are working on a fix for this but, in the meantime, please check the workaround in the documentation to ensure that the JSON is uploaded.

### March 26, 2020

#### Improvements

* We have added support for deploying to the Azure Netherlands region of SAP Cloud Platform.
    * Object storage is only supported in the Azure Netherlands region for Mendix 8.7.0 and above.
* We have added a log of all deployment activities which are carried out on your SAP environments to the environments page of apps which are deployed to SAP Cloud Platform.
* We have added the ability to specify a custom URL (for example, `appname.subdomain.domain.com`) where the user will be redirected after signing on using XSUAA, instead of being redirected to the generated URL (for example, `appname.cfapps.eu10.hana.ondemand.com`) of the app.

### January 3, 2020

#### Improvements

* We added support for using the HANA trial database available in new SAP Cloud Platform trial accounts. See the [Running Mendix on SAP HANA](/developerportal/deploy/sap-cloud-platform/#sap-hana) section of the *SAP Cloud Platform* deployment document for more details.

## 2019

### September 13, 2019

#### Improvements

* We added support for AWS RDS PostgreSQL databases when deploying to SAP Cloud Platform

### July 4, 2019

#### Fixes

* We fixed an issue where the XSUAA configuration wasn’t updated after deployment. **Please redeploy any apps which you deployed to SAP Cloud Platform between June 27 and 8:00 CST on July 4.**

### May 13, 2019

#### Fixes

* We fixed an issue for users deploying to SAP Cloud Portal where newly-bound services were bound correctly but did not appear in the Mendix Developer Portal. (Ticket 81418)

### March 29, 2019

#### Improvements

* We have changed Mendix deployment to **SAP Cloud Platform** so that the Cloud Foundry stack cflinuxfs3 is used. Previously, Mendix apps were using cflinuxfs2, which has been deprecated by SAP. See [Cloud Foundry Environment – Deprecation of cflinuxfs2](https://help.sap.com/doc/43b304f99a8145809c78f292bfc0bc58/Cloud/en-US/98bf747111574187a7c76f8ced51cfeb.html?from=2018-11-08&sel3=Announcement&sel1=Cloud%20Foundry%20Environment&to=2018-11-08) SAP release note from 8 November 2018, and [Rapid Application Development by Mendix – Stack Switch](https://help.sap.com/doc/43b304f99a8145809c78f292bfc0bc58/Cloud/en-US/98bf747111574187a7c76f8ced51cfeb.html?from=2019-03-29&to=2019-03-29&sel3=Announcement) SAP release note from 29 March 2019 for more information. The next time that you deploy a new, or existing, Mendix app to *SAP Cloud Platform* from the Mendix Developer Portal, the new stack will be applied to your app.

### March 21, 2019

#### Improvements

* We have added the ability to manage *SAP Cloud Platform* Cloud Foundry Marketplace services from within the Mendix Developer Portal.

#### Limitation

* If an app is deployed to SAP from the Desktop Modeler *before it has been started from the Developer Portal*, the deployment will fail because the marketplace services have not been bound. Please ensure that apps are first deployed from the Developer Portal before trying to deploy them from the Desktop Modeler.

## 2018

### October 22, 2018

#### Improvements

* Apps deployed to SAP Cloud Platform can be edited in the Web Modeler or Desktop Modeler by choosing the appropriate option on the **Edit App** button in the Developer Portal. Older apps can have this functionality enabled using the **Enable Web Modeler** button on the **General** settings page.
* Logs for apps deployed to SAP Cloud Platform can be viewed with Kibana from the **Logs** page of the Developer Portal. See [Logs](/developerportal/operate/logs/) for more information.

### October 1, 2018

#### Improvements

* We now configure Destination Service in the scope of XSUAA. This means that we add the uaa.user default scope to the destination instances in each new environment. This is needed to fetch the destination configuration.

### August 7, 2018

#### Improvements

* We introduced a new environments lifecycle for our SAP apps and migrated all of the old environments.
* We improved our UX, especially on the **Environments** screens of SAP apps.

### July 3, 2018

#### Improvements

* To improve integration and security between Mendix and SAP we now redirect you to SAP to provide your SAP credentials. This means that you need to use the same username (email address) for Mendix and SAP the next time you need to provide your credentials. This is currently implemented only for SAP regions **eu10 (Europe - Frankfurt)** and **us10 (US East - VA)**.

### February 27, 2018

#### Fixes

* We fixed an issue that prevented SAP Cloud users from viewing the **Mobile App** section properly.
