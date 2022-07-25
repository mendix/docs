---
title: "1.5"
url: /releasenotes/add-ons/ats-1.5/
weight: 100
---

## 1.5.0

***Date: July 18, 2016***

### User Experience

Automated testing should be available to anyone on the Mendix Platform. That’s why we put a high focus on user experience. With this release we’ve made a big step by creating a new theme and redesigning many parts of the user interface.

We’ve created the new, modern and appealing theme based on the Mendix UI Framework. With the new look & feel we can not only present data in a better and nicer way, we also put visual focus to where it’s really needed.

Several pages and dialogs have been redesigned to improve user flow and reduce the number of clicks. A new landing page dashboard gives you a quick overview of your projects and their status right after login. Open a project from there and the project dashboard shows you detailed data and your user stories. Adding a new test case to a user story is now only one click away. And by using a template for the new test case you are able to save even more time.

Details can make a difference. That’s why there will now be a UX improvement in every release.

### Test Recording

What could be easier than recording your manual actions taken inside your application and transforming them into an automated test case? It’s possible as of now.

Generic recording solutions only look promising until you’ve tried to record your first test case. You benefit from a recorder that has been tuned and optimized for the Mendix Platform. It couldn’t be easier to use. Simply install the browser extension and hit the ‘Record’ button in ATS. That’s it. Every action is translated into a test step and mapped onto one of the actions. The outcome is the same as of creating a test step manually, but multiple times faster.

You can switch between manual editing and recording whenever you want. You can enrich a recorded test case with manually inserted assertions and checks.

### Projects

Creating new test cases – especially with recording – is a simple activity, so you can quickly end up with a lot. Are you testing multiple applications or even have different teams creating tests in the same environment? Eventually you want to separate, structure and protect this data.

We added a new project layer on top of this data. All data – may it be test cases, test suites or actions – is now enclosed in a project. This provides clear separation between data of different applications. Every user can create a new project and as its owner manage other user’s access to it. See ReferenceGuide_Projects page in the reference guide for more information.

There’s also a special type of project, the Action Library. Action Libraries are limited in that they can only contain actions. These actions can be shared with projects without the need to duplicate. Every project can include an action library and gets read access to all its actions. Thus, you can use them to create test cases in these projects. Your actions can be reused, but are still maintainable in a single place and protected against unintentional modifications.

### New Actions

The predefined Actions for Mendix are a key for the efficient and simple creation of test cases. And we’ve made them even better.

All actions now make use the ‘mx-name’ classes that Mendix assigns to all widgets on a page. This standardization allowed us to significantly reduce the number of actions. There are no longer several actions per widget type. Instead, every action is now either completely generic or supports at least a number of widgets. Furthermore, the new actions are smarter. We reduce the number of required parameters for all actions to simplify usage. See ref-ActionOverview for a list of available actions.

All actions support the latest Mendix Platform release at the time of release, 6.6.0.

### Browser Support

ATS has upgraded to the latest version of Selenium Webdriver, 2.53\. Users benefit from support for Firefox 44/45, Firefox 38/45 ESR as well as Chrome 46-50.
