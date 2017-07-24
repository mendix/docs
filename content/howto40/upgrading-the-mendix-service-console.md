---
title: "Upgrading the Mendix Service Console"
parent: "preparation-of-the-environment"
---
On each machine, there is one instance of Mendix Service Console 4 or later. If you install a new version, the old version will be replaced by the new version.

Do not worry about the current running app services. Each installed service has it's own binaries. If you update the Mendix Service Console, the binaries of each service will be unaffected. When you restart the service, these unaffected binaries are still used.

Only when you reinstall the service for an app, the binaries will be replaced by the ones of the new Mendix Service Console version. This is not needed, unless the release notes indicates this or the Mendix Service Console itself notices you about this.

It is always a good practice to backup the apps folders before you upgrade the Mendix Service Console, so you can always restore a previous version of the app or the service.

It is possible to go back to an earlier version of the Mendix Service Console by simply install that version. The current version will be replaced by the earlier version.
