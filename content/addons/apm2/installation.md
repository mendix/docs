---
title: "User Manual"
space: "Other Add-Ons"
category: "APM"
---

# APM Installation manual #

This is the installation manual for the Mansystems APM 2.

* Before using APM 2, create a database backup and have a backup deployment ready.
* APM 1 and 2 can be installed side-by-side. To uninstall the APM 1 module, see the APM 1 documentation.
 
##  Installation: ##
1. Arrange a license for the App to use APM.
2.  Login to the APMManager on [https://apmmanager100.mendixcloud.com](http://apmmanager100.mendixcloud.com) using your Mendix account. 
3. Select your app in the dashboard.
4. In the environments dashboard, select the *New Environment* tile.
   If you are Scrum Master of the Mendix Sprintr project you can add Test, Acceptance, and Production environments. If you are not an Admin, you can only add Modeler environments.
5. Choose an environment name. 
6. Click the button *Generate API key*, and use this key as value for the constant *APMAgent.APMAPIKey*.
7. Import the APM module from AppStore.
8. Add or set the micorflow *USE_ME/AfterStartup* to your Apps *After startup* microflow.
9. Copy the widget from *CopyPasteAPMBrowserWidget* to the layout(s) of your App. (It will only be loaded once, regardless of how many times the user opens a page, containing the widget.)
10. Verify the *APMAgent.APMManagerURL* constant is set to: https://apmmanager100.mendixcloud.com (After beta release this constant will get a default value) 
11. Before testing in the Mendix Modeler, use the *Clean deployment directory* option.
12. In Cloud v3, allow request handler */apm*.

