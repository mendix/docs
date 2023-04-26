---
title: "Mendix Forum"
url: /developerportal/community-tools/mendix-forum/
category: "Community Tools"
weight: 3
description: "Describes the Mendix Forum, where the Mendix community can ask and answer questions as well as post ideas for how to improve the Mendix Platform."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Mendix Forum](https://forum.mendixcloud.com) is where the Mendix community comes together to help each other with questions and answers and to propose ideas for improving the Mendix Platform.

The Mendix Forum is closely integrated with the [Mendix Profile](/developerportal/community-tools/mendix-profile/) so that Mendix community members can see all the interesting and useful information about who is participating in the Mendix Forum. If someone clicks your name anywhere on the Mendix Forum, your profile will open, so make sure to [make your Mendix Profile public](/developerportal/community-tools/mendix-profile/#profile) so everyone can see your details and progress!

## 2 Bookmarks

In **Personal** > **Bookmarks**, the following tabs are available:

* **Questions** – the questions you have bookmarked (for details on how to bookmark a question, see the [Question Details](#question-details) section below)
* **Ideas** – the ideas you have bookmarked (for details on how to bookmark an idea, see the [Idea Details](#idea-details) section below)

## 2 Posts

In **Personal** > **Posts**, the following tabs are available:

* **Posted** – the questions and ideas you have posted (for more information, see the [Asking Your Question](#asking-question) and [Posting Your Idea](#posting-idea) sections below)
* **Answered** – the questions you have answered (for more information, see the [Answering a Question](#answering-question) section below)
* **Commented** – the questions and ideas that you have commented on

## 3 Questions  {#questions-tab}

In **General** > **Questions**, there is an overview of the questions that have been asked. Here is an example question:

{{< figure src="/attachments/developerportal/community-tools/mendix-forum/questions_example.png" >}}

Each question has a descriptive title (①). Clicking the question title opens the specific [Question Details](#question-details).

Each question specifies the following elements:

* The beginning of the question description (②), which is taken from the [Question Details](#question-details)
* The category (③)
    * This is set when asking a question (for details, see the [Asking Your Question](#asking-question) section).
    * Clicking a category opens an overview page that lists all the questions in the same category.
* The tags applied to question (④) 
    * These are set when asking a question (for details, see the [Asking Your Question](#asking-question) section).
    * Clicking a tag opens an overview page that lists all the questions with the same tag.
* The number of votes (⑤), answers (⑥), and views (⑦) the question has received
* The name, avatar, and level of the Mendix community member who asked the question (⑧)
* When the question was created (⑨)

Hovering over the developer name brings up the profile card with theMendix points for the developer:

{{< figure src="/attachments/developerportal/community-tools/mendix-forum/questions_profile_card.png"   width="200"  >}}

Click the developer name on the card to go to their Mendix Profile.

### 3.1 Searching and Filtering Questions

To search for a question, enter your keywords in the **Search** text box.

To filter the searching results, you can use the following filters:

* **Status**
    * **Unanswered** – the question has not been answered
    * **Answered** – the question has been answered
    * **Answer Accepted** – the question has been answered and the answer has been accepted)
* **Last Updated** > **Sort by** – the default is **Last Updated**; you can set it to **Newest** or **Most Popular**
* **Spaces** – the space set when the question was asked (for more information, see the [Asking Your Question](#asking-question) section)
* **Type in a Tag** – the tags set when the question was asked (for more information, see the [Asking Your Question](#asking-question) section)
* **Version** – the Mendix version to which the question is related (for more information, see the [Asking Your Question](#asking-question) section)

Alternatively, you can search the entire Mendix Forum (both for questions and ideas) by clicking the search icon in the upper-right corner of the screen and entering keywords into the **Search** text box. Notice the following search details:

* The source is set to **Forum** by default; if you want to search other resources, you can switch the source
* You can set the **Type** of search results for the Mendix Forum to **Question**, **Idea**, or both (default)
* You can filter by **Space** to get more refined results

### 3.2 Question Details {#question-details}

Clicking the title of a question will bring you to the details page for that question:
{{< figure src="/attachments/developerportal/community-tools/mendix-forum/questions_specific_page.png" >}}

On this page, you can read the full descriptive text of the question and do the following:

* View the following question details (①):
    * When the question was **Submitted**
    * The date and time of the **Last activity** on the question (meaning, when it was last updated)
    * How many times the question has been **Viewed**
    * The **Space** of the question
    * The **Tags** applied to the question (clicking a tag opens an overview page that lists questions with the same tag)
    * The **Version** set when the question was asked (for more information, see the [Asking Your Question](#asking-question) section)
* Click the **▲** or **▼** button to upvote or downvote the question based on its usefulness (②)
* Click **Comment** to write and submit a comment on the question (③)
* Click **Bookmark** to bookmark the question (④)

{{% alert color="info" %}}
If you want to follow the discussion on a question via email notifications, click **Follow This Question** below the question details. Please note that you are automatically subscribed for email notifications on questions that you have asked; if you want to unsubscribe from these notifications, click **Unfollow This Question** on a specific question you have asked or that you want to stop following.
{{% /alert %}}

{{% alert color="info" %}}
The URL for each question is unique.
{{% /alert %}}

Below the question details are the answers to the question. Click the **▲** or **▼** button to upvote or downvote the answer based on how it addresses the question. You can also click **Comment** to comment on an answer.

{{< figure src="/attachments/developerportal/community-tools/mendix-forum/questions_answer.png" >}}

### 3.3 Asking a Question

#### 3.3.1 Asking Your Question {#asking-question}

{{% alert color="info" %}}
It has never been easier to ask a question on the Mendix Forum. But before you submit a new question, be sure to search the Mendix Forum for similar questions that have already been asked. There may be someone else who has already posted the same question!
{{% /alert %}}

To ask your own question on the Mendix Forum, follow these steps:

1. Click **Ask a Question** on the upper-right corner of the **Questions** page. 
2. On the **Ask Your Question** page, fill in the following details in the editor:

    * The **Title** of your question (which is how Mendix Forum users will first see your question, so make the title descriptive and interesting)
    * The **Description** of your question (add all the details about your question to make it searchable and so other users can answer it; consider including steps to reproduce the issue)
    * The **Space** that reflects your question (for example, **Connectors**, **Databases**, **Security**)
    * The **Studio Pro Version** that is relevant to your question (only available when you select a version-dependent **Space**)
    * The **Tag(s)** that reflect the topic of your question (which other users can use to filter the list of questions)

3. Click **Ask your question**.

#### 3.3.2 Accepting an Answer

Once a question you have asked receives several answers, you can accept an answer by clicking the check mark next to the answer.

You should accept the answer that properly and accurately responds to your question in the best way possible.

### 3.4 Answering a Question {#answering-question}

Below the answer(s), you can contribute to the Mendix Forum by writing your own answer in the editor and then clicking **Submit Answer**.

You can easily upload your images in the Mendix Forum by dragging them directly into the text editors. In order to resize and position an image, double-click it in the editor or click the **Image** button in the toolbar.

## 4 Ideas

In **General** > **Ideas**, you can see an overview of the ideas and feature requests for improving the Mendix Platform that have been submitted by Mendix community members. Here is an example idea:

{{< figure src="/attachments/developerportal/community-tools/mendix-forum/ideas_example.png" >}}

All the submitted ideas are publicly visible, and each idea has a descriptive title (①). Clicking the idea title opens the specific [Idea Details](#idea-details).

Each idea specifies the following elements:

* The beginning of the idea description (②) (this is taken from the [Idea Details](#idea-details))
* The category (③)
    * This is set when Posting Your Idea (for details, see the [Posting Your Idea](#posting-idea) section).
    * Clicking a category opens an overview page that lists all the ideas in the same category.
* Tags (④) (for example, **Native-widgets**)
    * This is set when Posting Your Idea (for details, see the [Posting Your Idea](#posting-idea) section).
    * Clicking a tag opens an overview page that lists all the ideas with the same tag.
* The number of votes (⑤), comments (⑥), and views (⑦) for the idea
* The name, avatar, and level of the Mendix community member who created the idea (⑧)
* When the idea was created (⑨)
* The status of the idea (⑩) (for descriptions of the statuses, see the [Idea Details](#idea-details) section below)

### 4.1 Searching and Filtering Ideas

To search for an idea, enter your keywords in the **Search** text box.

To filter the searching results, you can use the following filters:

* **Status**
    * **Open** – the idea has not been reviewed yet
    * **Planned** – the idea has been accepted by the Mendix Product Managers and scheduled for implementation
    * **Implemented** – the idea has been implemented
    * **Closed** – the idea has been reviewed by the Product Managers but it has not been accepted
* **Last Updated** > **Sort by** – the default is **Last Updated**; you can set it to **Newest** or **Most Votes**
* **Spaces** – the space set when the idea was submitted (for more information, see the [Posting Your Idea](#posting-idea) section below)
* **Type in a Tag** – the tags set when the idea was submitted (for more information, see the [Posting Your Idea](#posting-idea) section below)

Alternatively, you can search the entire Mendix Forum (both for questions and ideas) by clicking the search icon in the upper-right corner of the screen and entering keywords into the **Search** text box. Notice the following search details:

* The source is set to **Forum** by default; if you want to search other resources, you can switch the source
* You can set the **Type** of search results for the Mendix Forum to **Question**, **Idea**, or both (default)
* You can filter by **Space** to get more refined results

### 4.2 Idea Details {#idea-details}

Clicking the title of an idea will bring you to the details page for that idea:

{{< figure src="/attachments/developerportal/community-tools/mendix-forum/ideas_specific_page.png" >}}

On this page, you can read the full descriptive text of the idea and do the following:

* View the following idea details (①):

    * The **Status** of the idea – these are the possible statuses:
        * **Open** – the idea has not been reviewed yet
        * **Planned** – the idea has been accepted by the Mendix Product Managers and scheduled for implementation
        * **Implemented** – the idea has been implemented
        * **Closed** – the idea has been reviewed by the Product Managers but it has not been accepted
    * When the ideas was **Submitted**
    * The date and time of the **Last activity** on the idea (meaning, when it was last updated)
    * How many times the idea has been **Viewed**
    * The **Space** of the idea
    * The **Tags** applied to the idea (clicking a tag opens an overview page that lists all the ideas with the same tag.)

* Click **Vote** to upvote the idea (②)

    * By upvoting ideas, you can show the Mendix community and Product Managers what you would like to see added to the Mendix Platform.

    {{% alert color="info" %}}The upvotes will be used as input for the Product Managers and Mendix community MVPs to decide which features will be nominated for implementation. Please note that the level of impact also needs to be considered.{{% /alert %}}

* Click **Bookmark** to bookmark the idea (③)

If you want to follow the discussion on an idea via email notifications, click **Follow This Idea** below the idea details. Please note that you are automatically subscribed for email notifications on ideas that you have submitted; if you want to unsubscribe from these notifications, click **Unfollow This Idea** on a specific idea that you have submitted or that you want to stop following.

{{% alert color="info" %}}
The URL for each idea is unique.
{{% /alert %}}

### 4.3 Posting an Idea {#posting-idea}

{{% alert color="info" %}}
If you have a great idea that you would like to see implemented on the Mendix Platform, we want to hear it! But please make sure you search the idea forum for similar ideas before submitting a new idea. There may be someone else who has already posted the same idea!
{{% /alert %}}

To submit your own idea to the idea forum, follow these steps:

1. Click **Submit idea** on the upper-right corner of the **All Ideas** page.
2. On the **Submit your idea** page, fill in the following details in the editor:

    * The **Title** of your idea (which is how Mendix Forum users will first see your idea, so make the title descriptive and interesting)
    * The **Description** of your idea (add all the details about your idea to make it searchable and so other users can vote and comment on it)
    * The **Space** that reflects your idea (for example, **Connectors** or **Microflows**)
    * The **Tag(s)** that reflect your idea (which other users can use to filter their searches)

3. Click **Submit your idea**.

Mendix looks forward to hearing all of your ideas!

## 5 Read More

* [How to Contribute to the Documentation](/developerportal/community-tools/contribute-to-the-mendix-documentation/)
