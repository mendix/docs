---
title: "PWA Service Worker"
url: /refguide/mobile/introduction-to-mobile-technologies/pwa-service-worker/
weight: 20
---

## Introduction

A service worker is a specialized type of web worker, essentially a JavaScript file that runs in the background, separate from your main web page. It can control pages within its [scope](#scope), and acts as a proxy between your progressive web app (PWA) and the network.

A service worker's primary role is to intercept network requests made by your PWA and decide whether to fetch resources from the network or serve them from the cache. This interception capability is crucial for providing robust offline experiences, and enables your PWA to function even when the user has no network connectivity. 

## Service Worker Scope {#scope}

A service worker’s scope is determined by the location of its JavaScript file on the web server. For example, if a service worker runs on a page located at `/subdir/index.html` and is located at `/subdir/sw.js`, then the service worker's scope is `/subdir/`.

Scope limits which pages are controlled by a service worker, not which requests it can intercept. Once a service worker controls a page, it can intercept any network request that page makes, including requests to cross-origin resources.

## Service Worker Lifecycle

To understand how updates to your Mendix PWA are handled, you need to understand the service worker lifecycle. A service worker goes through several distinct phases:

1. **Registration** — In this step the browser downloads the service worker file. If the code contains syntax errors, registration fails and the service worker is discarded.
2. **Installation** — During this phase, the service worker typically caches static assets your PWA needs to function offline. If all assets are successfully pre-cached, the installation succeeds. If installation fails, the service worker is discarded.
    * Once installed:
        * It becomes activated immediately if no other service worker is currently controlling the page.
        * If there is already an active service worker, the new one will be installed but enters a **Waiting** state. The **Waiting** state, ensures that updates to your application are delivered smoothly and without interrupting your users' current interactions.
3. **Activation** — Once installed, the service worker enters the **Activating** state, and then becomes **Activated**. An **Activated** service worker takes control of pages within its scope (meaning it is ready to intercept requests).
4. **Redundant** — A service worker can become redundant if a new version replaces it, or if it fails to install.

## Waiting for Service Worker Readiness

Mendix recommends waiting until the service worker is ready before performing operations that rely on it, such as interacting with the app while offline. 

The browser provides the [ready](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready) property, which returns a **Promise** that resolves when a service worker is active to ensure that the service worker is fully initialized and that precaching of assets is complete so the app can work offline:

```javascript
export async function waitForAppReady() {
    if (!('serviceWorker' in navigator)) {
        console.warn('service workers are not supported in this browser.');
        return;
    }
    const registration = await navigator.serviceWorker.ready;
    
    console.log('A Service Worker is active:', registration.active);
    // At this point, a service worker is active. 
    // A page reload is necessary to ensure all assets are served by the new service worker and the app is fully offline ready
}
```

## Service Worker Update

When you deploy a new version of your Mendix PWA, a new service worker file is generated with updated caching strategies and assets list.
The browser detects this update and initiates a new lifecycle for the updated service worker.

1. New service worker installation: The new service worker starts to install and cache assets.
2. Waiting state: Once the new service worker is successfully installed, it enters a waiting state. The old service worker remains active and in control of your PWA.
3. Activation of the new service worker: The new service worker will only activate when all instances of your PWA (all open tabs or windows) that are controlled by the old service worker are closed.  

## Detecting and Handling Updates in Your PWA

The [ServiceWorkerRegistration](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration) interface provides properties and methods to monitor its state and detect updates. In Mendix 11.9.0 and above, a Client API [method](https://apidocs.rnd.mendix.com/11/client-mx-api/module-mx-api_pwa.html) is available to skip the waiting phase and immediately activate the new service worker version: `SkipWaiting()`.

You can implement a custom update mechanism to provide a clear notification and an option to update to the latest version of your app in that same notification. This allows them to update the application without closing all tabs or windows:

1. **Listen for service worker updates** — Create a JavaScript Action to listen for service worker updates. This action should run when your application starts up, for example, calling the JavaScript action via nanoflow that triggers by [Events](/appstore/widgets/events/) widget:

```javascript
export async function JS_ListenForPWAUpdates() {
    if (!('serviceWorker' in navigator)) {
        console.warn('service workers are not supported in this browser.');
        return;
    }

    try {
        const registration = await navigator.serviceWorker.getRegistration();

        if (registration) {
            // Detect when a new service worker update is found
            registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;

                if (newWorker) {
                    // Listen for state changes in the new service worker
                    newWorker.addEventListener('statechange', () => {
                        // New service worker is installed and ready.
                        if (newWorker.state === 'installed'){
                            //  The new service worker is waiting because an existing service worker is active
                            if(navigator.serviceWorker.controller) {
                                console.log('A new update is available. Notify the user.');
                                // Show a confirmation dialog or implement your custom update UI 
                                // to notify the user that an update is available                        
                            } else {
                                console.log("Service Worker installed and ready.");
                                // This is the first time a service worker is installed and activated for this page.
                                // A page reload is necessary to ensure all assets are served by the new service worker and the app is fully offline ready
                            }
                        }
                    });
                }
            });

            if (registration.waiting) {
                console.log('An update is already available and waiting. Notify the user.');
                // Show a confirmation dialog or call your custom update flow
                // to notify the user that an update is available
            }
        }
    } catch (error) {
        console.error('Error setting up service worker update listener:', error);
    }
}
```

1. **Create a JavaScript Action to activate the new service worker** — When the user confirms the update, use the Client API `skipWaiting()` to activate the new service worker:

```javascript
import { skipWaiting } from "mx-api/pwa";

/**
 * @returns {Promise<boolean>} A promise that resolves to true if the update was successfully activated and page reloaded, false otherwise.
 */
export async function JS_ActivatePWAUpdate() {
    const activated = await skipWaiting();

    if (activated) {
        console.log("New service worker activated and controlling the page.");
                
        return true;
    } else {
        console.warn("No waiting service worker found or activation failed via Mendix API.");
        return false;
    }
}
```

1. **Notifying users** — To not interrupt users during critical operations, Mendix recommends notifying them when an update becomes available. For example, you can implement a nanoflow that prompts users to confirm the update when a new version is detected. If the user confirms, the nanoflow can call `JS_ActivatePWAUpdate` to update. This nanoflow can be passed as a parameter to `JS_ListenForPWAUpdates`, which will invoke it when an update is detected.
2. **Reload the Application** — Trigger a reload, or ask users to reload all open tabs or windows to ensure the application loads with the newly activated service worker.
