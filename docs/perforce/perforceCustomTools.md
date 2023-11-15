## P4V Custom Tools

You can add custom tools to extend the P4V interface. It’s available under the Tools menu:

<img src="/img/Versionning/Perforce/CustomTool.png" alt="Custom Tool"> 

## Creating a Basic Tool

The most basic thing we can do is call ```CMD```. Create a new tool in the dropdown:

<img src="/img/Versionning/Perforce/CreatingTool.png" alt="Creating Tool"> 

Add a call to ```C:\Windows\System32\cmd.exe``` using the ```/C``` param. Here we simply echo “foobar”.

<img src="/img/Versionning/Perforce/EditTool.png" alt="Edit Tool"> 

Once added, it becomes available under the Tools menu:

<img src="/img/Versionning/Perforce/MenuTool.png" alt="Menu Tool">

And the boring result:

<img src="/img/Versionning/Perforce/BoringResult.png" alt="Boring Result">

## Calling P4 Commands

A slightly more useful tool would be to show the download size of a depot:

<img src="/img/Versionning/Perforce/CallingP4Commands.png" alt="Calling P4 Commands">

You can then right-click a depot to execute the tool:

<img src="/img/Versionning/Perforce/ExecuteTool.png" alt="Execute Tool">

Which currently outputs:

<img src="/img/Versionning/Perforce/Output.png" alt="Output">

Here is a list of additional argument tokens you can pass:

## Importing/Exporting Tools

We can export tools as XML to share with others.