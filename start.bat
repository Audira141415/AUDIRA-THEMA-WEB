@echo off
title Start AUDIRA-THEMA-WEB
echo =======================================================
echo 🚀 Starting AUDIRA-THEMA-WEB...
echo =======================================================
echo.
echo Opening browser to http://localhost:3000 ...
start "" "http://localhost:3000"
echo.
echo Running static server on port 3000 using 'npx serve'...
npx serve -l 3000
pause
