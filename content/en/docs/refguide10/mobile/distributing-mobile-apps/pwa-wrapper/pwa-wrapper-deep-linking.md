---
title: "PWA Wrapper Deep Linking"
url: /refguide10/mobile/distributing-mobile-apps/pwa-wrapper/pwa-wrapper-deep-linking/
weight: 40
description: "How to implement deep linking in your PWA Wrapper app to enable inbound and outbound URL handling."
aliases:
  - /refguide10/mobile/pwa-wrapper/pwa-wrapper-deep-linking/
---

## Introduction

Deep linking enables users to jump directly to specific content in your app via URLs or schemes. PWA Wrapper supports two independent deep linking flows:

* Outbound: your Mendix app opens a URL or deep link (for example, jumping to another app)
* Inbound: the operating system launches your wrapped app via a registered deep link scheme, and the wrapper routes it into your app content

This guide covers both flows.

## Part 1: Outbound – Opening URLs and Deep Links

Use the **OpenDeepLink** JavaScript action to open external URLs or deep links from your nanoflows:

```
OpenDeepLink(url: string): Promise<boolean>
```

### Behavior

Behavior works as follows:

* **iOS and Android** – This returns `true` or `false` based on success, and catches errors and returns `false` on failure.

### Important Caveat

On both Android and iOS, the result of `OpenDeepLink` (true/false) indicates only that the call succeeded—not whether the target app could actually handle the link. Always test with the actual target apps you expect to open.

## Part 2: Inbound – Registering Deep Link Schemes and Hosts

Configure deep link schemes and hosts in the PWA Wrapper Builder during the app info step. The builder includes a **Deep Link editor** where you define which schemes and hosts your app should respond to.

### Adding a Deep Link Entry

Each deep link entry requires the following:

* **scheme** (required) – For example `myapp`, `pwa`, or `https`/`http` for universal/app links
* **host** (required) – Domain or authority to match, for example `example.com`
* **path** fields (optional, pick one at most):
  * **path** – Exact path to match (for example `/profile`)
  * **pathStartWith** – Path prefix to match (for example `/jump` catches `/jump/profile`)
* **linkFeature** – Free-text label (metadata only, affects HarmonyOS builds)
* **platform** – `Android`, `iOS`, `HarmonyOS`, `all`, or unset (unset or `all` applies to every platform)

### Common Deep Link Patterns

Here is an example of a **Custom scheme** (works everywhere, no domain ownership needed):

* scheme: `myapp`
* host: `example.com`
* path fields: empty
* Result: catches `myapp://example.com/...`

Here is an example of a **Universal Link / App Link scheme** (requires domain ownership):

* scheme: `https`
* host: `yourapp.com`
* pathStartWith: `/jump`
* Result: catches `https://yourapp.com/jump/*` from any context that supports it

## Part 3: What the Builder Configures Per Platform

The PWA Wrapper builder automatically registers your configured deep links with the operating system. You do not need to manually edit any native configuration files—the builder handles everything behind the scenes.

## Part 4: Domain Verification Files (Manual Setup Required)

{{% alert color="warning" %}}
For `https` scheme links (Android App Links and iOS Universal Links), the operating system requires verification files hosted on your own domain. The PWA Wrapper builder does not generate or host these files—you must create and publish them yourself.

Without these verification files, `https` links will open in the browser instead of the app. Android may display a disambiguation dialog; iOS Universal Links will fail silently.
{{% /alert %}}

### Android: assetlinks.json

Create and host `https://yourdomain.com/.well-known/assetlinks.json` on your web server. The file must meet the following criteria:

* Have a valid JSON
* Be served with `Content-Type: application/json`
* Be accessible via `https` only (not `http`)

Here is an example structure:

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.yourcompany.yourapp",
      "sha256_cert_fingerprints": ["AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78"]
    }
  }
]
```

To find your app's SHA-256 fingerprint, use `jarsigner` or the Android Studio Build Variants panel after signing your APK.

### iOS: apple-app-site-association

Create and host `https://yourdomain.com/.well-known/apple-app-site-association` on your web server. The file must meet the following criteria:

* Have a valid JSON (no `.json` extension in the path)
* Be served with `Content-Type: application/json`
* Be accessible via `https` only (not `http`)

Here is an example structure:

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "TEAM_ID.com.yourcompany.yourapp",
        "paths": ["/jump/*"]
      }
    ]
  }
}
```

The `appID` format is `TEAM_ID.BUNDLE_ID`. The `paths` array should match the paths you configured in the PWA Wrapper Builder.

### Hosting the Files

The `.well-known` directory must be accessible at the root of your domain via `https`. The two typical approaches are:

* Mendix Cloud – Upload the verification files to your Mendix Cloud environment's static file directory. Refer to [Mendix Cloud documentation](/developerportal/deploy/) for details on serving static files, or contact Mendix Support.
* Custom Domain or External Hosting – If your Mendix app is behind a reverse proxy or hosted on a custom domain, ensure the `.well-known` directory is properly configured to serve these files at the domain root.

### Testing File Accessibility

Verify your files are correctly hosted:

```bash
curl -I https://yourdomain.com/.well-known/assetlinks.json
curl -I https://yourdomain.com/.well-known/apple-app-site-association
```

Both should return HTTP 200 with `Content-Type: application/json`.

## Part 5: How Inbound Links Reach Your App Content

Once a deep link is caught by the wrapper, it is routed into your app's runtime. The exact process depends on the platform:

* Android: the wrapper loads the incoming deep link in the webview
* iOS: The wrapper loads the incoming deep link in the webview

{{% alert color="info" %}}
One implication of deep links is that your Mendix app's routing (pages, deep-link microflows, etc.) must be configured to handle the deep link URL.
{{% /alert %}}

## Common Deep Linking Pitfalls

When employing deep linking, watch out for the following pitfalls:

* Missing Verification Files – Forgetting to create and host `assetlinks.json` (Android) or `apple-app-site-association` (iOS) for `https` scheme links is the most common integration failure.
* Using `https` Without Domain Ownership – `https` scheme links require that you own and control the domain; do not use `https` for domains you do not own.
* Misinterpreting the `OpenDeepLink` Return Value – The Boolean result only indicates the call succeeded, not whether the target app successfully opened or handled the link.
* Mismatched Path Configuration – Ensure your `path` and `pathStartWith` values match the actual Mendix page URLs or `deep-link` microflow entry points your app exposes.

## Read More

* [PWA Wrapper](/refguide10/mobile/distributing-mobile-apps/pwa-wrapper/)
* [PWA Wrapper Capabilities](/refguide10/mobile/distributing-mobile-apps/pwa-wrapper/pwa-wrapper-capabilities/)
* [Build PWA Wrapper Apps](/refguide10/mobile/distributing-mobile-apps/pwa-wrapper/build-pwa-wrapper-apps/)
