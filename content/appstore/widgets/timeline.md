## Timeline

Use Timeline widget to create vertical list of events with descriptions.

## Usage

#### Choosing the render type

For the sake of simplicity, there are two modes available to create timeline: Basic and Custom.

With basic mode you can quickly select title, description, time and icon to have the fastest results.

With custom mode you can freely model everything which will be shown in the timeline. Including Icon, Day divider, Title, Event Date/Time or Content.

#### Selecting a data source

Simply select a data source which will be used in the widget. Since timeline widget will try to group the events, make sure there is a DateTime attribute in the entity itself.

#### Selecting event date time attribute

**Timeline will use this attribute to group events based on the date.** If you are using basic mode, values of this field will be used as a group header.

#### Configuring widget

##### Showing group header

For both custom and basic mode, you can opt for showing the day divider by using this control. Removing divider will make timeline look like one single flow.

##### Basic Mode Specific Fields

Simply select:

-   Title (**Required**)
-   Description
-   Event date/time
-   Icon

from the connected data source entity. You may use glyphicons and images for the icon itself. If icon is not provided, it will be shown as circle with background color specified in `.widget-timeline-icon-circle`

In basic mode, you can show group header in six different formats.

| Option                           | Explanation                                                                                       | Example    |
| -------------------------------- | ------------------------------------------------------------------------------------------------- | ---------- |
| day / day name                   | If events are grouped by date, this will show full name of the week day\.                         | Monday     |
| day / day number and month       | If events are grouped by date, this will show zero padded day number and full name of the month\. | 01 March   |
| day / day number, month and year | If events are grouped by date, this will show default date format based on current language\.     | 31/12/2020 |
| month / month name               | If events are grouped by month, this will show full name of the month\.                           | April      |
| month / month and year           | If events are grouped by month, this will show short name of the month and full year\.            | Apr 2020   |
| year                             | If events are grouped by year, this will show full year\.                                         | 2020       |

##### Custom Mode Specific Fields

Timeline will generate 5 drop zones for Icon, Divider, Title, Event Date Time and Content. Since none of these fields are required, feel free to create your own timeline widget with any combinations.
