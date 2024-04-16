# Property Declaration


```cpp
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "MyActor Properties", meta = (DisplayName = "Properties/MyFloatVariable", ClampMin = "0.0", ClampMax = "100.0", UIMin = "0.0", UIMax = "100.0"))
float MyFloatVariable; // Example variable declaration with metadata for clamping and UI range
```

```cpp
 UFUNCTION(BlueprintCallable, Category = "MyActor Functions", meta = (Keywords = "MyActor Custom Function"))
    void MyFunction(); // Example function declaration with metadata for Blueprint keywords
```

| Property Tag          |      Effect      |
| --------------------- | ---------------: |
| AdvancedDisplay       | The property will be placed in the advanced (dropdown) section of any panel where it appears.
| BlueprintAssignable   |     
| BlueprintCallable     | 
| BlueprintGetter=GetterFunctionName | 
| BlueprintReadOnly     | 
| BlueprintReadWrite    | 
| BlueprintSetter=SetterFunctionName | 
| Category=""           | 
| Config                | 
| EditAnywhere          | 
| Localized             | 
| Native                | 
| NotReplicated         | 
| Replicated            | 
| ReplicatedUsing=FunctionName  | 
| RepRetry              | 
| SaveGame              | 
| SerializeText         | 
| SkipSerialization     | 
| SimpleDisplay         | 
| VisibleAnywhere       | 
| VisibleDefaultsOnly   | 
| VisibleInstanceOnly   | 
|                       | 
