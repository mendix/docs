---
title: "Dependencies Tab"
url: /refguide/dependencies-tab/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This tab can be used to view the managed dependencies in your app in one place and to manage the dependencies in the userlib directory.

### Overview

This shows all the direct managed dependencies in your app listed by group and artifact. It shows which versions of the dependencies you have and which modules they are coming from. If your app reports multiple versions of the same group and artifact, the highest version is used, so having multiple versions of a dependency is not necessarily a problem.

### Managed Dependency Exclusions

This shows all the managed dependencies in your app listed by package name. This overview includes both direct and transitive dependencies. If you have conflicts between different dependencies, you can uncheck any files that you want to exclude. Ensure you leave at least one dependency which supports any calls made by your app or its dependencies.

### Userlib Exclusions

This shows the libraries from the userlib directory and allows you to exclude them from deployment. Use this, for example, if there is an add-on module that ships with a different version of a library that is already in your userlib folder.