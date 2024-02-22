"""
removeUnusedAttachments.py goes through all .md files to make a list of attachment links.
"""

import re
import logging
import pathlib

# Generic walk function for crawling through a directory
def dirWalk(start, globPattern="**/*"):
    dirList = list(start.glob(globPattern))
    return dirList

# Create log file so we can check out the list of attachments later
logging.basicConfig(filename='attachmentlistlog.log', filemode='w', format='%(message)s')

# Grab content directory
startDir = "content/en/docs/"
# Define the start directory object
start = pathlib.Path(startDir)

# Create an empty list to help with parsing data
attachmentList = [] 

# Walk through all directories and files to find .md files and create a list of them
dirList_1 = dirWalk(start, "**/*.md")
# Walk through all files in directory
for dirListItem in dirList_1:
    # Relative file path that includes name of file
    relFilePath = dirListItem.relative_to(start) #os.path.relpath(filePath, startDir) was what we had before
    # Pattern to find any /attachments/ followed by either ) or "
    fullAttachmentRefSearch = '/attachments/([-./\+\w= ]*)?(?:\)|")'
    # Opens Markdown file and goes through every line
    with open(dirListItem, mode='r', encoding="utf-8") as mdFile:
        for line in mdFile:
            fullSearch = re.findall(fullAttachmentRefSearch,line)
            if fullSearch != []:
                for searchitem in fullSearch:
                    # Creates a dictionary for file with attachments
                    itemDict = {"File path": relFilePath, "File name": dirListItem.name, "Attachment Link": searchitem}
                    # Appends each dictionary to attachmentList
                    attachmentList.append(itemDict)                    
logging.warning(attachmentList)

# Grab attachment directory
attachmentDir = "static/attachments/"
# Define the attachment directory object
attachment_start = pathlib.Path(attachmentDir)

# Walk through all directories and files and create a list, then check that they're in the attachmentList
dirList_2 = dirWalk(attachment_start, "**/*.*")
# For a file in dirList_2, mark that it should be deleted by default
for file in dirList_2:
    deleteFlag = True
    # fullSearch returns a list, so we need to pull things (items) out of it
    for item in attachmentList:
        inList = item["Attachment Link"]
        # If there's something in the attachment list that's also in dirList2, then we want to keep it
        if file.name in inList:
            deleteFlag = False
            break
    # Delete files that are in dirList2 and not in the attachment list
    if deleteFlag is True:
        # Make sure that it is not a directory
        if pathlib.Path.is_file(file):
            pathlib.Path.unlink(file)
