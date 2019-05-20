---
title: "UI Integration"
parent: "integration-overview"
menu_order: 3
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

Depending on the business requirements, these are the main variations of deep linking:

* The second app is opened in the same browser tab and the user is unaware of working in several apps
	* This is great for building microservice clusters that act together as one single system while still providing all the advantages of [microservices](../microservices/microservices-overview)
* If parallel work in two areas is preferred, another browser tab is opened, and the user can work in both apps simultaneously.

This diagram presents the most typical deep-linking option in a simple form:

![](attachments/ui-integration/deep.png)

Integration via a UI link is becoming more and more common. It enables developing a UI only once in the app where it belongs, and then linking other users there when they need to perform a workflow there. Most users use the [Deep link module](https://appstore.home.mendix.com/link/app/43/) available from the Mendix App Store.

Sometimes when using deep links, it is necessary to send data over to the second app or back to the first app. This is done using [service integration](service-integration). As an example scenario, you need to open a UI for creating a customer in the customer master app, while right after creation, the customer is already available in the first app.

UI integration can also have an advantage for mastering data, since the process for UI validations of information is always done in the same way. Accordingly, when the work is done in one app, a relevant part of the new data can be copied back to the other app.

## 3 Weblink Integration for Web Sites {#web}

Websites are different from web apps in that they are mostly passive. This means that the end-user is more browsing information rather than interacting with the site to enter e.g. complex orders. There are several solutions for providing nice-looking read-only web pages to deliver content and marketing in a way that is easy to optimize for Google searches. However, as soon as there is more logic or UX interaction involved, web-site solutions become inefficient for building functionality.

The diagram shows a typical set-up: The web-site has a landing page, information, product catalog, documentation, and blogs in the website area, while Q/A, collaboration, and work-oriented parts are all built in Mendix. All important information in the web-site can be search engine optimized. All functional parts can be quickly created, modified, maintained and secured where needed.

![](attachments/ui-integration/web.png)  <<UPDATE FIGURE A>>
	
Many organizations combine a content-oriented website solution with functionality rich Mendix apps. Some build all the logged-in portals and pages in Mendix, ensuring that a good security system for access to restricted functions and business data. I.e. the full web-site consists of:

* Marketing-oriented website software for the landing page and read-only pages
* One or several Mendix apps covering the functional parts of the website

The integration down from the website to the Mendix apps is done via normal web links and URLs. The integration between Mendix Apps is done via Deep-links, as described above. In this context, Mendix saves a lot of time in building interactive websites and customer portals.

## 4 CMS Integration fpr Customer Portals {#cms}

Many websites and portals use Mendix apps for the functional parts where user interaction is required. When aligning the UI design themes, this works very well. However large companies often use a professional CMS system (Content Management System) to generate the marketing-oriented portals. CMS systems select content depending on user behavious and track the click and hoovering statistics.

The diagram below shows a CMS system rendering Mendix UI in a part of the browser while the CMS system can keep on pushing marketing content into the other parts of the UI:

![](attachments/ui-integration/cms.png)

It is still slow and costly to develop functional pages in CMS systems, so several organizations have used Mendix together with a CMS solution, for the active parts of the customer portal. There are a few options to do this, contact Mendix Expert Services for more information. Often the Mendix UI goes through a proxy and renders in the same web-portal where the CMS system is running.

With this solution the marketing teams can use the CMS system and decisioning to show the relevant marketintg content to each different  business users, without a new software release. While the functional and active parts of the Customer Portal, are easy to build and maintain using the Mendix rapid application development platform.

Often there is a specialized Mendix app built for the purpose of interacting with the CMS customer portal. This app imports the overview information (for example, the last ten tickets and orders) so that the end-user quickly gets an overview and can then follow deep links down to other apps to do specific work in different pages.

## 5 CDN Integration for Global Portals and Apps {#cdn}

As seen in the sections above Mendix is a great alternative for functional customer portals, collaborating with Web-sites, a CMS system and/or a document management system. For simpler customer and employee portals Mendix can do all the tasks above.

For global websites, customer portals and apps the user can be in any place on the planet. To avoid long rendering times and cut the traveling distance for as much content and data as possible, CDN (Content Delivery Nodes) solutions should be used. CDN solutions cache content in local nodes and renders the entire page for the users. This provides quick response times across the globe, especially when using large images and videos.

The diagram below shows a typical set-up. All web-pages are rendered close to the end-user browser location using a CDN solution, that provides a first secutity layer and caches all static or semi-static information, limiting the round-trips to the underlaying systems, which could be a web-site, a CMS system and several Mendix apps: 

![](attachments/ui-integration/cdn.png)

A Web-site runs the frame, and Mendix provides the active pages where the user collaborates with the organization. The CMS system no longer runs the frame, but is providing the right content at the right time. 

For the static content this provides a huge advantage in rendering time. For Mendix apps, it can save up to 50% of the content round-trips. CDN systems also have faster and better interntet routing, which can provide a 50% improvement in Asia and South America, and around 10% within Europe. 

The advatages with CDN solutions are so siginficant that almost all global portals and apps use CDN solutions these days, and it works very well with Mendix apps as well. When Customer portals and apps need to be globally deployed and accessible Mendix usually combines a global deployment strategy with a CDN solution for re-direction and additional proximity to cached static content.

1. Deploy several instances globally in different availability zones. They may collaborate with each other if required.
2. Use a CDN solution (Content Delivery Node), so further increase availability and speed of UX interactions

For more details, see the [Geo-Scaling Architecture](../performance/plan-design-high-volume#geo-scaled) section of *Planning & Designing for High Volume*). If it is a Customer Portal most people work locally in their region, so will mostly log into their closest instance, while CDN can re-direct them back there when travelling, or we copy the required data over to work locally also when travelling.

When using CDN solutions the external APIs are often also made available via the content nodes. This the same advantages proximity and caching advantages as for UX, while also providing some API management functions like protection against Denial-of-service attacks,  throttling, and Bot management.
 
Akamai is the most established solution with 240 000 nodes in 240 countries, while AWS and Azure have good competing solutions available.

## 6 Summary

UX integration is becoming increasingly common and allows a Microservices strategy for building and maintaining systems, while providing a unified "one-system" experience to the end-users. The Mendix Deep-links provides a secure way to integrate viw UX components and transferring the context over to the other app.

UX integration is also used for a variety of Web-sites, Customer portals and Global solutions:
* Web-sites use web-links to Mendix Apps for the functional part of the site
* Marketing oriented CMS based customer portals render Mendix UX panes within the CMS based web-page-frame
* Global apps and portals use CDN solutions to provide snappy UX experiences across the globe




