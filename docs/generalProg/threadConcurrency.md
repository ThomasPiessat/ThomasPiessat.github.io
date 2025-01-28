# Multithreading and Concurrency

## Understanding Multithreading in C++
Multithreading allows a program to perform multiple tasks concurrently within the same process space. It involves creating multiple threads, with each thread executing part of the program code. In C++, threads are represented by the ```std::thread``` class, part of the ```<thread>``` header introduced in C++11.

## Creating and Managing Threads
**Creating a Thread:** To create a thread, instantiate an std::thread object and pass the function to be executed by the thread as an argument.
```cpp
void task1() {
     // Task code here 
}

std::thread t1(task1); // Creates a thread executing task1
```
**Joining Threads:** To ensure a thread has completed execution before continuing, use the join() method. Joining a thread blocks the calling thread until the thread represented by the std::thread object completes.
```cpp
t1.join(); // Main thread waits for t1 to finish
```
**Detaching Threads:** Threads can also be detached, allowing them to run independently from the main thread. A detached thread releases its resources automatically upon completion.
```cpp
t1.detach(); // t1 will run independently
```

## Concurrency vs. Parallelism
While often used interchangeably, concurrency and parallelism have distinct meanings in the context of programming. Concurrency refers to the ability of a program to deal with multiple tasks at once, which might not necessarily be executing simultaneously. Parallelism, on the other hand, involves performing multiple operations truly in parallel, leveraging multi-core processors.

### Synchronization and Data Safety
Managing access to shared data is a critical aspect of multithreaded programming to prevent data races and ensure thread safety.

**Mutexes:** Mutexes (mutual exclusions) are used to protect shared data by ensuring that only one thread can access the data at a time.
```cpp
std::mutex mtx;
mtx.lock(); // Lock the mutex
 // Critical section
mtx.unlock(); // Unlock the mutex
```

**Lock Guards:** C++ introduces std::lock_guard, a scope-based mutex locker, ensuring that a mutex is properly released when the control leaves the scope, thus preventing deadlocks.
```cpp
{
     std::lock_guard<std::mutex> guard(mtx);

     // Critical section 
}
// Mutex is automatically released here
```