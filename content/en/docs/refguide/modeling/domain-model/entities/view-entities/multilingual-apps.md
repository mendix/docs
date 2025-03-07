---
title: "Multilingual Apps and Translations"
url: /refguide/multilingual-apps/
weight: 50
---

## Introduction

Use view entities to create apps that provide translations for your users.

## Use Case

For this purpose of this use case, the following domain model is used:

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/multilingual-apps/domain-model.png" >}}

The entity *ProductTranslation* contains a translation of a product’s description to a language indicated by *LanguageCode*. *LanguageCode* is a standard 5-letter language-country code (for example, `en_US`, `nl_NL`, `ko_KR`).

The descriptions in the default language (in this example, `en_US`) are stored in the *Product* entity, whereas translated descriptions (`nl_NL` and `ko_KR`) are stored in *ProductTranslation*. 

## Create an Overview Page

To use a view entity that translates languages, ensure your app supports multiple languages. Follow the steps below:

1. Open your **App Settings** and click the **Languages** tab.
2. Click **Add** and use the drop-down to select the language (or languages) you want to include in your app.
3. Click **OK** > **OK**.

Combine the languages in the two entities into a single view. To do this, join the *Product* and *ProductTranslation* entities by creating a new view entity.

1. Open your domain model and add a new view entity named *AllProductTranslationVE*.
2. Add the following query for your entity:

    ```sql
    SELECT
        p.ProductId as ProductId,
        p.ProductName as ProductName,
        p.QuantityPerUnit as QuantityPerUnit,
        p.Discontinued as Discontinued,
        pt.LanguageCode as LanguageCode,
        coalesce(pt.Description, p.Description) as Description
    FROM Shop.Product p
        JOIN p/Shop.ProductTranslation_Product/Shop.ProductTranslation pt
    UNION
    SELECT
        p.ProductId as ProductId,
        p.ProductName as ProductName,
        p.QuantityPerUnit as QuantityPerUnit,
        p.Discontinued as Discontinued,
        cast('en_US' as STRING) as LanguageCode,
        p.Description as Description
    FROM Shop.Product p
    ```
    
    {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/multilingual-apps/all-product-translation-ve.png" width="200" >}}

3. Filter the translation that corresponds to the user’s current language by creating a new view entity. Name this new entity *TranslatedProductVE*.
4. Add the query below to your entity:

    ```sql
    SELECT
        pt.ProductId as ProductId,
        pt.ProductName as ProductName,
        pt.QuantityPerUnit as QuantityPerUnit,
        pt.Discontinued as Discontinued,
        pt.LanguageCode as LanguageCode,
        pt.Description as Description
    FROM Shop.AllProductTranslationVE pt
        LEFT JOIN System.User as u on (u.ID = '[%CurrentUser%]')
        LEFT JOIN u/System.User_Language/System.Language as l
    WHERE (l.Code = pt.LanguageCode)
    ```

    {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/multilingual-apps/translated-product-ve.png" width="200" >}}

Alternatively, you can also combine the view entities into one with a nested query:

```sql
SELECT
  cp.ProductId as ProductId,
  cp.ProductName as ProductName,
  cp.QuantityPerUnit as QuantityPerUnit,
  cp.Discontinued as Discontinued,
  cp.Description as Description,
  cp.LanguageCode as LanguageCode
FROM
(
  SELECT
    p.ProductId as ProductId,
    p.ProductName as ProductName,
    p.QuantityPerUnit as QuantityPerUnit,
    p.Discontinued as Discontinued,
    pt.LanguageCode as LanguageCode,
    coalesce(pt.Description, p.Description) as Description
  FROM Shop.Product p
    JOIN p/Shop.ProductTranslation_Product/Shop.ProductTranslation pt
  UNION
  SELECT
    p.ProductId as ProductId,
    p.ProductName as ProductName,
    p.QuantityPerUnit as QuantityPerUnit,
    p.Discontinued as Discontinued,
    cast('en_US' as STRING) as LanguageCode,
    p.Description as Description
  FROM Shop.Product p
) as cp
  LEFT JOIN System.User as u on (u.ID = '[%CurrentUser%]')
  LEFT JOIN u/System.User_Language/System.Language as l
WHERE (l.Code = cp.LanguageCode)
```

5. Generate an overview page for the view entity by right-clicking **TranslatedProductVE** > **Generate overview pages**. 
6. Open the new page and remove the columns you do not need from the data grid.
7. Run your app locally. You should see the product description in the language that corresponds to the user’s current language. 
