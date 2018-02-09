---
title: "Action Reference"
parent: "rg-version-2"
---

## 1 Introduction

The tables below list all the standard actions for Mendix. There is one table per category. For more detailed information, see the following ATS Reference Guide pages: 

* [Mendix Actions](/ats/refguide/rg-version-1/mendix-actions)
* [Dialog](/ats/refguide/rg-version-1/dialog)
* [Mendix App Store Widget Actions](/ats/refguide/rg-version-1/mendix-appstore-widgets-actions)
* [ATS Core Actions](/ats/refguide/rg-version-1/ats-core-actions)
* [Selenium Actions](/ats/refguide/rg-version-1/selenium-actions)

## 2 Widget – Set

| Action           | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Set BooleanSlider Value          | BooleanSlider                    | Checks if the given value is available for the BooleanSlider and sets the value. |
| Set BootstrapRTE Value           | BootstrapRTE                     | Sets the given value as current value for the BootstrapRTE value. Strings can be formatted via html-code |
| Set Checkbox Set Selector Value  | Checkbox Set Selector            | Checks/clears the **Select all** check box. |
| Set Checkbox Set Selector Value (all) | Checkbox Set Selector       | Checks/clears the **Select all** check box. |
| Set Checkbox Value               | Checkbox                         | Sets the value of a check box. |
| Set CKEditor Value               | CKEditor                         | Sets the CKEditor content value. |
| Set File Manager                 | FileManager                      | Sets the file manager to the given file path to upload a file. |
| Set Grid Selector Checkbox Value | Grid Selector                    | Checks/clears the check box. |
| Set Grid Selector Radiobutton checked  | Grid Selector              | Selects the radio button for the given column and row caption. |
| Set InputReferenceSelector Value | InputReferenceSelector           | Sets the input reference selector to the given value. |
| Set ListView Search              | ListView                         | Sets the list view search text. |
| Set Row Cell Value               | DataGrid                         | Set the cell value in a data grid row. |
| Set Simple Checkbox Set Selector Value | Simple Checkbox Set Selector | Checks/clears the check box found by a given entity attribute value. |
| Set Value | TextBox, TextArea, DatePicker, DropDown, RadioButton, ReferenceSelector, SearchInput Text, SearchInput DropDown, OnChange Inputbox | Sets the text value of a text box, text area, date input, reference selector, or enum selector. |
| Set Value (by index) | DropDown, ReferenceSelector, SearchInput DropDown | Sets the value of a drop-down menu by index (for example, EnumSelect or ReferenceSelector). |

## 3 Widget – Get

| Action           | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Get Active Tab Caption  | TabContainer                       | Returns the caption of the active tab page. |
| Get BooleanSlider Value | BooleanSlider                       | Returns the current value of the BooleanSlider as string. |
| Get BootstrapRTE Value  | BootstrapRTE | Returns the current BootstrapRTE value as html-string. |
| Get Checkbox Set Selector Value | Checkbox Set Selector | Finds checkbox by column caption and cell value.Returns its value |
| Get Checkbox Set Selector Value (all) | Checkbox Set Selector | Returns 'select all' checkbox value. |
| Get Checkbox Value | Checkbox | Returns true if the Checkbox is checked. |
| Get CKEditor Value | CKEditor | Returns the CKEditor value. |
| Get Grid Selector Box Value | Grid Selector Box | Returns current checkbox/radiobutton value. |
| Get Index | DropDown, ReferenceSelector, SearchInput DropDown | Get index of selected value in a dropdown, e.g. an EnumSelect or ReferenceSelector. |
| Get InputReferenceSelector Value | InputReferenceSelector | Returns the current value of the InputReferenceSelector. |
| Get Item/Row Index | DataGrid, TemplateGrid, ListView | Get the Index of a row in a Datagrid, or an item in a TemplateGrid or ListView |
| Get Row Cell Value | DataGrid | Get the Cell Value of a DataGrid row. |
| Get Simple Checkbox Set Selector Value | Simple Checkbox Set Selector | Returns the current value of the checkbox found by entity attribute value. |
| Get Total Item/Row Count | DataGrid, TemplateGrid, ListView | Get the total grid count from the paging status. |
| Get Validation Message | All widgets | Returns the validation message of a widget. |
| Get Value | TextBox, TextArea, DatePicker, DropDown, RadioButton, ReferenceSelector, SearchInput Text, SearchInput DropDown, Label, OnChange Inputbox. |
| Get Visible Item/Row Count | DataGrid, TemplateGrid, ListView | Returns the number of currently visible items/rows in a template grid, data grid, or list view. |
| Groupbox is Collapsed | GroupBox | Get GroupBox Collapsed state: true if collapsed, otherwise false. |

## 4 Widget – Assert

| Action           | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Assert Active Tab Caption | TabContainer | Asserts a certain value for the caption of the active tab page. |
| Assert BooleanSlider Value | BooleanSlider | Asserts that the BooleanSlider is set to the given value. |
| Assert BootstrapRTE Value | BootstrapRTE | Asserts that the BootstrapRTE value is equal to the given value. |
| Assert Checkbox Set Selector Value | Checkbox Set Selector | Finds the check-box-by-entity attribute and asserts that the check box is set to the given value. |
| Assert Checkbox Value | CheckBox | Asserts the value of a check box. |
| Assert CKEditor Value | CKEditor | Compares the CKEditor value with the given value. |
| Assert Grid Selector Value | Grid Selector | Asserts the value of check box/radio button. |
| Assert InputReferenceSelector Value | InputReferenceSelector | Asserts that the input reference selector has the given value. |
| Assert Simple Checkbox Set Selector Value | Simple Checkbox Set Selector | Asserts that the check box found by the given entity attribute value is checked/cleared. |
| Assert Validation Message | All widgets | Asserts a validation message with a certain text. |
| Assert Value | TextBox, TextArea, DatePicker, DropDown, RadioButton, ReferenceSelector, SearchInput Text, SearchInput DropDown, Label, OnChange Inputbox | Assert the text value from a text box, text area, date input, radio button, drop-down menu. |
| Dropdown has Option | DropDown, ReferenceSelector, SearchInput DropDown | Returns true if the value is available in a drop-down menu. |

## 5 Widget – Find

| Action           | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Find/Assert DataGrid Row | DataGrid | Find/Assert a DataGrid Row by certain column value(s). |
| Find/Assert Menu Item | NavigationTree, MenuBar, SimpleMenuBar | Finds/asserts a visible menu item in a navigation tree, menu bar, and simple menu bar. |
| Find/Assert Widget | All widgets | Finds/asserts a Mendix widget by its given name. It is possible to use a sequence of names as a path (separated by space). |
| Find Checkbox Set Selector | Checkbox Set Selector | Finds a check box by a given cell value and column caption. Returns the first match. |
| Find Checkbox Set Selector (all) | Checkbox Set Selector | Returns the **Select all** check box. |
| Find Grid Selector | Grid Selector | Finds a check box/radio button by column and row caption. |
| Find Item/Row | DataGrid, TemplateGrid, ListView | Finds a row/item in a data grid, template grid, or list view by index. |
| Find Item/Row (by child element) | DataGrid, TemplateGrid, ListView | Finds Item or Row of a TemplateGrid, DataGrid or ListView containing a  specified element. |
| Find Selected Item/Row | DataGrid, TemplateGrid, ListView | Returns first selected Item/Row object. |
| Find Simple Checkbox Set Selector | Simple Checkbox Set Selector | Finds the checkbox by given value. |
| Find Widget Child Node | All widgets | Find a Node within a Mendix Widget. Also matches the widget node itself. The action is limited to search in only within widgets that are visible. |

## 6 Widget – Other

| Action           | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Click DataGrid Row | DataGrid | Click a DataGrid Row by Column Value. |
| Click Dropdown Div Converter dropdown button | Dropdown Div Converter | Clicks the dropdown div converter dropdown button. |
| Click Dropdown Div Converter split button | Dropdown Div Converter | Clicks the dropdown div converter split button. |
| Click Menu Item | NavigationTree, MenuBar, SimpleMenuBar | Click a Menu Item in a Navigation Tree, Menu Bar and Simple Menu Bar. |
| Click Widget | All widgets | Click on a Mendix Widget (e.g. Button, Link, Image) by its Name. |
| Click Widget Button | ListView, ReferenceSelector | Refresh Button / Loadmore / ClearSearchField (ListView) Goto, / Add (ReferenceSelector). |
| Close GroupBox | GroupBox | Close a groupbox. |
| Open GroupBox | GroupBox | Open a groupbox. |
| Sort DataGrid | DataGrid | Sort DataGrid by given Column. |
| Toggle BooleanSlider Value | BooleanSlider | Toggles the value of the Booleanslider. |
| Toggle Checkbox Set Selector | Checkbox Set Selector | Finds checkbox by given entity attribute and inverses the value. |
| Toggle Checkbox Set Selector (all) | Checkbox Set Selector | Inverse 'select all' checkbox. |
| Toggle Checkbox Value | Checkbox | Click on a Checkbox to toggle its value. |
| Toggle Grid Selector Checkbox Value | Grid Selector | Inverse the checkbox found by given column and  row caption. |
| Toggle Simple Checkbox Set Selector Value | imple Checkbox Set Selector | Inverses the value of the checkbox found by given entity attribute value. |

## 7 Mendix

| Action           | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Assert Current Page | N/A | Asserts that a certain Page is open, by checking the current page title. Note that the page title may depend on the users language! For dialogs use the Find/Assert Dialog action. |
| Cancel Dialog | ConfirmationDialog | Click Cancel on a Confirmation Dialog. |
| Click/Doubleclick | All web elements | Perform a Click or Doubleclick and wait for Mendix activities. |
| Close Dialog | Window, DialogMessage, ConfirmationDialog | Click X Button on a Confirmation, Error, Warning or Info Dialog. |
| Confirm Dialog | ConfirmationDialog, DialogMessage | Click Proceed/Ok Button on a Confirmation, Error, Warning or Info Dialog. |
| Find/Assert Dialog | Window, DialogMessage, ConfirmationDialog | Find/Assert a Dialog by Title or Type. |
| Get Current Page Title | N/A | Returns the Current Page/Form Title. |
| Get Dialog Message Text | ConfirmationDialog, DialogMessage | Get the text from message and confirmation dialogs. |
| Login | Standard login page | Login to Mendix Application with standard login page or on Cloud using MxID. |
| Logout | N/A | Trigger logout/logoff from application via client API. Use this keyword in teardown of your test cases to end the user session. This will work regardless of the UI state. |
| Mendix wait | N/A | Inject Mendix Scripts and Wait. |
| Open Mendix Application | N/A | Opens a Mendix application at [Website URL] in a browser with Mendix specific settings. |

## 8 Web

| Action           | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Accept Browser Alert | N/A | Accepts the alert available. |
| Clear WebElement | WebElement | Clear a webelement (input or textarea). |
| Close Window | N/A | Closes currently active window. Does not switch to another window automatically. |
| Close Window & Auto-Switch | N/A | Closes currently active window and automatically switches to the next one. |
| Dismiss Browser Alert | N/A | Dismisses the alert available. |
| Element matches Selector | WebElement | Returns whether given element matches the selector. |
| Execute Javascript Integer | N/A | Execute javascript snippet. Runs asynchronous when Timeout is set. Returns an Integer. |
| Execute Javascript String | N/A | Execute javascript snippet. Runs asynchronous when Timeout is set. Returns a String. |
| Execute Javascript WebElement | N/A | Execute javascript snippet. Runs asynchronous when Timeout is set. Returns a WebElement. |
| Find Element | N/A | Find a web element. Optionally restrict search to the specified SearchContext element. Occurrence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element). |
| Find Element by CSS | N/A | Find a web element by CSS. Optionally restrict search to the specified SearchContext element. Occurrence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element). |
| Find Element by ID | N/A | Find a web element by ID. Optionally restrict search to the specified SearchContext element. Occurrence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element). |
| Find Element by Sizzle | N/A | Find a web element by Sizzle. Optionally restrict search to the specified SearchContext element. Occurrence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element). |
| Get Current Window Handle | N/A | Returns handle (i.e. identifier) of currently active window. |
| Get Property Value | WebElement | Returns property value from web element. (Does not have access to dojo widget properties). |
| Get Selected Option Index   | |
| Get Selected Option Text | | |
| Get Selected Option Value | | |
| Get Text | WebElement | |
| Is Element Displayed | WebElement | Returns true if supplied element is displayed (visible). |
| Is Selected | WebElement | Check whether Checkbox is selected. |
| Maximize | N/A | Maximize the current browser window. |
| Open Application | N/A | Opens an application at [ApplicationURL] in a browser. |
| Open Website | N/A | |
| Select Option | | |
| Select Option by Index | | |
| Select Option by Text | | |
| Select Option by Value | | |
| Set Browser Dimensions | N/A | |
| Set Page Load Timeout | N/A | |
| Set Size | N/A | Set size of browser window |
| Switch to Default Frame | N/A | |
| Switch to Frame | N/A | |
| Switch to Next Window | N/A | Switch to the next open window. An error is thrown if there is only one window. Returns the window handle (i.e. identifier) of the new active window. |
| Switch to Window | N/A | Switch to window via its identifier. An error is thrown if the window is not found. |
| Unfocus WebElement | WebElement | |
| Wait for Condition | N/A | |
| Set Browser Dimensions | N/A | |
| Wait for Condition JS | N/A | Wait until the given expression returns true. |

## 9 Mouse & Keyboard

| Action           | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Click | WebElement | Clicks in the middle of the given element. |
| Click Coordinates | N/A | Clicks on the given point on the page, described by X and Y Offset. If no reference element is given, the upper left corner of the page is used as point of origin for calculating the desired point. Otherwise the upper left corner of the reference element is used. |
| Doubleclick | WebElement | Perform a Click or Doubleclick and wait for Mendix activities. |
| Focus and Clear Element Value | WebElement | Set an input element to an empty string. |
| Focus WebElement | WebElement | Focus WebElement and perform a Mendix wait afterwards. |
| Focus WebElement | WebElement | |
| Hover | WebElement | Hover a web element |
| Scroll to Element | WebElement | |
| Scroll to top | N/A                  | |
| Send Enter | N/A                  | Simulates pressing Enter in [Element]. |
| Send Keys | N/A                  | Simulates typing [Text] into the [Element]. |

## 10 Logic

| Action           | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Assert | N/A | Hamcrest assert |
| Assert 1 | N/A | Asserts that the value is 1. ([null]=0) |
| Assert all not null | N/A | Fails if one of the objects is  null. |
| Assert at least one not null | N/A | Fails if all objects are null. |
| Assert Both not null | N/A | Fails if one or both objects are  null. |
| Assert Condition Fails | N/A | This assert always fails. If an attached condition fails, it is simply not executed (and thus this keyword does not fail). (Use this keyword to assert that another keyword fails). |
| Assert containsNoString | N/A | Asserts false that Subject contains string that is equal to Matcher Parameter (e.g. testcasetool contains case, it fails case). |
| Assert containsString | N/A | Asserts that Subject contains string that is equal to Matcher Parameter (e.g. testcasetool contains case). |
| Assert Element Attribute Equals | WebElement | Asserts that an attribute of the given element equals the specified value. |
| Assert Element matches Selector | WebElement | Mx4/Mx5 - Returns whether given element matches the selector. |
| Assert endsWith | N/A | Asserts that Subject ends with string that is equal to Matcher Parameter (e.g. testcase ends with case). |
| Assert Equals | N/A | Assert that two values are equal. |
| Assert equalTo | N/A | Asserts that Subject is equal to MatcherParameter (e.g. 100 is equal to 100 or house is equal to house). |
| Assert equalToIgnoringCase | N/A | Asserts that Subject is equal to Matcher Parameter while ignoring case (e.g. house is equal to House). |
| Assert equalToIgnoringWhiteSpace | N/A | Asserts that Subject is equal to Matcher Parameter while ignoring whitespaces (e.g. testcase is equal to ' testcase '). |
| Assert false | N/A | Assert boolean value to be false. |
| Assert greaterThan | N/A | Asserts that Subject is greater than Matcher Parameter (e.g. 1000 is greater than 100). |
| Assert greaterThanOrEqualTo | N/A | Asserts that Subject is either greater than or equal to Matcher Parameter (e.g. 1000 is greater than 100 or 1000 is equal to 1000). |
| Assert lessThan | N/A | Asserts that Subject is less than Matcher Parameter (e.g. 100 is less than 1000). |
| Assert lessThanOrEqualTo | N/A | Asserts that Subject is either less than or equal to Matcher Parameter (e.g. 100 is less than 1000, 1000 is equal to 1000). |
| Assert not equals | N/A | Asserts that two values are not equal. |
| Assert not false | N/A | |
| Assert not true | N/A | Either false or [null]. |
| Assert null | N/A | Fails if object is not null. |
| Assert null (internal) | N/A | The internal Assert null functions that allows a boolean parameter to invert the result. |
| Assert Property Value | N/A | Get Property/Attribute from web Element and assert that it equals the given value. |
| Assert startsWith | N/A | Asserts that Subject starts with string that is equal to Matcher Parameter (e.g. testcase starts with test) |
| Assert true | N/A | |
| Assert XML equivalent | N/A | Assert that two XMLs are equivalent. |
| Concatenate String | String | Concatenate strings. |
| If Null Then 0 (Integer) | N/A  | Checks the input value and set it to 0, if it is null. |
| Is not Null | N/A | Returns true if object is not null, false otherwise. |
| Push ATS Scripts | N/A | Push generic ats scripts to the client (jQuery, helpers functions). |
| RegExp Match | String | Return the n'th match of the given Regular Expression in the Search String (Uses JS string.match). |
| Return First Valid Boolean | Boolean | Returns the first boolean from the parameter list which is not null. |
| Return First Valid Integer | Integer | Returns the first integer from the parameter list which is not null. |
| Return First Valid String | String | Returns the first string from the parameter list which is not null. |
| Return First Valid WebElement | WebElement | Returns the first webelement from the parameter list which is not null. |
| Set Implicit Wait | N/A | |
| Set Return Value | N/A | |
| Sleep | N/A | Wait 'Sleep time' milliseconds. |

## 11 Generators

| Action           | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Generate GUID | N/A | Generates and returns a GUI. |
| Get Current DateTime String | N/A | Returns the current date and time in supplied format (java date format) e.g. 'yyyy-MM-dd HH:mm:ss'. |
| Random Number | N/A | Creates a random Integer using: 'Math.floor(Math.random() * (max - min)) + min', You need to define the min(included) and max (excluded). |
| Random String | N/A | Creates a random alphanumeric String using: 'Math.random().toString(36).slice(2,8)' - Optionally allows to add a Prefix or Postfix. |
