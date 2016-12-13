---
title: "Set Up Your Partner Profile"
space: "Community"
parent: "community-projects"
---
## 1 Introduction

The purpose of the Partner Profile is to give the Mendix Community and customers a good and transparent overview of our partners' knowledge, skills, experience, reviews, and culture. The Partner Profile provides our partners with a simple and clear way to present themselves. it also presents an aggregated view of the developers within your organization, including the number of certified developers and their average Mendix level. In addition, it is possible to add projects, customer reviews, contact information, a corporate video, and a description to the Partner Profile.

**This how-to will teach you how to do the following:**

* Set up your Partner Profile
* Edit your company profile
* Add developers to your company
* Add reference projects to your company
* Use the functionality of the partner overview page

## 2 Prerequisites

* Have a Community Profile (for more information, see [How to Set Up Your Community Profile](how-to-set-up-your-profile))

## 3 Logging In to Your Partner Profile

To log in to your Partner Profile, follow these steps:

1. Click [here](https://developer.mendixcloud.com/openid/login?immediate=true&continuation=link/ownprofile/) to log in and check your own Community Profile. With this action the system knows who your are and which company is attached to your account. Everybody within a company is allowed to edit that company's Partner Profile.
2. Navigate to the [partner overview page](https://developer.mendixcloud.com/openid/login?immediate=true&continuation=link/partneroverview). Your company will be shown at the top of the **Partners** overview list:

    ![](attachments/19203677/20217909.png)

3. Click the name of your company, which will open its Partner Profile. This will show the public view of your company. You can click **Edit Partner Profile** button to edit the Partner Profile (for details on editing the profile, see [4 Editing Your Partner Profile](#EditingYourPartnerProfile)).

    ![](attachments/19203677/20217910.png)

4. Once you're done editing the Partner Profile, you're ready to set your profile to public so that the rest of the Mendix Community and customers can check it. To do so, simply click **Make this profile public**:

    ![](attachments/19203677/20217911.png)

## 4 Editing Your Partner Profile<a name="EditingYourPartnerProfile"></a>

After you've logged in and clicked **Edit Partner Profile**, you're ready to edit your profile. You can edit the elements by clicking ![](attachments/19203677/19399148.png).

Click the edit button next to your company name to add your company's address and/or email address. The address will be shown at the top of the Partner Profile, and the email address will be used for the **Contact Us** button.

In **Video**, you can add a company video (currently only YouTube videos are supported):

![](attachments/19203677/20217913.png)

In **Industries**, you can add your focus industries. This will be used in the filter option on the partner overview so that a customer can for a partner with a focus on a specific industry.

![](attachments/19203677/20217914.png)

In **Geographical Focus**, add the countries where your company is active and has coverage. This will be used in the filter option on the partner overview so that a customer can search for a partner in a specific country:

![](attachments/19203677/20217916.png)

<div class="alert alert-info">

If you're missing an input option (for example, an industry), just send us a feedback message with the missing item using the Feedback button on the right side of the screen.

</div><div class="alert alert-info">

These fields are required before you can set your profile to public: address, email, summary, geographical focus, type of services, and support capabilities.

</div>

## 5 Adding Developers to Your Partner Profile

This section presents information on adding the biggest asset of your company to the Partner Profile: the employees. Before you can add a developer to the Partner Profile, make sure their profile is set to public. For details on how to set up your Community profile and set it to public, see [How to Set Up Your Community profile](how-to-set-up-your-profile).

To add developers to the Partner Profile, follow these steps, go to the **Developers** tab, which shows all the employees attached to your company:

![](attachments/19203677/20217919.png)

Developers with a public profile are shown at the top of this overview. You can use the search and filter functionalities to search for a specific team member.

<div class="alert alert-info">

Make sure you have off-boarded the developers through the company administration in the Mendix platform who are no longer working at your company. These former employees will still be visible in the overview. It is important that you deactivate these in the developers portal so that they don’t have access to your Mendix projects anymore.

</div>

Select the colleagues within your organization who are currently active and whose certifications you want to count for the total by clicking **Add as developer**:

![](attachments/19203677/add_developer_button.png)

<div class="alert alert-info">

Only the certifications and Mendix levels (the exact amount of points) of the added developers will be counted in your partner profile. The highest rank of certification will be added to the overview, and the amount of points will be added to the average Mendix level of all your developers.

</div>

## 6 Reference Cases

This section presents information on adding reference cases to your Partner Profile and how to boost your overall rating. 

Go to the **Reference** tab and click **Add Project**. This is where you can add all the details of your reference case.
![](attachments/19203677/20217920.png)

*   The customer is an open text field, so if this customer needs to stay anonymous you could also add 'bank in the US'.
*   The industry will be used in the overview page, the number next to the label will show the number of projects you've added to your profile.
    ![](attachments/19203677/20217921.png)

<div class="alert alert-info">{% markdown %}

These fields are required before you can save a reference case: Project, Description, Customer, Industry, and Period.

{% endmarkdown %}</div>

A customer can add a review on your reference case. The average rating of all reviews of all projects will be shown on the partner overview page and partner detail page. Our partner success managers will check / moderate the reviews.
![](attachments/19203677/20217926.png)
![](attachments/19203677/20217927.png)

## 7 Partner Overview Page

The [partner overview page](https://developer.mendixcloud.com/openid/login?immediate=true&continuation=link/partneroverview) shows our partner community. The sorting is based on the combination of several KPIs:

*   Projects rating (PR): this is the average rating of all the reviews on your reference cases.
    ![](attachments/19203677/20217923.png)
*   Certified developers (CD): this shows the total amount of certified developers (note: developers with multiple certifications count as one certified developer).
     ![](attachments/19203677/20217924.png)
*   Mendix Level (ML): this is based on the average points (resulting in a [Mendix Level](https://developer.mendixcloud.com/link/faq)) of your developers added to your public profile.
    ![](attachments/19203677/20217925.png)

    For the calculation of the sorting order we use the average points instead of the Mendix Level, this will result in an more granulated sorting.

*   Number of reference projects (RP): the number of reference projects are also part of the sorting formula.

For the sorting we normalize the KPI's of all the partners to a score between 0 and 1, following this formula:

New KPI value = (your value - minimal value) / (maximum value - minimum value)

Example: you have 14 certified developers (CD). The biggest company has 40 certified developers (max) and smallest 1 certified developer (min):

* KPI value CD biggest company = 1
* KPI value CD smallest company = 0
* KPI value CD your company = 0,33 = (14 - 1) / (40-1)

The sum of the normalised KPI values of your company (PR+CD+ML+RP) defines the sorting order between the partners.

## 8 Related Content

*   [How to set up your profile](how-to-set-up-your-profile)
*   [How to set up your partner profile](how-to-set-up-your-partner-profile)
