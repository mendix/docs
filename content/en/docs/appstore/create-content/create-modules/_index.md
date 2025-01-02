---
title: "Create Modules"
url: /appstore/guidelines-creating-modules/
description: "Describes guidelines for creating modules in the Marketplace."
weight: 3
tags: ["marketplace", "content creation", "guidelines", "modules"]
---

## 1 Introduction

The guidelines to develop modules and submit them to the Marketplace as as follows:

* Create a folder named **USE_ME** and add the microflows and pages that are relevant for the user.

* Create an empty folder with the version number as its name, which will appear in Studio Pro's App Explorer.

* For Java dependencies, follow the following guidelines:

  * In versions Mendix 10.3.0 and above, use [managed dependencies](/refguide/managed-dependencies/) where possible. For versions below 10.3, ensure that Java dependencies are put in the `userlib` folder. You should also put any [unmanaged dependencies](/refguide/managed-dependencies/#unmanaged), that is, non-publicly-available *.jar* files, in the **userlib** folder.
    * When putting  *.jar*  files in the **userlib** folder, make sure the name includes a version number (for example, `org.apache.commons.io-2.3.0.jar`) and is accompanied by a blank `{jarfile-including-version}.{module_name}.RequiredLib` file so that users know where the .*jar* files come from (for example, for the module *MyModule*, `org.apache.commons.io-2.3.0.jar.MyModule.RequiredLib`).

  {{< figure src="/attachments/appstore/submit-content/userlibBlankFiles_boxed.jpg" width="400"  >}}

* Verify that the module's Java actions compile correctly. The easiest way to check is to create a deployment package, as it will clean the deployment folder and rebuild the app. For more information, see [Environments](/developerportal/deploy/environments/).

* Reduce the use of layouts and use snippets instead, which will result in fewer module dependencies and will reduce the number of potential errors (for example, missing layouts).

* Implement [user roles](/refguide/user-roles/) and [security.](/refguide/security/)

* Creating a new release or module export should be done while the security level of the app containing the module is set to *Production*.

* The [status](/refguide/app-security/#app-status) must be **Complete** for the following access: page, microflow, OData, entity, and dataset.

* For example pages and microflows to be copied to another module, select the **Exclude from project** option for the document in order to encourage duplication and reduce dependency errors .

* Do not rename entities and attributes when creating new versions, as data in these entities will get lost (replacing an existing module is based on the entity names).

* The module must include the English language.