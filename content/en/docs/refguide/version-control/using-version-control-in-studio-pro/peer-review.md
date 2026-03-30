---
title: "Using Version Control History"
url: /refguide/version-control-using-history/
weight: 60
description: "Describes how to use the History features of version control."
---

## Introduction

To review the changes for a particular revision, use the [History menu](/refguide/history-dialog/).

### History {#history}

The history of the app is a list of all revisions that have been committed. To view the history of the app, click the **History** button in the **Changes** pane, or choose the **Version Control** > **History** menu item.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/history-button.png" max-width=60% alt="History Button" >}}

For Git-based applications, revisions are sorted according to the commit history, which sometimes does not reflect the chronological order due to Git's decentralized nature and local commits. The **History** dialog box shows the revision number, date, time, author, and message of each revision.

{{% alert color="info" %}}

The [Name and Email settings](/refguide/preferences-dialog/#name) can be adjusted by the user and are not used for authenticating with the version control server. If you notice a suspicious value in the commit history, it is likely a private email address set through another tool in the global Git configuration, but the user has been authenticated as usual.

{{% /alert %}}

Select a revision to see additional details, such as related stories, changed documents, Studio Pro version, and changes on disk. Icons summarize the kinds of changes that happened in the app.

{{< figure src="/attachments/refguide/modeling/menus/version-control-menu/history-dialog/revisions.png" class="no-border" >}}