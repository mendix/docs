---
title: "How to Build an Event App in the Web Modeler"
space: "Mendix 7 How-To's"
category: "Tutorials"
---

## 1 Introduction

The new Web Modeler offers a lot of new features. This document will explain these features while you build a simple event app.

**This how-to will teach you how to do the following:**

* Create an app, pages, entities, and attributes
* Add headers, buttons, and building blocks 
* Configure text and building blocks content
* Build microflows
* Publish your App

## 2 Create a new App

1. Go to the [Developer Portal](http://home.mendix.com).
2. Click **Create App** in the top right corner of the screen.
4. Select the **Blank App** AtlasUI theme.
5. Click **Use this app**.
6. Name your new app *Event App* and click **Create App**.
7. When you're new app has been created, click **Edit App** on the **Buzz** page. This will open your new app in the Mendix Web MOdeler.

    ![](attachments/wm-step0.png)

## 3 Add a Header

When the Web Modeler has opened, you will see a blank page with a default header. Follow these steps to add a new header to the page:

1. Select the layout grid of the header.

    ![](attachments/wm-step1.jpg)

2. Click **Delete** in the bottom right of the screen.
3. Drag and drop **HeroHeader1** from the **Building Blocks** in the **Toolbox** tab onto the container.
4. Select the title of the header and change the **Caption** to *My Event App* in the **Properties**.

    ![](attachments/wm-step2.jpg)

## 4 Update the Text Design

In **Properties** you can find various options to style your text. Follow these steps to change the styling of the subtitle:

1. Change the subtitle of the header to *September 18-20 2017*.
2. Set **Color** to *Warning*.
3. Set **Transform** to *Uppercase*.

    ![](attachments/wm-step3.jpg)

## 5 Add Layout Rows in the Device Viewer

On the Home page, below the header, add four **Action Cards** to open new pages by following these steps:

1. Select the **Column** in the layout grid below the header.

<div class="alert alert-info">{% markdown %}

The layout grid is a widget that gives structure to your pages. A layout grid contains one or more rows and each row contains one to twelve columns.

{% endmarkdown %}</div>

2. Change it to four rows under the **Row layout** for Desktop.
3. Select four blocks for Tablet and Phone.

    ![](attachments/wm-step4.jpg)

3. Switch between the devices profiles to preview the layout by clicking on the **device icons** at the top of the Web Modeler.

    ![](attachments/wm-step4b.jpg)

### 6 Add Action Cards

Now that the rows are set, it's time to add **Action Cards** to the columns that will serve as buttons to navigate to other pages. Follow these steps to add the action cards to the Home page:

1. Open the **Toolbox** and select **Building Blocks**
2. Open the **Cards** section.

    ![](attachments/wm-step6.jpg) 

3. Drag and drop the **Card Action** to all four empty columns.

    ![](attachments/wm-step7.png)

4. Select the **Open page** button for the first card and change its **Caption** to *Program*.
5. Select the **Signal** button and change to icon to *List alt*.
6. Set the **On Click Action** to **Page**. If the user clicks this card, a new page will be opened. You will create the page that will be opened in the next chapter.

    ![](attachments/wm-step8.jpg)

The Home page is now finished!

   ![](attachments/wm-step8b.png)

## 7 Add a New Page

Now that the **Action Cards** are set, they must be configured to open new pages. Follow these steps to create a new page that will be opened when the Program card is clicked:

1. Select the **List alt** button and click **Select page**.
2. Click **New page** in the dialog window that opens up.
2. Name the new page *ProgramList*.
3. Select the **Dashboard Timeline** template and click **Create**.

    ![](attachments/wm-step12.jpg) 

<div class="alert alert-info">{% markdown %}

If you create a page in **Pages** (in the left navigation panel), make sure that the Action Card on the Home Page refs to it in the **On Click Action**.

{% endmarkdown %}</div>

4. Replace the header with the **Heroheader1** like you did on the Home page.
5. Change the header title to *Program List*.
6. Change the subtitle to *Upcoming events*.
7. Delete the **New** button and its container.

## 8 Add Entities and Attributes to a Building Block

The program list page is coming along nicely. The timeline will need to display a list of events, so follow these steps to add entities and attributes to the list view:

1. Click to the right of the **Today** text to select the **List view**.

    ![](attachments/wm-step13.png) 

2. In the **Properties**, click **Select an entity**.

    ![](attachments/wm-step14.jpg)
    
3. Click **New Entity** to create a new entity.

3. Name the entity *Day* and click **Create**.
4. Select the *Today* text widget .
5. Delete the *Today* text fron the **Content**.
6. Click **Add parameter** and then **New Attribute**.
7. Name the new attribute *Date* and select *String* as type.
8. Click **Create** to add the attribute.


## 9 View Your Domain Model, Create an Entity, and Set Associations

After you have added new entities and attributes to the page, it's always good to take a look into the **Domain Model** for a structured overview. Here you can also set the **associations** between the entities.

32. Click **Domain Models** in the left navigation panel.

. Click on the outer list view and add a new enitity named *ProgramItem*.
. Click on the inner list view and select the entity *ProgramItem*.
. Replace *Title* with a new attribute *Speaker*.
. Replace *This is your timeline detail text* with a new attribute *Title*.

Make sure that at the end the entities are set correctly:

* Outer list view - *Day* entity
* Inner list view - *ProgramItem* entity


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
