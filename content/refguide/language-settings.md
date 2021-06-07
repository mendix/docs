---
title: "Language Settings"
parent: "translatable-texts"
menu_order: 10
tags: ["studio pro", "translation", "languages", "translatable text", "add language", "date format", "completeness"]
---

## 1 Introduction

Mendix is designed to be used by users in multiple languages. The **Languages** tab of the **App Settings** allows you to select which languages your app will support.

![](attachments/language/01_project_settings.png)

You can reach this tab in two ways:

1. Select the menu option **Language > Language Settings…**.
2. Open the **App{Name} > Settings** dialog box from the [App Explorer](project-explorer) and select the **Language** tab.

## 2 Setting Default Language

There must be a default app language. Select the **Default language** from the drop-down list. This will contain all languages which have been added to your app. It is recommended that you do this when you start developing your app.

Setting the default language has two functions:

* It sets the language which will be displayed to the end-user if the end-user is not associated with a Language entity, or if the end-user's language is not enabled in the app
* It sets the language which will be used if there is no translation of a translatable text in the end-user's language, even if the app has the language enabled

The initial default language is *English, United States*.

## 3 Adding Languages

You can add as many languages as you like from the list of supported languages by clicking **Add**, selecting the desired language, and clicking **OK**.

![](attachments/language/add-language.png)

Most languages will be added with an empty dictionary, although some translations have already been set up in the Dutch dictionary.

## 4 Advanced Language Settings{#advanced}

You can set each language in your app to have additional settings.

![Edit Language](attachments/language/edit-language.png)

### 4.1 Check Completeness

If you check the **Check completeness** box, you will get a warning (or error) message in the [Errors pane](errors-pane) for every text which has no entry in this language's dictionary.

If this is the default language, the **Check completeness** box will be checked and you will not be able to uncheck it.

### 4.2 Custom Date and Time Formatting

You can set a custom format for the following:

* **Date format**
* **Time format**
* **Date and time format**

Type a format string in the relevant box and you will see an example of how a date will be formatted underneath.

Click **Edit…** to open a dialog box which will provide a full reference for the format string:

![Date edit dialog](attachments/language/date-format.png)

## 5 List of Supported Languages

The most up-to-date list of supported languages in your version of Studio Pro is the one in the add languages menu. The list below is provided to enable you to quickly evaluate if Mendix supports your desired language.

| Language | Country | Locale |
| --- | --- | --- |
| Albanian | Albania | sq_AL |
| Amharic | Ethiopia | am_ET |
| Arabic | Algeria | ar_DZ |
| Arabic | Bahrain | ar_BH |
| Arabic | Egypt | ar_EG |
| Arabic | Iraq | ar_IQ |
| Arabic | Jordan | ar_JO |
| Arabic | Kuwait | ar_KW |
| Arabic | Lebanon | ar_LB |
| Arabic | Libya | ar_LY |
| Arabic | Morocco | ar_MA |
| Arabic | Oman | ar_OM |
| Arabic | Qatar | ar_QA |
| Arabic | Saudi Arabia | ar_SA |
| Arabic | Sudan | ar_SD |
| Arabic | Syria | ar_SY |
| Arabic | Tunisia | ar_TN |
| Arabic | United Arab Emirates | ar_AE |
| Arabic | Yemen | ar_YE |
| Armenian | Armenia | hy_AM |
| Belarusian | Belarus | be_BY |
| Bulgarian | Bulgaria | bg_BG |
| Catalan | Spain | ca_ES |
| Chinese (Simplified) | China | zh_CN |
| Chinese (Simplified) | Singapore | zh_SG |
| Chinese (Traditional) | Hong Kong | zh_HK |
| Chinese (Traditional) | Taiwan | zh_TW |
| Croatian | Croatia | hr_HR |
| Czech | Czech Republic | cs_CZ |
| Dari | Afghanistan | fa_AF |
| Danish | Denmark | da_DK |
| Dutch | Belgium | nl_BE |
| Dutch | Netherlands | nl_NL |
| English | Australia | en_AU |
| English | Canada | en_CA |
| English | India | en_IN |
| English | Ireland | en_IE |
| English | Malta | en_MT |
| English | New Zealand | en_NZ |
| English | Philippines | en_PH |
| English | Singapore | en_SG |
| English | South Africa | en_ZA |
| English | United Kingdom | en_GB |
| English | United States | en_US |
| Estonian | Estonia | et_EE |
| Finnish | Finland | fi_FI |
| French | Belgium | fr_BE |
| French | Canada | fr_CA |
| French | France | fr_FR |
| French | Luxembourg | fr_LU |
| French | Switzerland | fr_CH |
| German | Austria | de_AT |
| German | Germany | de_DE |
| German | Luxembourg | de_LU |
| German | Switzerland | de_CH |
| Greek | Cyprus | el_CY |
| Greek | Greece | el_GR |
| Hebrew | Israel | iw_IL |
| Hindi | India | hi_IN |
| Hungarian | Hungary | hu_HU |
| Icelandic | Iceland | is_IS |
| Indonesian | Indonesia | in_ID |
| Irish | Ireland | ga_IE |
| Italian | Italy | it_IT |
| Italian | Switzerland | it_CH |
| Japanese (Gregorian calendar) | Japan | ja_JP |
| Japanese (Imperial calendar) | Japan | ja_JP_JP |
| Khmer | Cambodia | km_KH |
| Korean | South Korea | ko_KR |
| Lao | Laos | lo_LA |
| Latvian | Latvia | lv_LV |
| Lithuanian | Lithuania | lt_LT |
| Macedonian | Macedonia | mk_MK |
| Malay | Malaysia | ms_MY |
| Maltese | Malta | mt_MT |
| Mongolian | Mongolia | mn_MN |
| Myanmar (Burmese) | Myanmar | my_MM |
| Nepali | Nepal | ne_NP |
| Norwegian (Bokmål) | Norway | no_NO |
| Norwegian (Nynorsk) | Norway | no_NO_NY |
| Pashto | Afghanistan | ps_AF |
| Persian (Farsi) | Iran | fa_IR |
| Persian (Farsi) | Tajikistan | fa_TJ |
| Polish | Poland | pl_PL |
| Portuguese | Brazil | pt_BR |
| Portuguese | Portugal | pt_PT |
| Romanian | Romania | ro_RO |
| Russian | Russia | ru_RU |
| Serbian (Cyrillic) | Bosnia and Herzegovina | sr_BA |
| Serbian (Cyrillic) | Serbia and Montenegro | sr_CS |
| Slovak | Slovakia | sk_SK |
| Slovenian | Slovenia | sl_SI |
| Somali | Somalia | so_SO |
| Spanish | Argentina | es_AR |
| Spanish | Bolivia | es_BO |
| Spanish | Chile | es_CL |
| Spanish | Colombia | es_CO |
| Spanish | Costa Rica | es_CR |
| Spanish | Dominican Republic | es_DO |
| Spanish | Ecuador | es_EC |
| Spanish | El Salvador | es_SV |
| Spanish | Guatemala | es_GT |
| Spanish | Honduras | es_HN |
| Spanish | Mexico | es_MX |
| Spanish | Nicaragua | es_NI |
| Spanish | Panama | es_PA |
| Spanish | Paraguay | es_PY |
| Spanish | Peru | es_PE |
| Spanish | Puerto Rico | es_PR |
| Spanish | Spain | es_ES |
| Spanish | United States | es_US |
| Spanish | Uruguay | es_UY |
| Spanish | Venezuela | es_VE |
| Swedish | Sweden | sv_SE |
| Swahili | Kenya | sw_KE |
| Swahili | Rwanda | sw_RW |
| Swahili | Tanzania | sw_TZ |
| Swahili | Uganda | sw_UG |
| Tagalog | Philippines | tl_PH |
| Thai (Western digits) | Thailand | th_TH |
| Thai (Thai digits) | Thailand | th_TH_TH |
| Turkish | Turkey | tr_TR |
| Ukrainian | Ukraine | uk_UA |
| Urdu | India | ur_IN |
| Urdu | Pakistan | ur_PK |
| Vietnamese | Vietnam | vi_VN |
| Welsh | Wales | cy_GB |
