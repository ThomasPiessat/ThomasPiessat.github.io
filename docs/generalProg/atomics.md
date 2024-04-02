# Atomics in C++ — What is a std::atomic?

The radioactive part of C++, std::atomic was added in C++11 as a way to declare an atomic variable — a variable whose value changes atomically, which means there is a guarantee that no other processes/threads would see any intermediary state.

Since C++11 introduced std::thread as a standard language-provided way to spawn threads, it had to provide means to achieve well-defined behaviour when multiple threads read or write to the same object. Therefore, it added thread synchronisation primitives such as std::mutex and atomic variables in std::atomic. We will be looking at the latter today, where we will discuss the concept of atomicity and what data types could be made atomic in C++.

#### What is an atomic operation?
An atomic operation is an operation guaranteed to execute as a single unified transaction.

When an atomic operation is executed on an object by a specific thread, no other threads can read or modify the object while the atomic operation is in progress. This means that other threads will only see the object before or after the operation — no intermediary state.

Let’s take a look at some code to understand this.

```cpp
#include <iostream>
#include <thread>

int main()
{
    int sum = 0;
   
    auto f = [&sum]()
    {
        for(int i = 0; i < 1000000; i++)
        {
            sum += 1;
        }
    };

    std::thread t1(f);
    std::thread t2(f);

    t1.join();
    t2.join();
   
    std::cout << sum << std::endl;

    return 0;
}
```
In this code, we are incrementing sum on two threads without any synchronisation between them. One could naively assume that we would always output 2000000, because two threads are each incrementing it 1000000 times. If we compile and run this code, we find out that this is not true.
```txt
$ g++ --version
g++ (GCC) 11.4.0

$ g++ -dumpmachine
x86_64-pc-cygwin

$ g++ nonatomic.cpp -o app

$ ./app
1508328

$ ./app
1096773

$ ./app
1303703
```

Each execution prints a different output. This is obviously undesirable, but what is exactly happening here?

When ```sum``` is incremented by one thread, the value will need to be read from memory, modified (incremented) and written back into memory. In other words, it’s a read-modify-write operation.

<img src="/img/GeneralProg/Atomics/non-atomically.png" alt="non-atomically">

Without any synchronisation, the two threads would read ```sum``` from memory as ```0```, increments, and write back ```1``` to memory. This means that whichever thread writes first will get its result stomped by the other thread.

This is known as a data race, which is undefined behaviour. Technically, anything could happen, including your program becoming sentient and colonising the human race. But in reality, as seen in our example, we may lose the result of some of the increments.