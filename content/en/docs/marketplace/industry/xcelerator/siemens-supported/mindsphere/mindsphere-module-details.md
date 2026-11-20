---
title: "Insights Hub Module Details"
url: /appstore/industry/mindsphere/mindsphere-module-details/
weight: 20
description: "Describes the modules required for deploying a Mendix app to Insights Hub."
aliases:
    - /refguide/mindsphere/mindsphere-module-details.html
    - /refguide/siemens/mindsphere-module-details.html
    - /refguide/mindsphere/mindsphere-module-details
    - /refguide/siemens/mindsphere-module-details
    - /partners/siemens/mindsphere-module-details/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchors #mssso and #msosbar below are mapped from the Siemens Insights Hub documentation site, so they should not be removed or changed.
---

## Introduction

{{% alert color="warning" %}}
This information is for apps that are fully integrated into Insights Hub. It does not apply to apps that only call Insights Hub APIs.
{{% /alert %}}

This page describes the content of the Insights Hub modules for Mendix apps and what they are used for. To deploy a Mendix app to Insights Hub, see [Deployment on Siemens Insights Hub](/developerportal/deploy/deploying-to-mindsphere/).

Use this page to troubleshoot deployment issues or to customize your app further.

## Single Sign-On (SiemensInsightsHubSingleSignOn){#mssso}

When running on Insights Hub, users can sign in to your app with their Insights Hub credentials. This is called single sign-on (SSO). To use it, add the microflows and resources in the **SiemensInsightsHubSingleSignOn** module to your app. You also need the SSO module to get a valid user context during a local test session.

The Siemens Insights Hub SSO module is included in the Siemens Insights Hub starter and example apps. You can also download it separately from the Marketplace: [Insights Hub SSO](https://marketplace.mendix.com/link/component/108805/).

{{% alert color="warning" %}}
The SSO module also changes the app `index.html` file. For details, see [index.html Changes](#indexhtmlchanges).

When you download the SSO module, also download the latest version of the Siemens Insights Hub Widget module.
{{% /alert %}}

### Constants

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image2.png" alt="Folder structure of the SiemensInsightsHubSingleSignOn module" >}}

#### LocalDevelopment

These constants are only needed for local development and testing. For details on the values to enter in the constants in the *LocalDevelopment* folder, see [Local Testing](/appstore/industry/mindsphere/mindsphere-development-considerations/#localtesting) in *Insights Hub Development Considerations*.

#### CockpitApplicationName

This is the name of your app as registered in the Insights Hub Developer Cockpit. See [Siemens Insights Hub Deployment](/developerportal/deploy/deploying-to-mindsphere/) for more information.

### Microflows{#microflows}

The SiemensInsightsHubSingleSignOn module also provides microflows that support SSO within Insights Hub. The *DS_Account* microflow gets the user's **tenant** and **email** for use in the app.

You can use the microflows *DS_AccessToken* and *DS_GetAccessTokenForScheduledEvents* to get the user's access token or the technical access token. REST calls to Insights Hub need these tokens. The microflows are also available as actions in the **Insights Hub** toolbox.

You can use the microflow *BuildCoreURL* to support dual-token-aware apps. This lets one Mendix app support both the Insights Hub and Xcelerator platforms at the same time.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image3.png" alt="Folder structure showing microflows in the SiemensInsightsHubSingleSignOn module" >}}

#### RegisterSingleSignOn

Add this microflow as the *After startup* microflow, or as a sub-microflow of an existing after-startup microflow. To do this, go to the **Runtime** tab of the **App** > **Settings** dialog box, which you open from **App Explorer**.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image4.png" alt="App settings dialog" >}}

#### DS_Token

This microflow populates a token as a string. When you run the app locally, the microflow returns the token fetched on startup. This requires the constant `AskForCredentialsOnStartUp` to be set to `true`. When you run the app in the cloud, the microflow returns the individual user token.

{{% alert color="warning" %}}
If the app cannot retrieve a valid token and is not running locally, the app logs an error and returns an empty string.
{{% /alert %}}

Pass the token string as the *Authorization* header in REST calls to Insights Hub APIs.

{{% alert color="info" %}}
The token expires after a short time, so refresh it before each call to any Insights Hub API. To do this, use the *Access token* action, which returns the latest token.
{{% /alert %}}

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image6.png" alt="Section of a microflow showing the Access token action and the Edit Custom HTTP Header dialog in the Call REST action" >}}

#### DS_Account

This microflow populates the *Name* attribute of the *Tenant* entity and the *Email* attribute of the *Account* entity from the user's Insights Hub account details. These are extensions to the Mendix User object that help you create multitenant apps.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image7.png" alt="Domain model showing Account, Tenant, and TenantObject." >}}

In addition, Insights Hub SSO uses **IsSubTenantUser** to identify whether the current user is a subtenant. If so, it populates **SubtenantId** with the name of the subtenant. For more information, see [Subtenants](https://developer.mindsphere.io/apis/core-tenantmanagement/api-tenantmanagement-overview.html#subtenants) in the Insights Hub documentation.

{{% alert color="info" %}}
If the same user signs in using a different tenant, Mendix treats them as a different user and uses a user ID instead of a user name.
{{% /alert %}}

For advice on making your apps multitenant, see [Multi-Tenancy](/appstore/industry/mindsphere/mindsphere-development-considerations/#multitenancy) in *Insights Hub Development Considerations*.

### Roles and Scopes {#rolesscopes}

When you use SSO, the Mendix app needs to know which roles to assign to the user. For example, this determines whether the user has administrator access.

Insights Hub apps have up to five application roles. Each Insights Hub user has one or more of these roles. These roles define access to Insights Hub core roles and are also mapped to Insights Hub application scopes. For information on setting up scopes in Insights Hub, see the [Setting Application Scopes in Developer Cockpit](/developerportal/deploy/deploying-to-mindsphere/#scopes) section in *Siemens Insights Hub – deploy*.

During sign-in, Insights Hub application scopes are mapped to Mendix roles automatically. The comparison ignores differences in uppercase and lowercase. If the roles match, the Mendix role is assigned to the user.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/roles-and-scopes.png" alt="Diagram showing relationship between different roles and scopes in Mendix and Insights Hub" >}}

The mapping in the app template is:

| **Insights Hub application scope** | **is mapped to Mendix User role** |
| -------------------------------- | --------------------------------- |
| {app_name}.admin                | Admin                             |
| {app_name}.user                 | User                              |

In Insights Hub, these roles look like this:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image8.png" alt="Insights Hub Authorization Management screen" >}}

In the Mendix app, they are mapped to these roles:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image9.png" alt="Mendix App Security dialog" >}}

### index.html Changes{#indexhtmlchanges}

The [Siemens Insights Hub Starter Application](https://marketplace.mendix.com/link/component/109130), example apps, and Siemens Insights Hub Single Sign On have an updated `index.html` file that allows integration with Insights Hub.

If you develop your app from a different app template, add the Siemens Insights Hub Single Sign On module to your app to get the updated `index.html` file. For details about the changes to the file, see [index.html](#indexhtml).

The changes are required to support the following:

* OS Bar – Your app must support the Insights Hub bar.
* XSRF – Insights Hub must receive an XSRF token to work with your app.
* SSO login – The sign-in process must support single sign-on.

You can find the modified `index.html` file in the `/themesource/siemensinsightshubsinglesignon/public` folder of your app.

## Insights Hub OS Bar {#msosbar}

All Insights Hub apps must integrate the Insights Hub OS Bar. This unifies the UI of all Insights Hub apps. Use it to show the app name, route back to the Launchpad, and sign out from Insights Hub. Apps without the Insights Hub OS Bar are not validated for deployment to an Insights Hub production environment.

To see how the Insights Hub OS Bar integration works, see [Insights Hub OS Bar](https://design.mindsphere.io/osbar/introduction.html) on the Insights Hub developer website.

The SiemensInsightsHubOSBarConfig module provides a constant **OSBarURL** for specifying the OS Bar URL. For a list of available URL locations, see [getting the Insights Hub OS Bar](https://design.mindsphere.io/osbar/introduction.html#tab1anchor0).

The SiemensInsightsHubOSBarConfig module creates an endpoint that the Insights Hub OS Bar uses to provide tenant context and information about the application. The module is included in the Insights Hub app template. You can also download it from the Mendix Marketplace: [Insights Hub OS Bar Connector](https://marketplace.mendix.com/link/component/108804/).

{{% alert color="info" %}}
To work, the Insights Hub OS Bar Connector also needs the Siemens Insights Hub Single Sign On module or manual configuration of the `index.html` file. For more information, see [Customizing an Existing App](/developerportal/deploy/deploying-to-mindsphere/#existingapp) in *Siemens Insights Hub – deploy* and [index.html Changes](#indexhtmlchanges).
{{% /alert %}}

### Configuring the OS Bar

The OS Bar shows information about the app you are running.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image10.png" alt="Example of the information in the OS Bar" >}}

You configure this information as a JSON object in the string constant **Config** in the *SiemensInsightsHubOSBarConfig* module.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image11.png" alt="Dialog for setting the Config constant for the OS Bar" >}}

The JSON should contain the following information:

* displayName – the display name of your app
* appVersion – the version number of your app
* appCopyright – app owner’s name and year of publication
* links – links to additional information about the app

For more information on the structure and content of this JSON object, including sample JSON, see [App Information](https://documentation.mindsphere.io/MindSphere/resources/osbar/getting-started.html) on the Insights Hub developer site.

### sso-login.html

The Siemens Insights Hub Starter Application, example apps, and Siemens Insights Hub Single Sign On have a `sso-login.html` file that replaces the standard Mendix `login.html` file to allow SSO integration with Insights Hub. You can find it in the `/themesource/siemensinsightshubsinglesignon/public` folder of your app.

### Error Pages

These error pages are included in the Siemens Insights Hub Starter Application, example apps, and Siemens Insights Hub Single Sign On. This section explains what each page is for.

#### Permission Denied Page

This is the general *permission denied* page. It appears if your app is called with an invalid token.

#### License Exceeded

This page appears when the maximum number of sessions is exceeded.

#### Role Mapping

This page appears if the provided Insights Hub application scopes do not match any of the roles in the Mendix app.

## Appendices

### index.html{#indexhtml}

The standard Mendix `index.html` file has several changes to ensure compatibility with Insights Hub. These changes are included by default in the Siemens Insights Hub Starter Application, example apps, and Siemens Insights Hub Single Sign On.

You only need to make the changes below if you configure your existing Mendix app manually, without importing Siemens Insights Hub Single Sign On.

Run your app locally, copy `index.html` from the `/deployment` folder to the `/theme/web/public` folder of your app, and apply the changes described below.

#### XSRF / Gateway Session Expired

In `index.html`, include the following script in the body after the `<noScript>` tag.

This change does two things:

* Adds the `x-xsrf-token` header to each request. The Insights Hub Gateway needs this header.
* Handles the case where the gateway session expires. When the session expires, the app shows a pop-up window that asks the user to reload the app. You can modify and localize the message and title in the pop-up window by using the "i18n" enumeration of the module "SiemensInsightsHubWebContent".

    {{% alert color="info" %}}Add the "Siemens Insights Hub Web Single Sign On" module role "User" to all your app's user roles. This ensures that the localized session expired message and title can be loaded during app startup.
    {{% /alert %}}

```javascript
<script type="module">
    // Insights Hub specific part-1: We have to use the XSRF-TOKEN on fetch requests.
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
                } catch {
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
                        <button type="button" class="btn mx-button mx-name-actionButton1 pull-right btn-primary" title="" 
                            data-disabled="false" onClick="location.reload()">${text.button}</button>
                    </div>
                </div>
            </div>
            <div class="mx-underlay" id="mxui_widget_Underlay_0" widgetid="mxui_widget_Underlay_0" style="z-index: 101;"></div>`
            const body = document.getElementsByTagName('body')[0];
            body.insertAdjacentHTML('afterbegin', sessionExpiredPopup);
    };

    (function () {
        // Read cookie below
        function getCookie(name) {
            const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            if (match) return match[2];
            else return '';
        }

        const xrsfToken = getCookie('XSRF-TOKEN');
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
            const originalXMLHttpRequest = window.XMLHttpRequest;
            window.XMLHttpRequest = function () {
                const result = new originalXMLHttpRequest(arguments);

                // overwrite setRequestHeader function to make sure to set the x-xsrf-token only once
                result.setRequestHeader = function (header, value) {
                    if (header) {
                        if (header.toLowerCase().includes('x-xsrf-token')) {
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

To allow SSO, replace the usual `login.html` file with a different file (`sso-login.html`).

Delete the following lines:

```javascript
if (\!document.cookie || \!document.cookie.match(/(^|;)originURI=/gi))
document.cookie = "originURI=/login.html";
```

Directly after the X-XRSR script, add the following script:

```javascript
<script>
        // Insights Hub specific part-2: Use the sso-login.html to prevent the Gateway taking over login.html and perform SSO
        // Always set originURI Cookie.
        document.cookie = `originURI=/sso-login.html${window.location.protocol === "https:" ? ";SameSite=None;Secure" : ""}`;
        // Insights Hub specific part-2: ends
</script>
```

#### OS Bar

For the OS Bar to work correctly in your Mendix app, add the following script after the SSO script you just added. If you insert the script manually, note the comments in the code about the required order.

{{% alert color="info" %}}
For security reasons, `mx.data.create()` is not allowed in the client's strict mode. To localize your session expired message, use the nanoflow *SessionExpiredMessage* provided in the Siemens Insights Hub Single Sign On module and run it on your home page. In strict mode, you do not need the function `sessionExpiredValues()`. Remove it and its usage in the `loadMendix()` function.
{{% /alert %}}

```javascript
   <script type="module">
        // Insights Hub specific part-3: OS Bar related code
        const sessionExpiredValues = function () {
            const loadEntity = () => {
                mx.addOnLoad(() => {
                    try {
                        mx.data.create({
                            entity: "SiemensInsightsHubSingleSignOn.SessionExpired",
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
                    } catch (error) {
                        if (!sessionStorage.getItem('sessionExpired') && error.message === "mx.data.create is disabled") {
                            console.error(`Unable to create Entity. Strict mode enabled? 
If you use strict mode, use the NF SessionExpiredMessage on your home page to ensure the localized message is present in the `sessionStorage`. 
With strict mode, the `sessionExpiredValues()` function is not needed at all. Remove it and its usage in the `loadMendix()` function.`);
                        } else
                            console.log(error);
                    }
                })
            }
            setTimeout(loadEntity, 60000)
        }

        const loadMendix = function () {
            // make sure that the index.js is loaded after /rest/os-bar/v1/loader to prevent problems with the height calculation of some elements
            (function (document) {
                const script = document.createElement('script');
                script.src = './dist/index.js?{{cachebust}}';
                script.async = true;
                script.type = 'module';
                script.onload = sessionExpiredValues;
                document.getElementsByTagName('body')[0].appendChild(script);
            })(document);
        };
        const onError = function (document) {
            const body = document.getElementsByTagName('body')[0];
            const content = document.getElementById('root');
            const html =
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

        const initOsBar = function (url, document) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.onload = function () {
                _mdsp.init({
                    appId: 'root',
                    appInfoPath: './rest/os-bar/v1/config',
                    initialize: true,
                });
                loadMendix();
            };
            script.onerror = () => onError(document);
            script.src = url;
            document.getElementsByTagName('head')[0].appendChild(script);
        };

        (async function () {
            try {
                const resp = await window.fetch('./rest/os-bar/v1/osbar.url');
                const body = await resp.json();
                if (body.osBarUrl) {
                    initOsBar(body.osBarUrl, document);
                }
            } catch {
                onError(document);
            }
        })();
        // Insights Hub specific part-3: ends
    </script>
```

### sso-login.html{#mindspherelogin}

Insights Hub SSO needs a new `sso-login.html` login file. It is included by default in the Insights Hub Starter Application, example app, and Siemens Insights Hub Single Sign On.

You only need to create a `sso-login.html` file with the following content in the `/theme/web/public` folder if you configure your existing Mendix app manually, without importing Siemens Insights Hub Web Content.

```html
<!doctype html>
<html>

<head>
	<title>Insights Hub</title>
	<script>
		if (window.location.href.includes('#')) {
			const redirectUri = window.location.hash.replace('#/', '');
			window.location.assign(`sso?redirect_uri=${redirectUri}${window.location.search}`);
		} else {
			window.location.assign("/sso" + window.location.search);
		}
	</script>
</head>

</html>
```

## Read More

* [Siemens Insights Hub – deploy](/developerportal/deploy/deploying-to-mindsphere/)
* [Insights Hub Development Considerations](/appstore/industry/mindsphere/mindsphere-development-considerations/)
