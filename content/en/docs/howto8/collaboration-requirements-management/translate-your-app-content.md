---
title: "Translate Your App Content"
url: /howto8/collaboration-requirements-management/translate-your-app-content/
weight: 50
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

When you create an app from a Mendix template, there is one language available. This is **English, United States**, which you will usually set to be the default language. This is the language which will be displayed when an end-user has no language selected, or when your app does not support their selected language.

To create your app, do the following:

1. Create a new app using the **Blank App** template. If given the option, leave the default language as **English, United States**.
2. Open the app in Studio Pro (images here are from Studio Pro 8.10).
3. Create a domain model in MyFirstModule with two entities:
    * **Order** with the integer attribute **OrderNumber**
    * **Product** with the string attribute **ProductName**
        {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/domain-model.png" alt="Domain model for How To" class="no-border" >}}
4. Right-click one of the entities and select **Generate overview pages…**.
5. Ensure both entities are selected and click **OK**.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/generate-pages.png" alt="Options selected for Generate Pages" class="no-border" >}}
    This will generate some pages containing text for you to translate.
6. Open the page **Product_NewEdit** and add a new **Button** widget.
7. Label the new button **Order**. This button will be used to allow the end-user to order the product they are viewing. Ignore any warnings about the setup of this button.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/order-button.png" alt="Product New Edit page with an Order button" class="no-border" >}}
8. Open the page **Home_Web** and put some text into the title and subtitle.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/home-page-text.png" alt="Product New Edit page with an Order button" class="no-border" >}}

You now have an app with some translatable texts.

## Adding App Languages

You can now add an additional language to your app.

If you want to create the whole app in a language other than the current default, it is best to do this before you start creating the app. If you want to add alternative languages, it is best to do this when your app is nearing completion as it reduces the amount of work needed to do the translation from the default language, especially if there is already a translation for that language.

To add an additional language, do the following:

1. Select the menu item **Language > Language settings…**.
2. Click the **Add** button and select a second language. In this example we will be using *Russian, Russia*, but you can use any language you like.
    {{% alert color="info" %}}It is recommended that you **don't** choose *Dutch, Netherlands* as this already contains translations for many of the translatable texts.{{% /alert %}}
3. Click **OK** to confirm.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/language-settings.png" alt="Language settings tab in the project settings dialog" class="no-border" >}}

You will see that the default language is still *English, United States* which is what you want the end-user to see if they do not choose Russian as their language.

## Changing the Current Language

The current language is the language of the dictionary where any text you enter is stored. You can see which language is the current language in the status bar at the bottom right of the Studio Pro window.

To change your current language to Russian, do the following:

1. Click the language indicator in the status bar.
2. Click **Russian, Russia** to make that your current language.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/change-language.png" alt="Change the current language" class="no-border" >}}

{{% alert color="info" %}}
If you do further development later on, you will need to remember to change back to your default language so that any new text is recorded there and not in a translated dictionary.
{{% /alert %}}

## Translating an Individual Piece of Text

Now that your current language is Russian, you can translate some of the texts into that language.

1. Open the **Home_Web** page in Studio Pro.

    You will see that untranslated texts appear in the default language (English, United States) between angle brackets `<>`.
2. Enter your translation for the two text items on the page
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/home-page-russian.png" alt="Home page with translated text" class="no-border" >}}

You have now added a translation for these two pieces of text.

## Using Batch Translate

You could translate each piece of text individually. However, there are texts which appear multiple times, for example **Cancel**, **Delete**, and **Edit**.

Mendix offers you a way to add a translation for all occurrences of a text at once.

### Translating Multiple Texts

To translate multiple occurrences and multiple texts from the default language, English, to Russian in a single operation, do the following:

1. Select the menu option **Language > Batch Translate…**.
2. Select *English, United States* as the **Source language** and *Russian, Russia* as the **Destination language**.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/batch-translate-languages.png" alt="Select English and Russian as source and destination languages" class="no-border" >}}
3. Click **OK**.

    You initially want to work just on your module, rather than everything.
4. Click **Select…** next to **Documents/modules**. This will currently be set to *(all)*.
5. Check only the module **MyFirstModule** to restrict batch translation to this module.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/batch-translate-myfirstmodule.png" alt="Select only MyFirstModule" class="no-border" >}}
6. Click **OK**.

    You can now see all the translatable texts in your module. The individual translations you made in the previous section are shown in the *Russian, Russia* column. The **#** column shows the number of times each text appears in the selected module(s).
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/batch-translate-initial.png" alt="Translatable texts in MyFirstModule" class="no-border" >}}
7. Enter translations in the destination language (**Russian, Russia**) column for a few terms: **Cancel**, **Delete**, and **Edit** for example.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/batch-translate-cancel-delete-edit.png" alt="Translate Cancel, Delete, and Edit into Russian" class="no-border" >}}
8. Click **Translate** to save the current translations.
9. **Close** the batch translate dialog and look at the page **Product_NewEdit**. You will see that these terms now have Russian translations.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/product-new-edit-partial-translation.png" alt="Product New Edit page showing the cancel button translated into Russian" class="no-border" >}}

### Dealing With More Complex Translations

Sometimes a single word in the source language does not have a single translation in the destination language.

Follow the steps below to see how to deal with this situation.

1. Follow steps **1** through **6** in the previous section to again see a list of texts in your module which can be translated from *English, United States* to *Russian, Russia*.
2. Type *Order* in the **Source text contains** field.
3. Click the translatable text `Order`. You can see that there are three places that this text is used, and they are listed at the bottom of the dialog box.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/batch-translate-order.png" alt="All source texts containing the word 'order' with the locations of the text 'order' shown" class="no-border" >}}
    One of the locations of the text `Order` is an action button on the **Product_NewEdit** page. This was the button we added above whose purpose is to allow the end-user to order the product.
4. Double-click on the **Action button …** object to confirm that this is the button we were planning to use to order the product.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/product-new-edit-order.png" alt="Order button on Product New Edit page" class="no-border" >}}

The text `Order` is being used to refer to the Order entity, but also the command to order a product. In Russian these are two different words.

To solve this issue, you can do the following:

1. Close the **Batch translate** dialog. Remember to click **Translate** to save any translations you have made.
2. Go to the page **Product_NewEdit**.
3. Edit the text on the button to reflect the verb *to order*. In Russian this is `заказать`.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/product-new-edit-order-russian.png" alt="Order button on Product New Edit page translated into Russian" class="no-border" >}}
4. Reopen the **Language > Batch Translate…** dialog and search for *Order* in the module *MyFirstModule*.

    You will see that the translations for *Order* have now been split between the one with the translation `заказать` and the one with no translation.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/batch-translate-order-split.png" alt="All source texts containing the word 'order' showing that ones with different translations are shown separately. " class="no-border" >}}
5. Now you can change the remaining entries for *Order* to `Заказ`, the Russian for *an order*.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/batch-translate-order-2-translations.png" alt="All source texts containing the word 'order' showing two different translations for Order. " class="no-border" >}}
6. Click **Translate** to save the translation and **OK** to close the **Batch translate…** dialog.

You can now check that the correct translation has been applied to the other instances of *Order*. For example on the **Order_Overview** page.

## Replacing Text in Current Language

Once you have made some translations, you may want to look at just the translations to check for spelling or consistency. To do this, use **Batch replace…**.

To use batch replace, do the following.

1. Ensure that your current language is the language you want to review. Batch replace works on the currently selected language.
2. Select the menu item **Language > Batch replace…**.

    You will see all the translations which are in the current language dictionary. You can limit these to a module and search them for specific words as before. You can also see where each text is used, so you can view it in context.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/batch-replace-russian-initial.png" alt="All texts which have been translated into Russian." class="no-border" >}}

    You can see that you have been inconsistent with use of capital letters. So you need to make it more consistent.

3. Ensure all text starts with a capital letter by typing the new text in the **Replace with** column.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/batch-replace-russian-capitals.png" alt="All texts which have been translated into Russian." class="no-border" >}}

4. Click **Replace** to update the translation dictionary.

## Copying to a New Language

Having translated your app, you may want to translate it into another, related, language. For example *Dutch, Netherlands* into *Dutch, Belgium*, *English, United States* into *English, United Kingdom*, or *Russian, Russia* into *Belarusian, Belarus*. Many of the translations will be the same so you don't want to type them again.

To copy our Russian translations into a Belarusian dictionary you can do the following:

1. Add *Belarusian, Belarus* as an app language.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/language-settings-belarusian.png" alt="Belarusian added to the app" class="no-border" >}}
2. Open the menu option **Language > Language Operations…**.
3. Select **MyFirstModule**. You can see that there are 11 translations in the Russian dictionary.
4. Click **Copy** for the **Operation**.
5. Select *Russian, Russia* as the **Source language**.
6. Select *Belarusian, Belarus* as the **Destination language**.
7. Click **Apply**.
    {{< figure src="/attachments/howto8/collaboration-requirements-management/translate-your-app-content/language-operations-copy.png" alt="Copy all Russian translations in MyFirstModule to the Belarusian dictionary" class="no-border" >}}

Your Russian texts are copied to the Belarusian dictionary and you can now review them using batch replace or batch translate to change any cases where the Russian and Belarusian languages diverge.

## Other Considerations

Now you know how to make translations of translatable texts, there are a couple of other things you may wish to investigate.

### Completeness

You will probably want to know that you haven't missed any text that should have been translated, and it is a big task to go through your app manually and check every piece of text.

Mendix provides you with a completeness check for your languages. You can set this by editing the language in **Language Settings**. You will then receive warnings about all text which has not been translated into that language. There is always a completeness check for the default language.

For more information, see [Advanced Language Settings](/refguide8/language-settings/#advanced) in the *Language Settings* reference guide.

### Sharing Translations With Other Apps

You have seen how you can create translations easily and even copy your new translation to a new language in the current app.

But what if you have several apps and want to add Russian to all of them? You might be happy to translate your own modules from scratch, but you won't want to translate the system module, administration module, and Atlas UI all over again as they don't change and you already have perfect translations for these.

Mendix allows you to export a translation to an Excel file, either for the whole app or just selected modules. You can then import this translation to another app and have your translation available to you.

For more information, see [Exporting and Importing Text](/refguide8/batch-translate/#export-import) in the *Batch Translate* reference guide.

## Read More

* [Language Menu](/refguide8/translatable-texts/)
