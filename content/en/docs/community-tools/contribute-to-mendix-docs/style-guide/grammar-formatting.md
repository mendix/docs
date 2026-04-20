---
title: "Grammar & Formatting"
url: /community-tools/contribute-to-mendix-docs/style-guide/grammar-formatting/
weight: 20
description: "Guidelines on grammar, formatting, capitalization, punctuation, lists, headings, and other writing conventions for Mendix documentation."
---

## Acronyms and Initialisms

Define technical or obscure acronyms and initialisms, and write them out fully the first time before using them throughout the rest of the document.

Add an "s" to make an acronym plural. For example, write "your choice of IDEs" instead of "your choice of IDE's".

## Active and Passive Voice

Use active voice whenever you can. However, you can use passive voice in the following situations:

* To avoid condescending text or blaming the customer, especially in errors, warnings, or notifications
* To avoid awkward constructions
* To emphasize the receiver of the action

For more information, see the [Active and Passive Voice](https://docs.microsoft.com/en-us/style-guide/grammar/verbs#active-and-passive-voice) section in *Microsoft Style Guide*.

> Divide your document into as many sections as you want.
>
> When the user clicks OK, the transaction is committed.

## Alerts

Use an alert to emphasize or call attention to information that doesn't fit into the flow of text.

In general, alerts should be short (1-2 paragraphs); if you need to write something long or complex in an alert, consider whether it can go into its own subsection with a header instead. Avoid using code blocks, bulleted lists, or numbered lists in an alert unless they are absolutely necessary.

For technical guidance on how to add an alert to the docs, see Shortcodes, Markdown, and HTML.

## Ampersands (&)

Only use ampersands when talking about their use in UI elements, HTML, or programming languages. Otherwise, do not use ampersands in either titles, link titles, headings, or text. Use "and" instead.

For more information, see the [ampersand (&)](https://docs.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/a/ampersand) section in *Microsoft Style Guide*.

> Click **Save & Close**.
>
> Extract and edit the sub-microflow.

## Bold

Use bold for UI text (for example, button names, column names). Do not put UI text in quotation marks.

> If you can't find the toolbox, you can re-open it from the **View** menu.
>
> Select **From database** as the **Source**.
>
> **Structure mode** and **Design mode**

Do not use bold on text that is hyperlinked for a cross-reference. The formatting for hyperlinking overrides the need to bold or italicize.

It is not necessary to use bold in a hyperlink, the link highlighting is sufficient.

## Button Names

Button names should be capitalized.

Button names should be **bolded** in the documentation.

For toolbar or other buttons, just use the button name ("click **Delete**" instead of "click the **Delete** button", for example).

> Click **Edit** to edit the course start date.

## Capitalization of Mendix Terminology

All guidelines on capitalization of Mendix terminology are listed in the Mendix Product Naming Guide.

We do not capitalize the names of the editors, such as: the microflow editor, the page editor, the domain model editor.

Capitalize external tools and methodologies that are used by the Mendix Platform (for example, Subversion, Scrum, and Sprint).

When referring directly to the UI (for example, in a procedure or how-to), you should directly reflect how the entity is written and capitalized on the UI (and apply **bold** styling).

> The domain model is a data model that describes…
>
> Go to the **Domain Model**.

## Colloquialisms

Keep the diversity of end-users in mind and generally avoid using colloquial language.

## Code Snippets

When using a piece of punctuation/code in a sentence, put the item in parentheses after stating its name and add Markdown code formatting (` `).

> Enclose the whole setting value in braces (`{ }`).

## Conditional Adverbs

Avoid the following conditional adverbs in technical writing:

* would
* could
* should
* possibly
* might
* actually
* potentially

These words add uncertainty and cloud the true meaning of sentences. The main exception to this rule is when you are writing about a hypothetical or theoretical scenario. In that case, make it clear to the reader the scenario is **hypothetical** before using words like "could", and make it clear what Mendix actually supports/recommends.

## Contractions

Should not be used. Write "it is" and not "it's."

Do not use a contraction formed from a proper noun and verb (for example, "Mendix'll…").

## Cross-Referencing and Hyperlinks

For technical guidance on links, anchors, and cross-referencing, see Shortcodes, Markdown, and HTML.

### Cross-Reference Text

Write out the full name of the cross-referenced/hyperlinked document (for example, another how-to) and not just, for example, "look at this how-to".

If you make a cross-reference to a how-to when you are outside of a how-to space, you should preface the crosslink with "How to" to add context."

> For more information, see How to Create a Basic Data Layer.

Use these phrases consistently when cross-referencing:

* "For more information,…" **+** "…see {doc}."
* "For details on…," **+** "…see {doc}."

> For details on microflow expressions, see Triggering Logic Using Microflows.

> For more information, see the [Troubleshooting](/refguide/install/#troubleshooting) section of *Installing Mendix Studio Pro*.
>
> For more information, see the [Installing Studio Pro Offline](/refguide/install/#offline) section below.

Do not use bold or italics on text that is hyperlinked for a cross-reference. The formatting for hyperlinking overrides the need to bold or italicize.

Only link to URLs that use HTTPS. If you're working with a URL that uses HTTP, check if there's an HTTPS version available instead. If not, considering linking to a different site.

### Cross-Referencing Examples

#### APIs

When cross-referencing an API (like Client or Mendix Runtime) that is hosted on <http://apidocs.rnd.mendix.com> but you are only cross-referencing the index (meaning, the general API or the API in its entirety), use a relative link to our docs page for that API: <https://docs.mendix.com/apidocs-mxsdk/apidocs/>.

When cross-referencing an API method or a specific element of the API that the user needs to be directed to, use a link to <http://apidocs.rnd.mendix.com> . These links need to be updated/maintained per Studio Pro major version (and thus API version).

#### Learning Path

When cross-referencing a learning path, use the formulation below.

> For more information, see the [LP Title Goes Here](link url) learning path.

When linking to a learning path in a "Read More" section, simply link to the path's title text.

When you wish to reference multiple learning paths, make a distinct "Learning Paths" section.

#### Section

When cross-referencing a section of the same document, include "section" outside the link. Do not include the number of the section (because that is too difficult to maintain). You can also include "above" or "below" to help orient the reader in the document.

> For details, see the Installing the Widget section below.

When cross-referencing a section of another document, add the link to the section name and include the italicized name of the full document you are linking to. Do not add the section number (because it may change, so it is difficult to maintain in cross-references).

> For details, see the Creating a New App in the Mendix Desktop Modeler section in *How to Create a Custom Theme with the Mendix UI Framework*.

### Hyperlinks

For static links (to external websites), deep-link the name of the site/page (do not include full URL as the link text unless you want to emphasize how the URL is written).

You can download it for free at [Tortoise SVN](http://tortoisesvn.tigris.org/) (choose version 1.6).

## Dashes

### En Dash {#en-dash}

Use an en dash (–) in definitions (do not capitalize the word after the en dash) and [number ranges](https://learn.microsoft.com/en-us/style-guide/punctuation/dashes-hyphens/enes).

Use the keyboard shortcut`ALT` + `0150` (or `Option` + `Minus sign` on a Mac)

> Reliable – this handles the sending and retrieving of changes in Subversion.

> 2015–2017

Use an en dash to set off introductory text in list items. If you use introductory text in a list item, make sure all other items in that list have introductory text too. Bold the introductory text if it appears in the UI. For more guidance about list formatting, see [Lists](#lists).

> * **Decline** – Click this button to reject the request. You can also add a reason. After you decline the request, the submitter will receive a notification.
> * **Download** – Click this button to download the MPK file of the component.

### Em Dash

Use an em dash (—) to set off a parenthetical phrase with more emphasis than parentheses provide. Don't add spaces around an em dash.

Use the keyboard shortcut `ALT` + `0151` (or `Option` + `Shift` + `Minus sign` on a Mac)

> The information in your page—numbers, formulas, and text—is stored in the database.
>
> If you're not sure about the details, look at the illustrations in the wizard—they can help you figure out what type of connection you're using.

## Dates

Dates should be written in the format **month day, year** where:

* month is either the full month in English, or a three-letter abbreviation
* [day is just the cardinal number](#numbers) (16) not the ordinal number (16th)
* year is four digits

> September 25, 2023

## Default Values

Where a property (or other list of possibilities) has a default value, indicate this in one of the following ways.

### Exhaustive Lists

Where every possibility for a value is listed, identify the default value by following the value with the word *default* in italics and enclosed in parentheses. The values should be listed in the order they appear in the UI.

You can put the values in a table.

|  |  |
| --- | --- |
| **Value** | **Description** |
| Small | The pop-up window is small, only a quarter of the screen |
| Medium *(default)* | The pop-up window is medium-sized, around half the area of the screen |
| Large | The pop-up window is large and takes up nearly the whole screen |

Or you can put them in a bulleted list.

> • Small – The pop-up window is small, only a quarter of the screen
>
> • Medium *(default)* – The pop-up window is medium-sized, around half the area of the screen
>
> • Large – The pop-up window is large and takes up nearly the whole screen

### Non-Exhaustive

Where you do not list all the values (for example, for a value which is represented by a number), add the default value as a new paragraph that just consists of "Default: *value*" with the *value* in italics.

> **Size** indicates how much of the screen is taken up by the pop-up as a percentage.
>
> Default: *50*

If you are documenting a property in the UI (for example, in a dialog box or wizard) and you are not listing and defining each option but still want to identify the default, add it in parentheses and bold the value (because it is a UI element).

> **Start as** (default: **Collapsed**) – Determines whether the header content starts expanded or collapsed.

## Document Types

Capitalize when the document type is in a full title.

> For details, see How to Create and Deploy Your First App.
>
> The Mendix Studio Guide…

Do not capitalize when just talking about the how-tos generally.

Refer to the various parts of the reference guide as "topics."

> The reference guide topics…

## Emphasis

Do not use **bold** for emphasis in regular documentation. An exception is that bold can be used to emphasize product names and technical terms in release notes.

Using *italics* for emphasis was permissible in the past, but because italics is reserved for user input/strings (which should always be in English), this interferes with machine translation (meaning, a word italicized for emphasis may not be translated when it should be). Using italics is no longer permissible for emphasis.

## Entity Names

Do not use single or double quotation marks. You may use italics if a user needs to type the entity name or bold if the name is on the screenshot and you are referring to it.

## File Formats {#file-formats}

Capitalize file formats for consistency. This should make file formats consistent with [Languages](#languages) (while covering both options if necessary).

Note that file formats can differ from extensions, and file names and extensions are formatted differently (see below).

> ZIP

In the example above, ZIPis a format, not an extension. This is the way that ZIPshould be used and formatted regularly (because it is more common to refer to this as a format, and the extension can be *.zip* or *.ZIP*).

For example file formats, see [List of File Formats](https://en.wikipedia.org/wiki/List_of_file_formats).

## File Names, Directories, and Extensions

Use lower case and italics for file names, directories, and extensions.

> [*tech-writer.md*](http://tech-writer.md)
>
> *.htm*

Note that *.plist* can be both an extension and a (blank) file itself (meaning, it would not have a proper file name).

If you need to use the file extension as a word in a sentence, keep the period preceding the extension. When using an indefinite article ("a" or "an"), use the one that applies to the sound of the first letter of the extension (as though the period is not pronounced as "dot").

> An *.exe* file…

## Folder Names

Bold folder names.

> In the **config** folder.

## Headings and Titles

### Capitalization

Capitalize all words in titles and headings of documents according to title case (meaning, do not capitalize words like a, an, the, at, by, for, in, of, on, to, and, as, but, or, nor, etc.). If there is a phrasal verb used in the title (like "Set Up"), capitalize the preposition as well ("Up").

You can use this [Title Case Converter](https://titlecaseconverter.com/) tool to check your case and capitalize titles (according to the Chicago Manual of Style). Notethat you need to click **Convert** in the tool when checking titles.

### Length

Keep headings short. They should never render as longer than two lines on your laptop screen. Try to keep to a maximum of about 80 characters or 15 words.

### Verb Form in Headings (for How-Tos and Reference Guide Topics)

Use gerunds for conceptual/information topics (the top headings in the document's hierarchy).

> Finding a File

### Verb Form in How-To Titles

Use an infinitive verb (without "to") for titles of how-tos. This way, the full title can include "How to" when it is used in a cross-reference or another situation.

> Implement Application Logic Using Microflows
>
> For details, see How to Implement Application Logic Using Microflows.

### Verb Form in Reference Guide Topics

Use gerunds/noun phrases for the names of reference guide topic.

> Using Eclipse

When cross-referencing a reference guide topic, use the gerund/noun phrase + "in the Mendix Reference Guide."

> For details, see Using Eclipse in the Mendix Reference Guide.

## Italics

Use italics when the user needs to enter text.

> In the **Name** field, enter *Customer\_NewEdit\_Commit*.

Also use italics when referencing one of the docs site page/guide titles (especially important when linking to only a section of a page).

> For more information, see Repository in *Version Control Concepts*.
>
> The *Mendix Reference Guide* covers important topics on the Desktop Modeler, Web Modeler, Mendix Runtime, and other components of the Mendix Platform.

Use italics for file names, directories, and extensions.

Do not use italics for emphasis. For details, see Emphasis.

Do not use italics on text that is hyperlinked for a cross-reference. The formatting for hyperlinking overrides the need to italicize or bold.

## Keyboard Shortcuts

To indicate a computer key, use the `kbd` element. For guidance on key names and capitalization, refer to <https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/keys-keyboard-shortcuts#key-names>.

> Press the <kbd>Space</kbd> key.

For key combinations, use the `kbd` element around each key and connect the keys with  `+` .

> Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>.

For unversioned content and for Studio Pro 10 and above, include Mac instructions in parentheses on first mention.

> Press <kbd>Ctrl</kbd> + <kbd>G</kbd> (or <kbd>Command</kbd> + <kbd>G</kbd> on a Mac).

## Languages {#languages}

Capitalize languages. This should make languages consistent with [File Formats](#file-formats) (while covering both options if necessary).

> HTML, XML, XSC, WSDL

## Latin Abbreviations

Do not use "e.g." Use "For example,…" instead.

> The pages (for example, the start and home pages) are…

Do not use "i.e." Use "That is,…", "Meaning,…", or "As in,…" instead.

> These panes are dockable (that is, you can move a pane to a different position on the screen and place it there).

## Lists {#lists}

For technical guidance on lists, see Shortcodes, Markdown, and HTML.

### Introducing Lists

Use complete sentences to introduce bulleted and numbered lists. Do not assume the reader has read the heading and knows what will be in that section.

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

If you write a sentence that falls outside the numbered list (as in, it is not numbered and not indented to be parallel), do not continue numbering (for example, from "4."). Indent the sentence so it is parallel, integrate it into the previous or subsequent numbered item, or start a new numbered list (from "1.").

### Grammar and Punctuation with Bulleted Lists

Do not use commas at the end of bullet points.

In general, do not use periods at the end of bullet points, as bullet points should list small entities or pieces of language, not complete sentences. However, in certain cases where a list of items needs to be presented and explained (for example, longer definitions, error messages, product features), using complete sentences and periods throughout a bullet point is fine. In this case, use sentence case capitalization. This is done often in the Platform Evaluation Guide, for example.

You can use a colon at the end of a list item to introduce an image directly following the next step, helping to maintain the connection.

If your list items contain introductory text, you can set the introductory text off with an en dash, with a space on either side (as shown in the [En Dash](#en-dash) section).

Make all the items in a list consistent in structure. If one item in the list uses introductory text, all items in the list should have introductory text. If one item uses full sentences with periods, all of them should.

See this example:

### Size of List Items

Do not make paragraph-long bullet points or numbered steps. If you have several long bullet points, turn those into paragraphs and use sub-headings. If you have several long, numbered steps, use sub-steps.

## Literal Text

If you need to write text that includes Markdown symbols for bold or italics, without the styling of bold or italics applied, wrap the text in a code snippet (``).

> `\_propertyName\_`

To render a URL without it being automatically turned into a clickable link, you can also use code formatting. For more details, see [URLs](#urls).

> `www.my-example-address.com`

## Menu Items

Menu items should be capitalized.

Menu items should be **bolded** in the documentation.

## Numbers {#numbers}

Write out numbers 1–10 (for example, "five") unless you are providing an example of data that is being entered into the system (in which case you would also italicize the number).

> Five customers
>
> In the **Order** field, enter *5*.

You can use ordinal numbers for positions in ranges of numbers and other technical purposes.

Write out ordinal numbers for 1–10 (for example, "fifth"), just like for numbers above.

> This is the fifth example

Do not write out ordinal numbers for 11 and above, just use the number + the suffix.

> 101st

Do not use ordinal numbers for dates (for example, on release notes).

> September 25, 2023

## Person

Address the reader of your documents using the second person instead of the first person: use "you" or "your" instead of "we", "our", or "us".

Assume that the reader is the person who's doing the tasks that you're documenting. Use "you" instead of "user", or use "end-user" when referring to the user of a Mendix app built on the Mendix Platform.

Always use "Mendix" instead of "we" in the regular documentation. Use "we" only in the Studio Pro release notes, which are written from the perspective of PMs or developers.

## Procedures and Examples

Use imperative mood for direct user instructions in procedural steps.

> Click **Save**.
>
> Enter the command `ollama pull model-id`.

Use descriptive language when referring to examples that illustrate the instructions. Do not write examples as if they are instructions to the user.

> This example uses DeepSeek-R1.

Do not convert descriptive example statements into imperative instructions, and do not convert instructions into passive descriptions.

## Personal or Sensitive Information

In text, screenshots, and code samples, do not show any personal or sensitive information, which includes, but is not limited to, real names, real email addresses, profile pictures of real users, API keys, and OpenIDs. Remove or blur out this information, or replace it with fake information. You can replace an OpenID with a random UUID that you generate using a [UUID generator](https://www.uuidtools.com/v4).

## Placeholders {#placeholders}

### Placeholders In Sample Code

Placeholders in sample code represent values that the user must replace when they use the sample code. To indicate a placeholder in inline code, use code formatting, italics, and all caps. To indicate a placeholder in a code block, use all caps and introduce the code block with text instructions that further clarify what the user needs to replace. For details on how to apply italics and code formatting together, see Shortcodes, Markdown, and HTML.

Follow [Google's placeholder guidance](https://developers.google.com/style/placeholders): Use a short but descriptive name for the placeholder; don't use generic text such as or "input" or "placeholder". Use uppercase characters with underscore delimiters, unless that doesn't make sense in context.

> When using the following command, replace `*NAMESPACE\_NAME`* with the name of your namespace.

wide760kubectl create namespace NAMESPACE\_NAME

Do not add any ornaments around placeholders that are in sample code, unless they are part of the code.

### Placeholders in Non-Code Elements

In other cases, for instance, where placeholders are for Studio Pro UI elements, ornaments can be added if they would add clarity. Ornaments can be things like single quotation marks or braces, depending on how the product looks.

> The selected page '*PAGE\_NAME*' expects an object of type '*OBJECT\_TYPE*', which is not available here.
>
> Go to the system texts editor: **App Explore** > **App '*****APP\_NAME*****'** > **System texts** > **Text**.

## Plurals in Parentheses

Do not put optional plurals in parentheses, for example "app(s)". Instead, use either the singular form or the plural form. If it is absolutely necessary to indicate both, write the singular form first, followed by "or" and the plural form, together in parentheses.

> Register the app environment (or environments).

## Quotation Marks and Apostrophes

Use double quotation marks (") instead of single quotation marks (') in the text when necessary to bring attention to certain terms or differentiate terms.

Single quotation marks (')—otherwise known as apostrophes in Unicode—should only be used in code snippets where necessary (meaning, where they are *actually* in the code, and not used to just *identify* code). In that case, apply code formatting (using "`" or "```"). They can be used as ornaments around placeholders only if they appear in the product UI. For more information, see [Placeholders](#placeholders).

## Serial Comma

We use the serial comma. (And we defend its usage when necessary!)

## Space After Period

Use a single space between a period and the first word of the next sentence.

## URLs {#urls}

Format an example URL (as in, one that does not need to be hyperlinked because it does not go to a Mendix or third-party site) with the Markdown code format. This is to avoid having the link appear as a broken third-party link during a link check.

## Verb Tense

Use present tense. The present tense is often easier to read and understand than the past or future tense. It is the best choice for most content. For more information, see the [Verb Tense](https://docs.microsoft.com/en-us/style-guide/grammar/verbs#verb-tense) section in *Microsoft Style Guide*.

> Save the file. Gulp rebuilds the code in the console as soon as you save the file.