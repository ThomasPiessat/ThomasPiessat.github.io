---
prev:
  text: 'Windows'
  link: './windows'
---

# How to find any library (.lib / .dll) on Windows (PowerShell)

This section explains how to locate any dependency installed on your system
(e.g., spdlog.lib, zlib.dll, vulkan-1.lib, etc.)

Useful when:
- resolving build conflicts
- debugging linker errors
- ensuring only one version of a library is installed
- validating which lib your project uses (vcpkg, Conan, system, custom folder)

## Find a library anywhere on your machine
```powershell
Get-ChildItem -Path C:\ -Filter spdlog.lib -Recurse -ErrorAction SilentlyContinue
```

## Search inside MSVC toolchain
```powershell
Get-ChildItem "C:\Program Files\Microsoft Visual Studio" -Recurse -Include *spdlog*
```