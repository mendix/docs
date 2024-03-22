---
title: "Content Development Guidelines"
url: /appstore/creating-content/content-development/guidelines/
description: "Describes guidelines for developing content that you will submit to the Mendix Marketplace."
weight: 1
no_list: false
tags: ["marketplace", "content creation", "guidelines"]
---

## 1 Introduction

This documents presents guidelines for developing content that you will submit to the Mendix Marketplace.

{{% alert color="info" %}}
Submitted Marketplace content will be reviewed within five working days.
{{% /alert %}}

## 2 General {#general}

These are some general guidelines for creating new Marketplace content:

* Set up a separate app to build and maintain your Marketplace component
* Use a relatively recent Mendix version when creating the item, not only the latest Mendix version
* Create multiple versions of your Marketplace component (for example, for Studio Pro 8 and 9)

You can add information the end-user should know to the component [Documentation](#doc) when you are adding the content to the Marketplace.

## 3 Intellectual Property

When considering intellectual property (IP) in the Mendix Marketplace, follow these guidelines:

* Do not copy any text, names,or other data from other components published in the Marketplace, since you do not own the copyright. Do not create unnecessary ambiguity or confusion that would mislead users of Marketplace components.
* Do not mention components published by others within your content on the Marketplace. 
* Make sure your component documentation only includes intellectual property that you have created. Your component should not include information or content published by others on the Marketplace, as this may lead to removing your component from the Marketplace. This also means other components can also be removed if they are using your component information or content. 
* If you come across instances of intellectual property abuse, let us know at *AppServices_Supplier_Team@mendix.com*.

For more information, see [Apply IP Protection](/appstore/creating-content/sol-ip-protection/).

## 4 For Widgets

To develop widgets and submit them to Marketplace, follow these guidelines:

* The widget should be [pluggable](/howto/extensibility/create-a-pluggable-widget-one/)
* When writing variable and function names, use lowerCamelCase (for example, *mySecondVariable*)
* Add code comments
* Use descriptive variable and function names in both XML and JavaScript
* A function should not be more than 200 lines of code
* A function should only do one thing, and it should do it properly
* Use hooks and functional components over class components
* Create test pages for mobile when content is made for mobile platforms

## 5 For Modules

To develop modules and submit them to the Marketplace, follow these guidelines:

* Create a folder named **USE_ME** and add the microflows and pages that are relevant for the user
* Create an empty folder with the version number as its name, which will appear in Studio Pro's App Explorer
* Java dependencies
    * In versions Mendix 10.3.0 and above, use [managed dependencies](/refguide/managed-dependencies/) where possible. For versions below 10.3, ensure that Java dependencies are put in the `userlib` folder. You should also put any [unmanaged dependencies](/refguide/managed-dependencies/#unmanaged) (that is, non-publicly-available `.jar` files) in the `userlib` folder.
        * When putting `.jar` files in the `userlib` folder, make sure the name includes a version number (for example, `org.apache.commons.io-2.3.0.jar`) and is accompanied by a blank `{jarfile-including-version}.{module_name}.RequiredLib` file so that users know where the .*jar* files come from (for example, for the module *MyModule*, `org.apache.commons.io-2.3.0.jar.MyModule.RequiredLib`)

    {{< figure src="/attachments/appstore/sharing-content/userlibBlankFiles_boxed.jpg" width="400"  >}}

* Verify that the module's Java actions compile correctly (the easiest way to check is to create a deployment package, as it will clean the deployment folder and rebuild the app; for more information, see [Environments](/developerportal/deploy/environments/))
* Reduce the use of layouts and use snippets instead, which will result in fewer module dependencies and will reduce the number of potential errors (for example, missing layouts)
* Implement [user roles](/refguide/user-roles/) and [security](/refguide/security/)
* Creating a new release or module export should be done while the security level of the app containing the module is set to **Production**
* The [status](/refguide/app-security/#app-status) must be **Complete** for the following access: page, microflow, OData, entity, and dataset
* For example pages and microflows to be copied to another module, select the **Exclude from project** option for the document in order to encourage duplication and reduce dependency errors 
* Do not rename entities and attributes when creating new versions, as data in these entities will get lost (replacing an existing module is based on the entity names)
* The module must include the English language

## 6 Using a GitHub Repo {#github}

You can set up a GitHub repository to contain the development content for your Marketplace component, and you can share this repo URL as the component source on the [Package](#package) page in the submission process.

When setting up the GitHub repo for your component, follow these guidelines:

* Make sure the repo name matches the name that will be used for the published Marketplace component
* Use UpperCamelCase to replace the spaces in the name (for example, *MyFirstApp*)
* Make sure the repo description states what the component does (this description can also be used in the Mendix Marketplace)
* Add a *.gitignore* file to keep your repo clean

To create a new component release for the Mendix Marketplace, follow these steps:

1. Create a new tag on the appropriate commit on the production or release branch in your GitHub repo.
2. From this tag, create a [new release in GitHub](https://help.github.com/articles/creating-releases). 
3. In this GitHub release, provide an official name, and write the release notes. You can use these for the Marketplace release as well.
4. If you add the *.mpk* file as a binary file to the release tag, the Mendix Marketplace automatically syncs the *.mpk* to your new draft:

    {{< figure src="/attachments/appstore/sharing-content/github-releases.png" >}}

5. Link this GitHub release to the upcoming Mendix Marketplace release by mentioning the GitHub release number in the description. For more details, see the [Package](#package) and [Updating Existing Marketplace Content](#updating) sections below.

## 7 Mendix Partner Program

For more information on what this program offers, see [Mendix Component Partner Program](/appstore/partner-program/) and [Mendix Commercial Solution Partner Program](https://www.mendix.com/partners/become-a-partner/isv-program/).