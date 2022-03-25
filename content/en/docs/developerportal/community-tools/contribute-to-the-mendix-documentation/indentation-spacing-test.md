---
title: "Indentation & Spacing Test"
url: /developerportal/community-tools/indentation-spacing-test/
draft: true
description: "Various test cases for rendering of indents and spaces"
banner: "This is a draft and will not be rendered in the production website. 
Use this page to test how spacing and indents will render with various elements and shortcodes."
---

## 1 Indents and Spacing

### 1.1 Indents with Four Spaces

1. First list item
1. Second list item
    * Unordered sub-list indenting **works with 4** spaces.
1. Third list item
    1. Ordered sub-list **works with 4** spaces.
        1. Another level of sublist
3. And another item. Line break below this line.

    Indenting with **4** spaces **works**, but each parent element is wrapped in `<p>`, adding a gap around each parent, and above the child.

    Adding a line break between this line and the one above gives the same result.

### 1.2 Indents with Four Spaces and Trailing Space(s)

1. First list item  
1. Second list item  
    * Unordered sub-list indenting **works with 4** spaces.
1. Third list item  
    1. Ordered sub-list **works with 4** spaces.
3. And another item.  
    Indenting with **4** spaces and **1** or **2** trailing spaces **works**. The indented sentence is part of the numbered list item, with a `<br>` between.

{{< alert color="info" >}}
The style produced with trailing spaces looks best on page.

We will try to adjust spacing between paragraph (`<p>`) elements, to make the examples in headings 1 and 2 closer.
{{< / alert >}}

### 1.3 Indents with Tabs and a Line Break - DO NOT USE TABS

1. First list item
1. Second list item
	* Unordered sub-list.
1. Third list item
	1. Ordered sub-list
3. And another item.

	Indenting with a tab and a line break works for generic list items, but not elements like code blocks. Tabs get treated as four spaces, regardless of tab settings within an editor.

{{< alert color="danger" >}}
DO NOT USE TABS
{{< / alert >}}

### 1.4 Indents with Tabs and Trailing Spaces - DO NOT USE TABS

1. First list item  
	* Unordered sub-list.
1. Second list item  
	1. Ordered sub-list
3. And another item.  
	Indenting with a tab and trailing spaces works for generic list items, but not elements like code blocks.

{{< alert color="danger" >}}
DO NOT USE TABS
{{< / alert >}}

### 1.5 Spacing Between List Items and Code Block

1. First list item
2. Second list item
```
Code blocks do NOT need a line break to work. Not part of list indent.
```

### 1.6 Indent Between List Items and Code Block

1. First list item
2. Second list item

    ```
    Code blocks do NOT need trailing spaces to be indented.
    Indents must be spaces, not tabs, otherwise a bug shows in rendering an extra '`' symbol.
    It does not matter if a code block contains special characters, like {{}}, neither if
    - a line starts with a hyphen.
    ```

{{< alert color="danger" >}}
Do not add a double-space between the number (or bullet point) and first letter of first word in a list item. This can break code block formatting.
{{< / alert >}}

### 1.7 Indent Between List Items and Code Block (Highlight Shortcode) - DO NOT USE HIGHLIGHT

1. First list item
2. Second list item

    {{< highlight go >}}
    Code blocks with shortcode HIGHLIGHT do NOT need trailing spaces to be indented. They don't need to be indented either, as long as there is no blank line between.
    Highight does NEED a language specified, otherwise the shortcode errors.
    Using Hugo version 0.91.2 produces an extra blank line in the code block. 0.93.1 removes the blank line.
    {{< / highlight >}}

### 1.8 Spacing Between List Items and Images

1. First list item
2. Second list item

    {{< figure src="/attachments/refguide/general/moving-from-8-to-9/moving-from-atlas-2-to-3/set-hybrid-nav.png" >}}
    * Indenting with **4 spaces** and a line break works, keeping the image in line with list item 2. The line break causes the parent element, list item 2 to be wrapped in `<p>`, making a gap between 1 and 2.
3. Third item

{{< alert color="success" >}}
The style produced with a line break between list and image looks best on page.
{{< / alert >}}

### 1.9 Spacing Between List Items and Images, No Line Breaks

1. First list item
2. Second list item
    {{< figure src="/attachments/refguide/general/moving-from-8-to-9/moving-from-atlas-2-to-3/set-hybrid-nav.png" width="250px">}}
    * Image indentation works with **4 spaces**.
    * Images don't need a line break to work.

### 1.10 Spacing Between List Items and Images, No Line Breaks, with Trailing Spaces

1. First list item
2. Second list item  
    {{< figure src="/attachments/refguide/general/moving-from-8-to-9/moving-from-atlas-2-to-3/set-hybrid-nav.png" >}}
    * Adding trailing spaces (`<br>`) doesn't change example.

### 1.11 Indent for Alerts in Lists

1. First list item
2. Second list item 
{{< alert color="info" >}}
My alert box
{{< / alert >}}
3. Third list item
    * Sub-list item
{{< alert color="info" >}}
My alert box
{{< / alert >}}


{{< alert color="warning" >}}
Lists in alerts:
1. First list item
2. Second list item `a code snippet`
    * Sub-list

        ```
        A code block
        ```
{{< / alert >}}

## 2 Use of Markdown Extras
### 2.1 Block Quotes

>A block of text

### 2.2 TODOs and Comments

[//]: # Comments do NOT work. Use todo shortcode instead: \{\{% todo %\}\}[ToDo comment text]\{\{% /todo %\}\}

{{% todo %}}[ToDo comment text, only visible in development]{{% /todo %}}

### 2.3 Details

If you need an element that starts collapsed and can be expanded by clicking, it will look like the following:

<details><summary>Description of what is hidden</summary>
hidden stuff
</details>


The code example of details syntax:
```html
<details><summary>Description of what is hidden</summary>
hidden stuff
</details>
```

### 2.4 Footnotes

If you need a footnote use `<sup>footnote_number</sup>` to mark the footnote and `<small><sup>footnote_number</sup>My footnote text</small>` around the actual text.

Example<sup>1</sup>

<small><sup>1</sup>My footnote text</small>

### 2.5 Key Combination Styling

Key Combination
<kbd>{key name}</kbd>

### 2.6 Indent Tables

1. some bullet point 
    | Element | Displays | 
    | --- | --- | 
    | Annotation | A comment explaining an aspect of the domain model | 
    | Entity Name | How the [entity](/refguide/entities/) will be referred to in the database | 
    | Event Handler(s) | An indication that one or more [event handlers](/refguide/event-handlers/) have been set up for this entity | 

{{< alert color="warning" >}}
The current advice is to avoid using tables indented in numbered/bulleted lists, as the table does not get styling applied.
{{< / alert >}}

| Numbered list | Bullet point list |
| --- | --- |
| <ol><li>numbered item</li><li>numbered item</li><li>numbered item</li></ol> | <ul><li>bullet point</li><li>bullet point</li><li>bullet point</li></ul> |
