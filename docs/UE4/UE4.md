## Print Debug in UE4
```c++
// https://wiki.unrealengine.com/Logs,_Printing_Messages_To_Yourself_During_Runtime#Related_Tutorial
#define print(text) if (GEngine) GEngine->AddOnScreenDebugMessage(-1, 1.5, FColor::White,text)
```

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