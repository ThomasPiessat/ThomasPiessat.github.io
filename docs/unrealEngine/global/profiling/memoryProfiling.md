---
prev:
  text: 'Profiling'
  link: '/UnrealEngine/global/profiling/profiling'
---
# Memory profiling

## Memory Insight
In Program argument (Rider/VS) add 
This will enable MemoryInsight
```sh
-trace=default,bookmark,loadtime,memory -tracehost=127.0.0.1 -llm
```

## Memory Report
In Console Command in Unreal Engine
```sh
memreport -full
```
The memreport will be saved under **YourProject/Saved/Profiling/MemReports/**