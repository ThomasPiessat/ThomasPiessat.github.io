# C++ Performance Optimization: Best Practices

## Use the Right Data Structures
Choosing the appropriate data structures can have a massive impact on performance. Use ```std::vector``` for dynamic arrays, ```std::map``` or ```std::unordered_map``` for key-value pairs and ```std::set``` or ```std::unordered_set``` for unique values. Avoid linked lists when you need random access, as they can lead to poor cache performance.

Example: Using ```std::vector``` for Dynamic Arrays
```cpp
#include <vector>

int main() 
{
  std::vector<int> numbers;
  numbers.reserve(5);  // avoiding multi-copy when the capacity is full (allocate required size once)
  
  for(const int& i: {1, 2, 3, 4, 5})
    numbers.emplace_back(i); // use emplace_back instead of push_back to construct objects directly in the container, avoiding unnecessary copying or moving.
}
```

## Avoid Unnecessary Copying
Copying objects can be expensive. Use references or move semantics (```std::move```) when passing and returning objects to minimize unnecessary copying. If you use ```const std::string&``` then try to change it ```std::string_view``` in some cases, it will have a better performance.

Example: Avoiding Unnecessary Copying
```cpp
// with std::string
std::string prefix(const std::string& str) 
{
  if(str.length() >= 5) 
  {
    // extract a part of string
    auto substr = str.substr(1,4);
    // substr is a std::string
    // ...
    return substr;
 }
 return {};
}

// with std::string_view
std::string_view prefix(std::string_view str) 
{
  if(str.length() >= 5) 
  {
    // extract a part of string
    auto substr = str.substr(1,4);
    // substr is a std::string_view
    // ...
    return substr;
 }
 return {};
}
```

## Prefer Stack Allocation
Allocate objects on the stack whenever possible, as stack allocation is faster than heap allocation. Use dynamic allocation (e.g., ```new``` and ```delete```) only when the object's lifetime extends beyond the current scope.

Example: Stack Allocation
```cpp
int main() 
{
    int value = 42; // Stack allocation
    // ...
    return 0; // Automatically deallocated
}
```
However, it's important to note that stack allocation has limitations:

- Fixed Size: Stack memory is of fixed size and is limited. This means you can't allocate very large objects or a dynamic number of objects on the stack.
- Risk of Stack Overflow: Excessive stack memory usage can lead to a stack overflow if the available stack space is exhausted. Heap memory doesn't have this limitation.

## Profile Your Code
Profiling tools can help identify performance bottlenecks. Use tools like ```gprof``` (GNU Profiler) or platform-specific profilers to analyze your code's execution time and memory usage.

Steps:
- Identify what areas of code are taking how much time
- See if you can use better data structures/ algorithms to make things faster

## Minimize Memory Allocation
Excessive memory allocation and deallocation can lead to performance issues. Reuse objects when possible and consider using object pools for frequently created and destroyed objects.

Example: Object Pool
```cpp
#include <iostream>
#include <vector>

template <typename T>
class ObjectPool 
{
public:
    using Ptr = std::unique_ptr<T>;

    ObjectPool(std::size_t size) 
    {
        objects_.reserve(size);
        for (std::size_t i = 0; i < size; ++i) 
        {
            objects_.push_back(std::make_unique<T>());
        }
    }

    Ptr acquire() 
    {
        if (objects_.empty()) 
        {
            return nullptr; // No available objects
        }
        auto obj = std::move(objects_.back());
        objects_.pop_back();
        return obj;
    }

    void release(Ptr obj) 
    {
        objects_.push_back(std::move(obj));
    }

private:
    std::vector<std::unique_ptr<T>> objects_;
};

// Example usage
class MyObject 
{
public:
    void performTask() 
    {
        std::cout << "MyObject is performing a task." << std::endl;
    }
};

int main() 
{
    ObjectPool<MyObject> pool(5); // Create an object pool with 5 objects

    // Acquire objects from the pool and use them
    ObjectPool<MyObject>::Ptr obj1 = pool.acquire();
    ObjectPool<MyObject>::Ptr obj2 = pool.acquire();

    if (obj1 && obj2) 
    {
        obj1->performTask();
        obj2->performTask();
    }

    // Release objects back to the pool
    pool.release(std::move(obj1));
    pool.release(std::move(obj2));

    return 0;
}
```

## Optimize Loops
Loops are often the core of algorithms. Optimize loops by minimizing loop overhead, reducing unnecessary calculations, and using the right loop constructs (e.g., range-based loops).

Example: Range-based Loop
```cpp
std::vector<int> numbers = {1, 2, 3, 4, 5};
int sum = 0;
for (const int& num : numbers) 
{
    sum += num;
}
```

## Compiler Optimization Flags
Modern C++ compilers provide optimization flags (e.g., ```-O2```, ```-O3```) that can significantly improve code performance. Use these flags during compilation to enable various optimization techniques.
```cpp
g++ -O2 -o my_program my_program.cpp
```
GCC (GNU Compiler Collection):
- ```O1```: Enables basic optimization. This includes optimizations such as common subexpression elimination and instruction scheduling. It's a good balance between optimization and compilation time.
- ```O2```: Enables more aggressive optimization, including inlining functions, loop optimizations, and better code scheduling. It provides a significant performance boost.
- ```O3```: Enables even more aggressive optimizations. It can lead to faster code but may increase compilation time and the size of the executable.

## Reduce Function Calls
Minimize function calls within tight loops. Inlining functions (e.g., using ```inline``` or compiler optimizations) can eliminate function call overhead.

Example: Inlining Functions
```cpp
inline int square(int x) 
{
    return x * x;
}

int main() 
{
    int result = square(5); // Inlined function
    return 0;
}
```

## Cache Awareness
Optimize for cache efficiency by minimizing cache misses. Access data sequentially, avoid non-contiguous memory accesses, and use data structures that promote cache locality.

## Benchmark and Iterate
Benchmark your code after each optimization step to measure the impact of changes accurately. Iteratively apply optimizations, focusing on the most significant bottlenecks.
```cpp
#include <iostream>
#include <chrono>

int main() 
{
    auto start = std::chrono::high_resolution_clock::now();

    // Code to benchmark
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Execution time: " << duration.count() << " seconds\n";

    return 0;
}
```