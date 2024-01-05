---
prev:
  text: 'UE5'
  link: '/UnrealEngine/UE5/UE5'
---
## Build UE5 plugin

```sh
"D:\UEngines\UnrealEngine\Engine\Build\BatchFiles\RunUAT.bat" BuildPlugin -Plugin="D:\Plugins\ProjectForPlugin\Plugins\QORPOUEFRM\QORPOUEFRM.uplugin" -Configuration=DebugGame+Development+Shipping -EditorConfig=DebugGameEditor+DevelopmentEditor -TargetPlatforms=Win64 -Package="D:\Plugins\Packaged\ver3\QORPOUEFRM" -Rocket -VS2022
```

## How To Package And Sell Binary Plugins For UE5
Plugin Development | Unreal Build Tool | Unreal Engine
You can package and distribute your unreal engine plugins as binary files only and not have to share your source files. There are a few advantages and disadvantages of both approaches which we’ll touch on in this tutorial.

### The Process To Package Binary Plugins
We assume you have a working plugin that you would like to package and strip the source files from.

### Prepare Modules For Precompilation
AS OF UE 5.03 , YOU CAN SKIP THIS STEP.

Modules are automatically pre-compiled by default for the platform you’re using. Eg xWin64.


The first thing we want to do is make sure the modules in our plugin are precompiled when packaging.

To do this, go to each module’s Build.cs and add the following line
```sh
PrecompileForTargets = PrecompileTargetsType.Any;
```

If you understand what this line does you can modify it to target a specific platform.
This line makes sure we are precompiling our modules so that our users won’t have to compile them on their end. We can just deliver them the precompiled files to use.(The binaries).

### Package the Plugin using the editor
The next step is to package the plugin normally using the editor by going to the plugin window and using the Package button that sits below your plugin. You can also package from the command line. Just make sure the packaging is successful then move on to step 3.

### Set The Modules To Use PreCompiled versions
In the packaged plugin, Go to each module’s build.cs and set
```sh
bUsePrecompiled=true;
```
You can remove every line in the Build.cs though and leave only the bUsePreCompiled=true line.

This will instruct UBT to load the precompiled files we just made in the client machine, instead of attempting to build them. If you don’t do this UBT will discard your precompiled files and attempt to rebuild(which will fail without source.)

If you choose to clean up the Build.cs, make sure you leave ALL the “Add dependencies” lines intact.

### Delete The Private Source Files
Go to the packaged plugin’s folder, and then go inside the source folder. From here you need to decide which header files your user’s should get access to when working in c++.

```Important: You need the build.cs. Even For BP Access Only Plugins. You can delete the .h and cpp files only.```

If your plugin is not meant to be interfaced with in c++ at ALL, you can delete all source files. 

If you want them them to use some classes from c++ leave only the header files of that class.

So inside your Source folder, Go into the module folder and delete all .cpp and all header files you’d like to protect.

The organization of files is key, see our Plugin Development Course for Unreal Engine to see how to smartly use the Public and Private folders to hide some of your sensitive source files.

That’s it for the source folder. Go back to the main plugin folder and go to Binaries.

### Delete Unnecessary Binary Files
Inside the PluginName/Binaries folder you can delete all files ending in .pdb. PDB files are used in debugging during development. To better protect your source we advice you delete these.

### Delete Unnecessary Intermediate Files
Inside the PluginName/Intermediate/Build/Win64…

You will find both the UnrealEditor and UnrealGame Folders. 

Inside both folders, you may have the “Development”, “Shipping” and “Inc” folders. 

The files inside the UnrealEditor Folder are used during development for C++ projects only, and those inside UnrealGame are used in shipped games. Hence, both folders and their files need to stay IF your users will be accessing them in C++ projects and shipping with your plugin. The only exception is for PRIVATE editor modules. You can delete the .libs of editor modules in both folders in this case.

If your plugin is NOT to be shipped, and it’s not to be accessed from C++ at all, You can delete the entire “Intermediate Folder”. This will disable both shipping and access from C++ and make the plugin work only in the editor. 

 

That’s it you can distribute your binary-only plugin and users will be able to develop and ship with it without exposing your source files.

### Set Plugin To Installed Mode
Finally, go to the plugin’s .uplugin and add the line :

“Installed”: true,


This will tell UE5 that this plugin has been installed once the user installs it and it will use this information to categorize it properly.

### Disable Shipping With Your Plugin(For Demos/Trials)
To disable shipping with your plugin, you should instead delete the “UnrealGame” Folder and leave the “UnrealEditor” Folder in Step 6 above. The “UnrealGame” folder contains the “Shipping” Folder from step 6. This folder is critical to your users when shipping their projects with your plugin. If you delete it, The plugin will still work in the editor, but packaging projects using it will fail. 

NB: The Build.Cs files inside the Source Folder are required so we can’t delete them. BUT you can remove all the custom code in the build.cs like dependencies and leave the barebones build.cs file. It will still work fine.

Sometimes you may wish for developers to try your plugin, But disable the ability for them to ship their projects with your plugin without buying a license. This model is great for offering free trials for developers to test if your plugin is a good fit for their project. Once they like it, they can buy the plugin with the “Shipping” config, which will allow them to ship their game. OR they can get the source version. So you get offer 3 versions: The Trial, The Binary(with shipping), And The Source.

### Binary Vs Full Source Plugins
First, let’s acknowledge this is a controversial topic and a lot of developers have different opinions on it. With most leaning to “just give us the source”. Which we understand, cause the source is critical to making customizations to your plugin AND also it’s a bargain, we get the source files to your awesome plugin at a fraction of the price.

You may be thinking the solution is to to raise the price of your source version so you get paid fairly for your hard work…:

Here are a few things to consider when pricing your unreal engine source-based plugin.

The majority of your buyers are likely indie developers with limited budgets. Expensive plugins won’t convert well. They want to buy your plugin, it’s just too expensive.
You can get undercut by another developer/competitor. Another developer may just get access to your source and develop a similar plugin and then undercut your original price sometimes by 80%. 
The moment your source files are out there, It’s only a matter of time before your plugin becomes obsolete. Even without Source files. Never tell yourself there’s no other developer that can write the same feature/code. Always be aware of the realistic time your plugin can generate revenue. 
But with that said, Developers having access to full source files of your plugin is almost a must for non-indie developers. What’s the solution?

We think a solution to this problem is to offer both at different pricing:

Offer an affordable solution, the binary version, and the source version that doesn’t leave you feeling like you’re selling yourself short. 