@echo off
echo 正在启动本地服务器...
cd /d "%~dp0"
python -m http.server 8000
pause