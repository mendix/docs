SETLOCAL

REM removed extra slash after ~dp0 as was getting path with ...\\bin...

SET PATH=%PATH%;%~dp0bin\node
SET PATH=%PATH%;%~dp0bin\hugo

npm.cmd install
pause