---
title: "Standard Actions"
url: /appstore/partner-solutions/ats/rg-one-standard-action-overview/
weight: 4
---

## Introduction

The following tables list all standard actions for Mendix. There's one table per folder/category.

## DataGrid, TemplateGrid, ListView

| Action | Supported Widgets | Description |
| --- | --- | --- |
| Click DataGrid Row | DataGrid | Click a DataGrid Row by Column Value |
| Find/Assert DataGrid Row | DataGrid | Find/Assert a DataGrid Row by a certain Column Value |
| Find Item/Row | DataGrid, TemplateGrid, ListView | Find a Row/Item in a DataGrid, TemplateGrid or ListView by Index |
| Find Item/Row (by child element) | DataGrid, TemplateGrid, ListView | Finds Item or Row of a TemplateGrid, DataGrid or ListView containing a specified element |
| Find Selected Item/Row | DataGrid, TemplateGrid, ListView | Returns first selected Item/Row object |
| Get Item/Row Index | DataGrid, TemplateGrid, ListView | Gets the Index of a row in a Datagrid, or an item in a TemplateGrid or ListView |
| Get Row Cell Value | DataGrid | Gets the Cell Value of a DataGrid row |
| Get Total Item/Row Count | DataGrid, TemplateGrid, ListView | Gets the total grid count from the paging status |
| Get Visible Item/Row Count | DataGrid, TemplateGrid, ListView | Returns number of currently visible Items/Rows in a TemplateGrid, DataGrid or ListView |
| Set ListView Search | ListView | Sets the ListView Search Text |
| Set Row Cell Value | DataGrid | Sets the Cell Value in a DataGrid row |
| Sort DataGrid | DataGrid | Sorts DataGrid by given Column |

## Dialog

| Action | Supported Widgets | Description |
| --- | --- | --- |
| Cancel Dialog | ConfirmationDialog | Click Cancel on a Confirmation Dialog |
| Close Dialog | Window, DialogMessage, ConfirmationDialog | Click X Button on a Confirmation, Error, Warning or Info Dialog |
| Confirm Dialog | ConfirmationDialog, DialogMessage | Click Proceed/Ok Button on a Confirmation, Error, Warning or Info Dialog |
| Find/Assert Dialog | Window, DialogMessage, ConfirmationDialog | Find/Assert a Dialog by Title or Type |
| Get Dialog Message Text | ConfirmationDialog, DialogMessage | Get the text from message and confirmation dialogs |

{{% alert color="info" %}}
A *Window* is rendered when a page is opened as a popup.

A *ConfirmationDialog* is shown when a delete or microflow action requires a confirmation. Show message actions in microflows result in *DialogMessage* widgets.
{{% /alert %}}

## FileManager

| Action | Supported Widgets | Description |
| --- | --- | --- |
| Set File Manager | FileManager | Set a file manager to the given file path to upload a file |

## Generic

| Action | Supported Widgets | Description |
| --- | --- | --- |
| Assert Current Page |   | Asserts that a certain page is open, by checking the current page title. Note that the page title may depend on the user’s language! For dialogs use the Find/Assert dialog action. |
| Assert Validation Message | All widgets | Asserts a validation message with a certain text |
| Click/Doubleclick | All web elements | Perform a click or doubleclick and wait for Mendix activities |
| Click Widgets | All widgets | Click on a Mendix Widget (for example, Button, Link, Image) by its name |
| Click Widget Button | ListView, ReferenceSelector | Refresh Button / Loadmore / ClearSearchField (ListView) Goto, / Add (ReferenceSelector) |
| Find/Assert Widget | All widgets | Find/Assert a Mendix Widget by its given name. It is possible to use a sequence of names as a path. |
| Get Validation Message | All widgets | Returns the validation message of a widget |
| Login |   | Login to Mendix Application with standard login page or on Cloud using MxID |
| Logout |   | Trigger logout/logoff from application via client API. Use this keyword in teardown of your test cases to end the user session. This will work regardless of the UI state. |
| Open Application |   | Opens a Mendix application at [Website URL] in a browser with Mendix specific settings |

## GroupBox

| Action | Supported Widgets | Description |
| --- | --- | --- |
| Close GroupBox | GroupBox | close a groupbox |
| GroupBox is Collapsed | GroupBox | Get GroupBox Collapsed state: true if collapsed, otherwise false |
| Open GroupBox | GroupBox | open a groupbox |

## Input

| Action | Supported Widgets | Description |
| --- | --- | --- |
| Assert Checkbox Value | CheckBox | Assert the value of a Checkbox |
| Assert Value | TextBox, TextArea, DatePicker, DropDown, RadioButton, ReferenceSelector, SearchInput Text, SearchInput DropDown, Label, OnChange Inputbox | Assert the text value from a Textbox, Textarea, Dateinput |
| Dropdown has Option | DropDown, ReferenceSelector, SearchInput DropDown | Returns true if value is available in drop-down |
| Get Checkbox Value | CheckBox | Returns true if the Checkbox is checked |
| Get Index | DropDown, ReferenceSelector, SearchInput DropDown | Get index of selected value in a drop-down, for example, an EnumSelect or ReferenceSelector |
| Get Value | TextBox, TextArea, DatePicker, DropDown, RadioButton, ReferenceSelector, SearchInput Text, SearchInput DropDown, Label, OnChange Inputbox | Get the text value from a Textbox, Textarea, Dateinput, RadioButton, Dropdowns |
| Set Checkbox Value | CheckBox | Sets the value of a Checkbox |
| Set Value | TextBox, TextArea, DatePicker, DropDown, RadioButton, ReferenceSelector, SearchInput Text, SearchInput DropDown, OnChange Inputbox | Set the text value of a Textbox, Textarea, Dateinput, Reference Selector, Enum Selector |
| Set Value (by index) | DropDown, ReferenceSelector, SearchInput DropDown | Set the value of a drop-down by index, for example, EnumSelect or ReferenceSelector |
| Toggle Checkbox Value | CheckBox | Click on a Checkbox to toggle its value |

## Navigation, Menu

| Action | Supported Widgets | Description |
| --- | --- | --- |
| Click Menu Item | NavigationTree, MenuBar, SimpleMenuBar | Click on a Menu Item in a Navigation Tree, Menu Bar and Simple Menu Bar |
| Find/Assert Menu Item | NavigationTree, MenuBar, SimpleMenuBar | Find/Assert a visible Menu Item in a Navigation Tree, Menu Bar and Simple Menu Bar |

## System

| Action | Supported Widgets | Description |
| --- | --- | --- |
| Find Widget Child Node | All widgets | Find a Node within a Mendix Widget. Also matches the widget node itself. |
| Focus WebElement | All web elements | Focus WebElement and perform a Mendix wait afterwards |
| Get Current Page Title |   | Returns the Current Page/Form Title. |
| Mendix wait |   | Inject Mendix Scripts and Wait |

## Tab

| Action | Supported Widgets | Description |
| --- | --- | --- |
| Assert Active Tab Caption | TabContainer | Assert a certain value for the caption of the active tab page |
| Get Active Tab Caption | TabContainer | Returns the caption of the active tab page |
