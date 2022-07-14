---
title: "MindSphere Module Details"
url: /partners/siemens/mindsphere-module-details/
weight: 20
description: "A detailed description of the modules which are required for deployment to MindSphere"
tags: ["MindSphere"]
aliases:
    - /refguide/mindsphere/mindsphere-module-details.html
    - /refguide/siemens/mindsphere-module-details.html
    - /refguide/mindsphere/mindsphere-module-details
    - /refguide/siemens/mindsphere-module-details
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchors #mssso, #msosbar and #msthemepack below are mapped from the Siemens MindSphere documentation site, so they should not be removed or changed.
---

## 1 Introduction

{{% alert color="warning" %}}
This information is for apps which are deployed to MindSphere. It does not apply to MindSphere IIoT for Makers.
{{% /alert %}}

This page contains detailed information about the content of MindSphere modules for Mendix apps and what they are used for. If you want to deploy a Mendix app to MindSphere, the instructions are in [Deployment on Siemens MindSphere](/developerportal/deploy/deploying-to-mindsphere/).

This page can be used for troubleshooting issues with your deployment, or for assistance in additional customization you may wish to carry out.

## 2 Single Sign-On (MindSphereSingleSignOn){#mssso}

When running on MindSphere, the MindSphere user can use their MindSphere credentials to sign in to your app. This is referred to as Single Sign-On (SSO). To do this, you need to use the microflows and resources in the **MindSphereSingleSignOn** module. You will also need the SSO module to get a valid user context during a local test session.

The MindSphere SSO module is included in the MindSphere starter and example apps. It can also be downloaded separately here: [MindSphere SSO](https://marketplace.mendix.com/link/component/108805/).

{{% alert color="warning" %}}
The SSO module also requires changes to the app theme. See the section on [Siemens MindSphere Web Content](#msthemepack), below.

Please ensure that you also download the *latest version* of the Siemens MindSphere Web Content module when you download the SSO module.
{{% /alert %}}

### 2.1 Constants

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-module-details/image2.png" alt="Folder structure of the MindSphereSingleSignOn module" >}}

#### 2.1.1 LocalDevelopment

These constants are only needed for local development and testing. For details of what needs to be put into the constants in the *LocalDevelopment* folder, please see [Local Testing](/partners/siemens/mindsphere-development-considerations/#localtesting) in *MindSphere Development Considerations*.

#### 2.1.2 Native Mobile

The constants in *Native Mobile* are only needed when developing native mobile apps with Mendix for MindSphere, please see [MindSphere Mobile Native](/partners/siemens/mindsphere-mobile-native/) for details.

#### 2.1.3 CockpitApplicationName

This is the name of your app as registered in the MindSphere developer portal. See [Running a Cloud Foundry-Hosted Application](https://developer.mindsphere.io/howto/howto-cf-running-app.html#configure-the-application-via-the-developer-cockpit) for more information.

#### 2.1.4 MindSphereGatewayURL

This is the base URL for all requests to MindSphere APIs. For example, the URL for MindSphere on AWS PROD is `https://gateway.eu1.mindsphere.io`.

#### 2.1.5 PublicKeyURL

This is the URL where the public key can be found to enable token validation during the login process. For example, the URL for MindSphere on AWS PROD is `https://core.piam.eu1.mindsphere.io/token_keys`.

### 2.2 Microflows{#microflows}

The MindSphereSingleSignOn module also provides microflows which are used to support SSO within MindSphere and allow the user’s **tenant** and **email** to be obtained for use within the app (*DS_MindSphereAccount*)

The microflows *DS_MindSphereAccessToken* and *DS_GetAccessTokenForScheduledEvents* can be used for getting the users access token / technical access token which are needed on REST calls to MindSphere.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-module-details/image3.png" alt="Folder structure showing microflows in the MindSphereSingleSignOn module" >}}

#### 2.2.1 RegisterSingleSignOn

This microflow must be added as the *After startup* microflow or added as a sub-microflow to an existing after startup microflow. You can do this on the *Runtime* tab of the *Project > Settings* dialog, accessed through the *App Explorer* dock.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-module-details/image4.png" alt="App settings dialog" >}}

#### 2.2.2 DS_MindSphereAccessToken

This microflow populates the *MindSphereToken* entity.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-module-details/image5.png" alt="Domain model showing MindSphereToken entity" >}}

If the access token can be retrieved, then this is used. If a valid token cannot be retrieved, *and the app is running locally*, then the user is asked to sign on by providing their credentials manually. This enables the app to be tested locally, without having to be deployed to the MindSphere environment after every change. You should check whether the access token has been successfully retrieved using the query `${MindSphereTokenName} != empty`. For example, `$MindSphereToken != empty` in the scenario shown in the image below.

{{% alert color="warning" %}}
If the app cannot retrieve a valid token and is *not* running locally, then an error is returned.
{{% /alert %}}

The Access_token attribute needs to be passed as the *Authorization* header in REST calls to MindSphere APIs.

{{% alert color="info" %}}
The MindSphereToken has a short time before it expires, and therefore needs to be refreshed before each call to any MindSphere API. This is done using the *Access token* action which returns the latest MindSphereToken.

To improve security of your app, it is recommended that you delete *MindSphereToken* before showing a page or reaching the end of the microflow.
{{% /alert %}}

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-module-details/image6.png" alt="Section of a microflow showing the Access token action and the Edit Custom HTTP Header dialog in the Call REST action" >}}

#### 2.2.3 DS_MindSphereAccount

This microflow populates the *Name* attribute of the *Tenant* entity and the *Email* attribute of the *MindSphereAccount* entity from the MindSphere account details of the user. These are extensions to the Mendix User Object which assist the creation of multi-tenant apps.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-module-details/image7.png" alt="Domain model showing MindSphereAccount, Tenant, and TenantObject." >}}

In addition, MindSphere SSO will identify whether the current user is a subtenant using **IsSubTenantUser** and, if so, will populate the name of the subtenant in **SubtenantId**. More information about subtenants can be found in the MindSphere documentation [Subtenants](https://developer.mindsphere.io/apis/core-tenantmanagement/api-tenantmanagement-overview.html#subtenants).

{{% alert color="info" %}}
If the same user logs in using a different tenant, Mendix will treat this as a different user and a User ID will be used within Mendix instead of a user name.
{{% /alert %}}

For advice on how to make your apps multi-tenant, see [Multi-Tenancy](/partners/siemens/mindsphere-development-considerations/#multitenancy) in *MindSphere Development Considerations*.

### 2.3 Roles & Scopes{#rolesscopes}

Using SSO, the Mendix app needs to know which roles to allocate to the user. This enables the app to know whether the user should have, for example, administrator access.

MindSphere apps have up to five application roles. Each MindSphere user is given one or more of these roles. As well as defining access to MindSphere core roles, these roles are also mapped to MindSphere application scopes. For information on how to set up scopes in MindSphere, see the [Setting Application Scopes in Developer Cockpit](/developerportal/deploy/deploying-to-mindsphere/#scopes) section in *Siemens MindSphere – deploy*.

During the login process, MindSphere application scopes are mapped to Mendix roles automatically. The comparison ignores upper- and lower-case differences. If the roles match, then that Mendix role is assigned to the user.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-module-details/roles-and-scopes.png" alt="Diagram showing relationship between different roles and scopes in Mendix and MindSphere" >}}

The mapping in the app template is:

| **MindSphere application scope** | **is mapped to Mendix User role** |
| -------------------------------- | --------------------------------- |
| {app_name}.admin                | Admin                             |
| {app_name}.user                 | User                              |

In MindSphere, these roles will look like this:

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-module-details/image8.png" alt="MindSphere Authorization Management screen" >}}

And in the Mendix example app they will be mapped to these roles:

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-module-details/image9.png" alt="Mendix App Security dialog" >}}

## 3 MindSphere OS Bar {#msosbar}

All MindSphere apps must integrate the MindSphere OS Bar. This unifies the UI of all MindSphere apps. It is used for showing the app name, routing back to the Launchpad, and signing out from MindSphere easily. Apps without the MindSphere OS Bar will not be validated for deployment to a MindSphere production environment.

You can see how the MindSphere OS Bar Integration works in [MindSphere OS Bar](https://design.mindsphere.io/osbar/introduction.html), on the MindSphere developer website.

The MindSphereOSBarConfig module provides a constant **OSBarURL** for specifying the OS Bar URL. See [getting the MindSphere OS Bar](https://design.mindsphere.io/osbar/introduction.html#tab1anchor0) for a list of available URL locations.

The MindSphereOSBarConfig module creates an endpoint which is used by the MindSphere OS Bar to provide tenant context and information about the application. The MindSphereOSBarConfig module is included in the MindSphere app template, or can be downloaded from the Mendix Marketplace here: [MindSphere OS Bar Connector](https://marketplace.mendix.com/link/component/108804/).

{{% alert color="info" %}}
The MindSphere OS Bar Connector also needs the Siemens MindSphere Web Content module, or manual configuration of the index.html file, in order to work. See [Customizing an Existing App](/developerportal/deploy/deploying-to-mindsphere/#existingapp) in *Siemens MindSphere – deploy* and [index.html Changes](#indexhtmlchanges), below, for more information.
{{% /alert %}}

### 3.1 Configuring the OS Bar

Within the OS Bar you can see information about the app you are running.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-module-details/image10.png" alt="Example of the information in the OS Bar" >}}

This is configured as a JSON object held in the string constant **Config** in the *MindSphereOSBarConfig* module.

{{< figure src="/attachments/partners/siemens/mindsphere/mendix-on-mindsphere/mindsphere-module-details/image11.png" alt="Dialog for setting the Config constant for the OS Bar" >}}

The JSON should contain the following information:

* displayName – the display name of your app
* appVersion – the version number of your app
* appCopyright – app owner’s name and year of publication
* links – links to additional information about the app

More information on the structure and content of this JSON object, together with sample JSON, can be found in [App Information](https://design.mindsphere.io/osbar/get-started.html#app-information), on the MindSphere developer site.

## 4 Siemens MindSphere Web Content{#msthemepack}

The **Siemens_MindSphere_Web_Content** module is an *Atlas UI Resource* based on the [MindSphere Design System](https://design.mindsphere.io/) which includes the following:

* Basic color codes and styling
* MindSphere Icons
* An updated *index.html* file
* A new *mindspherelogin.html* file
* New Error pages:
  * permission-denied (*error_page/403.html*)
  * maximum number of sessions exceeded (*error_page/LicenseException.html*)
  * public key url (*error_page/PublicKeyUrl.html*)
  * role mapping (*error_page/RoleMapping.html*)

### 4.1 MindSphere Icons

See also the [MindSphere Icons](/partners/siemens/mindsphere-development-considerations/#atlasui) section of *MindSphere Development Considerations* for a discussion about adding icons from Siemens MindSphere Web Content.

### 4.2 index.html Changes{#indexhtmlchanges}

The [Siemens MindSphere Starter Application](https://marketplace.mendix.com/link/component/109130), example apps, and Siemens MindSphere Web Content have an updated `index.html` file to allow integration with MindSphere.

If you are developing your app from a different app template just add the Siemens MindSphere Web Content module to your app to get the updated index.html. See the [index.html](#indexhtml) section, below, for details about the changes to the file.

The changes are required to support:

* OS Bar – the MindSphere bar needs to be supported by your app
* XSRF – MindSphere needs to receive an XSRF token to work with your app
* SSO login – the login process needs to be adjusted to support Single Sign-on

The modified `index.html` file can be found in the /themesource/siemens_mindsphere_web_content/public folder of your project app.

### 4.3 mindspherelogin.html

The Siemens MindSphere Starter Application, example apps, and Siemens MindSphere Web Content have a `mindspherelogin.html` file which replaces the standard Mendix `login.html` file to allow SSO integration with MindSphere. This can be found in the /themesource/siemens_mindsphere_web_content/public folder of your project app.

### 4.4 Error pages

These error pages are included in the Siemens MindSphere Starter Application, example apps, and Siemens MindSphere Web Content. This section explains why they are there.

#### Permission Denied Page

This is the general *permission denied* page, and will be shown if your app is called with an invalid token. The SSO module expects to find this MindSphere-compliant file as error_page/403.html within your ‘Theme’ folder.

#### Licence exceeded

This page is shown when the maximum number of sessions is exceeded.

#### Public Key URL

This page is shown if the **PublicKeyURL** does not match the issuer of the given bearer token.

#### Role mapping

This page is shown if the provided MindSphere application scopes do not match any of the roles in the Mendix application.

## 5 Appendices

### 5.1 index.html{#indexhtml}

Various changes have been made to the standard Mendix index.html file to ensure compatibility with MindSphere. These are supplied by default in the Siemens MindSphere Starter Application, example apps, and Siemens MindSphere Web Content.

You will only have to make the changes below if you are configuring your existing Mendix app manually, without importing Siemens MindSphere Web Content.

Run your app locally, copy the *index.html* from the /deployment folder to /theme/web folder of your app and apply the changes described below.

#### 5.1.1 XSRF

In index.html, in the header before the line `{{themecss}}`, the following script needs to be included in the file.

```javascript
<script>
	// MindSphere specific part-1: We have to use the XSRF-TOKEN on fetch requests.
	// This script should placed before "mxui.js" as this script makes the fetch requests
	(function() {
		// Read cookie below
		function getCookie(name) {
			match = document.cookie.match(new RegExp('(^| )' + name	+ '=([^;]+)'));
			if (match)
				return match[2];
			else
				return "";
		}

		var xrsfToken = getCookie("XSRF-TOKEN");
		if (window.fetch) {
				var originalFetch = window.fetch;
				window.fetch = function(url, init) {
					if (!init) {
						init = {};
					}
					if (!init.headers) {
						init.headers = new Headers();
					}
					var tokenAvailable = typeof init.headers.get === "function" ? init.headers.get("x-xsrf-token") : init.headers.hasOwnProperty("x-xsrf-token");

					if (!tokenAvailable) {
						if (typeof init.headers.set === "function") {
							init.headers.set("x-xsrf-token", xrsfToken);
						} else {
							init.headers["x-xsrf-token"] = xrsfToken;
						}
					}
					return originalFetch(url, init);
				}
			}
			if (!window.fetch || (window.fetch && /Edge/.test(navigator.userAgent))) {
				var originalXMLHttpRequest = window.XMLHttpRequest;
				window.XMLHttpRequest = function() {
					var result = new originalXMLHttpRequest(arguments);

					// overwrite setRequestHeader function to make sure to set the x-xsrf-token only once
					result.setRequestHeader = function(header, value) {
						if (header){
							if (header.toLowerCase().indexOf("x-xsrf-token") !== -1) {
								if (this.xsfrTokenSet === true) {
									// token is already in place -> so do nothing
									return;
								}
								this.xsfrTokenSet = true;
							}
						}
						originalXMLHttpRequest.prototype.setRequestHeader
							.apply(this, arguments);
					};

					// overwrite open function to make sure to set the x-xsrf-token at least once
					result.open = function() {
						originalXMLHttpRequest.prototype.open
							.apply(this, arguments);

						this.setRequestHeader("x-xsrf-token", xrsfToken);
					};
					return result;
				};
			};
		})();
	// MindSphere specific part-1: ends
</script>
```

#### 5.1.2 SSO

To allow SSO, the usual login.html needs to be replaced with a different file (mindspherelogin.html).

Delete the following lines:
```javascript
if (\!document.cookie || \!document.cookie.match(/(^|;)originURI=/gi))
document.cookie = "originURI=/login.html";
```
and directly after the script of the X-XRSR put the following script
```javascript
<script>
	// MindSphere specific part-2: Use the MindSphereLogin.html to prevent the Gateway taking over login.html and perform SSO
	// Always set originURI Cookie.
	document.cookie = "originURI=/mindspherelogin.html";
	// MindSphere specific part-2: ends
</script>
```

{{% alert color="info" %}}
If you do not use the **Siemens MindSphere Web Content** module you have to create the mindspherelogin.html yourself in the folder /theme/web. See the [mindspherelogin.html](#mindspherelogin) section, below.
{{% /alert %}}

#### 5.1.3 OS Bar

For the OS Bar to work correctly in your Mendix app, the following script has to be added after the just added SSO script. Please note the comments in the code regarding the order in which things need to be done if you are inserting this manually.

{{% alert color="info" %}}
*dojoConfig* and the call to load *mxui.js* must also be removed from their original positions in the file.
{{% /alert %}}

```javascript
   <script>
		// MindSphere specific part-3: OS Bar related code
		var loadMendix = function() {
			// dojoConfig needs to be defined before loading mxui.js
			dojoConfig = {
				isDebug: false,
				baseUrl: 'mxclientsystem/dojo/',
				cacheBust: '{{cachebust}}',
				rtlRedirect: 'index-rtl.html',
			};
			// make sure that the mxui.js is loaded after /rest/os-bar/v1/loader to prevent problems with the height calculation of some elements
			(function(d2, script2) {
				script2 = d2.createElement('script');
				script2.src = 'mxclientsystem/mxui/mxui.js?{{cachebust}}';
				script2.async = true;
				d2.getElementsByTagName('body')[0].appendChild(script2);
			})(document);
		};

		(function(d1, script1) {
			script1 = d1.createElement('script');
			script1.type = 'text/javascript';
			script1.async = true;
			script1.onload = function() {
				_mdsp.init({
					appId: 'content',
					appInfoPath: '/rest/os-bar/v1/config',
					initialize: true,
				});
				loadMendix();
			};
			script1.onerror = function() {
				var body = d1.getElementsByTagName('body')[0];
				var html =
					'<osbar-root id="OSBarErrorText" class="mdsp_osbf_outer">' +
						'<div class="mdsp_osbf_inner">MindSphere OSBar could not be loaded. Please check your ' +
							'<a title="Proxy Settings" class="mdsp_osbf_link" target="_blank" rel="noopener" href="https://docs.mendix.com/partners/siemens/mindsphere-development-considerations#localtesting"> proxy settings</a>' +
							'<span> or the OSBarURL in the MindSphereOSBarConnector</span>' +
						'</div>' +
					'</osbar-root>';

				body.insertAdjacentHTML('afterbegin', html);
				body.className = body.className + " mdsp_osbf_body"
				loadMendix();
			};
			script1.src = '/rest/os-bar/v1/osbar.loader.js';
			d1.getElementsByTagName('head')[0].appendChild(script1);
		})(document);
		// MindSphere specific part-3: ends
	</script>
```

### 5.2 mindspherelogin.html{#mindspherelogin}

A new login file `mindspherelogin.html` is needed to support MindSphere SSO. This is supplied by default in the MindSphere app template, example app, and Siemens MindSphere Web Content.

You will only have to create a `mindspherelogin.html` file in the folder /theme/web with the following content if you are configuring your existing Mendix app manually, without importing Siemens MindSphere Web Content.

```html
<!doctype html>
<html>
<head>
<title>MindSphere Login SSO redirection</title>
<script>
	window.location.assign("/sso" + window.location.search)
</script>
</head>
</html>
```

## 6 Read More

* [Siemens MindSphere – deploy](/developerportal/deploy/deploying-to-mindsphere/)
* [MindSphere Development Considerations](/partners/siemens/mindsphere-development-considerations/)
