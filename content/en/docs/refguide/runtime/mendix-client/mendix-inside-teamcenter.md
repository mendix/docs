---
title: "Mendix Inside Teamcenter"
url: /refguide/mendix-client/mendix-inside-teamcenter/
description: "Describes how to embed a Mendix web app as a native component inside Siemens Teamcenter Active Workspace using the embedded client."
weight: 40
beta: true
---

## Introduction

{{% alert color="info" %}}
Mendix inside Teamcenter is available in Mendix version 11.12.0 and above and is currently in public Beta. See the [prerequisites](#prerequisites) for more version requirements.
{{% /alert %}}

Mendix inside Teamcenter lets you embed a Mendix web app as a native component inside Siemens Teamcenter Active Workspace. The Mendix app runs directly in the Active Workspace page as a micro-frontend using the [Embedded Client](/refguide/mendix-client/embedding-the-client/) feature.

This integration requires the [Teamcenter Connector](/appstore/modules/siemens-plm/teamcenter-connector/) to connect the Mendix app to Teamcenter data and to handle authentication.

## Prerequisites {#prerequisites}

The following versions are required:

| | Mendix | Teamcenter | Teamcenter Connector |
| --- | --- | --- | --- |
| **Beta** | 11.12 | 2512 | 2606.0.0 or above |
| **GA (planned)** | 11.18 | 2612 | TBD |

In addition, the following requirements must be met:

* The Teamcenter Active Workspace instance is customizable and can be rebuilt and redeployed.
* The Teamcenter Content Security Policy (CSP) is configurable.
* The Mendix app is registered with the identity provider used by Teamcenter Security Services (TcSS).
* The browser allows cross-site cookies for the Mendix domain. This can be configured per-domain via organization policy (for example, using Intune).
* There is bidirectional network connectivity between the user's browser and both the Mendix runtime and the Teamcenter server.

For Teamcenter Connector prerequisites, see [Teamcenter Connector](/appstore/modules/siemens-plm/teamcenter-connector/).

## Setting Up the Mendix App

### Adding an Embedded Navigation Profile

The Mendix app must have an Embedded navigation profile. When this profile exists, the Mendix runtime exposes the `/dist/embedded-index.js` bundle that Active Workspace loads.

To add an Embedded navigation profile:

1. In Studio Pro, go to **App** > **Navigation**.
2. Click **Add navigation profile**.
3. Select **Embedded** and click **OK**.
4. Configure the **Default home page** for the embedded app.

For more information about navigation profiles, see [Setting Up Navigation](/refguide/setting-up-the-navigation-structure/).

### Configuring Cross-Origin Resource Sharing (CORS)

The Mendix app must allow cross-origin resource sharing (CORS) from Active Workspace. This allows the browser to load the Mendix client bundle from the Mendix runtime origin from a page that is served from the Teamcenter origin. You will need to set up the following:



#### Runtime Settings

Configure the following [custom runtime setting](/refguide/custom-settings/). 

| Name | Value |
| --- | --- |
| `com.mendix.core.SameSiteCookies` | `None` |

#### Custom HTTP Response Headers

Configure the following HTTP Response Headers in your [local runtime configuration](/refguide/configurations-tab/#headers) or your cloud environment. Replace `https://your-teamcenter.example.com` with the actual origin of your Active Workspace deployment, including scheme and port if applicable.

| Header | Value |
| --- | --- |
| `Access-Control-Allow-Credentials` | `true` |
| `Access-Control-Allow-Headers` | `Content-Type, x-csrf-token` |
| `Access-Control-Allow-Methods` | `POST, GET, OPTIONS` |
| `Access-Control-Allow-Origin` | `https://your-teamcenter.example.com` |
{{% alert color="info" %}}
For the Mendix public cloud do not use the HTTP Header configuration in the cloud portal. Instead set the custom runtime configuration setting `Headers` to the following:
```json
{
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Headers": "Content-Type, x-csrf-token",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Origin": "https://your-teamcenter.example.com"
}
```
See [custom settings](https://docs.mendix.com/refguide/custom-settings/#Headers) for details.
{{% /alert %}}

{{% alert color="info" %}}
Both the Mendix runtime and the Active Workspace server must be served over HTTPS. When `SameSiteCookies` is set to `None`, the `Secure` attribute is automatically added to cookies, which requires HTTPS on both origins.
{{% /alert %}}

{{% alert color="info" %}}
Both the Mendix runtime and the Active Workspace server must be served over HTTPS. When `SameSiteCookies` is set to `None`, the `Secure` attribute is automatically added to cookies, which requires HTTPS on both origins.
{{% /alert %}}

Restart the Mendix app after changing these settings. For background on how CORS works in the Mendix runtime, see [Configuring CORS in the Mendix Runtime](https://docs.mendix.com/refguide/configure-cors/).

## Installing the Mendix Component in Active Workspace

The Mendix-inside-Teamcenter Active Workspace component (`MendixEmbedded`) is a custom Active Workspace web component that loads the Mendix embedded client bundle and mounts the Mendix app inside the Active Workspace page.

### Adding the Component to Active Workspace

1. Obtain the `MendixEmbedded` component from [GitHub](TBD).
2. Install the component into your Active Workspace stage repository under `src/repo`.
3. Configure the component with the URL of your Mendix runtime.
4. Optionally, set up context passing. For more information, see [Passing Context from Teamcenter](#passing-context).
5. Rebuild Active Workspace.

To verify the component was picked up correctly, check that its view model entry exists in the `pathMap.json` registry file in the build output.

### Registering the Component on a Page

To display the Mendix app on an Active Workspace page, add a card definition for it to the relevant `layoutsViewModel.json` file in your Active Workspace stage repository. Set `declarativeKeyContext` to the URL of your Mendix runtime:

```json
"Mendix": {
    "title": "Mendix",
    "view": "MendixEmbedded",
    "anchor": "",
    "props": {
        "subPanelContext": {
            "declarativeKeyContext": "https://your-mendix-runtime.example.com"
        }
    }
}
```

Add `"Mendix"` to the relevant layout handler grid and rebuild Active Workspace. If the Mendix card does not appear after rebuilding, clear the browser cache to ensure the new chunk is loaded.

Detailed Active Workspace customization and build steps are outside the scope of this documentation. Refer to the Siemens Active Workspace documentation for instructions.

## Configuring the Content Security Policy in Teamcenter

Active Workspace enforces a Content Security Policy that must be updated to allow Mendix content to load.

In your Teamcenter gateway configuration (`gateway/config.json`), add the Mendix runtime URL to the following directives:

* `script-src`
* `script-src-elem`
* `font-src`
* `connect-src`
* `img-src`
* `style-src`

Use the browser console CSP errors to identify any additional directives that still need the Mendix origin for your specific setup.

After updating the CSP, restart the Teamcenter Process Manager for the changes to take effect.

{{% alert color="warning" %}}
If Teamcenter returns `HTTP 401 Unauthorized` with a JWT signature error after restarting the Process Manager, restart the entire Teamcenter server.
{{% /alert %}}

## Configuring Authentication {#authentication}

During Beta, authentication uses the Teamcenter Connector's Teamcenter SSO flow. The Mendix app login page shows an SSO button. When a user clicks it, they are redirected to Teamcenter Security Services (TcSS) for authentication. After a successful login, TcSS redirects back to the Mendix app, where the user is provisioned or matched to an existing Mendix account and a Teamcenter Connector session is established.

{{% alert color="info" %}}
Because the Mendix app runs inside Active Workspace, the SSO redirect opens in a popup window. The popup can be automated to require zero additional clicks after the user is already signed in to TcSS. The planned GA release targets a fully invisible authentication flow with no popup.
{{% /alert %}}

Follow these steps to configure authentication. Steps 1–3 require Teamcenter administrator access.

1. **Register the Mendix App with Teamcenter Security Services**:

    Register the Mendix app in the Teamcenter Deployment Center so TcSS can authenticate it. For instructions, see [Registering Your App for Teamcenter SSO](/appstore/modules/siemens-plm/configuring-connection-2512/#register-your-app-for-teamcenter-sso).

1. **Configure the Teamcenter Connector Connection**:

    In your Mendix app, configure a Teamcenter Connector connection using **Teamcenter SSO** as the authentication method. For instructions, see [Configuring the Connection to Teamcenter](/appstore/modules/siemens-plm/configuring-connection-2512/).

1. **Configure User Provisioning**:

    Set up user provisioning so that Mendix accounts are matched to Teamcenter users on login. For instructions, see [User Provisioning for SSO](/appstore/modules/siemens-plm/configuring-connection-2512/#user-provisioning-for-sso).

1. **Add an SSO Login Button to the Login Page**:
    
    Add a Teamcenter SSO login button to the Mendix app's `login.html` so users can initiate the TcSS authentication flow. For instructions, see [Adding an SSO Login Button to Your Login Page](/appstore/modules/siemens-plm/configuring-connection-2512/#add-sso-login-button). Optionally, use JavaScript to trigger the authentication automatically. Note that browsers may block the popup unless it is triggered directly by a user action.

## Passing Context from Teamcenter {#passing-context}

The `MendixEmbedded` Active Workspace component passes Teamcenter object context to the Mendix app as startup parameters. These are configured in the Active Workspace component and forwarded to the Mendix `render()` call as the `parameters` object.

The following example shows how the Active Workspace component passes a selected Teamcenter item UID to the Mendix app:

```js
const MENDIX_URL = "https://your-mendix-runtime.example.com/";

export async function mountMendixInTeamcenter(container, tcContext) {
    const embeddedModule = await import(`${MENDIX_URL}dist/embedded-index.js`);
    return embeddedModule.render(container, {
        remoteUrl: MENDIX_URL,
        minHeight: "620px",
        parameters: {
            itemUID: tcContext.selected.uid
        }
    });
}
```

The `parameters` object is available to the Mendix app at startup. Use a JavaScript action on the home page to read parameters and pass them to your application logic.

For the full `render()` API, see [Embedding the Client](/refguide/mendix-client/embedding-the-client/).

### Best Practices for Context Parameters

* **Use persistable object IDs only.** Pass Item UIDs or ItemRevision UIDs. These are stable and unique across sessions.
* **Avoid non-persistable IDs.** BOM line IDs are runtime calculation results that lose synchronization when Teamcenter configuration rules change. Do not use them as parameters.
* **Prefer Item IDs over ItemRevision IDs** where possible. Item IDs are context-independent and do not depend on the revision rule in effect.
* **Discover available parameters** by referring to the Active Workspace documentation for a list of available context parameters.

## Known Limitations (Beta)

* **Cross-site cookies:** The browser must allow cross-site cookies for the Mendix domain. This is required because the Mendix app runs on a different origin than Active Workspace. Configure this per-domain via organization policy (for example, Intune).
* **Authentication popup:** During Beta, the Teamcenter Connector SSO flow opens a popup window. This can be automated to require zero additional clicks after the user is already authenticated with TcSS.
* **Optional parameters fallback:** If an optional startup parameter is omitted, the embedded client shows the fallback page rather than using the parameter's default value. This is a known limitation of the embedded client. See [Embedding the Client](/refguide/mendix-client/embedding-the-client/).

## Read More

* [Embedding the Client](/refguide/mendix-client/embedding-the-client/)
* [Teamcenter Connector](/appstore/modules/siemens-plm/teamcenter-connector/)
* [Setting Up the Navigation Structure](/refguide/setting-up-the-navigation-structure/)
* [Configure CORS](/refguide/configure-cors/)
