---
title: "Manage Exam Seats"
url: /community-tools/purchasing-exams/manage-exam-seats/
weight: 10
description: "Describes how an exam admin in an organization can manage exam seats."
---

## Introduction

Your  organization can place bulk orders to purchase Mendix certification exam seats. When Mendix processes the order, an exam admin is designated per order. 

Once the order is processed, the designated exam admin receives an email and notification to manage the order. The exam admin can oversee the details of the order and allocate the purchased exam seats to individuals within the organization. People who are allocated exam seats will be granted free access to take the exam.

This how-to explains how you can manage exam seats as an exam admin.

## Prerequisites

To manage exam seats, you must have a Mendix account and be an exam admin.

## Inviting Students to Take an Exam

1. Go to the [Exam Administration Overview](https://academy.mendix.com/link/examadmin) page of Mendix Academy to administer exams.

    Under **Available Exams**, you can see the remaining seats for each order and exam type.

    {{< figure src="/attachments/community-tools/order-exams-in-bulk/manage-exam-seats/overview.png" >}}

2. Click **Invite Student**.

    The **Add Student** dialog box opens.

3. Enter the email addresses of the students you want to invite. If you enter multiple email addresses, separate them with commas.

4. Click **Add to Invite**.

    You can add more students with the **Add More Students** button.

5. Set an expiry date for the invitation. 

   {{< figure src="/attachments/community-tools/order-exams-in-bulk/manage-exam-seats/expiry-date.png" >}}

   {{% alert color="info" %}}The student must register for the exam before the expiry date. If the student fails to register before the expiry day, the seat will added to the **Remaining Seats** and can be reassigned.{{% /alert %}}

6. Click **Send Invites**.

    The students will receive an email with a link that redirects them to the exam registration page.

The invitations are now visible under **Invited Students**.

## Checking the Status of an Invitation

In the **Invited Students** section, you can check the status of the invitations that have been sent.

{{< figure src="/attachments/community-tools/order-exams-in-bulk/manage-exam-seats/invited-students.png" >}}

An invitation can have one of the following statuses:

* **NOT ACCEPTED YET**: The student has not accepted the invitation. You can still [remind the student](#remind-student) or [withdraw the invitation](#withdraw-invitation).
* **REGISTERED**: The student has registered but has not yet completed the exam.
* **UNDISCLOSED**: The student has taken the exam but has not shared the result. A student can choose not to share the result with the exam admin when they register for the exam.
* **CERTIFIED**: The student has passed the exam and is certified.
* **FAILED**: The student has taken the exam and failed. 

### Reminding Students to Accept an Invitation {#remind-student}

If a student has not accepted the invitation, you can send a reminder email to encourage the student to register for the exam. To do so, click **Remind Student**.

### Withdrawing an Invitation {#withdraw-invitation}

You can withdraw an invitation that has not been accepted. To do so, click **Withdraw Invite**.
