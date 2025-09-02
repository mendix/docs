---
title: "Launching Your First App"
linktitle: "Launching Your First App"
url: /launch-first-app/
weight: 105
description: "Find out how to test, deploy, and promote your first app."
---

## Introduction

By the end of this section, you will be able to: 

* Identify the different options available to test your app.
* Describe the ways to promote your app. 
* Recognize the importance and options to maintain and upgrade your app.

### Deploying Your App

Follow this process to make sure that your app is ready to be deployed.

#### Deploying Your App to Mendix Cloud

Deploying your app to Mendix Cloud gives you access to all the features and services in Mendix Cloud. Setting up the deployment only requires a few steps, and only needs to be done once for each app. Once the cloud settings of your app are configured, you can deploy and redeploy it with just one click.  

Note that Mendix also offers [other deployment options](/releasenotes/developer-portal/deployment/).

#### Obtaining a Licensed Node

You can deploy your app for free to Mendix Cloud. However, [free apps have limitations](/developerportal/deploy/mendix-cloud-deploy/#free-app) when it comes to runtime, features, and resources. You can publish free apps to test the Mendix platform or a specific feature, or to quickly prototype an app to test an idea. However, once you decide to develop your app further, you need to obtain a licensed node.

If you have an existing contract that allows for more licensed nodes, you can [request a new licensed node](/developerportal/deploy/licensing-apps/#obtaining-licensed-node).
If you don’t have a contract, or if your contract doesn’t allow for more licensed nodes, contact your Customer Success Manager.

#### Linking Your App to Your Licensed Node

If you have a licensed node available, you can link your app to it. If needed, [back up the data](/developerportal/deploy/licensing-apps/#backing-up) first. Then, you can [connect your app](/developerportal/deploy/licensing-apps/#connect-app) to the node.

When your app is unlinked from a free app environment, you can link it to a licensed node. By linking it to a licensed node, you get access to all the features of Mendix Cloud, such as one-click deployment from Studio Pro and our platform, log management, backup management, and monitoring tools.

#### Setting Node Permissions

Once you have linked your app to a licensed node, your team needs to determine which users can perform which actions on the node. For example, things like who can configure an environment, who can deploy to an environment, who has access to the logs of an environment, and so on are controlled by [node permissions](/developerportal/deploy/node-permissions/).

By default, only the Technical Contact of a node has permissions to perform any action on the licensed node. The Technical Contact can grant permissions to other members of the app team.

Granting permissions to team members is dependent on your deployment strategy and process. For example, you can set node permissions for each of the environments of your node. That way, you can grant developers the permission to deploy the app to the Test environment, but restrict deployment permissions for the Production environment to a smaller team.

#### Configuring Cloud Settings

Once node permissions are set up, you can start configuring your cloud settings. This can be done by any team member with the correct permissions. Changing your cloud settings is not mandatory, as most settings are configured for you by default in Mendix Cloud. However, in some cases, you may want to customize them to tailor the end-user experience or to adhere to company standards.

Things you can customize for your apps in Mendix Cloud include:

* [Studio Pro deployment target](/developerportal/deploy/studio-deployment-settings/#studio-pro-target)
* [Custom domains](/developerportal/deploy/custom-domains/)
* [HTTP headers](/howto/security/best-practices-security/#adding-http-header)
* [Path-based access restrictions](/developerportal/deploy/access-restrictions/)
* [Environment variables](/developerportal/deploy/environments-details/#custom-environment-variables)
* [Services](/developerportal/deploy/environments-details/#services), such as [the Event Broker service](/appstore/services/business-events/#mendix-event-broker)

#### Deploying the App

Once you have linked and configured your Mendix Cloud node, which you only have to do once, you can start deploying your app to Mendix Cloud. Mendix recommends that you first deploy any new version of your app to the Test or Acceptance environment for testing, before deploying it to the Production environment.

There are multiple ways to deploy your app to Mendix Cloud. You can find out more about these in [Deploying an App to Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/).

### Testing the App

The Mendix Marketplace includes the [Unit Testing module](/appstore/modules/unit-testing/), which allows developers to write and execute unit tests, thus testing all critical parts of the app.

There are a variety of tools available for testing, from Mendix-supported ones to third-party ones. Find out more from [Test Automation and Quality Assurance](https://www.mendix.com/evaluation-guide/app-lifecycle/test-automation-quality-assurance/).

Aside from unit tests, performance tests can also be performed with multiple third-party tools, such as JMeter, BlazeMeter and LoadRunner, all of which are capable of testing the performance of your Mendix app.

After launching the app, Mendix Cloud offers metrics and logs to provide insights into app performance and bug detection.

### User Acceptance Testing

Before launching your first app, it is important to thoroughly test it. This goes beyond bug bashing, and includes ensuring that it fulfills end-user needs. This is why User Acceptance Tests, where end-users actually try out the app, should be performed before any launch. This gives you the chance to catch any last-minute bugs and make sure your app is meeting and exceeding user expectations. 

The [Mendix Feedback](/appstore/modules/mendix-feedback/) module makes it easy to organize user acceptance tests. All you need to do is to select the environment you want to do this in, make sure the Mendix Feedback module is set up there, inform your end-users that you need their help, and give them information on how to log in and how to provide feedback. Then, your development team can fix any issues and respond to questions that might arise. Keep in mind that they might need extra time to tackle this feedback, so be sure you get user input at least a week before the planned launch date, preferably even longer. 

### Launching and Promoting the App

By this point, you have already launched your first Mendix app, and have started delivering value for your organization. To ensure continued success, here are some things you need to think about:

* Celebrate your first launch in an impactful way.
    
    * Throw a party and invite as many people as possible, not just your development team. 
    * Host the party in a central location so that other departments take notice. 
    * Make sure your most senior sponsor is in the room to reinforce the importance of low-code development. 
    * Captivate your audience by presenting the astonishing results of your project. Have the business show the demo.
    * Consider inviting the following people to celebrate with you: 
        
        * Project team 
        * Business stakeholders 
        * Stakeholders from other lines of business 
        * IT leaders 
        * Mendix Expert Services or the Partner that helped guide the team through the project 

* Continue talking about your first success. This might not come naturally to you or your team, but it is vital to keep the momentum. You could share your success story in the form of a blog post for your company website or intranet, through a video, a podcast, or at the very least a value one-pager that can be shared across your organization.

### After the Launch

These are some things to keep in mind after you launch your first app.

#### Establishing a Retrospective Cadence

To achieve this, it is first important to establish the goals of a retrospective. The retrospective should look back on the project and review successes and lessons learned:

* Did the project achieve its business goal? 
* Did you have the right people on the team? 
* How well was the business engaged in the process? 

Embrace all feedback, whether it’s perception or reality. Let the business know they have a voice, and that their input is vital to improving future projects. Seek their advice on how to develop a more structured rapid app development approach that further enhances engagement and collaboration with other business units.

One of the most important questions to ask business stakeholders in the retrospective is what they would tell their friends or colleagues about this project to make them enthusiastic. The key is constant communication and proof. Once business users see that you have done what you said you would do, and that they can have a significant impact on the project, they will quickly embrace this new approach.

Make sure to do a team retrospective as well, taking into account these points:

* What went well?
* What didn’t go well? 
* Who really excelled in the project and can take on the Mendix developer lead role/advance their certification level?
* How can you use this information to refine your process for the next project?

#### Documenting and Measuring the App Value

Now is the time to go back to the goals you outlined when you initially defined the value of your app, and see if you have reached them or if you are on track to reach them.

Always make sure that the value the app brought is captured. This might include things like generating additional revenue or saving costs by sunsetting existing legacy apps, automating previously manual processes, or delivering a new app faster than you would with traditional development. It could even be something like improving your customer satisfaction or engagement.

#### Maintaining and Upgrading Your App

After developing and publishing your first Mendix app, it's important to put proper maintenance measures in place. [Establishing a regular upgrade practice](https://www.mendix.com/wp-content/uploads/Your-Mendix-Upgrade-Guide-1.pdf) helps keep your app up to date with support and retain access to the latest features.

Mendix supports three major versions at a time. Example: Mendix supports major versions 8, 9, and 10. When version 11 is released, version 8 is no longer supported, and versions 9, 10, and 11 are supported.

Learn more about [version details and release timelines](/releasenotes/studio-pro/lts-mts/#major-version).
