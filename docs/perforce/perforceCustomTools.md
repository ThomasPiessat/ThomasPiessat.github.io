## P4V Custom Tools

You can add custom tools to extend the P4V interface. It’s available under the Tools menu:


## Creating a Basic Tool

The most basic thing we can do is call CMD. Create a new tool in the dropdown:

Add a call to C:\Windows\System32\cmd.exe using the /C param. Here we simply echo “foobar”.

Once added, it becomes available under the Tools menu:

And the boring result:

## Calling P4 Commands

A slightly more useful tool would be to show the download size of a depot:

You can then right-click a depot to execute the tool:

Which currently outputs:

//depot/main/UE5/... 503455 files 1.8T bytes

Here is a list of additional argument tokens you can pass:

## Importing/Exporting Tools

We can export tools as XML to share with others.