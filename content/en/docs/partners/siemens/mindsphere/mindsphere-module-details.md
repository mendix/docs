---
title: "Insights Hub Module Details"
url: /partners/siemens/mindsphere-module-details/
weight: 20
description: "A detailed description of the modules which are required for deployment to Insights Hub"
aliases:
    - /refguide/mindsphere/mindsphere-module-details.html
    - /refguide/siemens/mindsphere-module-details.html
    - /refguide/mindsphere/mindsphere-module-details
    - /refguide/siemens/mindsphere-module-details
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchors #mssso, #msosbar and #msthemepack below are mapped from the Siemens Insights Hub documentation site, so they should not be removed or changed.
---

## Introduction

{{% alert color="warning" %}}
This information is for apps which are fully integrated apps into Insights Hub. It does not apply to apps which are only calling Insights APIs.
{{% /alert %}}

This page contains detailed information about the content of Insights Hub modules for Mendix apps and what they are used for. If you want to deploy a Mendix app to Insights Hub, the instructions are in [Deployment on Siemens Insights Hub](/developerportal/deploy/deploying-to-mindsphere/).

This page can be used for troubleshooting issues with your deployment, or for assistance in additional customization you may wish to carry out.

## Single Sign-On (SiemensInsightsHubSingleSignOn){#mssso}

When running on Insights Hub, the Insights Hub user can use their Insights Hub credentials to sign in to your app. This is referred to as Single Sign-On (SSO). To do this, you need to use the microflows and resources in the **SiemensInsightsHubSingleSignOn** module. You will also need the SSO module to get a valid user context during a local test session.

The Siemens Insights Hub SSO module is included in the Siemens Insights Hub starter and example apps. It can also be downloaded separately here: [Insights Hub SSO](https://marketplace.mendix.com/link/component/108805/).

{{% alert color="warning" %}}
The SSO module also requires changes to the app theme. See the section on [Siemens Insights Hub Widgets](#msthemepack), below.

Please ensure that you also download the *latest version* of the Siemens Insights Hub Widget module when you download the SSO module.
{{% /alert %}}

### Constants

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image2.png" alt="Folder structure of the SiemensInsightsHubSingleSignOn module" >}}

#### LocalDevelopment

These constants are only needed for local development and testing. For details of what needs to be put into the constants in the *LocalDevelopment* folder, please see [Local Testing](/partners/siemens/mindsphere-development-considerations/#localtesting) in *Insights Hub Development Considerations*.

#### Native Mobile

The constants in *Native Mobile* are only needed when developing native mobile apps with Mendix for Insights Hub, please see [Insights Hub Mobile Native](/partners/siemens/mindsphere-mobile-native/) for details.

#### CockpitApplicationName

This is the name of your app as registered in the Insights Hub Mendix Portal. See [Running a Cloud Foundry-Hosted Application](https://developer.mindsphere.io/howto/howto-cf-running-app.html#configure-the-application-via-the-developer-cockpit) for more information.

#### GatewayURL

This is the base URL for all requests to Insights Hub APIs. For example, the URL for Insights Hub on AWS PROD is `https://gateway.eu1.mindsphere.io`.

#### PublicKeyURL

This is the URL where the public key can be found to enable token validation during the login process. For example, the URL for Insights Hub on AWS PROD is `https://core.piam.eu1.mindsphere.io/token_keys`.

### Microflows{#microflows}

The SiemensInsightsHubSingleSignOn module also provides microflows which are used to support SSO within Insights Hub and allow the user’s **tenant** and **email** to be obtained for use within the app (*DS_Account*)

The microflows *DS_AccessToken* and *DS_GetAccessTokenForScheduledEvents* can be used for getting the users access token / technical access token which are needed on REST calls to Insights Hub.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image3.png" alt="Folder structure showing microflows in the SiemensInsightsHubSingleSignOn module" >}}

#### RegisterSingleSignOn

This microflow must be added as the *After startup* microflow or added as a sub-microflow to an existing after startup microflow. You can do this on the *Runtime* tab of the **App** > **Settings** dialog, accessed through the *App Explorer* dock.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image4.png" alt="App settings dialog" >}}

#### DS_AccessToken

This microflow populates the *AccessToken* entity.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image5.png" alt="Domain model showing Insights Hub Token entity" >}}

If the access token can be retrieved, then this is used. If a valid token cannot be retrieved, *and the app is running locally*, then the user is asked to sign on by providing their credentials manually. This enables the app to be tested locally, without having to be deployed to the Insights Hub environment after every change. You should check whether the access token has been successfully retrieved using the query `${AccessTokenName} != empty`. For example, `$AccessToken != empty` in the scenario shown in the image below.

{{% alert color="warning" %}}
If the app cannot retrieve a valid token and is *not* running locally, then an error is returned.
{{% /alert %}}

The Access_token attribute needs to be passed as the *Authorization* header in REST calls to Insights Hub APIs.

{{% alert color="info" %}}
The AccessToken has a short time before it expires, and therefore needs to be refreshed before each call to any Insights Hub API. This is done using the *Access token* action which returns the latest token.

To improve security of your app, it is recommended that you delete *AccessToken* before showing a page or reaching the end of the microflow.
{{% /alert %}}

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image6.png" alt="Section of a microflow showing the Access token action and the Edit Custom HTTP Header dialog in the Call REST action" >}}

#### DS_Account

This microflow populates the *Name* attribute of the *Tenant* entity and the *Email* attribute of the *Account* entity from the Insights Hub account details of the user. These are extensions to the Mendix User Object which assist the creation of multi-tenant apps.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image7.png" alt="Domain model showing Account, Tenant, and TenantObject." >}}

In addition, Insights Hub SSO will identify whether the current user is a subtenant using **IsSubTenantUser** and, if so, will populate the name of the subtenant in **SubtenantId**. More information about subtenants can be found in the Insights Hub documentation [Subtenants](https://developer.mindsphere.io/apis/core-tenantmanagement/api-tenantmanagement-overview.html#subtenants).

{{% alert color="info" %}}
If the same user logs in using a different tenant, Mendix will treat this as a different user and a User ID will be used within Mendix instead of a user name.
{{% /alert %}}

For advice on how to make your apps multi-tenant, see [Multi-Tenancy](/partners/siemens/mindsphere-development-considerations/#multitenancy) in *Insights Hub Development Considerations*.

### Roles and Scopes{#rolesscopes}

Using SSO, the Mendix app needs to know which roles to allocate to the user. This enables the app to know whether the user should have, for example, administrator access.

Insights Hub apps have up to five application roles. Each Insights Hub user is given one or more of these roles. As well as defining access to Insights Hub core roles, these roles are also mapped to Insights Hub application scopes. For information on how to set up scopes in Insights Hub, see the [Setting Application Scopes in Developer Cockpit](/developerportal/deploy/deploying-to-mindsphere/#scopes) section in *Siemens Insights Hub – deploy*.

During the login process, Insights Hub application scopes are mapped to Mendix roles automatically. The comparison ignores upper- and lower-case differences. If the roles match, then that Mendix role is assigned to the user.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/roles-and-scopes.png" alt="Diagram showing relationship between different roles and scopes in Mendix and Insights Hub" >}}

The mapping in the app template is:

| **Insights Hub application scope** | **is mapped to Mendix User role** |
| -------------------------------- | --------------------------------- |
| {app_name}.admin                | Admin                             |
| {app_name}.user                 | User                              |

In Insights Hub, these roles will look like this:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image8.png" alt="Insights Hub Authorization Management screen" >}}

And in the Mendix app they will be mapped to these roles:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image9.png" alt="Mendix App Security dialog" >}}

## Insights Hub OS Bar {#msosbar}

All Insights Hub apps must integrate the Insights Hub OS Bar. This unifies the UI of all Insights Hub apps. It is used for showing the app name, routing back to the Launchpad, and signing out from Insights Hub easily. Apps without the Insights Hub OS Bar will not be validated for deployment to an Insights Hub production environment.

You can see how the Insights Hub OS Bar Integration works in [Insights Hub OS Bar](https://design.mindsphere.io/osbar/introduction.html), on the Insights Hub developer website.

The SiemensInsightsHubOSBarConfig module provides a constant **OSBarURL** for specifying the OS Bar URL. See [getting the Insights Hub OS Bar](https://design.mindsphere.io/osbar/introduction.html#tab1anchor0) for a list of available URL locations.

The SiemensInsightsHubOSBarConfig module creates an endpoint which is used by the Insights Hub OS Bar to provide tenant context and information about the application. The SiemensInsightsHubOSBarConfig module is included in the Insights Hub app template, or can be downloaded from the Mendix Marketplace here: [Insights Hub OS Bar Connector](https://marketplace.mendix.com/link/component/108804/).

{{% alert color="info" %}}
The Insights Hub OS Bar Connector also needs the Siemens Insights Hub Web Content module, or manual configuration of the index.html file, in order to work. See [Customizing an Existing App](/developerportal/deploy/deploying-to-mindsphere/#existingapp) in *Siemens Insights Hub – deploy* and [index.html Changes](#indexhtmlchanges), below, for more information.
{{% /alert %}}

### Configuring the OS Bar

Within the OS Bar you can see information about the app you are running.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image10.png" alt="Example of the information in the OS Bar" >}}

This is configured as a JSON object held in the string constant **Config** in the *SiemensInsightsHubOSBarConfig* module.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image11.png" alt="Dialog for setting the Config constant for the OS Bar" >}}

The JSON should contain the following information:

* displayName – the display name of your app
* appVersion – the version number of your app
* appCopyright – app owner’s name and year of publication
* links – links to additional information about the app

More information on the structure and content of this JSON object, together with sample JSON, can be found in [App Information](https://design.mindsphere.io/osbar/get-started.html#app-information), on the Insights Hub developer site.

## Siemens Insights Hub Web Content{#msthemepack}

The **SiemensInsightsHubWebContent** module is an *Atlas UI Resource* based on the [User Experience Toolkit for Insights Hub and Industrial IoT](https://design.mindsphere.io/) which includes the following:

* Basic color codes and styling
* Insights Hub Icons
* An updated *index.html* file
* A new *sso-login.html* file
* New Error pages:
    * permission-denied (*error_page/403.html*)
    * maximum number of sessions exceeded (*error_page/LicenseException.html*)
    * public key url (*error_page/PublicKeyUrl.html*)
    * role mapping (*error_page/RoleMapping.html*)

### Insights Hub Icons

See also the [Insights Hub Icons](/partners/siemens/mindsphere-development-considerations/#atlasui) section of *Insights Hub Development Considerations* for a discussion about adding icons from Siemens Insights Hub Web Content.

### index.html Changes{#indexhtmlchanges}

The [Siemens Insights Hub Starter Application](https://marketplace.mendix.com/link/component/109130), example apps, and Siemens Insights Hub Web Content have an updated `index.html` file to allow integration with Insights Hub.

If you are developing your app from a different app template just add the Siemens Insights Hub Web Content module to your app to get the updated index.html. See the [index.html](#indexhtml) section, below, for details about the changes to the file.

The changes are required to support:

* OS Bar – the Insights Hub bar needs to be supported by your app
* XSRF – Insights Hub needs to receive an XSRF token to work with your app
* SSO login – the login process needs to be adjusted to support Single Sign-on

The modified `index.html` file can be found in the /themesource/siemensinsightshubwebcontent/public folder of your app.

### sso-login.html

The Siemens Insights Hub Starter Application, example apps, and Siemens Insights Hub Web Content have a `sso-login.html` file which replaces the standard Mendix `login.html` file to allow SSO integration with Insights Hub. This can be found in the /themesource/siemensinsightshubwebcontent/public folder of your app.

### Error pages

These error pages are included in the Siemens Insights Hub Starter Application, example apps, and Siemens Insights Hub Web Content. This section explains why they are there.

#### Permission Denied Page

This is the general *permission denied* page, and will be shown if your app is called with an invalid token. The SSO module expects to find this Insights Hub compliant file as error_page/403.html within your ‘Theme’ folder.

#### License exceeded

This page is shown when the maximum number of sessions is exceeded.

#### Public Key URL

This page is shown if the **PublicKeyURL** does not match the issuer of the given bearer token.

#### Role mapping

This page is shown if the provided Insights Hub application scopes do not match any of the roles in the Mendix application.

## Appendices

### index.html{#indexhtml}

Various changes have been made to the standard Mendix index.html file to ensure compatibility with Insights Hub. These are supplied by default in the Siemens Insights Hub Starter Application, example apps, and Siemens Insights Hub Web Content.

You will only have to make the changes below if you are configuring your existing Mendix app manually, without importing Siemens Insights Hub Web Content.

Run your app locally, copy the *index.html* from the /deployment folder to /theme/web/public folder of your app and apply the changes described below.

#### XSRF / Gatway session expired

In index.html, in the header before the line `{{themecss}}`, the following script needs to be included in the file.

This change does two things:

* adds the `x-xsrf-token` header to each request. This is needed by the Insights Hub Gateway.
* handles the gateway session expired case. If the session has expired, it shows a popup and asks the user to reload the app. The message / title shown in the popup can be modified and localized via the "i18n" enumeration of the module "SiemensInsightsHubWebContent".

    {{% alert color="info" %}}Please add the "Siemens Insights Hub Web Content" module role "User" to all your apps user roles to ensure that the localized session expired message / title can be loaded during app startup.
    {{% /alert %}}

```javascript
<script>
	// Insights Hub specific part-1: We have to use the XSRF-TOKEN on fetch requests.
	// This script should placed before "mxui.js" as this script makes the fetch requests
	(function () {
        const sessionExpiredReloadAppPopup = function () {
            // get localized texts for popup from sessionstorage. In case of error use fallbackText.
            const getTextFromSessionStorage = () => {
                const fallbackText = {
                    title: "Session expired",
                    message: "The session is expired. Please reload the app.",
                    button: "Reload app",
                }
                try {
                    const text = JSON.parse(sessionStorage.getItem('sessionExpired'));
                    if (text.hasOwnProperty("title") && text.hasOwnProperty("message") && text.hasOwnProperty("button")) {
                        return text;
                    }
                    return fallbackText;
                } catch (error) {
                    return fallbackText;
                }
            }
            const text = getTextFromSessionStorage();
            // div structure is copied from the "SessionExpired" page in the module SiemensInsightsHubWebContent
            // As we can not load the page dynamically due to expiration of the gateway session.
            // When user click the button location.reload() is triggered - which initiates an new session with gateway
            const sessionExpiredPopup = `
            <div role="dialog" class="modal-dialog mx-window  mx-window-active utx-session-expired"
                style="opacity: 1; z-index: 1002; top: calc(50% - 141px); left: calc(50% - 300px);" data-focus-capturing="modal">
                <div class="modal-content mx-window-content">
                    <div class="modal-header mx-window-header" style="user-select: none; cursor: auto;">
                        <h4>${text.title}</h4>
                    </div>
                    <div data-focusindex="0" class="modal-body mx-window-body">
                        <div class="mx-scrollcontainer mx-scrollcontainer-horizontal mx-scrollcontainer-fixed"
                            style="">
                            <div class="mx-placeholder">
                                <div class="" id="mxui_widget_Wrapper_21" style="display: contents !important;">
                                    <div class="mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid">
                                        <h1 class="mx-title mx-name-pageTitle1">
                                            ${text.title}
                                        </h1>
                                        <div>
                                            ${text.message}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer mx-dialog-footer">
                        <button type="button" class="btn mx-button mx-name-actionButton1 pull-right btn-primary"
                            title="" data-button-id="2.SiemensInsightsHubWebContent.SessionExpired.actionButton1"
                            data-disabled="false" onClick="location.reload()">${text.button}</button>
                    </div>
                </div>
            </div>
            <div class="mx-underlay" id="mxui_widget_Underlay_0" widgetid="mxui_widget_Underlay_0" style="z-index: 101;"></div>`
            const body = document.getElementsByTagName('body')[0];
            body.insertAdjacentHTML('afterbegin', sessionExpiredPopup);
        };

        // Read cookie below
        function getCookie(name) {
            match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            if (match) return match[2];
            else return '';
        }
        var xrsfToken = getCookie('XSRF-TOKEN');
        if (window.fetch) {
            var originalFetch = window.fetch;
            window.fetch = function (url, init) {
                if (!init) {
                    init = {};
                }
                if (!init.headers) {
                    init.headers = new Headers();
                }
                var tokenAvailable =
                    typeof init.headers.get === 'function'
                        ? init.headers.get('x-xsrf-token')
                        : init.headers.hasOwnProperty('x-xsrf-token');
                if (!tokenAvailable) {
                    if (typeof init.headers.set === 'function') {
                        init.headers.set('x-xsrf-token', xrsfToken);
                    } else {
                        init.headers['x-xsrf-token'] = xrsfToken;
                    }
                }
                return new Promise((resolve, reject) => {
                    // Change default redirect mode from "error" to "manual"
                    // And handle "opaqueredirect" response type.
                    init.redirect = "manual";
                    originalFetch(url, init)
                        .then(response => {
                            if (response.type === "opaqueredirect") {
                                sessionExpiredReloadAppPopup();
                            } else {
                                return resolve(response);
                            }
                        })
                        .catch(e => {
                            reject(e);
                        });
                })
            };
        }
        if (!window.fetch || (window.fetch && /Edge/.test(navigator.userAgent))) {
            var originalXMLHttpRequest = window.XMLHttpRequest;
            window.XMLHttpRequest = function () {
                var result = new originalXMLHttpRequest(arguments);
                // overwrite setRequestHeader function to make sure to set the x-xsrf-token only once
                result.setRequestHeader = function (header, value) {
                    if (header) {
                        if (header.toLowerCase().indexOf('x-xsrf-token') !== -1) {
                            if (this.xsfrTokenSet === true) {
                                // token is already in place -> so do nothing
                                return;
                            }
                            this.xsfrTokenSet = true;
                        }
                    }
                    originalXMLHttpRequest.prototype.setRequestHeader.apply(this, arguments);
                };
                // overwrite open function to make sure to set the x-xsrf-token at least once
                result.open = function () {
                    originalXMLHttpRequest.prototype.open.apply(this, arguments);
                    this.setRequestHeader('x-xsrf-token', xrsfToken);
                };
                return result;
            };
        }
    })();
    // Insights Hub specific part-1: ends
</script>
```

#### SSO

To allow SSO, the usual login.html needs to be replaced with a different file (sso-login.html).

Delete the following lines:

```javascript
if (\!document.cookie || \!document.cookie.match(/(^|;)originURI=/gi))
document.cookie = "originURI=/login.html";
```

and directly after the script of the X-XRSR put the following script

```javascript
<script>
	// Insights Hub specific part-2: Use the sso-login.html to prevent the Gateway taking over login.html and perform SSO
        // Always set originURI Cookie.
        document.cookie = 'originURI=/sso-login.html';
        // Insights Hub specific part-2: ends
</script>
```

{{% alert color="info" %}}
If you do not use the **Siemens Insights Hub Web Content** module you have to create the sso-login.html yourself in the folder /theme/web/public. See the [sso-login.html](#mindspherelogin) section, below.
{{% /alert %}}

#### OS Bar

For the OS Bar to work correctly in your Mendix app, the following script has to be added after the just added SSO script. Please note the comments in the code regarding the order in which things need to be done if you are inserting this manually.

{{% alert color="info" %}}
*dojoConfig* and the call to load *mxui.js* must also be removed from their original positions in the file.
{{% /alert %}}

```javascript
   <script>
		// Insights Hub specific part-3: OS Bar related code
        var loadMendix = function () {
            // dojoConfig needs to be defined before loading mxui.js
            dojoConfig = {
                isDebug: false,
                baseUrl: 'mxclientsystem/dojo/',
                cacheBust: '{{cachebust}}',
                rtlRedirect: 'index-rtl.html',
            };
            // make sure that the mxui.js is loaded after /rest/os-bar/v1/loader to prevent problems with the height calculation of some elements
            (function (d2, script2) {
                script2 = d2.createElement('script');
                script2.src = 'mxclientsystem/mxui/mxui.js?{{cachebust}}';
                script2.onload = function () {
                    // Load localized texts for session expired popup and store them in the session context.
                    // In case the session is expired we can not load the texts anymore.
                    mx.addOnLoad(() => {
                        mx.data.create({
                            entity: "SiemensInsightsHubWebContent.SessionExpired",
                            callback: function (obj) {
                                const title = obj.getRawValue('Title');
                                const message = obj.getRawValue('Message');
                                const button = obj.getRawValue('Button');
                                sessionStorage.setItem('sessionExpired', JSON.stringify({ title, message, button }));
                            },
                            error: function (e) {
                                console.error(e);
                            }
                        });
                    });
                }
                script2.async = true;
                d2.getElementsByTagName('body')[0].appendChild(script2);
            })(document);
        };
        var onError = function (d1) {
            var body = d1.getElementsByTagName('body')[0];
            var content = d1.getElementById('content');
            var html =
                '<osbar-root id="OSBarErrorText" class="mdsp_osbf_outer">' +
                '<div class="mdsp_osbf_inner">Insights Hub OSBar could not be loaded. Please check your ' +
                '<a title="Proxy Settings" class="mdsp_osbf_link" target="_blank" rel="noopener" href="https://docs.mendix.com/partners/siemens/mindsphere-development-considerations#localtesting"> proxy settings</a>' +
                '<span> or the OSBarURL in the InsightsHubOSBarConnector</span>' +
                '</div>' +
                '</osbar-root>';

            body.insertAdjacentHTML('afterbegin', html);
            body.className = body.className + " mdsp_osbf_body";
            content.className = content.className + "_mdsp_osbf_content";
            loadMendix();
        };

        var initOsBar = function (url, d1, script1) {
            script1 = d1.createElement('script');
            script1.type = 'text/javascript';
            script1.async = true;
            script1.onload = function () {
                _mdsp.init({
                    appId: 'content',
                    appInfoPath: '/rest/os-bar/v1/config',
                    initialize: true,
                });
                loadMendix();
            };
            script1.onerror = () => onError(d1);
            script1.src = url;
            d1.getElementsByTagName('head')[0].appendChild(script1);
        };

        (async function () {
            try {
                const resp = await window.fetch('/rest/os-bar/v1/osbar.url');
                const body = await resp.json();
                if (body.osBarUrl) {
                    initOsBar(body.osBarUrl, document);
                }
            } catch (error) {
                onError(document);
            }

        })();
        // Insights Hub specific part-3: ends
	</script>
```

### sso-login.html{#mindspherelogin}

A new login file `sso-login.html` is needed to support Insights Hub SSO. This is supplied by default in the MindSphere app template, example app, and Siemens Insights Hub Web Content.

You will only have to create a `sso-login.html` file in the folder /theme/web/public with the following content if you are configuring your existing Mendix app manually, without importing Siemens MindSphere Web Content.

```html
<!doctype html>
<html>

<head>
	<title>Insights Hub</title>
	<script>
		window.location.assign("/sso" + window.location.search)
	</script>
</head>

</html>
```

## Read More

* [Siemens Insights Hub – deploy](/developerportal/deploy/deploying-to-mindsphere/)
* [Insights Hub Development Considerations](/partners/siemens/mindsphere-development-considerations/)
