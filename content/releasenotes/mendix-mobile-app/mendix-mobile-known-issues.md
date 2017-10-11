---
title: "Mendix Mobile App Known Issues"
category: "Mendix Mobile App"
toc-level: 1
---

{{% alert type="info" %}}
For details on each release, see [Mendix Mobile App Release Notes](index).
{{% /alert %}}

## Known Issues

* Mendix hybrid apps (loaded using, for example, the QR scanner or the manual app loading screen) are not able to use the barcode scanning widget. Using the barcode scanning functionality from within an app-specific hybrid app (meaning, one built using the mobile app flow from the Mendix Developer Portal) should not pose any problems.
* On iOS 11, loading one of the sample apps or loading an app using the QR scanner will crash the application. 
    * Fixed in [4.4.1](index#RN441).
