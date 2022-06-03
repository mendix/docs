---
title: "Indentation & Spacing Test"
url: /developerportal/community-tools/indentation-spacing-test/
draft: true
description: "Various test cases for rendering of indents and spaces"
banner: "This is a draft and will not be rendered in the production website. 
Use this page to test how spacing and indents will render with various elements and shortcodes."
---

## 1 Indents with three/four spaces

1. First list item
1. Second list item
    * Unordered sub-list indenting **works ONLY with 3 or 4** spaces.
1. Third list item
    1. Ordered sub-list **works ONLY with 3 or 4** spaces.
3. And another item. Line break below this line.

    Indenting with **3** or **4** spaces **works**, but each parent element is wrapped in `<p>`, adding a gap around each parent, and above the child.

    Adding a line break between this line and the one above gives the same result.

## 2 Indents with three/four spaces and trailing space(s)

1. First list item  
1. Second list item  
    * Unordered sub-list indenting **works ONLY with 3 or 4** spaces.
1. Third list item  
    1. Ordered sub-list **works ONLY with 3 or 4** spaces.
3. And another item.  
    Indenting with **3** or **4** spaces and **1** or **2** trailing spaces **works**. The indented sentence is part of the numbered list item, with a `<br>` between.

{{< alert color="success" >}}
The style produced with trailing spaces looks best on page.
{{< / alert >}}

## 3 Indents with tabs and a line break

1. First list item
1. Second list item
	* Unordered sub-list.
1. Third list item
	1. Ordered sub-list
3. And another item.

	Indenting with a tab and a line break **works**. Tabs get treated as four spaces, regardless of tab settings within an editor.

## 4 Indents with tabs and trailing spaces

1. First list item  
	* Unordered sub-list.
1. Second list item  
	1. Ordered sub-list
3. And another item.  
	Indenting with a tab and trailing spaces **works**, it's treated the same as four spaces.

## 5 Spacing between list items and code block

1. First list item
2. Second list item
```
Code blocks do NOT need a line break to work.
```

## 6 Indent between list items and code block

1. First list item
2. Second list item

    ```go
    Code blocks do NOT need trailing spaces to be indented.
    Indents must be spaces, not tabs, otherwise a bug shows in rendering an extra '`' symbol.
    ```

## 7 Indent between list items and code block

1. First list item
2. Second list item

    {{< highlight go >}}
    Code blocks with shortcode HIGHLIGHT do NOT need trailing spaces to be indented. They don't need to be indented either, as long as there is no blank line between.
    Highight does NEED a language specified, otherwise the shortcode errors.
    Using Hugo version 0.91.2 produces an extra blank line in the code block. 0.93.1 removes the blank line.
    {{< / highlight >}}

## 8 Indents within code blocks

```go
    All indents get rendered. There are 4 spaces at the beginning of this line.
```

```go
	All indents get rendered. There is one tab at the beginning of this line.
```

```go
		All indents get rendered. There are two tabs at the beginning of this line.
```

## 9 Spacing between list items and image

1. First list item
2. Second list item

    {{< figure src="/attachments/refguide/general/moving-from-8-to-9/moving-from-atlas-2-to-3/set-hybrid-nav.png" >}}
    * Indenting with **3**, **4 spaces** or a **tab** and a line break works, keeping the image in line with list item 2. The line break causes the parent element, list item 2 to be wrapped in `<p>`, making a gap between 1 and 2.

{{< alert color="success" >}}
The style produced with a line break between list and image looks best on page.
{{< / alert >}}

## 10 Spacing between list items and image, no linebreaks

1. First list item
2. Second list item
    {{< figure src="/attachments/refguide/general/moving-from-8-to-9/moving-from-atlas-2-to-3/set-hybrid-nav.png" width="250px">}}
    * Image indentation works with **3**, **4 spaces** or a **tab** indent.
    * Images don't need a line break to work.

## 11 Spacing between list items and image, no linebreaks, with trailing spaces

1. First list item
2. Second list item  
    {{< figure src="/attachments/refguide/general/moving-from-8-to-9/moving-from-atlas-2-to-3/set-hybrid-nav.png" >}}
    * Adding trailing spaces (`<br>`) doesn't change example, but might be safer option.

