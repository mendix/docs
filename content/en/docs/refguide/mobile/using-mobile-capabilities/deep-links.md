---
title: "Deep Links"
url: /refguide/mobile/using-mobile-capabilities/deep-links/
weight: 20
description: Connect URLs to your native mobile app by adding a deep link.
aliases:
    - /howto/mobile/native-deep-link/
---

## Introduction

While URLs typically open websites, they can also open an installed app on your mobile device. Certain links can even open a specific page in an installed app on your mobile device. The technology that makes this possible is called deep linking. 

With this tutorial you will learn how to connect the URL `app://myapp` to your Mendix native app installed on your Android or iOS device. It is also possible to pass additional data using paths, query parameters, and hashes. Passing additional data could look like this: `app://myapp/task/123?action=close#info`. 

Deep links are always called or triggered within the schema that they define. For example, using `makeitnative://` instead of `http://` in the mobile browser would force the Make It Native app to open. 

A URL is constructed of these parts (everything after **path** is defined as a detail):

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-deep-link/url-parts.png" alt="url details" class="no-border" >}}

You can also register the handling of a normal weblink beginning with `http://` or `https://`. However this requires some more work for iOS, and is not covered in this tutorial. For iOS see [Universal Links: Make the Connection](https://www.raywenderlich.com/6080-universal-links-make-the-connection) by Owen L. Brown. Android does allow for both types of weblink handling out of the box. 

When an app is installed it registers the `schema` and optionally the `host` so its operating system knows which application should be opened when the URL is clicked. If you tap the link, the application will be opened whether it is running, running in the background, or closed.

Deep link registrations persist after the app is closed. Specifically, deep links are registered in the app manifest, which for Android production apps is read when the app is installed and for iOS apps is registered in the OS *info.plist* (which also makes the OS aware).

### Testing With the Make It Native App

For this tutorial, Mendix recommends running your app from source against a local instance of Mendix Studio Pro. This will save you time when rebuilding and redeploying your app. To do this, follow the steps in [Build a Mendix Native App Locally](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/) to make an app and link it to the Make It Native mobile testing app.

Please note that the Make It Native app has already the registered schema `makeitnative://` and can be used out of the box. To use the Make It Native app with that schema, see the [Using Deep Linking in Your App](#using-deep-linking) section below. If you want to change this schema, see [How to Create a Custom Developer App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/) to build your own custom developer app and then use the [Setting up App Deep Linking](#set-up) section below to change its schema.

{{% alert color="info" %}}
Mendix recommends testing deep links in a custom developer app or your own app build instead of the Make It Native app. When the Make It Native app receives a deep link, it reloads your app, which can show an error message in addition to the result of your deep link handling.
{{% /alert %}}

## Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* Complete the [Prerequisites](/refguide/mobile/getting-started-with-mobile/prerequisites/) of your app per its type
* Make sure your [Native Mobile Resources](/appstore/modules/native-mobile-resources/) module is up to date
* Install Git [command line](https://git-scm.com/downloads) tool for working with the Native Mobile App Builder CLI
* Install Mendix Studio Pro v 8.15.0 or above in order to use the Native Mobile App Builder

## Setting up App Deep Linking {#set-up}

If you do not already have a native template for your app, you can create one by following the section below.

### Using the Native Mobile App Builder

Set up a native template with the **Native Mobile App Builder** by following these instructions:

1. Launch the Native Mobile App Builder from the **App** menu. Walk through the wizard and configure the app's details and tokens (for more information, see [Build a Mendix Native App Locally](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/)):

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-deep-link/launch-native-mobile-app-builder.png" alt="launch native mobile builder"   width="400"  class="no-border" >}}

2. Once done with the wizard you will enable deep linking capabilities. First, select the **Capabilities** menu item:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-deep-link/capability-menu-option.png" alt="capability menu option"   width="400"  class="no-border" >}}

3. Enter the `schema` name without the appending `://`:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-deep-link/deep-link-input-field.png" alt="deep link input field"   width="400" >}}

4. Click the **Save** button. 
5. Navigate to the build page and click **Build**.

{{% alert color="info" %}}
When running locally from source, on iOS you have to run `pod install` once more
{{% /alert %}}

## Using Deep Linking in Your App {#using-deep-linking}

Now your app is ready to use links, so you will set up the additional path and query data handling. If you skip this section, the links to your app will just open the app. Nothing will be done with the additional data available in your URL.

### Native Deep Link Nanoflow Actions 

Now you have to handle the incoming URL in your Mendix application. To do this, you will use the Nanoflow Actions **Register Deep Link** and **Parse Url To Object** found in the [Native Mobile Resources](/appstore/modules/native-mobile-resources/) module. This module is automatically included in your app if it began as an up-to-date Starter App. If you do not see these actions available in your app, please update the module through the Marketplace.

#### Registering Deep Link

The Register Deep Link nanoflow action registers a callback nanoflow, which is called each time the app is opened using a URL. This **URL Handler** nanoflow will receive the URL, of type string, as an input parameter. 

{{% alert color="info" %}}
The name of the input parameter is case sensitive and can not be changed.
{{% /alert %}}

#### Parsing a URL To a Mendix Object {#parsing-url}

The Parse URL to Object nanoflow action will create a new Mendix object, split a URL, and set all the object attributes with their values. For example, the URL https://john.doe:secret@www.example.com:123/forum/questions/?tag=networking&order=newest#top has the following attributes and values:

| Attribute                                                   | Value                                                                                        |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| href                                                        | https://john.doe:secret@www.example.com:123/forum/questions/?tag=networking&order=newest#top |
| protocol                                                    | https:                                                                                       |
| hash                                                        | top                                                                                          |
| query                                                       | ?tag=networking&order=newest                                                                 |
| pathname                                                    | /forum/questions/                                                                            |
| auth                                                        | john.doe                                                                                     |
| host                                                        | www.example.com:123                                                                          |
| port                                                        | 123                                                                                          |
| hostname                                                    | www.example.com                                                                              |
| password                                                    | secret                                                                                       |
| username                                                    | john.doe                                                                                     |
| origin                                                      | https://www.example.com:123                                                                  |
| **Dynamically based on the number of slashes in the paths** | |
| path0                                                       | forum                                                                                        |
| path1                                                       | questions                                                                                    |
| **Dynamically based on the number of query keys**           | |
| tag                                                         | networking                                                                                   |
| order                                                       | newest                                                                                       |

### Using Utilities in Your App

Now that the **Native Deep Link** nanoflow actions are available in Studio Pro, you have the utilities to register and process an URL. You will now use them in your application:

1. In your app add the **App events** widget, which is also part of the Native Mobile Resource module, on your home page.
1. Double-click the **App events** widget. In **App events** tab, select **Page load** > **On load** > **Call a nanoflow**, and create a new nanoflow named *OL_RegisterDeepLink*:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-deep-link/app-events-register-deep-link.png" alt="app event register deeplink" class="no-border" >}}

    This nanoflow will be called only once when the app is started.

1. In the **OL_RegisterDeepLink** nanoflow, add the action **Register Deep Link**, and in that action's **Url handler** create an nanoflow named *DL_ShowUrlDetails*:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-deep-link/nanoflow-register-deep-link.png" alt="nanoflow register deeplink" class="no-border" >}}

    This nanoflow will be called every time the app is opened using a URL.

1. To parse the URL into an object, you need a non-persistable entity to hold the URL parts. The Native Mobile Resources module does not include this entity, so you create it yourself:

    1. In your module's domain model, add a non-persistable entity named *DeepLinkParameter*.
    1. Add a String attribute for each URL part your implementation requires, using the attribute names from the table in [Parsing a URL To a Mendix Object](#parsing-url). For this tutorial, add at least *Href* and *Host*. The attribute names are not case sensitive.

        You can also add attributes for query string keys (for example `?name=Jhon&title=sir`) and for path segments, which are split into `Path0`, `Path1`, and more. The image below shows an example:

        {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-deep-link/entity-parameter.png" alt="DeepLinkParameter entity with String attributes" class="no-border" >}}

    1. If your app has security enabled, configure the entity's access rules so that your user roles can create the entity and read and write its attributes.

Next you will implement the deep link handler nanoflow **DL_ShowUrlDetails** so that it can pass URL data:

1. In **DL_ShowUrlDetails** drag a parameter into your nanoflow's white space.
1. Double-click the parameter, give it the name *URL* (which is case sensitive) and the type **String**.
1. Add a **Parse URL to Object** activity to your nanoflow. Double-click it, set **Entity** to the **DeepLinkParameter** entity you created, and set **Object name** to *DeepLinkParameter*:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-deep-link/parse-url.png" alt="Parse URL to Object dialog" class="no-border" >}}

1. Add a **Show message** activity to the right of your **Parse URL to Object** activity.
1. Double-click the **Show message** activity.
1. In **Template** write *Your deep link callback URL {1} host = {2}*.
1. Click **Parameters** > **New**, write *$DeepLinkParameter/Href*, and click **OK**.
1. Click **Parameters** > **New**, write *$DeepLinkParameter/Host*, and click **OK**.
1. Right-click your **Parse URL to Object** activity, click **Set error handling**, and click **Custom without rollback**.
1. Drop an **End event** below your **Parse URL to Object** activity. Drag a line from **Parse URL to Object** down to the end event, right click it, and click **Set as error handler**.
1. Add a **Show message** activity to this line. Set it as type **Error**, and into template type *Failed to parse deep link data.* Your finished nanoflow will look like this:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-deep-link/deep-link-nano-full.png" alt="full nanoflow" class="no-border" >}}

### Testing Deep Linking

Add a few test links, for example `app://myapp/task/123` (or `makeitnative://task/123` for the Make It Native app), to a page in your app's responsive web navigation profile, then re-run your app. On your device, open the app in a browser by going to *{your local IP address}:8080*. Tap one of the links. Your device switches from the browser to your native app, and **DL_ShowUrlDetails** shows a message with the URL and its host.

### Opening a Specific Page {#open-page}

The message confirms that your app receives the URL. In most apps, you use the URL data to open a specific page instead. This example opens the details page of an invoice, based on an invoice number in the URL's query string, for example `app://myapp/invoice?number=INV-42`.

This example assumes that your app has an *Invoice* entity with a String attribute *Number*, and an *Invoice_Details* page with an *Invoice* page parameter. Your **DeepLinkParameter** entity also needs the String attributes *Path0* and *Number*. Because native apps are [offline-first](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/), the invoice must be synchronized to the device.

The table below shows where the parts of these URLs end up in the **DeepLinkParameter** object:

| URL                                 | Host    | Path0     | Path1 | Number   |
| ----------------------------------- | ------- | --------- | ----- | -------- |
| `app://myapp/task/123`              | `myapp` | `task`    | `123` |          |
| `app://myapp/invoice?number=INV-42` | `myapp` | `invoice` |       | `INV-42` |

The host is the same for every link to your app, so use **Path0** to decide which page to open, and use query parameters such as `number` to pass values.

To open the invoice instead of showing a message, extend **DL_ShowUrlDetails**. After **Parse URL to Object**, the nanoflow needs to do the following:

1. Check whether the link is meant for an invoice, which is the case when `$DeepLinkParameter/Path0` is `invoice`. Links meant for other pages then only open the app. For more information, see [Decision](/refguide/decision/).
1. Retrieve the invoice whose *Number* matches `$DeepLinkParameter/Number` from the database. For more information, see [Retrieve Object(s)](/refguide/retrieve-objects/).
1. Open *Invoice_Details* with the retrieved invoice, or show a message if no invoice was found. For more information, see [Show Page](/refguide/show-page/).

If you test with the Make It Native app, a link such as `makeitnative://invoice?number=INV-42` has `invoice` as its host, so check `$DeepLinkParameter/Host` instead of `$DeepLinkParameter/Path0`.

To test the example, add the link `app://myapp/invoice?number=INV-42` to your test page and tap it. Your app opens the details page of invoice INV-42.

## Read more

* [Build a Mendix Native App Locally](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/)
* [React Native Linking](https://facebook.github.io/react-native/docs/linking)
* [Deep Linking Android](https://developer.android.com/training/app-links/deep-linking)
* [Deep Linking iOS](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app)
* [Universal Linking iOS](https://developer.apple.com/ios/universal-links/)
* [URL Schema vs Universal Link](https://medium.com/wolox-driving-innovation/ios-deep-linking-url-scheme-vs-universal-links-50abd3802f97)
