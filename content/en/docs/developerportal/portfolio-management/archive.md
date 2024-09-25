---
title: "Archive Initiatives"
linktitle: "Archive"
url: /developerportal/portfolio-management/archive/
weight: 10
description: "Describes the Archive page in the Mendix Portfolio Management app."
---

## Introduction

The **Archive** page shows all the initiatives that are archived. You can search for an initiative in the search bar. You can [export Initiatives](/developerportal/portfolio-management/export-import-initiatives/) by clicking the {{% icon name="office-sheet" %}} **Export Initiatives** button. Clicking **Filters** enables you to filter initiatives.

{{< figure src="/attachments/developerportal/portfolio-management/archived-initiatives.png" >}}

The list contains the following information:

* **Initiative Name** – Clicking it opens a side pane that shows the details of the archived initiative as well as why the initiative was archived, additional comments, who archived the initiative, and when.

  {{% alert type="info" %}}When you view the details of an archived initiative, you can only **Post Comment**. You cannot edit any other information.{{% /alert %}}

* **Department** – This shows the department to which the initiative belongs.

* **Stage** – This shows which stage the initiative was in when it was archived.

* **Archiving Reason** – This shows the reason why the initiative was archived.

* **Archived Date** – This shows the date when the initiative was archived.

* **Archived By** – This shows the avatar of the user who archived the initiative.

* Icon of the linked apps – If there is only one linked app, clicking the icon shows the information about the app. If there are multiple apps or no linked apps, the icon is not clickable.

* Avatar of the initiative owner – Hovering over the avatar shows the name of the initiative owner.

* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this opens a menu that enables you to [restore](#restore-delete-archived-initiative) or [delete](#restore-delete-archived-initiative) the archived initiative.

  {{% alert type="info" %}}Both Portfolio Managers and Contributors can restore or delete an archived initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Members](/developerportal/portfolio-management/access-management/#members) section in *Access Management*.{{% /alert %}}

## Restoring or Deleting an Archived Initiative {#restore-delete-archived-initiative}

{{% alert type="info" %}}
Both Portfolio Managers and Contributors can restore or delete an archived initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Members](/developerportal/portfolio-management/access-management/#members) section in *Access Management*.
{{% /alert %}}

To restore or delete an archived initiative, on the **Archive** page, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) for that initiative, and then select **Restore** or **Delete**. After you restore an archived initiative, it goes back to the [Initiatives Overview](/developerportal/portfolio-management/initiatives-overview/) page.

Alternatively, to delete an archived initiative, you can also click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in the side pane where you view the archived initiative details, and then select **Delete**.
