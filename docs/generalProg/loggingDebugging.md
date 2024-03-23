# Complex Logging and Debugging in C++

## Logging Libraries
In C++20, the ```<source_location>``` header was added alongside std::source_location. This provides information about source code, which can be used in your logs. Look at the following example:

```cpp
#include <iostream>
#include <source_location>

void logMessage(const std::string& message, const std::source_location& loc = std::source_location::current()) 
{
  std::cout << "Message: " << message << std::endl;
  std::cout << "File: " << loc.file_name() << std::endl;
  std::cout << "Line: " << loc.line() << std::endl;
  std::cout << "Function: " << loc.function_name() << std::endl;
  std::cout << "Column: " << loc.column() << std::endl;
}

int main() 
{
  logMessage("Hello world!");
  return 0;
}
```
Here, the ```logMessage``` function takes in a log message string and a ```std::source_location``` as parameters, defaulting to using the current source location (```std::source_location::current()```). The output of the example above is shown below:

```txt
Message: Hello world!
File: example.cpp
Line: 13
Function: main
Column: 3
```
Additionally, C++20 also introduce the ```<format>``` header for simplified formatting of print statements, similar to printf in C. Below is a basic example:

```cpp
int main() {
  int a = 5;
  double b = 10.1234;
  std::cout << std::format("a = {}, b = {:.2f}", a, b) << std::endl;
  return 0;
}
```
```txt
a = 5, b = 10.12
```

## Logging Strategies

For the most effective logs, you must establish a set of logging levels. At the bare minimum, you should have an ERROR level and an INFO level. However, most logging libraries will contain a few more levels, shown below in order of most to least granularity:
```txt
VERBOSE
DEBUG
INFO
WARNING
ERROR
FATAL
```
- FATAL log messages are uncommon and represent catastrophic errors.
- ERROR messages represent errors that cause some functionality to fail but aren’t as severe as FATAL messages.
- WARNING messages represent unexpected behavior that does not cause functionality to fail.
- INFO messages are very common and are used to log when an event happens or to log any other useful information. These are very common.
- DEBUG messages are used when events occur that are useful for software debugging and where finer granularity is needed.
- VERBOSE messages are reserved for the finest granular messages that can be ignored in most cases but may be useful in extensive debugging sessions.