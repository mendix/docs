---
title: "Translating Your App Content"
url: /refguide/translate-your-app-content/
weight: 50
aliases:
  - /howto/collaboration-requirements-management/translate-your-app-content/
---

## Introduction

Delivering your Mendix app in multiple languages is an important capability for reaching a wide audience. Most of the text that the end-user sees is stored as translatable texts (for example, labels, button names, and menu items). Using the language features of Mendix, you can quickly make your app multilingual and translate the content to many other languages.

This how-to teaches you how to do the following:

* Add a new language to your app
* Change the working language
* Translate individual items of text
* Translate multiple items of text in one operation
* Change multiple items of text in one operation
* Copy a translation from one language to another

It is assumed that you know the basics of creating new apps and editing them.

## Creating a Sample App

To demonstrate working with languages, you will create a new app from the blank app template. You will add some text to this app, as an example, but the app you create is to demonstrate the language features of Mendix and is not intended to be run.

When you create an app from a Mendix template, there is one language available: **English, United States**. You usually set this to be the **Default language**. This is the language that is displayed when an end-user has no language selected, or when your app does not support their selected language.

To create your app, do the following:

1. Create a new app using the **Blank App** template. If given the option, leave the **Default language** as **English, United States**.
2. Open the app in Studio Pro.
3. Create a domain model in MyFirstModule with two entities:

    * **Order** with the **Integer** attribute **OrderNumber**
    * **Product** with the **String** attribute **ProductName**

        {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/domain-model.png" alt="Domain model for How To" class="no-border" >}}

4. Right-click one of the entities and select **Generate overview pages**.
5. In the **Generate pages** dialog box, ensure both entities are selected and click **OK**.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/generate-pages.png" alt="Options selected for Generate Pages" class="no-border" >}}

    This generates some pages containing text for you to translate.

6. Open the page **Product_NewEdit** and add a new **Button** widget.
7. Change the text on the new button to **Order**. You will use this button to allow the end-user to order the product they are viewing. Ignore the warnings about the setup of this button.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/order-button.png" alt="Product New Edit page with an Order button" class="no-border" width="350" >}}

8. Open the page **Home_Web** and add some text into the title and subtitle.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/home-page-text.png" alt="Product New Edit page with an Order button" class="no-border" width="350" >}}

You now have an app with some translatable texts.

## Adding App Languages

You can now add an additional language to your app.

If you want to create the whole app in a language other than the current default, it is best to do this before you start creating the app. If you want to add alternative languages, it is best to do this when your app is nearing completion, as it reduces the amount of work needed to do the translation from the default language, especially if there is already a translation for that language.

To add an additional language, do the following:

1. Select the menu item **Language** > **Language Settings** to open the **App Settings** dialog box.
2. Click **Add** to open the **Add Language** dialog box.  
3. Select a **Language**. In this example, we select **Chinese (Simplified), China**, but you can use any language you like.

    {{% alert color="info" %}}Mendix recommends that you do not choose **Dutch, Netherlands**, as this already contains translations for many of the translatable texts.{{% /alert %}}

4. Click **OK** to save the changes. 

    In the **App Settings** window, the **default** language is still **English, United States**. This is the language that the end-user sees if they do not choose Chinese as their language.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/language-settings.png" alt="Language settings tab in the app settings dialog" class="no-border" width="650" >}}

5. Click **OK**. 

## Changing the Current Language

The current language is the language of the dictionary where any text you enter is stored. At the lower-right corner of the Studio Pro window, the language indicator shows which language is the current language.

To change your current language to Chinese, do the following:

1. Click the language indicator at the lower-right corner of the Studio Pro window.
2. Select **Chinese (Simplified), China** to make that your current language.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/change-language.png" alt="Change the current language" class="no-border" width="250" >}}

    {{% alert color="warning" %}}If you do more development later on, remember to change back to your default language so that any new text is recorded there and not in a translated dictionary.{{% /alert %}}

## Translating an Individual Piece of Text

Now that your current language is Chinese, you can translate some of the texts into that language.

1. Open the **Home_Web** page in Studio Pro.

    The untranslated texts appear in the default language (English, United States) between angle brackets `<>`.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/untranslated-texts.png" alt="untranslated-texts" class="no-border" >}}

2. Enter your translation for the two text items on the page.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/home-page-chinese.png" alt="Home page with translated text" class="no-border" width="350" >}}

You have now added a translation for these two pieces of text.

## Using Batch Translate

You can translate each piece of text individually. However, there are texts which appear multiple times (for example, **Cancel**, **Delete**, and **Edit**).

Mendix offers you a way to add a translation for all occurrences of a text at once.

### Translating Multiple Texts {#translate-multiple-texts}

To translate multiple occurrences and multiple texts from the default language, English, to Chinese in a single operation, do the following:

1. Select the menu option **Language** > **Batch Translate**.
2. Select **English, United States (default)** as the **Source language** and **Chinese (Simplified), China** as the **Destination language**.
3. Click **OK**.
4. The **Documents/modules** field is set to **(all)**. You initially want to work just on your module, rather than everything. To change this, click **Select** next to **Documents/modules**.
5. Make sure only the module **MyFirstModule** is selected. This restricts batch translation to this module.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/batch-translate-myfirstmodule.png" alt="Select only MyFirstModule" class="no-border" width="300" >}}

6. Click **OK**. You can now see all the translatable texts in your module. The **Translation (Chinese (Simplified), China)** column shows the individual translations you made in the previous section. The **#** column shows the number of times each text appears in the selected module (or modules).

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/batch-translate-initial.png" alt="Translatable texts in MyFirstModule" class="no-border" >}}

7. Enter translations in the **Translation (Chinese (Simplified), China)** column for the terms **Cancel** and **Edit Order**.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/batch-translate-cancel-edit.png" alt="Translate Cancel and Edit Order into Chinese" class="no-border" >}}

8. Click **Translate** to save the current translations.
9. Click **Close** to close the dialog box.
10. Open the **Product_NewEdit** page. The related terms now have Chinese translations.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/product-new-edit-partial-translation.png" alt="Product New Edit page showing the cancel button translated into Chinese" class="no-border" width="350" >}}

### Dealing With More Complex Translations

Sometimes a single word in the source language does not have a single translation in the destination language.

To handle this, follow the steps below:

1. Follow steps **1** through **6** in the [previous section](#translate-multiple-texts) to see the list of texts in your module which can be translated from **English, United States** to **(Chinese (Simplified), China**.
2. In the **Search** field, enter *Order*.
3. In the grid, there are two lines for the text **Order**. The **#** column shows that there are three places where this text is used (one instance in the first line, and two in the second). The locations are listed in the **Show occurrence** field.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/batch-translate-order.png" alt="All source texts containing the word 'order' with the locations of the text 'order' shown" class="no-border" width="600" >}}

4. In the **Show occurrence** field, the **Object** column shows that one of the locations of the text **Order** is the **Action button 'actionButton3'** on the **Product_NewEdit** page. This is the button added to allow the end-user to order the product. To confirm this, double-click the row of **Action button 'actionButton3'**.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/product-new-edit-order.png" alt="Order button on Product New Edit page" class="no-border"  width="650" >}}

    In the background, the **Product_NewEdit** page opens with the button **Order** selected. This shows that this text is used on the button.

5. If you made any translations, click **Translate** to save them.
6. Click **Close** to close the dialog box.
7. In your app, the text *Order* is used as the command to order a product, and is used to refer to the Order entity. However, in Chinese, the translations for these two scenarios are different. To solve this issue, open the **Product_NewEdit** page.
8. Edit the text on the button to reflect the verb *to order*. In Chinese, this is *下单*.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/product-new-edit-order-chinese.png" alt="Order button on Product New Edit page translated into Chinese" class="no-border" width="300" >}}

9. Go to the **Language** > **Batch Translate** to open the dialog box and search for *Order* in the module **MyFirstModule**. 

    Now in the grid, **Order** has two rows: one row has the translation *下单*, and the other row has no translation.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/batch-translate-order-split.png" alt="All source texts containing the word 'order' showing that ones with different translations are shown separately. " class="no-border" width="600" >}}

10. In the row where **Order** has no translation, enter *订单*. This is the Chinese translation for *an order*.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/batch-translate-order-2-translations.png" alt="All source texts containing the word 'order' showing two different translations for Order. " class="no-border" >}}

11. Click **Translate** to save the translation.
12. Click **Close** to close the dialog box.

You can now check that the correct translation has been applied to the other instances of Order (for example, on the **Order_Overview** page).

## Replacing Text in Current Language

Once you have made some translations, you may want to look at the translations to check for spelling or consistency. To do this, use **Batch Replace** as follows:

1. Ensure your current language is the language you want to review. Batch replace works only on the currently selected language.
2. Select the menu item **Language** > **Batch Replace**.

    The **Documents/modules** field is set to **(all)**, so the dialog box shows all the translations in the current language dictionary. You can click **Select** next to this field and select only one module to reduce the scope. You can also search for a specific word in the **Search** field. The **#** column shows the locations where the text is used. These locations are listed in the **Show occurrence** section.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/batch-replace-initial.png" alt="All texts which have been translated into Chinese." class="no-border" >}}

3. Enter any translations that need to be replaced in the **Replace with** column, then click **Replace**.

## Copying to a New Language

Having translated your app, you may want to translate it into another related language (for example **Dutch, Netherlands** into **Dutch, Belgium**, **English, United States** into **English, United Kingdom**, or **Chinese (Simplified), China** into **Chinese (Simplified), Singapore**). Many of the translations will be the same, so you do not want to type them again.

To copy our Chinese (Simplified), China translations into a Chinese (Simplified), Singapore dictionary, do the following:

1. Go to **Language**  > **Language Settings**. 
2. Click **Add** to add **Chinese (Simplified), Singapore** as an app language.

    {{< figure src="/attachments/refguide/modeling/menus/translatable-texts/translate-your-app-content/language-settings-singapore.png" alt="Belarusian added to the app" class="no-border" >}}

3. Click **OK** to save the changes and close the **App Settings** dialog box.
4. Go to **Language** > **Language Operations**. 
5. Select **MyFirstModule**. In the **Chinese (Simplified), China** column, it shows **8**. This means there are 8 translations in the Chinese (Simplified), China dictionary.
6. Select **Copy** for the **Operation**.
7. Select **Chinese (Simplified), China** as the **Source language**.
8. Select **Chinese (Simplified), Singapore** as the **Destination language**.
9. Click **Apply**. Now in the **Chinese (Simplified), Singapore** column, it shows **8**, too. Your Chinese (Simplified), China texts are copied to the Chinese (Simplified), Singapore dictionary. You can go to **Language** > **Batch Replace** to review them or go to **Language** > **Batch Translate** to change any cases where the Chinese (Simplified), China and Chinese (Simplified), Singapore translations are different.
10. Click **Close** to close the dialog box.

## Other Considerations

Now that you know how to make translations of translatable texts, there are a couple of other things you may wish to investigate.

### Completeness

To ensure all your text is properly translate, do a completeness check for your languages.

To set up the completeness check, do the following:

1. Go to **Language > Language Settings**. 
2. In the grid, double-click the language for which you want to set the completeness check. 
3. In the **Check** field, select the **Check completeness** checkbox.
4. Click **OK** to close the **Edit Language** dialog box. 
5. In the **App Settings** dialog box, click **OK** to save the changes and close the dialog box. You then receive warnings about all text which has not been translated into that language. There is always a completeness check for the default language.

For more information, see [Advanced Language Settings](/refguide/language-settings/#advanced) in the *Language Settings* reference guide.

### Sharing Translations With Other Apps

You have seen how to create translations easily and copy your new translation to a new language in the current app.

What if you have several apps and want to add Chinese to all of them? Maybe you want to translate your own modules from scratch, but do not want to translate the system module, administration module, and Atlas UI all over again, as they do not change and you already have correct translations for these.

Mendix allows you to export a translation to an Excel file, either for the whole app or selected modules. You can then import this translation to another app and have your translation available to you.

For more information, see [Exporting and Importing Text](/refguide/batch-translate/#export-import) in the *Batch Translate* reference guide.

## Read More

* [Language Menu](/refguide/translatable-texts/)
