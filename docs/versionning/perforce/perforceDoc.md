## P4ENVIRO vs P4CONFIG

On Windows ```p4 set``` puts vars in the registry. It's also possible to store variables in a file and point to it using ```P4ENVIRO``` or ```P4CONFIG```

The only difference between the two is how files are found.```P4ENVIRO``` requires a file in a specific location:
```P4ENVIRO=F:\path\to\file\p4config.txt```

WhileP4CONFIGwill search parent directories (starting from CWD) for the file:
```P4CONFIG=p4config.txt```

If your current working directory has no p4config.txt file then a p4 set on the CMD will return:
```P4CONFIG=p4config.txt (set) (config 'noconfig')```

Which can confuse some people into thinking they don’t have it properly setup. However, if you switch to a workspace folder where the current or parent directories have the p4config.txt file, it will pick up and display the proper settings.

In summary, ```P4ENVIRO``` is used for centralized management of settings across workspaces for one project at a time. With ```P4CONFIG ```you can have settings files across workspaces for multiple projects. This makes switching p4 vars between projects easier.