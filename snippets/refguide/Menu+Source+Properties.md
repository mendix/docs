### Menu source

The items that are shown in the menu widget are determined by the menu source. A menu widget is either filled from a menu configured in the [Navigation](navigation) document or a [Menu](menu) document.

| Value | Description |
| --- | --- |
| Project Navigation | The menu items are taken from one of the menus defined in the [Navigation](navigation) document. Use this for the main menu of your application. |
| Menu Document | The menu items are taken from a [Menu](menu) document. Use menu documents for auxiliary menus. |

_Default value:_ Project navigation

### Menu (only for menu source 'Project navigation')

If the menu source is 'Project navigation', this property specify which of the three menus that can be configured in the [Navigation](navigation) document will be used to fill the menu widget.

| Value | Description |
| --- | --- |
| Desktop | Use the 'Desktop' menu |
| Tablet | Use the 'Tablet' menu |
| Phone | Use the 'Phone' menu |

_Default value:_ Desktop

### Menu document (only for menu source 'Menu document')

If the menu source is 'Menu document', you can select a [Menu](menu) document that will be used to fill the menu widget.
