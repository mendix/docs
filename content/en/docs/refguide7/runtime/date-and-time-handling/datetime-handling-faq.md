---
title: "DateTime Handling FAQ"
url: /refguide7/datetime-handling-faq/
notoc: true
---


In this FAQ we'll answer some Frequently Asked Questions about DateTime.

### What is DateTime in terms of computer programs? (MUST READ)

A DateTime is nothing more than a number to a computer. This number represents the amount of seconds (or milliseconds) since 1970-01-01 00:00:00 UTC. It's beyond the scope of this FAQ to explain why this date was universally chosen but you can find this by searching for Unix Epoch or reading [http://en.wikipedia.org/wiki/Unix_time](http://en.wikipedia.org/wiki/Unix_time).

This also means there is NO timezone information stored in a DateTime itself. It is important to keep this in mind when reasoning about dates and times. For things such as comparing DateTime objects, nothing concerning localization or timezones is done. Only when formatting time, which means as much as making it readable to humans, or for operations such as getting the beginning of the day, timezones come into play.

### What is the purpose of the Default time zone setting in project settings?

The default time zone determines the time zone for newly created users and also sets a time zone for users that do not have a time zone when the server starts. If your application is only used in one time zone, setting this as the default will make sure that the users of your application never have to worry about setting their time zone. You should probably not use the default time zone setting for projects where people log in from multiple time zones because it will rarely be correct.

### What is the purpose of setting a time zone for a user?

The time zone setting for a user defines under what time zone operations are performed for this user on the **server**, for example when a Microflow formats a DateTime value as a String to get the current hour of the day. Note that this is different from operations in the users browser. Unfortunately it is not possible for browsers to operate under a different time zone than **either** the one of the browsers computer **or** the UTC time zone. This means that users should set their time zone to the one their browser runs on, or they might notice discrepancies in what is displayed in their browser and (for example) generated documents or formatted strings. Note that if you do **not** set a timezone to a user, the server sometimes only knows the offset from UTC that the browser reports of the **current** moment, which can lead to unexpected results when dealing with dates in a different period of the year after a Daylight Savings Time adjustment.

### How is Daylight Savings Time (DST) handled?

Just like a regular timezone. If you are in Eastern Standard Time (EST, which is UTC -5) normally then you are in Eastern Daylight Time (EDT, which is UTC -4) during the summer. This is of course all handled automatically, but note that you really ARE in a different timezone in summer.

### I planned a scheduled event at 02:00 using server time and set it to repeat every day. Now my local DST changed and scheduled events are starting to run an hour off. Why?

This can be confusing but is expected. The scheduling of scheduled events is interval-based and not time-based. Notice that the original date of the scheduled event is still at your previous timezone (before the DST period changed), the scheduled event is simply repeating itself every 24 hour, which might mean that you will see a change in the local time it runs at, because during DST shifts a day may take 25 hours or 23 hours. This will cause a temporary shift for as long as the DST change lasts.

### What if I plan it in UTC?

This will be less ambiguous because it will always run at the same time in UTC, but you will still see these changes because your timezone changes its relative position to UTC.

### But I really need to run scheduled events at 02:00 local time, always! How do I do this?

Currently you can work around this issue by scheduling 2 events that are running at 02:00 in both DST periods. In the Microflow you can check what DST you're currently in and either execute the rest of the Microflow or not.

### How is a non-localized date supposed to work?

Per attribute of type DateTime you can specify whether you want the date and time to be localized. Both localized and non-localized attributes are stored in UTC but only localized attributes are shown in the time zone of the user when displaying (or picking) their value, for example in the client or in generated documents. Use non-localized attributes if you are not interested in the time component (for example, birthdays) or if you want a date to look exactly the same all over the world. Otherwise, the date could shift because of time zone differences: a date and time early in the morning on April 2nd in Europe will be on April 1st in the USA.

### If I assign a non-localized date the value of token: `[%CurrentDateTime%]` what should I be seeing in the client if I am in EST? It is currently 14:15 (EST), should I see that time or 19:15?

You should see 19:15, the non-localized date will always show as UTC time. The current DateTime is simply a moment in time and obviously happens at the same moment everywhere on earth, but for non localized dates it would be displayed as UTC.

### As a user I press a Microflow button and want to compare a non-localized date attribute with a localized date attribute. What should the platform do in case of this expression: `($entity/localizeddate > $entity/nonlocalizeddate)`, for example with a localizeddate at 14:00 EST and the nonlocalizeddate at 14:15 UTC?

It will simply compare the UTC values of the dates. See a previous question where we said that non-localized date is purely a display setting. So in this case 14:00 EST is greater than 14.15 UTC, because it really compares 19:00 UTC with 14:15 UTC.

### What if I want to do it differently?

If you want to compare times of the day between different time zones, so you would like a localized date at 14.00 EST to be SMALLER than a non-localized date at 14:15 UTC, then you will have to format the dates as a string or integer and compare the times that way. Note that the actual moment 14:15 UTC will occur sooner than 14.00 EST and you should really be wondering why you're doing this.

### What should be the outcome (and why) if I run the following expression in EST: `[%BeginOfCurrentDay%] > [%BeginOfCurrentDayUTC%]` ?

It depends on when you run this statement. Usually it will return true because the beginning of the current day in UTC is sooner (so smaller) than the begin of the current day in EST. However, if you run this when the day already changed in UTC time but not in EST time (so between midnight and 05:00 UTC, or 19:00 and midnight EST) then it will return false, because the begin of the current day will be a day later in the UTC timezone.

### If I am comparing something with a `[%CurrentDateTime%]` token in a DataGrid, which time should it use as a constraint for a localized and for a non-localized date? So if I do an XPath with the following constraint `[LocalDateAttr > [%CurrentDateTime%]` or the following constraint `[NotLocalDateAttr > [%CurrentDateTime%]` what should I expect in the result when it is 12:10pm in boston ET? Should it show all records with a date after 12:10 or all records after 17:10?

Whether something is a local date or not is irrelevant in this case. Note that there is no UTC variant of the`
[%CurrentDateTime%]` token because this wouldn't make any sense, a moment in time is the same everywhere in the world, even if it may be displayed differently depending on the place. To answer the question, this is yes to both. It will show all records after 12:10 EST (for the localized dates) which is the same as 17:10 UTC (which is how your non-localized dates would show), but these times are the same.

### I would like to plan an event at the start of office hours in a different time zone. How would I do this?

You can do this by parsing your time string (for example: 2013-01-01 09:00:00) with a certain format and time zone set, using Java actions.

### What does the setting Scheduled event time zone do?

A scheduled event also needs a time zone to operate in, just like when a user would run a Microflow you might encounter operations that require a time zone. The setting for Scheduled event time zone defines which time zone this is. Note that this is independent of when a scheduled event is scheduled to RUN, which can be planned at the server's time or UTC.

### How are DateTimes in XML that have no timezone information treated?

If a DateTime is encountered in XML that is processed using an XML-To-Domain mapping and specifies no timezone, before Mendix 5.13 the DateTime would be interpreted as if it was in the server's timezone. After Mendix 5.13 this DateTime is interpreted as if it was in UTC, making it more inline with all the other DateTime operations and less error prone. The location of the machine running the server won't affect any operations anymore. This may however change behavior.
