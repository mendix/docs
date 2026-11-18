---
title: "{Major.Minor Version Number, for example 10.18}"
url: /releasenotes/{product}/{version}/ # Match the URL pattern of sibling release notes, for example /releasenotes/studio-pro/11.16/
#weight: Match the order of sibling release notes
description: "The release notes for {PRODUCT} {VERSION} (including all patches) with details on new features, bug fixes, and known issues."
numberless_headings: true
#If this page is mapped to a landing page, update the link there when renaming or moving it.
#KI: Reference Jira issues for known issues here. Example: # KI: "Short issue name": ABC-1234
---

[//]: # "Use for products released by version. Text in {braces} is a placeholder; replace it. Headings without braces are literal. Write only customer-facing changes, newest patch first. For each later patch, add a new version section above the previous one, with the same structure. Use only the elements that apply, and match sibling release notes."

[//]: # "Blog post used with Studio Pro only. Remove for other products."

{{% alert color="info" %}}For highlights of this release, see the [{Release blog post title}]({URL}) blog post.{{% /alert %}}

## {Major.Minor.Patch Version Number} {#{anchor, for example 10181}}

**Release date: {Month D, YYYY}**

[//]: # "Button used with Studio Pro only. Remove for other products."

{{% button color="info" href="{Download URL}" text="Go to Marketplace" title="Download version {Major.Minor.Patch Version Number} from Marketplace" %}}

### New Features

[//]: # "Use for a major new feature that customers can see and use. Give a major feature its own heading, then group the rest under Other New Features. If no feature needs its own heading, use a flat list. State who is affected and any action required. Link to the product documentation if required. State who is affected and any action required."

#### {Major New Feature Name}

{Name the feature and describe it, including the user benefit.}

#### Other New Features

* We added {description}.

### Improvements

[//]: # "Use for a functional fix or minor new feature that makes behavior more consistent or predictable. Group the rest under Other Improvements when you use subheadings, such as Performance. Otherwise use a flat list. State who is affected and any action required. Link to the product documentation if required."

#### Performance

* We improved {description}.

#### Other Improvements

* We improved {description}.

### Fixes

[//]: # "Use for a bug fix that customers reported or that changes product behavior. List notes with Zendesk tickets first, lowest ticket number at the top."

* We fixed an issue where {description}. (Ticket {number})

### Deprecations

[//]: # "Use for functionality that is no longer available or will be removed in a future version. State who is affected and any action required. Link to the product documentation if required."

* We deprecated {description}. It will be removed in {version}. Use {alternative} instead.
* We removed {description}. Use {alternative} instead.
* We dropped support for {description}, as it is no longer supported by the vendor.

### Breaking Changes

[//]: # "Use for a technical change that can break existing apps or workflows. State who is affected and any action required. Link to the product documentation if required."

* We changed {description}. {Who is affected.} To continue, {required action}. For more information, see [{Doc title}]({URL}).

### Limitations

[//]: # "Use for a limitation that won't be fixed in the same major version and has a workaround. Also document it on the product page."

* {Describe the limitation.}

### Known Issues

[//]: # "Use for an issue that will be fixed in the same major version. Repeat each open issue in every later version and patch section until it's fixed. Add a ticket number if available."
[//]: # "When it's fixed, add a Fixed in link to the earlier notes and remove it from the new notes' open list. In the Fixes section, add an anchor to the fix note, such as <a id=\"ki-fix-{name}\"></a>, and link back to the known issue. List fixed issues first, then issues with workarounds, then the rest."

* {Describe the issue.} (Ticket {number})
    * Workaround: {Describe the workaround.}
* {Describe the fixed issue.}
    * Fixed in [{version}](/releasenotes/{product}/{version}/#ki-fix-{name}).
