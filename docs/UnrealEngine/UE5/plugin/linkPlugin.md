---
prev:
  text: 'Plugin'
  link: '/UnrealEngine/UE5/Plugin/Plugin'
---
## Link UE5 plugin

### Quick Summary
| Command	| Type	       | Description                                                                | 
| --------- | :----------: | -------------------------------------------------------------------------: |
|mklink /D	|Symbolic Link | Like a shortcut — works across drives, can point to non-existent targets.  |
|mklink /J	|Junction	   | Like a hard link — only works with directories and only on the same drive. |


### Symbolic link (can cross drives):
```cmd
mklink /D "D:\MyGame\Plugins\MyPlugin" "E:\PluginRepo"
```

### Junction (must be on same drive):
```cmd
mklink /J "D:\MyGame\Plugins\MyPlugin" "D:\PluginRepo"
```

### If you try /J across drives, you'll get:
```cmd
Cannot create junction for D:\MyGame\Plugins\MyPlugin
The system cannot move the file to a different disk drive.
```