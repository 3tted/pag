@echo off
REM Sube los cambios del proyecto a GitHub. Doble clic para usarlo.
REM Si GitHub pide iniciar sesion, se abrira el navegador: solo pulsa "Authorize".
cd /d "%~dp0"

git add -A
git diff --cached --quiet
if %errorlevel%==0 (
  echo No hay cambios nuevos que subir.
  goto push
)

set "MSG="
set /p MSG="Describe el cambio (Enter = 'Actualizacion'): "
if "%MSG%"=="" set "MSG=Actualizacion"
git commit -m "%MSG%"
if errorlevel 1 goto error

:push
git push
if errorlevel 1 goto error
echo.
echo Listo: tus cambios estan en GitHub.
pause
exit /b 0

:error
echo.
echo Algo fallo. Revisa el mensaje de arriba.
pause
exit /b 1
