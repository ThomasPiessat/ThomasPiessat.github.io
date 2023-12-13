## No Symbols have been loaded for this document
Go to the ```Modules``` window (```Debug``` > ```Windows``` > ```Modules```) when debugging and check whether your module is loaded.

* If your module is loaded, check the ```Symbol Status``` column to see whether symbols have been loaded.
⋅⋅* If symbols aren't loaded, check the symbol status to diagnose the issue. From the context menu on a module in the Modules window, select Symbol Load Information... to see where the debugger looked to try and load symbols. For more information about loading symbols, see Specify Symbol (.pdb) and Source Files.
⋅⋅* If symbols are loaded, the PDB doesn't contain information about your source files. A few possible causes are:
⋅⋅⋅⋅* If your source files were recently added, confirm that an up-to-date version of the module is being loaded.
⋅⋅⋅⋅* It's possible to create stripped PDBs using the /PDBSTRIPPED linker option. Stripped PDBs don't contain source file information. Confirm you're working with a full PDB and not a stripped PDB.
⋅⋅⋅⋅* The PDB file is partially corrupted. Delete the file and run a clean build of the module to try to resolve the issue.
* If your module isn't loaded, check the following to find the cause:
⋅⋅* Confirm that you're debugging the right process.
⋅⋅* Check to see that you're debugging the right code. You can find out what type of code the debugger is configured to debug in the Processes window (```Debug``` > ```Windows``` > ```Processes```). For example, if you're trying to debug C# code, confirm that your debugger is configured for the appropriate type and version of .NET (for example, Managed (v4*) versus Managed (v2*/v3*) versus Managed (CoreCLR)).