---
title: "Getting Started With Your First Project"
linktitle: "Getting Started With Your First Project"
url: /developerportal/digital-execution/first-project/
weight: 95
description: "Find out how to get started with your first Mendix project."
aliases:
    - /first-project/
---

## Introduction

In this section, you will get all the information you need to know to help you get started with your first Mendix project.

By the end of this section, you will be able to: 

* Organize your first project kick-off. 
* Create your project. 
* Ensure project access for all of your team members. 
* Set up the agile way of working. 
* Define requirements for your first project. 
* Identify continuous collaboration that you can leverage through Mendix.

### Organizing Your First Project Kick-off

Now that the program is properly kicked off, the next step is to organize the kick-off for your first project. Kick-off meetings are a great way to communicate key project information to your team, and give them an opportunity to ask questions.

A sample agenda for a successful project kick-off might include:

* Introduction. Make sure everyone knows each other.
* The background of the project. Go back to your app value definition and simply present the most important points to your team.
* The project scope. You might not have your MVP scope defined in the kick-off meeting, but it is important to have a clear understanding of the problem you are solving and what the most crucial aspect of that problem to tackle first.
* Individual responsibilities. Every team member should have a clear understanding of their roles and responsibilities, both in the context of the scrum framework, as well as in general.
* Collaboration methods. Establish your agile rituals, such as standups, refinements, reviews, and retrospectives. Decide who should be attending and how often. In general, all team members should attend all the rituals. Stakeholders can limit themselves to sprint reviews.
* Success definition. This could be represented by project milestones, but also by metrics you would like to influence.

### Creating Your Project and Providing Access

Anyone can sign up to the Mendix platform using their business email address. All they need to do is go to [signup.mendix.com](https://signup.mendix.com) and use the relevant company email domain. 

If you are working with implementation partners, you need to decide how to give those team members access to your app projects.

You can choose one of the following approaches:

* Invite external users to your app projects using their external email address.
* Create accounts for external user in your company’s Entra ID or similar IdP, such as Okta.

### Creating Your First App

Once everyone has a Mendix account, they can click the **Create App** button on the Mendix Portal home page to start building their first app.

Once the project is created, everyone from the team should get access to it according to their role.

### Setting up the Agile Way of Working

During sprint 0, you need to lay the groundwork for a successful project by focusing on planning and preparation rather than immediately jumping into development. It is important to set up the right process, get everyone comfortable with it, and define the initial requirements. 

You need to determine which Agile practices will become your organizational standard. This could be:

* Scrum — The Mendix platform is optimized for Scrum at the team level.
* Kanban
* Other variants

Creating a standard does not mean that all teams need to work in exactly the same way, but having a shared set of practices will increase mobility between teams. The more familiar and standardized this methodology is across your organization, the tighter the collaboration will be among teams. 

However, your agile methodology should remain lightweight and flexible to keep administrative burden as low as possible, while maximizing the benefits to your organization. The way of working should suit the team's needs. 

Regardless of Agile methodology, some of the practices that you can consider standardizing are: 

* Sprint zero (design sprint) 
* Daily stand-ups 
* Sprint planning 
* Backlog refinement 
* Product demos 
* Team retrospectives

You need to incorporate feedback from team retrospectives and other Agile ceremonies into your standards as part of your continuous improvement process. That includes reviewing and analyzing any shortcuts taken or other deviations from the standard process, to understand why it was necessary and potentially consider adapting your standards or putting another appropriate measure in place.

Development teams can work most efficiently if requirements are clearly described. This helps to estimate the effort and implementation. Because of this, it is important that you choose a tool in which these can be tracked. To that end, the Mendix platform offers a collaborative tool called [Epics](https://www.mendix.com/blog/mendix-projects-and-the-wizardry-of-epics/). It allows you to manage the backlog, epics, create stories, and sprints. Both the Agile and Kanban methods are supported.

An organization that is familiar with the Agile way of working likely already uses related tools, such as Jira. Jira is often used for Scrum projects, and can be linked to your Mendix project. The Scrum Master of the project can choose between Epics or Jira in the **Settings** part of the project navigation, on the **Project Management** tab.

Make sure that the tool and process you choose supports close collaboration between the product owner, developers, users, and other stakeholders. The tool should enable clear visibility and tracing between stories, implementation, feedback, and deployments. Team members unfamiliar with your chosen tool may also need additional training to maximize use of the tool.

### Defining Requirements

If at all possible, make sure the development team talks to the future end-users. This is the aim of sprint zero. The team needs to understand what the app will be used for, what problem it is supposed to solve, how that problem is being solved now, and what can be improved.

When defining requirements, start by making sure that you and the stakeholders have a shared understanding of the problem, then look at the various ways you can help solve it.

Once the team has enough information, they should list the key features and functionalities that the app will offer. This could include data entry forms, workflow automation, reporting tools, or any other capabilities that align with the app's purpose.
Think about what the user needs to be able to do and how. 

The next step is to prioritize features based on their importance to achieving the primary goal. Keep in mind that a minimum viable product entails achieving that initial value. Anything that is not part of the initial scope can be added later on. Often things your stakeholders, or even end-users consider crucial are things they can probably live without for a couple of weeks. And if done right, your team will have a rhythm that ensures they consistently continue delivering value.

### Standard Requirements and Reusability

Certain requirements, such as access management or standardized navigation, are repeated for every app you build. Consider adding them to your standard company app template, or creating a reusable component.

Here are a few topics to keep in mind:

* End-user login — Every app needs a way for end-users to get access to it. We advise using the [OIDC SSO module](/appstore/modules/oidc/) for your B2E apps. This is the easiest and most flexible approach for Single Sign-On, and is supported by Microsoft’s Entra ID and most other IdPs.  As an alternative, you can use [SAML](/appstore/modules/saml/) for regulated B2C-apps, [LDAP](/appstore/modules/ldap/) for on-prem apps, or the [Forgot My Password](/appstore/modules/forgot-password/) module for non-SSO apps.

* Getting familiar with the Marketplace — Low-code development may be fast, but using modules or content from the Marketplace may even be faster. You may find modules relevant to your portfolio or your first app in particular and create a shortlist for your teams.  Marketplace content may be supported by Mendix, by Mendix partners or by the Mendix community.

### Continuous Collaboration Through Mendix

One of the core values of the Mendix platform is continuous collaboration between business and IT. 

{{< figure src="/attachments/quickstarts/leading-mendix-implementation/continuous-collaboration-suite.png"  >}}

The starting point is your portfolio, to which you have already added a couple of initiatives. Now that you have the MVP scope of your first app, add it in as a separate initiative and describe or link to documentation showing what needs to be delivered and why. 

You also have an app which you can link to the initiative. To do this, select **Edit initiative** and start typing your app name to select it from the dropdown.

{{< figure src="/attachments/quickstarts/leading-mendix-implementation/edit-initiative.png"  >}}

If you are using Epics as your agile planning tool, you can link the right epics to this initiative. This means that anyone who opens that initiative in Portfolio Management can see the development progress at the epic level.

{{< figure src="/attachments/quickstarts/leading-mendix-implementation/development-progress.png"  >}}

Another important part of collaboration in the app development lifecycle is the collaboration between the development team and their end-users. Mendix facilitates this through the feedback module. Your app users just need to click the **Feedback** button in your app, and tell you what they like, need or miss. Your development team can then immediately respond. Once your app is live, the team can set up a mini-survey to ask for user satisfaction, or to get more targeted input by asking specific questions. Find out more about [the importance of user feedback for app development](https://www.mendix.com/blog/how-to-collect-and-analyze-user-feedback-in-your-app/).

### The Development Process

This guide is aimed at anyone who is in charge of implementing Mendix in their organization. If you are working on managing the Mendix program, you are likely not the person actually developing the app itself. Rather, your job is to enable the setup of everything, to focus on the 5 P's, and to empower the development team to focus on development only. There are many dedicated resources on the platform to help new or seasoned developers get the most out of Mendix.
