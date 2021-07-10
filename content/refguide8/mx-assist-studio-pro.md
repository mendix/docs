---
title: "MxAssist Logic Bot"
parent: "microflows"
description: "Describes MxAssist Logic Bot in Mendix Studio Pro."
tags: ["studio pro", "mendix assist", "AI", "assistant", "mx assist logic bot", "logic bot"]
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/mx-assist-studio-pro.pdf).
{{% /alert %}}

## 1 Introduction 

MxAssist Logic Bot is an AI-powered virtual co-developer bot that helps you to model and configure your application logic (microflows) in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity in your microflow based on the already designed activities, parameters, and other context-related information. 

MxAssist Logic Bot is built using machine learning analysis of over twelve million anonymized application logics (microflows)*—*built with Mendix*—*to detect and learn the best practice patterns in microflows.

The key features of MxAssist Logic Bot are the following: 

* **Next best action suggestion** – it recommends the top five next best activities out of more than 40 different options with accuracy of 95%. 
* **Auto-configuration** – it does not only provide next best action, but automates the development further by pre-populating the parameters for such action.
* **Contextual  suggestions** – it derives context in different ways, including by 'looking' left and right in a microflow when the developer inserts a new activity or decision mid-flow; and by inferring the context using the page where it is called from.  
* **High accuracy** – continuous improvement and training of the model has elevated the accuracy level from 95%.

## 2 MxAssist Logic Bot Settings

To access settings of MxAssist Logic Bot, open **Edit** > **Preferences** >the **MxAssist Logic Bot** section. For more information, see [Preferences](preferences-dialog).

In the **MxAssist Logic Bot** section, you can set the following: 

* **Enable MxAssist Logic Bot** – switches MxAssist Logic Bot on and off

* **Show suggestions for system variables** – when enabled, MxAssist Logic Bot will make suggestions for system objects (for example, it can suggest that you change such objects as **currentUser** or **currentSession**):

  ![Suggestions for System Variables](attachments/mx-assist-studio-pro/mx-assist-system-variables.png)

For more information on preferences, see [Preferences](preferences-dialog).

## 3 Using MxAssist Logic Bot to Build Microflows

MxAssist Logic Bot is enabled by default and is displayed as a blue dot in the flow of a [microflow](/refguide8/microflows). A bow-tie appears on the dot when you hover over it:

{{% image_container width="350" %}}![Logic Bot Icon](attachments/mx-assist-studio-pro/mendix-assist-icon.png){{% /image_container %}}

It is possible to add elements to the microflow in a regular way without using MxAssist Logic Bot, however, MxAssist Logic Bot helps you add elements to the microflow faster as it suggests a short list of the most relevant activities. 

To use MxAssist Logic Bot, do the following:

1. Click the bow-tie to see the next best action recommendations:

    {{% image_container width="350" %}}![Logic Bot Recommendations](attachments/mx-assist-studio-pro/mx-assist-recommendations.png){{% /image_container %}}

2. Click one of the recommended activities to insert it into a microflow.

3. In the **Properties** dialog box, configure the selected activity/event.

The activity/event is added to your microflow.

If you do not see the desired activity or element in the top-five recommendation list, you can click **Add other element** and choose an activity, loop, decision, merge, or object type decision.

## 4 Read More

* [Microflows](microflows)