---
title: "Action Reference"
parent: "rg-version-2"
---
## Action Reference

The tables below list all standard actions for Mendix. There is one table per category.
For more detailled information you can read following sections. 

- [Mendix Actions](mendix-actions)
- [Dialog](dialog)
- [Mendix Appstore Widgets Actions](mendix-appstore-widgets-actions)
- [ATS Core Actions](ats-core-actions)
- [Selenium Actions](selenium-actions)

### DataGrid, TemplateGrid, ListView

| Action                           | Supported Widgets                | Description                              |
| -------------------------------- | -------------------------------- | ---------------------------------------- |
| Click DataGrid Row               | DataGrid                         | Clicks a DataGrid Row by Column Value     |
| Find/Assert DataGrid Row         | DataGrid                         | Finds/Asserts a DataGrid Row by a certain Column Value |
| Find Item/Row                    | DataGrid, TemplateGrid, ListView | Finds a Row/Item in a DataGrid, TemplateGrid or ListView by Index |
| Find Item/Row (by child element) | DataGrid, TemplateGrid, ListView | Finds an Item or Row of a TemplateGrid, DataGrid or ListView containing a specified element |
| Find Selected Item/Row           | DataGrid, TemplateGrid, ListView | Returns first selected Item/Row object   |
| Get Item/Row Index               | DataGrid, TemplateGrid, ListView | Gets the Index of a row in a Datagrid, or an item in a TemplateGrid or ListView |
| Get Row Cell Value               | DataGrid                         | Gets the Cell Value of a DataGrid row    |
| Get Total Item/Row Count         | DataGrid, TemplateGrid, ListView | Gets the total grid count from the paging status |
| Get Visible Item/Row Count       | DataGrid, TemplateGrid, ListView | Returns the number of currently visible Items/Rows in a TemplateGrid, DataGrid or ListView |
| Set ListView Search              | ListView                         | Sets the ListView Search Text            |
| Set Row Cell Value               | DataGrid                         | Sets the Cell Value in a DataGrid row    |
| Sort DataGrid                    | DataGrid                         | Sorts the DataGrid by the given Column           |

### Dialog

| Action                  | Supported Widgets                        | Description                              |
| ----------------------- | ---------------------------------------- | ---------------------------------------- |
| Cancel Dialog           | ConfirmationDialog                       | Clicks Cancel on a Confirmation Dialog    |
| Close Dialog            | Window, DialogMessage, ConfirmationDialog | Clicks the X Button on a Confirmation, Error, Warning or Info Dialog |
| Confirm Dialog          | ConfirmationDialog, DialogMessage        | Clicks the Proceed/Ok Button on a Confirmation, Error, Warning or Info Dialog |
| Find/Assert Dialog      | Window, DialogMessage, ConfirmationDialog | Finds/Asserts a Dialog by Title or Type    |
| Get Dialog Message Text | ConfirmationDialog, DialogMessage        | Gets the text from message and confirmation dialogs |

{{% alert type="info" %}}

A _Window_ is rendered when a page is opened as a popup.

A _ConfirmationDialog_ is shown when a delete or microflow action requires a confirmation. Show message actions in microflows result in _DialogMessage_ widgets.

{{% /alert %}}

### FileManager

| Action           | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Set File Manager | FileManager       | Sets a file manager to the given file path to upload a file |

### Generic

| Action                    | Supported Widgets           | Description                              |
| ------------------------- | --------------------------- | ---------------------------------------- |
| Assert Current Page       |             N/A             | Asserts that a certain page is open, by checking the current page title. Note that the page title may depend on the user’s language! For dialogs use the Find/Assert dialog action. |
| Assert Validation Message | All widgets                 | Asserts that a validation message displays a specific text |
| Click/Doubleclick         | All web elements            | Performs a click or doubleclick and wait for Mendix activities |
| Click Widget             | All widgets                 | Clicks on a Mendix Widget (e.g. Button, Link, Image) by its name |
| Click Widget Button       | ListView, ReferenceSelector | Clicks the Refresh Button / Loadmore / ClearSearchField (ListView) Goto, / Add (ReferenceSelector) |
| Find/Assert Widget        | All widgets                 | Finds/Asserts a Mendix Widget by its given name. It is possible to use a sequence of names as a path. |
| Get Validation Message    | All widgets                 | Returns the validation message of a widget |
| Hover                     | All web elements            | Hovers a web element |
| Login                     | Standard login page         | Logins to a Mendix Application that has a standard login page or on the Cloud using MxID |
| Logout                    | N/A                         | Triggers logout/logoff from an application via the client API
| Open Application          | N/A                         | Opens a Mendix application at [Website URL] in a browser with Mendix specific settings |

### GroupBox

| Action                | Supported Widgets | Description                              |
| --------------------- | ----------------- | ---------------------------------------- |
| Close GroupBox        | GroupBox          | closes a groupbox                         |
| GroupBox is Collapsed | GroupBox          | Gets the GroupBox Collapsed state: true if collapsed, otherwise false |
| Open GroupBox         | GroupBox          | opens a groupbox                          |

### Input

| Action                | Supported Widgets                        | Description                              |
| --------------------- | ---------------------------------------- | ---------------------------------------- |
| Assert Checkbox Value | CheckBox                                 | Asserts the value of a Checkbox           |
| Assert Value          | TextBox, TextArea, DatePicker, DropDown, RadioButton, ReferenceSelector, SearchInput Text, SearchInput DropDown, Label, OnChange Inputbox | Asserts the text value displayed in a Textbox, Textarea, Dateinput |
| Dropdown has Option   | DropDown, ReferenceSelector, SearchInput DropDown | Returns true if value is available in dropdown |
| Get Checkbox Value    | CheckBox                                 | Returns true if the Checkbox is checked  |
| Get Index             | DropDown, ReferenceSelector, SearchInput DropDown | Gets the index of the selected value in a dropdown, e.g. an EnumSelect or ReferenceSelector |
| Get Value             | TextBox, TextArea, DatePicker, DropDown, RadioButton, ReferenceSelector, SearchInput Text, SearchInput DropDown, Label, OnChange Inputbox | Gets the text value from a Textbox, Textarea, Dateinput, RadioButton, Dropdowns |
| Set Checkbox Value    | CheckBox                                 | Sets the value of a Checkbox             |
| Set Value             | TextBox, TextArea, DatePicker, DropDown, RadioButton, ReferenceSelector, SearchInput Text, SearchInput DropDown, OnChange Inputbox | Sets the text value of a Textbox, Textarea, Dateinput, Reference Selector, Enum Selector |
| Set Value (by index)  | DropDown, ReferenceSelector, SearchInput DropDown | Sets the value of a dropdown by index, e.g. EnumSelect or ReferenceSelector |
| Toggle Checkbox Value | CheckBox                                 | Clicks a Checkbox to toggle its value  |

### Navigation, Menu

| Action                | Supported Widgets                      | Description                              |
| --------------------- | -------------------------------------- | ---------------------------------------- |
| Click Menu Item       | NavigationTree, MenuBar, SimpleMenuBar | Clicks a Menu Item in a Navigation Tree, Menu Bar and Simple Menu Bar |
| Find/Assert Menu Item | NavigationTree, MenuBar, SimpleMenuBar |                                          Finds/Asserts a visible Menu Item in a Navigation Tree, Menu Bar and Simple Menu Bar


### System

| Action                 | Supported Widgets | Description                              |
| ---------------------- | ----------------- | ---------------------------------------- |
| Find Widget Child Node | All widgets       | Finds a Node within a Mendix Widget. Also matches the widget node itself. |
| Focus WebElement       | All web elements  | Focuses a WebElement and performs a Mendix wait afterwards |
| Get Current Page Title | N/A                  | Returns the Current Page/Form Title     |
| Mendix wait            | N/A                  | Injects Mendix Scripts and Waits           |

### Tab

| Action                    | Supported Widgets | Description                              |
| ------------------------- | ----------------- | ---------------------------------------- |
| Assert Active Tab Caption | TabContainer      | Asserts that the active tab page displays a specific caption |
| Get Active Tab Caption    | TabContainer      | Returns the caption of the active tab page |