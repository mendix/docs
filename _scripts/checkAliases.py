"""
checkAliases.py goes through all .md files to grab 'aliases' parameter in front matter
It goes through every .md file within given startDir.
It outputs a JSON list of all files containing aliases.
It outputs a CSV list of all files containing aliases.
It goes through content again to check all cross-reference links against aliases list.
It outputs the aliases in cross-references to warnings.log
"""
import generics
import tableFunctions
import frontmatter
from markdown_it import MarkdownIt
from markdown_it.tree import SyntaxTreeNode
import json
import pathlib

# Add front matter to list of dict entries
def addItem(post):
    # Grabs front matter data
    aliases = post.get("aliases")
    title = post.get("title")
    url = post.get("url")
    map = post.get("mapped")
    # Creates a dictionary entry for file with aliases
    append =  False
    itemDict = {"Title": title, "URL": "docs.mendix.com" + url, "Front matter": "", "aliases": aliases}

    # If 'aliases' exists in front matter
    if aliases != None:
        # Flags append
        append =  True
        # Each entry of alias in a file gets added to aliasCompare list
        for each in aliases:
            aliasCompare.append(each)
    # If 'mapped' exists in front matter and is true
    if map == True:
        # Flags append
        append = True
        # Appends dictionary to aliasList if doc is mapped
        itemDict["Front matter"] = "mapped"
    # Appends dictionary to aliasList
    if append == True:
        aliasList.append(itemDict)

# Checks for the use of aliases in cross reference links
def aliasCheck(post, relDir):
    # Calls Markdown class and sets type to GitHub-like
    md = MarkdownIt("gfm-like")
    # Makes text parsable, won't work with feeding file
    text = post.content
    # Gives Markdown tokens
    tokens = md.parse(text)
    # Takes tokens to create a SyntaxTree
    node = SyntaxTreeNode(tokens)

    # Walks through all tree nodes
    for node in node.walk():
        # If a node is a link type
        if node.type == "link":
            # Gives back the dict value of node attribute with key 'href'
            link = node.attrs['href']
            # Removes any anchor from link
            cleanedLink = link.split('#', maxsplit=1)
            # If the link contains anything before #
            if cleanedLink[0] != '':
                # Checks if the link is in the alias list
                if cleanedLink[0] in aliasCompare:
                    # If it is an alias, adds it to log
                    aliasLogger.warning('Link %s in file %s is an alias, please replace', cleanedLink[0], relDir)

# Go through .md file types
# Can toggle parsing of front matter
# Can toggle finding aliases in .md body content
def parseMdFile(filePath, frontMatterGrab=True, checkAlias=False):
    # creates a relative path from starting directory
    # used in logs
    relDir = filePath.relative_to(start)
    # Opens Markdown file
    with open(filePath, mode='r', encoding="utf-8") as file:
        # Loads .md file into post via frontmatter module
        post = frontmatter.load(file)
        # Flag for going through functions that parse front matter
        if frontMatterGrab == True:
            addItem(post)
        # Flag for going through content body to check for aliases used in cross references
        if checkAlias == True:
            # Calls function that checks aliases in cross references
            aliasCheck(post, relDir)

# Compare two lists and log the difference
# URL value of items in list is used as the first verification step. If URL values don't match the search loop is stopped.
def compareLists(list1: list, list2: list):
    # List for logger at end of comparison
    diff = []
    # For each item in docs content list
    for item in list1:
        # Set flags to empty/false for each item
        end1Flag = False
        list1Msg = ""
        title1Flag = False
        URL1Flag = False
        mapped1Flag = False
        alias1Flag = False
        # If item URL matches to URL already in diff list, it doesn't need to be checked again
        for d1 in diff:
            if item["URL"] == d1["URL"]:
                end1Flag = True
                break
        # As long as item URL is not in diff list, the loop below continues
        if end1Flag == False:
            # For each item in Excel list
            for i in list2:
                # If the item's URL from docs list and item's URL from Excel list don't match this part is skipped
                # If item values match, flags get set to true
                if item["URL"] == i["URL"]:
                    URL1Flag = True
                    if item["Title"] == i["Title"]:
                        title1Flag = True
                    if item["Front matter"] == i["Front matter"]:
                        mapped1Flag = True
                    if item["aliases"] == i["aliases"]:
                        alias1Flag = True
                    break
            # If all flags are false, the entire entry is not present in Excel
            # Depending on the flags, text gets added to the warning message
            if URL1Flag == False and title1Flag == False and mapped1Flag == False and alias1Flag == False:
                list1Msg += "| Entry missing from Excel |"
            else:
                # Each flag can be true or false separately from others, each is checked
                if URL1Flag == False:
                    list1Msg += "| URL mismatch"
                if title1Flag == False:
                    list1Msg += "| Title mismatch"
                if mapped1Flag == False:
                    list1Msg += "| Front matter mismatch"
                if alias1Flag == False:
                    list1Msg += "| Aliases mismatch"
            # If the warning message is not empty, add the item to the diff list
            if list1Msg != "":
                item["Warning"] = list1Msg
                diff.append(item)
    # Repeat loop with logic for opposite lists
    # For each item in Excel list
    for item in list2:
        # Set flags to empty/false for each item
        end2Flag = False
        list2Msg = ""
        title2Flag = False
        URL2Flag = False
        mapped2Flag = False
        alias2Flag = False
        # If item URL matches to URL already in diff list, it doesn't need to be checked again
        for d2 in diff:
            if item["URL"] == d2["URL"]:
                end2Flag = True
                break
        # As long as item URL is not in diff list, the loop below continues
        if end2Flag == False:
            # For each item in docs content list
            for i in list1:
                # If the item's URL from Excel list and item's URL from docs list don't match this part is skipped
                # If item values match, flags get set to true
                if item["URL"] == i["URL"]:
                    URL2Flag = True
                    if item["Title"] == i["Title"]:
                        title2Flag = True
                    if item["Front matter"] == i["Front matter"]:
                        mapped2Flag = True
                    if item["aliases"] == i["aliases"]:
                        alias2Flag = True
                    break
            # If all flags are false, the entire entry is not present in docs content
            # Depending on the flags, text gets added to the warning message
            if URL2Flag == False and title2Flag == False and mapped2Flag == False and alias2Flag == False:
                list2Msg += "| Doc missing in repo |"
            else:
                # Each flag can be true or false separately from others, each is checked
                if URL2Flag == False:
                    list2Msg += "| URL mismatch "
                if title2Flag == False:
                    list2Msg += "| Title mismatch "
                if mapped2Flag == False:
                    list2Msg += "| Front matter mismatch "
                if alias2Flag == False:
                    list2Msg += "| Aliases mismatch "
            # If the warning message is not empty, add the item to the diff list
            if list2Msg != "":
                item["Warning"] = list2Msg
                diff.append(item)
    # If the diff list is not empty then log results for each entry in list
    result = len(diff) == 0
    if not result:
        compareLogger.warning('The lists do not match! There are %d differences:',len(diff))
        for line in diff:
            compareLogger.warning('%d. %s', (diff.index(line)+1), line)

# Grab working directory
# TO DO - the hardcoded link will need changing
startDir = input('Specify FULL PATH to local content directory:\n(For example, C:\\Users\\user.name\\Documents\\docs\\content\\en\\docs\\) ')
start = pathlib.Path(startDir)

# Empty lists to help with parsing data
aliasList = []
aliasCompare = []

# Intitialize loggers for aliases and comparison
aliasLogger = generics.initLogger('aliasLog', 'aliasLinkWarnings.log')
compareLogger = generics.initLogger('compareLog', 'compareDocsToExcel.log')

# Walk through all directories and files to find .md files
dirList = generics.dirWalk(start, "**/*.md")

# For all .md files in dirList parse their front matter
for path in dirList:
    parseMdFile(path, frontMatterGrab=True, checkAlias=False)

# Uncomment and run lines below only if there is no mapping table
populateTablePrompt = input("Do you want to populate the mapping table? (Y/n)")
if populateTablePrompt.lower() == "y":
    tableName = input("What is the Excel table name?") + ".xlsx"
    tableFunctions.populateExcelFromList(aliasList, tableName)
else:
    pass

# Parse Excel file into managable list
tableToParse = input("Specify FULL PATH and name of Excel table to compare against content\n(For example, C:\\Users\\user.name\\Documents\\mapping-table.xlsx)")
myNewList = tableFunctions.createListFromExcel(tableToParse)

# Store all docs grabbed and all excel entries into sorted lists
# This is just for testing
docsList = sorted(aliasList, key=lambda x: x['URL'], reverse=False)
excelList = sorted(myNewList, key=lambda x: x['URL'], reverse=False)

# Writes a list of all aliases as a JSON file (list of dicts)
# Useful for troubleshooting or if one wants to compare the list results in JSON
# with open('listFromExcel.json', 'w') as logfile:
#     json.dump(excelList, logfile)
# with open('docsList.json', 'w') as logfile:
#     json.dump(docsList, logfile)

# Compares the lists, logs any differences
compareLists(docsList, excelList)

# For all .md files in dirList check their text body for aliases instead of proper relative URL in cross references
# Comment out to skip
for path in dirList:
    parseMdFile(path, frontMatterGrab=False, checkAlias=True)
