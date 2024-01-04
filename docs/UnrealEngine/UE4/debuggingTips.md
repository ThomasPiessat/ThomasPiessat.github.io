# Debugging Tips
## Compile all blueprints
```sh
- "Engine\Binaries\Win64\UnrealEditor-cmd.exe -run=CompileAllBlueprints"
- Add this to print to text file ">F:\MyLog.txt | type F:\MyLog.txt"
```

## Shadow cache stats
```sh
- r.ShaderPrint 1 & r.Shadow.VirtualShowStats 2
```

## Activate the VSYNC
Prevents tearing of the image but costs fps and causes input latency.
```sh
r.VSync = 0
```

## Enabling Dynamic Resolution
https://docs.unrealengine.com/4.27/en-US/RenderingAndGraphics/DynamicResolution/
Dynamic Resolution adjusts the primary screen percentage according to the previous frames' GPU workload. The resolution adjusts (as needed) based on a heuristic, for example, when there are too many objects on the screen, or if there is an expensive effect that suddenly enters the frame. The GPU rendering time will increase, and the resolution of the screen will be lowered to maintain the targeted frame rate.
At Runtime
```cpp
GEngine->GetDynamicResolutionStatus()->SetEnabled(true);
```
Controlling Dynamic Resolution With Operation Mode
```sh
r.DynamicRes.OperationMode
```

## Disable WPO invalidating shadow cache
```sh
- Global: r.Shadow.Virtual.Cache.MaxMaterialPositionInvalidationRange
- Per foliage instance: Foliage Mode-> Instance Settings -> World Position Offset Disable Distance
```

## Draw mesh bounds causing cache invalidations
```sh
- r.Shadow.Virtual.Cache.DeformableMeshesInvalidate 1
```

## Handy visualization modes
```sh
- ViewMode -> Nanite Visualization -> Evaluate WPO
- ViewMode -> Virtual Shadow Map -> Cached Page
- Show -> Visualize -> Draw Only Geometry Causing VSM Invalidation
```