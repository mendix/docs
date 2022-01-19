---
title: "App Switcher"
category: "Modules"
description: "Describes the configuration and troubleshooting of the App Switcher module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "app switcher", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [App Switcher](https://marketplace.mendix.com/link/component/119451) is a module that allows the end-user to see and switch between all the Mendix apps they have access to that are connected through Mendix SSO.

## 2 Prerequisites

- Mendix Studio Pro [9.6.1](/releasenotes/studio-pro/9.1) or higher
- [Mendix SSO module](/appstore/modules/mendix-sso) installed (we recommend having this module updated to the latest version)

## 3 Configuration

1. [Install](/appstore/general/app-store-content) the App Switcher module.
2. Configure the [user roles](/refguide/user-roles) to have access to the user AppSwitcherModule module role.
3. Add the App Switcher widget to the desired page or layout. You can find the widget in the **Add-ons** category in the **Toolbar**.
4. Make sure the end-user has to log in to Mendix SSO before accessing the page with the App Switcher widget.

## 4 Troubleshooting

- Failed to get an access token for user x
  - The token cannot be retrieved
  - Make sure Mendix SSO is correctly implemented and the user is logged into the application before accessing
  
- Failed to get custom authentication token for user x
  - This can happen for various reasons – check the `HTTPResponse` to see the possible reason:
    
    | Error Code | Reason | Solution |
    | ---------- | ------ |------ |
    | No error code | The App Switcher cannot communicate with the server. |Check if the `AppSwitcher_Base_URL` is correct or check Mendix Cloud Status.|
    | 400 | Bad request. The user ID does not match up or the wrong authentication token is being used. |Make sure Mendix SSO is correctly implemented.|
    | 401 | Authentication error. The custom auth token expired or the widget is calling a non-corresponding environment. ||
    | 404 | URL not found. |Make sure the URL is correct.|
    | 500 | Authentication error. This can occur if the user ID is empty. |Check the user ID.|
    | 560 | Exception. User does not have the correct access. |Make sure the user has access to the user module role in AppSwitcherModule.|
    
    
    