---
title: "Which Recorder Should I Use?"
url: /addons/ats-addon/rg-two-desktoprecorder/
---

## 1 Introduction

ATS supports recording via two options:

* The web recorder – [Mendix ATS Test Recorder](https://chrome.google.com/webstore/detail/mendix-ats-test-recorder/kblpnkkjafjgehchjgoacgobnbmfegcp) Chrome extension
* The desktop recorder – [ATS Recorder v2](https://chrome.google.com/webstore/detail/ats-recorder-v2/mkilokgbfghkjoflcagbfglpdmkkghbc), which consists of a Chrome extension and a desktop Java application

Both the web recorder and desktop recorder are maintaned. You can freely switch between them at any time in the **Project Preferences**.

{{% alert color="info" %}}
There is a known issue with the Desktop recorder that prevents it from communicating with ATS. We are working on resolving this issue asap. Because of this, at the moment, we recommend using the web recorder.
{{% /alert %}}

## 2 FAQ

### 2.1 How Do I Install the recorders?  

The instructions for installation and necessary files can be found via the info (🛈) dialog box in ATS.

### 2.2 What Platforms Are Supported for the recorders? 

Windows, Mac, and Linux are all supported. The Chrome browser is required.

### 2.3 Do I Need Administrative Privileges to Install the recorder?  

For the web recorder, permissions may be needed to install the Chrome extensions.

For the desktop recorder, in most cases, no additional administrative privileges are needed. However, the administrator may have restricted access to `registry eidting`, which is necessary for the installation. If this is the case, the following error will be displayed during installation: "ERROR: Registry editing has been disabled by your administrator." If you see this message, ask your system administrator to complete the installation or temporarily lift the restrictions on registry editing.

### 2.4. Can I Use the ATS Helper in Combination with the Desktop Recorder?

Yes. To install the [ATS Helper](/addons/ats-addon/rg-two-ats-helper/), you first need to start a recording. Then, in the new window, open ATS and install the ATS Helper from the info dialog box via drag-and-drop.
