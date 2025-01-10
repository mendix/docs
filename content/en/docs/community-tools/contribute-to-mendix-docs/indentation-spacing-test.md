---
title: "Indentation and Spacing Test"
url: /developerportal/community-tools/indentation-spacing-test/
draft: true
description: "Various test cases for rendering of indents and spaces. Use this page to test how spacing and indents will render with various elements and shortcodes. Linting has been disabled for this file."
---
<!-- markdownlint-disable-file -->
## Heading 2

Paragraph text here. extra space 

### Heading 3

Paragraph text here.

#### Heading 4

Paragraph text here.

##### Heading 5

Paragraph text here.

Another paragraph here.

## Indents and Spacing 123456 12345678

See [Section Spacing Tests](#spacing) for multiple examples of spacing. 

### Indents with Four Spaces

Paragraph text here.

* unordered list
    1. ordered list
        * unordered list

Paragraph text here.

1. First list item
1. Second list item
    * Unordered sub-list indenting **works with 4** spaces.
        * another sub-list
1. Third list item
    1. Ordered sub-list **works with 4** spaces.
        1. Another level of sublist
3. And another item.
    A new line with an indentation of **4** spaces and no trailing spaces does nothing. 

Without this text, the lower list was treated as part of the upper numbered list.

1. Another list.
1. Another list.
1. Another list. Line break below this line.

    If a line break is placed between the list and indented line, each parent element gets wrapped in `<p>`, adding a gap around each entry.

{{% alert color="warning" %}}
Two line breaks between the numbered lists were not enough to make them separate lists.
{{% / alert %}}

### Indents with Four Spaces and Trailing Space (or Spaces)

Paragraph text here.

* unordered list  
    1. ordered list  
        * unordered list

Paragraph text here.

1. First list item  
1. Second list item  
    * Unordered sub-list indenting **works with 4** spaces.
1. Third list item  
    1. Ordered sub-list **works with 4** spaces.
3. And another item.  
    Indenting with **4** spaces and **1** or **2** trailing spaces **works**.

### Indents with Tabs and a Line Break – DO NOT USE TABS

Paragraph text here.

* unordered list
	1. ordered list
		* unordered list

Paragraph text here.

1. First list item
1. Second list item
	* Unordered sub-list.
1. Third list item
	1. Ordered sub-list
3. And another item.

	Indenting with a tab and a line break works for generic list items, but not elements like code blocks. Tabs get treated as four spaces, regardless of tab settings within an editor.

{{% alert color="danger" %}}
DO NOT USE TABS
{{% / alert %}}

### Indents with Tabs and Trailing Spaces – DO NOT USE TABS

Paragraph text here.

* unordered list  
	1. ordered list  
		* unordered list  

Paragraph text here.

1. First list item  
	* Unordered sub-list.
1. Second list item  
	1. Ordered sub-list
3. And another item.  
	Indenting with a tab and trailing spaces works for generic list items, but not elements like code blocks.

{{% alert color="danger" %}}
DO NOT USE TABS
{{% / alert %}}

### Spacing Between List Items and Code Block

1. First list item
2. Second list item

```
Code blocks do NOT need a line break to work. Not part of list indent.
```

### Indent Between List Items and Code Block

1. First list item
2. Second list item

    ```
    Code blocks do NOT need trailing spaces to be indented.
    Indents must be spaces, not tabs, otherwise a bug shows in rendering an extra '`' symbol.
    It does not matter if a code block contains special characters, like {{}}, neither if
    – a line starts with a hyphen.
    ```

{{% alert color="danger" %}}
Do not add a double-space between the number (or bullet point) and first letter of first word in a list item. This can break code block formatting.
{{% / alert %}}

### Indent Between List Items and Code Block (Highlight Shortcode) – DO NOT USE HIGHLIGHT

1. First list item
2. Second list item
    {{< highlight go >}}
    Code blocks with shortcode HIGHLIGHT do NOT need trailing spaces to be indented. They don't need to be indented either, as long as there is no blank line between.
    Highight does NEED a language specified, otherwise the shortcode errors.
    Using Hugo version 0.91.2 produces an extra blank line in the code block. 0.93.1 removes the blank line.
    {{< / highlight >}}

### Spacing Between List Items and Images

1. First list item
2. Second list item

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/set-hybrid-nav.png" class="no-border" >}}
    * Indenting with **4 spaces** and a line break works, keeping the image in line with list item 2. The line break causes the parent element, list item 2 to be wrapped in `<p>`, making a gap between 1 and 2.
3. Third item

### Spacing Between List Items and Images, No Line Breaks

1. First list item
2. Second list item
    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/set-hybrid-nav.png" width="250px" class="no-border" >}}
    * Image indentation works with **4 spaces**.
    * Images don't need a line break to work.

### Spacing Between List Items and Images, No Line Breaks, with Trailing Spaces

1. First list item
2. Second list item  
    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/set-hybrid-nav.png" class="no-border" >}}
    * Adding trailing spaces (`<br>`) doesn't change example.

### Indent for Alerts in Lists

1. First list item
2. Second list item 
{{% alert color="info" %}}
My alert box
{{% / alert %}}
3. Third list item
    * Sub-list item
{{% alert color="info" %}}
My alert box
{{% / alert %}}


{{% alert color="warning" %}}
Lists in alerts:
1. First list item
2. Second list item `a code snippet`
    * Sub-list

        ```
        A code block
        ```
{{% / alert %}}

## Use of Markdown Extras
### Block Quotes

>A block of text

### TODOs and Comments

Two ways to add comments:

1. With empty Markdown relative link

    ```text
    [//]: # "my comment here"

    OR

    [//]: # (my other comment here)
    ```

1. Use todo shortcode, which will output the comment into the Travis log:

    ```text
    {{%/* todo */%}}[ToDo comment text, only visible in development]{{%/* /todo */%}}
    ```

### Details

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

### Footnotes

If you need a footnote use `<sup>footnote_number</sup>` to mark the footnote and `<small><sup>footnote_number</sup>My footnote text</small>` around the actual text.

Example<sup>1</sup>

<small><sup>1</sup>My footnote text</small>

### Key Combination Styling

Key Combination
<kbd>{key name}</kbd>

### Indent Tables

1. some bullet point 
    | Element | Displays | 
    | --- | --- | 
    | Annotation | A comment explaining an aspect of the domain model | 
    | Entity Name | How the [entity](/refguide/entities/) will be referred to in the database | 
    | Event Handler (or Handlers) | An indication that one or more [event handlers](/refguide/event-handlers/) have been set up for this entity | 

A table with list items:

| Numbered list | Bullet point list |
| --- | --- |
| <ol><li>numbered item</li><li>numbered item</li><li>numbered item</li></ol> | <ul><li>bullet point</li><li>bullet point</li><li>bullet point</li></ul> |

### Anchors in Tables

| Table Heading 1 | Table Heading 2 <a id="myanchor" href="#myanchor">My anchor here!</a> |
| --- | --- |
| table cell 1 | table cell 2 <a id="myanchor2" href="#myanchor2">My anchor 2 here!</a>  |

## Section Spacing Tests<br />==================={#spacing}

## Level 2 Section – Paragraph after

With a paragraph

## Level 2 Section – Level 2 after

## Level 2 Section – Level 3  after

### Level 3 Section – Level 2 after

## Level 2 Section – List after

* List item 1
* List item 2
* List item 3

### Level 3 section after list – list after

* List item 1
* List item 2
* List item 3

## Level 2 section – followed by deeper levels

### Level 3 section

#### Level 4 section

##### Level 5 section

###### Level 6 section

## Level 2 section – followed by deeper levels separated by paragraphs

With a paragraph

### Level 3 section

With a paragraph

#### Level 4 section

With a paragraph

##### Level 5 section

With a paragraph

###### Level 6 section

## Paragraphs and lists

Paragraph followed by a list

* List item 1
* List item 2
* List item 3

A new list

* A new list with multiple indents
* Item 2
    * Subitem 1
    * Subitem 2
        * Subsubitem 1
        * Subsubitem 2
    * Subitem 3
    * Subitem 4
* Item 3

Several paragraphs one

after another, which should be nicely spaced

And clearly different from Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus mauris. In eu mi bibendum neque egestas congue. Pellentesque sit amet porttitor eget dolor. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Pulvinar etiam non quam lacus. Non quam lacus suspendisse faucibus interdum posuere lorem. Non tellus orci ac auctor augue mauris augue neque. Id ornare arcu odio ut sem nulla pharetra diam. Ultricies tristique nulla aliquet enim tortor at auctor urna.

Paragraph followed by a list

1. List item 1
1. List item 2
1. List item 3

A new list

1. A new list with multiple indents
1. Item 2
    1. Subitem 1
    1. Subitem 2
        * Subsubitem 1
        * Subsubitem 2
    1. Subitem 3
    1. Subitem 4
1. Item 3

## Test Buttons

{{% button color="info" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Info" title="What do you think of this button?" %}}

{{% button color="success" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Success" title="What do you think of this button?" %}}

{{% button color="danger" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Danger" title="What do you think of this button?" %}}

{{% button color="warning" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Warning" title="What do you think of this button?" %}}

{{% button color="light" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Light" title="What do you think of this button?" %}}

{{% button color="dark" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Dark" title="What do you think of this button?" %}}

{{% button color="link" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Link" title="What do you think of this button?" %}}

{{% button color="outline-info" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Info" title="What do you think of this button?" %}}

{{% button color="outline-success" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Success" title="What do you think of this button?" %}}

{{% button color="outline-danger" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Danger" title="What do you think of this button?" %}}

{{% button color="outline-warning" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Warning" title="What do you think of this button?" %}}

{{% button color="outline-light" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Light" title="What do you think of this button?" %}}

{{% button color="outline-dark" href="https://getbootstrap.com/docs/4.6/components/buttons/" text="Dark" title="What do you think of this button?" %}}

## Test Links{#test-links}

### [This is a link](/developerportal/community-tools/indentation-spacing-test/)

[Internal Link](/developerportal/community-tools/indentation-spacing-test/)

[Internal Anchor](/developerportal/community-tools/indentation-spacing-test/#test-links)

[External com Link](https://bbc.com)

[External other top level domain Link](https://news.bbc.co.uk)
