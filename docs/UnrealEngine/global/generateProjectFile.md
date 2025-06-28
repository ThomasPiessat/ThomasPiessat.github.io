# Generate Project File

[Download GenerateFiles.bat](/downloads/GenerateFiles.bat)

::: danger UPDATE FILE
Update the project path and the engine path
:::

```sh
@echo off
SET DEFAULT_ROOT=C:
SET CURRENT=%~dp0

SET "UNREAL_FOLDER="
SET "UNREAL_VERSION=UE_5.5"

REM Searching Unreal Engine Folders
if not defined UNREAL_FOLDER (
    echo Unreal Engine was not found 

    if exist "%DEFAULT_ROOT%\Program Files\Epic Games\%UNREAL_VERSION%" (
    set UNREAL_FOLDER=%DEFAULT_ROOT%\Program Files\Epic Games\%UNREAL_VERSION%
    )

    if not defined UNREAL_FOLDER (
        echo Unreal Engine was not found im %DEFAULT_ROOT%\Program Files.
        pause
        exit 1
    ) else (
        echo Unreal Engine found
    )
) else (
    echo Unreal Engine found
    )
) 

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
```
