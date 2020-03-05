SETLOCAL

SET PATH=%PATH%;%~dp0\bin\node
SET PATH=%PATH%;%~dp0\bin\hugo

npm.cmd run docker
pause