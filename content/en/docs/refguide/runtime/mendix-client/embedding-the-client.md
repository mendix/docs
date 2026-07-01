---
title: "Embedding the Client"
url: /refguide/mendix-client/embedding-the-client/
description: "Describes how to load a Mendix web app into another web application by using the embedded client."
weight: 30
beta: true
---

{{% alert color="warning" %}}
This feature was introduced in Mendix version 11.12.0. It is in Public Beta. For more information, see [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

The embedded client lets you use a Mendix web app as a component inside another web application. This makes it easier to add Mendix capabilities to broader digital experiences, support micro-frontend architectures, and integrate Mendix seamlessly into existing portals, products, or custom frontends. In this setup, the host application owns the surrounding page and browser-level experience, while the Mendix app owns the region where it is embedded.

This page describes how to do the following:

* Configure an Embedded navigation profile in your Mendix app
* Load the embedded client from a host application
* Pass page parameters to the embedded home page
* Understand how CSS styling behaves in an embedded app
* Understand how navigation behaves in an embedded app
* Understand authentication options for an embedded app
* Configure host app requirements such as Cross-Origin Resource Sharing(CORS) and Content Security Policy(CSP)
* Mount and unmount the client at the correct lifecycle moment

{{% alert color="info" %}}
Embedding the Mendix client is only supported for the [Mendix React Client](/refguide/mendix-client/react/) in Mendix version 11.12.0 and above.
{{% /alert %}}

## How the Embedded Client Works

When your app contains an Embedded navigation profile, the Mendix runtime exposes an embedded entry bundle at `/dist/embedded-index.js`.

Your host application is responsible for the following:

* Choosing the Mendix runtime URL
* Loading the embedded bundle with a dynamic import
* Creating a DOM element that Mendix can render into
* Calling `render(…)` on the embedded bundle
* Calling the returned unmount function when the host component is removed
* Showing any loading or error state in the host UI

The same integration pattern works in React, Vue, plain JavaScript, and other frontend frameworks.

## Example Host Apps

See the [embedded-mendix-demo-apps](https://github.com/mendix/embedded-mendix-demo-apps) GitHub repository for an example Mendix application that has been configured to be embedded, together with example host applications using Vue, React, and vanilla JavaScript.

## Configuring the Embedded App

To enable the embedded client for your Mendix app, do the following:

1. Open your app in Studio Pro.
2. Open **App** > **Navigation**.
3. Click **Add navigation profile**.
4. Select **Embedded**.
5. Configure the default **Home page** for the Embedded profile.
6. Configure a **Fallback page** for the Embedded profile (optional).
7. Run or deploy the app.

{{< figure src="/attachments/refguide/mendix-client/embedding-the-client/nav-profile.png" alt="embedded navigation profile UI" >}}

After you add the Embedded profile, the Mendix runtime serves the following bundle:

```text
<runtime-url>/dist/embedded-index.js
```

For example, if your runtime URL is `http://my-app.mendixcloud.com`, the embedded bundle is served from `http://my-app.mendixcloud.com/dist/embedded-index.js.

The Embedded profile defines the starting page for the embedded app, which is the first page shown when the host calls `render(…)`. It can also define a fallback page for startup or navigation failures. When the embedded home page requires page parameters, pass those values from the host application by using the `parameters` object in the `render(…)` configuration (see [Loading and Rendering the Embedded Client](#loading), below). The configured fallback page is shown when the parameters passed in `render(…)` do not match the expected parameter types of the embedded home page or when the selected home page is not accessible to the signed-in user.

The parameter names in `parameters` must match the page parameters expected by the embedded home page.

## Creating a Host Container

Create an element in the host application where the Mendix app will be mounted.

For example:

```html
<div id="embedded-mendix-host"></div>
```

Or in a framework component:

```tsx
<div ref={hostRef} />
```

The host only needs to provide a real DOM node.

## Loading and Rendering the Embedded Client{#loading}

The embedded bundle exposes a `render(…)` function. A minimal framework-agnostic integration looks like this:

```js
const REMOTE_URL = "https://your-mendix-runtime.example.com/";

export async function mountEmbeddedMendix(container) {
    const embeddedModule = await import(`${REMOTE_URL}dist/embedded-index.js`);

    return embeddedModule.render(container, {
        remoteUrl: REMOTE_URL,
        minHeight: "620px",
        parameters: {
            customerId: "12345"
        }
    });
}
```

This code does the following:

* Resolves the runtime URL
* Loads the embedded bundle from the Mendix runtime
* Passes page parameters to the embedded home page
* Calls `render(…)` with the container element
* Returns the unmount function from the embedded client

{{% alert color="info" %}}
If your host application uses Vite, add the `/* @vite-ignore */` comment to the dynamic import so Vite does not try to resolve the runtime URL during the host build.
{{% /alert %}}

## Mounting and Cleaning Up

Call the embedding logic only after the container exists and store the returned unmount function.

Typical lifecycle hooks include the following:

* React: `useEffect(...)`
* Vue: `onMounted(...)` and `onBeforeUnmount(...)`
* Plain JavaScript: after locating the container with `getElementById(...)` and during your own teardown flow

For example:

```js
const container = document.getElementById("embedded-mendix-host");
const unmount = await mountEmbeddedMendix(container);

// Call this when the host view is removed.
unmount();
```

## Authentication

In the current Public Beta, embedded apps require [anonymous users](/refguide/anonymous-users/) to be enabled. The embedded client does not include a platform-level mechanism to pass the host application's authentication context to the embedded Mendix app. If your embedded scenario requires signed-in access, implement a custom authentication approach that fits your architecture and security requirements.

## CSS Behavior

The embedded client runs inside a shadow root so that its styles stay isolated from the host app.

To enable common app styling, Mendix rewrites CSS selectors that target `:root`, `html`, or `body` so they target `mx-app-container` instead. `mx-app-container` is the element that wraps the embedded client inside the shadow root. This allows CSS variables and other top-level styles to be applied inside the embedded app.

If a selector depends on attributes of `html` or `body`, those attributes are mirrored to the shadow root so those selectors can still work when the app is embedded.

`@font-face` declarations are handled differently. Because shadow roots do not support font declarations in the same way, Mendix moves those declarations to a `style` tag in the host page's `head`.

{{% alert color="info" %}}
Some custom CSS may behave differently in embedded apps. However, Atlas styling is supported.
{{% /alert %}}

## Embedded Navigation

An embedded app does not react to changes in the browser address bar or to the browser's back and forward buttons. This is because the embedded app runs as a component inside the host app, and the host app controls browser navigation.

The embedded Mendix app can still navigate internally. For example, it can open other pages by using [Show Page](/refguide/show-page/) actions or buttons that open a page. When the browser reloads, the Mendix app restarts as well, and the home page is shown.

## Cross-Origin Requests

If the host app and the Mendix runtime use different origins, make sure the Mendix runtime accepts requests from the host origin. This enables the host app to load the embedded bundle and subsequent client resources from the Mendix runtime. For more information, see [Configure CORS](/refguide/configure-cors/).

## Content Security Policy(CSP)

If the host app uses CSP, make sure its policy allows JavaScript to load from the Mendix runtime domain. This enables the host app to load the embedded bundle and other client resources from that domain. For more information, see [Content Security Policy](/howto/security/csp/).

## Cross-Site Cookies

Cross-site cookies must be enabled in the browser when the Mendix application is hosted on a different domain from the host application.

## Known Issues

### Optional Parameters

Omitting a parameter that is marked as optional from the `parameters` object will result in the fallback page being shown instead of the default value being passed.

## Read More

* [Mendix Client](/refguide/mendix-client/)
* [Mendix React Client](/refguide/mendix-client/react/)
* [Navigation](/refguide/navigation/)
* [Setting Up Navigation](/refguide/setting-up-the-navigation-structure/)
* [Configure CORS](/refguide/configure-cors/)
* [Content Security Policy](/howto/security/csp/).
