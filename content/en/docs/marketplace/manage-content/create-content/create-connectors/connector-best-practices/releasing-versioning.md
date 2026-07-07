---
title: "Releasing and Versioning"
url: /appstore/creating-content/best-practices/releasing-versioning/
weight: 14
---

## Introduction

This section addresses best practices for releasing your connector and using a versioning system. For the basic instructions for releasing, versioning, and distributing your connector, see the [Exporting the Connector](/appstore/creating-content/connector-guide-build/#export) and [Distributing the Connector](/appstore/creating-content/connector-guide-build/#distribute) sections of *Creating Connectors*. 

## Releasing

Ensure a new release includes the following:

* An easy upgrade path
* The version number of the package

## Versioning {#versioning}

The [Updating Existing Marketplace Content](/appstore/submit-content/#updating) section of *Uploading to the Marketplace* provides explanations of the recommended versioning system. The following points go into more detail on the versioning number system:

* Major version — This is the first digit. This number goes up when you release major breaking changes, or at the very least a major new feature, as part of your connector. Determining what is major is up to you. You can deploy minor/patch versions for older major versions when you have bugs that need resolving.

* Minor version — This is the second digit. This number goes up when you release minor changes that do not break backwards compatibility, and that fix some bugs, or add small new features. Depending on your development cycle, this could be intermediate releases in smaller batches.

* Patch version — This is the third digit. This number goes up when you really have to patch a bug for a specific version and it cannot be released as part of your next major or minor version. While it is allowed to add new patch versions to older major versions, you cannot add patch versions to older minor versions within the Marketplace.
