# Dotnet Install
```sh
dotnet tool install --global dotnet-ef
```

# Build a project and its dependencies:
```sh
dotnet build
```

# Build a project and its dependencies using Release configuration:
```sh
dotnet build --configuration Release		
```

# Build a project and its dependencies for a specific runtime (in this example, Ubuntu 18.04):
```sh		
dotnet build --runtime ubuntu.18.04-x64		
```

# Build the project and use the specified NuGet package source during the restore operation (.NET Core 2.0 SDK and later versions):
```sh
dotnet build --source c:\packages\mypackages		
```

# Build the project and set version 1.2.3.4 as a build parameter using the -p MSBuild option:
```sh	
dotnet build -p:Version=1.2.3.4		
```

# Create a solution file
The following example creates a .sln file in the current folder, with the specified file name:
```sh	
dotnet new sln --name MySolution	
```