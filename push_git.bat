@echo off
cd /d %~dp0
git init
git add .
git commit -m "Mise à jour du projet"
git branch -M main
git remote add origin https://github.com/Mx855/DVBv1.git
git push -u origin main
pause
