---
title: "Shortcode, Markdown, and HTML Examples"
url: /community-tools/md-shortcode-examples/
draft: true
description: "Various test cases and examples for Markdown and shortcodes"
banner: "This is a draft and will not be rendered in the production website. Use this page to see how various Markdown elements and shortcodes render. Linting has been disabled for this file."
---
<!-- markdownlint-disable-file -->

## Introduction

This page provides examples of shortcodes, Markdown, and HTML in the docs.

It provides rendered examples of the technical guidelines described in [Shortcodes, Markdown, and HTML](https://mendix.atlassian.net/wiki/x/PYASow).

## Shortcodes

### Alerts

{{% alert color="info" %}}
Most alerts are info alerts, like this one, or warning alerts. If needed, you can also create a danger alert or a success alert.

Alerts can take up one or more lines. To add a second paragraph, make sure to include an empty line between the first and second paragraph.
{{% /alert %}}

{{% alert color="warning" %}}
This is a warning alert.
{{% /alert %}}

#### Alert Indentation

To add an alert to a list and match the indentation of a list item, omit the blank line between the list item and the alert, like this:

1. First list item
{{% alert color="info" %}}
This alert is indented to match the first list item.
{{% /alert %}}
2. Second list item
    * Sub-list item
{{% alert color="info" %}}
This alert is indented to match the sub-list item.
{{% /alert %}}

    {{% alert color="warning" %}}
    Do not indent your alert by adding four spaces, like this. That messes up the formatting of the text, and it does not render properly. Only use the indentation method described above.
    {{% /alert %}}

### Buttons

{{% button color="info" href="https://marketplace.mendix.com/link/studiopro/" text="Go to Marketplace" title="Download Studio Pro from the Marketplace" %}}

### Code Blocks

JSON code block:

```json
{
     "Status" :  "Stopped" ,
     "EnvironmentId" :  "cd5fc610-edb0-43c5-a374-0439a6411ace",
     "Mode" :  "Acceptance",
     "Url" :  "https://calc-accp.mendixcloud.com",
     "ModelVersion" :  "1.1.0.253",
     "MendixVersion" :  "6.10.10",
     "Production" :  false
}
```

HTTP code block with line numbers disabled:

```http {linenos=false}
GET /projects/d92064a5-b1fd-4be4-97db-53fc90201d1c/epics HTTP/1.1
Authorization: MxToken 7LJE…vk
```

Java code block with lines 4-6 highlighted, and line numbering starting at 33:

```java {hl_lines=["4-6"], linenostart=33}
@java.lang.Override
public java.lang.String executeAction() throws Exception
{
    // BEGIN USER CODE
    throw new com.mendix.systemwideinterfaces.MendixRuntimeException("Java action was not implemented");
    // END USER CODE
}
```

Plain text code block:

```text
ALTER DATABASE [YourDatabase] SET READ_COMMITTED_SNAPSHOT ON;
CREATE ASSEMBLY [Mendix.SqlServerExtensions] FROM [a dll file] WITH PERMISSION_SET = SAFE;
```

Plain text code block missing the "text" parameter:

```
If you don't specify any programming language, the code block looks a bit different. To keep the code blocks consistent throughout the docs, use "text" (as shown in the example above) if you aren't sure what programming language to specify.
```

### Images (Figures)

Image with alt text, max-width, and image-border class:

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/clear-environment.png"
    alt="Clear Environment options and confirmation"
    max-width=70%
    class="image-border" >}}

Image with a link value:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/parameter.png" alt="" link="/refguide/parameter/" >}}

Image indented in a list:

1. Create a new microflow by right-clicking your module and selecting **Add** > **Microflow**.
2. In the **Add Microflow** dialog box, in the **Name** field, enter *IVK_SetOrderToComplete*, and then click **OK**.
3. On the **Orders** overview page, add an **Action** button to the toolbar.

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/working-with-lists-in-a-microflow/18581118.png" alt="Adding the Action button" >}}

4. Double-click the **Action** button and change the **Caption** to *Set Processing to Complete*.

### Icons

Icons match the color of the surrounding text unless a color parameter is specified:

* Go to the **Global Navigation** menu ({{< icon name="layout-rounded-1-filled" >}}).
* To remove it, click **Delete** ({{< icon name="trash-can" color="red" >}}).
* Configure your preferences by clicking **Settings** ({{< icon name="cog" >}}).

It's possible to use icons in tables as well:

| Action | Portfolio Manager | Contributor | Viewer |
| --- | --- | --- | --- |
| Invite users | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |

### Tab panes

Tab panes let you create code blocks with one or more tabs, with a different programming language specified for each tab.

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [contains(Name, 'an')]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[contains(Name, 'an')]
    {{% /tab %}}
{{< /tabpane >}}

If the tab pane contains code with an asterisk (*) in it, the linter rule for bold text may change the formatting because it doesn’t see it as a code block. To prevent the linter working on the tab pane, add the following comment lines around your tab pane. 

[//]: # (<!-- markdownlint-disable no-space-in-emphasis -->) 
 
{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [contains(Name, 'an')]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[contains(Name, 'an')]
    {{% /tab %}}
{{< /tabpane >}}
 
[//]: # (<!-- markdownlint-enable no-space-in-emphasis -->) 

### Todos

{{% todo %}} 
A todo is a special kind of alert that only displays on development builds—it doesn't show up on production. It does also print as a warning in your console when you run a local build.
{{% / todo %}}

### Videos

Vidyard video:

{{< vidyard "GwE17mzGma5NAvDnXrVdFA" >}}

YouTube video:

{{% youtube 5tznw5ZUQgk %}}

## Other Markdown and HTML Guidelines

### Blank Lines 

To make a new paragraph, or start an unordered list, press <kbd>Enter</kbd> twice to add a blank line between lines of text.

Adjacent lines (lines without a blank space between them) render on the site as the same paragraph.
Notice, for example, that this sentence is on a different line in the Markdown file but it renders as part of the same paragraph as the preceding sentence.

### Bold and Italics

Use two asterisks to enclose text that should appear in **bold**, and use one asterisk to enclose text that should appear in *italics*.

### Code Snippets

For code examples in one line or individual words in a paragraph, use the `` ` `` symbol to enclose the code: `cacheBust`. For code snippets that should stand on their own or span multiple lines, use a code block instead.

### Collapsible Content (Details)

<details><summary>It cannot be a reserved word (click to see a list of reserved words)</summary>

* `abstract`
* `assert`
* `boolean`
* `break`
* `byte`
* `case`
* `catch`
* `changedby`
* `changeddate`
* `char`
* `class`
* `con`
* `const`
* `context`
* `continue`
* `createddate`
* `currentUser`
* `default`
* `do`
* `double`
* `else`
* `empty`
* `enum`
* `extends`
* `false`
* `final`
* `finally`
* `float`
* `for`
* `goto`
* `guid`
* `id`
* `if`
* `implements`
* `import`
* `instanceof`
* `int`
* `interface`
* `long`
* `MendixObject`
* `native`
* `new`
* `null`
* `object`
* `owner`
* `package`
* `private`
* `protected`
* `public`
* `return`
* `short`
* `static`
* `strictfp`
* `submetaobjectname`
* `super`
* `switch`
* `synchronized`
* `this`
* `throw`
* `throws`
* `transient`
* `true`
* `try`
* `type`
* `void`
* `volatile`
* `while`
</details>

### Footnotes

| Mendix Data Type | Edm Type | Attribute Value | Atom XML Representation |
| --- | --- | --- | --- |
| ID <sup>1</sup>| Edm.Int64 | 3940649673954387 | 3940649673954387 |
| Autonumber | Edm.Int64 | 1 | 1 |
| Binary (not supported) |   |   |   |
| Boolean | Edm.Boolean | true | true |
| Date and time | Edm.DateTimeOffset | Fri, 19 Dec 2014 10:27:27 GMT | 2014-12-19T10:27:27.000Z |
| Enumeration | Enumeration (OData v4) or Edm.String (OData v3) | Color.Blue | Blue |
| Big decimal  | Edm.Decimal | 0.3333333333333333333333333333333333 | 0.3333333333333333333333333333333333 |
| Hashed string | Edm.String | HashPassword | HashPassword |
| Integer  | Edm.Int64 | 50 | 50 |
| Long <sup>1</sup> | Edm.Int64 | 3940649673954387 | 3940649673954387 |
| String | Edm.String | John | John |

<small><sup>1</sup> When using Excel to import an OData source, long numbers may seem cut off. This is due to a restriction in the data type Microsoft uses. For more information, see [Last digits are changed to zeroes when you type long numbers in cells of Excel](https://support.microsoft.com/en-us/kb/269370).

### Keyboard Keys

Press <kbd>Enter</kbd> to select the highlighted item.

Stop the log capturing in your command-line tool by pressing <kbd>Ctrl</kbd>+<kbd>C</kbd>.

### Links

#### Internal Links {#internal-links}

To link to an internal link (somewhere else on the Docs site), use a relative URL structured like this:

Within a module, you can define [module security](/refguide/module-security/) via module roles and specify the security settings of those module roles for pages, microflows, entities and datasets.

##### Anchors

To add a cross-reference to a specific section of a document, add a custom anchor in curly brackets ({}) after the heading.

To link to that anchor if it's on the same page, just include the anchor as the URL path in parentheses, like this: [Internal Links](#internal-links)

Or, if it's on a different page, include the anchor at the end of the relative URL:

The service that you want to enable must have been enabled for the app by its [Technical Contact](/developerportal/general/app-roles/#technical-contact). For more information, see [Services](/developerportal/deploy/environments/#services).

#### External Links

For external links, use the absolute URL, like this:

Some modules are part of your app by default, while others you can download in the [Mendix Marketplace](https://marketplace.mendix.com/) to add functionality to your app.

{{% alert color="info" %}}
Make sure to use `https` instead of `http` whenever possible. This is a best practice for security, and the external link icon is only inserted after `https` links.
{{% /alert %}}

### Lists

This is an unordered list (also called a bulleted list):

* You must fill out the following sections in order to submit your component:
    * An extended **Description** of the component
    * The **Typical usage scenario** for the component
    * The **Features and limitations** of the component
* These sections are optional:
    * Any **Dependencies** (for example, the required Studio Pro version, modules, images, and styles)
    * The **Installation** steps and details

This is an ordered list (also called a numbered list):

1. Open the **Home_Web** page from the **App Explorer**. 
2. Drag a **Template Grid** from the **Toolbox** onto the page.
    1. You can find this by opening the **Data containers** section, or by searching for this container.
3. In Mendix, in order to display data from the domain model on a page element, the element needs to be within a context. Double-click the template grid to open its properties.

You do not have to increment numbers for ordered list items, but the first list item must start with `1. `. For example, the Markdown for this list starts all four list items with `1. `.

1. Open the **Home_Web** page from the **App Explorer**. 
1. Drag a **Template Grid** from the **Toolbox** onto the page.
    1. You can find this by opening the **Data containers** section, or by searching for this container.
1. In Mendix, in order to display data from the domain model on a page element, the element needs to be within a context. Double-click the template grid to open its properties.

### Tables

#### Icons in Tables

If you need to show status information in a table, icons might be clearer than words: 

| Action | Portfolio Manager | Contributor | Viewer |
| --- | --- | --- | --- |
| Invite users | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="alert-triangle-filled" color="yellow" >}} | {{< icon name="remove-circle-filled" color="red" >}} |

#### Lists in Tables

To include lists in tables, use `<ol><li>...</li></ol>` or `<ul><li>...</li></ul>` (depending on whether you want an ordered list or an unordered list). You can nest as many list items (`<li>...</li>`) as needed within the `<ol>` or `<ul>` tags. To start another row within a table cell, use the `<br/>` tag.

| Parameter   | Value                                                        |
| ----------- | ------------------------------------------------------------ |
| DisplayName | This is the name identifier of a configuration (for example, *MyConfiguration*). |
| API type    | Select `OpenAI`.<br/>For more information, see the [ENUM_ApiType](#enum-apitype) section. |
| Endpoint    | This is the API endpoint (for example, `https://api.openai.com/v1`)   |
| API key     | This is the access token to authorize your API call. <br />To get an API, follow these steps:<ol><li>Create an account and log in at [OpenAI](https://platform.openai.com/).</li><li> Go to the [API key page](https://platform.openai.com/account/api-keys) to create a new secret key. </li><li>Copy the API key and save this somewhere safe.</li></ol> |
