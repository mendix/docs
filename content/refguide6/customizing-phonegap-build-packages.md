---
title: "Customizing PhoneGap Build packages"
category: "Mobile"
---


The Mendix App Platform integrates with the Adobe PhoneGap Build service to provide you with hybrid mobile apps that are ready to be installed on your devices or published to mobile app stores. One step in the integration is the creation of a PhoneGap package, and automatic upload of it to PhoneGap Build. We put a generic runtime into the package and configure it for your specific app. For most Mendix Apps, this is sufficient and convenient.

However, in rare cases you might want to customize the app. We provide the option to download the PhoneGap package yourself. This gives you the opportunity to customize it according to your needs. Afterwards, you can upload it manually to PhoneGap Build, and obtain the built packages from there.

### Downloading the PhoneGap Package

To download the PhoneGap package, follow these steps:

1. To download the PhoneGap package, publish your app for mobile app stores through the Developer Portal. 
2. Under **How should the device packages be build?** on the **Build Mobile App Store Packages** page, choose the non-default option "Generate the Adobe PhoneGap Build configuration. I will manage the build process manually myself."
3. Click **Download PhoneGap Build Package** to download the PhoneGap package.

### Customizing the PhoneGap Package

You can customize the PhoneGap package to your wishes. If you plan on uploading the package to PhoneGap Build manually, we recommend you follow [the documentation specific for PhoneGap Build](http://docs.build.phonegap.com/). Once you have customized your app according to your needs, you can upload it to PhoneGap Build to create mobile hybrid app packages.

Please note that any redirects in your application (for example, due to SSO) need to be [whitelisted](http://docs.phonegap.com/en/4.0.0/guide_appdev_whitelist_index.md.html) in the *config.xml*.
