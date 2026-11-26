---
title: "Vale Rule Sample"
url: /vale-rule-sample/
description: "Describes sample sentences for manually checking custom Vale rules."
---

This file is for manual checks of the custom Vale rules. It isn't published. The CI workflow lints only files under content/en/docs.

After you change a rule, open this file in VS Code and check the underlined text and the **Problems** tab. If you prefer the command line, run `vale .vale/tests/sample.md`. An HTML comment above each case says what the rule named in the section heading must do. Alerts from other rules are noise.

* `flagged`: The case must produce an alert from the rule.
* `not flagged`: The case must not produce an alert from the rule. Wherever possible, it varies the `flagged` case just above it by the smallest change that the rule must ignore, such as code font or a leading period.
* `known gap`: The rule needs to flag the case but doesn't yet.
* `known false positive`: The rule flags the case but must not.

Keep each case together as a block with no blank lines inside it, except for a table, and don't repeat the exact text of a case. Vale reports only one of two identical sentences in a file.

## Mendix.Acronyms

Flags an acronym that isn't defined on first use, unless it's on the exception list.

<!-- flagged -->
The ZQX feature is enabled.

<!-- not flagged: REST is on the exception list -->
The REST feature is enabled.

<!-- flagged: the acronym comes first, which doesn't count as a definition -->
Enable the WMC (the widget management console) and share the WMC settings.

<!-- not flagged -->
Enable the widget management console (WMC) and share the WMC settings.

<!-- not flagged: the rule skips link text, so a link titled with acronyms is fine -->
See [LTS, MTS, and Monthly Releases](/releasenotes/studio-pro/lts-mts/) for details.

<!-- flagged: the link above doesn't define the acronym, so the first plain use is flagged -->
Pick an LTS version for your app.

<!-- not flagged: the spelled-out name is inside the link, and the parenthesized acronym after it counts as the definition -->
Open the [widget cache manager](/refguide/) (WCM) and share the WCM settings.

## Mendix.AmericanSpelling

Flags British spellings.

<!-- flagged -->
Set the colour property in the style file.

<!-- not flagged: skips code font -->
Set the `colour` property in the style file.

<!-- flagged -->
The request was cancelled.

## Mendix.Capitalization

Flags lowercase Mendix terms and third-party names.

<!-- flagged -->
Open studio pro and the team server.

<!-- flagged -->
Open the git folder.

<!-- not flagged: a lookbehind skips a leading period -->
Open the .git folder.

<!-- flagged -->
Use the mendix library.

<!-- not flagged: a lookbehind skips a hyphen -->
Use the mendix-ui library.

<!-- flagged: a period and a space before the word don't skip it, because a sentence can start with it -->
See the project. mendix is a platform.

<!-- flagged -->
Use the java package.

<!-- not flagged: a lookahead skips a dotted name -->
Use the java.lang package.

<!-- flagged -->
Connect as the user postgres.

<!-- not flagged: a lookbehind and a lookahead skip a quoted value -->
Connect as the user "postgres".

<!-- flagged -->
Select the teamcenter connector.

<!-- not flagged: the match is case-sensitive -->
Select the TEAMCENTER connector.

<!-- flagged: the words follow commas, which an earlier version of the rule missed -->
Install the tools for macos, ios, and java.

<!-- flagged -->
Open powershell now.

<!-- not flagged: a lookahead skips a file extension -->
Open powershell.exe now.

<!-- flagged: the lookahead skips only a period followed by a letter, not a period that ends the sentence -->
Open powershell.

## Mendix.CompoundWords

Flags terms that Mendix writes as one word or hyphenates.

<!-- flagged -->
Select the check box.

<!-- not flagged -->
Select the `check box`.

<!-- flagged -->
Re-use your password.

<!-- not flagged: the rule fixes only specific re- words -->
Re-enter your password.

<!-- flagged -->
Double click to open the page.

<!-- known gap: to avoid false positives for nouns, the rule matches "double click" only before any, in, it, on, the, or to. Other next words, such as a UI label, aren't matched. -->
Double click **Edit** to open the page.

## Mendix.ConditionalAdverbs

Flags words that add uncertainty.

<!-- flagged -->
Use the would keyword in the file.

<!-- not flagged -->
Use the `would` keyword in the file.

<!-- flagged -->
This actually works.

## Mendix.EmDashes

Flags spaces around an em dash.
<!-- flagged -->
The page closes — the data is saved.

<!-- not flagged -->
The page closes—the data is saved.

<!-- known gap: list items aren't scoped (to avoid double alerts with Mendix.ListIntroductions) -->
* This list item is long enough to pass the 40-character introduction limit — and then has a dash.

## Mendix.Emphasis

Flags bold or italics used for emphasis.

<!-- flagged -->
You must **not** delete the entity.

<!-- not flagged: the rule matches only lowercase emphasis words -->
Open the *Not Found* page.

<!-- flagged -->
Select the **all** tab.

<!-- not flagged: the rule matches only lowercase emphasis words -->
Select the **All** tab.

## Mendix.HeadingPunctuation

Flags end punctuation in headings, except question marks.

<!-- flagged -->
#### What Is an Entity.

<!-- not flagged -->
#### What Is an Entity?

<!-- flagged -->
#### Overview:

## Mendix.HeadingTitleCase

Flags headings that aren't in title case.

<!-- flagged -->
#### Using macos and ios

<!-- not flagged -->
#### Using macOS and iOS

<!-- flagged -->
#### Edit the config.json file

<!-- not flagged -->
#### Edit the config.json File

<!-- flagged -->
#### add a new entity

<!-- known gap: Vale accepts a heading when at least 80% of its words are capitalized correctly -->
#### How to add an Entity to Your App

## Mendix.HttpLinks

Flags links that use http.

<!-- flagged -->
Read the [insecure page](http://example.org/page/).

<!-- not flagged: localhost doesn't support https -->
Read the [local page](http://localhost:8080/page/).

<!-- not flagged -->
Enter `http://example.org/page/` in the address bar.

## Mendix.IconShortcodes

Flags plain-text icon descriptions that need an icon shortcode.

<!-- flagged -->
Click the pencil icon to edit the entity.

<!-- not flagged: headings aren't checked -->
#### Click the Pencil Icon

<!-- flagged -->
Click the three-dot menu to see more options.

## Mendix.Inclusive

Flags non-inclusive terms.

<!-- flagged -->
Set the whitelist option in the file.

<!-- not flagged -->
Set the `whitelist` option in the file.

## Mendix.Latin

Flags Latin abbreviations.

<!-- flagged -->
Enter e.g. in the field.

<!-- not flagged -->
Enter `e.g.` in the field.

<!-- flagged -->
Use a data type (i.e. an integer).

<!-- not flagged -->
Add the entity, the attribute, etc.

## Mendix.LinkText

Flags generic link text.

<!-- flagged -->
Read [this page](/refguide/) for details.

<!-- not flagged: the rule matches only link text that is exactly a generic phrase -->
Read [more about this page](/refguide/) for details.

<!-- flagged -->
Click [here](/refguide/) for details.

<!-- not flagged -->
Click [here and there](/refguide/) for details.

## Mendix.ListIntroductions

Flags a hyphen, double hyphen, em dash, or mis-spaced en dash after a list item introduction of up to 40 characters.

<!-- known false positive: a spaced em dash in the first 40 characters looks like an introduction, though this is a mid-sentence aside. The dash is still wrong, but the message is misleading -->
* Use an entity — and its attributes — to store data in the database.

<!-- known gap: a spaced hyphen followed by a digit is assumed to be a number range, not an introduction -->
* Excel 97 - 2003 files are supported.

<!-- flagged: a spaced hyphen followed by a letter reads as an introduction, even if the introduction ends in a digit -->
* **Windows 10** - Supported.

<!-- not flagged -->
* Use an entity—and its attributes—to store data in the database.

<!-- flagged -->
* **Entity** - Stores data.

<!-- flagged -->
* **Association**— Links entities.

<!-- flagged -->
* **Domain Model** —Holds the structure.

<!-- flagged -->
1. **Microflow** - Runs logic.

<!-- flagged: en dash with a missing space after -->
* **Page** –Shows data.

<!-- flagged: en dash with a missing space before -->
* Widget– Shows data.

<!-- flagged -->
* **Module** -- Groups data.


<!-- not flagged (non-breaking space) -->
* **URL** – The public URL.

<!-- known gap: introductions in code font aren't matched -->
* `entity` - Stores data.

<!-- known gap: only introductions up to 40 characters are matched -->
* **A very long list item introduction that exceeds forty characters** — Describes data.

## Mendix.OxfordComma

Flags a missing comma before the last item in a series of three or more.

<!-- flagged -->
Add the entity, the attribute and the association.

<!-- not flagged -->
Add the entity and the attribute.

<!-- flagged -->
You can import, export or delete the data.

<!-- not flagged -->
Optionally, import and export the data.

<!-- known false positive -->
Open the app, import and manage the data.

## Mendix.ParagraphBreaks

Suggests a blank line when a sentence ends at the end of a line and the next line starts a new sentence.

<!-- flagged -->
This sentence ends here.
This sentence starts a new line.

<!-- not flagged: the next line starts in lowercase -->
This sentence runs on
and continues on the next line.

## Mendix.ProductNames

Flags deprecated product names.

<!-- flagged -->
Sign in to the Developer Portal.

<!-- not flagged: the check is case-sensitive -->
Sign in to the developer portal.

<!-- flagged -->
Use Data Hub to find the service.

<!-- flagged -->
Open **Sprintr** to see your apps.

## Mendix.Repetition

Flags a repeated function word.

<!-- flagged -->
She had a a long day.

<!-- not flagged: the rule checks only a predefined list of function words -->
She had had a long day.

<!-- not flagged: a bold label followed by the same word -->
Use the **Name** name field.

<!-- not flagged: version placeholders -->
Mendix 10.x x.x versions share this behavior.

## Mendix.Spelling

Flags words that aren't in the dictionary or the accepted-word list.

<!-- flagged -->
Select recieve in the list.

<!-- not flagged: bold and italic text isn't checked -->
Select **recieve** in the list.

<!-- flagged -->
Set the atribute value.

<!-- not flagged: words with underscores are treated as code and skipped -->
Set the atribute_value value.

### Covered by Other Rules

Another rule flags the incorrect form of each of these words, so Mendix.Spelling must not flag them too. Each line must produce an alert from the rule named in its first sentence and no alert from Mendix.Spelling. Keep these lines in sync with the "Terms covered by other rules" filter in Spelling.yml.

<!-- covered by other rules -->
Mendix.Capitalization flags hashicorp, idp, ios, javascript, JQuery, macos, maia, oauth, openshift, postgres, postgresql, powershell, sql, and yaml.

<!-- covered by other rules -->
Mendix.CompoundWords flags airgapped, dropzone, dropzones, submicroflow, and submicroflows.

<!-- covered by other rules -->
Mendix.AmericanSpelling flags onwards.

## Mendix.Terminology

Flags terms that the terminology guide replaces.

<!-- flagged -->
Use the persistent entity.

<!-- not flagged: persistent is fine in its general sense; the rule targets entities, objects, and attributes -->
Use a persistent connection.

<!-- flagged -->
Log in to the portal.

<!-- not flagged: the pattern doesn't match "log in" inside another word -->
Read the blog in the portal.

<!-- flagged -->
Click on the button.

<!-- flagged -->
| Task | Instruction |
| --- | --- |
| Sign in | Log out of the portal. |

<!-- flagged: before "corner", the compound needs a hyphen -->
Click the top right corner of the page.

<!-- flagged: without "corner", the rule keeps the writer's separator -->
Select the top right of the page.

## Mendix.Uppercase

Flags all-caps words used for emphasis.

<!-- flagged -->
Do NOT change it.

<!-- not flagged: NOT FOUND is on the rule's exception list -->
The server returns HTTP 404 NOT FOUND.

<!-- flagged -->
NEVER delete the entity.

<!-- not flagged -->
Use the REST API with SAP BTP.

## Mendix.Wordiness

Suggests simpler alternatives for wordy phrases.

<!-- flagged -->
Add the entity in order to store data.

<!-- flagged -->
Please inform the team.

<!-- known gap: the swap keys are lowercase, so a capital letter at the start of a sentence isn't matched -->
Inform the team.
