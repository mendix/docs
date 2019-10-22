---
title: "Which Recorder Should I Use?"
parent: "rg-two-recorder"
---

## 1 Introduction

ATS supports recording via the standalone [Mendix ATS Test Recorder](https://chrome.google.com/webstore/detail/mendix-ats-test-recorder/kblpnkkjafjgehchjgoacgobnbmfegcp) Chrome extension (this will be referred to as the "web recorder" throughout this document).

To perform its function, the Chrome extension needs permissions to monitor events triggered by the user on the page that is being recorded as well as to gather information about those events. For example, ATS registers that you have clicked a button and then retrieves the caption and locator for that button. The purpose of such data collection is to prepare an automated test case. Without this data, the recorder would not be able to function.

In July 2019, Google announced a new extension policy via a blog post entitled [Project Strobe: Updates to Our User Data Policy](https://blog.chromium.org/2019/07/project-strobe-updates.html) that limits the ability to gather information. This policy is to be enacted on **October 15th, 2019**. The web recorder is incompatible with the new policy and cannot function under the new rules.

## 2 How Do We Intend to Work Around This Issue?

On **September 26th, 2019**, we released a new recorder (this will be referred to as the "desktop recorder" throughout this document). This recorder is a desktop application that is powered by Java. It runs in the background, and it will only activate when you initiate the recording from ATS. Once activated, the recorder starts a new Chrome browser window on your computer, records your activity in this window, and sends the recorded events back to ATS.

To make sure that there is no confusion between the two browser windows, the one started by the desktop recorder will display a prominent banner that states, "The Chrome window is being controlled by automated test software".

The communication between the desktop application and ATS will commence through the [ATS Desktop Recorder](https://chrome.google.com/webstore/detail/ats-desktop-recorder/bbhjdcfbnbpoffamjgjkfionmnhciife) Chrome extension. This extension only needs permission to talk to the desktop recorder, and it therefore complies with the new Google extension policy.

To summarize, the desktop recorder consists of two components: a desktop Java application and the ATS Desktop Recorder Chrome extension (which is different than the web recorder extension).

## 3 What Is Our Plan Going Forward?

Both the web recorder and desktop recorder will continue to be offered. You can freely switch between them at any time in the **Project Preferences**.

We will try to keep the web recorder available for as long as possible. However, it is very likely that from **October 15th, 2019**, it will no longer be available in the Chrome Web Store, at which point the desktop recorder will be the only available option.

Therefore, we recommend switching to the new desktop recorder as early as possible. The reason for this is that if you encounter an issue, you can still use the web recorder while we work on a fix.

## 4 FAQ

### 4.1 How Do I Install the Desktop Recorder?  

The instructions for installation and necessary files can be found via the info (🛈) dialog box in ATS.

### 4.2 What Platforms Are Supported for the Desktop Recorder? 

Windows, Mac, and Linux are all supported.

### 4.3 Do I Need Administrative Privileges to Install the Desktop Recorder?  

In most cases, administrative privileges are not needed to install the desktop recorder. However, the administrator may have restricted access to `registry eidting`, which is necessary for the installation. If this is the case, the following error will be displayed during installation: "ERROR: Registry editing has been disabled by your administrator." If you see this message, ask your system administrator to complete the installation or temporarily lift the restrictions on registry editing.

## 4.4. Can I Use the ATS Helper in Combination with the Desktop Recorder?

Yes. To install the [ATS Helper](rg-two-ats-helper), you first need to start a recording. Then, in the new window, open ATS and install the ATS Helper from the info dialog box via drag-and-drop.
