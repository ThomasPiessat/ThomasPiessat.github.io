# Pointers

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