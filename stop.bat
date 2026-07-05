@echo off
title Stop AUDIRA-THEMA-WEB
echo =======================================================
echo 🛑 Stopping AUDIRA-THEMA-WEB (Port 3000)...
echo =======================================================
echo.

set "PORT=3000"
set "FOUND="

:: Find the PID running on the specified port
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :%PORT% ^| findstr LISTENING') do (
    set "PID=%%a"
    set "FOUND=1"
)

if defined FOUND (
    echo Process with PID %PID% found running on port %PORT%.
    echo Terminating process %PID%...
    taskkill /F /PID %PID%
    if errorlevel 0 (
        echo.
        echo ✅ Successfully stopped application on port %PORT%.
    ) else (
        echo ❌ Failed to stop process %PID%. You may need to run this script as Administrator.
    )
) else (
    echo No process was found running on port %PORT%.
    echo.
    echo ✅ Port %PORT% is already clear!
)

echo.
echo =======================================================
pause
