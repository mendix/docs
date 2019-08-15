---
title: "Native Builder"
category: "Mobile Products"
menu_order: 50
toc-level: 1
description: "Native Builder release notes."
---

The [Native Builder](/howto/mobile/native-builder) is a command line input tool which helps you build your Mendix native app. After the Native Builder simplifies your build process, you can do what you want most: test and publish your app. The Native Builder uses MxBuild, GitHub, and App Center to simplify the app building process. 

We are heavily invested in streamlining the experience of building your apps and are continuously improving upon the tool's capabilities. For more information on using the Native Builder, see [How to Package Native Apps using Native Builder](/howto/mobile/native-builder).

## 2019

### August 15th, 2019 (1.0.0)
* Use of Github templates rather than forking to create a unique repository for each app. This allows for better build management as a separate repository can be created per app.
The repository created from the Github template is private by default.
* Added the optional `output-path` parameter to allow defining the location where artifacts should be outputed. Sufficient access rights to that location need to have been provided.

### August 1st, 2019 (0.1.0)
* Initial release of Native Builder.
