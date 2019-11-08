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

1. Add the **SMTPSettings** snippet to the navigation
2. Add 'Appointment_Overview' Snippet to a page
3. As an administrator, set SMTP settings while being 'in runtime'
4. Other 'Sub-microflows' in the Use Me folder can be used to control appointments
5. Navigate to 'Appointment_Overview' to create/change appointments
6. To implement this functionality in your own project you can use the sub microflows in Use Me folder
7. When creating/updating appointments notifications will be sent when pressing the 'save' button.
8. If the appointment is re-scheduled or recipients has been changed there will be automatically sent updates through mail on 'save'.
