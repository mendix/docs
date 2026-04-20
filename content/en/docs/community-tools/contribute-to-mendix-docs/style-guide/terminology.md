---
title: "Terminology"
url: /community-tools/contribute-to-mendix-docs/style-guide/terminology/
weight: 30
description: "Usage guidelines for general terminology in Mendix documentation, covering technical terms, formatting conventions, word choice, and inclusive language."
---

## How to Use This Section

This section contains decisions and usage guidelines for general (non-Mendix specific) terminology, including inclusive language guidelines. For guidelines on Mendix-specific terminology, see the Mendix Product Naming Guide.

Under each term are the following:

Guidelines.

> Example

## 1-1 & one-to-one

When referring to relationships and associations, it is better to write this out as "one-to-one" rather than "1-1." However, where space is limited (for example, in a long title), it may be preferable to use "1-1."

## activities

The best way to write an activity name is to capitalize the first word of the activity name and then to either add a cross-reference to the activity doc or to bold the activity name (in order to offset it from regular text somehow).

> the [Create variable](/refguide/create-variable/) activity
>
> the **Create variable** activity

## add-on

When using as a category title or heading, only capitalize "Add" and add an "s" without an apostrophe.

> Add-ons

Note: this should not be used to describe APD, ATS, or QSM, as these are now referred to as [Partner Solutions](/appstore/partner-solutions/).

## Agile

Capitalize when referring to the methodology. We also capitalize "Scrum" and "Sprint."

> Work in Agile.

## AM / PM

Use "AM" and "PM" for times, via the MSG.

## angle brackets (not "pointy brackets")

Use to refer to "< >".

## app/application

Use "app" or "application" when referring to apps in general. Do not capitalize (meaning, do not write "Mendix App").

The full word "application" has a more well-rounded meaning to it (i.e., web and mobile apps), whereas "app" may connote just mobile app to the reader. Accordingly, it can be better to use "application" at the beginning of documents and then switch to "app" later on. We want to make it clear that Mendix is not just for building mobile apps, but all kinds of applications.

In the context of development and project management, sometimes using "project" can significantly enhance the clarity of the concept, as demonstrated in [Centralized Project Roles](/control-center/roles-and-permissions/#centralized-project-roles). In such cases, we can use "project" instead of "app" or "application". Note that such usage of "project" should be agreed upon between the Project Manager and the Technical Writer. For further guidelines, see [project](#project).

## app owner

This is not a formalized/Mendix term (in comparison to [App Contact](/developerportal/general/app-roles/)), so we cannot assume the user knows what this is. This should be defined in general terms and made clearer via context (for example, via the "Copyright" example in the [Insights Hub module documentation](/partners/siemens/mindsphere-module-details/#configuring-the-os-bar)) that it is the user's responsibility to define/interpret what an app owner is for their app.

## article, document, page

When referring to a document, do not use "article." Use "document," "page," or the title of the document.

## back end/front end & back-end/front-end

Do not use if you can use a more specific term (such as SCSS folder or database).

Two words as a noun. Hyphenate as an adjective.

## beta, preview, general availability

Do not capitalize when used generically. Most instances of using "beta" and "general availability" are generic.

Capitalizing "Beta" can be done when the release is numbered in relation to the fact that it is beta: "Studio Pro 10 Beta 1," "Studio Pro 10 Beta 2," etc.

References: [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/p/preview), [Software release cycle](https://en.wikipedia.org/wiki/Software_release_life_cycle).

## blocklist & safelist

Use "block list" (noun) / "blocklist" (verb) instead of "blacklist."

Use "safe list" (noun) / "safelist" (verb) instead of "whitelist."

## Boolean & data types

"Boolean" should be capitalized, as it is named after a person.

Other data types should not be capitalized.

## braces (not "curly brackets")

Use to refer to "{ }".

## brackets

There are four types of brackets which should be referred to in the following ways:

* "<>" – angle brackets
* "{}" – braces
* "()" – parentheses
* "[]" – square brackets

## buildpack

Write as one word.

## burndown chart

Write as one word.

## camelCase

To be very specific on capitalization (and avoid using lesser-known terms like "PascalCase" and "dromedaryCase"), use "lowerCamelCase" and "UpperCamelCase" when specifying naming conventions.

## certificate authority

Do not capitalize.

Can also be used as the "CA" acronym when referring to the actual certificates: "CA certificates."

## checkbox

Write as one word (following the *Microsoft Style Guide*).

Use the verbs "select" and "clear."

## check mark

Write as two words (following the *Microsoft Style Guide*).

## click

Use "click" and not "click on."

> Click **Name**.

## data

Always use with a singular verb.

> All the data changed in a transaction is only available within that specific transaction.

## data container

This term is used for widgets that provide contained widgets with data (for example, a data view or list view).

Previously, the more technical description "inside the context of an entity" was used.

## dataset

Write as one word.

## deploy

The act of putting a Mendix app into an environment where it has access to all the resources it needs to run. This is triggered in the Developer Portal, or in the modeler by clicking **Run** or **Run Locally**.

Use *deploy to* when referring to a cloud environment.

> Click **Run** to deploy the app to SAP BTP

## dialog box

A dialog box enables making configuration choices. It has menus and buttons for the user to interact with. In that way, it differs from a pop-up window.

Do not use just "dialog" when describing a UI element.

## dock

Use "pane" instead.

## double-click

Hyphenate for the verb.

For the noun, use "double-clicking".

## drop-zone

Hyphenate.

## drop-down menu or list

Use only if necessary to describe how an item such as a menu or list works or what it looks like.

"Drop-down menu" is mostly used for where you select an option at the top-bar of an app. The selection will often take the user to a different page.

"Drop-down list" is mostly used for selecting an option when there are a variety of options of available. A list is used where also a radio button or something like a list box could be used.

Do not use "drop down" or "dropdown" as a noun to mean a menu or a list or as a verb to describe clicking a menu or downloading a file (unless referring to Mendix core widget).

## email

Do not hyphenate.

## endpoint

Write as one word.

## end-user

The user of a Mendix app (as in, an app team builds an app, and the end-users use that app).

Hyphenate.

## execute

Use "run" instead of "execute," except where "execute" occurs in the code and thus for reasons of accuracy it must be used in the documentation.

This is also advised by the [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/e/execute).

## exotic

Use "unusual" instead of "exotic."

> unusual DateTime formats

## experimental

Do not use the term experimental in the documentation. This can lead to issues with analysts and customers not believing that features can be used, particularly if they are not removed in a timely manner.

If a stakeholder wants to use the term "experimental", strongly advise them not to. If necessary, use "beta" instead.

## functionality

Use in the singular as a mass noun. Do not use "functionalities."

You are going to add more advanced functionality to the app.

## Git

Capitalize when referring to the system or using conceptually.

Reference: [Git](https://git-scm.com/).

## home page

Write as two words.

## hover over

Use consistently.

Do not use "mouse over."

## how-to

Do not capitalize as a document type unless it is in a category name or a heading, in which case use "How-to" or "How-tos."

Do not add an apostrophe before the "s" to make plural, just use "how-tos."

> The **Create and Deploy Your First App** how-to

## inline

Write as one word.

## internet

Do not capitalize.

## internet of things

Do not capitalize, even when introducing the acronym "IoT."

## Java

Java, and nearly all computer languages, should be capitalized. If in doubt, reference this list of [programming languages](https://en.wikipedia.org/wiki/List_of_programming_languages).

## left/right

Can use "left-side" and "right-side" as adjectives.

> The left-side section of the window pane has been updated.

However, it is even more clear to use "on the left side" and "on the right side."

> The section on the right side of the window pane has been updated.

To be even more specific, use "upper-left," "bottom-right," etc.

> The bottom-left section of this window pane presents the properties.

Do not use "left-hand" or "right-hand."

## lifecycle

Write as one word.

## low-code, low code

When used as an adjective, include a hyphen between the words. Otherwise, don't use a hyphen.

Do not capitalize as a noun or as an adjective.

> Mendix's low-code development platform.
>
> Low code is a new and emerging market.

## lower-left/lower-right

When used as an adjective, include a hyphen between the words.

> The lower-right corner of the original image is mapped to the fourth corner of the parallelogram.

Do not use "bottom left" and "bottom right".

## master & slave

Use "primary" or "leader" instead of "master," except where "master" occurs in the code and thus for reasons of accuracy it must be used in the documentation (until it is changed in the code). Other organizations (like Facebook) have replaced "master" with "main," and such cross-references also appear in the docs.

Use "follower" instead of "slave," except where "slave" occurs in the code and thus for reasons of accuracy it must be used in the documentation (until it is changed in the code).

## metamodel

Write as one word. Do not capitalize.

## Microsoft SQL Server

Capitalize in all instances, as this is a Microsoft product.

## mouse pointer

Use this instead of "mouse cursor" or "cursor."

## native mobile

Use lower-case unless it is part of a term like "Mendix Native Mobile Builder".

## navigation pane

Use to refer to the navigation interface on the left side of the screen in the Developer Portal.

Do not capitalize.

> Select your app in the Developer Portal, then click **Backups** in the navigation pane.

## no-code, no code

When used as an adjective, include a hyphen between the words. Otherwise, don't use a hyphen.

Do not capitalize as a noun or as an adjective.

> It is a no-code development platform.
>
> No code is a new and emerging market.

## N/A

Use this (all-caps) acronym for "not available."

## on-premises

When we talk about the physical location of hardware that contains Mendix software, we're referring to a location, or premises. "Premises" means the land and buildings owned by someone, especially by a company or organization.

"Premise" means something completely different: an idea or theory on which a statement or action is based. For example, "Your claim that Mendix can't build apps six times faster than traditional development are based on a false premise."

Do not use "on-premise," "on premise," "on-prem," "on prem," or any other variation of "on-premises."

> On-premises deployment is the process of…

## pane (not "dock")

Use "pane" to refer to the various movable and dockable window panes in the Modeler.

Do not use "dock" as a synonym for pane. "Dockable window pane" is acceptable.

## parentheses

Refer to parentheses – "()" – rather than "round brackets" or just "brackets."

## persistable vs. persistent

"Persistable" is a property that is used in the UI of the Modeler, where you can choose to make an entity "persistable" or "non-persistable."

"Persistable" can be used in this context to describe both the property and the entity. "Persistent" does not need to be used in this context, in order to avoid confusion.

> The persistable property of an entity in the domain model defines…
>
> When an entity is declared persistable, a database table is created.

## please

Avoid using "please" in instructions unless the user is asked to do something very inconvenient or the product is to blame for a difficult situation (for example, via a known issue).

## pop-up window

A pop-up window displays information (for example, an error message). There is nothing the user can do with a pop-up window except read the information and close the window. Avoid confusion of UI elements between pop-up windows and dialog boxes (where the user can input something, select something, etc.).

Never use just "pop-up" on its own to describe a UI entity.

> A pop-up window will appear telling you the error code.

## Postgres

Capitalize, as this is the name of a product.

## pronouns & gender identity

Use "they" instead of "he," "she," "he/she," or "he or she." You can also use "the user."

Use "their" instead of "his" or "her."

> For the user and their application needs…

Do not use "male" and "female" as data examples (in enumerations, for example) unless you are also adding "non-binary" and "unlisted." Due to changing terminology and discourse, it is best to avoid "male" and "female" as data examples altogether.

## project {#project}

Do not use generically. Use "app" instead.

Only use when it appears in the UI.

One exception where "project" can be used in explanatory or descriptive text is when it significantly enhances the clarity of the concept (in the context of development and project management), as demonstrated in [Centralized Project Roles](/control-center/roles-and-permissions/#centralized-project-roles). Any such usage of "project" should be agreed upon between the Project Manager and the Technical Writer.

## quick start

Spell as two words without a hyphen.

Spelling of this doc type varies in the industry, but the decision to go with two words is based on usage from [Siemens](https://cache.industry.siemens.com/dl/files/923/109739923/att_890063/v1/A5E31805656-06_SIPROCESS_GA700_KBA_en_en-US.pdf), [AWS](https://aws.amazon.com/quickstart/?solutions-all.sort-by=item.additionalFields.sortDate&solutions-all.sort-order=desc&awsf.filter-content-type=content-type%23quick-start&awsf.filter-tech-category=*all&awsf.filter-industry=*all), and [Microsoft](https://support.microsoft.com/en-au/office/microsoft-365-quick-starts-25f909da-3e76-443d-94f4-6cdf7dedc51e).

## recommend

Use "Mendix recommends" rather than "we recommend".

## rethrow

Write as one word.

## revert vs. roll back

"Revert" describes making an error look like it never happened. Use when a mistake happened that wasn't modeled (meaning, behavior outside of what was modeled).

"Roll back" describes wanting to see what happened that caused the rollback. Use when a user makes a mistake and the app has been modeled to deal with that mistake (for example, canceling an order halfway through a process causes a rollback).

The result of both situations is the same.

## right-click

Hyphenate for the verb.

## role

Do not capitalize job roles (for example, "business developer") unless they are Mendix user roles (for example, "Business Engineer," "SCRUM Master") or Mendix-internal titles (for example, "Product Manager" and "Customer Success Manager" for referring to communication between the Mendix community and Mendix).

## SQL

Stands for Structured Query Language.

Does not have to be defined for the acronym.

> An SQL statement

## standalone

Write as one word, not with a hyphen.

## Scrum

Capitalize in all instances. We also capitalize "Agile" and "Sprint."

## sign in/sign out

When referring to an action which is taking place, use "sign in" and "sign out" instead of "log in," "login," "log out," "log off," etc.

When referring to a button or other element of the UI, refer to the UI text.

> Sign out of the Developer Portal by clicking **Log out** in the menu under your avatar.

## single sign-on

Write "sign-on" with a hyphen for this compound noun.

## Sprint

Capitalize in all instances. We also capitalize "Agile" and "Scrum."

## Subversion

Capitalize in all instances (because this is a product name).

## sync

Can use, along with "synchronize". We can also use as a phrasal verb, such as "sync up" or "in sync with".

## third-party

Hyphenate.

Do not use "3rd party."

Do not use as a noun. Only use as an adjective.

> Mendix integrates with third-party systems such as SAP.

## time zone

Spell as two words unless referencing code where it is one word (like in "`timezone`").

## toggle

Can use as a noun.

You may notice an **Enable dev mode** toggle on the app home page.

Can use as a verb.

> Click this to toggle the protection level for the content.

## upper left/upper right

When used as an adjective, include a hyphen between the words.

> The upper-left corner of the original image is mapped to the first corner of the parallelogram.

Do not use "top left" and "top right".

## user vs. end-user

A "user" is a user of the Mendix Platform (apps in development, app projects, project management, Developer Portal, etc.).

An "end-user" is a user of a Mendix app built on the platform. This term will be used less in the documentation, as we document for Mendix Platform users and not general Mendix app users in most cases.

## v for version

Use lower-case "v" and not "V" for abbreviating "version."

You can use "v" for Mendix Cloud versions, API versions, and third-party products/references.

> Mendix Cloud v4, Deploy API v3, OData v4

Do not use a lower-case "v" to describe a version for Mendix, Studio Pro, Mendix Runtime, Native Builder, Native Mobile Builder, Native Template, or Make It Native app. Generally, Mendix products released in numbered versions (with release notes organized by numbered versions) do not need "v" (or "version") to describe the version. Just use {Mendix product name} + {version number}.

> Studio Pro 10.1

## version and above or below

Use "above" (or "below") to describe the starting point for a range of applicable versions. Do not use "higher" or "later" (although these are not strictly incorrect; we just need to stay consistent).

> For Studio Pro 10.1 and above . . .

## web

Do not capitalize.

> Restart the web services.

## X-axis & Y-axis

Capitalize "X" and "Y".