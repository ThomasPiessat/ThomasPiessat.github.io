# Generate Project File

::: danger UPDATE FILE
Update the project path and the engine path
:::

```sh
@echo off
SET ProjectPath=C:\Path\To\Your\Project\

echo Deleting intermediate folders...
rmdir /S /Q %ProjectPath%Intermediate

echo Deleting saved folders...
rmdir /S /Q %ProjectPath%Saved

echo Deleting derived data cache...
rmdir /S /Q %ProjectPath%DerivedDataCache

echo Deleting config files...
del /Q %ProjectPath%Config\DefaultEditorPerProjectUserSettings.ini
del /Q %ProjectPath%Config\DefaultGame.ini
del /Q %ProjectPath%Config\DefaultInput.ini
del /Q %ProjectPath%Config\DefaultEngine.ini
del /Q %ProjectPath%Config\DefaultGameUserSettings.ini
del /Q %ProjectPath%Config\DefaultEditor.ini
del /Q %ProjectPath%Config\DefaultEditorUserSettings.ini

echo Deleting Visual Studio files...
del /S /Q %ProjectPath%*.sln
del /S /Q %ProjectPath%*.vcxproj*
del /S /Q %ProjectPath%*.opensdf
del /S /Q %ProjectPath%*.sdf

echo Deleting generated project files...
rmdir /S /Q %ProjectPath%Binaries
rmdir /S /Q %ProjectPath%Intermediate
rmdir /S /Q %ProjectPath%Plugins
rmdir /S /Q %ProjectPath%Saved
rmdir /S /Q %ProjectPath%DerivedDataCache

echo Project cleanup complete!

Engine/Binaries/DotNET/UnrealBuildTool.exe -projectfiles -project="C:\Path\To\Your\Project\YourProject.uproject" -game -engine

echo Project file generated!
pause
```
