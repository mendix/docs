---
title: "Function API Reference"
url: /addons/ats-addon/rg-two-function-api-reference/
---

## Widget_Set {#Widget_Set}

For a Mendix widget input a selection, checkbox, number, text value or a date.

| Function Name | Description |
| ---- | ---- |
| [Set Checkbox Set Selector Value](#SetCheckboxSetSelectorValue) | Checks/clears a check box in a set selector by given entity attribute value. |
| [Set Checkbox Set Selector Value (all)](#SetCheckboxSetSelectorValueAll) | Checks/clears the 'select all' check box. |
| [Set Checkbox Value](#SetCheckboxValue) | Sets the value of a check box. |
| [Set File Manager](#SetFileManager) | Set a file manager to the given file path to upload a file. |
| [Set Grid Selector Checkbox Value](#SetGridSelectorCheckboxValue) | Checks/clears a check box for a given column and row caption in a grid selector widget. |
| [Set Grid Selector Radiobutton checked](#SetGridSelectorRadiobuttonChecked) | Selects the radio button for a given column and row caption in a grid selector widget. |
| [Set Row Cell Value](#SetRowCellValue) | Sets the cell value for a particular column in a data grid row. |
| [Set Simple Checkbox Set Selector Value](#SetSimpleCheckboxSetSelectorValue) | Checks/clears the check box for a given entity attribute value. |
| [Set Value](#SetValue) | Sets a value to a widget. Supported widgets: text box, text area, drop-down, radio button, date picker, reference selector, search input text, search input drop-down, OnChange Inputbox, CKEditor For Mendix BooleanSlider, BootstrapWysiwygEditor (Bootstrap RTE), InputReferenceSelector, RadiobuttonList. |
| [Set Value (by index)](#SetValueByIndex) | Sets the value of drop-down widgets by index. Supported widgets: drop-down, reference selector, search input drop-down, EnumSelect. |

### Set Checkbox Set Selector Value {#SetCheckboxSetSelectorValue}

#### Function Key

SetCheckboxSetSelectorValue

#### Description

Checks/clears a check box in a set selector by given entity attribute value.

### Input Parameters

| Name | Key | Datatype | Description |
| ---- | ---- | ---- | ---- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Caption | ColumnCaption | String | _Required_ Used to identify a column by it's caption in a set/grid selector widget. The caption should match the label as shown in the browser. |
| Value | Value | String | _Required_ The entitiy attribute value which is used to find the correct row in the widget. |
| Checked | Checked | Boolean | _Required_ If true then checks the check box/radio button, otherwise clears it. |

#### Return Value

None

### Set Checkbox Set Selector Value (all) {#SetCheckboxSetSelectorValueAll}

#### Function Key

SetCheckboxSetSelectorValueAll

#### Description

Checks/clears the 'select all' check box.

#### Input Parameters

| Name | Key | Datatype | Description |
| ---- | ---- | ---- | ---- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Checked | Checked | Boolean | _Required_ If true then checks the check box/radio button, otherwise clears it. |

#### Return value

None

### Set Checkbox Value {#SetCheckboxValue}

#### Function Key

SetCheckboxValue

#### Description

Sets the value of a check box.

#### Input Parameters

| Name | Key | Datatype | Description |
| ---- | ---- | ---- | ---- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Value | Value | Boolean | _Required_ If true then checks the check box/radio button, otherwise clears it. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return value

None

### Set File Manager<a name="SetFileManager"></a>

#### Function Key

SetFileManager

#### Description

Set a file manager to the given file path to upload a file.

#### Input Parameters

| Name | Key | Datatype | Description |
| ---- | ---- | ---- | ---- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| File Path | FilePath | String | _Required_ Full path to the local file, on the client system, to be uploaded. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return value

None

### Set Grid Selector Checkbox Value {#SetGridSelectorCheckboxValue}

#### Function Key

SetGridSelectorCheckboxValue

#### Description

Checks/clears a check box for a given column and row caption in a grid selector widget.

#### Input Parameters

| Name | Key | Datatype | Description |
| ---- | ---- | ---- | ---- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Caption | ColumnCaption | String | _Required_ Used to identify a column by it's caption in a set/grid selector widget. The caption should match the label as shown in the browser. |
| Row Caption | RowCaption | String | _Required_ Used to identify a row by it's caption in a grid selector widget. The caption should match the label as shown in the browser. |
| Checked | Checked | Boolean | _Required_ If true then checks the check box/radio button, otherwise clears it. |

#### Return Value

None.

### Set Grid Selector Radiobutton checked {#SetGridSelectorRadiobuttonChecked}

#### Function Key

SetGridSelectorRadiobuttonChecked

#### Description

Selects the radio button for a given column and row caption in a grid selector widget.

#### Input Parameters

| Name | Key | Datatype | Description |
| ---- | ---- | ---- | ---- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Caption | ColumnCaption | String | _Required_ Used to identify a column by it's caption in a set/grid selector widget. The caption should match the label as shown in the browser. |
| Row Caption | RowCaption | String | _Required_ Used to identify a row by it's caption in a grid selector widget. The caption should match the label as shown in the browser. |

#### Return Value

None.

### Set Row Cell Value {#SetRowCellValue}

#### Function Key

SetRowCellValue

#### Description

Sets the cell value for a particular column in a data grid row.

#### Input Parameters

| Name | Key | Datatype | Description |
| ---- | ---- | ---- | ---- |
| Datagrid Row | Datagrid Row | WebElement | _Required_ A data grid row as a web element. You can use the functions 'Find/Assert DataGrid Row' and 'Find Item/Row'  to obtain a reference to the correct web element. |
| Value | Value | String | _Required_ The value to set. |
| Column Name | ColumnName | String | _Required_ Name of the column as assigned in the Mendix Studio Pro. This is not the caption of the column. |

#### Return Value

None.

### Set Simple Checkbox Set Selector Value {#SetSimpleCheckboxSetSelectorValue}

#### Function Key

SetSimpleCheckboxSetSelectorValue

#### Description

Checks/clears the check box for a given entity attribute value.

#### Input Parameters

| Name | Key | Datatype | Description |
| ---- | ---- | ---- | ---- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Value | Value | String | _Required_ The entitiy attribute value which is used to find the correct row in the widget. |
| Checked | Checked | Boolean | _Required_ If true then checks the check box/radio button, otherwise clears it. |

#### Return Value

None.

### Set Value {#SetValue}

#### Function Key

SetValue

#### Description

Sets a value to a widget.   
Supported widgets: text box, text area, drop-down, radio button, date picker, reference selector,
search input text, search input drop-down, OnChange Inputbox, CKEditor For Mendix
BooleanSlider, BootstrapWysiwygEditor (Bootstrap RTE), InputReferenceSelector, RadiobuttonList.

#### Input Parameters

| Name | Key | Datatype | Description |
| ---- | ---- | ---- | ---- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Value | Value | String | _Required_ The value to set. The date/time format depends on the device type. For mobile devices the date/time should be formatted in the ISO 8601 standard meaning,      'yyyy-MM-ddTHH:mm' for date and time, or     'yyyy-MM-dd' for date, or      'HH:mm' for just the time. Seconds should be omitted. For desktop devices the string should be formatted so as to match the date/time picker format. This format is locale dependent, for example for the US the format is 'MM/dd/yyyy, hh:mm a'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return value

None

### Set Value (by index) {#SetValueByIndex}

#### Function Key

SetValueByIndex

#### Description

Sets the value of drop-down widgets by index.   

Supported widgets: drop-down, reference selector, search input drop-down, EnumSelect.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Index | Index | Integer | _Required_ Starts from 0, meaning the first element has index 0, the second element has index 1 etc. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

None.

## Widget_Get {#Widget_Get}

Read text, dates, numbers and selections from Mendix widgets.

| Function Name | Description |
| ----------------- | -------------- |
| [Get Validation Message](#GetValidationMessage) | Returns the validation message of a widget. |
| [Get Value](#GetValue) | Returns the current value of all supported widgets. Supported widgets: text box, text area, drop-down, radio button, date picker, reference selector, search input text, search input drop-down, label, input reference set selector, OnChange Inputbox, BooleanSlider, BootstrapWysiwygEditor (Bootstrap RTE), CKEditor For Mendix, InputReferenceSelector RadiobuttonList, Switch, AutoComplete, Format String, Custom String. |
| [Get Active Tab Name](#GetActiveTabName) | Returns the name of the active tab page as specified in the Studio Pro. This is not the same as the caption of the tab which is shown in the browser. |
| [Get Item/Row Index](#GetItemRowIndex) | Returns the index of a row in a data grid, or an item in a template grid or list view. Indexing is 0 based, meaning the first row/item has index 0, the second row/item has index 1 etc. |
| [Get Row Cell Value](#GetRowCellValue) | Gets the cell value of a data grid row for a given column name. |
| [Get Total Item/Row Count](#GetTotalItemRowCount) | Returns the total grid count from the paging status. Does not work if pagination is not shown. Supported widgets: data grid, template grid, list view. |
| [Get Visible Item/Row Count](#GetVisibleItemRowCount) | Returns the number of currently visible items/rows in a data grid, template grid or a list view. |
| [Get Checkbox Value](#GetCheckboxValue) | Returns true if the check box is checked, false otherwise. |
| [Get Index](#GetIndex) | Gets the index of selected values in a drop-down menu. The returned index is 0 based, meaning the first element has index 0, the second element has index 1 etc. Supported widgets: drop-down, reference selector, search input drop-down. |
| [Groupbox is Collapsed](#GroupboxIsCollapsed) | Returns true if the group box is collapsed, false otherwise. |
| [Get Checkbox Set Selector Value](#GetCheckboxSetSelectorValue) | Finds a check box by column caption and cell value and returns its value. The returned value is 'true' when the check box is checked, false otherwise. |
| [Get Checkbox Set Selector Value (all)](#GetCheckboxSetSelectorValueAll) | Returns the 'select all' check box value. The returned value is 'true' when the check box is checked, false otherwise. |
| [Get Simple Checkbox Set Selector Value](#GetSimpleCheckboxSetSelectorValue) | Returns the current value of a check box in a set selector widget found by entity attribute value. The returned value is 'true' when the check box is checked, false otherwise. |
| [Get Grid Selector Box Value](#GetGridSelectorBoxValue) | Returns the current value of check box/radio button for a given row and column captions in a grid selector. The returned value is 'true' if the check box/radio button is checked, false otherwise. |
| [Get Dialog Message Text](#GetDialogMessageText) | Get the text from message and confirmation dialogs. |

### Get Validation Message {#GetValidationMessage}

#### Function Key

GetValidationMessage

#### Description

Returns the validation message of a widget.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return value

_String_

### Get Value {#GetValue}

#### Function Key

GetValue

#### Description

Returns the current value of all supported widgets.

Supported widgets: text box, text area, drop-down, radio button, date picker, reference selector, search input text, search input drop-down, label, input reference set selector, OnChange Inputbox, BooleanSlider, BootstrapWysiwygEditor (Bootstrap RTE), CKEditor For Mendix, InputReferenceSelector RadiobuttonList, Switch, AutoComplete, Format String, Custom String.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

_String_ The value to set.

### Get Active Tab Name {#GetActiveTabName}

#### Function Key

GetActiveTabName

#### Description

Returns the name of the active tab page as specified in the Studio Pro.

This is not the same as the caption of the tab which is shown in the browser.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Search Context | SearchContext | String | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return value

_String_ The name of a tab page as it is specified in the Studio Pro.

This is not the same as the caption of the tab which is shown in the browser.

### Get Item/Row Index {#GetItemRowIndex}

#### Function Key

GetItemRowIndex

#### Description

Returns the index of a row in a data grid, or an item in a template grid or list view.   

Indexing is 0 based, meaning the first row/item has index 0, the second row/item has index 1 etc.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Item/Row | ItemRow | WebElement | _Required_ A data grid row or an item from a template grid or a list view. Use the 'Find/Assert DataGrid Row', 'Find Item/Row' or 'Find Item/Row (by child element)' to get a reference to the correct web element. |

#### Return Value

_Integer_ Starts from 0, meaning the first element has index 0, the second element has index 1 etc.

### Get Row Cell Value {#GetRowCellValue}

#### Function Key

GetRowCellValue

#### Description

Gets the cell value of a data grid row for a given column name.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Datagrid Row | Datagrid Row | WebElement | _Required_ A data grid row as a web element. You can use the functions 'Find/Assert DataGrid Row' and 'Find Item/Row'  to obtain a reference to the correct web element. |
| Column Name | ColumnName | String | _Required_ Name of the column as assigned in the Mendix Studio Pro. This is not the caption of the column. |

#### Return Value

_String_ The value to set.

### Get Total Item/Row Count {#GetTotalItemRowCount}

#### Function Key

GetTotalItemRowCount

#### Description

Returns the total grid count from the paging status.   

Does not work if pagination is not shown.

Supported widgets: data grid, template grid, list view.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

_Integer_ Number of Rows/Items.

### Get Visible Item/Row Count {#GetVisibleItemRowCount}

#### Function Key

GetVisibleItemRowCount

#### Description

Returns the number of currently visible items/rows in a data grid, template grid or a list view.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

_Integer_ Number of Rows/Items.

### Get Checkbox Value {#GetCheckboxValue}

#### Function Key

GetCheckboxValue

#### Description

Returns true if the check box is checked, false otherwise.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

_Boolean_ Value of the checkbox. True if checked, false if not

### Get Index {#GetIndex}

#### Function Key

GetIndex

#### Description

Gets the index of selected values in a drop-down menu.   

The returned index is 0 based, meaning the first element has index 0, the second element has index 1 etc.

Supported widgets: drop-down, reference selector, search input drop-down.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

_Integer_ The index of the selected option. Starts with 0 for the first option

### Groupbox is Collapsed {#GroupboxIsCollapsed}

#### Function Key

GroupboxIsCollapsed

#### Description

Returns true if the group box is collapsed, false otherwise.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

_Boolean_ Collapsed state of the GroupBox. True if it is collapsed, false if not.

### Get Checkbox Set Selector Value {#GetCheckboxSetSelectorValue}

#### Function Key

GetCheckboxSetSelectorValue

#### Description

Finds a check box by column caption and cell value and returns its value.   

The returned value is 'true' when the check box is checked, false otherwise.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Caption | ColumnCaption | String | _Required_ Used to identify a column by it's caption in a set/grid selector widget. The caption should match the label as shown in the browser. |
| Value | Value | String | _Required_ The entitiy attribute value which is used to find the correct row in the widget. |

#### Return Value

_Boolean_ If true then checks the check box/radio button, otherwise clears it.

### Get Checkbox Set Selector Value (all) {#GetCheckboxSetSelectorValueAll}

#### Function Key

GetCheckboxSetSelectorValueAll

#### Description

Returns the 'select all' check box value.   

The returned value is 'true' when the check box is checked, false otherwise.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |

#### Return Value

_Boolean_ If true then checks the check box/radio button, otherwise clears it.

### Get Simple Checkbox Set Selector Value {#GetSimpleCheckboxSetSelectorValue}

#### Function Key

GetSimpleCheckboxSetSelectorValue

#### Description

Returns the current value of a check box in a set selector widget found by entity attribute value.   

The returned value is 'true' when the check box is checked, false otherwise.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Value | Value | String | _Required_ The entitiy attribute value which is used to find the correct row in the widget. |

#### Return Value

_Boolean_ If true then checks the check box/radio button, otherwise clears it.

### Get Grid Selector Box Value {#GetGridSelectorBoxValue}

#### Function Key

GetGridSelectorBoxValue

#### Description

Returns the current value of check box/radio button for a given row and column captions in a grid selector.   

The returned value is 'true' if the check box/radio button is checked, false otherwise.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Caption | ColumnCaption | String | _Required_ Used to identify a column by it's caption in a set/grid selector widget. The caption should match the label as shown in the browser. |
| Row Caption | RowCaption | String | _Required_ Used to identify a row by it's caption in a grid selector widget. The caption should match the label as shown in the browser. |

#### Return Value

_Boolean_ If true then checks the check box/radio button, otherwise clears it.

### Get Dialog Message Text {#GetDialogMessageText}

#### Function Key

GetDialogMessageText

#### Description

Get the text from message and confirmation dialogs.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Dialog | Dialog | WebElement | _Required_ A Mendix dialog as a web element. Use the 'Find/Assert Dialog' to get a reference to the correct web element. |

#### Return Value

_String_ The message or confirmation text to be asserted.

## Widget_Assert {#Widget_Assert}

Check if a Mendix widget value such as text and selection match an expected value.

| Function&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| ----------------- | -------------- |
| [Assert Validation Message](#AssertValidationMessageNegetable) | Asserts that the validation message for a certain widget contains the specified text. |
| [Assert Active Tab Name](#AssertActiveTabNameNegetable) | Assert a certain value for the name of the active tab page. |
| [Assert Checkbox Value](#AssertCheckboxValueNegetable) | Assert the value of a check box. |
| [Assert Value](#AssertValueNegetable) | Asserts the current value of all supported widgets. Supported widgets: text box, text area, drop-down, radio button, date picker, reference selector, search input text, search input drop-down, label, input reference set selector, OnChange Inputbox, BooleanSlider, BootstrapWysiwygEditor (Bootstrap RTE), CKEditor For Mendix, InputReferenceSelector, RadiobuttonList,  Switch, AutoComplete, Format String, Custom String. |
| [Dropdown has Option](#DropdownHasOption) | Returns true if the given value is available in a drop-down menu. Supported widgets: drop-down, reference selector, search input drop-down. |
| [Assert Checkbox Set Selector Value](#AssertCheckboxSetSelectorValue) | Finds a check box by entity attribute value and asserts that the check box is set to a given value. |
| [Assert Checkbox Set Selector Value](#AssertCheckboxSetSelectorValueNegetable) | Finds a check box by entity attribute value and asserts that the check box is set to a given value. |
| [Assert Simple Checkbox Set Selector Value](#AssertSimpleCheckboxSetSelectorValueNegetable) | Asserts that the check box found by given entity attribute value is checked/cleared. |
| [Assert Grid Selector Value](#AssertGridSelectorValueNegetable) | Asserts the value of check box/radio button for a given column and row captions in a grid selector. |

### Assert Validation Message {#AssertValidationMessageNegetable}

#### Function Key

AssertValidationMessageNegetable

#### Description

Asserts that the validation message for a certain widget contains the specified text.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Validation Message | ValidationMessage | String | _Required_ Text which is expected to be part of the validation message. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None

### Assert Active Tab Name {#AssertActiveTabNameNegetable}

#### Function Key

AssertActiveTabNameNegetable

#### Description

Assert a certain value for the name of the active tab page.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Active Tab Name | ActiveTabName | String | _Required_ The name of a tab page as it is specified in the Studio Pro. This is not the same as the caption of the tab which is shown in the browser. |
| Search Context | SearchContext | String | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

### Assert Checkbox Value {#AssertCheckboxValueNegetable}

#### Function Key

AssertCheckboxValueNegetable

#### Description

Assert the value of a check box.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Value | Value | Boolean | _Required_ Expected status of the check box. A checked check box corresponds to 'true'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

### Assert Value {#AssertValueNegetable}

#### Function Key

AssertValueNegetable

#### Description

Asserts the current value of all supported widgets.   

Supported widgets: text box, text area, drop-down, radio button, date picker, reference selector, search input text, search input drop-down, label, input reference set selector, OnChange Inputbox, BooleanSlider, BootstrapWysiwygEditor (Bootstrap RTE), CKEditor For Mendix, InputReferenceSelector, RadiobuttonList,  Switch, AutoComplete, Format String, Custom String.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Value | Value | String | _Required_ Expected value. This is the text as shown in the browser, not a technical value or id. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return value

None.

### Dropdown has Option {#DropdownHasOption}

#### Function Key

DropdownHasOption

#### Description

Returns true if the given value is available in a drop-down menu.   

Supported widgets: drop-down, reference selector, search input drop-down.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Value | Value | String | _Required_ The value of the drop-down option that you want to assert. This is the text as shown in the browser, not a technical value or id. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

_Boolean_ True if option with specified value is available in drop-down

### Assert Checkbox Set Selector Value {#AssertCheckboxSetSelectorValue}

#### Function Key

AssertCheckboxSetSelectorValue

#### Description

Finds a check box by entity attribute value and asserts that the check box is set to a given value.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Caption | ColumnCaption | String | _Required_ Used to identify a column by it's caption in a set/grid selector widget. The caption should match the label as shown in the browser. |
| Value | Value | String | _Required_ The entitiy attribute value which is used to find the correct row in the widget. |
| Checked | Checked | Boolean | _Required_ Expected status of a check box/radio button. A checked check box(radio button corresponds to the value 'true'. |

#### Return Value

None.

### Assert Checkbox Set Selector Value {#AssertCheckboxSetSelectorValueNegetable}

#### Function Key

AssertCheckboxSetSelectorValueNegetable

#### Description

Finds a check box by entity attribute value and asserts that the check box is set to a given value.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Caption | ColumnCaption | String | _Required_ Used to identify a column by it's caption in a set/grid selector widget. The caption should match the label as shown in the browser. |
| Value | Value | String | _Required_ The entitiy attribute value which is used to find the correct row in the widget. |
| Checked | Checked | Boolean | _Required_ Expected status of a check box/radio button. A checked check box(radio button corresponds to the value 'true'. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

### Assert Simple Checkbox Set Selector Value {#AssertSimpleCheckboxSetSelectorValueNegetable}

#### Function Key

AssertSimpleCheckboxSetSelectorValueNegetable

#### Description

Asserts that the check box found by given entity attribute value is checked/cleared.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Value | Value | String | _Required_ The entitiy attribute value which is used to find the correct row in the widget. |
| Checked | Checked | Boolean | _Required_ Expected status of a check box/radio button. A checked check box(radio button corresponds to the value 'true'. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

### Assert Grid Selector Value {#AssertGridSelectorValueNegetable}

#### Function Key

AssertGridSelectorValueNegetable

#### Description

Asserts the value of check box/radio button for a given column and row captions in a grid selector.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Caption | ColumnCaption | String | _Required_ Used to identify a column by it's caption in a set/grid selector widget. The caption should match the label as shown in the browser. |
| Row Caption | RowCaption | String | _Required_ Used to identify a row by it's caption in a grid selector widget. The caption should match the label as shown in the browser. |
| Checked | Checked | Boolean | _Required_ Expected status of a check box/radio button. A checked check box(radio button corresponds to the value 'true'. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

## Widget_Find {#Widget_Find}

Find Mendix widgets and their child elements in the browser window by identifier or content.

| Function&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| ----------------- | -------------- |
| [Find/Assert Widget Child Node](#FindWidgetChildNodeNegetable) | Find/assert a node within a Mendix widget. Also matches the widget node itself. The action is limited to search in only within widgets that are visible. |
| [Find/Assert Menu Item](#FindAssertMenuItemNegetable) | Finds/asserts a visible menu item in a navigation tree, menu bar, and simple menu bar. |
| [Find/Assert DataGrid Row](#FindAssertDataGridRowNegetabke) | Finds/asserts a data grid row by a certain column value(s). If no column name/value pair is specified then the first row is returned. When multiple column name/value pairs are specified then a row must match all of them. |
| [Find/Assert Item/Row (by index)](#FindItemRowNegetable) | Finds/asserts a row/item in a data grid, template grid, or list view by index. |
| [Find Item/Row (by child element)](#FindItemRowByChildElement) | Returns a row/item of a template grid, data grid or list view, which contains the specified element. |
| [Find/Assert Selected Item/Row](#FindSelectedItemRowNegetable) | Finds/asserts the first selected item/row as a web element. |
| [Find/Assert Widget](#FindAssertWidgetNegetable) | Finds/asserts a Mendix widget by its given name and optionally value.  |
| [Find/Assert Checkbox Set Selector](#FindCheckboxSetSelectorNegetable) | Finds/asserts a check box by a given cell value and column caption. Returns the first match. |
| [Find Checkbox Set Selector (all)](#FindCheckboxSetSelectorAll) | Returns the 'select all' checkbox for a set selector widget. |
| [Find/Assert Simple Checkbox Set Selector](#FindSimpleCheckboxSetSelectorNegetable) | Finds/asserts the check box by the given entity attribute value. |
| [Find/Assert Grid Selector](#FindGridSelectorNegetable) | Finds/asserts a check box/radio button for a given column and row captions in a grid selector widget. |
| [Find/Assert Dialog](#FindAssertDialogNegetable) | Finds/asserts a dialog by title or type. Supported widgets: window, dialog message, confirmation dialog. |

### Find/Assert Widget Child Node {#FindWidgetChildNodeNegetable}

#### Function Key

FindWidgetChildNodeNegetable

#### Description

Find/assert a node within a Mendix widget.

Also matches the widget node itself.

The action is limited to search in only within widgets that are visible.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Child Node Selector | ChildNodeSelector | String | _Required_ Used to constrain the matching child widgets. For example use: \":contains('foo')\" to find only widget that contain the text 'foo' inside. Check the ATS reference guide for a complete list of available selectors. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_ The child node of the widget as a web element.

### Find/Assert Menu Item< {#FindAssertMenuItemNegetable}

#### Function Key

FindAssertMenuItemNegetable

#### Description

Finds/asserts a visible menu item in a navigation tree, menu bar, and simple menu bar.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Caption | Caption | String | _Required_ Caption of the menu item as shown in the browser. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_ Menu Item as a Web Element.

### Find/Assert DataGrid Row {#FindAssertDataGridRowNegetabke}

#### Function Key

FindAssertDataGridRowNegetabke

#### Description

Finds/asserts a data grid row by a certain column value(s).   

If no column name/value pair is specified then the first row is returned.

When multiple column name/value pairs are specified then a row must match all of them.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column 1 Name | Column1Name | String | _Optional_ Name of the column as assigned in the Mendix Studio Pro. This is not the caption of the column. |
| Column 1 Value | Column1Value | String | _Optional_ This value is used to identify a specific row in the data grid. The search is performed on the column that matches the 'Column 1 Name'. |
| Column 2 Name | Column2Name | String | _Optional_ Name of the column as assigned in the Mendix Studio Pro. This is not the caption of the column. |
| Column 2 Value | Column2Value | String | _Optional_ This value is used to identify a specific row in the data grid. The search is performed on the column that matches the 'Column 2 Name'. |
| Column 3 Name | Column3Name | String | _Optional_ Name of the column as assigned in the Mendix Studio Pro. This is not the caption of the column. |
| Column 3 Value | Column3Value | String | _Optional_ This value is used to identify a specific row in the data grid. The search is performed on the column that matches the 'Column 3 Name'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_ A data grid row as a web element.

You can use the functions 'Find/Assert DataGrid Row' and 'Find Item/Row' 

to obtain a reference to the correct web element.

### Find/Assert Item/Row (by index) {#FindItemRowNegetable}

#### Function Key

FindItemRowNegetable

#### Description

Finds/asserts a row/item in a data grid, template grid, or list view by index.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Index | Index | Integer | _Required_ Starts from 0, meaning the first element has index 0, the second element has index 1 etc. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_ A data grid row or an item from a template grid or a list view.

Use the 'Find/Assert DataGrid Row', 'Find Item/Row' or 'Find Item/Row (by child element)' to get a reference to the correct web element.

### Find Item/Row (by child element) {#FindItemRowByChildElement}

#### Function Key

FindItemRowByChildElement

#### Description

Returns a row/item of a template grid, data grid or list view, which contains the specified element.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Child Node | Widget Child Node | WebElement | _Required_ The child node of the widget as a web element. |

#### Return Value

_WebElement_ Menu Item as a Web Element.

### Find/Assert Selected Item/Row {#FindSelectedItemRowNegetable}

#### Function Key

FindSelectedItemRowNegetable

#### Description

Finds/asserts the first selected item/row as a web element.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_ A data grid row or an item from a template grid or a list view.

Use the 'Find/Assert DataGrid Row', 'Find Item/Row' or 'Find Item/Row (by child element)' to get a reference to the correct web element.

### Find/Assert Widget {#FindAssertWidgetNegetable}

#### Function Key

FindAssertWidgetNegetable

#### Description

Finds/asserts a Mendix widget by its given name and optionally value.   

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Value | Value | String | _Optional_ The value in the widget. Supply this if you want to restrict the result by this value. For example, when there are several instances of a widget with the same name. Supported widgets: text box, text area, date picker, drop-down, radio button, referece selector, search input text, search input drop-down, label. |
| Visible Only | VisibleOnly | Boolean | _Optional_ If set to true, it will only return widgets that are visible. When false the all widgets are returned, reagardles of visiblity. Defaults to false. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Additional Selector | AdditionalSelector | String | _Optional_ Used to additionaly constrain the matching widgets. For example, use \":contains('foo')\" to find all widget that contain the text 'foo'. Check the ATS reference guide for a complete list of available selectors. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_ The Widget as a Web Element.

### Find/Assert Checkbox Set Selector {#FindCheckboxSetSelectorNegetable}

#### Function Key

FindCheckboxSetSelectorNegetable

#### Description

Finds/asserts a check box by a given cell value and column caption. Returns the first match.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Caption | ColumnCaption | String | _Required_ Used to identify a column by it's caption in a set/grid selector widget. The caption should match the label as shown in the browser. |
| Value | Value | String | _Required_ The entitiy attribute value which is used to find the correct row in the widget. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_

### Find Checkbox Set Selector (all) {#FindCheckboxSetSelectorAll}

#### Function Key

FindCheckboxSetSelectorAll

#### Description

Returns the 'select all' checkbox for a set selector widget.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |

#### Return value

_WebElement_

### Find/Assert Simple Checkbox Set Selector {#FindSimpleCheckboxSetSelectorNegetable}

#### Function Key

FindSimpleCheckboxSetSelectorNegetable

#### Description

Finds/asserts the check box by the given entity attribute value.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Value | Value | String | _Required_ The entitiy attribute value which is used to find the correct row in the widget. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_

### Find/Assert Grid Selector {#FindGridSelectorNegetable}

#### Function Key

FindGridSelectorNegetable

#### Description

Finds/asserts a check box/radio button for a given column and row captions in a grid selector widget.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Caption | ColumnCaption | String | _Required_ Used to identify a column by it's caption in a set/grid selector widget. The caption should match the label as shown in the browser. |
| Row Caption | RowCaption | String | _Required_ Used to identify a row by it's caption in a grid selector widget. The caption should match the label as shown in the browser. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_

### Find/Assert Dialog {#FindAssertDialogNegetable}

#### Function Key

FindAssertDialogNegetable

#### Description

Finds/asserts a dialog by title or type.   

Supported widgets: window, dialog message, confirmation dialog.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Dialog Title | DialogTitle | String | _Optional_ The dialog title as shown in the browser. |
| Dialog Type | DialogType | Enumeration | _Optional_ Used to distignguish between the different dialogs. For example: info, warning or error. |
| Text | DialogText | String | _Optional_ The message or confirmation text to be asserted. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_ A Mendix dialog as a web element.

Use the 'Find/Assert Dialog' to get a reference to the correct web element.

## Widget_Other {#Widget_Other}

Interact with data grid controls (for example, search), menu items and group-boxes. Offers support for toggling checkboxes and sliders.

| Function Name | Description |
| ----------------- | -------------- |
| [Click DataGrid Row](#ClickDataGridRow) | Clicks a data grid row by a certain column value. |
| [Click Dropdown Div Converter dropdown button](#ClickDropdownDivConverterDropdownButton) | Clicks the 'drop down div converter' drop down button. |
| [Click Dropdown Div Converter split button](#ClickDropdownDivConverterSplitButton) | Clicks the 'drop down div converter' split button. |
| [Click Menu Item](#ClickMenuItem) | Clicks a menu item in a navigation tree, menu bar, and simple menu bar. |
| [Click Widget](#ClickWidget) | Clicks a Mendix widget (for example, button, link, image) by its name. |
| [Click Widget Button](#ClickWidgetButton) | Clicks on one of the following special widget buttons: refresh, load more, clear search field (list view), go to, add (reference selector). |
| [Close GroupBox](#CloseGroupBox) | Closes a group box. |
| [Open GroupBox](#OpenGroupBox) | Opens a group box. |
| [Sort DataGrid](#SortDataGrid) | Sorts a data grid by a given column. |
| [Toggle BooleanSlider Value](#ToggleBooleanSliderValue) | Toggles the value of a Booleanslider. |
| [Toggle Checkbox Set Selector](#ToggleCheckboxSetSelector) | Finds a check box by a given entity attribute and inverses the value. |
| [Toggle Checkbox Set Selector (all)](#ToggleCheckboxSetSelectorAll) | Inverses the 'select all' check box. |
| [Toggle Checkbox Value](#ToggleCheckboxValue) | Clicks on a check box to toggle its value. |
| [Toggle Grid Selector Checkbox Value](#ToggleGridSelectorCheckboxValue) | Inverses the check box found by a given column and row caption. |
| [Toggle Simple Checkbox Set Selector Value](#ToggleSimpleCheckboxSetSelectorValue) | Inverses the value of the check box found by a given entity attribute value. |
| [Cancel Dialog](#CancelDialog) | Clicks 'Cancel' on a confirmation dialog. The dialog can optionally be constrained by name or type. |
| [Close Dialog](#CloseDialog) | Clicks the 'X' button on a confirmation, error, warning or info dialog box. The dialog can optionally be constrained by name or type. |
| [Confirm Dialog](#ConfirmDialog) | Clicks the 'Proceed/Ok' button on a confirmation, error, warning or info dialog box. The dialog can optionally be constrained by name or type. |
| [Set ListView Search](#SetListViewSearch) | Sets the search text for a list view. |

### Click DataGrid Row {#ClickDataGridRow}

#### Function Key

ClickDataGridRow

#### Description

Clicks a data grid row by a certain column value.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Name | ColumnName | String | _Required_ Name of the column as assigned in the Mendix Studio Pro. This is not the caption of the column. |
| Column Value | ColumnValue | String | _Required_ Value that you expect in the column of the row. |
| Doubleclick | Doubleclick | Boolean | _Optional_ If true performs a doubleclick, otherwise does a single click. Defaults to false. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

None

### Click Dropdown Div Converter dropdown button {#ClickDropdownDivConverterDropdownButton}

#### Function Key

ClickDropdownDivConverterDropdownButton

#### Description

Clicks the 'drop down div converter' drop down button.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |

#### Return Value

None.

### Click Dropdown Div Converter split button {#ClickDropdownDivConverterSplitButton}

#### Function Key

ClickDropdownDivConverterSplitButton

#### Description

Clicks the 'drop down div converter' split button.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |

#### Return Value

None.

### Click Menu Item {#ClickMenuItem}

#### Function Key

ClickMenuItem

#### Description

Clicks a menu item in a navigation tree, menu bar, and simple menu bar.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Caption | Caption | String | _Required_ Caption of the menu item as shown in the browser. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

None.

### Click Widget {#ClickWidget}

#### Function Key

ClickWidget

#### Description

Clicks a Mendix widget (for example, button, link, image) by its name.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Doubleclick | Doubleclick | Boolean | _Optional_ If true performs a doubleclick, otherwise does a single click. Defaults to false. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

None.

### Click Widget Button {#ClickWidgetButton}

#### Function Key

ClickWidgetButton

#### Description

Clicks on one of the following special widget buttons: refresh, load more, clear search field (list view), go to, add (reference selector).

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Button | Button | Enumeration | _Required_ Defines which widget button to click. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

None.

### Close GroupBox {#CloseGroupBox}

#### Function Key

CloseGroupBox

#### Description

Closes a group box.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

None.

### Open GroupBox {#OpenGroupBox}

#### Function Key

OpenGroupBox

#### Description

Opens a group box.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

None.

### Sort DataGrid {#SortDataGrid}

#### Function Key

SortDataGrid

#### Description

Sorts a data grid by a given column.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Name | ColumnName | String | _Required_ Name of the column as assigned in the Mendix Studio Pro. This is not the caption of the column. |

#### Return Value

None.

### Toggle BooleanSlider Value {#ToggleBooleanSliderValue}

#### Function Key

ToggleBooleanSliderValue

#### Description

Toggles the value of a Booleanslider.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |

#### Return Value

None.

### Toggle Checkbox Set Selector {#ToggleCheckboxSetSelector}

#### Function Key

ToggleCheckboxSetSelector

#### Description

Finds a check box by a given entity attribute and inverses the value.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Caption | ColumnCaption | String | _Required_ Used to identify a column by it's caption in a set/grid selector widget. The caption should match the label as shown in the browser. |
| Value | Value | String | _Required_ The entitiy attribute value which is used to find the correct row in the widget. |

#### Return Value

None.

### Toggle Checkbox Set Selector (all) {#ToggleCheckboxSetSelectorAll}

#### Function Key

ToggleCheckboxSetSelectorAll

#### Description

Inverses the 'select all' check box.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |

#### Return Value

None

### Toggle Checkbox Value {#ToggleCheckboxValue}

#### Function Key

ToggleCheckboxValue

#### Description

Clicks on a check box to toggle its value.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

None.

### Toggle Grid Selector Checkbox Value {#ToggleGridSelectorCheckboxValue}

#### Function Key

ToggleGridSelectorCheckboxValue

#### Description

Inverses the check box found by a given column and row caption.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Column Caption | ColumnCaption | String | _Required_ Used to identify a column by it's caption in a set/grid selector widget. The caption should match the label as shown in the browser. |
| Row Caption | RowCaption | String | _Required_ Used to identify a row by it's caption in a grid selector widget. The caption should match the label as shown in the browser. |

#### Return Value

None.

### Toggle Simple Checkbox Set Selector Value {#ToggleSimpleCheckboxSetSelectorValue}

#### Function Key

ToggleSimpleCheckboxSetSelectorValue

#### Description

Inverses the value of the check box found by a given entity attribute value.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Value | Value | String | _Required_ The entitiy attribute value which is used to find the correct row in the widget. |

#### Return Value

None.

### Cancel Dialog {#CancelDialog}

#### Function Key

CancelDialog

#### Description

Clicks 'Cancel' on a confirmation dialog.   

The dialog can optionally be constrained by name or type.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Dialog Title | DialogTitle | String | _Optional_ The dialog title as shown in the browser. |
| Dialog Type | DialogType | Enumeration | _Optional_ Used to distignguish between the different dialogs. For example: info, warning or error. |

#### Return Value

None.

### Close Dialog {#CloseDialog}

#### Function Key

CloseDialog

#### Description

Clicks the 'X' button on a confirmation, error, warning or info dialog box.   

The dialog can optionally be constrained by name or type.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Dialog Title | DialogTitle | String | _Optional_ The dialog title as shown in the browser. |
| Dialog Type | DialogType | Enumeration | _Optional_ Used to distignguish between the different dialogs. For example: info, warning or error. |

#### Return Value

None.

### Confirm Dialog {#ConfirmDialog}

#### Function Key

ConfirmDialog

#### Description

Clicks the 'Proceed/Ok' button on a confirmation, error, warning or info dialog box.   

The dialog can optionally be constrained by name or type.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Dialog Title | DialogTitle | String | _Optional_ The dialog title as shown in the browser. |
| Dialog Type | DialogType | Enumeration | _Optional_ Used to distignguish between the different dialogs. For example: info, warning or error. |

#### Return Value

None.

### Set ListView Search {#SetListViewSearch}

#### Function Key

SetListViewSearch

#### Description

Sets the search text for a list view.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Widget Name | WidgetName | String | _Required_ The name that was assigned in the Studio Pro to that widget, for example, 'textBox1'. Use the 'ATS Helper' bookmarklet to see the names of different widgets in you page. For further qualification you can additionally put in the names of surrounding widgets  separated by a single space, for example, 'dataView1 textBox1'. |
| Value | Value | String | _Required_ The value to set. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |

#### Return Value

None

## Mendix {#Mendix}

Inspect and interact with Mendix elements such as validation messages, dialogs, pages, tabs and more.

| Function&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| ----------------- | -------------- |
| [Mendix Wait](#MendixWaitCustomTimeout) | Wait for microflow and UI activities. |
| [Login](#Login) | Logs in to the Mendix application with the standard login page or on the cloud using Mendix single-sign on. |
| [Logout](#Logout) | Triggers the logout/logoff from application via the Client API. Use this keyword in the teardown of your test cases to end the user session. This function will work regardless of the UI state. |
| [Get Current Page Title](#GetCurrentPageTitle) | Returns the current page/form title. |
| [Assert Current Page](#AssertCurrentPageNegatable) | Asserts that a certain page is open, by checking the current page title. Note that the page title may depend on the user's language! For dialog boxes use the Find/Assert Dialog function. |
| [Open Mendix Application](#OpenMendixApplication) | Opens a Mendix application at the website URL in a browser with Mendix-specific settings. |

### Mendix Wait {#MendixWaitCustomTimeout}

#### Function Key

MendixWaitCustomTimeout

#### Description

Wait for microflow and UI activities.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Timeout (ms) | Timeout_ms) | Integer | _Optional_ Timeout for implicit wait in milliseconds (defaults to 60 seconds if left empty) |

#### Return Value

None.

### Login {#Login}

#### Function Key

Login

#### Description

Logs in to the Mendix application with the standard login page or on the cloud using Mendix single-sign on.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Username | Username | String | _Required_ Account username. For Mendix SSO this it the email that is associated to the Mendix profile. |
| Password | Password | String | _Required_ Account password. For Mendix SSO this is the same password that is used to access the Mendix cloud portal. |
| Use MxID | UseMxID | Boolean | _Optional_ If true will use the Mendix single sign on, otherwise the default login page is used. Deafaults to false. |

#### Return Value

None.

### Logout {#Logout}

#### Function Key

Logout

#### Description

Triggers the logout/logoff from application via the Client API.

Use this keyword in the teardown of your test cases to end the user session.

This function will work regardless of the UI state.

#### Input Parameters

None.

#### Return Value

None.

### Get Current Page Title {#GetCurrentPageTitle}

#### Function Key

GetCurrentPageTitle

#### Description

Returns the current page/form title.

#### Input Parameters

None

#### Return Value

_String_ Title of the current Mendix page. Language dependant.

### Assert Current Page< {#AssertCurrentPageNegatable}

#### Function Key

AssertCurrentPageNegatable

#### Description

Asserts that a certain page is open, by checking the current page title.

Note that the page title may depend on the user's language!

For dialog boxes use the Find/Assert Dialog function.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Page Title | PageTitle | String | _Required_ Expected title of the current Mendix page. Language dependant. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

### Open Mendix Application {#OpenMendixApplication}

#### Function Key

OpenMendixApplication

#### Description

Opens a Mendix application at the website URL in a browser with Mendix-specific settings.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| URL | URL | String | _Required_ Website URL, must start with 'http://' or 'https://'. |

#### Return Value

None.

## Web {#Web}

Uses the Selenium web driver to interact with the browser and the native html elements. Also offers actions for JavaScript injection.

| Function&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| ----------------- | -------------- |
| [Close Window](#CloseWindow) | Closes currently active window. Does not switch to another window automatically. |
| [Close Window & Auto-Switch](#CloseWindowAndAutoSwitch) | Closes the currently active window and automatically switches to the next one. |
| [Element matches Selector](#ElementMatchesSelector) | Returns whether the given element matches a selector for example, :contains('foo') or :first-child. Check out the reference guide for a complete list of possible selectors. |
| [Execute Javascript Integer](#ExecuteJavascriptInteger) | Executes a JavaScript snippet. Runs asynchronously when a timeout is set. Returns an Integer. |
| [Execute Javascript String](#ExecuteJavascriptString) | Executes a JavaScript snippet. Runs asynchronously when a timeout is set. Returns a String. |
| [Execute Javascript WebElement](#ExecuteJavascriptWebElement) | Executes a JavaScript snippet. Runs asynchronously when a timeout is set. Returns a WebElement |
| [Find/Assert Element](#FindElementNegetable) | Find/assert a web element using a host of selectio techniques. Optionally restrict search to the specified SearchContext element. Occurence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element). |
| [Find/Assert Element by CSS](#FindElementbyCSSNegetable) | Find/assert a web element by CSS. Optionally restrict search to the specified SearchContext element. Occurence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element). |
| [Find/Assert Element by ID](#FindElementbyIDNegetable) | Find/assert a web element by ID. Optionally restrict search to the specified SearchContext element. Occurence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element). |
| [Find/Assert Element by Sizzle](#FindElementBySizzleNegetable) | Finds/asserts a web element by Sizzle. Optionally restrict search to the specified SearchContext element. Occurence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element). |
| [Find/Assert Element by XPath](#FindElementByXpathNegetable) | Find/assert a web element by XPath. Optionally restrict search to the specified SearchContext element. Occurence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element). |
| [Get Property Value](#GetPropertyValue) | Returns property value from web element. Does not have access to dojo widget properties. |
| [Get Current Window Handle](#GetCurrentWindowHandle) | Returns the handle meaning, the identifier of the currently active window. |
| [Get Selected Option Index](#GetSelectedOptionIndex) | Returns the index of the first selected option in a select element. |
| [Get Selected Option Value](#GetSelectedOptionValue) | Returns the value of the first selected option in a select element. |
| [Get Selected Option Text](#GetSelectedOptionText) | Returns the text of the first selected option in a select element. |
| [Get Text](#GetText) | Get the visible, meaning, not hidden by CSS, innerText of this element, including sub-elements, without any leading or trailing whitespace. |
| [Is Element Displayed](#IsElementDisplayed) | Returns true if an element is displayed, meaning, visible. |
| [Is Selected](#IsSelected) | Check whether a check box is selected. |
| [Maximize](#Maximize) | Maximizes the current browser window. |
| [Switch to Window](#SwitchToWindow) | Switch to window via its identifier. An error is thrown if the window is not found. |
| [Switch to Next Window](#SwitchToNextWindow) | Switch to the next open window. An error is thrown if there is only one window. Returns the window handle, meaning, identifier, of the new active window. |
| [Set Page Load Timeout ](#SetPageLoadTimeout) | Sets the amount of time (in milliseconds) to wait for a page load to complete before throwing an error. If the timeout is negative, page loads can be indefinite. |
| [Set Size](#SetSize) | Sets the size of the current browser window. This will change the outer window dimension, not just the view port. |
| [Select Option By Index](#SelectOptionByIndex) | Select the option at the given index. |
| [Select Option by Text](#SelectOptionByText) | Select all options that display text matching the argument. |
| [Select Option by Value](#SelectOptionByValue) | Select all options that have a value matching the argument. |
| [Wait for Condition](#WaitForCondition) | Repeatedly runs the condition java script snippet every interval (in milliseconds) until one of the following is fulfilled:     * the snippet returns neither null nor false     * the snippet throws an unignored exception     * the timeout (in milliseconds) expires. |
| [Wait for Condition JS](#WaitForConditionJS) | Waits until the given expression returns true. |
| [Unfocus WebElement](#UnfocusWebElement) | Removes focus from a web element by calling the blur method. |
| [Assert Element Attribute Equals](#AssertElementAttributeEqualsNegetable) | Asserts that an attribute of the given element equals the specified value. |
| [Assert Element matches Selector](#AssertElementMatchesSelectorNegetable) | Mx4/Mx5 - Returns whether given element matches the selector. |

### Close Window {#CloseWindow}

#### Function Key

CloseWindow

#### Description

Closes currently active window. Does not switch to another window automatically.

#### Input Parameters

None

#### Return value

None

### Close Window & Auto-Switch {#CloseWindowAndAutoSwitch}

#### Function Key

CloseWindowAndAutoSwitch

#### Description

Closes the currently active window and automatically switches to the next one.

#### Input Parameters

None.

#### Return Value

_String_ Identifier of active window

### Element Matches Selector {#ElementMatchesSelector}

#### Function Key

ElementMatchesSelector

#### Description

Returns whether the given element matches a selector for example, :contains('foo') or :first-child.   

Check out the reference guide for a complete list of possible selectors.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Use one of the 'Find element by X' functions to get this object. |
| Selector | Selector | String | _Required_ CSS/jQuery selector |

#### Return Value

_Boolean_

### Execute Javascript Integer< {#ExecuteJavascriptInteger}

#### Function Key

ExecuteJavascriptInteger

#### Description

Executes a JavaScript snippet. Runs asynchronously when a timeout is set. Returns an Integer.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Script | Script | String | _Required_  |
| Timeout (ms) | Timeout_ms | Integer | _Optional_  |
| Argument 0 | Argument0 | Any | _Optional_  |
| Argument 1 | Argument1 | Any | _Optional_  |
| Argument 2 | Argument2 | Any | _Optional_  |
| Argument 3 | Argument3 | Any | _Optional_  |

#### Return Value

_Integer_

### Execute Javascript String {#ExecuteJavascriptString}

#### Function Key

ExecuteJavascriptString

#### Description

Executes a Javascript snippet. Runs asynchronously when a timeout is set. Returns a String.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Script | Script | String | _Required_  |
| Timeout (ms) | Timeout_ms | Integer | _Optional_  |
| Argument 0 | Argument0 | Any | _Optional_  |
| Argument 1 | Argument1 | Any | _Optional_  |
| Argument 2 | Argument2 | Any | _Optional_  |
| Argument 3 | Argument3 | Any | _Optional_  |

#### Return Value

_String_

### Execute Javascript WebElement {#ExecuteJavascriptWebElement}

#### Function Key

ExecuteJavascriptWebElement

#### Description

Executes a JavaScript snippet. Runs asynchronously when a timeout is set. Returns a WebElement

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Script | Script | String | _Required_  |
| Timeout (ms) | Timeout_ms | Integer | _Optional_  |
| Argument 0 | Argument0 | Any | _Optional_  |
| Argument 1 | Argument1 | Any | _Optional_  |
| Argument 2 | Argument2 | Any | _Optional_  |
| Argument 3 | Argument3 | Any | _Optional_  |

#### Return Value

_WebElement_

### Find/Assert Element {#FindElementNegetable}

#### Function Key

FindElementNegetable

#### Description

Find/assert a web element using a host of selectio techniques. Optionally restrict search to the specified SearchContext element.   
Occurence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element).

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Find By | FindBy | String | _Required_ Possible values: ClassName, CssSelector, Id, LinkText, Name, PartialLinkText, TagName, XPath, Sizzle |
| Find Using | FindUsing | String | _Required_  |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Occurrence | Occurrence | Integer | _Optional_ Occurrence of the element on the page. 1 corresponds to the first element, 2 to the second elements etc.  Negative number can also be used. -1 corresponds to the last element, -2 to the scond last, etc |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_ Use one of the 'Find element by X' functions to get this object.

### Find/Assert Element by CSS {#FindElementbyCSSNegetable}

#### Function Key

FindElementbyCSSNegetable

#### Description

Find/assert a web element by CSS. Optionally restrict search to the specified SearchContext element.   

Occurence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element).

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| CSS Selector | CSSSelector | String | _Required_ Input the CSS Selector. for example, if you want to query by a class name, your selector would look like this: .classname |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Occurrence | Occurrence | Integer | _Optional_ Occurrence of the element on the page. 1 corresponds to the first element, 2 to the second elements etc.  Negative number can also be used. -1 corresponds to the last element, -2 to the scond last, etc |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_ Use one of the 'Find element by X' functions to get this object.

### Find/Assert Element by ID {#FindElementbyIDNegetable}

#### Function Key

FindElementbyIDNegetable

#### Description

Find/assert a web element by ID. Optionally restrict search to the specified SearchContext element.   
Occurence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element).

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| ID | ID | String | _Required_  |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Occurrence | Occurrence | Integer | _Optional_ Occurrence of the element on the page. 1 corresponds to the first element, 2 to the second elements etc.  Negative number can also be used. -1 corresponds to the last element, -2 to the scond last, etc |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_ Use one of the 'Find element by X' functions to get this object.

### Find/Assert Element by Sizzle {#FindElementBySizzleNegetable}

#### Function Key

FindElementBySizzleNegetable

#### Description

Finds/asserts a web element by Sizzle. Optionally restrict search to the specified SearchContext element.   
Occurence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element).

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Sizzle Selector | SizzleSelector | String | _Required_ Sizzle selector. ATS also supports these additional pseudo selectors:   :containsExact(<text>) - match innerHTML of element with <text> (case insensitive)  :containsExactCase(<text>) - as :containsExact but case sensitive  :containsRegex - match innerHTML with regular expression  :containsText(<text>) - match onle plain text within the element  :val(<text>) - match the value ($(element).val()) of element with <text>, only input,textarea elements have a value other than the empty string. |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Occurrence | Occurrence | Integer | _Optional_ Occurrence of the element on the page. 1 corresponds to the first element, 2 to the second elements etc.  Negative number can also be used. -1 corresponds to the last element, -2 to the scond last, etc |
| FilterSelector | FilterSelector | String | _Optional_ Acts as an additional selector to further specify which elements to query. Uses the same notation as sizzle selectors. |
| Timeout (ms) | Timeout_ms) | Integer | _Optional_ Timeout for implicit wait in milliseconds (defaults to 10 seconds if left empty) |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_ Use one of the 'Find element by X' functions to get this object.

### Find/Assert Element by XPath {#FindElementByXpathNegetable}

#### Function Key

FindElementByXpathNegetable

#### Description

Find/assert a web element by XPath. Optionally restrict search to the specified SearchContext element.   

Occurence lets you specify which element to fetch from the result-list, starting at 1 for the first element (defaults to the first element).

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| XPath | XPath | String | _Required_ Standard XPath syntax '//tagname[@attribute='value']'. Can be usefull to navigate up the DOM tree for example, '//*[text()='Special Value']//ancestor::[contains(@class,'mx-templategrid-row')]' |
| Search Context | SearchContext | WebElement | _Optional_ Limits the search of the widget to this web element and its children. Can be used to dynamically restrict the search at runtime,  for instance to a certain template grid item. |
| Occurrence | Occurrence | Integer | _Optional_ Occurrence of the element on the page. 1 corresponds to the first element, 2 to the second elements etc.  Negative number can also be used. -1 corresponds to the last element, -2 to the scond last, etc |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

_WebElement_ Use one of the 'Find element by X' functions to get this object.

### Get Property Value {#GetPropertyValue}

#### Function Key

GetPropertyValue

#### Description

Returns property value from web element.

Does not have access to dojo widget properties.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Use one of the 'Find element by X' functions to get this object. |
| Attribute Name | AttributeName | String | _Required_  |

#### Return Value

_String_ The value to set.

### Get Current Window Handle {#GetCurrentWindowHandle}

#### Function Key

GetCurrentWindowHandle

#### Description

Returns the handle meaning, the identifier of the currently active window.

#### Input Parameters

None

#### Return Value

_String_ identifier of active window

### Get Selected Option Index {#GetSelectedOptionIndex}

#### Function Key

GetSelectedOptionIndex

#### Description

Returns the index of the first selected option in a select element.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Select Element | SelectElement | WebElement | _Required_  |

#### Return Value

_Integer_ Starts from 0, meaning the first element has index 0, the second element has index 1 etc.

### Get Selected Option Value {#GetSelectedOptionValue}

#### Function Key

GetSelectedOptionValue

#### Description

Returns the value of the first selected option in a select element.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Select Element | SelectElement | WebElement | _Required_  |

#### Return Value

_String_

### Get Selected Option Text {#GetSelectedOptionText}

#### Function Key

GetSelectedOptionText

#### Description

Returns the text of the first selected option in a select element.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Select Element | SelectElement | WebElement | _Required_  |

#### Return Value

_String_

### Get Text {#GetText}

#### Function Key

GetText

#### Description

Get the visible, meaning, not hidden by CSS, innerText of this element, including sub-elements, without any leading or trailing whitespace.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Web Element | WebElement | WebElement | _Required_  |

#### Return Value

_String_ The value to set.

### Is Element Displayed {#IsElementDisplayed}

#### Function Key

IsElementDisplayed

#### Description

Returns true if an element is displayed, meaning, visible.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Use one of the 'Find element by X' functions to get this object. |

#### Return Value

_Boolean_

### Is Selected {#IsSelected}

#### Function Key

IsSelected

#### Description

Check whether a check box is selected.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Checkbox | Checkbox | WebElement | _Required_ The Checkbox element |

#### Return Value

_Boolean_

### Maximize {#Maximize}

#### Function Key

Maximize

#### Description

Maximizes the current browser window.

#### Input Parameters

None.

#### Return value

None.

### Switch to Window {#SwitchToWindow}

#### Function Key

SwitchToWindow

#### Description

Switch to window via its identifier. An error is thrown if the window is not found.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Window Handle | WindowHandle | String | _Required_ Identifier of active window |

#### Return Value

None.

### Switch to Next Window {#SwitchToNextWindow}

#### Function Key

SwitchToNextWindow

#### Description

Switch to the next open window. An error is thrown if there is only one window.   

Returns the window handle, meaning, identifier, of the new active window.

#### Input Parameters

None.

#### Return Value

_String_ identifier of active window

### Set Page Load Timeout {#SetPageLoadTimeout}

#### Function Key

SetPageLoadTimeout

#### Description

Sets the amount of time (in milliseconds) to wait for a page load to complete before throwing an error.   

If the timeout is negative, page loads can be indefinite.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Timeout (ms) | Timeout_ms | Integer | _Required_  |

#### Return Value

None.

### Set Size {#SetSize}

#### Function Key

SetSize

#### Description

Sets the size of the current browser window.   

This will change the outer window dimension, not just the view port.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Width | Width | Integer | _Required_ width of the browser window |
| Height | Height | Integer | _Required_ height of the browser window |

#### Return Value

None.

### Select Option By Index {#SelectOptionByIndex}

#### Function Key

SelectOptionByIndex

#### Description

Select the option at the given index.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Index | Index | Integer | _Required_ Starts from 0, meaning the first element has index 0, the second element has index 1 etc. |
| Dropdown | Dropdown | WebElement | _Required_ Input the DropDown as Web Element. |

#### Return Value

None.

### Select Option by Text {#SelectOptionByText}

#### Function Key

SelectOptionByText

#### Description

Select all options that display text matching the argument.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Selected Option Text | SelectedOptionText | String | _Required_  |
| Dropdown | Dropdown | WebElement | _Required_ Input the DropDown as Web Element. |

#### Return Value

None.

### Select Option by Value {#SelectOptionByValue}

#### Function Key

SelectOptionByValue

#### Description

Select all options that have a value matching the argument.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Selected Option Value | SelectedOptionValue | String | _Required_  |
| Dropdown | Dropdown | WebElement | _Required_ Input the DropDown as Web Element. |

#### Return Value

None.

### Wait for Condition {#WaitForCondition}

#### Function Key

WaitForCondition

#### Description

Repeatedly runs the condition java script snippet every interval (in milliseconds) until one of the following is fulfilled:

* The snippet returns neither null nor false
* The snippet throws an unignored exception
* The timeout (in milliseconds) expires

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Condition | Condition | String | _Required_  |
| Timeout (ms) | Timeout_ms | Integer | _Required_  |
| Polling Interval (ms) | PollingInterval_ms | Integer | _Required_  |

#### Return Value

None.

### Wait for Condition JS {#WaitForConditionJS}

#### Function Key

WaitForConditionJS

#### Description

Waits until the given expression returns true.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Condition | Condition | String | _Required_  |
| Timeout (ms) | Timeout_ms | Integer | _Required_  |
| Polling Interval (ms) | PollingInterval_ms | Integer | _Optional_  |
| Argument 0 | Argument0 | Any | _Optional_  |
| Argument 1 | Argument1 | Any | _Optional_  |
| Argument 2 | Argument2 | Any | _Optional_  |

#### Return Value

None.

### Unfocus WebElement {#UnfocusWebElement}

#### Function Key

UnfocusWebElement

#### Description

Removes focus from a web element by calling the blur method.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Use one of the 'Find element by X' functions to get this object. |

#### Return Value

None.

### Assert Element Attribute Equals {#AssertElementAttributeEqualsNegetable}

#### Function Key

AssertElementAttributeEqualsNegetable

#### Description

Asserts that an attribute of the given element equals the specified value.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Use one of the 'Find element by X' functions to get this object. |
| Attribute | Attribute | String | _Required_  |
| Value | Value | String | _Required_ Expected value. |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

### Assert Element matches Selector {#AssertElementMatchesSelectorNegetable}

#### Function Key

AssertElementMatchesSelectorNegetable

#### Description

Mx4/Mx5 - Returns whether given element matches the selector.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Assert Element | AssertElement | WebElement | _Required_  |
| Assert Selector | AssertSelector | String | _Required_ Selector for Assertion |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

## MouseNKeyboard {#MouseNKeyboard}

Perform mouse clicks, scrolling and hover, as well as focus on web elements and emulate keystrokes.

| Function Name | Description |
| ----------------- | -------------- |
| [Hover](#Hover) | Hover a web element. |
| [Click](#Click) | Clicks in the middle of a given web element. |
| [Click Coordinates](#ClickCoordinates) | Clicks on the given point on the page, described by X and Y Offset. If no reference element is given, the upper left corner of the page is used as point of origin for calculating the desired point. Otherwise the upper left corner of the reference element is used. |
| [Send Enter](#SendEnter) | Simulates pressing Enter in element, after waiting for any mendix activities to finish."). |
| [Send Keys](#SendKeys) | Simulates typing Text into a web element, after waiting for any mendix activities to finish. |
| [Doubleclick](#Doubleclick) | Performs a double-click a web element. |
| [Focus and Clear Element Value](#FocusAndClearElementValue) | Sets an input element to an empty string, after waiting for mendix activities to finish. |
| [Focus WebElement](#FocusWebElement) | Focuses the web element and then waits for Mendix activities. |
| [Click/Doubleclick](#ClickDoubleclick) | Performs a click or double-click and waits for Mendix activities. |
| [Accept Browser Alert](#AcceptBrowserAlert) | Accepts the alert available. |
| [Clear WebElement](#ClearWebElement) | Clear a web element (input or text area). |
| [Dismiss Browser Alert](#DismissBrowserAlert) | Dismisses the alert available. |

### Hover {#Hover}

#### Function Key

Hover

#### Description

Hover a web element.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Use one of the 'Find element by X' functions to get this object. |

#### Return Value

None.

### Click {#Click}

#### Function Key

Click

#### Description

Clicks in the middle of a given web element.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Web element to click. |
| Modifier Key Set | ModifierKeySet | String | _Optional_ Simulate that some buttons are depressed during the click. Possible values: 'CONTROL', 'ALT', 'SHIFT' and 'META'. If multiple values are specified they need to be separated by a comma. |

#### Return Value

None.

### Click Coordinates {#ClickCoordinates}

#### Function Key

ClickCoordinates

#### Description

Clicks on the given point on the page, described by X and Y Offset.   

If no reference element is given, the upper left corner of the page is used as point of origin for calculating the desired point.

Otherwise the upper left corner of the reference element is used.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| X Offset | XOffset | Integer | _Required_ The horizontal coordinate to move to, from the top left corner of either the page or the given reference element. |
| Y Offset | YOffset | Integer | _Required_ The vertical coordinate to move to, from the top left corner of either the page or the given reference element. |
| Reference Element | ReferenceElement | WebElement | _Optional_ If given, the reference element is used as point of origin for measuring the coordinates. |

#### Return Value

None.

### Send Enter {#SendEnter}

#### Function Key

SendEnter

#### Description

Simulates pressing Enter in element, after waiting for any mendix activities to finish.").

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Use one of the 'Find element by X' functions to get this object. |

#### Return Value

None.

### Send Keys{#SendKeys}

#### Function Key

SendKeys

#### Description

Simulates typing Text into a web element, after waiting for any mendix activities to finish.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Use one of the 'Find element by X' functions to get this object. |
| Text | Text | String | _Required_ The text to type in. |

#### Return Value

None.

### Doubleclick {#Doubleclick}

#### Function Key

Doubleclick

#### Description

Performs a double-click a web element.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Web element to click. |

#### Return Value

None.

### Focus and Clear Element Value {#FocusAndClearElementValue}

#### Function Key

FocusAndClearElementValue

#### Description

Sets an input element to an empty string, after waiting for mendix activities to finish.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Use one of the 'Find element by X' functions to get this object. |

#### Return Value

None.

### Focus WebElement {#FocusWebElement}

#### Function Key

FocusWebElement

#### Description

Focuses the web element and then waits for Mendix activities.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Use one of the 'Find element by X' functions to get this object. |

#### Return Value

None.

### Click/Doubleclick {#ClickDoubleclick}

#### Function Key

ClickDoubleclick

#### Description

Performs a click or double-click and waits for Mendix activities.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Web element to click. |
| Doubleclick | Doubleclick | Boolean | _Optional_ If true performs a doubleclick, otherwise does a single click. Defaults to false. |

#### Return Value

None.

### Accept Browser Alert {#AcceptBrowserAlert}

#### Function Key

AcceptBrowserAlert

#### Description

Accepts the alert available.

#### Input Parameters

None.

#### Return Value

None.

### Clear WebElement {#ClearWebElement}

#### Function Key

ClearWebElement

#### Description

Clear a web element (input or text area).

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Element | Element | WebElement | _Required_ Use one of the 'Find element by X' functions to get this object. |

#### Return Value

None.

### Dismiss Browser Alert {#DismissBrowserAlert}

#### Function Key

DismissBrowserAlert

#### Description

Dismisses the alert available.

#### Input Parameters

None.

#### Return Value

None.

## Logic {#Logic}

Logical expressions for asserting page elements, text and numbers. Also includes actions for text manipulation, explicit sleep and return.

| Function Name | Description |
| ----------------- | -------------- |
| [Assert all not null](#AssertAllNotNull) | Fails if any of the objects is null. |
| [Assert at least one not null](#AssertAtLeastOneNotNull) | Fails if all objects are null. |
| [Assert Both not null](#AssertBothNotNull) | Fails if one or both objects are null. |
| [Assert Condition Fails](#AssertConditionFails) | This assert always fails when it is executed. However, if an attached condition fails, instead of failing it is just not executed. Use this function to assert that a conditional keyword fails. |
| [Concatenate String](#ConcatenateString) | Concatenate strings. Any number of the arguments can be null. |
| [Is not Null](#IsNotNull) | Returns true if object is not null, false otherwise. |
| [Assert containsString](#AssertContainsStringNegetable) | Asserts that the examined string 'Subject' (does not) contains the specified string 'Matcher Parameter' anywhere. For example, 'testcasetool' contains 'case'. |
| [Assert endsWith](#AssertEndsWithNegetable) | Asserts that Subject ends with string that is equal to Matcher Parameter. For example, 'testcase' ends with 'case'. |
| [Assert equalTo](#AssertEqualToNegetable) | Asserts that the examined object 'Object 1' is logically equal to the specified operand 'Object2'. Equality is determined by calling the Object.equals method on the examined object. Examples: `100` is equal to `100` or `house` is equal to `house`. |
| [Assert equalToIgnoringCase](#AssertEqualToIgnoringCaseNegetable) | Asserts that the examined string 'Object 1' is equal to the specified string 'Object 2', ignoring case. For example: 'house' is equal to 'House', ignoring case. |
| [Assert equalToIgnoringWhiteSpace](#AssertEqualToIgnoringWhiteSpaceNegetable) | Asserts that the examined string 'Object 1' is equal to the specified string 'Object 2' after the following rules are applied:     * all leading and trailing whitespaces of both string are removed.     * any remaining whitespace, appearing within either string, is collapsed to a single space. For example: '   my\tfoo  bar ' is equal to ' my  foo bar', ignoring whitespace. |
| [Assert greaterThan](#AssertGreaterThan) | Asserts that the examined number 'Object 1' is greater than the specified number 'Object 2'. For example: 2 is greater than 1. |
| [Assert greaterThanOrEqualTo](#AssertGreaterThanOrEqualTo) | Asserts that the examined number 'Object 1' is greater than or equal to the specified number 'Object 2'. For example: 1 is greater than or equal to 1. |
| [Assert lessThan](#AssertLessThan) | Asserts that the examined number 'object 1' is smaller than the specified number 'object 2'. For example: 1 is smaller than 2. |
| [Assert lessThanOrEqualTo](#AssertLessThanOrEqualTo) | Asserts that the examined number 'object 1' is smaller than or equal to the specified number 'object 2'. For example: 1 is smaller than or equal to 1. |
| [Assert startsWith](#AssertStartsWithNegetable) | Asserts that the examined string 'Object 1' starts with the specified string 'Object 2'. For example: 'testcase' starts with 'test'. |
| [Assert XML equivalent](#AssertXMLEquivalentNegetable) | Assert that two XMLs are equivalent. |
| [Return First Valid Boolean Object](#ReturnFirstValidBoolean) | Returns the first boolean from the parameter list which is not null. |
| [Return First Valid Integer Object](#ReturnFirstValidInteger) | Returns the first integer from the parameter list which is not null. |
| [Return First Valid String](#ReturnFirstValidString) | Returns the first string from the parameter list which is not null. |
| [Return First Valid WebElement](#ReturnFirstValidWebElement) | Returns the first webelement from the parameter list which is not null. |
| [RegExp Match](#RegExpMatch) | Return the n'th match of the given Regular Expression in the Search String. Uses JS string.match. |
| [Set Return Value](#SetReturnValue) | Use this function in custom actions to set the return value of the custom action. When using the 'extract action' feature this function call will be added automatically, where applicable. |
| [Sleep](#Sleep) | Waits 'sleep time' milliseconds. |

### Assert All Not Null {#AssertAllNotNull}

#### Function Key

AssertAllNotNull

#### Description

Fails if any of the objects is null.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Object 1 | Object1 | Any | _Optional_  |
| Object 2 | Object2 | Any | _Optional_  |
| Object 3 | Object3 | Any | _Optional_  |

#### Return Value

None.

### Assert at Least One Not Null {#AssertAtLeastOneNotNull}

#### Function Key

AssertAtLeastOneNotNull

#### Description

Fails if all objects are null.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Object 1 | Object1 | Any | _Optional_  |
| Object 2 | Object2 | Any | _Optional_  |
| Object 3 | Object3 | Any | _Optional_  |

#### Return Value

None.

### Assert Both not null {#AssertBothNotNull}

#### Function Key

AssertBothNotNull

#### Description

Fails if one or both objects are null.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Object 1 | Object1 | Any | _Optional_  |
| Object 2 | Object2 | Any | _Optional_  |

#### Return Value

None.

### Assert Condition Fails {#AssertConditionFails}

#### Function Key

AssertConditionFails

#### Description

This assert always fails when it is executed. However, if an attached condition fails, instead of failing it is just not executed.   

Use this function to assert that a conditional keyword fails.

#### Input Parameters

None.

#### Return Value

None.

### Concatenate String {#ConcatenateString}

#### Function Key

ConcatenateString

#### Description

Concatenate strings. Any number of the arguments can be null.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| String 1 | String1 | String | _Optional_  |
| String 2 | String2 | String | _Optional_  |
| String 3 | String3 | String | _Optional_  |
| String 4 | String4 | String | _Optional_  |
| String 5 | String5 | String | _Optional_  |

#### Return Value

_String_

### Is Not Null {#IsNotNull}

#### Function Key

IsNotNull

#### Description

Returns true if object is not null, false otherwise.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Object | Object | Any | _Optional_  |

#### Return Value

_Boolean_

### Assert containsString {#AssertContainsStringNegetable}

#### Function Key

AssertContainsStringNegetable

#### Description

Asserts that the examined string 'Subject' (does not) contains the specified string 'Matcher Parameter' anywhere.   

For example, 'testcasetool' contains 'case'.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Subject | Subject | Any | _Required_  |
| Matcher Parameter | MatcherParameter | Any | _Required_  |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

### Assert endsWith {#AssertEndsWithNegetable}

#### Function Key

AssertEndsWithNegetable

#### Description

Asserts that Subject ends with string that is equal to Matcher Parameter.   

For example, 'testcase' ends with 'case'.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Subject | Subject | Any | _Required_  |
| Matcher Parameter | MatcherParameter | Any | _Required_  |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

### Assert equalTo {#AssertEqualToNegetable}

#### Function Key

AssertEqualToNegetable

#### Description

Asserts that the examined object 'Object 1' is logically equal to the specified operand 'Object2'.   

Equality is determined by calling the Object.equals method on the examined object.

Examples: `100` is equal to `100` or `house` is equal to `house`.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Object 1 | Object1 | Any | _Required_  |
| Object 2 | Object2 | Any | _Required_  |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

### Assert equalToIgnoringCase {#AssertEqualToIgnoringCaseNegetable}

#### Function Key

AssertEqualToIgnoringCaseNegetable

#### Description

Asserts that the examined string 'Object 1' is equal to the specified string 'Object 2', ignoring case.   

For example: 'house' is equal to 'House', ignoring case.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Object 1 | Object1 | Any | _Required_  |
| Object 2 | Object2 | Any | _Required_  |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

### Assert equalToIgnoringWhiteSpace {#AssertEqualToIgnoringWhiteSpaceNegetable}

#### Function Key

AssertEqualToIgnoringWhiteSpaceNegetable

#### Description

Asserts that the examined string 'Object 1' is equal to the specified string 'Object 2' after the following rules are applied:   

* All leading and trailing whitespaces of both string are removed
* Any remaining whitespace, appearing within either string, is collapsed to a single space; for example: '   my\tfoo  bar ' is equal to ' my  foo bar', ignoring whitespace

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Object 1 | Object1 | Any | _Required_  |
| Object 2 | Object2 | Any | _Required_  |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

### Assert greaterThan {#AssertGreaterThan}

#### Function Key

AssertGreaterThan

#### Description

Asserts that the examined number 'Object 1' is greater than the specified number 'Object 2'.   

For example: 2 is greater than 1.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Object 1 | Object1 | Any | _Required_  |
| Object 2 | Object2 | Any | _Required_  |

#### Return Value

None.

### Assert greaterThanOrEqualTo {#AssertGreaterThanOrEqualTo}

#### Function Key

AssertGreaterThanOrEqualTo

#### Description

Asserts that the examined number 'Object 1' is greater than or equal to the specified number 'Object 2'.   

For example: 1 is greater than or equal to 1.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Object 1 | Object1 | Any | _Required_  |
| Object 2 | Object2 | Any | _Required_  |

#### Return Value

None.

### Assert lessThan {#AssertLessThan}

#### Function Key

AssertLessThan

#### Description

Asserts that the examined number 'object 1' is smaller than the specified number 'object 2'.   

For example: 1 is smaller than 2.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Object 1 | Object1 | Any | _Required_  |
| Object 2 | Object2 | Any | _Required_  |

#### Return Value

None.

### Assert lessThanOrEqualTo {#AssertLessThanOrEqualTo}

#### Function Key

AssertLessThanOrEqualTo

#### Description

Asserts that the examined number 'object 1' is smaller than or equal to the specified number 'object 2'.   

For example: 1 is smaller than or equal to 1.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Object 1 | Object1 | Any | _Required_  |
| Object 2 | Object2 | Any | _Required_  |

#### Return Value

None.

### Assert startsWith {#AssertStartsWithNegetable}

#### Function Key

AssertStartsWithNegetable

#### Description

Asserts that the examined string 'Object 1' starts with the specified string 'Object 2'.   

For example: 'testcase' starts with 'test'.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Object 1 | Object1 | Any | _Required_  |
| Object 2 | Object2 | Any | _Required_  |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

### Assert XML equivalent {#AssertXMLEquivalentNegetable}

#### Function Key

AssertXMLEquivalentNegetable

#### Description

Assert that two XMLs are equivalent.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| XML 1 | XML1 | String | _Required_  |
| XML 2 | XML2 | String | _Required_  |
| Identifier | Identifier | String | _Required_  |
| Negate | NegateParameter | Boolean | _Required_ Negetes the asssert |

#### Return Value

None.

### Return First Valid Boolean Object {#ReturnFirstValidBoolean}

#### Function Key

ReturnFirstValidBoolean

#### Description

Returns the first Boolean from the parameter list which is not null.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Boolean 1 | Boolean1 | Boolean | _Optional_  |
| Boolean 2 | Boolean2 | Boolean | _Optional_  |
| Boolean 3 | Boolean3 | Boolean | _Optional_  |
| Boolean 4 | Boolean4 | Boolean | _Optional_  |
| Boolean 5 | Boolean5 | Boolean | _Optional_  |

#### Return Value

_Boolean_

### Return First Valid Integer Object {#ReturnFirstValidInteger}

#### Function Key

ReturnFirstValidInteger

#### Description

Returns the first integer from the parameter list which is not null.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Integer 1 | Integer1 | Integer | _Optional_  |
| Integer 2 | Integer2 | Integer | _Optional_  |
| Integer 3 | Integer3 | Integer | _Optional_  |
| Integer 4 | Integer4 | Integer | _Optional_  |
| Integer 5 | Integer5 | Integer | _Optional_  |

#### Return Value

_Integer_

### Return First Valid String {#ReturnFirstValidString}

#### Function Key

ReturnFirstValidString

##### Description

Returns the first string from the parameter list which is not null.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| String 1 | String1 | String | _Optional_  |
| String 2 | String2 | String | _Optional_  |
| String 3 | String3 | String | _Optional_  |
| String 4 | String4 | String | _Optional_  |
| String 5 | String5 | String | _Optional_  |

#### Return Value

_String_

### Return First Valid WebElement {#ReturnFirstValidWebElement}

#### Function Key

ReturnFirstValidWebElement

#### Description

Returns the first webelement from the parameter list which is not null.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Web Element 1 | WebElement1 | WebElement | _Optional_  |
| Web Element 2 | WebElement2 | WebElement | _Optional_  |
| Web Element 3 | WebElement3 | WebElement | _Optional_  |
| Web Element 4 | WebElement4 | WebElement | _Optional_  |
| Web Element 5 | WebElement5 | WebElement | _Optional_  |

#### Return Value

_WebElement_

### RegExp Match {#RegExpMatch}

#### Function Key

RegExpMatch

#### Description

Return the n'th match of the given Regular Expression in the Search String.

Uses JS string.match.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Search String | SearchString | String | _Required_  |
| Regular Expression | RegularExpression | String | _Required_  |
| Modifier | Modifier | String | _Optional_  |
| Match Index | MatchIndex | Integer | _Optional_  |

#### Return Value

_String_

### Set Return Value {#SetReturnValue}

#### Function Key

SetReturnValue

#### Description

Use this function in custom actions to set the return value of the custom action.   

When using the 'extract action' feature this function call will be added automatically, where applicable.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Value | Value | Any | _Required_ Value to be set as return value |

#### Return Value

None.

### Sleep {#Sleep}

#### Function Key

Sleep

#### Description

Waits 'sleep time' milliseconds.

##### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Sleep time (ms) | SleepTimeMS | Integer | _Required_  |

#### Return Value

None.

## Generators {#Generators}

Generate random numbers, UUIDs or pieces of text; or get the current date time.

| Function Name | Description |
| ----------------- | -------------- |
| [Generate GUID](#GenerateGUID) | Generates and returns a globally unique identifier. |
| [Random Number](#RandomNumber) | Creates a random integer using: Math.floor(Math.random() * (max - min)) + min; You need to define the min (included) and max (excluded). |
| [Random String](#RandomString) | Creates a random aphanumerical string using: Math.random().toString(36).slice(2,8) Optionally allows to add a prefix or postfix. |
| [Get Current DateTime String](#GetCurrentDateTimeString) | Returns the current server date and time UTC in supplied format. The formating language is based on the java date format. An example of a correct format: 'yyyy-MM-dd HH:mm:ss'. |

### Generate GUID {#GenerateGUID}

#### Function Key

GenerateGUID

#### Description

Generates and returns a globally unique identifier.

#### Input Parameters

None.

#### Return Value

_String_ GUID

### Random Number {#RandomNumber}

#### Function Key

RandomNumber

#### Description

Creates a random integer using `Math.floor(Math.random() * (max - min)) + min`.

You need to define the min (included) and max (excluded).

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Min | Min | Integer | _Required_ Lowest possible value for the generated number, inclusive. |
| Max | Max | Integer | _Required_ Highest possible value for the generated number, exclusive. |

#### Return Value

_Integer_ A whole number.

### Random String {#RandomString}

#### Function Key

RandomString

#### Description

Creates a random aphanumerical string using `Math.random().toString(36).slice(2,8)`. Optionally allows to add a prefix or postfix.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Prefix | Prefix | String | _Optional_  |
| Postfix | Postfix | String | _Optional_  |
| Length | Length | Integer | _Optional_  |

#### Return Value

_String_ The text to type in.

### Get Current DateTime String {#GetCurrentDateTimeString}

#### Function Key

GetCurrentDateTimeString

#### Description

Returns the current server date and time UTC in supplied format.

The formating language is based on the java date format.

An example of a correct format: 'yyyy-MM-dd HH:mm:ss'.

#### Input Parameters

| Name | Key | Datatype | Description |
| ----- | ---- | ---------- | -------------- |
| Date Format | DateFormat | String | _Required_ Based on the SimpleDateFormat by java. Check the official javadocs for details. If left empty, a default pattern is used. |

#### Return Value

_String_
