---
title: "Date and Time Handling"
url: /refguide/date-and-time-handling/
description: "Describes date and time handling for a Mendix application."
---

## Introduction

The Mendix Server operations use the time zone of the user instead of the server time zone. Previously operations like generating documents, exporting to Excel/CSV and date computations in microflows/OQL all used the server time zone. This is fine if the server and all users of your application are in the same time zone. If they are not, however, generated output can contain unexpected results.

## Relevant Time Zones

There are three time zones that come into play in a Mendix application:

1. User/client: The time zone where the client is running is used for presenting dates and times to the end-user. The time zone is now (optionally) stored with each user to properly deal with daylight saving time. If the time zone is not set daylight saving time (DST) is not applied.
2. Coordinated Universal Time (UTC): The platform stores all dates in the UTC time zone. This is a time standard that is often used in servers to provide an unambiguous date format. It does not change with a change of the seasons (DST). Every time a date or time is presented to the user it is localized to the time zone of the client unless specified differently.
3. Server: The time zone that the server is running in is only used for scheduling the time at which scheduled events run. When defining a scheduled event you can choose whether you want to use server time or UTC time. For everything else, the server time is irrelevant.

For brevity we will call these time zones user time, UTC and server time.

## Changes

The server needs to know the time zone of each user. Unfortunately, the web browser cannot report this information. It only reports the current offset to UTC. This is not enough to determine the exact time zone and properly deal with daylight saving time of future and past dates. For this reason web applications often offer you the option of setting your time zone and we have now built this option into Mendix, too. You can explicitly set a time zone for each user and this time zone is then used for server operations.

The entity TimeZone has been added to the System module along with an association between User and TimeZone. The TimeZone entity has three attributes: a code (based on the Olson database), a description suitable for showing to the user ("(GMT-05:00) New York") and a raw offset that is using for sorting the list of time zones.

In the Administration module the Account_NewEdit page adds a time zone selector to set the time zone of the user. By default, the MyAccount page does not have this selector. It is the administrator's task to correctly set the time zone. You can add it yourself if you want your end-users to be able to set their time zone.

Studio Pro adds a setting to the **App Settings** dialog box. On the **Runtime** tab you can specify a **Default time zone**. This time zone is used for new users, but it is also applied to all users that do not have a time zone yet when starting your application.

## Existing App

To make use of the new date/time handling you have to take some action after converting your existing app. Those actions depend on the type of the app: single time zone or multiple time zone. In a single time zone app all users are in the time zone or they are at least willing to use the same time zone. The time zone of the server is not important, so an app is still single time zone if all users are in the Netherlands but the server is in England. Multiple time zone apps have users in different time zones. Let us see what you need to do in each case.

### Single Time Zone App

If you do nothing in a single time zone app where the server is also in that time zone the situation for server operations is actually slightly worse than before. Users will not have a time zone and if that is the case the server uses the current offset from UTC sent by the web browser. This offset is not enough to determine the exact time zone and this means that daylight saving time (DST) will not be taken into account. In practice this means that dates and times in the future and past - past DST changes - are one hour off.

To make sure that all users have their time zone set, you have to set the default time zone in the app settings in Studio Pro. When the application is started again all existing users will get this default time zone. Also, when new users are created they will also get this default time zone automatically.

In summary, in a single time zone app all you have to do is to set the default time zone in Studio Pro and you are done.

### Multiple Time Zone App

If you do nothing in a multiple time zone app the situation for server operations improves automatically. Before, the server time zone would be used for operations like generating Excel exports and other documents. This meant that if a user in China generated a report and the server was in the United States dates and times would be way off. The server will at least use the browser's UTC offset. Only daylight saving time will not be handled properly yet. To get proper DST handling as well, the time zone of users needs to be set.

There are several things you can do in a multiple time zone app:

* Nothing. If you do nothing server operations will use the user's current UTC offset and this is a reasonable approximation of actually setting the time zone. Only DST will not be handled properly.
* Allow the users to set their own time zone. Add the time zone reference selector to the page with which users can manage their own account, by default MyAccount in Administration. When doing this, take note that a time zone will only effectively be updated after a user logged out and back in.
* The administrator sets the time zone. Add the time zone reference selector to the page with which the administrator manages accounts, by default Account_NewEdit in Administration. If the application does not have too many users this is a viable solution.
* Automatically set the time zone by using a microflow. If your application is used in few time zones and you can automatically determine which users should which time zone you can write an after startup microflow to set the time zones. For example, if the application is used in the United States and in the Netherlands and all users in the United States have their language set to American English and all users in the Netherlands have their language set to Dutch a microflow can loop through all users and set the time zone based on the language code of the user.

{{% alert color="warning" %}}
Do NOT use the default time zone setting in Studio Pro for multiple time zone apps because that will set the default time zone for all users!
{{% /alert %}}

## Anonymous users

If your application is accessible without signing in, those anonymous users will get the default time zone that is set in Studio Pro. If no time zone is set in Studio Pro they will use the offset reported by the browser. Only DST for dates in the future and past will not be handled properly.

## To Localize or Not to Localize

Per attribute of type **Date and time** you can specify whether you want the date and time to be localized when displaying (or picking) their value. This is not a new feature but worth mentioning on this page. Both localized and non-localized attributes are stored in UTC but only localized attributes are converted to the time zone of the user when displaying their value (for example, in the client or in generated documents). Use non-localized attributes if you are not interested in the time component of a date and you want the date to be exactly the same all over the world (for example, a birthday).

For more information, see the [Localize](/refguide/attributes/#localize) section in *Attributes*.

## Tokens

Tokens for referring to specific moments like [%BeginOfCurrentDay%] now refer to the user time zone. Where it makes sense, UTC versions of tokens have been added, for example, [%BeginOfCurrentDayUTC%]].
