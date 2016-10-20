---
title: "Assert Current Page"
---
## Description
Asserts that a certain page is open, by checking the current page title. Note that the page title may depend on the user’s language! For dialogs use the Find/Assert dialog action.

## Usage
You have to pass a page title to the action, which will be compared with the current page title .
Optional you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.    

## Input Parameters

Name | Datatype | Required| Description
---- |:--------:|:-------:|---------------
Page Title | String | yes | The title the page has to have
