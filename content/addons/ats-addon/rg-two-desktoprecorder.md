---
title: "Which Recorder should I use"
parent: "rg-two-ats"
---

## Background

ATS supports recording via a standalone [chrome extension](https://chrome.google.com/webstore/detail/mendix-ats-test-recorder/kblpnkkjafjgehchjgoacgobnbmfegcp) (lets refer to this as the *web* recorder).
In order to perform its function the chrome extension needs you permissions to monitor events triggered by the user on the page that is being recorder as well as gather information about those events.
For example, ATS would register that you have clicked a button and retrieve the caption and locator for that button. The purpose of the data collection is to prepare an automated test case.
It is easy to see that without this data the recorder will not be able to function.

At the end of July 2019, Google has announced a [new extension policy](https://blog.chromium.org/2019/07/project-strobe-updates.html) that limits the ability to gather information.
The policy is to be enacted on **15 October 2019**. The *web* recorder is incompatible with the new policy and can not function under the new rules.

## How do we intend to work around this issue?

Starting from 26 September 2019 we will release a new recorder (lets refer to it as *desktop* recorder).
As the name suggests this recorder is a desktop application, which is powered by java.
The desktop application will run in the background and only when you initate recording from ATS will it activate.
Once activated, the recorder will start a new chrome window on your computer and will record your activity in this window and send the recorder events to ATS.
To make sure that there is no confusion between the two browser windows, the one started by the recorder will display a large banner on top.
The banner will state very clearly that the chrome window is being controlled by automated test software.

The communication between the desktop application and ATS will commence through a [chrome extension](https://chrome.google.com/webstore/detail/ats-desktop-recorder/bbhjdcfbnbpoffamjgjkfionmnhciife).
This extension only needs permissions to talk to the desktop application mentioned above. Therefore it is in compliance with the new Google extension policy.

To summarize, the desktop recorder consists of two components, a desktop java application and a chrome extension (which is different than the *web* recorder extension).

## What is our plan going forward?

For the time being we will offer both the *web* and *desktop* recorders. You can freely switch between them at any time in the **Project Preferences**.
We will try to keep the current i.e. *web* recorder for as long as possible.
However, it is very likely that from 15 October 2019 it will no longer be available in the chrome web store, at which point the desktop recorder will be the only available option.

Therefore we recommend that you switch to the new *desktop* recorder as early as possible.
The reason for this is that if you encounter an issue, you can still use the *web* recorder while we work on a fix.

## FAQ:

Q: How can I install the desktop recorder?  
A: The instructions and neccesaary files can be found in the info 🛈 dialog in ATS?

Q: What platforms are supported for the desktop application?
A: Windows, Mac and linux are all supported.

Q: Do I need administrative privileges to install the desktop application?
A: No, the installation does not require that you have administration privileges.





