---
title: "Date and Time Handling"
url: /refguide9/date-and-time-handling/
description: "Describes date and time handling for a Mendix application."
---

## Introduction

The Mendix Server operations use the time zone of the end-user instead of the server time zone, where possible. This ensures that operations like generating documents, exporting to Excel/CSV, and date computations in microflows/OQL do not produce unexpected results.

## Relevant Time Zones

There are three time zones that come into play in a Mendix application:

1. User/client – The time zone where the client is running. This is used for presenting dates and times to the end-user. The time zone is now (optionally) stored with each end-user to properly deal with daylight saving time (DST). If the time zone is not set, DST is not applied.
2. Coordinated Universal Time (UTC) – The platform stores all dates in UTC. This is a time standard that is often used in servers to provide an unambiguous date format. It does not change with DST, nor with where you are in the world. Every time a date or time is presented to the end-user it is localized to the time zone of the client unless specified differently.
3. Server – The time zone that the server is running in is only used for scheduling the time at which scheduled events run. When defining a scheduled event you can choose whether you want to use server time or UTC time. For everything else, the server time is irrelevant.

For brevity we will call these time zones user time, UTC, and server time.

## Changes

The server needs to know the time zone of each end-user. On startup, the browser reports both the current offset to UTC and, when available, a time zone identifier (for example, `Europe/Amsterdam`) from the underlying platform. When available, the runtime uses the identifier to properly handle DST for future and past dates. If no identifier is available, it falls back to the offset. You can explicitly set a time zone for each end-user, and that configured value takes precedence for server operations.

The `System` module contains the entity `TimeZone` which has an association with the `User` entity. `TimeZone` has three attributes: a code (based on the[Olson database](https://en.wikipedia.org/wiki/Tz_database)), a description suitable for showing to the end-user (for example "(GMT-05:00) New York") and a raw offset that is using for sorting the list of time zones.

In the `Administration` module, the `Account_NewEdit` page adds a time zone selector to set the time zone of the end-user. By default, the `MyAccount` page does not have this selector. It is the administrator's task to correctly set the time zone. You can add it yourself if you want your end-users to be able to set their time zone.

Studio Pro adds a setting to the **App Settings** dialog box. On the **Runtime** tab you can specify a **Default time zone**. This time zone is used for new end-users, but it is also applied to all end-users that do not have a time zone yet when starting your application.

## Configuring Your App

To make use of the date/time handling you have to take some action when configuring your app. Those actions depend on the type of the app: single time zone or multiple time zone. In a single time zone app all end-users are in the time zone or they are at least willing to use the same time zone. The time zone of the server is not important, so an app is still single time zone if all end-users are in the Netherlands but the server is in England. Multiple time zone apps have end-users in different time zones. Let us see what you need to do in each case.

### Single Time Zone App

If you do nothing in a single time zone app where the server is also in that time zone the date and time used for server operations depends on what the browser can report. The server will use the time zone identifier reported by the end-user's browser when available, or otherwise the current offset from UTC. When only the offset is available, DST will not be taken into account. In practice this means that dates and times during daylight savings, including past and future dates, are one hour off.

To make sure that all end-users have their time zone set, set the default time zone in the app settings in Studio Pro. When the application is restarted all existing end-users will get this default time zone. When new end-users are created they also get this default time zone.

In summary, in a single time zone app all you have to do is to set the default time zone in Studio Pro and you are done.

### Multiple Time Zone App

If you do nothing in a multiple time zone app the situation for server operations improves automatically. The server will use the time zone identifier reported by the browser when available, or otherwise the current UTC offset. However, when only the offset is available, DST will not be handled properly. To get proper DST handling in all cases, the time zone of end-users needs to be set.

There are several options for a multiple time zone app:

* Do nothing ־ If you do nothing server operations will use the browser's reported time zone identifier when available, or otherwise the current UTC offset. When the offset is used, DST will not be handled properly.
* Allow the end-users to set their own time zone ־ Add the time zone reference selector to the page with which end-users can manage their own account. By default, this is `MyAccount` in the `Administration` module.

    {{% alert color="info" %}}The time zone will only come into effect after the end-user has signed out and back in.{{% /alert %}}

* The administrator sets the time zone ־ Add the time zone reference selector to the page with which the administrator manages accounts. By default, this is `Account_NewEdit` in the `Administration` module. If the application does not have too many end-users this is a viable solution.
* Automatically set the time zone by using a microflow ־ If your application is used in several time zones and you can automatically determine which end-users are in which time zone, you can write an [after startup](/refguide9/app-settings/#after-startup) microflow to set the time zones. For example, if the application is used in the United States and in the Netherlands and all end-users in the United States have their language set to American English and all end-users in the Netherlands have their language set to Dutch a microflow can loop through all end-users and set the time zone based on the language code of the end-user.

{{% alert color="warning" %}}
Do NOT use the default time zone setting in Studio Pro for multiple time zone apps because that will set the default time zone for all end-users!
{{% /alert %}}

## Anonymous End-Users

If your application is accessible without signing in, anonymous end-users will get the default time zone that is set in Studio Pro. If no time zone is set in Studio Pro they will use the time zone identifier reported by the browser when available, or otherwise the offset. When only the offset is available, DST will not be taken into account.

## To Localize or Not to Localize

For each attribute of type **Date and time** you can specify whether you want the date and time to be localized when displaying (or picking) its value. Both localized and non-localized attributes are stored in UTC but only localized attributes are converted to the time zone of the end-user when displaying the value (for example, in the client or in generated documents). Use non-localized attributes if you are not interested in the time component of a date and you want the date to be exactly the same all over the world (for example, a birthday).

For more information, see the [Localize](/refguide9/attributes/#localize) section in *Attributes*.

## Tokens

Tokens for referring to specific moments like `[%BeginOfCurrentDay%]` refer to the end-user time zone. Where it makes sense, a UTC versions of the token is available, for example, `[%BeginOfCurrentDayUTC%]`.
