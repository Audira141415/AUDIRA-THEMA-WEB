@echo off
title Push AUDIRA-THEMA-WEB to GitHub

echo =======================================================
echo 🚀 AUDIRA-THEMA-WEB GitHub Auto-Push Script
echo =======================================================
echo.

:: Parameter commit message (default if not provided)
set "commit_msg=%~1"
if "%commit_msg%"=="" set "commit_msg=Production Ready: Premium Theme Enhancements and Auto-Fixer"

echo [1/4] Staging all files...
git add .

echo [2/4] Committing changes with message: "%commit_msg%"
git commit -m "%commit_msg%"

:: Set branch to main
git branch -M main

:: Check if remote 'origin' exists, if not add it
git remote -v | findstr "origin" >nul
if errorlevel 1 (
    echo [3/4] Adding remote repository...
    git remote add origin https://github.com/Audira141415/AUDIRA-THEMA-WEB.git
) else (
    echo [3/4] Remote origin already configured.
)

echo [4/4] Pushing to GitHub...
git push -u origin main

echo.
echo =======================================================
echo ✅ Push Complete!
echo You can check your repository at:
echo https://github.com/Audira141415/AUDIRA-THEMA-WEB
echo =======================================================
pause
