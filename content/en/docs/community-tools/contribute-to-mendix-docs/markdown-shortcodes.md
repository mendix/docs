---
title: "Markdown and Shortcode Examples"
url: /community-tools/md-shortcode-examples/
draft: true
description: "Various test cases and examples for Markdown and shortcodes"
banner: "This is a draft and will not be rendered in the production website. Use this page to test how Markdown elements and shortcodes render. Linting has been disabled for this file."
---
<!-- markdownlint-disable-file -->

### Alerts

{{% alert color="info" %}}
Most alerts are info alerts, like this one, or warning alerts. If needed, you can also create a danger alert or a success alert.

Alerts can take up one or more lines. To add a second paragraph, make sure to include an empty line between the first and second paragraph.
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

{{% button color="outline-secondary" href="https://getbootstrap.com/docs/5.3/components/buttons/#variants/" text="Dark" title="What do you think of this button?" %}}

### Code Blocks

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

```http {linenos=false}
GET /projects/d92064a5-b1fd-4be4-97db-53fc90201d1c/epics HTTP/1.1
Authorization: MxToken 7LJE…vk
```

### Images (Figures)

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/actions-v5.png" alt="Available actions when the app is running" max-width=40% >}}

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/parameter.png" link="/refguide/parameter/" >}}

### Icons

* Go to the **Global Navigation** menu ({{< icon name="layout-rounded-1-filled" >}}).
* To remove it, click **Delete** ({{< icon name="trash-can" color="red" >}}).
* Configure your preferences by clicking **Settings** ({{< icon name="cog" >}}).

It's possible to use icons in tables as well:

| Action | Portfolio Manager | Contributor | Viewer |
| --- | --- | --- | --- |
| Invite users | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |

### Tabpanes

{{< tabpane >}} 
  {{% tab header="Tab Title" disabled=true /%}} 
  {{< tab header="Tab One" lang="StudioPro" >}} 
    Tab One Content 
    {{% /tab %}} 
  {{< tab header="Tab Two" lang="JavaQuery" >}} 
    Tab Two Content 
    {{% /tab %}} 
{{< /tabpane >}}

### Todos

{{% todo %}} 
This is a special kind of alert that only displays on development builds—it doesn't show up on production. It does also print as a warning in your console when you run a local build.
{{% / todo %}}

### Videos

{{< vidyard "GwE17mzGma5NAvDnXrVdFA" >}}

{{% youtube 5tznw5ZUQgk %}}

## Other Markdown Guidelines

### Code Snippets

For code examples in one line or individual words in a paragraph, use the `` ` `` symbol to enclose the code: `cacheBust`. For code snippets that should stand on their own or span multiple lines, use a code block instead.

### Collapsible Content

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
