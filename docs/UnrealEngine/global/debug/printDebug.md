# Print Debug in UE4
```cpp
// https://wiki.unrealengine.com/Logs,_Printing_Messages_To_Yourself_During_Runtime#Related_Tutorial
GEngine-&gt;AddOnScreenDebugMessage(-1, 5.f, FColor::White, TEXT("This message will appear on the screen!"))
```

# Writing Logs in Unreal Engine
# Logging using UE_LOG
```cpp
UE_LOG(LogTemp, Warning, TEXT("Warning Text"));
```

# Formatting Examples Quick Reference
## Logging an FString
```cpp
UE_LOG(LogTemp, Warning, TEXT("The Actor's name is %s"), *YourActor-&gt;GetName());
```

## Logging a Bool
```cpp
UE_LOG(LogTemp, Warning, TEXT("The boolean value is %s"), ( bYourBool ? TEXT("true") : TEXT("false") ));
```

## Logging an Integer
```cpp
UE_LOG(LogTemp, Warning, TEXT("The integer value is: %d"), YourInteger);
```

## Logging a Float
```cpp
UE_LOG(LogTemp, Warning, TEXT("The float value is: %f"), YourFloat);
```

## Logging an FVector
```cpp
UE_LOG(LogTemp, Warning, TEXT("The vector value is: %s"), *YourVector.ToString());
```

## Logging with Multiple Specifiers
```cpp
UE_LOG(LogTemp, Warning, TEXT("Current values are: vector %s, float %f, and integer %d"
```

# Logging using UE_LOGFMT
::: warning
This macro is introduced with Unreal Engine 5.2 and may not be available in earlier revisions of the engine.
In order to utilize UE_LOGFMT you will need to #include "Logging/StructuredLog.h" either in your current file or in a linked file.
:::

Experienced Unreal Engine developers will be familiar with the UE_LOG macro, and in particular some of its quirks.

UE_LOG is extremely verbose, requiring the developer to constantly wrap log text in the TEXT macro.
UE_LOG is also incapable of printing basic types, such as Booleans, or FStrings, Unreal's standard String type.
UE_LOG requires awareness of types when printing different variables such as float, integer, booleans, strings.

The new UE_LOGFMT macro helps to alleviate many of these issues. At its most simple, UE_LOGFMT can be utilized in the following way:

```cpp
UE_LOGFMT(LogTemp, Log, "This message will print to my log");
```
When printing variables to log, UE_LOGFMT provides a cleaner and more consistent syntax. Like so:
```cpp
FString Name("SomeName");
int32 Value = 999;
UE_LOGFMT(LogTemp, Log, "Printing my Name {0} with Value {1}", Name, Value);
```

UE_LOGFMT accepts parameters in two ways:

## Positional Parameters
The field values must exactly match the fields referenced by the log statement.
```cpp
UE_LOGFMT(LogCore, Warning, "Loading '{0}' failed with error {1}", Package-&gt;GetName(), ErrorCode);
```

In this example, the first variable encountered in the log statement ({0}) is replaced by the value of Package-&gt;GetName().
The second variable ({1}) is replaced by ErrorCode.

The ordering of Package-&gt;GetName and ErrorCode in this example is implicitly important to deducing the values replaced in the log statement.

## Named Parameters
The fields must contain every field referenced by Format. Order is irrelevant and extra fields are permitted.
```cpp
UE_LOGFMT(LogCore, Warning, "Loading '{Name}' failed with error {Error}", ("Error", ErrorCode), ("Name", Package-&gt;GetName()), ("Flags", LoadFlags));
```
In this example, the first variable encountered in the log statement ({Name}) is replaced by the value bundled with the ("Name", ...) identifier.
The second variable ({Error}) is replaced by the value bundled with the ("Error", ...) identifier.

The following table lists all available verbosity levels, from lowest verbosity to highest:

| Verbosity Level |	Printed in Console? |	Printed in Editor's Log? |	Notes                                           |
| --------------- | :-----------------: | :----------------------: | -----------------------------------------------: |
| Fatal	          | Yes	                | N/A	                     | Crashes the session, even if logging is disabled |
| Error	          | Yes	                | Yes	                     | Log text is coloured red                         |
| Warning	        | Yes	                | Yes	                     | Log text is coloured yellow                      |
| Display         | Yes	                | Yes	                     | Log text is coloured grey                        |
| Log	            | No	                | Yes	                     | Log text is coloured grey                        |
| Verbose	        | No	                | No	                     |                                                  |
| VeryVerbose	    | No	                | No                       |                                                  |
