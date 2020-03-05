---
title: "General Info"
description: "Describes various features of Mendix Studio."
menu_order: 10
tags: ["studio", "studio pro"]
---

## 1 Introduction {#studio-overview}

Mendix Studio is the place where you can create, view and edit your Mendix applications without going into technical details. For this purpose you can use the [Studio Pro](/refguide/modeling) and [develop apps together with Studio Pro users](general-collaborative-development) anytime. 

With Studio you can create and edit applications in your browser without installing software on your PC.   

The picture below shows the components of Studio's interface:

![](attachments/general/home-page.png)

## 2 Opening Studio

### 2.1 Opening Studio via the Developer Portal {#opening-studio-via-dev-portal}

You can edit an app in Mendix Studio by opening your app in the [Developer Portal](https://home.mendix.com) and clicking **Edit App** or choosing the **Edit in Studio** option in the drop-down menu of the **Edit App** button. 

{{% image_container width="350" %}}![](attachments/general/edit-app-button.png)
{{% /image_container %}}

{{% alert type="warning" %}}

The drop-down menu on the **Edit App** button is only available for **Free Apps**.

Some apps are not suitable for Studio. The following ones are not suitable to run in Studio:<br />

* Apps below **Mendix 7.5** version<br />
* Apps that are not based on the Atlas UI framework

{{% /alert %}}

When Studio is not enabled, you can click **Edit App** > **Settings**. For more information, see [Developer Portal Settings](../../developerportal/settings/).

![](attachments/general/not-enabled.png)

{{% alert type="info" %}}
Only Scrum Masters or custom **App Team roles** with the **App Settings** permission are allowed to enable Studio.
{{% /alert %}}    

On the **Settings** page, Studio can be enabled by upgrading the existing theme of the app to the [Atlas UI](../../howto/front-end/atlas-ui) theme.

![](attachments/general/enabling.png)

### 2.2 Opening Studio via Studio Pro

You can also open your app in Studio via Studio Pro. Do the following:

1. In Studio Pro, open the project in that you want to view in Studio.

2.  Click the globe icon in the top right corner (only available if Studio is enabled).

    ![](attachments/general/globe-icon.png)


The app opens in Studio.

## 3 Studio Upgrade

After clicking **Edit in Studio** you may need to upgrade your app to the latest version.

{{% image_container width="350" %}}![](attachments/general/upgrade.png)
{{% /image_container %}}

{{% alert type="info" %}}
When you upgrade your app in Studio to the latest  Mendix version, you will need to upgrade your app in the Studio Pro to the same version as well. 

If you are working in a team with others, it is wise to check with your team members if everyone is OK to upgrade the app to the latest Mendix version. The reason for this is that once you update Studio, you need to update Studio Pro as well.

{{% /alert %}}

## 4 Switching App Modes

After opening Studio,  the home page of the app opens. 

You can change the view of your page to different views by clicking the corresponding icons:

*  Mobile
*  Tablet
*  Responsive (Desktop)    

	{{% image_container width="350" %}}![](attachments/general/view.png)
	{{% /image_container %}}

## 5 Left Menu Bar

The left menu bar provides the following options:

{{% image_container width="350" %}}![](attachments/general/left-menu-bar.png)
{{% /image_container %}}

| Menu item                            | Shortcut     | Description                                                  |
| ------------------------------------ | ------------ | ------------------------------------------------------------ |
| Mx Logo                              | None         | The Mx logo is the return button to return to the [Developer Portal](https://home.mendix.com) of the app. |
| [Pages](page-editor)                 | 1            | Shows a list of all pages in the app. After you select a page, it opens in Studio. |
| [Domain Models](domain-models)       | 2            | Shows the domain models of the app.                          |
| [Microflows](microflows)             | 3            | Shows a list of all microflows in the app.  After clicking a microflow, it will open in Studio. |
| [Navigation Document](navigation)    | 4            | Shows a configured menu in the form of a navigation tree. You can expand the menu structure of the navigation tree up to two levels with an unlimited amount of pages. |
| Search (magnifying glass) icon       | <kbd>/</kbd> | Helps you search through microflows, entities, and pages. Start typing the name of the item you are looking for and the search feature will return any matches it finds, using exact matches as well as fuzzy matches based on the characters entered. <br />You can also use "/" shortcut to search through your app. |
| [Settings](settings)                 | None         | **Settings** consists of **Roles and Permissions** and **Widget Overview**. <br />Via **[Roles and Permissions](settings-security)** you can manage access to your app for different type of users.  <br />The [**Widget Overview**](settings-widget-overview) gives you an overview of all widgets and their status. Widgets are user interface elements (alerts, buttons, charts, etc.) that are used to build pages. |
| [Theme Customizer](theme-customizer) | None         | Here you can style your app with custom branding, colors, and typography. |

## 6 Toolbox, Properties, and Buzz

The top right menu of Studio consists of the **Toolbox**, **Properties** , and **Buzz** tabs. 

![](attachments/general/toolbox-properties-buzz.png)

| Tab        | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| Toolbox    | Shows tools available for the current editor.                |
| Properties | Shows the properties of the selected item.                   |
| Buzz       | Allows an app development team to make comments to different pages, microflows, domain models, and navigation layouts of Studio, and interact with each other. |

## 7 Top Bar

The top bar provides the following options:

![](attachments/general/top-bar.png)

| Top bar item | Description |
|------|------|
| Status icon | Shows the internet connection status of Studio. If  status is green, Studio is connected. When grey, Studio is offline. |
| Undo/Redo actions | Undo or redo the last action. You can also use Ctrl+Z and Ctrl+Y shortcuts correspondingly. |
| Recent documents drop-down menu | A document that you are currently viewing is displayed in this option. When you click the drop-down menu, documents that you have recently viewed are displayed in the list. You can click the document to open it. |
| [Publish button](publishing-app) | Deploy and run the app. Update your app to deploy the latest changes you made in Studio. Once deployed, click **View** to view your app in action. For more information, see [Publishing Your App](publishing-app) |
| [Checks button](checks) | Shows the errors and warnings currently in your app. If there are any errors in the app, you will not be able to publish your app, until you have solved them. For more information on errors, see [Consistency Errors](consistency-errors).<br />You can also use C shortcut to view the **Checks** panel. |
| Information icon | Here you can find following information:<ul><li>**About** – shows the information on the [Studio version and Mendix version](general-versions) </li><li>**Keyboard Shortcuts** – opens the list of shortcuts in Studio</li><li>**Take a Product Tour** – starts a  the guided product introduction tour and shows you around Studio</li><li>**Ask the Community** – a link to the [Mendix Forum](https://forum.mendixcloud.com/index4.html) where you can ask questions and explore the knowledge offered by the entire Mendix Community<li>**Check the  Documentation** – a link to the [Studio 7 Guide](index)</li><li>**Contact Mendix Support** – a link to the [Mendix Support Portal](https://support.mendix.com/hc/en-us)<li>**Mendix Academy** – a link to the [Mendix Academy](https://gettingstarted.mendixcloud.com)</li><li>**Mendix Assist Is ON** – a setting that enables/disables [Mendix Assist](mx-assist)</li><li>**Edit in Studio Pro** – opens your app in Studio Pro</li></ul> |

## 8 Cut/Copy/Paste Function 

Cut/copy/paste function is available in all editors of Studio: pages, microflows, domain models, and navigation. To cut/copy/paste you can use <kbd>Ctrl</kbd> + <kbd>Z</kbd> /  <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Ctrl</kbd> + <kbd>V</kbd> or  <kbd>Cmn</kbd> + <kbd>Z</kbd> /  <kbd>Cmd</kbd> + <kbd>C</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd>. 

Mind the following characteristics when using cut/copy/paste:

* You can cut/copy/paste elements within one editor; that means that you can cut/copy/paste elements within one page or to other pages in Studio, and copy microflow activities within one microflow or to other microflows
* You can cut/copy/paste elements to different apps in Studio if they have the same Mendix version
* You cannot copy/paste pages or microflows, only elements of a page or a microflow 
* You cannot cut/copy/paste from Studio to Studio Pro

## 9 Read More

* [Domain Model](domain-models)
* [Microflows](microflows)
* [Pages](page-editor)
