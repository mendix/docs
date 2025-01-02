---
title: "Widget Conversion Limitations"
url: /refguide/mendix-client/widget-conversion-limitations/
description: "Describes the limitations of the automatic widget conversions."
weight: 20
---

## Introduction

Mendix Studio Pro provides a quick and automatic method to easily migrate the widgets that are unsupported by the React client. However, not all configuration options are currently supported by the replacement (React ready) widgets. To better understand which configuration options cannot be used as expected, see the sections below. This document will be updated we make as more widgets and configuration options React ready.

## Automatic Widget Conversion Limitations

The following sections list the unsupported widget configuration options.

### Static and Dynamic Image

| Unsupported in Image |
|----------------------|
| Height in Percentage |

### Reference Selectors

| Unsupported in Combo Box           |
|------------------------------------|
| Go to Page                         |
| Screen Reader Caption              |
| 'Text' Read-only Style             |
| 'Text' Read-only Style (inherited) |
| 'Required' Validation              |
| 'Custom' Validation                |
| Decimal Precision Formatting       |
| Group Digits Formatting            |

### Reference Set Selector

| Unsupported in Combo Box     |
|------------------------------|
| Constrained By               |
| Decimal Precision Formatting |
| Group Digits Formatting      |

{{% alert color="warning" %}}
Because the reference set selector widget is technically a grid, while combo box is a drop-down, only the applicable configuration options will be transferred to the resulting combo box during conversion.
{{% /alert %}}

### Input Reference Set Selector

| Unsupported in Combo Box           |
|------------------------------------|
| Screen Reader Caption              |
| 'Text' Read-only Style             |
| 'Text' Read-only Style (inherited) |
| Constrained By                     |
| Decimal Precision Formatting       |
| Group Digits Formatting            |

### Data Grid

| Unsupported in Data Grid 2              |
|-----------------------------------------|
| Data Source Wait for Search             |
| Server Side Paging                      |
| Show Empty Rows                         |
| Column Size in Pixels                   |
| Tooltip Page                            |
| Paging Bar Without Total Count          |
| Single and Maintain Selection           |
| Select First                            |
| Aggregate Caption                       |
| Aggregate Function                      |
| Editable Columns                        |
| Tooltip Pages                           |
| Reference Set Columns                   |
| Range Search Field                      |
| Read-only Search Field                  |
| Hidden Search Field with Default Value  |
| Multiple Search Fields for an Attribute |
| All Rows Variable                       |
| Select All Button                       |
| Export to CSV Button                    |
| Inline Editing                          |
