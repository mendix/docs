---
title: "Portfolio Management"
url: /developerportal/portfolio-management/
weight: 25
description: "Describes the Mendix Portfolio Management app."
#The anchor #portfolios-settings and #privacy-settings below is mapped, so it should not be removed or changed. If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Portfolio Management](https://portfolio.mendix.com) tool is available to all Mendix users. It enables staying informed about initiatives and managing them in the different development stages. It provides portfolio managers, business stakeholders, and developers with everything they need to collaborate effectively in one place and bring new initiatives to the Mendix Platform. 

With the Portfolio Management tool, you can manage [active initiatives](/developerportal/portfolio-management/initiatives-overview/) and [archived initiatives](/developerportal/portfolio-management/archive/) in a portfolio. If you are Portfolio Managers, you can [manage access](/developerportal/portfolio-management/access-management/) and configure [portfolio settings](/developerportal/portfolio-management/portfolio-settings/) of a portfolio.

To start the Portfolio Management app, open the [Global Navigation menu](/developerportal/) ({{% icon name="layout-rounded-1-filled" %}}) of the Mendix Portal, and select **Portfolio**.

## Portfolio Landscape Overview {#portfolio-landscape}

When you start the Portfolio Management app for the first time, an introduction page opens. The introduction page describes the new features and gives helpful information. You can click **Get Started** to open the **Portfolio Landscape Overview** page. After that, when you start the Portfolio Management app, the **Portfolio Landscape Overview** page directly opens. You can click **Learn more about Portfolio Management** to go back to the introduction page.

### My Portfolios vs Company Portfolios {#my-porfolios-vs-company-portfolios}

The **Portfolio Landscape Overview** page contains two sections: **My Portfolios** and **Company Portfolios**. A section only appears if there is at least one [portfolio card](#portfolio-card) in that section.

{{< figure src="/attachments/developerportal/portfolio-management/portfolio-landscape-overview.png" alt="portfolio-landscape-overview" >}}

* **My Portfolios** – This section shows all the portfolios where you are a portfolio member. Clicking a portfolio card opens the portfolio.

* **Company Portfolios** – This section shows all the restricted and open portfolios in your company, for which you are not a portfolio member. 
    * Restricted portfolios – Clicking the portfolio card shows more details about the restricted portfolio. To join a restricted portfolio, click **Request to Join** on the portfolio card. A Portfolio Manager needs to approve this [access request](/developerportal/portfolio-management/access-management/#access-requests).
    * Open portfolios – You can directly access the open portfolio by clicking the portfolio card. You will have the same access rights as the [Viewer](/developerportal/portfolio-management/access-management/#members) of the portfolio. To join an open portfolio, click **Request to Join** on the lower-left corner after opening the portfolio. A Portfolio Manager needs to approve this [access request](/developerportal/portfolio-management/access-management/#access-requests).

### Portfolio Cards {#portfolio-card}

On the **Portfolio Landscape Overview** page, each card represents a portfolio. On a portfolio card, you can see the name of the portfolio, the company to which it belongs, the [privacy settings](#privacy-settings), and the avatars of Portfolio Managers (up to avatars of four Portfolio Managers).

#### Different Privacy Settings of a Portfolio {#privacy-settings}

{{% alert color="info" %}}A Portfolio Manager change the **Privacy Settings** on the [Portfolio Settings](/developerportal/portfolio-management/portfolio-settings/) page.{{% /alert %}}

Currently, the privacy settings of a portfolio can be private, restricted, or open. The table below shows their differences:

| Portfolio type | Visible in the **Company Portfolios** section?         | Can users access the portfolio without joining the portfolio? | Can Portfolio Manager add users to the portfolio? * | Can users apply to join the portfolio? ** | Can Mendix Admins govern the creation of the portfolio? *** |
|-|-|-|-|-|-|
| Private        | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}} |{{< icon name="checkmark-circle-filled" color="green" >}}|{{< icon name="remove-circle-filled" color="red" >}}|{{< icon name="remove-circle-filled" color="red" >}}|
| Restricted     | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |{{< icon name="checkmark-circle-filled" color="green" >}}|{{< icon name="checkmark-circle-filled" color="green" >}}|{{< icon name="remove-circle-filled" color="green" >}}|
| Open           | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |{{< icon name="checkmark-circle-filled" color="green" >}}|{{< icon name="checkmark-circle-filled" color="green" >}}|{{< icon name="remove-circle-filled" color="green" >}}|

\* A Portfolio Manager can add users to the portfolio on the [Access Management](/developerportal/portfolio-management/access-management/#add-users) page.

** A user can apply to join the portfolio by clicking the **Request to Join** on the portfolio card. A Portfolio Manager needs to approve this [access request](/developerportal/portfolio-management/access-management/#access-requests).

\*** If the toggle on the [Privacy Requests](/control-center/portfolios/#privacy-requests) tab is turned on in Control Center, a Mendix Admin needs to approve the creation of a restricted or open portfolio. In that case, a Mendix Admin will receive a notification about the request and can approve or reject the request from the [Control Center](/control-center/portfolios/#privacy-requests). The **Privacy Settings** of the portfolio will be **Private** until a Mendix Admin approves the request.

{{< figure src="/attachments/developerportal/portfolio-management/opened-portfolio.png"  >}}

### Creating a New Portfolio {#create-portfolio}

On the **Portfolio Landscape Overview** page, you can create a new portfolio as follows:

1. On the upper-right corner of the page, click **Create Portfolio**. The **New Portfolio** dialog box opens.

2. Enter **Portfolio Name** and **Description** for the new portfolio.

3. For **Privacy Settings**, select **Private**, **Restricted**, or **Open**. For details on privacy settings, see the [Different Privacy Settings of a Portfolio](#privacy-settings) section, above.

4. For **Prioritization Model**, select [WSJF Prioritization](/developerportal/portfolio-management/initiatives-overview/#wsjf) or [RICE Prioritization](/developerportal/portfolio-management/initiatives-overview/#rice).

5. From the **Currency** drop-down list, select the default currency for this portfolio.

6. Click **Create**.

The portfolio is created. You are the first Portfolio Manager of this portfolio. You can start [inviting other people](/developerportal/portfolio-management/access-management/#add-users) to the portfolio.

### Opening a Portfolio 

When you click a portfolio card to which you have access, the portfolio opens with a menu on the left side. 

{{< figure src="/attachments/developerportal/portfolio-management/opened-portfolio.png" >}}

Clicking a menu item opens the corresponding page:

* [Initiatives Overview](/developerportal/portfolio-management/initiatives-overview/)
* [Archive](/developerportal/portfolio-management/archive/)
* [Access Management](/developerportal/portfolio-management/access-management/)
* [Portfolio Settings](/developerportal/portfolio-management/portfolio-settings/) (only available for Portfolio Managers)

## Read More

* [Application Portfolio Management with Low-Code](https://www.mendix.com/application-portfolio-management/)
* [Make Strategic Decisions with Portfolio Management](https://academy.mendix.com/link/paths/145/Make-Strategic-Decisions-With-Portfolio-Management)
* [Why Portfolio Management is Crucial to App Development at Scale](https://www.mendix.com/blog/why-portfolio-management-is-crucial-to-app-development-at-scale/)
