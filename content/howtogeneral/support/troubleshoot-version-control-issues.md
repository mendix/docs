---
title: "Troubleshoot Version Control Issues"
category: "Mendix Support"
#description: ""
#tags: ["version control", "troubleshoot", "modeler"]
---

## 1 Introduction

The Mendix Modeler contains a version control system that supports working together with team members. This how-to list fixes that can be used when version control problems arise.


## 2 Known problems and their fixes

Below a list of known problems and fixes.


### 2.1 Getting an Error dialog that contains `SharpSvn.SvnAuthenticationException: Proxy authentication failed`

![Error dialog with proxy authentication failed](attachments/troubleshoot-version-control-issues/oopsproxy.png)

This means the Modeler has problems reaching the Version Control server because of a proxy server. The proxy settings can be changed in the Modeler by using menu `Edit` >  `Preferences...`, and from there selecting tab `Advanced`. In section `Proxy server` the proxy authentication settings can be changed. Fill in the correct user name and password for the proxy server.

![Proxy settings dialog](attachments/troubleshoot-version-control-issues/proxysettings.png)


### 2.2 Getting an Error dialog that contains another `SharpSvn.SvnAuthenticationException`

If your Modeler version is 7.18 or higher:
* Sign out and sign back in.

If your Modeler version is lower than 7.18:
* Remove all files from folder `\Users\<your username>\AppData\Roaming\Subversion\auth\svn.simple`.
* Remove all files from folder `\Users\<your username>\AppData\Local\Mendix\svnconfig\auth\svn.simple`.


### 2.3 Error dialog with message `Connection timed out`

If your Modeler version is 7.18 or higher:
* Open file `\Users\<username>\AppData\Roaming\Subversion\servers` with any text editor.
* Add the text `http-timeout = 5000` under section `[global]` and save it.


## 3 Other problems

If the solutions here do not work, please submit a request with Mendix Support at [support.mendix.com](https://support.mendix.com/).


## 4 Related Content

*   [How to Submit Support Requests](how-to-submit-support-requests)



