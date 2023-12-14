@echo off
SET ProjectPath=D:\UE5_Projects\Sandbox

REM Clean .vs folder
if exist "%projectPath%\.vs" (
    echo Cleaning .vs folder...
    rmdir /s /q "%projectPath%\.vs"
)

REM Clean Intermediate folder
if exist "%projectPath%\Intermediate" (
    echo Cleaning Intermediate folder...
    rmdir /s /q "%projectPath%\Intermediate"
)

REM Clean DerivedDataCache folder
if exist "%projectPath%\DerivedDataCache" (
    echo Cleaning DerivedDataCache folder...
    rmdir /s /q "%projectPath%\DerivedDataCache"
)

REM Delete .sln file
if exist "%projectPath%\*.sln" (
	echo Deleting .sln files...
	del /q "%projectPath%\*.sln"
)

echo Project cleanup complete!

D:/UE_Engines/UE_5.1/Engine/Binaries/DotNET/AutomationTool/UnrealBuildTool.exe -projectfiles -project="D:\UE5_Projects\Sandbox\Sandbox.uproject" -game -engine
pause