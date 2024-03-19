# Pointers

Pointers play a crucial role in memory management, serving as variables that hold the address of another variable and enabling the manipulation of memory addresses. They offer direct access to memory, facilitating more efficient data handling. Additionally, pointers enable the return of multiple values from functions, contribute to memory space conservation, and enhance execution speed by directly accessing memory locations during data manipulation. They can reference the same memory space from different locations and assist in dynamic memory allocation and deallocation, highlighting their importance.

<img src="/img/GeneralProg/Pointers/pointerVariableDef.png" alt="Pointer Variable Definition"> 

## Pointer Data Types

<img src="/img/GeneralProg/Pointers/pointerDataTypes.png" alt="Pointer Data Types"> 

## Initialize Pointers In C

```cpp
int a = 10;     
int *ptr;       //pointer declaration
ptr = &a;       //pointer initialization with int variable a 
```

Once a pointer is declared, it’s crucial to initialize it before using it in a program. Pointer initialization involves assigning the address of a variable to the pointer variable. In the ‘C’ language, the address operator “&” is employed to find the address of a variable.

<img src="/img/GeneralProg/Pointers/pointer.png" alt="Pointer"> 

<img src="/img/GeneralProg/Pointers/pointerAllocation.png" alt="Pointer Allocation"> 

The compiler will always reserve 8 bytes for the pointer variable irrespective of their pointer data type. The pointer data type doesn’t control the memory size of the pointer variable. The pointer data type decides the behavior of the operations carried out on the pointer variable.

Operations : read, write, increment, decrement
```cpp
//read operation on adress variable yields 1 byte of data
char* address = (char*) 0x0007FF8E3C3824

//read operation on adress variable yields 4 byte of data
int* address = (int*) 0x0007FF8E3C3824

//read operation on adress variable yields 8 byte of data
long long int* address = (long long int*) 0x0007FF8E3C3824
```

## Dereferencing the pointer to read data

```cpp
//1 byte of data is read from pointer and stored in "data" variable
char data = *address;
```

```* — “Value at Address” operator```

```& — “Address of” operator ```

## Writing operation on a pointer

```cpp
//dereferencing a pointer to write data
*address1 = 0x89;
```
<img src="/img/GeneralProg/Pointers/writingOperation.png" alt="Writing Operation"> 

## How is Pointer used in embedded programming?

- Pointers allow direct access to memory locations, facilitating efficient manipulation of data. In embedded systems with limited resources, direct memory manipulation can be more efficient than using higher-level abstractions.
- Pointers are essential for managing dynamically allocated memory, allowing for efficient use of resources.
- Pointers can be used to access and manipulate registers, allowing interaction with various peripherals such as GPIO
- Pointers are used to work with structures and dynamic data structures like linked lists. This allows for the creation of flexible and extensible data structures, even in resource-constrained environments.

## Shared Pointer:

A `std::shared_ptr` is a smart pointer that retains shared ownership of an object through a pointer. Multiple `shared_ptr` instances can share ownership of the same object. The object is deleted when the last `shared_ptr` pointing to it is destroyed or reset.

Example:
```cpp
#include <memory>

int main() {
    std::shared_ptr<int> sharedPtr = std::make_shared<int>(42);
    std::shared_ptr<int> anotherSharedPtr = sharedPtr;  // Shared ownership

    // When both sharedPtr and anotherSharedPtr go out of scope, the object is deleted.
    return 0;
}
``` 

## Weak Pointer:

A `std::weak_ptr` is a smart pointer that doesn't participate in ownership. It is used to break circular references in situations where a `shared_ptr` might create a cycle. A weak_ptr is often used in conjunction with `shared_ptr`.

Example:
```cpp
#include <memory>

int main() {
    std::shared_ptr<int> sharedPtr = std::make_shared<int>(42);
    std::weak_ptr<int> weakPtr = sharedPtr;  // Does not increase the reference count

    // Use weakPtr to create a shared_ptr temporarily
    if (std::shared_ptr<int> tempSharedPtr = weakPtr.lock()) {
        // Use tempSharedPtr
    }

    // No need to explicitly release the object; it will be released when sharedPtr is out of scope.
    return 0;
}
```

## Soft Pointer:

A soft pointer is not a standard C++ type, but it is used in some programming languages. In the context of garbage collection, a soft reference allows the garbage collector to collect the object, but it may keep the object alive if there's enough memory available. In C++, `std::weak_ptr` serves a similar purpose.