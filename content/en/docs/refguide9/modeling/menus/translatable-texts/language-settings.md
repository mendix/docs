---
title: "Language Settings"
url: /refguide9/language-settings/
weight: 50
---

## Introduction

Mendix is designed to be used by users in multiple languages. The **Languages** tab of the **App Settings** allows you to select which languages your app will support.

{{< figure src="/attachments/refguide9/modeling/menus/translatable-texts/language-settings/app-settings.png" width="550px" class="no-border" >}}

You can reach this tab in two ways:

1. Select the menu option **Language > Language Settings…**.
2. Open the **App{Name} > Settings** dialog box from the [App Explorer](/refguide9/app-explorer/) and select the **Language** tab.

## Setting Default Language

There must be a default app language. Select the **Default language** from the drop-down list. This will contain all languages which have been added to your app. It is recommended that you do this when you start developing your app.

Setting the default language has two functions:

* It sets the language which will be displayed to the end-user if the end-user is not associated with a Language entity, or if the end-user's language is not enabled in the app
* It sets the language which will be used if there is no translation of a translatable text in the end-user's language, even if the app has the language enabled

The initial default language is *English, United States*.

## Adding Languages

You can add as many languages as you like from the list of supported languages by clicking **Add**, selecting the desired language, and clicking **OK**.

{{< figure src="/attachments/refguide9/modeling/menus/translatable-texts/language-settings/add-language.png" width="500px" class="no-border" >}}

Most languages will be added with an empty dictionary, although some translations have already been set up in the Dutch dictionary. 

## Advanced Language Settings{#advanced}

You can set each language in your app to have additional settings.

{{< figure src="/attachments/refguide9/modeling/menus/translatable-texts/language-settings/edit-language.png" width="550px" alt="Edit Language" class="no-border" >}}

### Check Completeness

If you check the **Check completeness** box, you will get a warning (or error) message in the [Errors pane](/refguide9/errors-pane/) for every text which has no entry in this language's dictionary.

If this is the default language, the **Check completeness** box will be checked and you will not be able to uncheck it.

### Custom Date and Time Formatting

You can set a custom format for the following:

* **Date format**
* **Time format**
* **Date and time format**

Type a format string in the relevant box and you will see an example of how a date will be formatted underneath.

Click **Edit…** to open a dialog box which will provide a full reference for the format string:

{{< figure src="/attachments/refguide9/modeling/menus/translatable-texts/language-settings/date-format.png" width="550px" alt="Date edit dialog" class="no-border" >}}

## List of Supported Languages {#supported-languages}

The most up-to-date list of supported languages in your version of Studio Pro is the one in the add languages menu. 

{{% alert color="info" %}}

You cannot add custom languages that are not listed in supported languages below. 

{{% /alert %}}

The list below is provided to enable you to quickly evaluate if Mendix supports your desired language.

| Language | Region | Locale | Available Since |
| --- | --- | --- | --- |
| Albanian | Albania | sq_AL | 9.0.5 |
| Amharic | Ethiopia | am_ET | 9.2.0 |
| Arabic | Algeria | ar_DZ | 9.0.5 |
| Arabic | Bahrain | ar_BH | 9.0.5 |
| Arabic | Egypt | ar_EG | 9.0.5 |
| Arabic | Iraq | ar_IQ | 9.0.5 |
| Arabic | Jordan | ar_JO | 9.0.5 |
| Arabic | Kuwait | ar_KW | 9.0.5 |
| Arabic | Lebanon | ar_LB | 9.0.5 |
| Arabic | Libya | ar_LY | 9.0.5 |
| Arabic | Morocco | ar_MA | 9.0.5 |
| Arabic | Oman | ar_OM | 9.0.5 |
| Arabic | Qatar | ar_QA | 9.0.5 |
| Arabic | Saudi Arabia | ar_SA | 9.0.5 |
| Arabic | Sudan | ar_SD | 9.0.5 |
| Arabic | Syria | ar_SY | 9.0.5 |
| Arabic | Tunisia | ar_TN | 9.0.5 |
| Arabic | United Arab Emirates | ar_AE | 9.0.5 |
| Arabic | Yemen | ar_YE | 9.0.5 |
| Armenian | Armenia | hy_AM | 9.2.0 |
| Belarusian | Belarus | be_BY | 9.0.5 |
| Bengali | Bangladesh | bn_BD | 9.3.0 |
| Bengali | India | bn_IN | 9.3.0 |
| Bulgarian | Bulgaria | bg_BG | 9.0.5 |
| Catalan | Spain | ca_ES | 9.0.5 |
| Chinese (Mandarin) | China | zho_CN | 9.18.0 |
| Chinese (Simplified) | China | zh_CN | 9.0.5 |
| Chinese (Simplified) | Singapore | zh_SG | 9.0.5 |
| Chinese (Traditional) | Hong Kong, China | zh_HK | 9.0.5 |
| Chinese (Traditional) | Taiwan, China | zh_TW | 9.0.5 |
| Croatian | Croatia | hr_HR | 9.0.5 |
| Czech | Czech Republic | cs_CZ | 9.0.5 |
| Dari | Afghanistan | fa_AF | 9.2.0 |
| Danish | Denmark | da_DK | 9.0.5 |
| Dutch | Belgium | nl_BE | 9.0.5 |
| Dutch | Netherlands | nl_NL | 9.0.5 |
| English | Australia | en_AU | 9.0.5 |
| English | Canada | en_CA | 9.0.5 |
| English | India | en_IN | 9.0.5 |
| English | Ireland | en_IE | 9.0.5 |
| English | Malta | en_MT | 9.0.5 |
| English | New Zealand | en_NZ | 9.0.5 |
| English | Philippines | en_PH | 9.0.5 |
| English | Singapore | en_SG | 9.0.5 |
| English | South Africa | en_ZA | 9.0.5 |
| English | United Kingdom | en_GB | 9.0.5 |
| English | United States | en_US | 9.0.5 |
| Estonian | Estonia | et_EE | 9.0.5 |
| Finnish | Finland | fi_FI | 9.0.5 |
| French | Belgium | fr_BE | 9.0.5 |
| French | Canada | fr_CA | 9.0.5 |
| French | France | fr_FR | 9.0.5 |
| French | Luxembourg | fr_LU | 9.0.5 |
| French | Switzerland | fr_CH | 9.0.5 |
| German | Austria | de_AT | 9.0.5 |
| German | Germany | de_DE | 9.0.5 |
| German | Luxembourg | de_LU | 9.0.5 |
| German | Switzerland | de_CH | 9.0.5 |
| Greek | Cyprus | el_CY | 9.0.5 |
| Greek | Greece | el_GR | 9.0.5 |
| Hebrew | Israel | iw_IL | 9.0.5 |
| Hindi | India | hi_IN | 9.0.5 |
| Hungarian | Hungary | hu_HU | 9.0.5 |
| Icelandic | Iceland | is_IS | 9.0.5 |
| Indonesian | Indonesia | in_ID | 9.0.5 |
| Irish | Ireland | ga_IE | 9.0.5 |
| Italian | Italy | it_IT | 9.0.5 |
| Italian | Switzerland | it_CH | 9.0.5 |
| Japanese (Gregorian calendar) | Japan | ja_JP | 9.0.5 |
| Japanese (Imperial calendar) | Japan | ja_JP_JP | 9.0.5 |
| Kazakh | Kazakhstan | kk_KZ | 9.10.0 |
| Khmer | Cambodia | km_KH | 9.0.5 |
| Kinyarwanda | Rwanda | rw_RW | 9.3.0 |
| Korean | South Korea | ko_KR | 9.0.5 |
| Lao | Laos | lo_LA | 9.0.5 |
| Latvian | Latvia | lv_LV | 9.0.5 |
| Lithuanian | Lithuania | lt_LT | 9.0.5 |
| Macedonian | Macedonia | mk_MK | 9.0.5 |
| Malay | Malaysia | ms_MY | 9.0.5 |
| Maltese | Malta | mt_MT | 9.0.5 |
| Mongolian | Mongolia | mn_MN | 9.2.0 |
| Myanmar (Burmese) | Myanmar | my_MM | 9.0.5 |
| Nepali | Nepal | ne_NP | 9.2.0 |
| Norwegian (Bokmål) | Norway | no_NO | 9.0.5 |
| Norwegian (Nynorsk) | Norway | no_NO_NY | 9.0.5 |
| Pashto | Afghanistan | ps_AF | 9.2.0 |
| Persian (Farsi) | Iran | fa_IR | 9.2.0 |
| Persian (Farsi) | Tajikistan | fa_TJ | 9.2.0 |
| Polish | Poland | pl_PL | 9.0.5 |
| Portuguese | Brazil | pt_BR | 9.0.5 |
| Portuguese | Portugal | pt_PT | 9.0.5 |
| Punjabi | Pakistan | pa_PK | 9.3.0 |
| Punjabi | India | pa_IN | 9.3.0 |
| Romanian | Romania | ro_RO | 9.0.5 |
| Russian | Russia | ru_RU | 9.0.5 |
| Serbian (Cyrillic) | Bosnia and Herzegovina | sr_BA | 9.0.5 |
| Serbian (Cyrillic) | Montenegro | sr_ME | 9.14.0 |
| Serbian (Cyrillic) | Serbia | sr_RS | 9.14.0 |
| Sinhala | Sri Lanka | si_LK | 9.3.0 |
| Slovak | Slovakia | sk_SK | 9.0.5 |
| Slovenian | Slovenia | sl_SI | 9.0.5 |
| Somali | Somalia | so_SO | 9.2.0|
| Spanish | Argentina | es_AR | 9.0.5 |
| Spanish | Bolivia | es_BO | 9.0.5 |
| Spanish | Chile | es_CL | 9.0.5 |
| Spanish | Colombia | es_CO | 9.0.5 |
| Spanish | Costa Rica | es_CR | 9.0.5 |
| Spanish | Dominican Republic | es_DO | 9.0.5 |
| Spanish | Ecuador | es_EC | 9.0.5 |
| Spanish | El Salvador | es_SV | 9.0.5 |
| Spanish | Guatemala | es_GT | 9.0.5 |
| Spanish | Honduras | es_HN | 9.0.5 |
| Spanish | Mexico | es_MX | 9.0.5 |
| Spanish | Nicaragua | es_NI | 9.0.5 |
| Spanish | Panama | es_PA | 9.0.5 |
| Spanish | Paraguay | es_PY | 9.0.5 |
| Spanish | Peru | es_PE | 9.0.5 |
| Spanish | Puerto Rico | es_PR | 9.0.5 |
| Spanish | Spain | es_ES | 9.0.5 |
| Spanish | United States | es_US | 9.0.5 |
| Spanish | Uruguay | es_UY | 9.0.5 |
| Spanish | Venezuela | es_VE | 9.0.5 |
| Swedish | Sweden | sv_SE | 9.0.5 |
| Swahili | Kenya | sw_KE | 9.2.0 |
| Swahili | Rwanda | sw_RW | 9.2.0 |
| Swahili | Tanzania | sw_TZ | 9.2.0 |
| Swahili | Uganda | sw_UG | 9.2.0 |
| Tagalog | Philippines | tl_PH | 9.2.0 |
| Tamazight | Morocco | tzm_MA | 9.18.0 |
| Tamil | India | ta_IN | 9.3.0 |
| Tamil | Sri Lanka | ta_LK | 9.3.0 |
| Tamil | Singapore | ta_SG | 9.3.0 |
| Thai (Western digits) | Thailand | th_TH | 9.0.5 |
| Thai (Thai digits) | Thailand | th_TH_TH | 9.0.5 |
| Tigrinya | Eritrea | ti_ER | 9.23.0 |
| Turkish | Turkey | tr_TR | 9.0.5 |
| Ukrainian | Ukraine | uk_UA | 9.0.5 |
| Urdu | India | ur_IN | 9.2.0 |
| Urdu | Pakistan | ur_PK | 9.2.0 |
| Vietnamese | Vietnam | vi_VN | 9.0.5 |
| Welsh | Wales | cy_GB | 9.0.5 |

## List of Deprecated Languages

You can find the list of deprecated languages in the table below:

| Language                     | Region                | Locale   | Available Since | Deprecated In |
| ---------------------------- | --------------------- | -------- | --------------- | ------------- |
| Japanese (Imperial calendar) | Japan                 | ja_JP_JP | 9.0.5           | 9.6.0         |
| Serbian (Cyrillic)           | Serbia and Montenegro | sr_CS    | 9.0.5           | 9.14.0        |
