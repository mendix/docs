## Script Overview

The script checkAliases.py goes through all of docs content and tries to help with keeping track of aliases. It is meant to do several things:

1. Combs through all of docs content files. If a doc has `aliases` or `mapped` parameters in their front matter data, it gets added to a list. Each doc in the list has the `title`, `url`, `mapped` and `aliases` parameters saved.
2. Using the list it can create an excel table from this data. This excel table is only meant to be created once. After it is populated for the first time it should be used to replace the current Mapping doc. 
3. The script takes an excel file (with columns `title`, `url`, `mapped` and `aliases`) and saves it as a list.
4. It orders both lists based on the URL of the entries.
5. It compares the ordered lists and logs any differences in compareDocsToExcel.log.
6. As a last step it loops through all of content docs again, checking if any alias entry is used in a cross reference link. If so, it's logged in aliasLinkWarnings.log.

## Assumptions

The script and its intended use assume the following:

* The script will initially be run on a local checkout of the repository.
* On the first run an excel table will be generated. This excel table will replace the current Mapping doc. This will be done by porting over any useful information from the Mapping doc into the excel table.
* A new front matter parameter `mapped: true` will be added to docs that are mapped from other Mendix products. The parameter does not need to be present for the initial table creation, but should be present in content files for any subsequent script run. This enables better tracking of mapped files through the repo and the excel table. The idea is to add `mapped: true` to any doc that is mapped, as well as "mapped" to any document entry in the excel table, under column "Front matter".
* After the inital table has been created, the function for its generation can be commented out of the script to skip.
* It is possible to comment out (skip) the check for aliases within cross references.

## Script Dependencies

The script has been tested on Python version 3.10.5.

The package dependencies for the script can be found in file checkAliases-requirements.txt. To install dependencies for running the script via pip run:

`python -m pip install -r checkAliases-requirements.txt`
