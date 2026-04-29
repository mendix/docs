---
title: "Grammar & Formatting"
url: /community-tools/contribute-to-mendix-docs/style-guide/grammar-formatting/
weight: 20
description: "Guidelines on grammar, formatting, capitalization, punctuation, lists, headings, and other writing conventions for Mendix documentation."
---

## Acronyms and Initialisms

Define technical or obscure acronyms and initialisms. Write them out fully the first time they are used in a document.

Add an "s" to make an acronym plural. For example, write "your choice of IDEs" instead of "your choice of IDE's".

## Active and Passive Voice

Use active voice. However, you can use passive voice in the following situations:

* To avoid condescending text or blaming the customer, especially in errors, warnings, or notifications
* To avoid awkward constructions
* To emphasize the receiver of the action

For more information, see [Active and Passive Voice](https://docs.microsoft.com/en-us/style-guide/grammar/verbs#active-and-passive-voice) in the *Microsoft Style Guide*.

> Divide your document into as many sections as you want.
>
> When the user clicks OK, the transaction is committed.

## Alerts

Use an alert to emphasize or call attention to information that doesn't fit into the flow of text.

In general, keep alerts short (1-2 paragraphs). If you need to write something long or complex in an alert, consider whether it can go into its own subsection with a header instead. Avoid using code blocks, bulleted lists, or numbered lists in an alert unless they are absolutely necessary.

## Ampersands (&)

Use ampersands only when describing their use in UI elements, HTML, or programming languages. Otherwise, use "and" instead of ampersands in titles, link titles, headings, and text.

For more information, see [ampersand (&)](https://docs.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/a/ampersand) in the *Microsoft Style Guide*.

> Click **Save & Close**.
>
> Extract and edit the sub-microflow.

## Bold

Use bold for UI text (for example, button names and column names). Do not put UI text in quotation marks.

> If you cannot find the toolbox, you can reopen it from the **View** menu.
>
> Select **From database** as the **Source**.
>
> **Structure mode** and **Design mode**

Do not bold text in cross-reference hyperlinks. Hyperlink formatting eliminates the need to bold or italicize.

## Button Names

Capitalize and bold button names.

For toolbar or other buttons, just use the button name ("click **Delete**" instead of "click the **Delete** button", for example).

> Click **Edit** to edit the course start date.

## Capitalization of Mendix Terminology

All guidelines on capitalization of Mendix terminology are listed in the [Mendix Product Naming Guide](/community-tools/contribute-to-mendix-docs/style-guide/product-naming-guide/).

Do not capitalize the names of the editors, such as the microflow editor, the page editor, and the domain model editor.

Capitalize external tools and methodologies that are used by the Mendix Platform (for example, Subversion, Scrum, and Sprint).

When referring to the UI (for example, in a procedure or how-to), reflect how the entity is written and capitalized on the UI (and apply **bold** styling).

> The domain model is a data model that describes…
>
> Go to the **Domain Model**.

## Code Snippets

When referencing punctuation or code in a sentence, state its name, put it in parentheses, and apply Markdown code formatting (` `).

> Enclose the whole setting value in braces (`{ }`).

## Colloquialisms

Keep the diversity of users in mind and avoid using colloquial language.

## Conditional Adverbs

Avoid the following conditional adverbs in technical writing:

* would
* could
* should
* possibly
* might
* actually
* potentially

These words add uncertainty and cloud the meaning of sentences. The main exception is when writing about a hypothetical scenario. In that case, first clarify that the scenario is hypothetical, then use words like "could" and specify what Mendix actually supports or recommends.

## Contractions

Do not use contractions. Write "it is" and not "it's."

Do not use a contraction formed from a proper noun and verb (for example, "Mendix'll…").

### Cross-Reference Text

Write the full name of the cross-referenced document instead of generic text like "look at this how-to".

When cross-referencing a how-to from outside a how-to section, prefix the link with "How to" to add context.

> For more information, see *How to Create a Basic Data Layer*.

Use these phrases consistently when cross-referencing:

* "For more information, …" **+** "…see {doc}."
* "For details on …," **+** "…see {doc}."

> For details on microflow expressions, see *Triggering Logic Using Microflows*.

> For more information, see the [Troubleshooting](/refguide/install/#troubleshooting) section of *Installing Mendix Studio Pro*.
>
> For more information, see the [Installing Studio Pro Offline](/refguide/install/#offline) section below.

Do not bold or italicize text in cross-reference hyperlinks. Hyperlink formatting eliminates the need for additional emphasis.

Only link to URLs that use HTTPS. If you are working with a URL that uses HTTP, check if there is an HTTPS version available instead. If not, consider linking to a different site.

### Cross-Referencing Examples

#### APIs

When cross-referencing an API (like Client or Mendix Runtime) that is hosted on `http://apidocs.rnd.mendix.com` but you are only cross-referencing the index (meaning, the general API or the API in its entirety), use a relative link to the Mendix docs page for that API:

> [App Repository API](/apidocs-mxsdk/apidocs/)

When cross-referencing a specific API method or element, use a link to `http://apidocs.rnd.mendix.com`. These links are updated per Studio Pro major version (and thus API version).

#### Learning Path

When cross-referencing a learning path, use the formulation below.

> For more information, see the [LP Title](Link URL) learning path.

When linking to a learning path in a *Read More* section, link to the path's title text. To reference multiple learning paths, make a distinct "Learning Paths" section.

#### Section

When cross-referencing a section of the same document, include "section" outside the link. Do not include the section number because numbers change and become hard to maintain in cross-references. You can also include "above" or "below" to help orient the reader in the document.

> For details, see the *Installing the Widget* section below.

When cross-referencing a section of another document, add the link to the section name and include the italicized name of the document you are linking to. Do not include the section number.

> For details, see the `[Section Name](/path/to/page/#anchor-id)` section in *Document Title*.

### Hyperlinks

For static links to external websites, use the site or page name as the link text instead of the full URL, unless emphasizing the URL format matters.

> You can download it for free at [Tortoise SVN](http://tortoisesvn.tigris.org/) (choose version 1.6).

## Dashes

### En Dash {#en-dash}

Use an en dash (`–`) in definitions and [number ranges](https://learn.microsoft.com/en-us/style-guide/punctuation/dashes-hyphens). Do not capitalize the word after an en dash in a definition.

To insert an en dash, use the keyboard shortcut <kbd>Alt</kbd> + <kbd>0150</kbd> (or <kbd>Option</kbd> + <kbd>Minus sign</kbd> on a Mac).

> Reliable – this handles the sending and retrieving of changes in Subversion

> 2015–2017

Use an en dash with spaces around it to set off introductory text in list items. If you use introductory text in a list item, make sure all other items in that list have introductory text too. Bold the introductory text if it appears in the UI. For more guidance about list formatting, see [Lists](#lists).

> * **Decline** – Click this button to reject the request. You can also add a reason. After you decline the request, the submitter will receive a notification.
> * **Download** – Click this button to download the MPK file of the component.

### Em Dash

Use an em dash (`—`) to set off a parenthetical phrase with more emphasis than parentheses provide. Do not add spaces around an em dash.

To insert an em dash, use the keyboard shortcut <kbd>Alt</kbd> + <kbd>0151</kbd> (or <kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>Minus sign</kbd> on a Mac).

> The information in your page—numbers, formulas, and text—is stored in the database.
>
> If you are not sure about the details, look at the illustrations in the wizard—they can help you figure out what type of connection you are using.

## Dates {#dates}

Write dates in the format **month day, year**, where:

* Month is the full month or a three-letter abbreviation
* [Day is the cardinal number](#numbers) (16), not the ordinal number (16th)
* Year is four digits

> September 25, 2023

## Default Values

For properties with default values, use one of the following approaches.

### Exhaustive Lists

When listing all possible values, mark the default with the italicized word *default* in parentheses. List the values in the order they appear in the UI.

You can put the values in a table:

| **Value** | **Description** |
| --- | --- |
| Small | The pop-up window is small, only a quarter of the screen |
| Medium *(default)* | The pop-up window is medium-sized, around half the area of the screen |
| Large | The pop-up window is large and takes up nearly the whole screen |

Or you can put them in a bulleted list:

> • Small – The pop-up window is small, only a quarter of the screen
>
> • Medium *(default)* – The pop-up window is medium-sized, around half the area of the screen
>
> • Large – The pop-up window is large and takes up nearly the whole screen

### Non-Exhaustive

When not listing all of the possible values, add the default value in a new paragraph that just consists of "Default: *value*".

> **Size** indicates how much of the screen is taken up by the pop-up as a percentage.
>
> Default: *50*

When documenting a UI property's default without listing all options, add the default in parentheses and bold the value (because it is a UI element).

> **Start as** (default: **Collapsed**) – Determines whether the header content starts expanded or collapsed.

## Document Types

Capitalize when the document type is in a full title.

> For details, see How to Create and Deploy Your First App.
>
> The Mendix Studio Guide…

Do not capitalize when just talking about the how-tos generally.

Refer to the various parts of the reference guide as "topics."

> The reference guide topics…

## Emphasis {#emphasis}

Do not use bold for emphasis in regular documentation. An exception is that bold can be used to emphasize product names and technical terms in release notes.

Italics are reserved for user input and strings (which should always be in English). Do not use italics in other contexts, such as emphasis, because machine translation tools may not translate italicized words.

## Entity Names

Do not use single or double quotation marks for entity names. Use italics if a user needs to type the entity name or bold if the name is on a screenshot you are referring to.

## File Formats {#file-formats}

Capitalize file formats. This keeps file formats consistent with the [Languages](#languages) section, covering both options when needed.

Note that file formats can differ from extensions, and file names and extensions are formatted differently (see below).

> ZIP

In the example above, ZIP is a format, not an extension. Format ZIP this way (not as an extension, like *.zip* or *.ZIP*) because this is more common.

For example file formats, see [List of File Formats](https://en.wikipedia.org/wiki/List_of_file_formats).

## File Names, Directories, and Extensions

Use lower case and italics for file names, directories, and extensions.

> *tech-writer.md*
>
> *.htm*

Note that *.plist* can be both an extension and a (blank) file itself (meaning, it would not have a proper file name).

If you need to use the file extension as a word in a sentence, keep the period preceding the extension. When using an indefinite article ("a" or "an"), use the one that applies to the pronunciation of the extension's first letter.

> An *.exe* file

## Folder Names

Bold folder names.

> In the **config** folder

## Headings and Titles

### Capitalization

Use title case for titles and headings: capitalize all words except articles, short prepositions, and conjunctions. Capitalize prepositions in phrasal verbs (for example, "Set Up").

You can use the [Title Case Converter](https://titlecaseconverter.com/) tool to verify your title capitalization.

### Length

Keep headings short—maximum 80 characters.

### Verb Form in Headings (for How-Tos and Reference Guide Topics)

Use gerunds for conceptual/information topics (the top headings in the document's hierarchy).

> Finding a File

### Verb Form in How-To Titles

Use an infinitive verb (without "to") for titles of how-tos. This way, the full title can include "How to" when it is used in a cross-reference.

> Implement Application Logic Using Microflows
>
> For details, see *How to Implement Application Logic Using Microflows*.

### Verb Form in Reference Guide Topics

Use gerunds or noun phrases for the names of reference guide topics.

> Using Eclipse

When cross-referencing a reference guide topic, use the gerund/noun phrase + "in the Mendix Reference Guide".

> For details, see *Using Eclipse in the Mendix Reference Guide*.

## Italics

Use italics when the user needs to enter text.

> In the **Name** field, enter *Customer\_NewEdit\_Commit*.

Also use italics when referencing documentation page titles, especially when linking to a specific section.

> For more information, see the [Repository](/refguide/version-control/glossary/#repository) section in *Version Control Glossary*.
>
> The *Mendix Reference Guide* covers important topics on the Desktop Modeler, Web Modeler, Mendix Runtime, and other components of the Mendix Platform.

Use italics for file names, directories, and extensions.

Do not use italics for emphasis. For details, see [Emphasis](#emphasis).

Do not italicize text in cross-reference hyperlinks. Hyperlink formatting eliminates the need to italicize or bold.

## Keyboard Shortcuts

To indicate a computer key, use the `<kbd>` element. For key naming and capitalization guidelines, see [Key names](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/keys-keyboard-shortcuts#key-names) in the *Microsoft Style Guide*.

> Press the <kbd>Space</kbd> key.

For key combinations, wrap each key in the `<kbd>` element and separate them with `+`.

> Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>.

For unversioned content and for Studio Pro 10 and above, include Mac instructions in parentheses on first mention.

> Press <kbd>Ctrl</kbd> + <kbd>G</kbd> (or <kbd>Command</kbd> + <kbd>G</kbd> on a Mac).

## Languages {#languages}

Capitalize languages. This makes languages consistent with [File Formats](#file-formats) (while covering both options if necessary).

> HTML, XML, XSC, WSDL

## Latin Abbreviations

Do not use "e.g." Use "For example,…" instead.

> The pages (for example, the start and home pages) are…

Do not use "i.e." Use "That is,…", "Meaning,…", or "As in,…" instead.

> These panes are dockable (that is, you can move a pane to a different position on the screen and place it there).

## Lists {#lists}

### Introducing Lists

Use a complete sentence (not a partial one completed by list items) to introduce a bulleted or numbered list. Never assume readers understand the section's content from the heading alone.

> These are the components of the domain model:
>
> • Entities
>
> • Associations
>
> • Annotations

This complete sentence introducing the list can reflect the heading (even if it is repetitive).

> **Opening a Hybrid Example App**
>
> To open a hybrid example app, follow these steps:
>
> 1. Go to…

### Number of List Items

Do not use a list with only one bullet point or one step. Rewrite the single list item as a sentence or paragraph.

### Numbering

For a sentence that falls outside the numbered list (as in, it is not numbered and not indented to be parallel), do not continue numbering (for example, from "4."). Indent the sentence so it is parallel, integrate it into the previous or subsequent numbered item, or start a new numbered list (from "1.").

### Grammar and Punctuation with Bulleted Lists

Do not use commas at the end of bullet points.

In general, do not use periods at the end of bullet points, as bullet points list small entities or pieces of language, not complete sentences. However, you can use complete sentences and periods in certain cases, such as longer definitions, error messages, or product features. In this case, use sentence case capitalization.

Use a colon at the end of a list item to introduce an image that follows the next step.

If your list items contain introductory text, set the introductory text off with an en dash, with a space on either side (as shown in the [En Dash](#en-dash) section).

Make all the items in a list consistent in structure. If one item in the list uses introductory text, all items in the list must have introductory text. If one item uses full sentences with periods, all of them must.

{{< figure src="/attachments/community-tools/contribute-to-mendix-docs/style-guide/list-formatting-example.png" alt="Annotated example showing inconsistent list formatting" >}}

### Size of List Items

Do not make paragraph-long bullet points or numbered steps. If you have several long bullet points, turn those into paragraphs and use sub-headings. If you have several long, numbered steps, use sub-steps.

## Literal Text

To display Markdown symbols for bold or italics without applying the formatting, wrap the text in a code snippet (``).

> `\_propertyName\_`

Use code formatting to display URLs as plain text instead of clickable links. For more details, see [URLs](#urls).

> `www.example-address.com`

## Menu Items

Capitalize menu items and bold them.

## Numbers {#numbers}

Write out numbers 1–10 (for example, "five") unless you are providing input examples (in which case, also italicize the number).

> Five customers
>
> In the **Order** field, enter *5*.

You can use ordinal numbers for positions in ranges of numbers and other technical purposes.

Write out ordinal numbers for 1–10 (for example, "fifth").

> This is the fifth example

Do not write out ordinal numbers for 11 and above. Just use the number and the suffix.

> 101st

Do not use ordinal numbers for dates (see [Dates](#dates)).

> September 25, 2023

## Person

Address the reader of your documents using the second person instead of the first person: use "you" or "your" instead of "we", "our", or "us".

Assume your reader is the person doing the tasks that you are documenting. Use "you" instead of "user", or use "end-user" when referring to the user of a Mendix app built on the Mendix Platform.

Always use "Mendix" instead of "we" in the regular documentation. Use "we" only in the Studio Pro release notes, which are written from the perspective of PMs or developers.

## Procedures and Examples

Use imperative mood for direct user instructions in procedural steps.

> Click **Save**.
>
> Enter the command `ollama pull model-id`.

Use descriptive language when referring to examples that illustrate the instructions. Do not write examples as if they are instructions to the user.

> This example uses DeepSeek-R1.

Do not convert descriptive example statements into imperative instructions. Do not convert instructions into passive descriptions.

## Personal or Sensitive Information

In text, screenshots, and code samples, do not show any personal or sensitive information, including real names, real email addresses, profile pictures of real users, API keys, and OpenIDs. Remove or blur out this information, or replace it with fake information.

You can replace an OpenID with a random UUID that you generate using a [UUID generator](https://www.uuidtools.com/v4).

## Placeholders {#placeholders}

### Placeholders In Sample Code

Placeholders in sample code represent values that the user must replace when they use the sample code. For inline code placeholders, use code formatting, italics, and all caps. For code blocks, use all caps and add text instructions explaining what to replace.

Follow [Google's placeholder guidance](https://developers.google.com/style/placeholders): Use a short but descriptive name for the placeholder. Do not use generic text such as "input" or "placeholder". Use uppercase characters with underscore delimiters, unless that does not make sense in context.

> When using the following command, replace `*NAMESPACE\_NAME`* with the name of your namespace.
>
> kubectl create namespace NAMESPACE\_NAME

Do not add ornaments around sample code placeholders unless the ornaments appear in the code.

### Placeholders in Non-Code Elements

For non-code placeholders (such as in the Studio Pro UI), add ornaments like quotes or braces if they clarify the placeholder.

> The selected page '*PAGE\_NAME*' expects an object of type '*OBJECT\_TYPE*', which is not available here.
>
> Go to the system texts editor: **App Explore** > **App '*****APP\_NAME*****'** > **System texts** > **Text**.

## Plurals in Parentheses

Do not put optional plurals in parentheses, for example, "app(s)". Instead, use either the singular form or the plural form. If you must show both forms, write the singular form, then "or" and the plural form in parentheses.

> Register the app environment (or environments).

## Quotation Marks and Apostrophes

Use double quotation marks (") instead of single quotation marks (') when emphasizing or distinguishing terms.

Use single quotation marks (`'`) in code snippets only when they appear in the code. Do not use them to identify code; instead, use code formatting (using "`" or "```"). Use quotation marks as ornaments around placeholders only if they appear in the product UI. For more information, see [Placeholders](#placeholders).

## Serial Comma

Use the Oxford comma (also known as the serial comma).

> The app includes microflows, nanoflows, and workflows.

## Space After Period

Use a single space between a period and the first word of the next sentence.

## URLs {#urls}

Format example URLs (those not linking to Mendix or third-party sites) with Markdown code formatting. This prevents the link from appearing as a broken third-party link.

## Verb Tense

Use present tense. The present tense is often easier to read and understand than the past or future tense. For more information, see [Verb Tense](https://docs.microsoft.com/en-us/style-guide/grammar/verbs#verb-tense) in the *Microsoft Style Guide*.

> Save the file. Gulp rebuilds the code in the console as soon as you save the file.