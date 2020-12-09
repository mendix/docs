---
title: "SAP Cloud Platform"
parent: "deployment"
menu_order: 30
description: "Release notes for deployment to SAP Cloud Platform"
tags: ["release notes", "deployment", "cloud environment", "SAP", "SAP Cloud"]
---

These release notes cover changes to deployment to [SAP Cloud Platform](/developerportal/deploy/sap-cloud-platform). There are separate release notes for other deployment targets, see [Deployment](deployment) release notes page for further information.

For information on the current status of deployment to SAP Cloud Platform and any planned releases see [Mendix Status](https://status.mendix.com/).

## 2020

### December 9th, 2020

#### Improvements

* We have added support for PostgreSQL on SAP Cloud Platform, Hyperscaler Option for Mendix apps deployed to SAP Cloud Platform.
    * this comes with a configurator to help you create the correct configuration.
    * see [Running Mendix on PostgreSQL on SAP Cloud Platform](/developerportal/deploy/sap-cloud-platform#sap-hyperscaler) for more information.
* As part of a Developer Portal clean up, we removed the *Model* option from the *DEVELOP* section of the Developer Portal menu when you are looking at environments on SAP Cloud Platform. The functions of this page are still available via the **Edit in Studio** and **Edit in Studio Pro** buttons on the environments page. 

### October 21st, 2020

#### Improvements

* We split the **Edit App** button into two separate buttons, **Edit in Studio** and **Edit in Studio Pro** on some of the Developer Portal pages (Environments, App Services, Metrics, Alerts, Logs, Backups, and the Node Permissions tab of Security).
* We also updated the drop down for the **View App** button.

### April 24th, 2020

#### Improvements

* We have added an easy-to-use autoscaler configurator to allow you to easily create JSON configuration files for the **Application Autoscaler** on SAP Cloud Platform. See [Application Autoscaler for SAP Cloud Platform](/partners/sap/sap-autoscaler) for more information.
    * There is currently an issue with how the JSON is uploaded. We are working on a fix for this but, in the meantime, please check the workaround in the documentation to ensure that the JSON is uploaded.

### March 26th, 2020

#### Improvements

* We have added support for deploying to the Azure Netherlands region of SAP Cloud Platform.
    * **Object storage is only supported in the Azure Netherlands region for  Mendix version 8.7.0 and above**
* We have added a log of all deployment activities which are carried out on your SAP environments to the environments page of apps which are deployed to SAP Cloud Platform.
* We have added the ability to specify a custom URL (e.g. `appname.subdomain.domain.com`) where the user will be redirected after signing on using XSUAA, instead of being redirected to the generated URL (e.g. `appname.cfapps.eu10.hana.ondemand.com`) of the app.

### January 3rd, 2020

#### Improvements

* We added support for using the HANA trial database available in new SAP Cloud Platform trial accounts. See the [Running Mendix on SAP HANA](/developerportal/deploy/sap-cloud-platform#sap-hana) section of the *SAP Cloud Platform* deployment document for more details.

## 2019

### September 13th, 2019

#### Improvements

* We added support for AWS RDS PostgreSQL databases when deploying to SAP Cloud Platform

### July 4th, 2019

#### Fixes

* We fixed an issue where the XSUAA configuration wasn’t updated after deployment. **Please redeploy any apps which you deployed to SAP Cloud Platform between June 27th and 8:00 CST on July 4th.**

### May 13th, 2019

#### Fixes

* We fixed an issue for users deploying to SAP Cloud Portal where newly-bound services were bound correctly but did not appear in the Mendix Developer Portal. (Ticket 81418)

### March 29th, 2019

#### Improvements

* We have changed Mendix deployment to **SAP Cloud Platform** so that the Cloud Foundry stack cflinuxfs3 is used. Previously, Mendix apps were using cflinuxfs2, which has been deprecated by SAP. See [Cloud Foundry Environment – Deprecation of cflinuxfs2](https://help.sap.com/doc/43b304f99a8145809c78f292bfc0bc58/Cloud/en-US/98bf747111574187a7c76f8ced51cfeb.html?from=2018-11-08&sel3=Announcement&sel1=Cloud%20Foundry%20Environment&to=2018-11-08) SAP release note from 8 November 2018, and [Rapid Application Development by Mendix – Stack Switch](https://help.sap.com/doc/43b304f99a8145809c78f292bfc0bc58/Cloud/en-US/98bf747111574187a7c76f8ced51cfeb.html?from=2019-03-29&to=2019-03-29&sel3=Announcement) SAP release note from 29 March 2019 for more information. The next time that you deploy a new, or existing, Mendix app to *SAP Cloud Platform* from the Mendix Developer Portal, the new stack will be applied to your app.

### March 21st, 2019

#### Improvements

* We have added the ability to manage *SAP Cloud Platform* Cloud Foundry Marketplace services from within the Mendix Developer Portal.

#### Limitation

* If an app is deployed to SAP from the Desktop Modeler *before it has been started from the Developer Portal*, the deployment will fail because the marketplace services have not been bound. Please ensure that apps are first deployed from the Developer Portal before trying to deploy them from the Desktop Modeler.

## 2018

### October 22nd, 2018

#### Improvements

* Apps deployed to SAP Cloud Platform can be edited in the Web Modeler or Desktop Modeler by choosing the appropriate option on the **Edit App** button in the Developer Portal. Older apps can have this functionality enabled using the **Enable Web Modeler** button on the **General** settings page.
* Logs for apps deployed to SAP Cloud Platform can be viewed with Kibana from the **Logs** page of the Developer Portal. See [Logs](/developerportal/operate/logs) for more information.

### October 1st, 2018

#### Improvements

* We now configure Destination Service in the scope of XSUAA. This means that we add the uaa.user default scope to the destination instances in each new environment. This is needed to fetch the destination configuration.

### August 7th, 2018

#### Improvements

* We introduced a new environments lifecycle for our SAP apps and migrated all of the old environments.
* We improved our UX, especially on the **Environments** screens of SAP apps.

### July 3rd, 2018

#### Improvements

* To improve integration and security between Mendix and SAP we now redirect you to SAP to provide your SAP credentials. This means that you need to use the same username (email address) for Mendix and SAP the next time you need to provide your credentials. This is currently implemented only for SAP regions **eu10 (Europe - Frankfurt)** and **us10 (US East - VA)**.

### February 27th, 2018

#### Fixes

* We fixed an issue that prevented SAP Cloud users from viewing the **Mobile App** section properly.
