import json
import os
import copy
import fileinput
import re

jsonToParse = input('Specify JSON file (cleaned up to be a list of dicts): ')

# grab working directory
startDir = input('Specify FULL PATH to local content directory: ')
# change current working directory
os.chdir(startDir)
# print new working directory
print('\nCurrent working directory: ', os.getcwd(), end='\n')

# The top argument for walk
topdir = '.'
# The extension to search through
exten = '.md'

results = str()
categories = str()
myList = []
urlList = []
baseParent = []
childrenOfCategories = []
childrenOfParents = []
childrenOfParentsCopy = []
parents = []
catList = []
attLeftover = []
attList = []
attItems = str()

# returns dictionary item from a list of dictionaries if value is part of item
# used to return item from urlList, to feed proper link to replace old one
def itemIn(key, value, list_dicts, jsonToParse, currDir):

    if value[len(value)-1] != '/':
        value = value+'/'
    if value[0] != '/':
        value = '/'+value
    strippedList = jsonToParse.rsplit('\\')
    stripped1 = strippedList[len(strippedList)-1]
    stripped2 = stripped1.rsplit('.json')
    strippedName = stripped2[0]
    for item in list_dicts:
        if item[key].endswith(value):
            if value.count('/') == 2:
                if item[key].startswith('/'+strippedName+'/') and currDir in item["Dir"]:
                    return item
                elif item[key] == value:
                    return item
            elif value.count('/') >= 3:
                return item

# returns dictionary item from a list of dictionaries
def nextItem(key, value, value2, list_dicts):
    for item in list_dicts:
        if item[key] == value and item["d"] in value2:
            return item

# returns dictionary item from a list of dictionaries & checks if directory is the same
def nextItemWithDirCheck(key, value, directory, list_dicts):
    for item in list_dicts:
        altPath = '.' + item["d"].replace('/', os.sep)
        altPathClean = altPath[:-1]
        if (item[key] == value) and (directory == altPathClean):
            return item

# moves attachment files to new locations and changes references to them in files
#only works for clean references, nothing above dir where the md file is
def attachmentChangeMove(oldPath, dirpath, newDirAtt, name):
    #pattern to find any 'attachment' between () in a line, will capture the last ) in line
    fullAttachmentRefSearch = '(?<=\]\().*?attachments/(.*)?\)'
    #pattern to search against - check to change search param to start with: (?<!)\[(.+?)\] - just needs testing against group numbers
    attNameSearch = '(?<=\]\().*?attachments/([-./\+\w]*?)([-.\+\w= ]*)\)'
    logName = str()
    #define new dir for attachment
    newAttDir = startDir.replace('content\\', '') + 'static\\attachments' + newDirAtt.replace('/', os.sep)
    #go through .md file line by line
    with fileinput.input(os.path.join(dirpath, name), inplace=True, backup='', encoding="utf-8") as file:
        for line in file:
            oldAttDir = ''
            stringToSearch = line
            lineReplacement = ''
            while len(stringToSearch) > 0:
                fullSearch = re.search(fullAttachmentRefSearch,stringToSearch)
                strictSearch = re.search(attNameSearch,stringToSearch)
                if fullSearch != None and strictSearch == None:
                    entry = {"file": name, "path": dirpath, "line No.": fileinput.filelineno(), "match": fullSearch.group()}
                    logName += 'FS %s\n' % entry
                #if there's a match to the strict pattern
                if strictSearch != None:
                    matched = strictSearch

                    firstIndex = matched.start()
                    lastIndex = matched.end()
                    insert = ''
                    newFileDir = ''
                    newFilePath = ''
                    attachmentListEntry = ''
                    #should give back the old attachment path reference
                    oldAttDir = matched.group().strip('()')
                    oldFilePath = oldPath + '\\' + oldAttDir.replace('/', os.sep)
                    #gives back the name of the attachment
                    attName = matched.group(2)
                    #check to make sure there still is a file in path, otherwise os.replace errors
                    fileInOldDir = os.path.exists(oldPath + '\\' + oldAttDir.replace('/', os.sep))
                    #excludes any results with more than './' preceding 'attachments'
                    if oldAttDir.find('attachments') > 2 or fileInOldDir is False:
                        insert = matched.group()
                        entry = {"file": name, "path": dirpath, "line No.": fileinput.filelineno(), "match": matched.group()}
                        #saves the excluded to a list to run through later
                        attLeftover.append(entry)
                        logName += 'RP %s\n' % entry
                    else:
                        # if the (.md) file name is not part of the new attachment path, add it
                        if (matched.group(1) == '' or newDirAtt.replace('//', '/').endswith(name[:-(len(exten))] + '/') == False) and name != "_index.md":
                            insert = ('/attachments/' + newDirAtt + name[:-(len(exten))] + '/' + attName + ')').replace('//', '/')
                            newFileDir = newAttDir + name[:-(len(exten))]
                            newFilePath = newFileDir + '\\' + attName
                        else:
                            insert = ('/attachments/' + newDirAtt + attName + ')').replace('//', '/')
                            newFileDir = newAttDir
                            newFilePath = newFileDir + attName
                        attachmentListEntry = (newFilePath.replace(os.sep, '/')).replace('//', '/')
                        entry = {"file": name, "path": dirpath, "line No.": fileinput.filelineno(), "match": matched.group(), "newInsert": insert, "newPath": attachmentListEntry}
                        os.makedirs(newFileDir, exist_ok=True)
                        os.replace(oldFilePath, newFilePath)
                        attList.append(entry)
                        logName += 'OK %s\n' % entry
                        
                    lineReplacement += stringToSearch[:firstIndex] + insert
                    stringToSearch = stringToSearch[lastIndex:]
                else:
                    lineReplacement += stringToSearch
                    stringToSearch = ''

            print(lineReplacement, end='')
    return logName

# searches a line as many times as needed for an internal link
# uses itemIn to find the replacement link
def linkSearch(line, itemList, jsonToParse, currDir):
    stringToSearch = line
    lineReplacement = ''
    while len(stringToSearch) > 0:
        linkRefSearch1 = '(?<!!)\[(!\[.+\]\([-./\+\w ]+\)?)\]\((?!http)([-./\+\w]*)(#?)([-./\+\w]*?)\)'
        linkRefSearch2 = '(?<!!)\[(!\[\]\([-./\+\w ]+\)?)\]\((?!http)([-./\+\w]*)(#?)([-./\+\w]*?)\)'
        linkRefSearch3 = '(?<!!)\[([^!].*?)\]\((?!http)([-./\+\w]*)(#?)([-./\+\w]*?)\)'
        searchRes1 = re.search(linkRefSearch1,stringToSearch)
        searchRes2 = re.search(linkRefSearch2,stringToSearch)
        searchRes3 = re.search(linkRefSearch3,stringToSearch)
        #if there's a match to the strict pattern
        if searchRes1 or searchRes2 or searchRes3 != None:
            matched = ''
            insert = ''

            if searchRes1 != None:
                matched = searchRes1
            elif searchRes2 != None:
                matched = searchRes2
            elif searchRes3 != None:
                matched = searchRes3

            firstIndex = matched.start()
            lastIndex = matched.end()
            linkToReplace = matched.group(2)
            if len(linkToReplace) > 0:
                findUrl = itemIn("url", linkToReplace, itemList, jsonToParse, currDir)
                if findUrl != None:
                    insert = '[' + matched.group(1) + ']' + '(' + findUrl["url"].replace('//', '/') + matched.group(3) + matched.group(4) + ')'
                else:
                    insert = matched.group()
            else:
                insert = matched.group()

            lineReplacement += stringToSearch[:firstIndex] + insert
            stringToSearch = stringToSearch[lastIndex:]
        else:
            lineReplacement += stringToSearch
            stringToSearch = ''

    return lineReplacement

# moves attachment files to new locations and changes references to them in files
#only works for clean references, nothing above dir where the md file is
def linkReformat(itemList, name, jsonToParse):
    logName = str()
    #go through .md file line by line
    with fileinput.input(os.path.join(dirpath, name), inplace=True, backup='', encoding="utf-8") as file:
        for line in file:
            result = linkSearch(line,itemList,jsonToParse,dirpath)
            print(result, end='')
    return logName

# JSON parsing
print("Started Reading JSON file")
with open(jsonToParse, "r") as read_file:
    #initial list of menu items, kept so we can debug 
    menuItems = json.load(read_file)
    #completely detatched copy of menuItems
    myList = copy.deepcopy(menuItems)

    #first loop to grab all items and create separate lists
    for item in myList:
        # grabs item that has a category tag as parent and adds to childrenOfCategories list
        if "c" in item:
            childrenOfCategories.append(item)
        # grabs item that has a parent tag, puts into parent list and adds to childrenOfParents list
        elif "p" in item:
            childrenOfParents.append(item)
            parents.append(item["p"])
        # grabs baseparent of all entries in json
        elif "m" in item:
            baseParent = item
        # grabs non baseParent index files - currently only category files
        elif item["i"] == "index":
            categories += '%s\n' % item["t"]
            catList.append(item)
            parents.append(item["t"])
        # grabs all categories and adds to catList and parents list
        else:
            categories += '%s\n' % item["t"]
            catList.append(item)
            parents.append(item["i"])

    #hardcopy of childrenOfParents list, original gets changed with every item update
    childrenOfParentsCopy = copy.deepcopy(childrenOfParents)

    #loop again to sort directory of each item
    for item in myList:
        #if item is not a parent to any page, it won't be _index, won't get a directory named after it
        if item["i"] not in parents:
            item["newDir"] = "/"
        #if it is a parent, it will be turned into _index and get a directory named after it
        else:
            item["newDir"] = "/" + item["i"] + "/"
            item["indexFlag"] = "true"
        #checks if item has a parent
        if "p" in item:
            parentChecker = nextItem("i", item["p"], item["u"], childrenOfParentsCopy)
            #as long as item has a parent
            while parentChecker != None:
                #add parent name to dir path
                item["newDir"] = "/" + parentChecker["i"] + item["newDir"]
                #set parent
                item["p"] = parentChecker["p"]
                #grabs next parent, if there is one
                parentChecker = nextItem("i", item["p"], item["u"], childrenOfParentsCopy)
            #checks if the next parent is a child of a category
            childOfCategoryChecker = nextItem("i", item["p"], item["u"], childrenOfCategories)
            #if next parent is a child of a category
            if childOfCategoryChecker != None:
                #set parent to child of category
                item["p"] = childOfCategoryChecker["i"]
                #add child category name to dir path
                item["newDir"] = "/" + childOfCategoryChecker["i"] + item["newDir"]
            #checks if the next parent is a category
            categoryChecker = nextItem("t", childOfCategoryChecker["c"], childOfCategoryChecker["u"], catList)
            #if next parent is a category
            if categoryChecker != None:
                #for category items that are named index
                if categoryChecker["i"] == "index":
                    indexCat = categoryChecker["d"][len(baseParent["u"]):]
                    #set parent to category
                    item["p"] = indexCat
                    #add base directory and category to dir path
                    item["newDir"] = baseParent["u"] + indexCat + item["newDir"]
                else:
                    #set parent to category
                    item["p"] = categoryChecker["i"]
                    #add base directory and category to dir path
                    item["newDir"] = baseParent["u"] + categoryChecker["i"] + item["newDir"]
        #checks if item has a category as parent (for items with only category parents)
        elif "c" in item:
            categoryChecker = nextItem("t", item["c"], item["u"], catList)
            #if next parent is a category
            if categoryChecker != None:
                #for category items that are named index
                if categoryChecker["i"] == "index":
                    indexCat = categoryChecker["d"][len(baseParent["u"]):]
                    #set parent to category
                    item["p"] = indexCat
                    #add base directory and category to dir path
                    item["newDir"] = categoryChecker["d"] + item["newDir"]
                else:
                    #set parent to category
                    item["p"] = categoryChecker["i"]
                    #add base directory and category to dir path
                    item["newDir"] = baseParent["u"] + categoryChecker["i"] + item["newDir"]
        #checks if item is baseParent
        elif "m" in item:
            #set dir path
            item["newDir"] = baseParent["u"]
            #add indexFlag
            item["indexFlag"] = "true"
        #for categories that are already index files
        elif item["t"] in parents:
            item["newDir"] = item["d"]
            item["indexFlag"] = "true"
        #for categories
        else:
            #set dir path for categories
            item["newDir"] = baseParent["u"] + item["i"] + "/"

        #save items to results
        results += '%s\n' % item

#prep baseParent directory to compare
dirBaseParent = '.' + baseParent["u"].replace('/', os.sep)
dirBaseParentClean = dirBaseParent[:-1]



with open("urlLog.json", "r") as urlLog:
    urlList = json.load(urlLog)

#for all files in dir path
for dirpath, dirnames, allfiles in os.walk(topdir):
    for name in allfiles:
        #if name is lowercase with extension .md & path is same as baseParent
        #second check is used to exclude files outside of baseParent
        if name.lower().endswith(exten) and (dirpath[:len(dirBaseParentClean)] == dirBaseParentClean):
            #matches next item by name
            #makes sure it's right item name by comparing initial directory
            #with current directory of name file
            #there can't be 2 files in the same initial dir with the same name
            itemGrab = nextItemWithDirCheck("i", name[:-(len(exten))], dirpath, myList)
            att = ''
            #if the name exists in myList
            if itemGrab != None:
                #reverse / to \ in path
                altPath = itemGrab["newDir"].replace('/', os.sep)
                newDir = startDir + 'en\\docs' + altPath
                #make all levels of directories between supplied path of itemGrab and starting directory
                os.makedirs(newDir, exist_ok=True)
                linkReformat(urlList, name, jsonToParse)
                #if file has indexFlag
                if "indexFlag" in itemGrab:
                    #move file and rename to _index.md
                    os.replace(startDir + dirpath + '\\' + name, newDir + '\\_index.md')
                    att = attachmentChangeMove((startDir + dirpath), newDir, itemGrab["newDir"], '_index.md')
                else:
                    #move file
                    os.replace(startDir + dirpath + '\\' + name, newDir + name)
                    att = attachmentChangeMove((startDir + dirpath), newDir, itemGrab["newDir"], name)
                attItems += att
        #for moving of any txt files, like MAPPING
        elif (name == "_MAPPING.txt") and (dirpath[:len(dirBaseParentClean)] == dirBaseParentClean):
            os.makedirs(startDir + 'en\\docs' + dirpath, exist_ok=True)
            os.replace(startDir + dirpath + '\\' + name, startDir + 'en\\docs' + dirpath + '\\' + name)

#for all files in dir path
for dirpath, dirnames, allfiles in os.walk(topdir):
    for name in allfiles:
        #moves any '.pptx','.xls','.xlsm','.xlsx','.jar' or '.json' attachment to static\attachments
        #separated into another full walk through dirs, to rule out moving files before a reference for them gets picked up in the first walk
        if (name.lower().endswith(('.pptx','.xls','.xlsm','.xlsx','.jar','.json','.msd','.xml','.xsd','.mpk','.docx','.doc','.txt','.mp4','.pdf','.wsdl')) and (dirpath[:len(dirBaseParentClean)] == dirBaseParentClean)):
            os.makedirs(startDir.replace('content\\', '') + 'static\\attachments' + dirpath.replace('attachments', ''), exist_ok=True)
            os.replace(startDir + dirpath + '\\' + name, startDir.replace('content\\', '') + 'static\\attachments' + dirpath.replace('attachments', '') + '\\' + name)

#last run through for attachments, to go through leftover list, for attachments outside of .md directory
for entry in attLeftover:
    with fileinput.input(os.path.join(entry["path"], entry["file"]), inplace=True, backup='', encoding="utf-8") as file:
        for line in file:
            if entry["line No."] == fileinput.filelineno():
                attNameSearch = '(?<=\]\().*?attachments/([-./\+\w]*?)([-.\+\w= ]*)\)'
                oldAttDir = ''
                lineReplacement = ''
                stringToSearch = line
                while len(stringToSearch) > 0:
                    matched = re.search(attNameSearch,stringToSearch)
                    
                    #if there's a match on the specified line continue to change reference
                    if matched != None:
                        firstIndex = matched.start()
                        lastIndex = matched.end()
                        attItems += 'NO %s\n' % entry
                        insert = ''
                        for attItem in attList:
                            if attItem["match"] in matched.group():
                                newRef = attItem["newInsert"]
                                insert = newRef
                                attItems += 'OK %s\n' % entry
                                break
                            else:
                                insert = matched.group()
                        lineReplacement += stringToSearch[:firstIndex] + insert
                        stringToSearch = stringToSearch[lastIndex:]
                    #otherwise add to json-att.log list
                    else:
                        attItems += 'NO %s\n' % entry
                        lineReplacement += stringToSearch
                        stringToSearch = ''
                line = lineReplacement
            print(line, end='')

# What will be logged
logname = baseParent["u"].strip("/") + '-json-log.log'
catName = baseParent["u"].strip("/") + '-json-cat.log'
attName = baseParent["u"].strip("/") + '-json-att.log'

# Write results to logfile
with open(logname, 'w') as logfile:
    logfile.write(results)
#with open(catName, 'w') as catfile:
    #catfile.write(categories)
with open(attName, 'w') as attfile:
    attfile.write("FS - result of full search for any attachments reference in (), needs manual editing\nRP - will repeat search, file probably moved already\nOK - reference updated and file moved\nNO - matched in 1st loop, no match in 2nd, needs manual editing\n")
    attfile.write(attItems)