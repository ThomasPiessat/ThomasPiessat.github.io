# Garbage Collection
## Raw C & C++ Heap Allocation 
Manual Memory Management

<img src="/img/UE/GarbageCollection/HeapAllocation.png" alt="Heap Allocation"> 

## Reference Counting (Smart Pointers)
Automatic Memory Management

<img src="/img/UE/GarbageCollection/ReferenceCounting.png" alt="Reference Counting"> 

## Usefull GC Commands

- Useful for debugging crashes and stress tests
```sh
gc.ForceCollectGarbageEveryFrame
```

- Logs all UObjects in the Root Set
```sh
ListRootSetObjects
```

- Logs unreleased garbage objects
Set to 2 to do dump a sample
```sh
gc.GarbageReferenceTrackingEnabled
```

- Small summery of cluster
```sh
gc.ListClusters
```