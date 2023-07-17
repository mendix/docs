---
title: "MxAssist Best Practice Bot"
url: /refguide/mx-assist-performance-bot/
weight: 30
description: "Describes MxAssist Best Practice Bot in Mendix Studio Pro."
tags: ["studio pro", "best practice bot", "mendix assist", "AI", "mx assist", "Mendix best practice", "anti patterns"]
---

## 1 Introduction 

MxAssist Best Practice Bot is an intelligent virtual co-developer bot that helps you improve your app by inspecting your app model against Mendix development best practice in Mendix Studio Pro. It detects anti-patterns during the design and development, pinpoints you to these anti-patterns, suggests you how to resolve it, and in some cases can automatically fix these issues. 

MxAssist Best Practice Bot is built using statistical analysis of thousands of anonymized Mendix app to learn common anti-patterns as well as using Mendix Expert Services best practices in the development of microflows, domain models, pages, security, and so on.

It consists of a three-level assistance:

1. **Detection** – The bot inspects the model, identifies issue, and pinpoints you to the document/element causing the issue.
2. **Recommendation** – The bot explains the identified issue, the potential impact, and how to fix it. There is also a detailed best practice guide with a dedicated step-by-step guideline of how to fix the issue.
3. **Auto-fixing** – The bot can automatically implement the best practice and fix the issue.

## 2 Best Practice Bot Pane

To access settings of Best Practice Bot, open **Edit** > **Preferences** > the **General** tab > the **MxAssist** > **Best Practice Bot** tab. For more information, see [Preferences](/refguide/preferences-dialog/).

Best Practice Bot is enabled by default and is designed as a pane. To access the **Best Practice Bot** pane, click **View** > **Best Practice Bot**.

The pane gives you information on each anti-pattern and contains Best Practice Bot settings and configurations:

{{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-assist-performance-bot/best-practice-bot-pane.png" alt="Best Practice Bot Pane" >}}

### 2.1 Options and Configuration {#options}

At the top of the **Best Practice Bot** pane you can see the following options: 

* **Inspect now** – Inspects your app model on the development anti-patterns and issues in your app. 
* **Limit to current tab** – Filters to only show detected anti-patterns in the current tab (document).
* **Limit to uncommitted** – Filters to only show detected anti-patterns of the changes that have not been committed to version control.
* **Export** – Exports the recommendations to a CSV file. Suppressed recommendations are excluded.
* **Configuration** – Defines the modules and documents that the Best Practice Bot will analyze. Click the **Configuration** button to open the **Best Practice Bot Configuration** dialog box that contains the **App Model** and **Best Practice** tabs.

    * The **App Model** tab lists all relevant documents in your app. You can choose which specific modules or documents to inspect or leave out. 

        {{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-assist-performance-bot/app-model.png" alt="App Model" width="300px" >}}

    * The **Best Practice** tab lists the available best practice. You can choose your preferred best practices and inspect your model against it: 

        {{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-assist-performance-bot/best-practice.png" alt="Best Practice" width="400px" >}}

You can use both app model and best practice configuration together. 

### 2.2 Anti-Pattern Overview

Each anti-pattern line in the pane provides you with the following information: 

* **Icon** – indicates if the anti-pattern can be automatically fixed; if the icon has the “A” letter, the issue can be auto-fixed
* **Category** - Indicates the type of development anti-pattern identified by the bot, for example, **Performance** issues
* **Code** – a unique code that is specific to the anti-pattern type 
* **Blue circle** – indicates a new detected anti-pattern
* **Message** – description/explanation of the anti-pattern 
* **Element** – the element causing the issue
* **Document** – the document containing the element
* **Module** – the module containing the document 

Right-clicking the message line of an anti-pattern in the pane opens the drop-down menu:

{{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-assist-performance-bot/drop-down-menu.jpg" alt="Drop-Down Menu" >}}

The following actions are available in the drop-down menu:

* **Go to Cause** – takes you to the element causing the issue
* **Go to Usage** – opens the corresponding locations where the anti-pattern is used
* **View Best Practice recommendation** – opens the pop-up window with recommendations (similar to double-clicking the message)
* **Mark as read** – marks the issue as read (this will make the blue circle to disappear)
* **Suppress this recommendation** – suppresses the issue (this will gray out the issue and send it to the bottom of the list, and the related indicator in the editor will disappear)

## 3 Using MxAssist Best Practice Bot in App Development  

### 3.1 Detecting an Anti-Pattern {#detecting}

The first level of assistance is **detection** that includes inspecting the app model, identifying anti-patterns, and pinpointing you to the document causing the issue. 

To inspect your app model, click **Inspect now** in the **Best Practice Bot** pane. 

{{% alert color="info" %}}
The **Inspect now** option will be disabled if there are consistency errors in the app. In this case, you need to resolve the consistency errors first. 
{{% /alert %}}

The bot will detect anti-patterns and list them in the pane under the associated anti-pattern type. To learn more about each anti-pattern type, click the anti-pattern code link. Click the arrow icon next to the anti-pattern type to see the detected cases of this type:

{{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-assist-performance-bot/viewing-anti-pattern.jpg" alt="Viewing Anti-Pattern" >}}

To view the element or the document where the anti-pattern is located, double-click the message line or right-click the message line and choose **Go to Cause** or **Go to Usage** in the drop-down menu.

{{% alert color="info" %}}
Best Practice Bot only detects a subset of the [documented best practices](/refguide/performance-best-practices/). This is to avoid any false positives and to maximize the quality rather than the quantity of the recommendations.
{{% /alert %}}

### 3.2 Recommending a Fix {#recommending}

The second level of assistance is **recommendation** – giving you an overview of the issue and recommending how to fix it. 

There are two ways to view the recommendations:

1. Right-click an anti-pattern message on the pane and select **View Best Practice recommendation** in the drop-down menu. 
2. Click an indicator in the visual editor to view the detected issue:

    {{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-assist-performance-bot/indicator-in-editor.jpg" alt="Indicator in the Editor" width="450px" >}}

The recommendation contains the description of the identified issue, potential impact from it, the way to fix it, and a link to a more detailed guidance on fixing the issue: 

{{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-assist-performance-bot/best-practice-recommendation.jpg" alt="Best Practice Recommendation" width="500px" >}}

### 3.3. Auto-Fixing the Anti-Pattern {#auto-fixing}

The third level of assistance is **auto-fixing** where the bot can automatically implement the best practice and fix the issue in just one click. To avoid undesirable changes, auto-fixing is only available when the bot can safely refactor the code without creating an error or making other undesirable change in the model. Each anti-pattern has an icon in the pane that indicates whether it is auto-fixable. If the icon has the “A” letter, the issue can be auto-fixed:

{{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-assist-performance-bot/auto-fixable.png" alt="Auto-Fixable Icon"   width="45"  >}}

To auto-fix the issue, follow the steps below:

1. Click the corresponding indicator in the editor to open the recommendation or right-click the message line in the pane and select **View Best Practice recommendation** in the drop-down menu.
2. In the **Best Practice Recommendation** pop-up window, click **Fix**: 

    {{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-assist-performance-bot/fix-issue.jpg" alt="Fix Issue" width="500px" >}}

After the issue is auto-fixed, a pop-up window listing the changes appears. You can click **Show the fix** to view the changed document and element. 

## 4 Best Practice Bot from the Command Line

Best Practice Bot may also be executed from the command line, via the [mx Command-Line Tool](/refguide/mx-command-line-tool/app/#check).

## 5 Read More

* [Mendix Assist](/refguide/mx-assist-studio-pro/)
* [MxAssist Logic Bot](/refguide/mx-assist-logic-bot/)
* [Mendix Best Practices for Development](/refguide/dev-best-practices/)
