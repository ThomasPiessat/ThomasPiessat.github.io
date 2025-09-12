---
prev:
  text: 'Profiling'
  link: '/UnrealEngine/global/profiling/profiling'
---
# Memory profiling

In Program argument (Rider/VS) add 
This will enable MemoryInsight
```sh
-trace=default,bookmark,loadtime,memory -tracehost=127.0.0.1 -llm
```