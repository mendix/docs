---
title: "Mendix Inside Teamcenter"
url: /refguide/mendix-client/mendix-inside-teamcenter/
description: "Describes how to embed a Mendix web app as a native component inside Siemens Teamcenter Active Workspace using the embedded client."
weight: 40
beta: true
---

## Introduction

{{% alert color="info" %}}
Mendix inside Teamcenter is available in Mendix version 11.12.0 and above and is currently in public Beta.

See the [prerequisites](#prerequisites) for other version requirements.
{{% /alert %}}

Mendix inside Teamcenter lets you embed a Mendix web app as a native component inside Siemens Teamcenter Active Workspace. The Mendix app runs directly in the Active Workspace page as a micro-frontend using the [Embedded Client](/refguide/mendix-client/embedding-the-client/) feature.

This integration requires the [Teamcenter Connector](/appstore/industry/teamcenter-connector/) to connect the Mendix app to Teamcenter data and to handle authentication.

## Prerequisites {#prerequisites}

The following versions are required:

| | Mendix | Teamcenter | Teamcenter Connector |
| --- | --- | --- | --- |
| **Beta** | 11.12 or above | 2512 | 2606.0.0 or above |
| **GA (planned)** | 11.18 | 2612 | TBD |

The following requirements must also be met:

* The Teamcenter Active Workspace instance is customizable and can be rebuilt and redeployed.
* The Teamcenter Content Security Policy (CSP) is configurable.
* The Mendix app is registered with the identity provider used by Teamcenter Security Services (TcSS).
* The browser allows cross-site cookies for the Mendix domain. This can be configured per-domain via organization policy (for example, using Intune).
* There is bidirectional network connectivity between the user's browser and both the Mendix runtime and the Teamcenter server.

For Teamcenter Connector prerequisites, see [Teamcenter Connector](/appstore/industry/teamcenter-connector/#prerequisites).

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

See [custom settings](/refguide/custom-settings/#Headers) for details.
{{% /alert %}}

{{% alert color="info" %}}
Both the Mendix runtime and the Active Workspace server must be served over HTTPS. When `SameSiteCookies` is set to `None`, the `Secure` attribute is automatically added to cookies, which requires HTTPS on both origins.
{{% /alert %}}

#### CORS for TcSSO Published REST Service

Configure the [CORS settings](/refguide/cors-settings/) for the TcSSO Published REST Service (Internal/Resources/ServiceHandlers/TCSSO) that is included in the Teamcenter Connector and add your Teamcenter host `https://your-teamcenter.example.com` to the **Allowed Origins**.

Restart the Mendix app after changing these settings. For background on how CORS works in the Mendix runtime, see [Configuring CORS in the Mendix Runtime](https://docs.mendix.com/refguide/configure-cors/).

## Installing the Mendix Component in Active Workspace

The Mendix-inside-Teamcenter Active Workspace component (`MendixEmbedded`) is a custom Active Workspace web component that loads the Mendix embedded client bundle and mounts the Mendix app inside the Active Workspace page.

### Adding the Component to Active Workspace{#adding-component}

1. Obtain the `MendixEmbedded` component from [GitHub](https://github.com/mendixlabs/mendix-inside-teamcenter).
2. Install the component into your Active Workspace stage repository under `src/repo`.
3. Configure the component with the URL of your Mendix runtime.
4. Optionally, set up context passing. For more information, see [Passing Context from Teamcenter](#passing-context).
5. Rebuild Active Workspace using `awbuild.cmd`.

To verify the component was picked up correctly, check that its view model entry exists in the `src/repo/out/pathMap.json` registry file in the build output.

### Registering the Component on a Page

To display the Mendix app on an Active Workspace page, add its card definition to the relevant `layoutsViewModel.json` file in your Active Workspace stage repository. Set `declarativeKeyContext` to the URL of your Mendix runtime:

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

* Mendix recommends that you use `Mendix` as the object key name, although you can change this if required
* `title` will be used as the card label

    {{< figure src="/attachments/refguide/runtime/mendix-client/mendix-inside-teamcenter/card-titles.png" alt="Mendix card displayed in Active Workspace with the title shown as the card label" >}}

* `view` is the name of the Mendix-inside-Teamcenter Active Workspace component obtained in the [previous section](#adding-component), that is "MendixEmbedded"

Add the **Mendix** JSON object (or the name you gave it) to the relevant layout handler grid and rebuild Active Workspace. If the Mendix card does not appear after rebuilding, clear the browser cache to ensure the new chunk is loaded.

Detailed Active Workspace customization and build steps are outside the scope of this documentation. Refer to the Siemens [Active Workspace Customization](https://docs.sw.siemens.com/en-US/doc/282219420/PL20250520748650994.Configuration/yiv1688486682769) documentation for instructions (link requires authentication).

## Configuring the Content Security Policy (CSP) in Teamcenter

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

While Mendix in Teamcenter is in Beta, authentication uses the Teamcenter Connector's Teamcenter Single Sign On (SSO) flow. Upon accessing the Mendix application, a pop-up window is opened automatically for authentication. After successful login (which will usually happen automatically), the pop-up window is closed and the Mendix application and Teamcenter Connector are authenticated.

{{% alert color="info" %}}
In the GA release an alternative authentication flow that is invisible to the end-user is planned.
{{% /alert %}}

Follow these steps to configure authentication.

1. **Register the Mendix App with Teamcenter Security Services**:

    Register the Mendix app in the Teamcenter Deployment Center so TcSS can authenticate it. For instructions, see [Registering Your App for Teamcenter SSO](/appstore/industry/teamcenter-connector/configuring-connection-2512/#register-your-app-for-teamcenter-sso).
    
    {{% alert color="info" %}}This step requires administrator access to Teamcenter.{{% /alert %}}

2. **Configure the Teamcenter Connector Connection**:

    In your Mendix app, configure a Teamcenter Connector connection using **Teamcenter SSO** as the authentication method. For instructions, see [Configuring the Connection to Teamcenter](/appstore/industry/teamcenter-connector/configuring-connection-2512/).

    {{% alert color="info" %}}This step requires administrator access to your Mendix application.{{% /alert %}}

3. **Configure User Provisioning**:

    Set up user provisioning based on the `EXAMPLE_UserProvisioningAnonymous` microflow so that Mendix accounts are matched to Teamcenter users on login. DO not allow anonymous users in the Mendix application. For instructions, see [User Provisioning for SSO](/appstore/industry/teamcenter-connector/configuring-connection-2512/#user-provisioning-for-sso).

4. **Add the following required customizations**:
    
    1. Create a JavaScript action called JS_CloseWindow containing the following code:

        ```javascript
        export async function JS_CloseWindow() {  
            // BEGIN USER CODE  
            window.close();  
            // END USER CODE  
        }
        ```

    2. Add a nanoflow that calls this JavaScript action.
    3. Add an empty page called `AuthSuccess` to the application which contains an `Component load` event that calls this nanoflow.
    4. Change the `DL_HandleSSOLoginMicroflow` to show the `AuthSuccess` page instead of the home page as the last action in the microflow.

        For instructions, see the [Adding an SSO Login Button to Your Login Page](/appstore/industry/teamcenter-connector/configuring-connection-2512/#add-sso-login-button) section of *Configuring the Connection to Teamcenter with Teamcenter Connector 2512.0.0 and Above*.

## Passing Context from Teamcenter {#passing-context}

The `MendixEmbedded` Active Workspace component passes Teamcenter object context to the Mendix app as startup parameters. These are configured in the Active Workspace component and forwarded to the Mendix `render()` call as the `parameters` object.

Please see `mx-in-tc-context` on [GitHub](https://github.com/mendixlabs/mendix-inside-teamcenter) for an example of how to pass the identifier of the selected object to the embedded Mendix application.

For the full `render()` API, see [Embedding the Client](/refguide/mendix-client/embedding-the-client/).

### Best Practices for Context Parameters

* **Use persistable object IDs only.** Pass `Item` UIDs or `ItemRevision` UIDs. These are stable and unique across sessions.
* **Avoid non-persistable IDs.** BOM line IDs are runtime calculation results that lose synchronization when Teamcenter configuration rules change. Do not use them as parameters.
* **Prefer `Item` IDs over `ItemRevision` IDs** where possible. `Item` IDs are context-independent and do not depend on the revision rule in effect.
* **Discover available parameters** by referring to the Active Workspace documentation for a list of available context parameters.

## Known Limitations (Beta)

* **Authentication pop-up:** During Beta, the Teamcenter Connector SSO flow opens a pop-up window. This can be automated to require zero additional clicks after the user is already authenticated with TcSS.

## Read More

* [Embedding the Client](/refguide/mendix-client/embedding-the-client/)
* [Teamcenter Connector](/appstore/industry/teamcenter-connector/)
* [Setting Up the Navigation Structure](/refguide/setting-up-the-navigation-structure/)
* [Configure CORS](/refguide/configure-cors/)
