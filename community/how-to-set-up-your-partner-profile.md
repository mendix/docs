---
title: "How to Set Up Your Partner Profile"
space: "Community"
parent: "community-projects"
---

The purpose of the Partner Profile is to give our community and customers a good overview and transparency of our partner’s knowledge, skills, experience, reviews, culture, etc. With the Partner Profile we want to give our partners a simple and clear way to present themselves. The Partner Profile gives an aggregated view of the developers within your organization, including the number of certified developers and their average Mendix level. Next to that we offer the possibility to add projects, customer reviews, contact information, a corporate video and a description.

**After completing this how-to you will know:**

*   How to set up your Partner Profile
*   Edit your company profile
*   Add developers to your company
*   Add reference projects to your company
*   The functionality of the partner overview page

## 1. How to log in to your own Partner Profile

In this chapter we will explain how to log in to your partner profile, how to edit your profile, and how to show it to everybody.

1.  First you need to be sure that your logged in into your own profile. [Click here](https://developer.mendixcloud.com/openid/login?immediate=true&continuation=link/ownprofile/) to log in and check your own community profile. With this action we know who your are and which company is attached to your account. Currently everybody within a company is allowed to edit that specific partner profile.
2.  Then you need to navigate to the [partner overview page](https://developer.mendixcloud.com/openid/login?immediate=true&continuation=link/partneroverview). Your company will be shown at the top of the partner overview list.
    ![](attachments/19203677/20217909.png)
3.  Click on your partner profile. This will show the public view of your company. Click on the blue '**Edit Partner Profile**' button to edit your profile. In the next chapter we will explain which fields you can add and how to edit them.
    ![](attachments/19203677/20217910.png)
4.  Once you're done editing your profile, you're ready to set your profile to public so that the rest of the community and customers can check it. To do so, simply click **Make this profile public**.
    ![](attachments/19203677/20217911.png)

## 2\. Edit your Partner Profile

In this chapter we will explain how to edit your profile. After you've logged in and clicked **Edit Partner Profile** you're all set to edit your profile.

On the Profile page you can edit the elements by clicking on the edit ![](attachments/19203677/19399148.png) button. Here we will describe some of the elements, the other elements on the profile page are pretty straight forward.

*   Company name: the edit button next to your company name will help you to add your Address and/or your email address. Your address will be shown at the top of the partner profile, and your email address will be used for the **Contact Us** button.
*   Video: add your company video. Currently only YouTube videos are supported.
    ![](attachments/19203677/20217913.png)
*   Industries: add your focus industries. This will be used in the filter option on the partner overview, so that a customer has the possibility to search for a partner with a focus on a specific industry.
    ![](attachments/19203677/20217914.png)

*   Geographical focus: add the countries where your company is active / has coverage. This will be used in the filter option on the partner overview, so that a customer has the possibility to search for a partner in a specific country.
    ![](attachments/19203677/20217916.png)

<div class="alert alert-info">

If you're missing an input option (for example, an industry), just send us a feedback message with the missing item using the Feedback button on the right side of the screen.

</div><div class="alert alert-info">

These fields are required before you can set your profile to public: address, email, summary, geographical focus, type of services, and support capabilities.

</div>

## 3\. Add developers to your Partner Profile

In this chapter we will show how to add the biggest asset of your company: your employees. Before you can add a developer to your partner profile, you need to make sure their profile is set to public. Learn [how to set up your Community Profile](how-to-set-up-your-profile) and set it to public.

1.  Go to the Developers tab to add the developers to your profile. All the employees attached to your company are shown in this overview.
    ![](attachments/19203677/20217919.png)

    Make sure you off-board the developers through the Company Admin in our platform who are no longer working at your company. These former employees will still be visible in the overview. It is important that you deactivate these in the Dev Portal, so that they don’t have access to projects etc. anymore.

2.  Here you can select the team members within your organization who are currently active and whose certifications you want to count for the total, by clicking **Add as developer**.
    ![](attachments/19203677/20217918.png)

    Developers with a public profile are shown at the top of this overview. You can use the search and filter functionalities to search for a specific team member.

    Only the certifications and Mendix Levels (or actually the exact amount of points) of the added developers will be counted in your partner profile. The highest rank of certification will be added to the overview and the amount of points will be added to the average Mendix Level of all your developers.

## 4\. Reference cases

In this chapter we will explain how to add reference cases to your partner profile and how to boost your overall rating. Go to the reference tab and click **Add Project**. This is where you can add all the details of your reference case.
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

## 5\. The partner overview page

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

## 6\. Related content

*   [How to set up your profile](how-to-set-up-your-profile)
*   [How to set up your partner profile](how-to-set-up-your-partner-profile)
