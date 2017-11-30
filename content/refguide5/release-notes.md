---
title: "Release Notes"
category: "General"
---


New app design options, shareable components across multiple apps, platform API and Enterprise App Store allow enterprise application developers to deliver applications faster and more efficient than ever.

## Create powerful and user friendly app UIs across devices

End-user expectations about the user experience of the applications they use have changed quite a bit over the years. This movement, sometimes referred to as the consumerization of enterprise IT, influences the way application developers need to approach the development and design of enterprise applications.

### Starting a new project

Mendix 5 puts user experience first. When developers start to model a new application in the Mendix Modeler, the first thing they need to do is select a sample project to start from. These sample projects, available in the Mendix App Store, contain beautiful layouts specifically designed for desktop, tablet, or smartphone devices. They also contain some example pages to get you started quickly.

In addition to starting a new project based on a sample project, you can also start a project "from scratch". This means you start the project by creating your own layouts.

### Layouts

Layouts specify the different panes of an application. A layout can, for example, specify a header, a left sidebar, a footer, and a content pane in which the different pages are opened. Layouts can contain every type of widget, but the most used ones will probably be focused on navigation (e.g. menu bars, navigation trees, etc).

Each page (formerly known as a form) refers to a layout. When an end-user navigates to a page the accompanied layout will be shown. Layouts can easily be defined in the Mendix Modeler. The intuitive layout editor lets you add panes, define alignment and scrolling behaviour, and even lets you nest "layout containers" to create advanced structures.

### Device profiles

The distinction between desktop and mobile pages has been removed. There is only one type of page and you are free to use any (custom) widget on a page. You can also configure "device profiles". Mendix 5 includes three device profiles: desktop, tablet, and phone. For each of these profiles a homepage and default layout can be easily configured.

### Snippets

We introduced snippets to foster the reuse of UI parts. Snippets are page parts that can take an entity as input parameter and contain any number of widgets. Snippets can be used on other pages in the same way as widgets.

### Theming

In Mendix 5, we also improved the way applications are styled. We changed the complete CSS structure to make it more intuitive. We aligned the structure with the widely-used Bootstrap front-end framework. This means that any designer that is used to styling websites and web applications that are based on Bootstrap, can easily design a Mendix application. Furthermore, you can use any existing Bootstrap theme to quickly change the appearance of a Mendix application. Visit the Mendix App Store to view example theme packages.

Each layout and each page can have its own class and can thus easily be addressed from CSS to apply layout or even page-specific styling.

### Backwards compatibility

Projects created with Mendix 4 can be opened directly in Mendix 5 and will be automatically converted to the new model structure. For desktop apps, the device profile "desktop" will be enabled, point to your current homepage, and all pages will refer to a default layout that mimics the default, fixed layout of Mendix 4\. If mobile is enabled the "smart-phone" device profile will be enabled as well and the proper layouts will be generated.

Theme packages that are created for Mendix 4 apps will not work with Mendix 5\. As we changed the complete CSS structure theme packages need to be created again as well all custom changes that have been applied to index.html files. However, with the more intuitive CSS structure and the modern, Bootstrap-compatible base styling we think it will be easy and fast to update theme packages and make your apps look more modern at the same time.

In Mendix 5 we dropped support for Internet Explorer 6 and 7\. The market share of these browsers has decreased to less than 1%. As they do not support modern web standards, they are very hard and costly to support. Additionally, they would limit what we could offer our users with modern browsers.

## Increase application development efficiency for multi-app enterprise environments

Applications are almost never developed and deployed in a green-field. This means they are in almost all cases integrated with other applications and data sources. If your application landscape consists of multiple applications that work together to support the business, it is no longer the agility of a single application that determines the time-to-market of business innovations. Business changes can (and will) impact multiple applications at once, which means that the whole application landscape needs to evolve quickly to foster business innovation. We see the need for multiple applications with an agile lifecycle at our customers, as the average number of Mendix projects per customer has quadrupled over the last year.

### App Services

Mendix 5 makes integrating Mendix applications with each other extremely easy. Instead of calling a web service with the need to define mappings from the domain model to the XML of the service, a Mendix app can directly call the app service as if it is a microflow. The operations of an imported app service are available as microflow activities for the consumer and all input and output data can directly be created as if they are entities in the model of the consumer. This means that using "remote microflows" is as easy as using activities within the app itself. We call this direct app-to-app integration on the model level app services.

App services are forward and backward compatible. This means that the consumer can migrate to a newer version of the Mendix Runtime without the need to change anything. The same holds for the provider, if it is migrated to a new Mendix Runtime version all consumers just keep working.

App services are completely integrated in the Mendix App Platform. If an application is deployed in the Mendix Cloud, the app services that are provided by that app can be 1-click published to the App Store in the "publish" step of the app lifecycle. In the "monitor" step, all consumed app services can be viewed as well as the status of these services. Within the Mendix Modeler app services can be 1-click consumed via the Community App Store or Enterprise App Store.

Integration has never been this fast and easy!

### Versioned app service interfaces

To better support the evolution of multi-app landscapes we introduced explicit versioning for app services in Mendix 5\. A published app service can be available in multiple versions. Once an app service version is published its interface definition is frozen, which means that it cannot be changed anymore. This ensures that consumers will never break when you deploy a new version of your app. You can of course still change the implementation of an app service (e.g. use another microflow) as long as the implementation fulfills the interface definition.

If you want to change the interface definition of an app service you need to introduce a new version of the app service that will be available on a separate URL so that consumers can migrate to this new version at their time of choice. As soon as all consumers have migrated to the new version the old version can be removed. The Mendix Modeler will check the consistency of the services and their implementation and guide users in handling published app service evolution correctly.

## Re-use and share content through a new Enterprise App Store

The Community App Store we introduced with Mendix 2.5 has been a great success. With Mendix 5 we extend our App Store with what we call, an Enterprise App Store. This Enterprise App Store allows you to share content with your company only, instead of the complete Mendix Community. Publishing content has become a 1-click process that is fully integrated into the app lifecycle in this version. The Enterprise App Store allows you to easily re-use app models, model parts, widgets, App Services, themes, etc. All content is managed at a single place, including versioning, release notes, and documentation.

Similar to the Enterprise App Store, the Community App Store also contains a new category of elements: App Services. This means you can provide services to the whole community and optionally monetize them using your own implementation of choice. The advantage of sharing services with the community in comparison with model parts is that you only have one instance, which you manage and support yourself. It basically is the difference between Software-as-a-Service (SaaS) and installed software. In this way new business models around your content are much more feasible. Users of the Mendix Modeler can 1-click consume all App Services that are available in the App Store and thereby have a lot of out-of-the-box content at their fingertips that will substantially speed-up application development.

## Integrate seamlessly with enterprise development environments using the Platform API

One of the best beginner features of the Mendix App Platform is the integrated approach to all aspects of the application lifecycle. Requirements capturing, project management, development, deployment, monitoring, and feedback management are all part of the Mendix App Platform and are tightly integrated to offer the best experience possible. We also understand, however, that flexibility is needed sometimes. Therefore we offer APIs to extend our runtime engine with Java code and to extend our web client with custom widgets using JavaScript.

With Mendix 5 we take the next step by offering new APIs to integrate Mendix with 3rd-party tools.

### Stories API

Mendix 5 offers an API for the capture phase of the application lifecycle. This means you can use the API to retrieve sprints, stories, and tasks, and to create, update, and delete them. This API can be used to integrate your agile project management tool of choice in the Mendix Application Lifecycle.

### Feedback API

Mendix 5 also offers an API for the feedback phase of the application lifecycle. Using this API you can retrieve feedback, submit new feedback, and accept feedback which converts it into a story. This API can be used to integrate your incident management tool of choice into the Mendix Application Lifecycle.

All APIs are available as App Service and web service, and can hence easily be integrated in Mendix applications as well as consumed by other tools via the SOAP protocol.

## Experience integrated, collaborative application lifecycle management

Existing users will notice that we gave the Mendix App Platform a whole new and fresh user experience. The navigation structure has been improved to better suit the needs of our users.

### Collaboration

Collaboration is one of the most important aspects of successful application delivery. In Mendix 5 we vastly improved the way you can collaborate with teams and co-workers. The buzz, showing all activity within the platform, can easily be filtered on company-wide content as well as on project-specific content. Users can configure what project activity streams are visible on the buzz and can directly post messages to a specific project team. The loading speed of the buzz has also been dramatically improved.

### Dev center

All team members can quickly access applications that run on a test, acceptance, or production environment via the new App Launchpad. Apps can be organized to make the apps that you currently work on quickly accessible. The development and management of these applications has been organized in the Dev Center. Via the Dev Center, users have access to projects, the latest Mendix Modeler, manage cloud nodes, and the developer forum and (API) documentation.

### Publish

In Mendix 5 we added a new step to the application lifecycle: Publish. We made publishing application (parts) an integral part of the application lifecycle. Team members can 1-click publish App Services that are provided by the application to the Community or Enterprise App Store. We will evolve this publish mechanism so that application models, model parts, and widgets can be published and shared via the App Store in the same, easy way.

### Build server

Last but not least, we extended the Mendix App Platform with a cloud-based build server. New releases of applications created with Mendix 5 can be created directly from the Team Server without the need to use the Mendix Modeler. Deploying to the cloud from within the Mendix Modeler will simply trigger the build server and is therefore quick and easy.

## Notable other enhancements

On top of the powerful features mentioned before, Mendix 5 also comes with a lot of smaller enhancements.

Mendix Runtime enhancements

*   The Mendix Runtime is now based on OSGi, which enables proper modularity, but more importantly different class loaders for each bundle. This means that libraries in userlib will never conflict with other libraries, even if you use the same library but a different version.
*   From now on, Java Runtime Environment (JRE) 7 is required to run Mendix apps. It is not possible anymore to run Mendix 5 apps on Java 6\. See [here](moving-from-4-to-5) for more information.

Mendix Modeler enhancements

*   Form editor usability has been improved a lot (we think). Can you spot the changes? What is your favorite one?
*   Ticket 6335, 8085: Allow remembering the sign in credentials.
*   New widgets: static image viewer, title, header.
*   The menu bar is a widget now and you can have more than one of those per project.
*   Template grid items act as a read-only data view and now support all functionality a DataView supports. This means, for example, that you can use conditional formatting in a Template grid. With greater power comes greater responsibility, though. If you start to add tens of tabpages to template grid items or nest grids multiple times, the performance of your application will decrease substantially.
*   List views and tooltips can now contain all types widgets too.
*   Data views and template grids based on microflow or grid association source can have widgets that follow more than one step in the domain model.
*   Even less excuses to have warnings in your project:
    *   Added option to ignore the return value of a microflow call.
    *   Added option to use a microflow without a parameter as an event handler.
    *   Added option to use a microflow without a parameter as a 'Calculated value' microflow.
    *   Removed 'no image specified' warning.
*   Ticket 10869: Find usages on specific enumeration values.
*   Ticket 9355: Property 'Mark as used' on Microflows and Forms, to avoid unnecessary appearances in 'Unused items'.
*   Ticket 14201: Introduced checkbox 'Check/uncheck all' in conditional settings form. Also enabled multi-select on these grids and in 'select modules' grid in batch translate/replace form.
*   Ticket 7600: Added 'Find advanced' query for finding custom widgets of a certain type.
*   Use actual project name when importing/exporting project packages.
*   Added 'quickfixes' to some errors/warnings.
*   "Images" is now an item that can be added and removed, instead of having one "images" element in each module by default.
*   Added drag and drop ability of microflows to a provided service.
*   The Mendix runtime chooses the profile now, no web server configuration necessary. * Force a specific profile by navigating to "?profile="
*   Place multiple widgets underneath each other without using tables in the following locations: data view, layout container region, list view, split pane, tab pages and template grids.
*   Specify the application title in the Modeler; it appears in the browser title bar. No need to edit index.html for that!
*   Re-order modules by drag and drop.

Web client enhancements:

*   Resizing and moving popups has been improved. Popups can be maximized by double-clicking the title bar.
*   We use our own popups everywhere now, no more browser confirm windows. Two advantages: our own popups can be styled and browser confirm windows could be blocked by the browser.
*   Resizing of data grid columns is more sophisticated now.
*   Upgraded to Dojo 1.8.

As you can see, the Mendix 5 release is jam-packed with awesome features. We hope you like them, and please keep that feedback coming!
