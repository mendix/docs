---
title: "Function Reference"
url: /appstore/partner-solutions/ats/rg-two-function-reference/
---

## Introduction

The tables below list all the built-in functions of ATS. There is one table per category. 

## Widget – Set

| Function         | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Set BooleanSlider Value          | BooleanSlider                    | ⚠ Deprecated in favor of **Set Value**.<br /> Checks if the given value is available for the BooleanSlider and sets the value. |
| Set BootstrapRTE Value           | BootstrapRTE                     | ⚠ Deprecated in favor of **Set Value**.<br /> Sets the given value as current value for the BootstrapRTE value. Strings can be formatted via html-code. |
| Set Checkbox Set Selector Value  | Checkbox Set Selector            | Checks/clears the **Select all** checkbox. |
| Set Checkbox Set Selector Value (all) | Checkbox Set Selector       | Checks/clears the **Select all** checkbox. |
| Set Checkbox Value               | Checkbox                         | Sets the value of a checkbox. |
| Set CKEditor Value               | CKEditor                         | ⚠ Deprecated in favor of **Set Value**.<br /> Sets the CKEditor content value. |
| Set File Manager                 | FileManager                      | Sets the file manager to the given file path to upload a file. |
| Set Grid Selector Checkbox Value | Grid Selector                    | Checks/clears the checkbox for a given column and row caption in a grid selector widget. |
| Set Grid Selector Radiobutton checked  | Grid Selector              | Selects the radio button for the given column and row caption. |
| Set InputReferenceSelector Value | InputReferenceSelector            | ⚠ Deprecated in favor of **Set Value**.<br /> Sets the input reference selector to the given value. |
| Set Row Cell Value               | DataGrid                         | Set the cell value for a particular column in a data grid row. |
| Set Simple Checkbox Set Selector Value | Simple Checkbox Set Selector | Checks/clears the checkbox found by a given entity attribute value. |
| Set Value¹ | Standard widgets: TextBox, TextArea, DropDown, RadioButton, DatePicker², ReferenceSelector, SearchInput Text, SearchInput DropDown.<br /> Marketplace widgets: OnChange Inputbox, BooleanSlider, Bootstrap Wysiwyg Editor (Bootstrap RTE), CK Editor For Mendix, Input Reference Selector, Radiobutton List, Switch³, AutoComplete. | Sets the value of all supported widgets. |
| Set Value (by index) | Drop-Down, Reference Selector, Search Input Drop-Down | Sets the value of all supported drop-down widgets by index. |

¹  Since ATS version 2.9.4 the Set Value function will unfocus the widget after setting the value and wait for any on change / on leave microflows to finish before proceeding with the next steps in a test case.<br />
² The date/time format depends on the device type. For *mobile* devices, the date/time should be formatted in the ISO 8601 standard (meaning, `yyyy-MM-ddTHH:mm` for date and time, `yyyy-MM-dd` for date, or `HH:mm` for just time). Seconds should be omitted. For *desktop* devices, the string should be formatted so as to match the date/time picker format. This format is locale-dependent (for example, for the US, the format is `MM/dd/yyyy, hh:mm a`).
³ Use values `on` and `off` for Switch widget.

## Widget – Get

| Function         | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Get Active Tab Caption  | TabContainer                       | Returns the caption of the active tab page. |
| Get BooleanSlider Value | BooleanSlider                      | ⚠ Deprecated in favor of **Get Value**.<br /> Returns the current value of the BooleanSlider as a string. |
| Get BootstrapRTE Value | BootstrapRTE | ⚠ Deprecated in favor of **Get Value**.<br /> Returns the current BootstrapRTE value as an HTML string. |
| Get Checkbox Set Selector Value | Checkbox Set Selector | Finds the checkbox by column caption and cell value and returns its value. |
| Get Checkbox Set Selector Value (all) | Checkbox Set Selector | Returns the **Select all** checkbox value. |
| Get Checkbox Value | Checkbox | Returns true if the checkbox is checked. |
| Get CKEditor Value | CKEditor | ⚠ Deprecated in favor of **Get Value**.<br /> Returns the CKEditor value. |
| Get Dialog Message Text | ConfirmationDialog, DialogMessage | Get the text from message and confirmation dialogs. |
| Get Grid Selector Box Value | Grid Selector Box | Returns the current checkbox/radio button value. |
| Get Index | DropDown, ReferenceSelector, SearchInput DropDown | Gets the index of selected values in a drop-down menu (for example, an EnumSelect or ReferenceSelector). |
| Get InputReferenceSelector Value | InputReferenceSelector | ⚠ Deprecated in favor of **Get Value**.<br /> Returns the current value of the InputReferenceSelector. |
| Get Item/Row Index | DataGrid, TemplateGrid, ListView | Gets the index of a row in a data grid or an item in a template grid or list view. |
| Get Row Cell Value | DataGrid | Gets the cell value of a data grid row for a given column name. |
| Get Simple Checkbox Set Selector Value | Simple Checkbox Set Selector | Returns the current value of the checkbox found by the entity attribute value. |
| Get Total Item/Row Count | DataGrid, TemplateGrid, ListView | Gets the total grid count from the paging status. Does not work if pagination is not shown.|
| Get Validation Message | All widgets | Returns the validation message of a widget. |
| Get Value | Standard widgets: TextBox, TextArea, DropDown, RadioButtons, DatePicker, ReferenceSelector, SearchInput Text, SearchInput DropDown, Label, Input Reference Set Selector.<br /> Marketplace widgets: OnChange Inputbox, BooleanSlider, BootstrapWysiwygEditor (Bootstrap RTE), CKEditor For Mendix¹, InputReferenceSelector, RadiobuttonList, Switch², AutoComplete, Format String, Custom String. | Returns the current value of all supported widgets.|
| Get Visible Item/Row Count | DataGrid, TemplateGrid, ListView | Returns the number of currently visible items/rows in a template grid, data grid, or list view. |
| Groupbox is Collapsed | GroupBox | Gets the group box collapsed state: true if collapsed, otherwise false. |

¹ The Get Value function for CKEditor returns the inner HTML of the widget. Because of the way the CKEditor is implemented, it might generate different HTML tags depending on which browser is used (for example, in some versions of Firefox, the tag `<br type="_moz">` is added. This means that we cannot guarantee that the returned HTML from Get Value will be the same across all browsers.
² Use values `on` and `off` for Switch widget.

## Widget – Assert

| Function         | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Assert Active Tab Caption | TabContainer | Asserts a certain value for the caption of an active tab page. |
| Assert BooleanSlider Value | BooleanSlider | ⚠ Deprecated in favor of **Assert Value**.<br /> Asserts that the BooleanSlider is set to the given value. |
| Assert BootstrapRTE Value | BootstrapRTE | ⚠ Deprecated in favor of **Assert Value**.<br /> Asserts that the BootstrapRTE value is equal to the given value. |
| Assert Checkbox Set Selector Value | Checkbox Set Selector | Finds the checkbox-by-entity attribute and asserts that the checkbox is set to the given value. |
| Assert Checkbox Value | CheckBox | Asserts the value of a checkbox. |
| Assert CKEditor Value | CKEditor | ⚠ Deprecated in favor of **Assert Value**.<br /> Compares the CKEditor value with the given value. |
| Assert Grid Selector Value | Grid Selector | Asserts the value of checkbox/radio button for a given column and row captions in a grid selector. |
| Assert InputReferenceSelector Value | InputReferenceSelector | ⚠ Deprecated in favor of **Assert Value**.<br /> Asserts that the input reference selector has the given value. |
| Assert Simple Checkbox Set Selector Value | Simple Checkbox Set Selector | Asserts that the checkbox found by the given entity attribute value is checked/cleared. |
| Assert Validation Message | All widgets | Asserts a validation message with a certain text. |
| Assert Value | Standard widgets: Text Box, Text Area, DropDown, RadioButton, DatePicker, ReferenceSelector, SearchInput Text, SearchInput DropDown, Label input reference set selector.<br /> Marketplace widgets: OnChange Inputbox, BooleanSlider, BootstrapWysiwygEditor (Bootstrap RTE), CKEditor For Mendix, InputReferenceSelector, RadiobuttonList, Switch¹, AutoComplete, Format String, Custom String. | Asserts the current value of all supported widgets. |
| Dropdown has Option | DropDown, ReferenceSelector, SearchInput DropDown | Returns true if the value is available in a drop-down menu. |

¹ Use values `on` and `off` for Switch widget.

## Widget – Find

| Function         | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Find/Assert DataGrid Row | DataGrid | Finds/asserts a data grid row by a certain column value (or values). |
| Find/Assert Dialog | Window, DialogMessage, ConfirmationDialog | Finds/asserts a dialog by Title or Type. |
| Find/Assert Menu Item | NavigationTree, MenuBar, SimpleMenuBar | Finds/asserts a visible menu item in a navigation tree, menu bar, and simple menu bar. |
| Find/Assert Widget | All widgets | Finds/asserts a Mendix widget by its given name. It is possible to use a sequence of names as a path (separated by spaces). |
| Find Checkbox Set Selector | Checkbox Set Selector | Finds a checkbox by a given cell value and column caption. Returns the first match. |
| Find Checkbox Set Selector (all) | Checkbox Set Selector | Returns the **Select all** checkbox. |
| Find Grid Selector | Grid Selector | Finds a checkbox/radio button by the column and row caption. |
| Find Item/Row | DataGrid, TemplateGrid, ListView | Finds a row/item in a data grid, template grid, or list view by index. |
| Find Item/Row (by child element) | DataGrid, TemplateGrid, ListView | Finds an item or row of a template grid, data grid, or list view containing a specified element. |
| Find Selected Item/Row | DataGrid, TemplateGrid, ListView | Returns the first selected item/row as a web element. |
| Find Simple Checkbox Set Selector | Simple Checkbox Set Selector | Finds the checkbox by the given value. |
| Find Widget Child Node | All widgets | Find a node within a Mendix widget. Also matches the widget node itself. The function is limited to search only within widgets that are visible. |

## Widget – Other

| Function         | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Cancel Dialog | ConfirmationDialog | Clicks **Cancel** on a confirmation dialog. |
| Click DataGrid Row | DataGrid | Clicks a data grid row by column value. |
| Click Dropdown Div Converter dropdown button | Dropdown Div Converter | Clicks the drop-down `div` converter drop-down button. |
| Click Dropdown Div Converter split button | Dropdown Div Converter | Clicks the drop-down `div` converter split button. |
| Click Menu Item | NavigationTree, MenuBar, SimpleMenuBar | Clicks a menu item in a navigation tree, menu bar, and simple menu bar. |
| Click Widget | All widgets | Clicks a Mendix widget (for example, button, link, image) by its name. |
| Click Widget Button | ListView, ReferenceSelector | Clicks on one of the following special widget buttons: Refresh Button / Loadmore / ClearSearchField (ListView) Goto, / Adds (ReferenceSelector). |
| Close Dialog | Window, DialogMessage, ConfirmationDialog | Clicks the {{% icon name="remove" %}} button on a Confirmation, Error, Warning, or Info dialog box. |
| Close GroupBox | GroupBox | Closes a group box. |
| Confirm Dialog | ConfirmationDialog, DialogMessage | Clicks the **Proceed/OK** button on a Confirmation, Error, Warning, or Info dialog box. |
| Open GroupBox | GroupBox | Opens a group box. |
| Set ListView Search | ListView | Sets the ListView search text. |
| Sort DataGrid | DataGrid | Sorts a data grid by the given column. |
| Toggle BooleanSlider Value | BooleanSlider | Toggles the value of the Booleanslider. |
| Toggle Checkbox Set Selector | Checkbox Set Selector | Finds a checkbox by a given entity attribute and inverses the value. |
| Toggle Checkbox Set Selector (all) | Checkbox Set Selector | Inverses the **Select all** checkbox. |
| Toggle Checkbox Value | Checkbox | Clicks a checkbox to toggle its value. |
| Toggle Grid Selector Checkbox Value | Grid Selector | Inverses the checkbox found by a given column and row caption. |
| Toggle Simple Checkbox Set Selector Value | Simple Checkbox Set Selector | Inverses the value of the checkbox found by the given entity attribute value. |

## Mendix

| Function         | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Assert Current Page | N/A | Asserts that a certain page is open by checking the current page title. Note that the page title may depend on the user's language! For dialog boxes, use the Find/Assert Dialog function. |
| Get Current Page Title | N/A | Returns the current page/form title. |
| Login | Standard login page | Logs in to the Mendix application with the standard login page or on the cloud using MxID. |
| Logout | N/A | Triggers the logout/logoff from application via the Client API. Use this keyword in the teardown of your test cases to end the user session. This will work regardless of the UI state. |
| Mendix wait | N/A | Wait for microflow and UI activities. |
| Open Mendix Application | N/A | Opens a Mendix application at the website URL in a browser with Mendix-specific settings. |

## Web

| Function         | Description                              |
| ---------------- | ---------------------------------------- |
|Assert Element Attribute Equals| Asserts that an attribute of the given element equals the specified value. |
| Assert Element matches Selector | Mx4/Mx5 - Returns whether given element matches the selector. |
| Close Window | Closes the currently active window. Does not switch to another window automatically. |
| Close Window & Auto-Switch | Closes the currently active window and automatically switches to the next one. |
| Element matches Selector | Returns whether the given element matches the selector. |
| Execute JavaScript Integer | Executes the JavaScript snippet. Runs asynchronously when the timeout is set. Returns an integer. |
| Execute JavaScript String | Executes the JavaScript snippet. Runs asynchronously when the timeout is set. Returns a string. |
| Execute JavaScript WebElement | Executes the JavaScript snippet. Runs asynchronously when the timeout is set. Returns a web element. |
| Find Element | Finds a web element. It optionally restricts the search to the specified SearchContext element. The occurrence lets you specify which element to fetch from the result list, starting at 1 for the first element (defaults to the first element). |
| Find Element by CSS | Finds a web element by CSS. It optionally restricts search to the specified SearchContext element. The occurrence lets you specify which element to fetch from the result list, starting at 1 for the first element (defaults to the first element). |
| Find Element by ID | Finds a web element by the ID. It optionally restricts the search to the specified SearchContext element. The occurrence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element). |
| Find Element by Sizzle | Finds a web element by Sizzle. Optionally restrict search to the specified SearchContext element. The occurrence lets you specify which element to fetch from the result list, starting at 1 for the first element (defaults to the first element). |
| Get Current Window Handle | Returns the handle (meaning, the identifier) of the currently active window. |
| Get Property Value | Returns the property value from the web element. (Does not have access to Dojo widget properties). |
| Get Selected Option Index   | Returns the index of the first selected option in a select element. |
| Get Selected Option Text | Returns the text of the first selected option in a select element. |
| Get Selected Option Value | Returns the value of the first selected option in a select element. |
| Get Text | Gets the visible (meaning, not hidden by CSS) innerText of this element, including sub-elements, without any leading or trailing whitespace. |
| Is Element Displayed | Returns true if the supplied element is displayed (visible). |
| Is Selected | Checks whether the checkbox is selected. |
| Maximize | Maximizes the current browser window. |
| Open Application | ⚠ Deprecated in favor of **Open Mendix Application**.<br /> Opens an application at the application's URL in a browser. |
| Open Website | ⚠ Deprecated in favor of **Open Mendix Application**. |
| Select Option | ⚠ Deprecated in favor of **Select Option by Index**, **Select Option by Text**, and **Select Option by Value**. |
| Select Option by Index | Select the option at the given index. |
| Select Option by Text | Select all options that display text matching the argument. |
| Select Option by Value | Select all options that have a value matching the argument. |
| Set Browser Dimensions | ⚠ Deprecated in favor of **Set Size**. |
| Set Page Load Timeout | Sets the amount of time (in milliseconds) to wait for a page load to complete before throwing an error. If the timeout is negative, page loads can be indefinite. |
| Set Size | Sets the size of the current browser window. This will change the outer window dimension, not just the view port. |
| Switch to Default Frame | Selects either the first frame on the page, or the main document when a page contains iframes. |
| Switch to Frame | Select a frame using its previously located WebElement. |
| Switch to Next Window | Switches to the next open window. An error is thrown if there is only one window. Returns the window handle (meaning, the identifier) of the new active window. |
| Switch to Window | Switches to the window via its identifier. An error is thrown if the window is not found. |
| Unfocus WebElement | Removes focus from a web element by calling the blur method. |
| Wait for Condition | Repeatedly runs the condition JavaScript snippet every Interval (in milliseconds) until one of the following is fulfilled: <br /><ul><li>The snippet returns neither null nor false</li><li>The snippet throws an unignored exception</li><li> The timeout (in milliseconds) expires</li></ul>|
| Wait for Condition JS | Waits until the given expression returns true. |

## Mouse & Keyboard

| Function         | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Accept Browser Alert | N/A | Accepts the alert available. |
| Clear WebElement | WebElement | Clears a web element (input or text area). |
| Click | WebElement | Clicks in the middle of the given web element. |
| Click/Doubleclick | All web elements | Performs a click or double-click and waits for Mendix activities |
| Click Coordinates | N/A | Clicks a given point on the page as described by the X and Y offset. If no reference element is given, the upper-left corner of the page is used as point of origin for calculating the desired point. Otherwise, the upper-left corner of the reference element is used. |
| Dismiss Browser Alert | N/A | Dismisses the alert available. |
| Doubleclick | WebElement | Performs a click or double-click and then a wait for Mendix activities. |
| Focus and Clear Element Value | WebElement | Sets an input element to an empty string. |
| Focus WebElement | WebElement | Focuses the web element and performs a wait afterwards. |
| Hover | WebElement | Hovers a web element. |
| Send Enter | N/A                  | Simulates pressing <kbd>Enter</kbd> in the element. |
| Send Keys | N/A                  | Simulates typing <kbd>Text</kbd> into the element. |

## Logic

| Function         | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Assert | N/A | ⚠ Deprecated.<br /> A hamcrest assert. |
| Assert 1 | N/A | ⚠ Deprecated in favor of **Assert equalTo**.<br /> Asserts that the value is 1. `([null]=0)`. |
| Assert all not null | N/A | Fails if one of the objects is null. |
| Assert at least one not null | N/A | Fails if all the objects are null. |
| Assert Both not null | N/A | Fails if one or both objects are null. |
| Assert Condition Fails | N/A | This assert always fails. If an attached condition fails, it is simply not executed (and thus this keyword does not fail). (Use this keyword to assert that another keyword fails). |
| Assert containsNoString | N/A | Asserts false that the subject contains a string that is equal to matcher parameter (for example, `testcasetool` contains `case`, it fails `case`). |
| Assert containsString | N/A | Asserts that the subject contains a string that is equal to the matcher parameter (for example, `testcasetool` contains `case`). |
| Assert endsWith | N/A | Asserts that the subject ends with a string that is equal to the matcher parameter (for example, `testcase` ends with `case`). |
| Assert Equals | N/A | ⚠ Deprecated in favor of **Assert equalTo**.<br /> Asserts that the two values are equal. |
| Assert equalTo | N/A | Asserts that the subject is equal to matcher parameter (for example, `100` is equal to `100` or `house` is equal to `house`). |
| Assert equalToIgnoringCase | N/A | Asserts that the subject is equal to the matcher parameter while ignoring the case (for example, `house` is equal to `House`). |
| Assert equalToIgnoringWhiteSpace | N/A | Asserts that the subject is equal to the matcher parameter while ignoring whitespaces (for example, `testcase` is equal to `' testcase '`). |
| Assert false | N/A | ⚠ Deprecated in favor of **Assert equalTo**.<br /> Asserts the Boolean value to be false. |
| Assert greaterThan | N/A | Asserts that the subject is greater than the matcher parameter (for example, `1000` is greater than `100`). |
| Assert greaterThanOrEqualTo | N/A | Asserts that the subject is either greater than or equal to the matcher parameter (for example, `1000` is greater than `100`, `1000` is equal to `1000`). |
| Assert lessThan | N/A | Asserts that the subject is less than the matcher parameter (for example, `100` is less than `1000`). |
| Assert lessThanOrEqualTo | N/A | Asserts that the subject is either less than or equal to the matcher parameter (for example, `100` is less than `1000`, `1000` is equal to `1000`). |
| Assert not equals | N/A | Asserts that two values are not equal. |
| Assert not false | N/A | Asserts that the examined value is not false. |
| Assert not true | N/A | Either false or null. |
| Assert null | N/A | Fails if the object is not null. |
| Assert null (internal) | N/A | The internal Assert null functions that allows a Boolean parameter to invert the result. |
| Assert Property Value | N/A | ⚠ Deprecated in favor of **Assert element attribute equals**.<br /> Gets the property/attribute from the web element and asserts that it equals the given value. |
| Assert startsWith | N/A | Asserts that the subject starts with a string that is equal to the matcher parameter (for example, `testcase` starts with `test`). |
| Assert true | N/A | ⚠ Deprecated in favor of **Assert equalTo**. |
| Assert XML equivalent | N/A | Asserts that two XMLs are equivalent. |
| Concatenate String | String | Concatenate strings. Any number of the arguments can be null. |
| If Null Then 0 (Integer) | N/A | ⚠ Deprecated.<br /> Checks the input value and sets it to 0 if it is null. |
| Is not Null | N/A | Returns true if object is not null, false otherwise. |
| Push ATS Scripts | N/A | ⚠ Deprecated as it only served an internal purpose.<br /> Pushes generic ATS scripts to the client (jQuery, helpers functions). |
| RegExp Match | String | Return the n'th match of the given regular expression in the search string (uses JS `string.match`). |
| Return First Valid Boolean | Boolean | Returns the first Boolean from the parameter list that is not null. |
| Return First Valid Integer | Integer | Returns the first integer from the parameter list that is not null. |
| Return First Valid String | String | Returns the first string from the parameter list that is not null. |
| Return First Valid WebElement | WebElement | Returns the first web element from the parameter list that is not null. |
| Set Implicit Wait | N/A | ⚠ Deprecated as it only served an internal purpose. |
| Set Return Value | N/A | Use this function in custom actions to set the return value of the custom action. When using the "extract action" feature this function call will be added automatically, where applicable. |
| Sleep | N/A | The waits "sleep time" in milliseconds. |

## Generators

| Function         | Supported Widgets | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| Generate GUID | N/A | Generates and returns a globally unique identifierGUID. |
| Get Current DateTime String | N/A | Returns the current date and time in the supplied format (Java date format) (for example, `yyyy-MM-dd HH:mm:ss`. |
| Random Number | N/A | Creates a random integer using `Math.floor(Math.random() * (max - min)) + min`. You need to define the min (included) and max (excluded). |
| Random String | N/A | Creates a random alphanumeric string using `Math.random().toString(36).slice(2,8)`. Optionally, it allows you to add a prefix or postfix. |
