---
title: "2.12"
parent: "ats-2"
---


## 2.12

**Release date: July 21th 2019**

## Test step settings

We are very excited to bring you new features that are geared to make it easier to create and modify tests with ATS. With this new release we are bringing additional settings for test steps that allow you to:

* disable a test step
* abort execution on not passed
* negate the assert in a test case 

### Disabling a test step

This feature lets you temporarily disable a test step without deleting it. This is similar to commenting out lines of code. Use this to test how the test script behaves without certain steps. If it turns out that the step is needed, simple enable it again. This feature can be used in test suites, test cases and actions.

![Disable](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/619eb49a-cac1-4305-b59d-757800bb3fb5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45FVQR2QYA%2F20190721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190721T115008Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIFiNYeOxsntazHdeTmn8asFYyhM0zTejfc8T%2B6%2FJ2XHyAiAcIOULENjUfHgz7BYAmCExkve03%2BuXG1v%2Br2MlLY24gyrjAwig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI3NDU2NzE0OTM3MCIMDgc9NIUtGYV6Gc2RKrcDOQUMzsO9sudNxGKD9LawgA216piHPMSbZTxfGCaNGEsKFitaftTYebGK2NjaVjT%2FlkArsjUofOIW%2BEiZ7oXN85XTJz40NXVV1QhzIIgIk4CoterinsnIie%2B%2FK0xDvXuQXXwFDqcnV1hP6aQnkVonDEpCzTfjErhDbKpRVOs%2B52rEoscc6MAIlBdWWZzQc2EdgwDONSzNl4syApwclMtY7ecYFeuqwKUIGCagnKdr%2FDHEZ2q2o56Kv%2BVtzZ2ONPCcUPVwdtPe6N37PJO%2FVrh%2FsMWHL7KnPP79%2FLvHaRTA8dCIKox367wA%2FJZtY7rO%2FxET6iMTvsSsba%2BRyimV%2BSmnHTDaIMpVXacCd2Bc43NIxGitaxwicKM3YG8%2BcHTfHO0rSDEoaNNRh1xEFx%2Fzuy8PfCCPCJgZ9F%2BdBXk%2FFRlwrBmdcfYLd21KKUVOa4kr%2Bd7MGRvT44VFtifdqya6SVRnT10OY7vSofSfArlaR84l5MMHOeDeQuVqFV1tlabb4mORKT5O4pTdopSZAk6UglISTNsWSTsdLgI9LOFZcz%2B9%2B8V87XiB6MJQn0g6frFEAHJYfDtI6wpzTTCtjNDpBTq1AdFjods8ylgKMGG%2ForyIDtos3gwCJa8RhheKNidna9W362iSmIyYm9kqdWKd%2Fi3OdKRLYqFfdEI%2BgWVPqpuxCSpUJPrZwzVqM5Vy08GG7D%2F32KQ%2F0WzuWpNrwig3nNNZSoUtm%2F7Psdhj%2FF86x1XWdb9oxsT%2B26R1GJV012A0L3yFOAqpUlBACKlH5wVj4ye1%2BEjJd3iRUQTZngm6jRX7ZCC7%2ByqVjsqyZBTmWtreNCIY2ge3qCQ%3D&X-Amz-Signature=bf09c6ccfa67a8aa90edab27861f750a549d7c35489ade9f15f410897ce0eae7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)


### Abort execution on not passed

We have often seen that large test suites need a kind of setup script at the beggining that creates certain data and other conditions. When case this script fails, it makes no sense to continue with the execution of the test suite anymore. This is exaclty the scenario that we had in mind when we created this feature. When a step is flaged as abort not passed, then if it is not passed any subsequent test steps will not be executed. This saves time and money. The feature is only available for test suites with sequential execution.

![abort](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1404f3b4-7c0b-4419-85a1-d292fcd47d38/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45NVEI7KMV%2F20190721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190721T115403Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCxUZO4M9SAaUReqLLnW4Q50P0NmgHfnAtvfY8tcnq0IgIhAJsrYTfHsJNYrMfY2F4TImKchXRAHRJ4cHVKqDktoiwlKuMDCKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjc0NTY3MTQ5MzcwIgyHgFnMeSdjVo37kEwqtwOmP7UWhlWWxasDt2F3biR7INx5tBNE9MEm7SZ0GZMe2nA%2BwIJUTNLVx87GCHKQZHrrEojO8ihQJtVWG2BCStoeEzzxSQxK3zZf%2BskBQ9bd2bOZcRc%2BPXS6tQZob%2BipzvCfKWzoiq1AMZzf%2Fv6HaMHeSgZdiTkZFaySAKZM03iYKkwNZj2Iiz279B%2FDUsgJcZYINdgv83CuU3iTpmdJAwsTSRw182D%2FYX%2BHYPnR9RdCYrUkOlkJJ04qkCjNrbuk1Nrc413mqmOk%2BpRvoob6z8Ev5H2hGXHZYjfbwi4DOEq2H48pygbK4n4z0hBMchImgwnmvieqt6LrmCrIJuplajicJ1zwPhR%2B2cIjXek%2BkSCPbzuZ3SfasHKwH8GSte3a5uPYs16lbN5hsjmwzZk6Hka8qw%2F7TNL%2B6xbOZd%2BQJMF%2F2U%2FLAzZCH3W9qc2sFW%2FxSbNUWVlOz1YLi42VDUPoqJ6JQCVbOZhvsDdU37ORllTInMsjraovtAQXEZe3uYsFmGmMe5n3JW%2BPLfATvHJXpnmr4tcJ6Azq4wDGQ7CFBRZhHLwmxZulZEYidS0IIqK68HIKOipG7CqQMIeN0OkFOrMBvMno%2BCjCZq2KzNMm4p5yg0uH8R3nOU%2FDXY9Uh4WAiVXjVND7IckaHYgjaqegzFap1rdXjT56Ynf5ERfdag7yER9mXIGEmn2rXd1EvbruHw2Aly2fBkO%2Fqfs%2Fc10GhoZK%2FrrGe6Cbyl70Rg94p3q%2BbTBTDKBgdEIFaGKch0a8Of8629PWzXWOurMkhwgLq6%2BVRUo%2FOKtryzho3wx6ig4KJ4nUOjoskPrz9sWrEBhPp%2BUFIXI%3D&X-Amz-Signature=4107686f6c5822230036e79a8d2dd6729e355283c453f557292f1ba4902f6f89&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

### Negate test result

Most of the time, tests assert the presence of elements on a page and assert that text or number have an expected value. However, sometimes there is a need to assert the opposite i.e. assert that an element is **not** on the page, or that a text does not have a certain value. This is now possible with the negate toggle. 

![negate](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/155ef4fb-3a4c-4936-b154-3a3432fef585/2019-06-17_10_33_20-ATS_-_Application_Test_Suite_-_Test_Case_Details.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45GI4PYI4L%2F20190721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190721T115723Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICa4XwFrknO%2B9Mt1DpMafBw4NwGabCKtSkr7cFQ342L%2FAiEA3QmO0wVoOHpiA2CJEJg0SPoDYe93Brmk%2BsCre2kY1OMq4wMIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNzQ1NjcxNDkzNzAiDE7SK1n89fcIhtQ9TSq3A1KVFkmR1KyydGuEIQ%2FYLVETsbAtWk7zhx4jSVNAXDyJNosCqncEhvmlMclCCVV1KsNTiP9CjTZh%2F0%2FQN%2B%2FgPJ%2BCegKCcWH4ESneTTa0dri7ngH60ohFm51sY3UxG3YchtzyyeqVIU21u5Bbf0YKHYzmN1iEtjPxlKscLwPtB%2BeJMUQ4MEH1HYcJx999DxK1f%2B9wvfHSvgDnZ0pwbAJtQw95CgCWskedPNSD%2FGRyWUnHR8F8ew4xxknsPbuW%2F3kpTUJrPz5VOlXZVZOCxfRhh6xSEsdpyes%2BtiuC9hAEm1TWer9HlpOSBPk9WqSyJZ098%2FnbTpVkaao6qgjbAUcvAU%2FJwU6xuM%2Bcq10B535aFPf8DCyVwnxfwCWWfU95ZMva%2BtVLUzyPm4N%2BCLn%2B%2F7AP1WX1Miz9dMR%2F%2FI%2FzLtYer%2F%2BM46It%2BnKGFlkEN1y8NGReklIJ%2BtZzZGMEbA4nqxlBDMZdJMuyMBQ%2B1h0QfGhBECvAAB%2FXxQZZPbKH12vQYgUyqmbtGXj%2FJcXrtMYv%2FwvY%2Bm6CEHjc8aP9zp%2FGC0haYyyWS0NpLQrfPp70p1SL%2BsAuvU3sK5yt8YMwmpjR6QU6tAGK3W%2BEWXnPMXwqGBntt0ED7ujSez3TUFbvFt5nuKIYdjjs0TRiGTsC7mh%2B0qziL6NR18X%2FUE9fH10BLvLeLzVjo1b43ruw84CYk4NETAdkaMZun1uiuii8%2BYPkIHQ06c9s8W0rXUsWGNtkYUocve7TyPvNB3aIVF%2FM2uinASIaYlhylq1VvIRO2vsRbslfpyIhjdMxo%2FDSItD%2ByJCG4z8VREu%2Bl8yKGd9Zy6k8U%2FtXh86StB8%3D&X-Amz-Signature=0313d8b80251a60f9295efd44de0ecba8ff921181973cf3714f571997af96578&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%222019-06-17_10_33_20-ATS_-_Application_Test_Suite_-_Test_Case_Details.png%22)

Here is a complete list of all the functions that can be negated.
```
> Logic
    > Assert Contains String
    > Assert endsWith
    > Assert startsWith
    > Assert equalTo¹
    > Assert equalToIgnoringCase
    > Assert equalToIgnoringWhitespace

> Web
    > Assert Element Attribute Equals
    > Assert Element Matches Selector
    > Find Element
    > Find Element By Id
    > Find Element By CSS
    > Find Element By Sizzle

> Mendix
    > Assert Current Page Title

> Widget:Find
    > Find Checkbox Set Selector
    > Find DataGrid Row
    > Find/Assert Dialog
    > Find Grid Selector
    > Find Item/Row
    > Find Menu Item
    > Find Selected Item/Row
    > Find Widget Child Node
    > Find/Assert Widget

> Widget:Assert
    > Assert Active Tab Name
    > Assert Checkbox Set Selector Value
    > Assert Checkbox Value
    > Assert Grid Selector Value
    > Assert Simple Checkbox Set Selector Value
    > Assert Validation Message

¹  Assert not equalTo, assert null, assert not null, assert not true and assert not false have all been deprecated in favor of Assert equalTo. If these functions were used in a test case or an action they have been automatically replaced with a Assert equalTo with the correct Negate value.
```

### Improvements

* Reduce the timeout for Set Value from 60 seconds to 5 seconds. This helps the test fail faster when a widget is not found or not editable.

### Fixes

* We fixed a bug where the function name was not shown for a test step with no parameters (for test cases and actions). 
* We fixed a bug where in rare circumstances logs would be missing for test cases.
* We fixed a bug where in some cases ATS will not wait for the page to load after logging in.
