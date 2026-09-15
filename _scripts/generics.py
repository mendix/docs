"""
Module for generic functions that can be reused in other scripts
"""

import logging

# Walk through all directories and files of given directory
# globPattern can be used to specify file type, defualts to all directories and files
# Returns a list of path objects
def dirWalk(start, globPattern="**/*"):
    dirList = list(start.glob(globPattern))
    return dirList

# To setup multiple loggers
def initLogger(name, logFile, level=logging.WARNING):
    handler = logging.FileHandler(logFile)
    handler.setFormatter(logging.Formatter('%(message)s'))
    logger = logging.getLogger(name)
    logger.setLevel(level)
    logger.addHandler(handler)
    return logger