---
title: "How to Build an Event App in the Web Modeler"
# space: "Enter the space in which the document should be published (for example, "Mendix 7 How-to's")"
# category: "Enter the category under which the document should be published (for example, "Mobile")"
---

## 1 Introduction

The new Web Modeler offers a lot of new features. This document will explain them while building a simple app step by step from the beginning.

**This how-to will teach you how to do the following:**

* Create an app, pages, entities and attributes
* Add headers, buttons and building blocks 
* Configure text and building blocks content
* Build microflows
* Publish your App

## 2 Create a new App

1. Go to the [Developer Portal](http://home.mendix.com).
2. Click **Create App** in the top right corner of the screen.
3. Select **Starter Apps**.
4. Choose the **Blank** AtlasUI theme.
5. Click **Use this theme**.
6. Choose a name for the app.

Once in the the **Buzz** page has opened, click **Edit App** to build the App.

## 3 Add a header

When the Web Modeler has opened, you will see a blank page with a default header.

1. Select the layout grid of the header.

    ![](attachments/wm-step1.jpg)

2. Click **Delete** button on the right side of the screen.
3. Drag and drop **Header1** from the **Building Blocks** in the **Toolbox**.
4. Select the title of the header and change the **Caption** into *My Event App* in the **Properties**.

    ![](attachments/wm-step2.jpg)

## 4 Text design

In **Properties** you can find various options to style your text. 

5. Change the subtitle of the header in the **Caption** to *September 18-20 2017*.    
6. Select **Color** and make it *Danger*.
7. Under **Transform** make it *Uppercase*.

    ![](attachments/wm-step3.jpg)

## 5 Layout rows in the device viewer

On the Home page underneath the header, add four **Action Cards** to open new pages by following these steps:

8. Select the **Container** in the layout grid below the header.

<div class="alert alert-info">{% markdown %}

The layout grid is a widget that gives structure to your pages. A layout grid contains one or more rows and each row contains one to twelve columns.

{% endmarkdown %}</div>

9. Change it to 4 rows under the **Row layout** for Desktop, Tablet and Phone view.

    ![](attachments/wm-step4.jpg)

10. Switch between the devices to see the layout by clicking on the **Device icons** above the app page.  

### 6 Add Action Cards

Now the rows are set, it's time to add **Action Cards** to the columns.

11. Click on **Toolbox** and select **Building blocks**
12. Open the section named **Cards**.

    ![](attachments/wm-step6.jpg) 

13. Drag and drop the **Card Action** to the empty containers.

    ![](attachments/wm-step7.jpg)

14. Select the title and change it under **Caption** to *Program*.
15. Select the button icon and change under **Icon**; select *List alt*.
16. Set the **On click action** in **Properties** to **Page**. If the user will click on this card, a new page will be opened.

    ![](attachments/wm-step8.jpg)

The Home page is now finished!

     ![](attachments/wm-step25.jpg)

## 7 Add a new page

Now the **Action Cards** are set, they must open new pages. There are two ways to create a new page: 

    *  Below the **On click action** click **Select page**
    *  In the left navigation panel click **Pages**

    ![](attachments/wm-step11.jpg)        

17. Click **New page**.
18. Type in the title of the page.
19. In the section **Dashboards** select **Dashboards timeline** and click **Create**.

    ![](attachments/wm-step12.jpg) 

<div class="alert alert-info">{% markdown %}

If you create a page in **Pages** (in the left navigation panel), make sure that the Action Card on the Home Page is reffering in the **on click action** to the newly created page.    

{% endmarkdown %}</div>


20. Replace the header with the same header as on the Home page and change the titles.
21. Delete the *New Button* by selecting the button and clicking **Delete** it in **Properties**. Remove also its *container* by selecting it and clicking **Delete** in **Properties**. 

At this point, you can preview your results by publishing the app. See paragraph 17 how to do it.

## 8 Adding entities and attributes into a building block

Now the new page has a header, it's time to fill the timeline with data.

22. Click on an empty space of the new page to see the **List view**.

    ![](attachments/wm-step13.png) 

23. Select first the outer list view and click in **Properties** on **Entity** to create a new entity.

    ![](attachments/wm-step14.jpg)

24. Name the entity *Day*.
25. Remove *Today* from the **Date indicator** in the list view in **Content** .
26. Click **Add parameter** and click **Add attribute**.
27. Name the new attribute *Date* and set the **Type** as a *String*.
28. Click on the outer list view and add a new enitity named *ProgramItem*.
29. Click on the inner list view and select the entity *ProgramItem*.
30. Replace *Title* with a new attribute *Speaker*.
31. Replace *This is your timeline detail text* with a new attribute *Title*.

Make sure that at the end the entities are set correctly:

* Outer list view - *Day* entity
* Inner list view - *ProgramItem* entity

## 9 Viewing your Domain Model and setting associations

After you have added new entities and attributes to the page, it's always good to take a look into the **Domain Model** for a structured overview. Here you can also set the **associations** between the entities.

32. Click **Domain Models** in the left navigation panel.
33. Select the *ProgramItem* entity and click on the arrow to set an association with the *Day* enitity.

![](attachments/wm-step15.jpg)

## 10 Changing the On Click Actions

Now the domain model looks good, the new items of the ProgramItem page need to show details in a separate page.

34. Select in **Pages** the *ProgramItem* page.
35. Click on the inner list view and set the **on click action** to **Page**.

    ![](attachments/wm-step16.jpg)

36. Create a new **blank** page and name it *ItemDetail*.

The ProgramList page is now finished!

    ![](attachments/wm-step26.jpg)

## 11 Adding rows to a blank layout grid

On the new page there will be two items next to each other and another item underneath it. This means you need two more rows.

37. Select the layout grid and add two rows to the layout grids by clicking **Add rows**.

    ![](attachments/wm-step18.jpg)

## 12 Changing the text

Instead of using a header, you can use normal text and style it.

38. Select the first column and drag and drop the from the **Toolbox** the Text **Widget** of the **Typography** section.

    ![](attachments/wm-step19.jpg)

39. Change *Text* into *Details* and set:

*   Render mode - H2
*   Weight - Bold
*   Color - Header color
*   Alignment - Center

## 13 Searching for content in the Modeler and the App Store

You can explore the options by looking into the **Building blocks** and **Widgets**, but you can also search for content that can be downloaded from the **App Store**.

40. Select the second column and drag and drop the **flex container left** into it. You can find it by searching for it.
41. Add a button to the right column. Name it *Book seat*.
42. Change the **Render mode** to **Link**.

    ![](attachments/wm-step21.png)

43. Search for the progress bar and click on it to download it from the App Store.

    ![](attachments/wm-step22.jpg)

44. Drag and drop the progress bar to the left column.
45. In the third column drag and drop the **Card Map** from **Cards** in the **Building Blocks**.

    ![](attachments/wm-step17.jpg)

## 14 Adding extra rows

In case you forgot an item on your page and you want to add it:

46. Select the layout grid of the page.
47. Click **Add a row**.
48. In the new column drag and drop the **Card User** from **Cards** in the **Building Blocks**.
49. Remove the details button from the Card User.

## 15 Styling the buttons

To close the *Details* page and return to the *Timeline* page, you will need a back button.

50. Drag and drop the **Close button** from **Widgets** and set it to:

*   Caption - Back
*   Icon - Chevron left
*   Full Width - on

The ItemDetail page is now finished!

![](attachments/wm-step23.png)

## 16 Add microflows

Now everything on the *Details* page is set, the *Book seat* button has to have an action:

51. Click on the **Book seat** button.
52. Set the **On click action** to **Microflow** and click on **Select Microflow** below it.
53. Create a new microflow and name it *BookSeat*.
54. Add a **Parameter** from the **Toolbox**.
55. Select the **Entity** and set it to *ProgramItem*.
56. Add to the **Annotation**  information about the TODO task for the integration specialists to add to the microflow in the **Desktop Modeler**.

![](attachments/wm-step24.jpg)

## 17 Publish and view your App

To view how your page looks like:

57. Click **Publish**
58. Click **Update**
59. Click **View on mobile device**

    ![](attachments/wm-step9.jpg)

60. Scan the QR-code with your [Mendix Developer App](/refguide/getting-the-mendix-developer-app).

    ![](attachments/wm-step10.jpg)


You can now finish the rest of the app. 

## 18 Related Content

{Do not enter anything here, this will be generated by Mendix}
