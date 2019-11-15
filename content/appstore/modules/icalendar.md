---
title: "iCalendar"
category: "Modules"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [iCalendar](https://appstore.home.mendix.com/link/app/315/) module sends appointment invites through email.

You should use this module if your app project contains planning functionality and you want the generated appointments and scheduled meetings to be available in a user's personal agenda (via Microsoft Outlook, Google Calendar, etc.).

This module facilitates a transportation mechanism to send an appointment invite to a user's client (the module also supports several mobile clients by using a vCalendar standard). The recipient can accept or decline an invite. Multiple recipients can be added to an appointment.

By using this module, you can create, update, and cancel appointments the same way as you do in Outlook. Each notification (create, update, and cancel) is added to a queue, and every minute, the queue is automatically processed by a scheduled event so that the email notifications are sent to all recipients.

The implementation of this module is based on an [iCal4j](https://github.com/ical4j) library.

### 1.1 Features

* Create, update, and cancel appointments
* Send invites and notifications
* Perform simple logging of appointments

## 2 Configuration

1. Add the **SMTPSettings** snippet to your app's navigation.
2. Add the **'Appointment_Overview** snippet to a page.
3. As an administrator, set the **SMTP settings** while **in runtime**.
4. Use other **Sub-microflows** in the **Use Me** folder to control appointments. 
5. Navigate to **Appointment_Overview** to create and change appointments.

To implement this functionality in your own app project, you can use the sub-microflows in the **Use Me** folder. 

When creating and updating appointments, notifications will be sent when **Save** is clicked. If an appointment is rescheduled or recipients have been changed, updates will be automatically sent through mail when **Save** is clicked.
