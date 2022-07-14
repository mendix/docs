---
title: "MxAssist Logic Bot"
url: /refguide8/mx-assist-studio-pro/
description: "Describes MxAssist Logic Bot in Mendix Studio Pro."
tags: ["studio pro", "mendix assist", "AI", "assistant", "mx assist logic bot", "logic bot"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/mx-assist-studio-pro.pdf).
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

You can switch MxAssist Logic Bot on and off clicking the **On-Off** button in the top right corner of the microflow editor:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/mx-assist-studio-pro/on-off-button.png" alt="On-Off Button" >}}

To access settings of MxAssist Logic Bot, open **Edit** > **Preferences** >the **Mendix Assist** tab >the **Logic Bot** section. For more information, see [Preferences](/refguide8/preferences-dialog/).

In the **Mendix Assist** tab, section **Logic Bot**, you can set the following: 

* **Enable MxAssist Logic Bot** – switches MxAssist Logic Bot on and off

* **Show suggestions for system variables** – when enabled, MxAssist Logic Bot will make suggestions for system objects (for example, it can suggest that you change such objects as **currentUser** or **currentSession**):

  {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/mx-assist-studio-pro/mx-assist-system-variables.png" alt="Suggestions for System Variables" >}}

For more information on preferences, see [Preferences](/refguide8/preferences-dialog/).

## 3 Using MxAssist Logic Bot to Build Microflows

MxAssist Logic Bot is enabled by default and is displayed as a blue dot in the flow of a [microflow](/refguide8/microflows/). 

It is possible to add elements to the microflow in a regular way without using MxAssist Logic Bot, however, MxAssist Logic Bot helps you add elements to the microflow faster as it suggests a short list of the most relevant activities. 

To use MxAssist Logic Bot, do the following:

1. Click the bow-tie to see the next best action recommendations:

    {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/mx-assist-studio-pro/mx-assist-recommendations.png" alt="Logic Bot Recommendations"   width="350"  >}}

2. Click one of the recommended activities to insert it into a microflow.

3. In the **Properties** dialog box, configure the selected activity/event.

The activity/event is added to your microflow.

If you do not see the desired activity or element in the top-five recommendation list, you can click **Add other element** and choose an activity, loop, decision, merge, or object type decision.

## 4 Read More

* [Microflows](/refguide8/microflows/)
