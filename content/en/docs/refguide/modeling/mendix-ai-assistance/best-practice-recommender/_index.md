---
title: "Best Practice Recommender"
url: /refguide/best-practice-recommender/
weight: 10
description: "Describes Best Practice Recommender in Mendix Studio Pro."
aliases:
    - /refguide/mx-assist-performance-bot/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction 

{{% alert color="info" %}}
Best Practice Bot was rebranded to Best Practice Recommender in Studio Pro 10.12.0.
{{% /alert %}}

{{% alert color="info" %}}
Best Practice Recommender works both online and offline. No internet connection or signing-in is required.
{{% /alert %}}

Best Practice Recommender is an intelligent virtual co-developer assistant that helps you improve your app by inspecting your app model against Mendix development best practice in Mendix Studio Pro. It detects anti-patterns during the design and development, pinpoints you to these anti-patterns, suggests you how to resolve it, and in some cases can automatically fix these issues. 

Best Practice Recommender is built using statistical analysis of thousands of anonymized Mendix app to learn common anti-patterns as well as using Mendix Expert Services best practices in the development of microflows, domain models, pages, security, and so on.

It consists of a three-level assistance:

1. **Detection** – it inspects the model, identifies issue, and pinpoints you to the document/element causing the issue.
2. **Recommendation** – it explains the identified issue, the potential impact, and how to fix it. There is also a detailed best practice guide with a dedicated step-by-step guideline of how to fix the issue.
3. **Auto-fixing** – it can automatically implement the best practice and fix the issue.

## Best Practice Recommender Pane

To access settings of Best Practice Recommender, open **Edit** > **Preferences** > the **Maia** tab > **Best Practice Recommender** section. For more information, see [Preferences](/refguide/preferences-dialog/).

Best Practice Recommender is enabled by default and is designed as a pane. To access the **Best Practice Recommender** pane, click **View** > **Best Practice Recommender**.

The pane gives you information on each anti-pattern and contains Best Practice Recommender settings and configurations:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/best-practice-recommender/best-practice-recommender-pane.png" alt="Best Practice Recommender Pane" class="no-border" >}}

### Options and Configuration {#options}

At the top of the **Best Practice Recommender** pane, you can see the following options: 

* **Inspect now** – Inspects your app model on the development anti-patterns and issues in your app. 
* **Limit to current tab** – Filters to only show detected anti-patterns in the current tab (document).
* **Limit to uncommitted** – Filters to only show detected anti-patterns of the changes that have not been committed to version control.
* **Export** – Exports the recommendations to a CSV file. Suppressed recommendations are excluded.
* **Configuration** – Defines the modules and documents that the Best Practice Recommender will analyze. Click the **Configuration** button to open the **Best Practice Recommender Configuration** dialog box that contains the **App Model** and **Best Practice** tabs.

    * The **App Model** tab lists all relevant documents in your app. You can choose which specific modules or documents to inspect or leave out. 

        {{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/best-practice-recommender/app-model.png" alt="App Model" width="300px" >}}

    * The **Best Practice** tab lists the available best practice. You can choose your preferred best practices and inspect your model against it: 

        {{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/best-practice-recommender/best-practice.png" alt="Best Practice" width="400px" >}}

You can use both app model and best practice configuration together. 

### Anti-Pattern Overview

Each anti-pattern line in the pane provides you with the following information: 

* **Icon** – indicates if the anti-pattern can be automatically fixed; if the icon has the “A” letter, the issue can be auto-fixed
* **Category** - Indicates the type of development anti-pattern identified by the recommender, for example, **Performance** issues
* **Code** – a unique code that is specific to the anti-pattern type 
* **Blue circle** – indicates a new detected anti-pattern
* **Message** – description/explanation of the anti-pattern 
* **Element** – the element causing the issue
* **Document** – the document containing the element
* **Module** – the module containing the document 

Right-clicking the message line of an anti-pattern in the pane opens the drop-down menu:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/best-practice-recommender/drop-down-menu.jpg" alt="Drop-Down Menu" class="no-border" >}}

The following actions are available in the drop-down menu:

* **Go to Cause** – takes you to the element causing the issue
* **Go to Usage** – opens the corresponding locations where the anti-pattern is used
* **View Best Practice recommendation** – opens the pop-up window with recommendations (similar to double-clicking the message)
* **Mark as read** – marks the issue as read (this will make the blue circle to disappear)
* **Suppress this recommendation** – suppresses the issue (this will gray out the issue and send it to the bottom of the list, and the related indicator in the editor will disappear)

## Using Best Practice Recommender in App Development  

### Detecting an Anti-Pattern {#detecting}

The first level of assistance is **detection** that includes inspecting the app model, identifying anti-patterns, and pinpointing you to the document causing the issue. 

To inspect your app model, click **Inspect now** in the **Best Practice Recommender** pane. 

{{% alert color="info" %}}
The **Inspect now** option will be disabled if there are consistency errors in the app. In this case, you need to resolve the consistency errors first. 
{{% /alert %}}

The recommender will detect anti-patterns and list them in the pane under the associated anti-pattern type. To learn more about each anti-pattern type, click the anti-pattern code link. Click the arrow icon next to the anti-pattern type to see the detected cases of this type:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/best-practice-recommender/viewing-anti-pattern.jpg" alt="Viewing Anti-Pattern" class="no-border" >}}

To view the element or the document where the anti-pattern is located, double-click the message line or right-click the message line and choose **Go to Cause** or **Go to Usage** in the drop-down menu.

{{% alert color="info" %}}
Best Practice Recommender only detects a subset of the [documented best practices](/refguide/performance-best-practices/). This is to avoid any false positives and to maximize the quality rather than the quantity of the recommendations.
{{% /alert %}}

### Recommending a Fix {#recommending}

The second level of assistance is **recommendation** – giving you an overview of the issue and recommending how to fix it. 

There are two ways to view the recommendations:

1. Right-click an anti-pattern message on the pane and select **View Best Practice recommendation** in the drop-down menu. 
2. Click an indicator in the visual editor to view the detected issue:

    {{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/best-practice-recommender/indicator-in-editor.jpg" alt="Indicator in the Editor" width="450px" class="no-border" >}}

The recommendation contains the description of the identified issue, potential impact from it, the way to fix it, and a link to a more detailed guidance on fixing the issue: 

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/best-practice-recommender/best-practice-recommendation.png" alt="Best Practice Recommendation" width="500px" >}}

### Auto-Fixing the Anti-Pattern {#auto-fixing}

The third level of assistance is **auto-fixing** where the recommender can automatically implement the best practice and fix the issue in just one click. To avoid undesirable changes, auto-fixing is only available when the recommender can safely refactor the code without creating an error or making other undesirable change in the model. Each anti-pattern has an icon in the pane that indicates whether it is auto-fixable. If the icon has the “A” letter, the issue can be auto-fixed:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/best-practice-recommender/auto-fixable.png" alt="Auto-Fixable Icon"   width="45"  class="no-border" >}}

To auto-fix the issue, follow the steps below:

1. Click the corresponding indicator in the editor to open the recommendation or right-click the message line in the pane and select **View Best Practice recommendation** in the drop-down menu.
2. In the **Recommendation from Best Practice Recommender** pop-up window, click **Fix**: 

    {{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/best-practice-recommender/fix-issue.png" alt="Fix Issue" width="500px" >}}

After the issue is auto-fixed, a pop-up window listing the changes appears. You can click **Show the fix** to view the changed document and element. 

## Best Practice Recommender from the Command Line

Best Practice Recommender may also be executed from the command line, via the [mx Command-Line Tool](/refguide/mx-command-line-tool/app/#check).

## Read More

* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Logic Recommender](/refguide/logic-recommender//)
* [Mendix Best Practices for Development](/refguide/dev-best-practices/)
