---
title: "UI Integration"
parent: "integration-use-cases"
menu_order: 4
draft: true
---

## 1 Introduction

There are various types of UI integration. This best practices document will describe the types below.

* **Deep-links** – This is the most typical way to integrate from the UI of one Mendix app to another Mendix app. This includes authentication and business context so that a specific page in a specific context can be opened in the second app. One important consideration is whether to open the second app in the same brower tab, which will be a seamless experience for the user, or to open it in a separate tab to enable working in parallel in both apps. For more details, see [Deep Linking from App to App](#deep) below.
* **Web-links or URLs** – This type of integration goes from, for example, a website to a Mendix app that fulfils a functional part of a portal. For more details, see [Website Integration](#web) below.
* **Content management system (CMS)**  – This type of integration enables running a Mendix app in part of the UI of a marketing-oriented portal. The CMS will render the frame with the company header, while the Mendix app renders a pane in the portal via a reverse proxy for functional interaction. For more details, see [CMS UI Integration](#cms) below.
* **Content delivery network (CDN)** – This type of integration means that in front of your website, CMS, and/or Mendix app, there is a geographically distributed network of content delivery nodes that focus on caching as much content as possible. This allows for shorter distance from the browser to images and other content. For more details, see [CDN UI Integration](#cdn) below.

## 2 Deep Linking from App to App {#deep}

In microservice systems, there is often a dashboard app, portal, or landing page where end-users log in (for example, via SSO). This often contains workflows, overviews, and statuses. When the end-user wants to perform real work in an area, they are deep-linked into another app and work there.

Integration via a UI link is becoming more and more common. It enables developing a UI only once in the app where it belongs, and then linking other users there when they need to perform a workflow there. Most users use the [Deep link module](https://appstore.home.mendix.com/link/app/43/) available from the Mendix App Store.

Sometimes when using deep links, it is necessary to send data over to the second app or back to the first app. This is done using [service integration](service-integration). As an example scenario, you need to open a UI for creating a customer in the customer master app, while right after creation, the customer is already available in the first app.

UI integration can also have an advantage for mastering data, since the process for UI validations of information is always done in the same way. Accordingly, when the work is done in one app, a relevant part of the new data can be copied back to the other app.

Depending on the business requirements, these are the main variations of deep linking:

* The second app is opened in the same browser tab and the user is unaware of working in several apps
	* This is great for building microservice clusters that act together as one single system while still providing all the advantages of [microservices](../microservices/microservices-overview)
* If parallel work in two areas is preferred, another browser tab is opened, and the user can work in both apps simultaneously.

This diagram presents the most typical deep-linking option in a simple form:

![](attachments/ui-integration/deep.png)

## 3 Website Integration {#web}

Websites are different from web apps in that they are mostly passive. This means that there is no interaction with the end-user (for example, the user is not entering complex orders and a lot of information).

There are several solutions for providing nice-looking read-only web pages to deliver content and marketing in a way that is easy to optimize for Google searches. However, as soon as there is more logic or UX interaction involved, those solutions become an inefficient environment for building functionality.

Many companies combine a content-oriented website solution with Mendix apps that provide the functionality. Some customers build all the logged-in portals and pages in Mendix, ensuring that a good security system for access to functions and business data. These solutions look like this:

* Marketing-oriented website software for the landing page and read-only pages
* One or several Mendix apps covering the functional parts of the website

The integration down from the website to the Mendix apps is done via normal web links and URLs. This diagram presents a website that has a landing page, information, product catalog, documentation, and blogs in the website area, while Q/A, collaboration, and work-oriented parts are all built in Mendix:

![](attachments/ui-integration/web.png)

Many websites and portals use Mendix apps for the functional parts where user interaction is required. When aligning the UI design themes, this works very well. However, the URL will change as the user navigates. To avoid having the URL change, the CMS style of integration can be used (for more information, see [CMS UI Integration](#cms) below). In this scenario, the Mendix UI goes through a proxy and renders in the same page as where the CMS system is running.

In this context, Mendix can save you a lot of time in building interactive websites, as it allows for a lot more flexibility than normal website software.

## 4 CMS UI Integration {#cms}

In professional marketing-oriented portals, there is content to be shown depending on a number of factors, from IP address of the user, or where he is hoovering with the mouse, or his last click sequence.

This is where Content Management software (CMS) has advanced decisioning, web-site interaction and focus on allowing business-oriented people to change pictures without a new release of software.

But professional CMS systems do not provide an easy way to build functional pages, so customers with a CMS system often leverage Mendix for the logged in area of the Web-site.

To retain one system for click and hoovering statistics and to avoid changing URL, they use a reverse proxy down to the Mendix App, that sends back the functional UX to show in a pane within the CMS portal.

Often there is a specialized Mendix App that is built for this purpose, and that imports overview information, e.g. last ten tickets and orders etcetera, so that the user quickly gets an overview, and after that can Deep-link down to other Apps to do specific work in different areas.

The figure below shows a CMS system rendering Mendix UX in a part of the browser while the CMS system can keep on pushing good marketing content into the other parts of the UX.

![](attachments/ui-integration/6d0336f550a05162d8abbe5edddfb11f.png)

The Overview App already contains the information most users want to see quickly, polling the source Apps using REST, while Deep-Links is used when more elaborate work is required.

## CDN UI Integration {#cdn}

For functional customer portals, Mendix is a great alternative, and a Mendix  can be scaled across the globe by deploying it in several availability zones, see Geo-Scaled solutions \<link\>.

For global websites, customer portals, apps, and CMS solutions, the user can be in any place on the planet. But to avoid long rendering times and cut the traveling distance for as much content and data as possible, CDN solutions like Akamai can be used. This type of solution caches web content in local nodes and renders the entire page for the users.

For content-oriented portals, there is another way to provide quick response-times across the globe also for heavy content as large-size pictures or even video style content. It is called Content Deliver Networks, and Akamai is one of the most well-known solutions to provide this.

It cuts of the round-trip to the source of the information by having content delivery nodes in very many places around the globe. The nodes share rendered material between themselves and caches all large pictures.

Mendix integrates well with Akamai, directly or via a CMS system as seen in the previous section. It is recommended to contact Mendix for details.

![](attachments/ui-integration/ea4a8b9eccacd015889c27c776bbbf2f.png)
