## Print Debug in UE4
```c++
// https://wiki.unrealengine.com/Logs,_Printing_Messages_To_Yourself_During_Runtime#Related_Tutorial
#define print(text) if (GEngine) GEngine->AddOnScreenDebugMessage(-1, 1.5, FColor::White,text)
```
[DebuggingTips](/UE4/debuggingTips)
[Profiling](/UE4/profiling)