@echo off
rem Nach dem Einarbeiten: alles pruefen und die App neu bauen. Danach Lernstudio.html mit hochladen.
chcp 65001 >nul
cd /d "%~dp0"
echo Ordner: %cd%
echo.
echo === Inhalt pruefen ===
call npm.cmd run --silent pruefen || goto fehler
echo.
echo === Tests ===
call npm.cmd test || goto fehler
echo.
echo === Pruefungssaetze ===
call npm.cmd run --silent saetze || goto fehler
echo.
echo === App bauen ===
call npm.cmd run --silent build || goto fehler
echo.
echo Fertig. Lernstudio.html ist neu gebaut. Jetzt wie gewohnt hochladen, mit Lernstudio.html.
goto ende

:fehler
echo.
echo Abgebrochen. Bitte die Meldung oben an Claude schicken.

:ende
echo.
pause
